import MediaGenreCard from "@/components/MediaGenreCard";
import SmallMediaCard from "@/components/SmallMediaCard";
import VideoClipsCard from "@/components/VideoClipsCard";
import preStyles from "@/constants/GlobalStyles";
import { Image, ScrollView, Text, TextInput, View } from "react-native";

export default function Research() {
  return (
    <View
      style={[
        preStyles.hFull,
        preStyles.wFull,
        preStyles.bgDarkGray,
        preStyles.p10,
      ]}
    >
      <View
        style={[
          preStyles.flRow,
          preStyles.itemsCenter,
          preStyles.gap2,
          preStyles.h7,
          preStyles.wFull,
        ]}
      >
        <View style={[preStyles.h59, preStyles.aspect1]}>
          <Image
            resizeMode="contain"
            style={[preStyles.hFull, preStyles.wFull, preStyles.rounded50]}
            source={require("@/assets/images/icon.png")}
          />
        </View>
        <Text style={[preStyles.textWhite, preStyles.bold, preStyles.size20]}>
          Rechercher
        </Text>
      </View>
      <View
        style={[
          preStyles.wFull,
          preStyles.h5,
          preStyles.bgWhite,
          preStyles.itemsCenter,
          preStyles.rounded5,
          preStyles.pl5,
          preStyles.pr5,
          preStyles.flRow,
        ]}
      >
        <Text
          style={[preStyles.hFull, preStyles.alignCenter, preStyles.size20]}
        >
          🔍
        </Text>
        <TextInput
          placeholder="Que voulez-vous écouter?"
          style={[preStyles.hFull, preStyles.flex1]}
        ></TextInput>
      </View>
      <ScrollView contentContainerStyle={[preStyles.hFull]}>
        <View
          style={[
            preStyles.flRow,
            preStyles.wrap,
            preStyles.justifyBetween,
            preStyles.alignEvenly,
            preStyles.h25,
          ]}
        >
          <View style={[preStyles.wFull, preStyles.h15]}>
            <Text
              style={[preStyles.textWhite, preStyles.bold, preStyles.size16]}
            >
              Commencer à parcourir
            </Text>
          </View>

          <SmallMediaCard text="De la musique" color={preStyles.bgStrongPink} />
          <SmallMediaCard text="Podcasts" color={preStyles.bgTealGreen} />
          <SmallMediaCard text="Livres audio" color={preStyles.bgDarkBlue} />
          <SmallMediaCard
            text="Évenements en direct"
            color={preStyles.bgPurple}
          />
        </View>
        <View style={[preStyles.h35]}>
          <View style={[preStyles.wFull, preStyles.h15]}>
            <Text
              style={[preStyles.textWhite, preStyles.bold, preStyles.size16]}
            >
              Découvrez des vidéoclips
            </Text>
          </View>
          <ScrollView
            horizontal={true}
            contentContainerStyle={[
              preStyles.flRow,
              preStyles.gap2,
              preStyles.h90,
              preStyles.wFull,
            ]}
          >
            <VideoClipsCard title="Vidéos pour vous" />
            <VideoClipsCard title="Good Vibes" />
            <VideoClipsCard title="90s Video Hits" />
            <VideoClipsCard title="" />
          </ScrollView>
        </View>
        <View
          style={[
            preStyles.hFull,
            preStyles.flRow,
            preStyles.wrap,
            preStyles.justifyAround,
            preStyles.gap1,
          ]}
        >
          <View style={[preStyles.wFull, preStyles.h3]}>
            <Text
              style={[
                preStyles.textWhite,
                preStyles.bold,
                preStyles.size16,
                preStyles.pl5,
              ]}
            >
              Tout parcourir
            </Text>
          </View>
          <MediaGenreCard title="Entraînement physique" />
          <MediaGenreCard title="Juste pour vous" />
          <MediaGenreCard title="Prochaines sorties" />
          <MediaGenreCard title="Nouvelles sorties" />
          <MediaGenreCard title="Été" />
          <MediaGenreCard title="Mois de la musique noire 2026" />
          <MediaGenreCard title="Hip-hop" />
          <MediaGenreCard title="Pop" />
          <MediaGenreCard title="Country" />
          <MediaGenreCard title="Palmarès" />
        </View>
      </ScrollView>
    </View>
  );
}
