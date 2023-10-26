import {Platform, StyleSheet} from 'react-native';

const commonStyles = StyleSheet.create({
  gap2: {
    gap: 8,
  },
  gap4: {
    gap: 16,
  },
  gap5: {
    gap: 20,
  },
  gap8: {
    gap: 32,
  },
  gap13: {
    gap: 52,
  },
  text3xs: {
    fontSize: 8,
  },
  text2xs: {
    fontSize: 12,
  },
  btnShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  searchInputShadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 14},
    shadowOpacity: 0.1,
    shadowRadius: 32,
    elevation: 5,
  },
  teacherCardShadow: {
    shadowColor: Platform.OS === 'android' ? '#000' : 'rgba(0, 0, 0, 0.6)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 8,
  },
  textInputShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 5,
    padding: 10,
    marginTop: 12,
  },
});

export default commonStyles;
