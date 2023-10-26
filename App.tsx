import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './src/types/routes';
import colors from './src/styles/colors';
import Welcome from './src/pages/Welcome';
import SignUp from './src/pages/SignUp';
import SignIn from './src/pages/SignIn';
import Grade from './src/pages/Grade';
import Province from './src/pages/Province';
import Dashboard from './src/pages/dashboard';

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: colors.appBg},
        }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Grade" component={Grade} />
        <Stack.Screen name="Province" component={Province} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
