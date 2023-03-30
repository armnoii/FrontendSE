import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";

export default function Detail() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" hidden={false} />
      <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}>
        สัญญาเช่า
      </Text>
      <View style={styles.detail}>
        <Text
          style={{ fontSize: 15, fontWeight: "bold", textAlign: "center" }}
        >
          รายละเอียดสัญญา
        </Text>

        <View
          style={{
            width: "80%",
            height: 100,
            alignSelf: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Image
            style={{ width: "100%", height: "100%" }}
            source={{
              uri: "https://gwmlamphun.com/wp-content/uploads/2022/07/ora-GT.png",
            }}
          ></Image>
        </View>

        <View style={{ flexDirection: "row", flex: 1 }}>
          <View style={{ width: "50%", height: "100%" }}>
            <Text style={styles.txt_1}>บุคคล (ชื่อ / นามสกุล)</Text>
            <Text style={styles.txt_2}>นันทวัฒน์ สองสีดา</Text>

            <Text style={styles.txt_1}>เลขทะเบียน</Text>
            <Text style={styles.txt_2}>ขขค321</Text>

            <Text style={styles.txt_1}>ยี่ห้อรถ</Text>
            <Text style={styles.txt_2}>ORA</Text>

            <Text style={styles.txt_1}>S / N เครื่อง</Text>
            <Text style={styles.txt_2}>xxxxxxxxxx</Text>

            <Text style={styles.txt_1}>สี</Text>
            <Text style={styles.txt_2}>Hamilton White</Text>
          </View>
          <View style={{ width: "50%", height: "100%" }}>
            <Text style={styles.txt_1}>เลขที่สัญญา</Text>
            <Text style={styles.txt_2}>xxxxxxxxxx</Text>

            <Text style={styles.txt_1}>จังหวัดที่จดทะเบียน</Text>
            <Text style={styles.txt_2}>ชลบุรี</Text>

            <Text style={styles.txt_1}>รุ่นรถ</Text>
            <Text style={styles.txt_2}>Good CAT</Text>

            <Text style={styles.txt_1}>S / N ตัวถัง</Text>
            <Text style={styles.txt_2}>xxxxxxxxxx</Text>

            <Text style={styles.txt_1}>ประเภททรัพย์สิน</Text>
            <Text style={styles.txt_2}>รถยนต์ส่วนบุคคล</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '20%'
  },
  navbar: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
  },
  detail: {
    marginTop: 15,
    backgroundColor: "#ECECEC",
    height: "80%",
    padding: 20,
    margin: 10,
    borderRadius: 15,
  },
  txt_1: {
    fontSize: 13,
    marginTop: 20,
    fontWeight: "bold",
    color: "#7F8487",
  },
  txt_2: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
