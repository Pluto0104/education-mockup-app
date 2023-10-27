import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {useTailwind} from 'tailwind-rn';

const ScreenWrapper: React.FC<React.PropsWithChildren> = ({children}) => {
  const tw = useTailwind();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={tw('flex-1')}>
      {children}
    </KeyboardAvoidingView>
  );
};

export default ScreenWrapper;
