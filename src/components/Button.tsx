import React from 'react';
import {TouchableOpacity, Text, ViewStyle} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import commonStyles from '../styles/commonStyles';

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onPress?: () => void;
  style?: ViewStyle; // Define style as a dictionary of strings
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  onPress,
  style,
}) => {
  const tw = useTailwind();
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        commonStyles.btnShadow,
        tw(
          'bg-secondary text-white p-4 items-center justify-center rounded-xl',
        ),
        style,
      ]}>
      <Text style={tw('font-["Exo-Bold"] text-white text-xl')}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
