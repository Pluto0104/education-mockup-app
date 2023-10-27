import React from 'react';
import {
  Image,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import commonStyles from '../../styles/commonStyles';
import SearchInput from '../../components/SearchInput';
import MyAvatar from '../../../assets/images/person-1.png';
import TeacherAvatar1 from '../../../assets/images/person-2.png';
import TeacherAvatar2 from '../../../assets/images/person-3.png';
import TeacherAvatar3 from '../../../assets/images/person-4.png';
import SettingIcon from '../../../assets/images/icon/setting-icon.svg';
import FilterIcon from '../../../assets/images/icon/filter-icon.svg';
import VictoryCollegeImage from '../../../assets/images/victory-college.png';
import NewMontanaImage from '../../../assets/images/new-montana.png';
import SusipwanImage from '../../../assets/images/susipwan-institute.png';
import {TeacherDataType} from '../../types/teacher';
import {InstitutionDataType} from '../../types/institution';
import TeacherCard from '../../components/TeacherCard';
import InstitutionCard from '../../components/InstitutionCard';
import FilterList from '../../components/FilterList';
import KeyboardHideWrapper from '../../components/KeyboardHideWrapper';
import {ScrollView} from 'react-native-gesture-handler';
import {useTailwind} from 'tailwind-rn';

type TeacherFilterType = {
  area: string;
  subject: string;
};

// mock data for testing
const TEACHER_DATA: TeacherDataType[] = [
  {
    id: '0',
    avatar: TeacherAvatar1,
    name: 'Cassie Valdez',
    field: 'Biology',
  },
  {
    id: '1',
    avatar: TeacherAvatar2,
    name: 'Paul Simons',
    field: 'Chemistry',
  },
  {
    id: '2',
    avatar: TeacherAvatar3,
    name: 'Graham Osbor',
    field: 'Physics',
  },
];

const INSTITUTION_DATA: InstitutionDataType[] = [
  {
    id: '0',
    title: 'Victory College',
    rating: 4.5,
    ratingCount: 413,
    field: 'Bio Science',
    description:
      'Studying how CBD awareness and availability as it related to pain management alternatives.',
    image: VictoryCollegeImage,
  },
  {
    id: '1',
    title: 'New Montana',
    rating: 4.1,
    ratingCount: 354,
    field: 'Bio Science',
    description:
      'Montana Higher Educational Institute. Gampaha montana.gampaha@gmail.com',
    image: NewMontanaImage,
  },
  {
    id: '2',
    title: 'Susipwan Institute',
    rating: 3.0,
    ratingCount: 745,
    field: 'Bio Science',
    description:
      'This is a private higher education center which conducting classes for GCE AL Students.',
    image: SusipwanImage,
  },
];

const getFilteredTeacherData = (
  searchText: string,
  teacherFilter: TeacherFilterType,
) =>
  TEACHER_DATA.filter(
    ({name, field}) =>
      (teacherFilter.subject === 'All Subjects' ||
        teacherFilter.subject === field) &&
      (!searchText ||
        name.toLowerCase().indexOf(searchText.toLowerCase()) > -1),
  );

const Explore = () => {
  const tw = useTailwind();
  const [isTeacherFilterOpened, setIsTeacherFilterOpened] =
    React.useState<boolean>(false);
  const [isInstitutionFilterOpened, setIsInstitutionFilterOpened] =
    React.useState<boolean>(false);
  const [isSearchPressed, setIsSearchPressed] = React.useState<boolean>(false);
  const [searchText, setSearchText] = React.useState<string>('');
  const [teacherFilter, setTeacherFilter] = React.useState<TeacherFilterType>({
    area: 'Island',
    subject: 'All Subjects',
  });
  const [teacherData, setTeacherData] =
    React.useState<TeacherDataType[]>(TEACHER_DATA);
  const [institutionData, setInstitutionData] =
    React.useState<InstitutionDataType[]>(INSTITUTION_DATA);

  React.useEffect(() => {
    setTeacherData(getFilteredTeacherData(searchText, teacherFilter));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [teacherFilter]);

  const handlePressTeacherFilter = () => {
    setIsTeacherFilterOpened(prev => !prev);
  };

  const handlePressInstitutionFilter = () => {
    setIsInstitutionFilterOpened(prev => !prev);
  };

  const handlePressSearch = () => {
    setTeacherData(getFilteredTeacherData(searchText, teacherFilter));
    setTeacherFilter(prev => ({...prev, subject: 'All Subjects'}));
    setInstitutionData(
      INSTITUTION_DATA.filter(
        item =>
          !searchText ||
          item.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1,
      ),
    );
    setIsSearchPressed(!!searchText);
  };

  const handleChangeSearchInput = (text: string) => {
    setSearchText(text);
  };

  const handleChangeTeacherFilter =
    (type: keyof TeacherFilterType) => (value: string) => {
      setTeacherFilter(prev => ({...prev, [type]: value}));
    };

  return (
    <KeyboardHideWrapper>
      <ScrollView>
        <View
          style={tw(`flex-1 px-8 ${Platform.OS === 'ios' ? 'mt-20' : 'mt-8'}`)}>
          <View style={tw('flex-row justify-between mb-4')}>
            <View>
              <Text style={tw('font-["Exo-SemiBold"] text-3xl text-title')}>
                Good evening!
              </Text>
              <Text style={tw('font-["Exo-SemiBold"] text-xl text-primary')}>
                Hardline Scott
              </Text>
            </View>
            <Image accessibilityLabel="My Avatar" source={MyAvatar} />
          </View>
          <View style={tw('flex-row py-4 items-center mb-2')}>
            <SearchInput
              style={tw('flex-1')}
              onChangeText={handleChangeSearchInput}
              onPress={handlePressSearch}
            />
            <View style={tw('p-4')}>
              <SettingIcon />
            </View>
          </View>
          <View style={tw('mb-2')}>
            <View style={tw('flex-row justify-between items-center mb-4')}>
              <Text style={tw('font-["Exo-SemiBold"] text-xl text-title')}>
                {isSearchPressed ? 'Teachers' : 'Popular Teachers'}
              </Text>
              {!isSearchPressed && (
                <TouchableOpacity
                  onPress={handlePressTeacherFilter}
                  style={tw('p-4')}>
                  <FilterIcon
                    style={tw(
                      isTeacherFilterOpened ? 'text-secondary' : 'text-primary',
                    )}
                  />
                </TouchableOpacity>
              )}
            </View>

            {isTeacherFilterOpened && !isSearchPressed && (
              <View style={[commonStyles.gap2, tw('mb-4')]}>
                <FilterList
                  label="Area"
                  data={['Island', 'Province', 'Districts']}
                />
                <FilterList
                  label="Subject"
                  data={[
                    'All Subjects',
                    'Biology',
                    'Chemistry',
                    'Physics',
                    'Science for Technology',
                  ]}
                  onChange={handleChangeTeacherFilter('subject')}
                />
              </View>
            )}
            <SafeAreaView>
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={teacherData}
                renderItem={({item}) => <TeacherCard data={item} />}
                keyExtractor={item => item.id}
                horizontal
              />
            </SafeAreaView>
          </View>
          <View style={tw('flex-1')}>
            <View style={tw('flex-row justify-between items-center mb-4')}>
              <Text style={tw('font-["Exo-SemiBold"] text-xl text-title')}>
                {isSearchPressed ? 'Institutions' : 'Popular Institutions'}
              </Text>
              {!isSearchPressed && (
                <TouchableOpacity
                  onPress={handlePressInstitutionFilter}
                  style={tw('p-4')}>
                  <FilterIcon
                    style={tw(
                      isInstitutionFilterOpened
                        ? 'text-secondary'
                        : 'text-primary',
                    )}
                  />
                </TouchableOpacity>
              )}
            </View>
            {isInstitutionFilterOpened && !isSearchPressed && (
              <View style={tw('mb-4')}>
                <FilterList
                  label="Area"
                  data={['Island', 'Province', 'Districts']}
                />
              </View>
            )}
            <ScrollView horizontal contentContainerStyle={tw('w-full')}>
              <SafeAreaView style={tw('flex-1')}>
                <FlatList
                  data={institutionData}
                  renderItem={({item}) => <InstitutionCard data={item} />}
                  keyExtractor={item => item.id}
                  nestedScrollEnabled
                  style={tw('max-h-[600px]')}
                />
              </SafeAreaView>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </KeyboardHideWrapper>
  );
};

export default Explore;
