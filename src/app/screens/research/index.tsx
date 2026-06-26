import MediaGenreCard from "@/components/MediaGenreCard";
import SmallMediaCard from "@/components/SmallMediaCard";
import VideoClipsCard from "@/components/VideoClipsCard";
import preStyles from "@/constants/GlobalStyles";
import { ScrollView, Text, View } from "react-native";

export default function Home() {
    return(
        <View style={[ preStyles.hFull, preStyles.wFull, preStyles.bgDarkGray]}>
            <ScrollView contentContainerStyle={[ preStyles.hFull ]}>
                <View style={[ preStyles.wFull, preStyles.h5 ]}>
                    <Text style={[ preStyles.textWhite, preStyles.bold, preStyles.size16 ]}>Rechercher</Text>
                </View>
                <View style={[ preStyles.flRow, preStyles.wrap, preStyles.justifyAround, preStyles.alignEvenly, preStyles.h25, preStyles.p5]}>
                    <View style={[ preStyles.wFull, preStyles.h15]}>
                        <Text style={[ preStyles.textWhite, preStyles.bold, preStyles.size16 ]}>Commencer à parcourir</Text>
                    </View>
                    
                    <SmallMediaCard />
                    <SmallMediaCard />
                    <SmallMediaCard />
                    <SmallMediaCard />
                </View>
                <View style={[ preStyles.h35 ]}>
                    <View style={[ preStyles.wFull, preStyles.h15 ]}>
                        <Text style={[ preStyles.textWhite, preStyles.bold, preStyles.size16, preStyles.p5 ]}>Découvrez des vidéoclips</Text>
                    </View>
                    <ScrollView horizontal={true} contentContainerStyle={[ preStyles.flRow, preStyles.gap2, preStyles.h90, preStyles.wFull, preStyles.pl10]}>
                        <VideoClipsCard />
                        <VideoClipsCard />
                        <VideoClipsCard />
                        <VideoClipsCard />
                        <VideoClipsCard />
                    </ScrollView>
                </View>
                <View style={[ preStyles.hFull, preStyles.flRow, preStyles.wrap, preStyles.justifyAround, preStyles.gap1 ]}>
                    <View style={[ preStyles.wFull, preStyles.h3 ]}>
                        <Text style={[ preStyles.textWhite, preStyles.bold, preStyles.size16, preStyles.pl5 ]}>Tout parcourir</Text>
                    </View>
                    <MediaGenreCard />
                    <MediaGenreCard />
                    <MediaGenreCard />
                    <MediaGenreCard />
                    <MediaGenreCard />
                    <MediaGenreCard />
                    <MediaGenreCard />
                    <MediaGenreCard />
                    <MediaGenreCard />
                    <MediaGenreCard />
                    <MediaGenreCard />
                    <MediaGenreCard />
                </View>
            </ScrollView>
        </View>
    );
}