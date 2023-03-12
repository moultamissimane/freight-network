import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// @ts-ignore
import BgLogin from "../assets/images/bg-login.jpg";

type LoginProps = {
  navigation: any;
};

type LoginData = {
  email: string;
  password: string;
};

const Login = ({ navigation }: LoginProps) => {
  const [data, setData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<string | null>(null);

  const sendToBackend = () => {
    if (data.email === "" || data.password === "") {
      setErrors("Please fill all the fields");
      return;
    } else {
      try {
        fetch("http://192.168.9.22:19000/login", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
          // @ts-ignore
        }).then((res) =>
          res.json().then((data) => {
            if (data.error) {
              setErrors(data.message);
            } else {
              alert("Login Successful");
              navigation.navigate("Home");
            }
          })
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Image source={BgLogin} style={styles.patternbg} />
          <View style={styles.container1}>
            <View style={styles.containerLogin}>
              <Text style={styles.welcomeBack}>Welcome Back</Text>
              <Text style={styles.SigninText}>Enter your details below</Text>
              {errors ? <Text style={styles.error}>{errors}</Text> : null}
              <View>
                <Text style={styles.email}>Email</Text>
                <TextInput
                  onPressIn={() => setErrors(null)}
                  onChangeText={(text: any) =>
                    setData({ ...data, email: text })
                  }
                  style={styles.input1}
                  placeholder="Enter your email"
                />
                <Text style={styles.password}>Password</Text>
                <TextInput
                  onPressIn={() => setErrors(null)}
                  onChangeText={(text: any) =>
                    setData({ ...data, password: text })
                  }
                  style={styles.input2}
                  secureTextEntry={true}
                  placeholder="Enter your password"
                />
              </View>
              <TouchableOpacity onPressIn={sendToBackend}>
                <Text style={styles.Login}>Login</Text>
              </TouchableOpacity>
              <Text
                style={styles.Create}
                onPress={() => navigation.navigate("Signup")}
              >
                Don't have an account?
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container1: {
    flex: 1,
  },
  patternbg: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    // backgroundColor: "#800989",
  },
  goBack: {
    color: "#9848FF",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  error: {
    backgroundColor: "red",
    color: "white",
    padding: 10,
    borderRadius: 10,
    margin: 7,
    fontSize: 15,
  },
  input1: {
    height: 40,
    margin: 13,
    borderWidth: 2,
    borderRadius: 10,
    padding: 13,
    borderColor: "#908F96",
  },
  input2: {
    height: 40,
    margin: 13,
    borderWidth: 2,
    borderRadius: 10,
    padding: 13,
    borderColor: "#908F96",
  },
  containerLogin: {
    display: "flex",
    marginTop: "75%",
    width: 410,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: "100%",
    backgroundColor: "white",
  },
  Login: {
    fontFamily: 'quicksand-regular',
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#9848FF",
    padding: 10,
    borderRadius: 10,
    margin: 13,
  },
  welcomeBack: {
    marginTop: "6%",
    fontSize: 40,
    fontFamily: "quicksand-regular",
    color: "#000000",
    fontWeight: "bold",
    textAlign: "center",
  },
  SigninText: {
    display: "flex",
    marginTop: 2,
    fontSize: 20,
    textAlign: "center",
    color: "#908F96",
  },
  email: {
    display: "flex",
    marginTop: "5%",
    marginLeft: "10%",
    fontSize: 15,
    color: "#908F96",
  },
  password: {
    display: "flex",
    marginTop: "3%",
    marginLeft: "10%",
    fontSize: 15,
    justifyContent: "center",
    alignItems: "center",
    color: "#908F96",
  },
  Create: {
    display: "flex",
    marginTop: "2%",
    textAlign: "center",
    fontSize: 20,
    color: "#908F96",
  },
});

function fetch(
  arg0: string,
  arg1: {
    method: string;
    headers: { Accept: string; "Content-Type": string };
    body: string;
  }
) {
  throw new Error("Function not implemented.");
}
