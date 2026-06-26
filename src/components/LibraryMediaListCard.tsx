import preStyles from "@/constants/GlobalStyles";
import { Image, Text, View } from "react-native";

export default function LibraryMediaListCard() {
    return(
        <View style={[ preStyles.h9, preStyles.w95, preStyles.bgGray, preStyles.rounded10 ]}>
            <View>
                <Image />
            </View>
            <View>
                <Text></Text>
                <Text></Text>
            </View>
        </View>
    );
}
