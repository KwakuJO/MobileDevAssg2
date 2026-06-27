import LibraryMediaListCard from "@/components/LibraryMediaListCard";
import preStyles from "@/constants/GlobalStyles";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

export default function Library() {
  return (
    <View style={[preStyles.hFull, preStyles.bgDarkGray, preStyles.p10]}>
      <View style={[preStyles.h12, preStyles.wFull]}>
        <View
          style={[
            preStyles.flRow,
            preStyles.itemsCenter,
            preStyles.gap2,
            preStyles.p10,
            preStyles.pl0,
          ]}
        >
          <View style={[preStyles.w9, preStyles.aspect1]}>
            <Image
              style={[preStyles.hFull, preStyles.wFull, preStyles.rounded50]}
              source={require("@/assets/images/icon.png")}
            />
          </View>
          <Text style={[preStyles.textWhite, preStyles.bold, preStyles.size20]}>
            Bibliothèque
          </Text>
        </View>
        <View style={[preStyles.flRow, preStyles.gap2, preStyles.p5]}>
          <Pressable style={[preStyles.hFull, preStyles.aspect1]}>
            <Image
              style={[preStyles.hFull, preStyles.wFull, preStyles.rounded50]}
              source={require("@/assets/images/icon.png")}
            />
          </Pressable>
          <Pressable>
            <Text
              style={[
                preStyles.bgGray,
                preStyles.rounded20,
                preStyles.p5,
                preStyles.pl10,
                preStyles.pr10,
              ]}
            >
              Listes de lecture
            </Text>
          </Pressable>
          <Pressable>
            <Text
              style={[
                preStyles.bgGray,
                preStyles.rounded20,
                preStyles.p5,
                preStyles.pl10,
                preStyles.pr10,
              ]}
            >
              Albums
            </Text>
          </Pressable>
          <Pressable>
            <Text
              style={[
                preStyles.bgGray,
                preStyles.rounded20,
                preStyles.p5,
                preStyles.pl10,
                preStyles.pr10,
              ]}
            >
              Artistes
            </Text>
          </Pressable>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={[
          preStyles.flCol,
          preStyles.itemsCenter,
          preStyles.gap2,
          preStyles.hFull,
          preStyles.p5,
        ]}
      >
        <View style={[preStyles.wFull]}>
          <Text style={preStyles.textWhite}>Récents</Text>
        </View>
        <LibraryMediaListCard
          title="Chansons aimées"
          from="Liste de lecture • Kwaks"
        />
        <LibraryMediaListCard
          title="Lords Bop"
          from="Liste de lecture • Kwaks"
        />
        <LibraryMediaListCard title="Christ" from="Liste de lecture • Kwaks" />
        <LibraryMediaListCard
          title="Bass in the Line"
          from="Liste de lecture • Kwaks"
        />
        <LibraryMediaListCard
          title="R + A"
          from="Liste de lecture • Lielt Tessema"
        />
        <LibraryMediaListCard title="Sondae" from="Artiste" />
        <LibraryMediaListCard
          title="Jesus Be The Name"
          from="Simple • Elevation Worship"
        />
        <LibraryMediaListCard
          title="Another Playlist"
          from="Liste de lecture • Egya"
        />
      </ScrollView>
    </View>
  );
}
