import {ImageSourcePropType} from 'react-native';

export type InstitutionDataType = {
  id: string;
  title: string;
  rating: number;
  ratingCount: number;
  field: string;
  description: string;
  image: ImageSourcePropType;
};
