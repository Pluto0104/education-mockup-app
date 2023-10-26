import React from 'react';
import {
  TextInput as RNTextInput,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import commonStyles from '../styles/commonStyles';

interface TextInputProps {
  style?: TextStyle;
  label?: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  value?: string;
  type?: 'default' | 'password' | 'numeric' | 'email'; // Define the type prop
  containerStyle?: ViewStyle; // Define the containerStyle prop
}

const TextInput: React.FC<TextInputProps> = ({
  style,
  label,
  placeholder,
  onChangeText,
  value,
  type = 'default',
  containerStyle, // Include containerStyle prop
}) => {
  const tw = useTailwind();
  return (
    <View style={containerStyle}>
      <Text style={tw('font-["Exo-Regular"] text-primary')}>{label}</Text>
      <RNTextInput
        style={[commonStyles.textInputShadow, tw('rounded-lg bg-white'), style]}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={type === 'password'}
        keyboardType={
          type === 'numeric'
            ? 'numeric'
            : type === 'email'
            ? 'email-address'
            : 'default'
        }
      />
    </View>
  );
};

export default TextInput;
