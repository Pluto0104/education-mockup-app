import React from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import commonStyles from '../styles/commonStyles';
import {TeacherDataType} from '../types/teacher';
import {useTailwind} from 'tailwind-rn';

const TeacherCard: React.FC<{data: TeacherDataType}> = ({
  data: {avatar, name, field},
}) => {
  const tw = useTailwind();
  return (
    <TouchableOpacity
      style={[
        commonStyles.teacherCardShadow,
        tw('rounded-xl bg-white p-2 mb-4 mx-2'),
      ]}>
      <View>
        <Image accessibilityLabel={`${name}'s avatar`} source={avatar} />
        <Text style={tw('font-["Exo-SemiBold"] text-title mt-2')}>{name}</Text>
        <Text
          style={[
            commonStyles.text2xs,
            tw('font-["Roboto-Regular"] text-title'),
          ]}>
          {field}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TeacherCard;
