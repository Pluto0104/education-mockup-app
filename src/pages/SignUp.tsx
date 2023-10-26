import React from 'react';
import {Image, Text, View} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {useTailwind} from 'tailwind-rn';
import {RootStackParamList} from '../types/routes';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import Link from '../components/Link';
import commonStyles from '../styles/commonStyles';
import SignUpBgImage from '../../assets/images/signup-bg.png';
import ScreenWrapper from '../components/ScreenWrapper';
import KeyboardHideWrapper from '../components/KeyboardHideWrapper';

const SignUp: React.FC = () => {
  const tw = useTailwind();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <ScreenWrapper>
      <KeyboardHideWrapper>
        <View style={tw('flex-1 justify-between items-center')}>
          <View style={tw('flex-1 justify-center items-center')}>
            <Image
              accessibilityLabel="SignUp Screen Background"
              source={SignUpBgImage}
            />
          </View>

          <View
            style={[
              commonStyles.gap13,
              tw('w-full justify-around items-center'),
            ]}>
            <View style={[commonStyles.gap5, tw('w-full px-8 justify-around')]}>
              <TextInput label="Name" placeholder="Your name" />
              <TextInput
                type="email"
                label="Email address"
                placeholder="name@example.com"
              />
              <TextInput
                type="password"
                label="Password"
                placeholder="********"
              />
            </View>
            <View style={[commonStyles.gap8, tw('px-20 mb-20 w-full')]}>
              <Button onPress={() => navigation.navigate('Grade')}>
                Sign Up
              </Button>
              <View style={tw('flex-row justify-center items-center')}>
                <Text
                  style={tw(
                    'font-["Exo-Regular"] text-lg text-primary text-center',
                  )}>
                  You have account?&nbsp;
                </Text>
                <Link onPress={() => navigation.navigate('SignIn')}>
                  Sign In
                </Link>
              </View>
            </View>
          </View>
        </View>
      </KeyboardHideWrapper>
    </ScreenWrapper>
  );
};

export default SignUp;
