import React from 'react';
import {Platform, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTailwind} from 'tailwind-rn';
import {DashboardTabParamList} from '../../types/routes';
import Explore from './Explore';
import Stream from './Stream';
import ClassWork from './ClassWork';
import ExploreIcon from '../../../assets/images/icon/explore-icon.svg';
import StreamIcon from '../../../assets/images/icon/stream-icon.svg';
import ClassworkIcon from '../../../assets/images/icon/classwork-icon.svg';
import commonStyles from '../../styles/commonStyles';

const Tab = createBottomTabNavigator<DashboardTabParamList>();

const Dashboard = () => {
  const tw = useTailwind();

  const CustomTabBarLabel: React.FC<{color: string; children: string}> = ({
    color,
    children,
  }) => {
    const tw = useTailwind();
    return (
      <Text
        style={[
          commonStyles.text2xs,
          tw('font-["Exo-Regular"] text-title'),
          {color},
        ]}>
        {children}
      </Text>
    );
  };

  const ExploreIconWithColor: React.FC<{color: string}> = ({color}) => (
    <ExploreIcon style={{color}} />
  );

  const StreamIconWithColor: React.FC<{color: string}> = ({color}) => (
    <StreamIcon style={{color}} />
  );

  const ClassworkIconWithColor: React.FC<{color: string}> = ({color}) => (
    <ClassworkIcon style={{color}} />
  );
  return (
    <Tab.Navigator
      initialRouteName="Explore"
      sceneContainerStyle={tw('bg-app')}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#5667FD',
        tabBarInactiveTintColor: '#636D77',
        tabBarLabel: CustomTabBarLabel,
        tabBarStyle: [
          commonStyles.gap2,
          tw(`rounded-xl py-2 ${Platform.OS === 'android' ? 'h-20' : 'h-24'}`),
        ],
      }}>
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{tabBarIcon: ExploreIconWithColor}}
      />
      <Tab.Screen
        name="Stream"
        component={Stream}
        options={{tabBarIcon: StreamIconWithColor}}
      />
      <Tab.Screen
        name="ClassWork"
        component={ClassWork}
        options={{tabBarIcon: ClassworkIconWithColor}}
      />
    </Tab.Navigator>
  );
};

export default Dashboard;
