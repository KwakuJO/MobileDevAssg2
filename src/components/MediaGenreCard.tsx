import preStyles from "@/constants/GlobalStyles";
import { Text, View } from "react-native";

export default function MediaGenreCard({title}: {title: string}) {
    return(
        <View style={[ preStyles.w48, preStyles.h15, preStyles.bgGray, preStyles.rounded10]}>
            <Text style={[preStyles.w75 ,preStyles.bold, preStyles.textWhite, preStyles.size14, preStyles.p5, preStyles.pl10]}>{title}</Text>
        </View>
    );
}