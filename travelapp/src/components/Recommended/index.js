import React from 'react';
import styles from './styles';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';

import mocks from '../Destinations/destinations';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';
const stars = new Array(5).fill(0);

export default function Recommended() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended</Text>
      <ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}>
        {mocks.map((item) => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.8}
            style={styles.destination}>
            <Image source={{uri: item.preview}} style={styles.image} />
            <View style={styles.footer}>
              <Text style={styles.footerTitle}>{item.title}</Text>
              <Text style={styles.footerDesc}>{item.location}</Text>
              <View style={styles.ratings}>
                {stars.map((_, index) => {
                  const activeStar = Math.floor(item.rating) >= index + 1;
                  return (
                    <Icon
                      style={styles.ratingIcon}
                      name="star"
                      key={`star-${index}`}
                      size={14}
                      color={
                        activeStar ? `${colors.blue}` : `${colors.blueLight}`
                      }
                    />
                  );
                })}
              </View>
            </View>
            <View style={styles.options}>
              <Text style={styles.temperature}>{item.temperature}°C</Text>
              <Icon
                name={item.saved ? 'bookmark' : 'bookmark-o'}
                color={colors.white}
                size={16}
              />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
