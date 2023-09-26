import {Title} from '@components';
import {MAIN_STACK_SCREENS} from '@enums';
import {MainStackParamProps} from '@navigation/Main';
import {useAppDispatch, useAppSelector} from '@store/hooks';
import {getDrivers} from '@store/reducers/drivers/asyncThunks';
import React, {FC, useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {DataTable} from 'react-native-paper';
import {styles} from './styles';

export const MainDriversScreen: FC<
  MainStackParamProps<MAIN_STACK_SCREENS.DRIVERS>
> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(0);
  const [numberOfItemsPerPageList] = useState([5, 10, 15]);
  const [itemsPerPage, onItemsPerPageChange] = useState(
    numberOfItemsPerPageList[0],
  );
  const {drivers, totalDrivers} = useAppSelector(state => state.drivers);

  const onPageChange = (_page: number) => {
    setPage(_page);
  };

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  useEffect(() => {
    const offset = page * itemsPerPage;
    dispatch(
      getDrivers({
        limit: itemsPerPage,
        offset,
      }),
    );
    // disabled rule because i don't need to trigger dispatch when itemsPerPage will change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, page]);

  const onDriverPress = (driverId: string) => {
    navigation.navigate(MAIN_STACK_SCREENS.DRIVER, {
      driverId,
    });
  };

  return (
    <ScrollView style={styles.root}>
      <Title>Drivers Main</Title>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>ID</DataTable.Title>
          <DataTable.Title>Url</DataTable.Title>
          <DataTable.Title>Given Name</DataTable.Title>
          <DataTable.Title>Family Name</DataTable.Title>
          <DataTable.Title>DOB</DataTable.Title>
          <DataTable.Title>Nationality</DataTable.Title>
        </DataTable.Header>
        {drivers.map(item => (
          <DataTable.Row
            key={item.driverId}
            onPress={() => onDriverPress(item.driverId)}>
            <DataTable.Cell>{item.driverId}</DataTable.Cell>
            <DataTable.Cell>{item.url}</DataTable.Cell>
            <DataTable.Cell>{item.givenName}</DataTable.Cell>
            <DataTable.Cell>{item.familyName}</DataTable.Cell>
            <DataTable.Cell>{item.dateOfBirth}</DataTable.Cell>
            <DataTable.Cell>{item.nationality}</DataTable.Cell>
          </DataTable.Row>
        ))}

        <DataTable.Pagination
          page={page}
          numberOfPages={totalDrivers}
          onPageChange={onPageChange}
          numberOfItemsPerPageList={numberOfItemsPerPageList}
          numberOfItemsPerPage={itemsPerPage}
          onItemsPerPageChange={onItemsPerPageChange}
          showFastPaginationControls
          selectPageDropdownLabel={'Rows per page'}
        />
      </DataTable>
    </ScrollView>
  );
};
