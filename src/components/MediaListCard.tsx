import preStyles from "@/constants/GlobalStyles";
import { Image, Text, View } from "react-native";

export default function MediaListCard({
  title,
  artist,
}: {
  title: string;
  artist: string;
}) {
  return (
    <View style={[preStyles.hFull]}>
      <View style={[preStyles.flCol, preStyles.wFull, preStyles.hFull]}>
        <View style={[preStyles.h70, preStyles.aspect1, preStyles.rounded10]}>
          <Image
            resizeMode="contain"
            style={[preStyles.hFull, preStyles.wFull, preStyles.rounded10]}
            source={require("@/assets/images/icon.png")}
          />
        </View>

        <View>
          <Text style={[preStyles.textWhite, preStyles.bold]}>{title}</Text>
          <Text style={[preStyles.textGray]}>{artist}</Text>
        </View>
      </View>
    </View>
  );
}
