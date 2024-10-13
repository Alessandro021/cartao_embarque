import { ImageBackground, Text, View } from 'react-native';
import { styles } from './styles';
import { Ionicons } from "@expo/vector-icons";
import QRCode from "react-native-qrcode-svg";
import Svg, { Line, Circle} from "react-native-svg";

import { Flight } from '@/components/flight';
import { colors } from '@/styles/colors';
import { Info } from '@/components/info';

export const  Home = () => {
  return (
    <View style={styles.container}>
        <ImageBackground style={styles.header} source={require("@/assets/cover.png")}>
            <Text style={styles.title}>Cartão de embarque</Text>
            <Text style={styles.subtitle}>Faltam 45 dias para sua viagem</Text>
        </ImageBackground>

        <View style={styles.ticket}>
            <View style={styles.content}>
                <View style={styles.flight}>
                    <Flight label='São paulo' value='GRU' />
                        <View style={styles.duration}>
                            <Ionicons name='airplane-sharp' size={32} color={colors.black} />
                            <Text style={styles.hours}>2h 30m</Text>
                        </View>
                    <Flight label='Brasilia' value='JFK' />
                </View>

                <Text style={styles.label}>Passageiro</Text>
                <Text style={styles.name}>Alessandro da Mata</Text>

                <View style={styles.details}>
                    <View style={styles.inline}>
                        <Info label="Data" value="17 de Nov."/>
                        <Info label="Embarque" value="17:25"/>
                    </View>
                </View>
            </View>

            <View>
                <Svg height={20} width="100%">
                    <Line x1="0%" y1="50%" x2="100%" y2="50%" stroke={colors.gray[400]} strokeWidth={1} strokeDasharray="5,5"/>
                    <Circle r="8" cx="0%" cy="50%" fill={colors.gray[800]} />
                    <Circle r="8" cx="100%" cy="50%" fill={colors.gray[800]} />
                </Svg>
            </View>

            <View style={styles.footer}>
                <View style={styles.footerContent}>
                    <View style={styles.inline}>
                        <Info label="Voo" value="YZ 607"/>
                        <Info label="Assento" value="19H"/>
                    </View>

                    <View style={styles.inline}>
                        <Info label="Terminal" value="7"/>
                        <Info label="Portão" value="22"/>
                    </View>
                </View>
                <QRCode  value="boarding code" size={130}/>
            </View>
    
        </View>
    </View>
  );
}

