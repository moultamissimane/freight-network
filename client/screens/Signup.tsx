import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
// @ts-ignore
import BgLogin from "../assets/images/bg-login.jpg";

interface Data {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  address: string;
}

const Signup: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [data, setData] = useState<Data>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
  });

  const [errors, setErrors] = useState<string | null>(null);

  const sendToBackend = () => {
    if (
      data.name == "" ||
      data.email == "" ||
      data.password == "" ||
      data.confirmPassword == "" ||
      data.address == ""
    ) {
      setErrors("Please fill all the fields");
      return;
    } else {
      if (data.password != data.confirmPassword) {
        setErrors("Password and Confirm Password does not match");
        return;
      } else {
        try {
          fetch("http://192.168.9.22:19000/signup", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }).then((res) =>
            res.json().then((data) => {
              console.log(data);
              if (data.error) {
                setErrors(data.message);
              } else {
                alert("Signup Successful");
                navigation.navigate("Login");
              }
            })
          );
        } catch (error) {
          console.log(error);
        }
      }
    }
  };
  return (
    <View style={styles.container}>
      <Image style={styles.patternbg} source={BgLogin} />
      <ScrollView style={styles.container1}>
        <View style={styles.containerLogin}>
          <Text
            style={styles.getStarted}
          >
            Get started free.
          </Text>
          <Text style={styles.CreateText}>
            Free forever. No credit card needed.
          </Text>

          {errors ? <Text style={styles.error}>{errors}</Text> : null}
          <View>
            <Text style={styles.label}>Name</Text>
            <TextInput
              onPressIn={() => setErrors(null)}
              onChangeText={(text) => setData({ ...data, name: text })}
              style={styles.input}
              placeholder="Enter your name"
            />
            <Text style={styles.label}>Email</Text>
            <TextInput
              onPressIn={() => setErrors(null)}
              onChangeText={(text) => setData({ ...data, email: text })}
              style={styles.input}
              placeholder="Enter your email"
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
              onPressIn={() => setErrors(null)}
              onChangeText={(text) => setData({ ...data, password: text })}
              style={styles.input}
              secureTextEntry={true}
              placeholder="Enter your password"
            />
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              onPressIn={() => setErrors(null)}
              onChangeText={(text) =>
                setData({ ...data, confirmPassword: text })
              }
              style={styles.input}
              secureTextEntry={true}
              placeholder="Confirm your password"
            />
            <Text style={styles.label}>Address</Text>
            <TextInput
              onPressIn={() => setErrors(null)}
              onChangeText={(text) => setData({ ...data, address: text })}
              style={styles.input}
              placeholder="Enter your address"
            />
          </View>
          <TouchableOpacity onPress={sendToBackend}>
            <Text style={styles.signup}>Sign Up</Text>
          </TouchableOpacity>

          <Text
            style={styles.Create}
            onPress={() => navigation.navigate("Login")}
          >
            Already have an account?{" "}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container1: {
    flex: 1,
    marginTop: -40,
    height: "100%",
  },
  error: {
    backgroundColor: "red",
    color: "white",
    padding: 10,
    borderRadius: 5,
    margin: 10,
    fontSize: 15,
  },
  patternbg: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    padding: 11,
    borderColor: "#908F96",
  },
  signup: {
    fontFamily: "quicksand-regular",
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#9848FF",
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  containerLogin: {
    display: "flex",
    marginTop: "40%",
    width: 410,
    borderRadius: 10,
    height: "100%",
    backgroundColor: "white",
  },
  getStarted: {
    marginTop: "5%",
    fontSize: 40,
    fontFamily: "quicksand-regular",
    color: "#000000",
    fontWeight: "bold",
    textAlign: "center",
  },
  CreateText: {
    display: "flex",
    marginTop: 2,
    fontSize: 20,
    textAlign: "center",
    color: "#908F96",
  },

  label: {
    display: "flex",
    marginTop: "2%",
    marginLeft: "10%",
    fontSize: 15,
    color: "#908F96",
  },
  fp: {
    display: "flex",
    marginLeft: "65%",
    color: "#4b66e4",
  },
  Create: {
    display: "flex",
    marginTop: "2%",
    marginBottom: "5%",
    textAlign: "center",
    fontSize: 20,
    color: "#908F96",
  },
});

function alert(arg0: string) {
  throw new Error("Function not implemented.");
}
