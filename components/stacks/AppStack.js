import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndividualMovie from '../listcards/individualcard/IndividualMovie';
import IndividualTV from '../listcards/individualcard/IndividualTV';
import IndexScreen from '../screens/IndexScreen';

const Stack = createStackNavigator();

const AppStack = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Index'
          component={IndexScreen}
          options={{
            title: 'Movie App',
            headerStyle: {
              backgroundColor: '#2c3e50'
            },
            headerTitleStyle: {
              color: '#fff'
            }
          }} />

      <Stack.Screen
          name="IndividualMovie"
          component={IndividualMovie}
          options={{ title: "Movie Item" }}
        />
        <Stack.Screen
          name="IndividualTV"
          component={IndividualTV}
          options={{ title: "Movie Item" }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default AppStack;