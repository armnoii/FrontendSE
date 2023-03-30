import React, { useState } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from "react-native";

const Repair = () => {
  return <View style={styles.container}>
    <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold'}}>แจ้งซ่อม</Text>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
});

export default Repair;
