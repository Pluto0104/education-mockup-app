import React from 'react';
import {Image, Text, View} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {useTailwind} from 'tailwind-rn';
import {RootStackParamList} from '../types/routes';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import Link from '../components/Link';
import commonStyles from '../styles/commonStyles';
import SignInBgImage from '../../assets/images/signin-bg.png';
import ScreenWrapper from '../components/ScreenWrapper';
import KeyboardHideWrapper from '../components/KeyboardHideWrapper';

const SignIn: React.FC = () => {
  const tw = useTailwind();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <ScreenWrapper>
      <KeyboardHideWrapper>
        <View style={tw('flex-1 justify-between items-center')}>
          <View style={tw('flex-1 justify-center items-center')}>
            <Image
              accessibilityLabel="SignIn Screen Background"
              source={SignInBgImage}
            />
          </View>

          <View
            style={[
              commonStyles.gap13,
              tw('w-full justify-around items-center'),
            ]}>
            <View style={[commonStyles.gap5, tw('justify-around px-8 w-full')]}>
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
              <Button>Sign In</Button>
              <View style={tw('flex-row justify-center items-center')}>
                <Text
                  style={tw(
                    'font-["Exo-Regular"] text-lg text-primary text-center',
                  )}>
                  Don't have account?&nbsp;
                </Text>
                <Link onPress={() => navigation.navigate('SignUp')}>
                  Sign Up
                </Link>
              </View>
            </View>
          </View>
        </View>
      </KeyboardHideWrapper>
    </ScreenWrapper>
  );
};

export default SignIn;
