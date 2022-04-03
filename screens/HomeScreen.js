import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
// import { TouchableOpacity } from "react-native-web";

const bgImage = require("../assets/images/background.jpg");
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: "",
      time: "",
      //   img: require("../assets/images/morning-sun.jpg"),
      img: "morning-sun.jpg",
    };
  }
  getHour = () => {
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    this.setState({ time: h + " : " + m });
    switch (50) {
      case 0:
        this.setState({ img: "" });
        break;
      case 1:
        this.setState({ img: "" });
        break;
      case 2:
        this.setState({ img: "" });
        break;
      case 3:
        this.setState({ img: "" });
        break;
      case 4:
        this.setState({ img: "" });
        break;
      case 5:
        this.setState({ img: "morning-sun.jpg" });
        break;
      case 6:
        this.setState({ img: "morning-sun.jpg" });
        break;
      case 7:
        this.setState({ img: "morning-sun.jpg" });
        break;
      case 8:
        this.setState({ img: "morning-sun.jpg" });
        break;
      case 9:
        this.setState({ img: "morning-sun.jpg" });
        break;
      case 10:
        this.setState({ img: "morning-sun.jpg" });
        break;
      case 11:
        this.setState({ img: "" });
        break;
      case 12:
        this.setState({ img: "" });
        break;
      case 13:
        this.setState({ img: "" });
        break;
      case 14:
        this.setState({ img: "" });
        break;
      case 15:
        this.setState({ img: "" });
        break;
      case 16:
        this.setState({ img: "" });
        break;
      case 17:
        this.setState({ img: "" });
        break;
      case 18:
        this.setState({ img: "" });
        break;
      case 19:
        this.setState({ img: "moon at 8.jpg" });
        break;
      case 20:
        this.setState({ img: "moon at 8.jpg" });
        break;
      case 21:
        this.setState({ img: "" });
        break;
      case 22:
        this.setState({ img: "" });
        break;
      case 23:
        this.setState({ img: "" });
        break;
      default:
        break;
    }
  };

  getWeather = async () => {
    //change latitude and longitude
    var url =
      "https://fcc-weather-api.glitch.me/api/current?lat=21.17&lon=72.83";
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          weather: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  componentDidMount() {
    this.getHour();
    this.getWeather();
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={bgImage} style={styles.bgImage}>
          <View style={{ flex: 0.2, marginTop: 50 }}>
            <Text style={{ color: "white", fontSize: 30 }}> Surat</Text>
          </View>
          <View style={{ flex: 0.5, flexDirection: "row" }}>
            <Text style={{ color: "white", fontSize: 30 }}>
              {this.state.time}
            </Text>

            <Image
              source={require("../assets/images/morning-sun.jpg")}
              // source={this.state.img}
              style={styles.appIcon}
            />
          </View>

          <View style={styles.subContainer}>
            <Text style={styles.title}>Weather Forecast</Text>

            <View style={styles.textContainer}>
              <Text style={{ fontSize: 18, color: "#ffffff" }}>
                temp:{" "}
                {this.state.weather === "" ? "" : this.state.weather.main.temp}
                &deg;C
              </Text>
              <Text style={{ fontSize: 20, margin: 5, color: "#ffffff" }}>
                humidity :{" "}
                {this.state.weather === ""
                  ? ""
                  : this.state.weather.main.humidity}
              </Text>
              <Text style={{ fontSize: 20, color: "#ffffff" }}>
                {this.state.weather === ""
                  ? ""
                  : this.state.weather.weather[0].description}
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 0.2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity style={styles.tostyle}>
              <Text style={{ fontSize: 25, color: "#ffffff" }}>
                Daily Forecast
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    // alignItems: "center",
  },
  bgImage: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
  },
  appIcon: {
    flex: 1,
    width: "60%",
    height: "70%",
    borderRadius: 70,
    borderWidth: 2,
    resizeMode: "cover",
    alignItems: "flex-end",
  },
  subContainer: {
    flex: 0.4,
    // borderWidth: 1,
    alignItems: "center",
  },
  title: {
    // marginTop: 40,
    // marginBottom: 5,
    fontSize: 30,
    color: "#ffffff",
  },
  cloudImage: {
    width: 200,
    height: 200,
    marginTop: 30,
  },
  textContainer: {
    flex: 0.5,
    alignItems: "center",
    flexDirection: "row",
    // marginTop: -150,
  },
  tostyle: {
    width: 175,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e0b13c",
    borderRadius: 50,
  },
});
