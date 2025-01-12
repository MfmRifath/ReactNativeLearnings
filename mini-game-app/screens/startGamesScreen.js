import { TextInput, View , StyleSheet, Alert} from "react-native";
import PrimaryButtons from "../components/PrimaryButtons";
import React, { useState } from "react";

function StartGamesScreen({onGameStart}){
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(inputText){
        setEnteredNumber(inputText.replace(/[^0-9]/g,''));
    }

    function resetInputHandler(){
        setEnteredNumber('');
    }
    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('Invalid Number!','Number has to be a number between 1 and 99',[{text:'Okay',style:'destructive',onPress:resetInputHandler}]);
            return;
        }
        onGameStart(chosenNumber);
    }
    return (
        <View style={styles.inputContainer}>
           <TextInput 
           style={styles.numberInput} 
           maxLength={2}
            keyboardType="number-pad" 
            autoCapitalize="none" 
            autoCorrect={false} 
            onChangeText={numberInputHandler}
            value={enteredNumber}/>
           <View style={styles.buttonsContailer}>
            <View style={styles.buttonContailer}>
            <PrimaryButtons onPress={resetInputHandler}>Reset</PrimaryButtons>
            </View>
           <View style={styles.buttonContailer}>
           <PrimaryButtons onPress={confirmInputHandler}>Confirm</PrimaryButtons>
           </View>
           
           </View>
           
        </View>
    );
}

export default StartGamesScreen;
const styles = StyleSheet.create({
    inputContainer:{
        paddind:16,
        marginHorizontal:20,
        marginTop:100,
        backgroundColor: '#4e0329',
        borderRadius:10,
        elevation:5,
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        justifyContent:'center',
        alignItems:'center'
    },
    numberInput:{
    height:30,
    fontSize: 32,
    width: 50,
    borderBottomColor: '#ddb52f',
    borderBottomWidth:2,
    color:'#ddb52f',
    marginVertical: 8,
    fontWeight:'bold',
    textAlign:'center'
    },
    buttonsContailer:{
        flexDirection:'row',
        justifyContent:'center',
        
    },
    buttonContailer:{
        flex:1,
    },
});