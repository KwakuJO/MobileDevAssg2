import preStyles from "@/constants/GlobalStyles";
import { Text, View, ViewStyle } from "react-native";

export default function SmallMediaCard({text, color}: {text: string, color: ViewStyle}) {
    return (
        <View style={[ preStyles.h35, preStyles.w49, preStyles.bgGray, preStyles.rounded5, preStyles.p5, color ]}>
            <Text style={[ preStyles.textWhite, preStyles.bold]}>{text}</Text>
        </View>
    );
}
