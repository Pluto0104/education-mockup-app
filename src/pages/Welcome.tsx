import React from 'react';
import {Image, Text, View} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {useTailwind} from 'tailwind-rn';
import {RootStackParamList} from '../types/routes';
import Button from '../components/Button';
import Link from '../components/Link';
import WelcomeBgImage from '../../assets/images/welcome-bg.png';
import commonStyles from '../styles/commonStyles';

const Welcome = () => {
  const tw = useTailwind();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={tw('mt-4 flex-1 justify-between items-center')}>
      <View style={[commonStyles.gap8]}>
        <Image
          accessibilityLabel="Welcome Screen Background"
          source={WelcomeBgImage}
        />
        <View style={[commonStyles.gap4]}>
          <Text
            style={tw('font-["Exo-SemiBold"] text-center text-xl text-title')}>
            Let's find the "A" with us
          </Text>
          <Text style={tw('font-["Exo-Medium"] text-center text-lg')}>
            Please Sign in to view personalized
            {'\n'}
            recommendations
          </Text>
        </View>
      </View>
      <View style={[tw('px-16 w-full mb-16'), commonStyles.gap8]}>
        <Button onPress={() => navigation.navigate('SignUp')}>Sign Up</Button>
        <Link>Skip</Link>
      </View>
    </View>
  );
};

export default Welcome;
