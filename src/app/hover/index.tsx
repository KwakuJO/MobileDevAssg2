import preStyles from "@/constants/GlobalStyles";
import { useRouter } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

export default function MusicHover() {
  const route = useRouter();
  return (
    <View style={[preStyles.hFull, preStyles.bgDarkPurple]}>
      <ScrollView contentContainerStyle={[preStyles.wFull, preStyles.hFull]}>
        <View
          style={[
            preStyles.wFull,
            preStyles.hFull,
            preStyles.absolute,
            preStyles.top0,
          ]}
        >
          <Image
            style={[preStyles.hFull, preStyles.wFull]}
            source={require("@/assets/images/logo-glow.png")}
          />
        </View>
        <View style={[preStyles.hFull]}>
          <View
            style={[
              preStyles.flRow,
              preStyles.justifyBetween,
              preStyles.wFull,
              preStyles.h70,
              preStyles.p15,
            ]}
          >
            <Pressable
              onPress={() => route.back()}
              style={[
                preStyles.h5,
                preStyles.aspect1,
                preStyles.itemsCenter,
                preStyles.justifyCenter,
              ]}
            >
              <Text
                style={[preStyles.textWhite, preStyles.bold, preStyles.size20]}
              >
                v
              </Text>
            </Pressable>
            <View
              style={[
                preStyles.h5,
                preStyles.aspect1,
                preStyles.itemsCenter,
                preStyles.justifyCenter,
                preStyles.w47,
              ]}
            >
              <Text
                style={[preStyles.textWhite, preStyles.bold, preStyles.size16]}
              >
                SOMEBODY PRAYED
              </Text>
            </View>
            <Pressable
              style={[
                preStyles.h5,
                preStyles.aspect1,
                preStyles.itemsCenter,
                preStyles.justifyCenter,
              ]}
            >
              <Text
                style={[preStyles.textWhite, preStyles.bold, preStyles.size20]}
              >
                ⋯
              </Text>
            </Pressable>
          </View>
          <View style={[preStyles.itemsCenter, preStyles.wFull, preStyles.h45]}>
            <View
              style={[
                preStyles.flRow,
                preStyles.justifyBetween,
                preStyles.w95,
                preStyles.h22,
                preStyles.itemsCenter,
              ]}
            >
              <View style={[preStyles.hFull, preStyles.justifyCenter]}>
                <Text
                  style={[
                    preStyles.textWhite,
                    preStyles.bold,
                    preStyles.size25,
                  ]}
                >
                  SOMEBODY PRAYED
                </Text>
                <Text style={[preStyles.textGray, preStyles.size14]}>
                  Forrest Frank, Tate Butts
                </Text>
              </View>
              <View style={[preStyles.h45, preStyles.aspect1]}>
                <Image
                  resizeMode="contain"
                  style={[
                    preStyles.wFull,
                    preStyles.hFull,
                    preStyles.rounded50,
                  ]}
                  source={require("@/assets/images/icon.png")}
                />
              </View>
            </View>
            <View style={[preStyles.w95, preStyles.h15]}>
              <input type="range" />
            </View>
            <View
              style={[
                preStyles.flRow,
                preStyles.w95,
                preStyles.h22,
                preStyles.justifyBetween,
                preStyles.itemsCenter,
              ]}
            >
              <View style={[preStyles.h47, preStyles.aspect1]}>
                <Image
                  style={[preStyles.wFull, preStyles.hFull]}
                  source={require("@/assets/images/icon.png")}
                />
              </View>
              <View style={[preStyles.h47, preStyles.aspect1]}>
                <Image
                  style={[preStyles.wFull, preStyles.hFull]}
                  source={require("@/assets/images/icon.png")}
                />
              </View>
              <View style={[preStyles.h65, preStyles.aspect1]}>
                <Image
                  style={[preStyles.wFull, preStyles.hFull]}
                  source={require("@/assets/images/icon.png")}
                />
              </View>
              <View style={[preStyles.h47, preStyles.aspect1]}>
                <Image
                  style={[preStyles.wFull, preStyles.hFull]}
                  source={require("@/assets/images/icon.png")}
                />
              </View>
              <View style={[preStyles.h47, preStyles.aspect1]}>
                <Image
                  style={[preStyles.wFull, preStyles.hFull]}
                  source={require("@/assets/images/icon.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
