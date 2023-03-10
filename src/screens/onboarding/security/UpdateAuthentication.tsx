import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  AsyncStorage
} from "react-native";
import { Screens } from "../../../themes/index";
import { LocalImages } from "../../../constants/imageUrlConstants";
import { SETTING_LIST } from "../../../constants/Routes";
import GenericText from "../../../components/Text";
import { useAppDispatch } from "../../../hooks/hooks";
import BottomSheet from "../../../components/Bottomsheet";
import il8n, { getUserLanguagePreference } from "../.././../utils/i18n";
import { AppLanguage } from "../../../typings/enums/AppLanguage";
import { alertBox } from "../../../utils/earthid_account";
import Header from "../../../components/Header";

const UpdateAuthentication = (props: any) => {
  const dispatch = useAppDispatch();
  const [languageVisible, setLanguageVisible] = useState(false);
  

  // const retrieveData = async (item: any) => {
  //   try {
  //     const value = await AsyncStorage.getItem("key");
  //     if (value!=="facedata") {
  //       props.navigation.navigate("UpdateNewPin")
  //       console.log("value",value);
  //     }else{
  //       props.navigation.navigate("OldPincode",{type:"pass"});
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const _navigateAction = (item: any) => {
    if (item.CARD === "language") {
      setLanguageVisible(true);
    }
    
    // else if(item.card=="OldPincode"){
    //      retrieveData(item)
    // } 
    
    else {
      props.navigation.navigate(item.card,{type:"pass"});
    }
  };
  useEffect(() => {
    getStoredLanguage();
  }, []);

  const getStoredLanguage = async () => {
    const getUserLanguagePreferences = await getUserLanguagePreference();
    console.log("getUserLanguagePreferences", getUserLanguagePreferences);
  };
  const [authenticationList, setauthenticationList] = useState([
    {
      label: "faceid",
      COLOR: "#D7EFFB",
      icon: LocalImages.faceidpic,
      selection: true,
      card: "UpdateFaceId",
    },
    {
      label: "Passcode",
      COLOR: "#FFDD9B",
      icon: LocalImages.passcordImage,
      selection: false,
      card: "OldPincode",
    },
    {
      label: "touchid",
      COLOR: "#F6BDE9",
      icon: LocalImages.touchidpic,
      selection: false,
      card: "UpdateTouchId",
    },
  ]);

  const _renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity onPress={() => _navigateAction(item)}>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          margin: 10,
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View
            style={[styles.avatarContainer, { backgroundColor: item.COLOR }]}
          >
            <Image
              resizeMode="contain"
              style={styles.avatarImageContainer}
              source={item.icon}
            ></Image>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <GenericText
              style={[
                {
                  fontSize: 14,
                  marginHorizontal: 10,

                  color: Screens.black,
                  fontWeight: "500",
                },
              ]}
            >
              {item.label}
            </GenericText>
          </View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            resizeMode="contain"
            style={styles.avatarImageContainer}
            source={LocalImages.sideArrowImage}
          ></Image>
        </View>
      </View>
    </TouchableOpacity>
  );

  const _keyExtractor = ({ label }: any) => label.toString();
  return (
    <View style={styles.sectionContainer}>
          <Header
            isBack
            letfIconPress={() => props.navigation.goBack()}
            headingText= {"updateauthenticaion"}
            linearStyle={styles.linearStyle}
        ></Header>
      <GenericText
      style={{marginLeft:12,marginTop:10,fontSize:15,color:"gray",marginBottom:5}}
      >
        {"selectsecurity"}
      </GenericText>
      <FlatList<any>
        data={authenticationList}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: Screens.colors.background,
  },
  linearStyle: {
    height: 120,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 4,
  },
  cardContainer: {
    flex: 1,
    margin: 10,
  },
  avatarImageContainer: {
    width: 20,
    height: 20,
    tintColor: "#000",
  },
  avatarContainer: {
    backgroundColor: "red",
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionHeaderContainer: {
    flexDirection: "row",
    height: 120,
    backgroundColor: "#8b88db",
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  logoContainer: {
    width: 25,
    height: 25,
    tintColor: "#fff",
  },

  closeContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UpdateAuthentication;
