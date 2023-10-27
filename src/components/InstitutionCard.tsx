import React from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import commonStyles from '../styles/commonStyles';
import {InstitutionDataType} from '../types/institution';
import Rating from './Rating';

const InstitutionCard: React.FC<{data: InstitutionDataType}> = ({
  data: {title, rating, ratingCount, field, description, image},
}) => {
  const tw = useTailwind();
  return (
    <TouchableOpacity
      style={[
        commonStyles.teacherCardShadow,
        tw('rounded-md bg-white p-2 mb-4 mx-2'),
      ]}>
      <View style={[tw('flex-row'), commonStyles.gap2]}>
        <Image accessibilityLabel={`${title}'s image`} source={image} />
        <View style={tw('flex-1')}>
          <Text style={tw('mt-2 font-["Exo-SemiBold"] text-title text-lg')}>
            {title}
          </Text>
          <View style={tw('flex-row items-center mt-2')}>
            <Rating rating={rating} />
            <Text
              style={[
                commonStyles.text3xs,
                tw('ml-2 font-["Roboto-Regular"] text-primary'),
              ]}>
              {`${rating} (${ratingCount})`}
            </Text>
          </View>
          <Text
            style={[
              commonStyles.text2xs,
              tw('font-["Roboto-SemiBold"] text-title mt-2'),
            ]}>
            {field}
          </Text>
          <Text
            style={[
              commonStyles.text2xs,
              tw('font-["Roboto-Light"] text-title mt-2'),
            ]}>
            {description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default InstitutionCard;
