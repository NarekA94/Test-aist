import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import IonIcon from 'react-native-vector-icons/Feather';
import {useNavigation, useRoute} from '@react-navigation/native';

export const Header = () => {
  const navigation = useNavigation();
  const route = useRoute();
  function goBack() {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }
  return (
    <LinearGradient
      colors={['#2d7cd2', '#46b6a6']}
      start={{x: 0, y: 0}}
      end={{x: 0.5, y: 0}}>
      <SafeAreaView />
      <View style={styles.root}>
        <View style={styles.row}>
          <TouchableOpacity onPress={goBack}>
            <IonIcon name="chevron-left" size={25} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.heading}>{route?.name || ''}</Text>
        </View>
        <View style={[styles.row]}>
          <View style={styles.imageTable}>
            <Image
              style={styles.image}
              source={require('../../assets/group.png')}
            />
          </View>
          <View style={styles.imageTable}>
            <Image
              style={styles.image}
              source={require('../../assets/people.png')}
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 5,
  },
  icons: {},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
  },
  bell: {
    position: 'absolute',
    backgroundColor: '#2b78d4',
    borderRadius: 100,
    width: 10,
    height: 10,
    right: 2,
    top: 0,
  },
  bellTable: {
    position: 'relative',
  },
  imageTable: {
    width: 25,
    height: 25,
    marginHorizontal: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
