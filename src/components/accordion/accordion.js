import React, {Fragment} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {List} from 'react-native-paper';

export const Accordion = React.memo(({item}) => {
  return (
    <Fragment>
      <View style={styles.root}>
        <View style={styles.info}>
          <View style={styles.row}>
            <Text style={[styles.text, styles.date]}>{item?.time}</Text>
            <Text
              style={[
                styles.text,
                styles.status,
                {color: item?.status === 'Complited' ? '#4ABFC6' : '#EA375A'},
              ]}>
              {item?.status}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>{item?.name}</Text>
            <Text style={styles.text}>{item?.price}</Text>
          </View>
        </View>

        <List.Accordion
          titleStyle={styles.titleStyle}
          style={styles.list}
          title="SourceWallet">
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
      </View>
    </Fragment>
  );
});

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    paddingTop: 15,
    paddingBottom: 5,
    paddingHorizontal: 5,
  },
  list: {
    padding: 0,
    fontSize: 14,
  },
  info: {
    paddingHorizontal: 10,
  },
  titleStyle: {
    fontSize: 14,
  },
  text: {
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    marginBottom: 7,
  },
  status: {
    fontSize: 16,
  },
});
