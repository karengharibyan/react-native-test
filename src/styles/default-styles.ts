import {StyleSheet} from 'react-native';

export const DefaultStyles = StyleSheet.create({
  title: {
    color: '#000000',
    fontSize: vp(30.34),
    lineHeight: vp(36.31),
    fontWeight: '700',
    marginVertical: vp(16),
  },
  subtitle: {
    color: '#000000',
    fontWeight: '500',
    fontSize: vp(20),
    letterSpacing: vp(1),
  },
  text: {
    fontSize: vp(16),
    fontWeight: '400',
    color: '#000000',
    marginVertical: vp(10),
  },
  errorText: {
    color: '#C62613',
    marginLeft: vp(20),
    marginVertical: vp(5),
  },
});
