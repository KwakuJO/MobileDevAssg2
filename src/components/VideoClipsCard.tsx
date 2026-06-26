import preStyles from "@/constants/GlobalStyles";
import { Text, View } from "react-native";

export default function VideoClipsCard({title}: {title: string}) {
    return(
        <View style={[ preStyles.w36, preStyles.hFull, preStyles.bgGray, preStyles.rounded10]}>
            <Text style={[ preStyles.textWhite, preStyles.p5]}>{title}</Text>
        </View>
    );
}