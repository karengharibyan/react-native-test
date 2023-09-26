import React, {FC} from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import {DefaultStyles} from '../../styles';

interface ISubTitle {
  children: string;
  style?: StyleProp<TextStyle> | undefined;
}

export const SubTitle: FC<ISubTitle> = React.memo(({children, style}) => {
  return <Text style={[DefaultStyles.subtitle, style]}>{children}</Text>;
});
