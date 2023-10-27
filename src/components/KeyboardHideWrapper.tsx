import React from 'react';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';

const KeyboardHideWrapper: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default KeyboardHideWrapper;
