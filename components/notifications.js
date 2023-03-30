import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default function Notifications() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity>
          <Image
            style={{ width: 40, height: 40, marginLeft: 5 }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/9312/9312240.png",
            }}
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginLeft: 25 }}>
          แจ้งเตือน
        </Text>
        <View style={styles.noti}>
          <Text style={{ padding: 15, fontSize: 15, fontWeight: "500", color: '#ffffff' }}>
            คุณมีนัดซ่อมรถรุ่น Tesla3 วันที่ 20 ธ.ค. 2022 เวลา 14.30 บริษัท
            เทสโต ประเทศไทย จำกัด
          </Text>
        </View>
        <View style={styles.noti}>
          <Text style={{ padding: 15, fontSize: 15, fontWeight: "500", color: '#ffffff' }}>
            ชำระเงินสำเร็จ เลขที่สัญญาลงท้าย x7234 จำนวน 2,350 บาท เมื่อวันที่ 10/02/2566
          </Text>

        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noti: {
    backgroundColor: "#00337C",
    width: '90%',
    height: 90,
    marginTop: 20,
    borderRadius: 20,
  },
  navbar: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
  },
});
