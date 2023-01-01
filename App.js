/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  TextInput,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const RedButton = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity testID="blueButton" style={styles.buttonContiner} onPress={() => console.log("Hello world")}>
        <Text testID="blueText">Blue</Text>
      </TouchableOpacity>
      <TouchableOpacity testID="redButton" style={[styles.buttonContiner, { backgroundColor: "red" }]}>
        <Text testID="redText">Red</Text>
      </TouchableOpacity>
    </View>
  )
}
const DownloadTab = (props) => {
  return (
    <View testID='downloadTabView' style={[styles.tabMainContainer, styles.tabDownloadShadow]}>
      <View style={styles.tabTopContainer}>
        <Image
          style={styles.downloadImage}
          source={{ uri: 'https://res.cloudinary.com/thushal/image/upload/v1671478006/output-onlinepngtools_sn5wj6.png' }}
        />
      </View>
      <View style={styles.tabCenterContainer}>
        <Text style={styles.labelSpeedNumber}>90.89 <Text style={styles.labelSpeedMeasure}>Mbps</Text></Text>
      </View>
      <View style={styles.tabButtomContainer}>
        <Text style={styles.labelDownload}>Download Speed</Text>
      </View>
    </View>
  )
}
const UploadTab = (props) => {
  return (
    <View testID='uploadTabView' style={[styles.tabMainContainer, styles.tabDownloadShadow]}>
      <View style={styles.tabTopContainer}>
        <Image
          style={styles.downloadImage}
          source={{ uri: 'https://res.cloudinary.com/thushal/image/upload/v1671561443/uploadarrow_t8ztag.png' }}
        />
      </View>
      <View style={styles.tabCenterContainer}>
        <Text style={styles.labelSpeedNumber}>1.01 <Text style={styles.labelSpeedMeasure}>Mbps</Text></Text>
      </View>
      <View style={styles.tabButtomContainer}>
        <Text style={styles.labelDownload}>Upload Speed</Text>
      </View>
    </View>
  )
}
const InstructionTab = (props) => {
  return (
    <View testID='instructionTabView' style={[styles.instaMainContainer, styles.tabDownloadShadow]}>
      <View style={styles.instaLeftContainer}>
        <View style={styles.instaLeftTopContainer}>
          <Text style={styles.labelInstruction}>Instructions</Text>
        </View>
        <View style={styles.instaLeftCenterContainer}>
          <Text style={styles.labelReadInternet}>Read Internet</Text>
          <Text style={styles.labelReadInternet}>Instructions</Text>
        </View>
        <View style={styles.instaLeftButtomContainer}>
          <Text style={styles.labelSeeHere}>See here</Text>
        </View>
      </View>
      <View style={styles.instaRightContainer}>
        <Image
          style={styles.shareImage}
          source={{ uri: 'https://res.cloudinary.com/thushal/image/upload/v1671739590/share_e64tib.png' }}
        />
      </View>
    </View>
  )
}
const LabelWithCountry = () => {
  return (
    <View testID='labelCountryView' style={[styles.mainCountryContainer, styles.tabDownloadShadow]}>
      <View style={styles.mainCountryLeftContainer}>
        <Image
          style={styles.flagImage}
          source={{ uri: 'https://res.cloudinary.com/thushal/image/upload/v1671565913/sri-lanka_qtpkwq.png' }}
        />
      </View>
      <View style={styles.mainCountryCenterContainer}>
        <Text style={styles.labelSpeedMeasure}>Sri Lanka</Text>
      </View>
      <View style={styles.mainCountryRightContainer}>
        <Image
          style={styles.flagImage}
          source={{ uri: 'https://res.cloudinary.com/thushal/image/upload/v1671565921/satellite_cdr53d.png' }}
        />
      </View>
    </View>
  )
}
const CustomTextInput = ({ text, onChangeText }) => {
  return (
    <View style={styles.textView}>
      <TextInput
        testID="textInput"
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  )
}
const LabelWithView = ({ labelName, labelId }) => {
  return (
    <View testID='labelWithContain' style={styles.labelView}>
      <View style={styles.labelLeftView}>
        <Text style={styles.labelText}>{labelName}</Text>
      </View>
      <View style={styles.labelMiddleView}>
        <Image
          style={styles.labelImage}
          source={{ uri: 'https://img.icons8.com/color/96/null/ip-address.png' }}
        />
      </View>
      <View style={styles.labelRightView}>
        <Text style={styles.labelText}>{labelId}</Text>
      </View>
    </View>
  )
}
const CustomImage = ({ text, onChangeText }) => {
  return (
    <View style={styles.imageView}>
      <Image style={styles.roundImage} />
    </View>
  )
}
const AllInformationContinerTabs = ({ tabTitle, tabDescription, tabImage,testID }) => {
  return (
    <View testID={testID} style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", }}>
      <View style={styles.mainInformationContinerTabLeftContainer}>
        <Image
          style={styles.flagImage}
          source={{ uri: tabImage }}
        />
      </View>
      <View style={styles.mainInformationContinerTabCenter}>
        <Text style={styles.labelSpeedMeasure}>{tabTitle}</Text>
      </View>
      <View style={styles.mainInformationContinerTabRight}>
        <Text style={styles.labelTabDescription}>{tabDescription}</Text>
      </View>
    </View>
  )
}
const AllInformationTab = () => {
  return (
    <View testID='allInformationViewTab' style={[styles.mainAllinformationContainer, styles.tabDownloadShadow]}>
      <AllInformationContinerTabs testID={'iPAddressView'} tabTitle={"IP Address"} tabDescription={"198.168.9"} tabImage={"https://res.cloudinary.com/thushal/image/upload/v1671823995/worldwide-shipping_efhdww.png"} />
      <View style={styles.mainAllinformationLine} />
      <AllInformationContinerTabs testID={'broadcastView'} tabTitle={"Broadcaster"} tabDescription={"SL Mobitel"} tabImage={"https://res.cloudinary.com/thushal/image/upload/v1671824002/find-web-domain_dobhqp.png"} />
      <View style={styles.mainAllinformationLine} />
      <AllInformationContinerTabs testID={'deviceView'} tabTitle={"Device Name"} tabDescription={"Iphone 14 Pro"} tabImage={"https://res.cloudinary.com/thushal/image/upload/v1671823992/qr-code_vxc2y6.png"} />
      <View style={styles.mainAllinformationLine} />
      <AllInformationContinerTabs testID={'vpnView'} tabTitle={"VPN"} tabDescription={"No"} tabImage={"https://res.cloudinary.com/thushal/image/upload/v1671823990/geographical-location_fbf9mt.png"} />
    </View>
  )
}
const Header = () => {
  return (
    <View testID='headerMainView' style={styles.headerContainer}>
      <View style={styles.headerLeftContainer}>
        <Text style={styles.labelSpeedTester}>Speed Tester</Text>
        <Text style={styles.labelDownload}>By IHTM</Text>
      </View>
      <View style={styles.headerCenterContainer}>

      </View>
      <View style={styles.headerRightContainer}>
        <Image
          style={styles.headerImage}
          source={{ uri: "https://res.cloudinary.com/thushal/image/upload/v1671825872/share_black_ukehuz.png" }}
        />
      </View>
    </View>
  )
}
const App = () => {
  return (
    <ScrollView testID="scrollViewTest" style={styles.container}>
      <Header/>
      {/* <RedButton />
      <CustomTextInput />
      <LabelWithView labelName={'IP Address'} labelId={'198.162.1'} /> */}
      <View style={{ flexDirection: "row", justifyContent: 'center' }}>
        <DownloadTab />
        <UploadTab />
      </View>
      <LabelWithCountry />
      <InstructionTab />
      <AllInformationTab />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  topContainer: {
    flex: 1,
    backgroundColor: "white"
  },
  buttonContiner: {
    width: (width * 48 / 100),
    height: (height * 10 / 100),
    backgroundColor: "blue",
    marginTop: (height * 2 / 100),
    marginLeft: (width * 2 / 100),
    justifyContent: "center",
    alignItems: "center"
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  input: {
    width: (width * 80 / 100),
    height: (height * 8 / 100),
    margin: (width * 2 / 100),
    borderWidth: 1,
    borderRadius: 10,
    padding: (width * 4 / 100),
    borderColor: "black"
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  textView: {
    alignItems: "center",
    justifyContent: "center"
  },
  labelView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "black",
    // marginTop:( height * 2/100),
    margin: (width * 3 / 100),
  },
  labelLeftView: {
    height: (height * 10 / 100),
    width: (width * 40 / 100),
    justifyContent: "center",
    alignItems: "center",
  },
  labelMiddleView: {
    height: (height * 10 / 100),
    width: (width * 10 / 100),
    justifyContent: "center",
    alignItems: "center",
  },
  labelRightView: {
    height: (height * 10 / 100),
    width: (width * 40 / 100),
    justifyContent: "center",
    alignItems: "center",
  },
  labelText: {
    fontSize: 16,
    color: "black",
    fontWeight: '800',
  },
  labelSpeedNumber: {
    fontSize: 32,
    color: "black",
    fontWeight: '800',
  },
  labelSpeedMeasure: {
    fontSize: 16,
    color: "black",
    fontWeight: '300',
  },
  labelDownload: {
    fontSize: 15,
    color: "black",
    fontWeight: '200',
  },
  labelImage: {
    height: '60%',
    width: '90%',
  },
  downloadImage: {
    height: 75,
    width: 75,
  },
  shareImage: {
    height: 120,
    width: 120,
  },
  flagImage: {
    height: 40,
    width: 40,
  },
  headerImage: {
    height: 25,
    width: 25,
  },
  tabMainContainer: {
    height: (height * 25 / 100),
    width: (width * 40 / 100),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    margin: (width * 3 / 100),
    backgroundColor: "#FEFEFE", // IF THE SHADOW NOT APPLY USE THIS BACKGROUND COLOR
  },
  tabDownloadShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  tabTopContainer: {
    flex: 2,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  tabCenterContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  tabButtomContainer: {
    flex: 1,
    justifyContent: "center",
  },
  mainCountryLeftContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainCountryCenterContainer: {
    flex: 1,
  },
  mainCountryRightContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainCountryContainer: {
    width: (width * 90 / 100),
    height: (height * 6 / 100),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: (width * 3 / 100),
    borderRadius: 15,
    backgroundColor: "#FEFEFE",
  },
  instaMainContainer: {
    flexDirection: "row",
    height: (height * 20 / 100),
    width: (width * 90 / 100),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    margin: (width * 3 / 100),
    backgroundColor: "#FEFEFE", // IF THE SHADOW NOT APPLY USE THIS BACKGROUND COLOR
  },
  instaLeftContainer: {
    flex: 1,
    justifyContent: "center",
    marginLeft: (width * 6 / 100),
    alignItems: "center"
  },
  instaRightContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  instaLeftTopContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  instaLeftCenterContainer: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    alignItems: "flex-start"
  },
  instaLeftButtomContainer: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    alignItems: "flex-start"
  },
  labelInstruction: {
    fontSize: 14,
    color: "black",
    fontWeight: '400',
  },
  labelReadInternet: {
    fontSize: 18,
    color: "black",
    fontWeight: '600',
  },
  labelSeeHere: {
    fontSize: 18,
    color: "purple",
    fontWeight: '600',
  },
  mainAllinformationContainer: {
    width: (width * 90 / 100),
    height: (height * 30 / 100),
    justifyContent: "center",
    alignItems: "center",
    margin: (width * 3 / 100),
    borderRadius: 15,
    backgroundColor: "#FEFEFE",
  },
  mainAllinformationLine: {
    height: (height * 0.15 / 100),
    width: (width * 80 / 100),
    backgroundColor: "darkgrey",
    margin: (width * 2 / 100)
  },
  mainInformationContinerTabLeftContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainInformationContinerTabCenter: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  mainInformationContinerTabRight: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  headerLeftContainer: {
    flex: 2,
    justifyContent: "center",
    width: "100%",
    alignItems: "flex-start"
  },
  headerCenterContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerRightContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer:{
    height: (height * 7 / 100),
    width: (width * 95 / 100),
    margin: (width * 5 / 100),
    flexDirection:"row"
  },
  labelSpeedTester: {
    fontSize: 24,
    color: "chartreuse",
    fontWeight: '500',
  },
  labelTabDescription: {
    fontSize: 16,
    color: "blueviolet",
    fontWeight: '500',
  },
});
export default App;
