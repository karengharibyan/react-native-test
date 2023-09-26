import React, {FC, ReactElement} from 'react';
import {Text as NativeText, StyleProp, TextStyle} from 'react-native';
import {DefaultStyles} from '../../styles';

interface IText {
  style?: StyleProp<TextStyle>;
  color?: string;
  children: string | ReactElement[];
}

export const Text: FC<IText> = React.memo(({children, style}) => {
  return (
    <NativeText style={[DefaultStyles.text, style]}>{children}</NativeText>
  );
});
