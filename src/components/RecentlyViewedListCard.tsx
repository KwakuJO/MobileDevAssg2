import preStyles from "@/constants/GlobalStyles";
import { Image, Text, View } from "react-native";

export default function RecentlyViewedListCard({title}: {title: string}) {
    return(
        <View style={[ preStyles.flRow, preStyles.itemsCenter ,preStyles.h22, preStyles.w49, preStyles.bgGray, preStyles.rounded5 ]}>
            <Image
                style={[ preStyles.hFull, preStyles.w25, preStyles.resizeCover, preStyles.rounded5 ]}
                source={require('@/assets/images/icon.png')}
            />
            <Text style={[ preStyles.alignCenter, preStyles.bold, preStyles.textWhite, preStyles.pl5, preStyles.size13, preStyles.hFull]}>{title}</Text>
        </View>
    );
}

