import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {useTailwind} from 'tailwind-rn';
import {RootStackParamList} from '../types/routes';
import Button from '../components/Button';
import Link from '../components/Link';
import commonStyles from '../styles/commonStyles';

const provinceData: string[] = [
  'Central',
  'Eastern',
  'North Central',
  'Northern',
  'North Western',
  'Sabaragamuwa',
  'Southern',
  'Uva',
  'Western',
];

const Province: React.FC = () => {
  const tw = useTailwind();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [selectedProvince, setSelectedProvince] = React.useState<string>();

  const handlePressItem = (province: string) => {
    setSelectedProvince(province);
  };

  return (
    <View style={tw('flex-1 justify-between justify-center')}>
      <View style={[commonStyles.gap8, tw('flex-1 w-full px-8 mt-20')]}>
        <Text style={tw('font-["Exo-Bold"] text-2xl text-title')}>
          What's your province?
        </Text>
        <View style={[tw('bg-card rounded-lg px-2 pb-2')]}>
          <View style={tw('justify-between items-center flex-row px-4 h-16')}>
            <Text style={tw('font-["Exo-SemiBold"] text-lg text-primary')}>
              Provinces of Sri Lanka
            </Text>
          </View>
          <View style={tw('flex-wrap flex-row')}>
            {provinceData.map((item, index) => (
              <View key={`province-item-${index}`} style={tw('basis-6/12')}>
                <TouchableOpacity
                  style={tw(
                    `p-4 m-2 rounded-lg ${
                      selectedProvince === item
                        ? 'bg-secondary text-white'
                        : 'bg-default text-title'
                    }`,
                  )}
                  onPress={() => handlePressItem(item)}>
                  <View style={tw('flex-row items-center')}>
                    <Text
                      style={tw(
                        `flex-1 text-center font-["Exo-Medium"] ${
                          selectedProvince === item ? 'text-white' : ''
                        }`,
                      )}>
                      {item}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View
        style={[commonStyles.gap13, tw('w-full justify-around items-center')]}>
        <View style={[commonStyles.gap8, tw('px-20 mb-20 w-full')]}>
          <Button onPress={() => navigation.navigate('Dashboard')}>Next</Button>
          <View style={tw('flex-row justify-center items-center')}>
            <Link onPress={() => navigation.navigate('SignIn')}>Skip</Link>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Province;
