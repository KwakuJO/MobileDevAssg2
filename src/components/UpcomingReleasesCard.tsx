import preStyles from "@/constants/GlobalStyles";
import { Image, Text, View } from "react-native";

export default function UpcomingReleasesCard({from, album}: {from: string, album: string}) {
    return(
        <View style={[ preStyles.h30, preStyles.wFull]}>
            <View style={[ preStyles.flCol, preStyles.itemsCenter, preStyles.wFull, preStyles.hFull ]}>
            <View style={[ preStyles.flRow, preStyles.wFull, preStyles.h25, preStyles.itemsCenter ]}>
                <View style={[ preStyles.w10, preStyles.h75 ]}>
                    <Image
                        style={[ preStyles.hFull, preStyles.wFull, preStyles.resizeContain, preStyles.rounded50 ]}
                        source={require('@/assets/images/icon.png')}
                    />
                </View>
                <View style={[ preStyles.flCol, preStyles.pl10 ]}>
                    <Text style={[ preStyles.textGray, preStyles.size11 ]}>Nouveautés de</Text>
                    <Text style={[ preStyles.textWhite, preStyles.bold, preStyles.size16 ]}>{from}</Text>
                </View>
            </View>
            <View style={[ preStyles.flRow ,preStyles.wFull, preStyles.h70, preStyles.bgGray, preStyles.rounded10 ]}>
                <View style={[ preStyles.w38,]}>
                    <Image
                        style={[ preStyles.hFull, preStyles.wFull, preStyles.resizeContain, preStyles.rounded10 ]}
                        source={require('@/assets/images/icon.png')}
                    />
                </View>
                <View style={[ preStyles.p10 ]}>
                    <Text style={[ preStyles.textGray ]}>Monoplage</Text>
                    <Text style={[ preStyles.textWhite ]}>{album}</Text>
                    <Text style={[ preStyles.textGray ]}>{from}</Text>
                </View>
            </View>
            </View>
        </View>
    );
}