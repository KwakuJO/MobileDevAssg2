import MediaListCard from "@/components/MediaListCard";
import RecentlyViewedListCard from "@/components/RecentlyViewedListCard";
import SpotifyAIComponent from "@/components/SpotifyAIComponent";
import UpcomingReleasesCard from "@/components/UpcomingReleasesCard";
import preStyles from "@/constants/GlobalStyles";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

/* 
Heres what you need to do:
  - Modify the Library Screen
    - Make it look better and update the assets
  - Make the Research Screen
  - Modulate the current set of Shenanigans
  - Move the styling into a proper styling format
  - Add placeholder Images
  - Fix Currently "wrong" text


*/
export default function Index() {
  return (
    <View style={[preStyles.hFull, preStyles.bgDarkGray, preStyles.p10]}>
      <View
        style={[
          preStyles.flRow,
          preStyles.itemsCenter,
          preStyles.gap2,
          preStyles.h7,
          preStyles.wFull,
          // preStyles.pl10
        ]}
      >
        <View style={[preStyles.w8, preStyles.aspect1]}>
          <Image
            style={[
              preStyles.hFull,
              preStyles.wFull,
              // preStyles.resizeContain,
              preStyles.rounded50,
            ]}
            source={require("@/assets/images/icon.png")}
          />
        </View>
        <Pressable>
          <Text
            style={[
              preStyles.bgGreen,
              preStyles.rounded20,
              preStyles.p5,
              preStyles.pl10,
              preStyles.pr10,
            ]}
          >
            Tout
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
            Musique
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
            Balados
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
            Livres audio
          </Text>
        </Pressable>
      </View>
      <ScrollView contentContainerStyle={[styles.container]}>
        {/* This is the top most section wwith whatever tabs they are */}
        {/* Below is the recently viewed library lists */}
        <View
          style={[
            preStyles.flRow,
            preStyles.justifyBetween,
            preStyles.alignEvenly,
            preStyles.wrap,
            preStyles.h30,
            preStyles.wFull,
            preStyles.pb5,
          ]}
        >
          <RecentlyViewedListCard title="SOMEBODY PRAYED" />
          <RecentlyViewedListCard title="Top Christian & Gospel" />
          <RecentlyViewedListCard title="Chansons aimées" />
          <RecentlyViewedListCard title="Lords Bop" />
          <RecentlyViewedListCard title="Christ" />
          <RecentlyViewedListCard title="Bass in the Line" />
          <RecentlyViewedListCard title="R + A" />
          <RecentlyViewedListCard title="Sondae" />
        </View>
        {/* Below is the AI for spotify to find new lists */}
        <SpotifyAIComponent />

        {/* Below is the recommended radio stations / new releases */}
        <UpcomingReleasesCard from="LIN D" album="Messed Up Messenger" />

        {/* Below is the stuff that you previously listened to */}
        <View style={[preStyles.h35, preStyles.wFull]}>
          <Text style={[preStyles.textWhite, preStyles.bold, preStyles.size16]}>
            C'est la Nouvelle musique du vendredi!
          </Text>
          <ScrollView
            horizontal={true}
            contentContainerStyle={[
              preStyles.gap4,
              preStyles.wFull,
              preStyles.bgDarkGray,
            ]}
          >
            <MediaListCard title="Song Name" artist="Artist" />
            <MediaListCard title="Song Name" artist="Artist" />
            <MediaListCard title="Song Name" artist="Artist" />
            <MediaListCard title="Song Name" artist="Artist" />
          </ScrollView>
        </View>
        {/* Below is Just stuffing */}
        <View style={[preStyles.h35, preStyles.wFull]}>
          <Text style={[preStyles.textWhite, preStyles.bold, preStyles.size16]}>
            Nouveautés personnelles
          </Text>
          <ScrollView
            horizontal={true}
            contentContainerStyle={[
              preStyles.gap4,
              preStyles.wFull,
              preStyles.bgDarkGray,
            ]}
          >
            <MediaListCard title="Song Name" artist="Artist" />
            <MediaListCard title="Song Name" artist="Artist" />
            <MediaListCard title="Song Name" artist="Artist" />
            <MediaListCard title="Song Name" artist="Artist" />
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
