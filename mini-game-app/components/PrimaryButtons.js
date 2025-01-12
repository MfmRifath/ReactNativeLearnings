import { View, Text, StyleSheet, Pressable } from "react-native";

function PrimaryButtons({children, onPress}){
    
    return (
            <View style={styles.buttonOuterContainer}>
                <Pressable style={(pressed)=> pressed ? [styles.buttonInnerContainer,styles.pressed] :styles.buttonInnerContainer} onPress={onPress} android_ripple={{color:'#640233'}}>
                    <Text style={styles.buttontext}>{children}</Text>
                </Pressable>
            </View>
    );
}

export default PrimaryButtons;

const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius:28,
        margin:4,
        overflow:'hidden'
    },
buttonInnerContainer:{
    backgroundColor:'#72063c',
    
    paddingVertical:8,
    paddingHorizontal:16,
    elevation:2,
    

},
buttontext:{
    color:'white',
    fontSize:16,
    textAlign:'center',
},
pressed:{
    opacity:0.75,
}
});