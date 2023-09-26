import React, {FC} from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import {DefaultStyles} from '../../styles';

interface ITitle {
  children: string;
  style?: StyleProp<TextStyle> | undefined;
}

export const Title: FC<ITitle> = React.memo(({children, style}) => {
  return <Text style={[DefaultStyles.title, style]}>{children}</Text>;
});
