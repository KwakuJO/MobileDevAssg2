import LibraryMediaListCard from "@/components/LibraryMediaListCard";
import preStyles from "@/constants/GlobalStyles";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

export default function Library() {
    return(
        <View style={[ preStyles.hFull, preStyles.bgDarkGray ]}>
            <View style={[ preStyles.flCol, preStyles.wFull, preStyles.p5]}>
                <View>
                    <Text style={[ preStyles.textWhite, preStyles.bold, preStyles.size16 ]}>Bibliothèque</Text>
                </View>
                <View style={[ preStyles.flRow, preStyles.gap2 ]}>
                    <Image />
                    <Pressable>
                        <Text style={[ preStyles.bgGray, preStyles.rounded20, preStyles.p5, preStyles.pl10, preStyles.pr10 ]}>Listes de lecture</Text>
                    </Pressable>
                    <Pressable>
                        <Text style={[ preStyles.bgGray, preStyles.rounded20, preStyles.p5, preStyles.pl10, preStyles.pr10 ]}>Albums</Text>
                    </Pressable>
                    <Pressable>
                        <Text style={[ preStyles.bgGray, preStyles.rounded20, preStyles.p5, preStyles.pl10, preStyles.pr10 ]}>Artistes</Text>
                    </Pressable>
                </View>
            </View>
            <ScrollView contentContainerStyle={[ preStyles.flCol, preStyles.itemsCenter, preStyles.gap1, preStyles.hFull]}>
                <View style={[ preStyles.wFull, preStyles.p5 ]}>
                    <Text style= { preStyles.textWhite}>Récents</Text>
                </View>
                <LibraryMediaListCard />
                <LibraryMediaListCard />
                <LibraryMediaListCard />
                <LibraryMediaListCard />
                <LibraryMediaListCard />
                <LibraryMediaListCard />
                <LibraryMediaListCard />
                <LibraryMediaListCard />
                <LibraryMediaListCard />
                <LibraryMediaListCard />
                <LibraryMediaListCard />
                <LibraryMediaListCard />
            </ScrollView>
        </View>
    );
}
