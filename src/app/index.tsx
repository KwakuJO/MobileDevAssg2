import MediaListCard from "@/components/MediaListCard";
import RecentlyViewedListCard from "@/components/RecentlyViewedListCard";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={[ preStyles.hFull, preStyles.bgDarkGray ]}>
      <View style={[ 
        preStyles.flRow, 
        preStyles.itemsCenter,
        preStyles.gap2, 
        preStyles.h7, 
        preStyles.wFull,
        ]}>
        <Image />
        <Pressable>
          <Text style={[ preStyles.bgGray, preStyles.rounded20, preStyles.p5, preStyles.pl10, preStyles.pr10 ]}>Tout</Text>
        </Pressable>
        <Pressable>
          <Text style={[ preStyles.bgGray, preStyles.rounded20, preStyles.p5, preStyles.pl10, preStyles.pr10 ]}>Musique</Text>
        </Pressable>
        <Pressable>
          <Text style={[ preStyles.bgGray, preStyles.rounded20, preStyles.p5, preStyles.pl10, preStyles.pr10 ]}>Balados</Text>
        </Pressable>
        <Pressable>
          <Text style={[ preStyles.bgGray, preStyles.rounded20, preStyles.p5, preStyles.pl10, preStyles.pr10 ]}>Livres audio</Text>
        </Pressable>
      </View>
      <ScrollView contentContainerStyle={[ styles.container]}>
        {/* This is the top most section wwith whatever tabs they are */}
        {/* Below is the recently viewed library lists */}
        <View style={[ 
          preStyles.flRow, 
          preStyles.justifyAround, 
          preStyles.alignEvenly, 
          preStyles.wrap, 
          preStyles.h30, 
          preStyles.wFull, 
          preStyles.pl5, preStyles.pr5, preStyles.pb5 
          ]}>

          <RecentlyViewedListCard />
          <RecentlyViewedListCard />
          <RecentlyViewedListCard />
          <RecentlyViewedListCard />
          <RecentlyViewedListCard />
          <RecentlyViewedListCard />
          <RecentlyViewedListCard />
          <RecentlyViewedListCard />
        </View>
        {/* Below is the AI for spotify to find new lists */}
        <View style={[ preStyles.flRow, preStyles.h5, preStyles.wFull, ]}>
            <Image />
            <View style={[ preStyles.justifyCenter, preStyles.w85, preStyles.rounded20, preStyles.bgGray ]}>
              <Text style={[ preStyles.textGray]}> Demandez de faire jouer de la musique</Text>
            </View>
        </View>
        {/* Below is the recommended radio stations / new releases */}
        <View style={[ preStyles.h30, preStyles.wFull]}>
          <View style={[ preStyles.flCol, preStyles.itemsCenter, preStyles.wFull, preStyles.hFull ]}>
            <View style={[ preStyles.flRow, preStyles.wFull, preStyles.h25, preStyles.itemsCenter ]}>
              <Image />
              <View style={[ preStyles.flCol ]}>
                <Text style={[ preStyles.textGray, preStyles.size11 ]}>Upcoming release from</Text>
                <Text style={[ preStyles.textWhite, preStyles.bold, preStyles.size16 ]}>Housefires</Text>
              </View>
            </View>
            <View style={[ preStyles.w95, preStyles.h70, preStyles.bgGray, preStyles.rounded10 ]}>
              <Text style={[ preStyles.textGray ]}>Album</Text>
              <Text style={[ preStyles.textWhite ]}>House Church Vol. 001</Text>
              <Text style={[ preStyles.textGray ]}>Housefires</Text>
            </View>
          </View>
        </View>
        {/* Below is the stuff that you previously listened to */}
        <View style={[preStyles.h35, preStyles.wFull]}>
          <Text style={[ preStyles.textWhite, preStyles.bold, preStyles.size16, preStyles.p5, preStyles.pl10]}>Nouveautés personnelles</Text>
          <ScrollView horizontal={true} contentContainerStyle= {[preStyles.gap2, preStyles.wFull, preStyles.bgDarkGray, preStyles.pl10, preStyles.pr10]}>
          <MediaListCard />
          <MediaListCard />
          <MediaListCard />
          <MediaListCard />
          </ScrollView>
        </View>
        {/* Below is Just stuffing */}
        <View style={[preStyles.h35, preStyles.wFull]}>
          <Text style={[ preStyles.textWhite, preStyles.bold, preStyles.size16, preStyles.p5, preStyles.pl10]}>Nouveautés personnelles</Text>
          <ScrollView horizontal={true} contentContainerStyle= {[preStyles.gap2, preStyles.wFull, preStyles.bgDarkGray, preStyles.pl10, preStyles.pr10]}>
          <MediaListCard />
          <MediaListCard />
          <MediaListCard />
          <MediaListCard />
          </ScrollView>
        </View>
      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },

});

const preStyles = StyleSheet.create({
  bgDarkGray: { backgroundColor: "rgb(20, 20, 20)" },
  bgGray: { backgroundColor: "rgb(80, 80, 80)", color: "rgb(220, 220, 220)"},
  bgGreen: { backgroundColor: "green", color: "black"},
  bgBrown: { backgroundColor: "brown" },

  textGray: { color: "rgb(200, 200, 200)" },
  textWhite: { color: "rgb(240, 240, 240)" },

  bold: { fontWeight: "700" },
  size11: { fontSize: 11 },
  size16: { fontSize: 16 },

  flRow: {display: "flex", flexDirection: "row"},
  flCol: {display: "flex", flexDirection: "column"},

  wrap: {flexWrap: "wrap"},

  justifyAround: {justifyContent: "space-around"},
  justifyCenter: {justifyContent: "center"},
  itemsCenter: {alignItems: "center"},
  alignEvenly: {alignContent: "space-around"},

  gap2: { gap: "2%" },
  gapRow3: { rowGap: "3%" },
  gap4: { gap: "4%" },
  p5: { padding: 5 },
  pl5: { paddingLeft: 5 },
  pr5: { paddingRight: 5 },
  pb5: { paddingBottom: 5 },
  pl10: { paddingLeft: 10 },
  pr10: { paddingRight: 10 },
  m2: { margin: "2%" },

  h3: { height: "3%" },
  h5: { height: "5%" },
  h7: { height: "7%" },
  h15: { height: "15%" },
  h22: { height: "22%" },
  h25: { height: "25%" },
  h30: { height: "30%" },
  h35: { height: "35%" },
  h65: { height: "65%" },
  h70: { height: "70%" },
  hFull: { height: "100%" },

  w15: { width: "15%" },
  w48: { width: "48%"},
  w85: { width: "85%"},
  w95: { width: "95%"},
  wFull: { width: "100%" },

  rounded10: {borderRadius: 10},
  rounded20: {borderRadius: 20},
});