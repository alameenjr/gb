import React from 'react';
import {} from 'react-native';
//import Expo from 'expo';
//import { createStackNavigator, TabNavigator} from 'react-navigation';
//import { createStackNavigator, StackNavigator} from 'react-navigation-stack';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import {StackNavigator } from 'react-navigation';
//import Inscription from './composants/Inscription';
import Accueil from './composants/Accueil';
//import LoginP from './composants/LoginP';
import OnePage from './composants/OnePage';

const Navigation = StackNavigator({
  One: { screen: OnePage },
  Acc: {screen: Accueil},
  }, {
    navigationOptions:{
      headerStyle:{
        //marginTop: Expo.Constants.statusBarHeight
      }
    }
});

export default class App extends React.Component{
  render(){
    return <Navigation/>;
      //<LoginP/>
      //<Accueil/>
      //<Inscription/>
      //<AppStackNavigation/>
      //<OnePage/>
      //<Tabs/>
  }
}


/*const Tabs = TabNavigator({
  OnePage: {screen: OnePage}

});

/*import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>{OnePage}</Stack.Navigator>
    </NavigationContainer>
  );
}*/

//export default App;