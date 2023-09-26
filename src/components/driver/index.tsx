import {Driver as DriverType} from '@types';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {SubTitle} from '../subtitle';
import {Title} from '../title';
import {styles} from './styles';

interface IDriver {
  driver?: DriverType;
}

export const Driver: FC<IDriver> = React.memo(({driver}) => {
  return (
    <View style={styles.root}>
      <Title>{`${driver?.givenName} ${driver?.familyName}`}</Title>
      <SubTitle style={styles.label}>ID</SubTitle>
      <Text>{driver?.driverId ?? ''}</Text>
      <SubTitle style={styles.label}>Url</SubTitle>
      <Text>{driver?.url ?? ''}</Text>
      <SubTitle style={styles.label}>Given Name</SubTitle>
      <Text>{driver?.givenName ?? ''}</Text>
      <SubTitle style={styles.label}>Family Name</SubTitle>
      <Text>{driver?.familyName ?? ''}</Text>
      <SubTitle style={styles.label}>DOB</SubTitle>
      <Text>{driver?.dateOfBirth ?? ''}</Text>
      <SubTitle style={styles.label}>Nationality </SubTitle>
      <Text>{driver?.nationality ?? ''}</Text>
    </View>
  );
});
