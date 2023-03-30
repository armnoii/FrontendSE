import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";

export default function Home({ navigation }) {
  const post = () => {
    fetch("http://10.0.0.158:3000/show", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        card: {
          name: "arm",
          city: "Bangkok",
          postal_code: 10160,
          number: "4242424242424242",
          expiration_month: 12,
          expiration_year: 2024,
        },
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Showing response message coming from server
        console.warn(responseJson);
      })
      .catch((error) => {
        //display error message
        console.warn(error);
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" hidden={false} />
      <View style={styles.navbar}>
        <TouchableOpacity>
          <Image
            style={{ width: 40, height: 40, marginLeft: 5 }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/8212/8212733.png",
            }}
          ></Image>
        </TouchableOpacity>
        <Image
          style={{ width: 80, height: 80 }}
          source={{
            uri: "https://i.pinimg.com/originals/1f/dc/dd/1fdcdd010014110812c5e765d7ba78db.jpg",
          }}
        ></Image>
        <TouchableOpacity>
          <Image
            style={{ width: 40, height: 40, marginRight: 7 }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
            }}
          ></Image>
        </TouchableOpacity>
      </View>

      <View
        style={{
          backgroundColor: "#2B3467",
          height: "6%",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            textAlign: "center",
            color: "white",
          }}
        >
          สวัสดี! นันทวัฒน์ สองสีดา
        </Text>
      </View>

      <View style={styles.Column_1}>
        <View style={styles.in_Column_1}>
          <Image
            style={styles.img_Column_1}
            source={{
              uri: "https://gwmlamphun.com/wp-content/uploads/2022/07/ora-GT.png",
            }}
          ></Image>
        </View>
        <View style={{ paddingLeft: 10, justifyContent: "center" }}>
          {}
          <Text style={styles.txt}>เลขที่สัญญา xxxxxxxxxx</Text>
          <Text style={styles.txt}>ทะเบียน ขขค321</Text>
          <Text style={styles.txt}>รุ่นรถ ORA Good CAT</Text>
          <Text style={styles.txt}>สถานะเช่า ปกติ</Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("payment")}
        style={styles.Column_2}
      >
        <View style={styles.header_Column_2}>
          <Image
            style={{ width: 23, height: 23 }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/3073/3073412.png",
            }}
          ></Image>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>
            {" "}
            รายละเอียดสัญญาเช่าซื้อ
          </Text>
        </View>
        <View style={styles.txt_Column_2}>
          <Text style={{ fontWeight: "bold", fontSize: 13 }}>
            ยอดคงเหลือทั้งสัญญา
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 13 }}>
            1,200,000 บาท
          </Text>
        </View>
        <View style={styles.txt_Column_2}>
          <Text style={{ fontWeight: "bold", fontSize: 13 }}>
            ยอดที่ต้องชำระทั้งหมด
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 13 }}>12,000 บาท</Text>
        </View>
        <View style={styles.txt_Column_2}>
          <Text style={{ fontWeight: "bold", fontSize: 13 }}>
            วันครบกำหนดชำระ
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 13 }}>6/03/2566</Text>
        </View>

        <View style={styles.button_Column_2}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              color: "white",
              textAlign: "center",
            }}
          >
            ชำระเงิน
          </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.Column_3}>
        <TouchableOpacity style={styles.button_Column_3}>
          <View style={{ paddingLeft: 15 }}>
            <Image
              style={styles.img_Column_3}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/591/591576.png",
              }}
            ></Image>
            <Text style={{ fontWeight: "bold", marginTop: 25 }}>
              ตารางค่างวด
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button_Column_3}>
          <View style={{ paddingLeft: 15 }}>
            <Image
              style={styles.img_Column_3}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/7325/7325265.png",
              }}
            ></Image>
            <Text style={{ fontWeight: "bold", marginTop: 25 }}>
              ประวัติการชำระ
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  txt: {
    fontSize: 14,
    fontWeight: "bold",
  },
  Column_1: {
    backgroundColor: "#ECECEC",
    width: "95%",
    height: "20%",
    marginTop: 25,
    borderRadius: 10,
    alignSelf: "center",
    flexDirection: "row",
  },
  in_Column_1: {
    width: "40%",
    height: "100%",
    borderRadius: 15,
    justifyContent: "center",
  },
  img_Column_1: {
    width: "100%",
    height: "50%",
    alignSelf: "center",
  },
  Column_2: {
    backgroundColor: "#ECECEC",
    width: "95%",
    height: "25%",
    marginTop: 20,
    borderRadius: 10,
    alignSelf: "center",
  },
  header_Column_2: {
    width: "100%",
    height: "20%",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 18,
  },
  button_Column_2: {
    backgroundColor: "#EB455F",
    width: "100%",
    height: "25%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginTop: 15,
    justifyContent: "center",
  },
  txt_Column_2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
  },
  Column_3: {
    justifyContent: "space-around",
    flex: 1,
    flexDirection: "row",
    marginTop: 25,
  },
  button_Column_3: {
    backgroundColor: "#ECECEC",
    width: "45%",
    height: "50%",
    borderRadius: 10,
  },
  img_Column_3: {
    width: 40,
    height: 40,
    marginTop: 10,
  },
});
