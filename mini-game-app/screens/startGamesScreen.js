import { TextInput, View , StyleSheet} from "react-native";
import PrimaryButtons from "../components/PrimaryButtons";

function StartGamesScreen(){
    return (
        <View style={styles.inputContainer}>
           <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false} />
           <PrimaryButtons>Reset</PrimaryButtons>
            <PrimaryButtons>Confirm</PrimaryButtons>
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
    }
});