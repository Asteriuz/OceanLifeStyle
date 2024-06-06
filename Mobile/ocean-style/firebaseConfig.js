import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getDatabase, getDatabbase, onValue, ref } from "firebase/database";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyAnZ-rq0ctTn02L-b-IOyKheQ5CGrxi5sw",
  authDomain: "ocean-style-d1724.firebaseapp.com",
  databaseURL: "https://ocean-style-d1724-default-rtdb.firebaseio.com",
  projectId: "ocean-style-d1724",
  storageBucket: "ocean-style-d1724.appspot.com",
  messagingSenderId: "1010149450123",
  appId: "1:1010149450123:web:980a80c781c43ff6e64f8e",
};

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getDatabase(app);

function writeVehicleData(
  vehicleId,
  name,
  modelo,
  noise,
  status,
  image,
  place,
  data
) {
  const dbRef = ref(db, "vehicles/" + vehicleId);

  set(dbRef, {
    name: name,
    modelo: modelo,
    noise: noise,
    status: status,
    image: image,
    place: place,
    data: data,
  });
}

export { writeVehicleData };

// writeVehicleData(
//   "17345",
//   "Corsário",
//   "Cruzeiro de passeio",
//   60,
//   "Aprovado",
//   "https://www.marineinsight.com/wp-content/uploads/2019/08/Cruise-ships-1.png",
//   "Praia da Mococa",
//   "26/05/24"
// );

// writeVehicleData(
//   "98432",
//   "Azimut 60",
//   "Iate de luxo",
//   70,
//   "Pendente",
//   "https://blackboats.com.br/wp-content/uploads/2022/04/bf304ade-2eeb-4fdc-a7bd-94ce2713b60f.jpg",
//   "Praia da Tabatinga",
//   "12/01/22"
// );

// writeVehicleData(
//   "56108",
//   "Lagoon 450",
//   "Catamarã",
//   90,
//   "Reprovado",
//   "https://allaboutstbarts.com/wp-content/uploads/2020/11/lagoon-450-8-catamaran-for-rent-in-saint-barts-02.jpg",
//   "Praia da Maranduba",
//   "02/03/23"
// );

// writeVehicleData(
//   "23467",
//   "Cigarette Racing",
//   "Lancha de corrida",
//   105,
//   "Reprovado",
//   "https://itboat.com/uploads/c3e0/d5e4915462f4.jpg",
//   "Fernando de Noronha",
//   "31/07/21"
// );

// writeVehicleData(
//   "78901",
//   "Viking 55",
//   "Barco de pesca",
//   95,
//   "Aprovado",
//   "https://www.vikingyachts.com/images/models/55C/large/Aerial55036.jpg",
//   "Praia da Almada",
//   "23/11/22"
// );
