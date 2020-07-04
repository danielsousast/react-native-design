import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {useRoute, useNavigation} from '@react-navigation/native';
import {
  View,
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  StatusBar,
  Platform,
  Animated
} from 'react-native';
import styles from './styles';
import colors from '../../styles/colors';
import ArticleBotton from '../../components/ArticleBotton';

export default function Article() {
  const {width} = Dimensions.get('window');
  const scrollX = new Animated.Value(0);
  const dotPosition = Animated.divide(scrollX, width);

  const route = useRoute();
  const navigation = useNavigation();

  const article = route.params.article;

  const stars = new Array(5).fill(0);

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.top}>
          <ScrollView
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            decelerationRate={0}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: false},
            )}
            >
            {article.images.map((item, index) => (
              <Image
                key={index}
                source={{
                  uri: item,
                }}
                resizeMode="cover"
                style={{width, height: width}}
              />
            ))}
          </ScrollView>

          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}>
              <Icon
                name="angle-left"
                color={colors.white}
                size={26}
                style={styles.back}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.backButton}>
              <Feather
                name="more-horizontal"
                color={colors.white}
                size={26}
                style={styles.back}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.dots}>
              {article.images.map((item, index) => {
                const opacity = dotPosition.interpolate({
                  inputRange: [index - 1, index, index + 1],
                  outputRange: [0.5, 1, 0.5],
                  extrapolate: 'clamp',
                });
                return (
                  <Animated.View
                    key={`step-${item}-${index}`}
                    style={[styles.dot, {opacity}]}
                  />
                );
              })}
            </View>

        <View style={styles.bottom}>
          <Text style={styles.title}>{article.title}</Text>
          <View style={styles.info}>
            <View style={styles.ratings}>
              {stars.map((_, index) => {
                const activeStar = Math.floor(4) >= index + 1;
                return (
                  <Icon
                    style={styles.ratingIcon}
                    name="star"
                    key={`star-${index}`}
                    size={18}
                    color={
                      activeStar ? `${colors.blue}` : `${colors.blueLight}`
                    }
                  />
                );
              })}
              <Text style={styles.rating}>{article.rating}</Text>
            </View>
            <Text style={styles.reviews}>({article.reviews} Reviews)</Text>
          </View>

          <View>
            <Text style={styles.description}>
              {article.description.split('').slice(0, 180)}

              <Text style={styles.readmore}> Read more</Text>
            </Text>
          </View>
          <ArticleBotton />
        </View>

      </ScrollView>
      <StatusBar barStyle="light-content" backgroundColor="#151515" />
    </>
  );
}
