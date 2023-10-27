import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import ArrowDownIcon from '../../assets/images/icon/arrow-down.svg';
import ArrowUpIcon from '../../assets/images/icon/arrow-up.svg';

interface AccordionSelectProps {
  open?: boolean;
  label: string;
  data: {label: string; icon: ImageSourcePropType; value: string}[];
  value?: string;
  onOpen?: (isOpen: boolean) => void;
  onChange?: (value: string) => void;
}

const AccordionSelect: React.FC<AccordionSelectProps> = ({
  open,
  label,
  data,
  value,
  onChange,
  onOpen,
}) => {
  const tw = useTailwind();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [selectedItem, setSelectedItem] = React.useState<string>();

  React.useEffect(() => {
    if (open !== undefined) {
      setIsOpen(open);
      if (!open) {
        setSelectedItem('');
      }
    }
  }, [open]);

  React.useEffect(() => {
    value !== undefined && setSelectedItem(value);
  }, [value]);

  const handlePress = () => {
    const newValue = !isOpen;
    onOpen && onOpen(newValue);
    setIsOpen(newValue);
  };

  const handlePressItem = (val: string) => {
    setSelectedItem(val);
    onChange && onChange(val);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={tw('bg-card rounded-lg px-2')}>
        <View style={tw('justify-between items-center flex-row h-16 px-2')}>
          <Text style={tw('font-["Exo-SemiBold"] text-primary text-lg')}>
            {label}
          </Text>
          {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </View>
        {isOpen && (
          <View style={tw('flex-wrap flex-row mb-2')}>
            {data.map((item, index) => (
              <View style={tw('basis-1/2')} key={`select-item-${index}`}>
                <TouchableOpacity
                  style={tw(
                    `p-4 m-2 rounded-lg ${
                      selectedItem === item.value
                        ? 'bg-secondary text-title'
                        : 'bg-default text-white'
                    }`,
                  )}
                  onPress={() => handlePressItem(item.value)}>
                  <View style={tw('flex-row items-center')}>
                    <Image
                      accessibilityLabel={`${item.label} Icon`}
                      source={item.icon}
                    />
                    <Text
                      style={tw(
                        `flex-1 font-["Exo-Medium"] text-center ${
                          selectedItem === item.value
                            ? 'text-white'
                            : 'text-title'
                        }`,
                      )}>
                      {item.label}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default AccordionSelect;
