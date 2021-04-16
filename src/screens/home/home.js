import React, {Fragment, useState} from 'react';
import {View, Dimensions, StyleSheet, Text, Image} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import {icons} from '../../data';
import RNPickerSelect from 'react-native-picker-select';
import {Carousel, Header} from '../../components';

export const HomeScreen = () => {
  const [value, setValue] = useState('usd');
  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Image style={styles.image} source={item.img} />
        <Text>{item.name}</Text>
      </View>
    );
  };
  return (
    <Fragment>
      <Header />
      <View style={styles.root}>
        <View style={styles.selectTable}>
          <RNPickerSelect
            items={[
              {label: 'E-USD -', value: 'usd'},
              {label: 'Baseball', value: 'baseball'},
              {label: 'Hockey', value: 'hockey'},
            ]}
            onValueChange={e => setValue(e)}
            pickerProps={{
              dropdownIconColor: '#fff',
            }}
            style={{
              inputAndroid: {
                fontSize: 16,
                paddingHorizontal: 10,
                paddingTop: 25,
                borderColor: 'purple',
                borderRadius: 5,
                color: '#fff',
                paddingRight: 30,
                marginLeft: 15,
              },
              inputIOS: {
                fontSize: 16,
                paddingHorizontal: 10,
                paddingTop: 25,
                borderColor: 'purple',
                borderRadius: 5,
                color: '#fff',
                paddingRight: 30,
                marginLeft: 15,
              },
              viewContainer: {
                backgroundColor: '#46b6a6',
                borderRadius: 5,
                height: 50,
                justifyContent: 'center',
              },
              placeholder: {
                color: '#fff',
              },
            }}
            value={value}
          />
        </View>
        <View>
          <FlatGrid
            itemDimension={Dimensions.get('window').width * 0.4}
            data={icons}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
        </View>
        <View>
          <Carousel data={new Array(5).fill(1)} />
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#ededed',
    paddingHorizontal: 15,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    height: 100,
  },
  image: {
    height: 25,
    width: 25,
    marginBottom: 5,
    resizeMode: 'contain',
  },
  select: {
    backgroundColor: '#F0F0F0',
    borderRadius: 15,
    padding: 0,
    paddingLeft: 11,
    height: 50,
    color: '#6b4d2b',
  },
  selectTable: {
    marginTop: 20,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
