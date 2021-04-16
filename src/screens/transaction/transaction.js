import React, {Fragment} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Accordion, Header} from '../../components';
import {posts} from '../../data';

export const TransactionScreen = () => {
  const renderItem = ({item}) => <Accordion item={item} />;
  return (
    <Fragment>
      <Header />
      <View style={styles.root}>
        <TouchableOpacity onPress={() => alert('1')} style={styles.filterTable}>
          <Image
            style={styles.image}
            source={require('../../assets/settings.png')}
          />
        </TouchableOpacity>
        <View style={styles.list}>
          <FlatList
            contentContainerStyle={styles.flat}
            showsVerticalScrollIndicator={false}
            data={posts}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#ededed',
    position: 'relative',
  },
  filterTable: {
    position: 'absolute',
    top: 7,
    right: 0,
    backgroundColor: '#fff',
    height: 40,
    width: 80,
    zIndex: 9,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    paddingHorizontal: 20,
  },
  flat: {
    paddingTop: 60,
  },
  image: {
    resizeMode: 'contain',
    height: 25,
    width: 25,
    marginLeft: 8,
  },
});
