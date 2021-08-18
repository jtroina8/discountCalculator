import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

class App extends React.Component {
  state = { amount: 0, discount: 0, result: 0 };
  onAmountChange = (text) => {
    this.setState({ amount: text });
  };

  discountChange = (text) => {
    this.setState({ discount: text });
  };

  onButtonPress = () =>
    this.setState({
      result: this.state.amount * (this.state.discount / 100),
    });

  // backgroundImage = {uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpaperaccess.com%2Fflat-iphone&psig=AOvVaw0nth26eI_eGD1X1BwSthVj&ust=1629330142443000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOjsg_idufICFQAAAAAdAAAAABAD"};

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.image}> */}
        <View style={{ alignItems: "center", marginTop: 40 }}>
          <Text style={{ fontSize: 30 }}>Discount Calculator</Text>
        </View>
        <View
          style={{
            marginHorizontal: 40,
            marginTop: 40,
            marginBottom: 20,
          }}
        >
          <Text style={{ marginBottom: 10, fontSize: 18 }}>Amount</Text>
          <TextInput style={styles.input} onChangeText={this.onAmountChange} />
        </View>
        <View style={{ marginHorizontal: 40 }}>
          <Text style={{ marginBottom: 10, fontSize: 18 }}>Discount (%)</Text>
          <TextInput style={styles.input} onChangeText={this.discountChange} />
        </View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity style={styles.btn} onPress={this.onButtonPress}>
            <Text style={{ color: "black", fontSize: 18 }}>Calculate</Text>
          </TouchableOpacity>
        </View>

        <Text
          style={[
            styles.result,
            { color: this.state.result ? "#37E11E" : "black" },
          ]}
        >
          The Amount After Discount is:
        </Text>
        <Text
          style={[
            styles.result,
            { color: this.state.result ? "#37E11E" : "black" },
          ]}
        >
          {this.state.result ? this.state.amount - this.state.result : null}
        </Text>
        {/* </ImageBackground> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c81ee1",
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 20,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    fontSize: 20,
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#37E11E",
    width: 350,
    height: 80,
    borderRadius: 10,
    marginTop: 60,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  result: {
    textAlign: "center",
    fontSize: 26,
    marginTop: 20,
  },
});

export default App;
