import { StyleSheet } from "react-native";
export const globalStyles = StyleSheet.create({
    primaryInput: {
        width: '80%',
        margin: 10,
        borderBottomWidth: 0.8,
        borderBottomColor: 'gray'
     },
     primaryContainer: {
        backgroundColor: 'white',
        flex: 1,
     },
     headingText: {
        fontSize: 32,
        fontFamily: 'Roboto-Regular',
        color: '#000'
     },
     primaryText: {
        fontSize: 22,
        fontFamily: 'Roboto-Regular',  
     },
     secondaryText: {
        fontSize: 18,
        fontFamily: 'Roboto-Regular',
        letterSpacing: 0.1,
     },
     primaryTouchableBtn: {
        padding: 10,
        backgroundColor: 'lightgray',
        borderRadius: 7,
        shadowColor: 'gray',
        shadowOffset: {
           width: 1,
           height: 2
        },
        shadowOpacity: 0.5,
        elevation: 5,
        backgroundColor: 'purple'
     },
     btnText: {
        fontFamily: 'Roboto-Regular',
        fontSize: 18,
        color: 'white',
        textAlign: 'center'
     },
     largeBtnText: {
        fontFamily: 'Roboto-Regular',
        fontSize: 22,
        color: 'purple',
        textAlign: 'center'
     }
})