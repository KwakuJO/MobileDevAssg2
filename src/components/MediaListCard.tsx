import { Image, StyleSheet, Text, View } from "react-native";

export default function MediaListCard() {
    return(
        <View style={[ preStyles.w48, preStyles.hFull ]}>
            <View style={[ preStyles.flCol, preStyles.wFull, preStyles.hFull ]}>
                <View style={[ preStyles.w95, preStyles.h70, preStyles.bgGray, preStyles.rounded10 ]}>
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

const preStyles = StyleSheet.create({
  bgDarkGray: { backgroundColor: "rgb(20, 20, 20)" },
  bgGray: { backgroundColor: "rgb(80, 80, 80)", color: "rgb(220, 220, 220)"},
  bgGreen: { backgroundColor: "green", color: "black"},
  bgBrown: { backgroundColor: "brown" },

  textGray: { color: "rgb(200, 200, 200)" },
  textWhite: { color: "rgb(240, 240, 240)" },

  bold: { fontWeight: "700" },
  size11: { fontSize: 11 },
  size16: { fontSize: 16 },

  flRow: {display: "flex", flexDirection: "row"},
  flCol: {display: "flex", flexDirection: "column"},

  wrap: {flexWrap: "wrap"},

  justifyAround: {justifyContent: "space-around"},
  justifyCenter: {justifyContent: "center"},
  itemsCenter: {alignItems: "center"},
  alignEvenly: {alignContent: "space-around"},

  gap2: { gap: "2%" },
  gapRow3: { rowGap: "3%" },
  gap4: { gap: "4%" },
  p5: { padding: 5 },
  pl10: { paddingLeft: 10 },
  pr10: { paddingRight: 10 },
  m2: { margin: "2%" },

  h3: { height: "3%" },
  h5: { height: "5%" },
  h7: { height: "7%" },
  h15: { height: "15%" },
  h22: { height: "22%" },
  h25: { height: "25%" },
  h35: { height: "35%" },
  h65: { height: "65%" },
  h70: { height: "75%" },
  hFull: { height: "100%" },

  w15: { width: "15%" },
  w48: { width: "48%"},
  w85: { width: "85%"},
  w95: { width: "95%"},
  wFull: { width: "100%" },

  rounded10: {borderRadius: 10},
  rounded20: {borderRadius: 20},
});