import React, {useState} from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import DefaultCarousel, {Pagination} from 'react-native-snap-carousel';

export const Carousel = React.memo(({data}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const renderItem = ({item}) => (
    <View>
      <Image
        style={styles.img}
        source={require('../../assets/rectangle.png')}
      />
    </View>
  );
  return (
    <View>
      <DefaultCarousel
        data={data}
        renderItem={renderItem}
        onSnapToItem={index => setActiveSlide(index)}
        sliderWidth={Dimensions.get('window').width - 20}
        itemWidth={Dimensions.get('window').width - 43}
      />
      <View>
        <Pagination
          dotsLength={data.length}
          activeDotIndex={activeSlide}
          dotStyle={styles.dotStyle}
          inactiveDotStyle={{
            backgroundColor: '#29AE95',
          }}
          inactiveDotOpacity={1}
          inactiveDotScale={1}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  dotStyle: {
    width: 12,
    height: 12,
    borderRadius: 10,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#29AE95',
  },
  img: {
    width: Dimensions.get('window').width - 50,
    resizeMode: 'contain',
  },
});
