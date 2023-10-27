import {ImageSourcePropType} from 'react-native';

export type GradeDataType = {
  label: string;
  data: {
    label: string;
    icon: ImageSourcePropType;
    value: string;
  }[];
};
