import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
interface Scooter {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

export default function Map(): JSX.Element {
  const [scooters, setScooters] = useState<Scooter[]>([]);

  useEffect(() => {
    fetch("http://192.168.9.22:8081/scooters")
      .then((res) => res.json())
      .then((data: Scooter[]) => {
        setScooters(data);
      });
  }, []);

  return (
    <View>
      <MapView
        style={{ height: 500, width: 500 }}
        initialRegion={{
          latitude: 32.298306,
          longitude: 350.759425,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {scooters.map((scooter) => (
          <Marker
            key={scooter.id}
            coordinate={{
              latitude: scooter.latitude,
              longitude: scooter.longitude,
            }}
            title={scooter.name}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({});
