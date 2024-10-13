import {useFonts, Poppins_700Bold, Poppins_400Regular, Poppins_500Medium, Poppins_800ExtraBold} from "@expo-google-fonts/poppins"
import { Home } from '@/app/home';
import { StatusBar } from "expo-status-bar";

export default function App() {

  const [fonstLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_800ExtraBold,
  })

  if(!fonstLoaded){
    return null;
  }
  return (
    <>
     <StatusBar style="light" backgroundColor="transparent" translucent/>
     <Home />
    </>
  );
}


