import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import commonStyles from '../styles/commonStyles';

interface FilterListProps {
  label: string;
  data: string[];
  value?: string;
  onChange?: (value: string) => void;
}

const FilterList: React.FC<FilterListProps> = ({
  label,
  data,
  value,
  onChange,
}) => {
  const tw = useTailwind();
  const [selectedItem, setSelectedItem] = React.useState<string>(data[0]);

  React.useEffect(() => {
    value !== undefined && setSelectedItem(value);
  }, [value]);

  const handlePressItem = (val: string) => {
    setSelectedItem(val);
    onChange && onChange(val);
  };

  return (
    <View>
      <View style={tw('justify-between items-center flex-row mb-3 px-2')}>
        <Text
          style={[
            commonStyles.text2xs,
            tw('font-["Exo-SemiBold"] text-primary'),
          ]}>
          {label}
        </Text>
      </View>
      <View style={[commonStyles.gap2, tw('flex-wrap flex-row mb-2')]}>
        {data.map((item, index) => (
          <TouchableOpacity
            key={`select-item-${index}`}
            style={tw(
              `py-1 px-3 rounded-lg ${
                selectedItem === item ? 'bg-secondary' : 'bg-white'
              }`,
            )}
            onPress={() => handlePressItem(item)}>
            <Text
              style={tw(
                `font-["Roboto-Regular"] text-center rounded-lg ${
                  selectedItem === item ? 'text-white' : 'text-title'
                }`,
              )}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default React.memo(FilterList);
