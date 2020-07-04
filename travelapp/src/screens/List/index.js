import React from 'react';
import {StatusBar,View, Text, ScrollView} from 'react-native';

import styles from './styles';
import Destinations from '../../components/Destinations';
import Recommended from '../../components/Recommended';

export default function List() {
  return (
    <>
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerLabel}>Search for place</Text>
        <Text style={styles.headerTitle}>Destination</Text>
      </View>
      <Text />
      <Destinations />
      <Recommended />
    </ScrollView>
    <StatusBar backgroundColor="#ececec" barStyle="dark-content"/>
    </>
  );
}
