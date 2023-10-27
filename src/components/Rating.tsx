import React from 'react';
import {View, ViewStyle, StyleProp} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import StarFullIcon from '../../assets/images/icon/star-full-icon.svg';
import StarHalfIcon from '../../assets/images/icon/star-half-icon.svg';
import StarEmptyIcon from '../../assets/images/icon/star-empty-icon.svg';

interface RatingProps {
  rating: number;
  totalStars?: number;
  starSize?: number;
  containerStyle?: StyleProp<ViewStyle>;
}

const Rating: React.FC<RatingProps> = ({
  rating,
  totalStars = 5,
  starSize = 8,
  containerStyle,
}) => {
  const tw = useTailwind();
  const renderStars = () => {
    const starComponents = [];
    const roundedRating = Math.round(rating * 2) / 2; // Round to nearest 0.5 increment

    for (let i = 1; i <= totalStars; i++) {
      if (i <= roundedRating) {
        starComponents.push(
          <StarFullIcon
            key={`rating-star-${i}`}
            style={{width: starSize, height: starSize}}
          />,
        );
      } else if (i === Math.ceil(roundedRating) && roundedRating % 1 !== 0) {
        starComponents.push(
          <StarHalfIcon
            key={`rating-star-${i}`}
            style={{width: starSize, height: starSize}}
          />,
        );
      } else {
        starComponents.push(
          <StarEmptyIcon
            key={`rating-star-${i}`}
            style={{width: starSize, height: starSize}}
          />,
        );
      }
    }

    return starComponents;
  };

  return <View style={[tw('flex-row'), containerStyle]}>{renderStars()}</View>;
};

export default Rating;
