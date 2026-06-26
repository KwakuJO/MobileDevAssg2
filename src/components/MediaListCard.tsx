import preStyles from "@/constants/GlobalStyles";
import { Image, Text, View } from "react-native";

export default function MediaListCard() {
    return(
        <View style={[ preStyles.w48, preStyles.hFull ]}>
            <View style={[ preStyles.flCol, preStyles.wFull, preStyles.hFull ]}>
                <View style={[ preStyles.w95, preStyles.h75, preStyles.bgGray, preStyles.rounded10 ]}>
                    <Image />
                </View>
            
                <View>
                    <Text style={[ preStyles.textWhite, preStyles.bold ]}>Song Name</Text>
                    <Text style={[ preStyles.textGray ]}>Artist</Text>
                </View>
            </View>
        </View>
    );
}
