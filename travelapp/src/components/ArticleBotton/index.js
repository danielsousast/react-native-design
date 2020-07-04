import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';

// import { Container } from './styles';

export default function ArticleBotton(){
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerMenu}>
          <Text style={styles.menuTitle}>Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerMenu}>
        <Text style={styles.menuTitle}>Reviews</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerMenu}>
        <Text style={styles.menuTitle}>Hotels</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
