import preStyles from "@/constants/GlobalStyles";
import { Image, Text, View } from "react-native";

export default function LibraryMediaListCard({
  title,
  from,
}: {
  title: string;
  from: string;
}) {
  return (
    <View
      style={[
        preStyles.h9,
        preStyles.w95,
        preStyles.rounded10,
        preStyles.flRow,
        preStyles.itemsCenter,
      ]}
    >
      <View style={[preStyles.hFull, preStyles.w20, preStyles.aspect1]}>
        <Image
          resizeMode="contain"
          style={[preStyles.wFull, preStyles.hFull]}
          source={require("@/assets/images/icon.png")}
        />
      </View>
      <View style={[preStyles.pl10]}>
        <Text style={[preStyles.textWhite, preStyles.size14]}>{title}</Text>
        <Text style={[preStyles.textGray, preStyles.size13]}>{from}</Text>
      </View>
    </View>
  );
}
