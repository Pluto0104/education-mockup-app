import React from 'react';
import {LayoutAnimation, Text, View, UIManager, Platform} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../types/routes';
import Button from '../components/Button';
import Link from '../components/Link';
import commonStyles from '../styles/commonStyles';
import AccordionSelect from '../components/AccordionSelect';
import ArtsIcon from '../../assets/images/icon/arts-icon.png';
import CommerceIcon from '../../assets/images/icon/commerce-icon.png';
import MathsIcon from '../../assets/images/icon/maths-icon.png';
import ScienceIcon from '../../assets/images/icon/science-icon.png';
import {GradeDataType} from '../types/grade';
import {useTailwind} from 'tailwind-rn';

const gradeData: GradeDataType[] = [
  {
    label: 'Grade 1 - 5',
    data: [
      {label: 'Arts', icon: ArtsIcon, value: 'arts'},
      {label: 'Commerce', icon: CommerceIcon, value: 'commerce'},
      {label: 'Maths', icon: MathsIcon, value: 'maths'},
      {label: 'Science', icon: ScienceIcon, value: 'science'},
    ],
  },
  {
    label: 'Grade 6 - 9',
    data: [
      {label: 'Arts', icon: ArtsIcon, value: 'arts'},
      {label: 'Commerce', icon: CommerceIcon, value: 'commerce'},
      {label: 'Maths', icon: MathsIcon, value: 'maths'},
      {label: 'Science', icon: ScienceIcon, value: 'science'},
    ],
  },
  {
    label: 'Grade 10 - 11',
    data: [
      {label: 'Arts', icon: ArtsIcon, value: 'arts'},
      {label: 'Commerce', icon: CommerceIcon, value: 'commerce'},
      {label: 'Maths', icon: MathsIcon, value: 'maths'},
      {label: 'Science', icon: ScienceIcon, value: 'science'},
    ],
  },
  {
    label: 'Grade 12 - 13',
    data: [
      {label: 'Arts', icon: ArtsIcon, value: 'arts'},
      {label: 'Commerce', icon: CommerceIcon, value: 'commerce'},
      {label: 'Maths', icon: MathsIcon, value: 'maths'},
      {label: 'Science', icon: ScienceIcon, value: 'science'},
    ],
  },
];

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Grade: React.FC = () => {
  const tw = useTailwind();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [selectedAccordion, setSelectedAccordion] = React.useState<
    number | undefined
  >();

  const handleAccordionSelect = (id: number) => (isOpen: boolean) => {
    LayoutAnimation.easeInEaseOut();
    isOpen && setSelectedAccordion(id);
  };

  return (
    <View style={tw('flex-1 justify-between items-center')}>
      <View style={[commonStyles.gap8, tw('flex-1 w-full px-8 mt-20')]}>
        <Text style={tw('text-2xl text-title font-["Exo-Bold"]')}>
          What's your grade?
        </Text>
        <View style={[commonStyles.gap4]}>
          {gradeData.map(({label, data}, index) => (
            <AccordionSelect
              key={`grade-item-${index}`}
              label={label}
              open={selectedAccordion === index}
              onOpen={handleAccordionSelect(index)}
              data={data}
            />
          ))}
        </View>
      </View>

      <View
        style={[commonStyles.gap13, tw('w-full justify-around items-center')]}>
        <View style={[commonStyles.gap8, tw('w-full mb-20 px-20')]}>
          <Button onPress={() => navigation.navigate('Province')}>Next</Button>
          <View style={tw('flex-row justify-center items-center')}>
            <Link onPress={() => navigation.navigate('SignIn')}>Skip</Link>
          </View>
        </View>
      </View>
    </View>
  );
};

export default React.memo(Grade);
