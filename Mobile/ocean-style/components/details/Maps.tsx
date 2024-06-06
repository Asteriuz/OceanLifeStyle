import { COLORS } from "@/constants/Colors";
import MAPSTYLE from "@/constants/MapStyle";
import React, { useEffect, useState } from "react";
import { Dimensions, ActivityIndicator, View } from "react-native";
import MapView, { LatLng, Region, Marker } from "react-native-maps";

interface MapsProps {
  input: string;
}

const Maps: React.FC<MapsProps> = ({ input }) => {
  const width = Dimensions.get("window").width;
  const height = 414;
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.4;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
  const [initialRegion, setInitialRegion] = useState<Region | undefined>(
    undefined
  );
  const [markerCoords, setMarkerCoords] = useState<LatLng | undefined>(
    undefined
  );
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getCoordinates = async (place: string) => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${place}&format=json`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        if (data.length > 0) {
          const { lat, lon } = data[0];
          const coordinates: LatLng = {
            latitude: parseFloat(lat),
            longitude: parseFloat(lon),
          };
          const region: Region = {
            ...coordinates,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          };
          setInitialRegion(region);
          setMarkerCoords(coordinates);
        } else {
          console.error("No results found for the place name.");
        }
      } catch (error) {
        console.error("Error fetching coordinates:", error);
      } finally {
        setLoading(false);
      }
    };

    if (input.trim().length > 0) {
      getCoordinates(input);
    }
  }, [input]);

  return (
    <View style={{ flex: 1 }}>
      {loading && (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      )}
      {!loading && (
        <MapView
          style={{ flex: 1 }}
          initialRegion={initialRegion}
          region={initialRegion}
          customMapStyle={MAPSTYLE}
          onRegionChangeComplete={() => setLoading(false)}
        >
          {markerCoords && (
            <Marker
              coordinate={markerCoords}
              title="Marker Title"
              description="Marker Description"
              pinColor={COLORS.primary}
            />
          )}
        </MapView>
      )}
    </View>
  );
};

export default Maps;
