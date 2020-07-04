import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import mocks from './destinations';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Animated,
  Dimensions,
  Image,
} from 'react-native';
import colors from '../../styles/colors';

const {width} = Dimensions.get('window');

export default function Destinations() {
  const navigation = useNavigation();
  const scrollX = new Animated.Value(0);
  const dotPosition = Animated.divide(scrollX, width);

  return (
    <>
      <ScrollView
        horizontal
        style={styles.container}
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}>
        {mocks.map((item) => (
          <TouchableOpacity
            activeOpacity={0.8}
            key={item.id}
            style={styles.destination}
            onPress={() => navigation.navigate('Article', {article: item})}>
            <ImageBackground
              imageStyle={styles.backgroundImage}
              style={styles.destinationBackground}
              source={{
                uri: item.preview,
              }}>
              <View style={styles.destinationTop}>
                <View style={styles.destiantionLeft}>
                  <Image
                    style={styles.destiantionAvatar}
                    source={{uri: item.user.avatar}}
                  />

                  <View style={styles.userInfo}>
                    <Text style={styles.userName}>{item.user.name}</Text>
                    <View style={styles.userInfoBotton}>
                      <Feather name="map-pin" color={colors.white} size={10} />
                      <Text style={styles.userLocation}>Wallis and Futuna</Text>
                    </View>
                  </View>
                </View>

                <Text style={styles.rating}>{item.rating}</Text>
              </View>
            </ImageBackground>
            <View style={styles.destinationFooter}>
              <Text style={styles.destinationFooterTitle}>{item.title}</Text>
              <Text style={styles.destinationFooterDesc}>
                {item.description.split('').slice(0, 50)}...
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.dots}>
        {mocks.map((item, index) => {
          const borderWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0, 2.5, 0],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={index}
              style={[styles.dot, styles.activeDot, {borderWidth: borderWidth}]}
            />
          );
        })}
      </View>
    </>
  );
}
