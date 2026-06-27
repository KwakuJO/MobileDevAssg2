import preStyles from "@/constants/GlobalStyles";
import { Image, Text, View } from "react-native";

export default function SpotifyAIComponent() {
  return (
    <View
      style={[
        preStyles.flRow,
        preStyles.gap2,
        preStyles.h5,
        preStyles.wFull,
        preStyles.mb3,
      ]}
    >
      <View style={[preStyles.hFull, preStyles.aspect1]}>
        <Image
          resizeMode="contain"
          style={[preStyles.hFull, preStyles.wFull, preStyles.rounded50]}
          source={require("@/assets/images/icon.png")}
        />
      </View>
      <View
        style={[
          preStyles.justifyCenter,
          preStyles.w85,
          preStyles.rounded20,
          preStyles.bgGray,
        ]}
      >
        <Text style={[preStyles.textGray]}>
          {" "}
          Demandez de faire jouer de la musique
        </Text>
      </View>
    </View>
  );
}
