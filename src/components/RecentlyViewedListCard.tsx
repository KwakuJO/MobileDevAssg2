import { StyleSheet, View } from "react-native";

export default function RecentlyViewedListCard() {
    return(
        <View style={[ preStyles.h22, preStyles.w48, preStyles.bgBrown, preStyles.rounded10 ]}>
        
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
  pl5: { paddingLeft: 5 },
  pr5: { paddingRight: 5 },
  pb5: { paddingBottom: 5 },
  pl10: { paddingLeft: 10 },
  pr10: { paddingRight: 10 },
  m2: { margin: "2%" },

  h3: { height: "3%" },
  h5: { height: "5%" },
  h7: { height: "7%" },
  h15: { height: "15%" },
  h22: { height: "22%" },
  h25: { height: "25%" },
  h30: { height: "30%" },
  h35: { height: "35%" },
  h65: { height: "65%" },
  h70: { height: "70%" },
  hFull: { height: "100%" },

  w15: { width: "15%" },
  w48: { width: "48%"},
  w85: { width: "85%"},
  w95: { width: "95%"},
  wFull: { width: "100%" },

  rounded10: {borderRadius: 10},
  rounded20: {borderRadius: 20},
});