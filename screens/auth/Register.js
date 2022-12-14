

import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import auth from "@react-native-firebase/auth";
import { globalStyles } from "../../utils/globalStyles";
import firestore from "@react-native-firebase/firestore";

import storage from "@react-native-firebase/storage";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

const Register1 = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [displayPicture, setDisplayPicture] = useState();

  function onPickPicture() {
    launchImageLibrary({
      mediaType:'photo',
    },(data) => setDisplayPicture(data.assets[0].uri))

  }

  function onClickPicture() {
    launchCamera({
      mediaType:'photo',
    },(data) => setDisplayPicture(data.assets[0].uri))

  }
  

   async function onRegister(){
    if(!email && !password){
      return
    }
try{
  const { user: {uid} } = await auth().createUserWithEmailAndPassword(email,password)

  let downloadURL = null
  if(displayPicture){
    const spiltPath = displayPicture.split('/')
    const imageName = spiltPath[spiltPath.length -1]
    const reference = storage().ref(`${uid}/images/${imageName}`)
    const data = await reference.putFile(displayPicture)
    downloadURL = await storage().ref(data.metadata.fullPath).getDownloadURL()
  }
  firestore().collection('users')
  .doc(uid)
  .set({
    email,
    name,
    displayPicture: downloadURL

  })
  .then(() => console.log('Authentication done'))
}catch(error){
  console.log(error,"not done")
}
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: !displayPicture ? null : displayPicture }}
        style={styles.displayPicture}
      />
      <View style={styles.touchableContainer}>
        <TouchableOpacity onPress={onPickPicture}>
          <Text>Pick Picture</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onClickPicture}>
          <Text>Click Picture</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        value={name}
        placeholder="Name"
        style={globalStyles.primaryInput}
        onChangeText={(text) => setName(text)}
      />
        <TextInput
        value={email}
        placeholder="Email"
        style={globalStyles.primaryInput}
        onChangeText={(text) => setEmail(text)}
      />
        <TextInput
        value={password}
        placeholder="Password"
        style={globalStyles.primaryInput}
        onChangeText={(text) => setPassword(text)}
      />
      <Button 
      title="Register"
      onPress={onRegister}
      
      />
    </View>
  );
};

export default Register1;

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
    flex:1,
  },
  touchableContainer:{
    flexDirection:'row',
    justifyContent:"space-between",
    width:"50%",
  },
  displayPicture:{
    width:50,
    height:50,
    borderRadius:25,
    backgroundColor:"gray"
  }
});


