import preStyles from "@/constants/GlobalStyles";
import { useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

export default function SongPlayingCard({
  title,
  artist,
}: {
  title: string;
  artist: string;
}) {
  const route = useRouter();
  return (
    <View
      style={[
        preStyles.hFull,
        preStyles.w95,
        preStyles.bgDarkPurple,
        preStyles.rounded10,
      ]}
    >
      <Pressable
        style={[
          preStyles.w97,
          preStyles.hFull,
          preStyles.rounded10,
          preStyles.flRow,
          preStyles.itemsCenter,
          preStyles.pl10,
        ]}
        onPress={() => route.navigate("/hover")}
      >
        <View style={[preStyles.h75, preStyles.aspect1]}>
          <Image
            resizeMode="contain"
            style={[preStyles.wFull, preStyles.hFull, preStyles.rounded10]}
            source={require("@/assets/images/icon.png")}
          />
        </View>
        <View style={[preStyles.flCol, preStyles.pl10]}>
          <Text style={[preStyles.textWhite]}>{title}</Text>
          <Text style={[preStyles.textGray, preStyles.size11]}>{artist}</Text>
        </View>
      </Pressable>
    </View>
  );
}
