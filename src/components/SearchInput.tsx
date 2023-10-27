import React from 'react';
import {View, TextInput, ViewStyle, TouchableOpacity} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import SearchIcon from '../../assets/images/icon/search-icon.svg';
import commonStyles from '../styles/commonStyles';

interface SearchInputProps {
  style?: ViewStyle | ViewStyle[];
  value?: string;
  onPress: () => void;
  onChangeText?: (text: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  style,
  onPress,
  value,
  onChangeText,
}) => {
  const tw = useTailwind();
  return (
    <View
      style={[
        commonStyles.searchInputShadow,
        tw('flex-row items-center justify-center rounded-xl bg-white'),
        style,
      ]}>
      <TextInput
        placeholder="Search"
        value={value}
        onChangeText={onChangeText}
        style={tw('flex-1 px-5 py-3')}
      />
      <TouchableOpacity style={tw('mt-2')} onPress={onPress}>
        <SearchIcon />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
