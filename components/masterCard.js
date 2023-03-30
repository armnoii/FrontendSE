import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from "react-native";

import { TextInput } from "react-native-paper";

export default function Mastercard() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [date, setDate] = useState("");
  const [cvc, setCvc] = useState("");

  return (
    <View style={styles.container}>
      <View style={{ width: "90%", height: "80%" }}>
        <View style={styles.header}>
          <Text style={styles.txt_Header}>Payment Details</Text>
        </View>

        <View style={styles.input}>
          <TextInput
            mode="outlined"
            placeholder="Cardholder name"
            placeholderTextColor="#DDDDDD"
            style={styles.field}
            value={name}
            onChangeText={(name) => setName(name)}
          ></TextInput>
          <TextInput
            mode="outlined"
            placeholder="Card number"
            placeholderTextColor="#DDDDDD"
            style={styles.field}
            value={cardNumber}
            onChangeText={(cardNumber) => setCardNumber(cardNumber)}
          ></TextInput>
        </View>

        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <View style={styles.input_2}>
            <TextInput
              mode="outlined"
              placeholder="Expiration Date"
              placeholderTextColor="#DDDDDD"
              style={styles.field}
              value={date}
              onChangeText={(date) => setDate(date)}
            ></TextInput>
          </View>

          <View style={styles.input_3}>
            <TextInput
              mode="outlined"
              placeholder="CVC"
              placeholderTextColor="#DDDDDD"
              style={styles.field}
              secureTextEntry
              right={<TextInput.Icon name="eye" />}
              value={cvc}
              onChangeText={(cvc) => setCvc(cvc)}
            ></TextInput>
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
            }}
          >
            PAY ฿12,000
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  txt_Header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  header: {
    marginTop: "10%",
  },
  input: {
    width: "100%",
    marginTop: "5%",
  },
  input_2: {
    marginTop: 10,
    width: "45%",
    height: 90,
  },
  input_3: {
    marginTop: 10,
    width: "45%",
    height: 90,
  },
  field: {
    backgroundColor: "white",
    marginTop: 10,
    height: 70,
  },
  button: {
    marginTop: 20,
    width: "100%",
    height: "12%",
    backgroundColor: "#00337C",
    borderRadius: 10,
    justifyContent: "center",
  },
});
