import React, {ReactNode} from 'react';
import {Text, TextStyle, TouchableOpacity} from 'react-native';
import {useTailwind} from 'tailwind-rn';

interface LinkProps {
  children: ReactNode;
  onPress?: () => void;
  style?: TextStyle;
}

const Link: React.FC<LinkProps> = ({children, onPress, style}) => {
  const tw = useTailwind();
  return (
    <TouchableOpacity onPress={onPress}>
      <Text
        style={[
          tw('font-["Exo-Regular"] text-lg text-secondary text-center'),
          style,
        ]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Link;
