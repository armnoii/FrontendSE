import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  FlatList,
  Image,
  Button,
} from "react-native";

export default function Payment({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const onPressData = async () => {
    try {
      const response = await fetch("http://10.0.0.2:3000/generateQR");
      const json = await response.json();
      setLoading(true);
      setData(json.Result);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 30,
        }}
      >
        รายการชำระ
      </Text>
      <Text
        style={{
          fontSize: 21,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 25,
        }}
      >
        12,000 บาท
      </Text>
      <Text style={{ fontSize: 13, fontWeight: "bold", textAlign: "center" }}>
        ยอดชำระรวม
      </Text>

      <View style={styles.Column_1}>
        <View style={styles.in_Column_1}>
          <Image
            style={styles.img_Column_1}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/7325/7325265.png",
            }}
          ></Image>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            รายละเอียดสัญญาเช่าซื้อ
          </Text>
        </View>
        <View style={styles.txt_row_Column_1}>
          <Text style={styles.txt_Column_1}>เลขที่สัญญา</Text>
          <Text style={styles.txt_Column_1}>A123456</Text>
        </View>
        <View style={styles.txt_row_Column_1}>
          <Text style={styles.txt_Column_1}>ข้อมูลรถ</Text>
          <Text style={styles.txt_Column_1}>ORA Good Cat (บค321)</Text>
        </View>
        <View style={styles.txt_row_Column_1}>
          <Text style={styles.txt_Column_1}>ยอดคงเหลือทั้งสัญญา</Text>
          <Text style={styles.txt_Column_1}>1,200,000 บาท</Text>
        </View>
        <View style={styles.txt_row_Column_1}>
          <Text style={styles.txt_Column_1}>ยอดที่ต้องชำระทั้งสิ้น</Text>
          <Text style={styles.txt_Column_1}>12,000 บาท</Text>
        </View>
        <View style={styles.txt_row_Column_1}>
          <Text style={styles.txt_Column_1}>วันครบกำหนดชำระ</Text>
          <Text style={styles.txt_Column_1}>6/03/2566</Text>
        </View>
      </View>

      <View style={styles.Column_2}>
        <Text style={{ fontSize: 15, fontWeight: "bold", left: 10 }}>
          ช่องทางการชำระเงิน
        </Text>
        <View style={styles.Row_Column_2}>
          <TouchableOpacity
            style={styles.button_Column_2}
            onPress={() => navigation.navigate("mastercard")}
          >
            <Image
              style={styles.img_Column_2}
              source={{
                uri: "https://www.trendymobile.net/wp-content/uploads/visa-master-logo.jpg",
              }}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button_Column_2}>
            <Image
              style={styles.img_Column_2}
              source={{
                uri: "https://play-lh.googleusercontent.com/UIdkgBTFEFYTbE-_hUnekG5Aq16au9J7C6RI5gnoAeEZV2zMC3XgOnjL-0aYdmyWk6k",
              }}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt_Column_1: {
    fontWeight: "bold",
  },
  txt_row_Column_1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  Column_1: {
    backgroundColor: "#ECECEC",
    width: "95%",
    height: "35%",
    borderRadius: 15,
    alignSelf: "center",
    marginTop: 20,
  },
  in_Column_1: {
    width: "100%",
    height: 50,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  img_Column_1: {
    width: 30,
    height: 30,
    marginTop: 10,
  },
  Column_2: {
    width: "95%",
    height: "40%",
    borderRadius: 15,
    alignSelf: "center",
    marginTop: 20,
  },
  Row_Column_2: {
    flexDirection: "row",
    left: 10,
  },
  button_Column_2: {
    width: 100,
    height: 100,
    marginTop: 15,
    backgroundColor: "#F0EEED",
    justifyContent: "center",
    alignItems: "center",
  },
  img_Column_2: {
    width: 90,
    height: 90,
    borderRadius: 20,
  },
});
