import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground } from 'react-native';
import StartGamesScreen from './screens/startGamesScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/gamesScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(selectedNumber){
    setUserNumber(selectedNumber);
  }

  let screen = <StartGamesScreen onGameStart={pickedNumberHandler}/>;

  if(userNumber){
    screen = <GameScreen userChoice={userNumber}/>;
  }

  return (
    <LinearGradient colors={["#4e0329",'#ddb52f']} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/images/background.png')} 
      resizeMode="cover" 
      style={styles.rootScreen}
      imageStyle={styles.backgroundImages}>
        {screen}
    </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1,
  },
  backgroundImages:{
    opacity:0.15,
  }
});

