import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndividualCard from '../listcards/individualcard/IndividualCard';
import IndexScreen from '../screens/IndexScreen';

const Stack = createStackNavigator();

const AppStack = ({ navigation }) => {
  console.log(navigation)
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

      </Stack.Navigator>
      <Stack.Screen
          name="MovieCard"
          component={IndividualCard}
          options={{ title: "Movie Item" }}
        ></Stack.Screen>

    </NavigationContainer>
  );
}

export default AppStack;