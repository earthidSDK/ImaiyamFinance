import { Screens } from "../themes";
import { LocalImages } from "./imageUrlConstants";
import { SCREENS } from "./Labels";
export const ABOUT_ROUTES = {
  MY_PROFILE: {
    CARD: "myProfile",
    TITLE: SCREENS.DRAWERMENUTITLES.MY_PROFILE,
    URI: LocalImages.profileImage,
    RIGHT_ICON: LocalImages.sideArrowImage,
    SCREEN: "ProfileScreen",
    COLOR: "#D7EFFB",
  },
  HOME: {
    CARD: "UserAgreement",
    TITLE: SCREENS.DRAWERMENUTITLES.HOME,
    URI: LocalImages.homeImage,
    SCREEN: "Home",
    COLOR: "#FFDD9B",
  },
  DOCUMENT: {
    URI: LocalImages.documentpic,
    CARD: "MerchantAgreement",
    TITLE: SCREENS.DRAWERMENUTITLES.DOCUMENT,
    SCREEN: "Documents",
    COLOR: "#C5BDF6",
  },
  HISTORY: {
    URI: LocalImages.historyImage,
    CARD: "AcceptableUsePolicy",
    TITLE: SCREENS.DRAWERMENUTITLES.HISTORY,
    SCREEN: "History",
    COLOR: "#F6BDE9",
  },
  SETTINGS: {
    RIGHT_ICON: LocalImages.sideArrowImage,
    URI: LocalImages.settingimage,
    CARD: "AcceptableUsePolicy",
    TITLE: SCREENS.DRAWERMENUTITLES.SETTING,
    SCREEN: "settings",
    COLOR: "#BFF5CE",
  },

  ABOUT: {
    URI: LocalImages.documentsImage,
    CARD: "AcceptableUsePolicy",
    TITLE: SCREENS.DRAWERMENUTITLES.ABOUT_US,
    SCREEN: "about",
    COLOR: "#FFAFAF",
  },
  TERMS: {
    URI: LocalImages.termsImage,
    CARD: "AcceptableUsePolicy",
    TITLE: SCREENS.DRAWERMENUTITLES.TERM_CONDITION,
    SCREEN: "terms",
    COLOR: "#D7EFFB",
  },
  IDENTITY: {
    RIGHT_ICON: LocalImages.sideArrowImage,
    URI: LocalImages.backupicon,
    CARD: "AcceptableUsePolicy",
    TITLE: SCREENS.DRAWERMENUTITLES.BACKUP,
    SCREEN: "AuthBackupIdentity",
    COLOR: "#FFDD9B",
  },
  DELETE: {
    URI: LocalImages.deleteImage,
    CARD: "AcceptableUsePolicy",
    TITLE: SCREENS.DRAWERMENUTITLES.DELETE_IDENTITY,
    SCREEN: "delete",
    COLOR: "#C5BDF6",
  },
  // LOGOUT: {
  //   URI: LocalImages.logoutImage,
  //   CARD: "AcceptableUsePolicy",
  //   TITLE: SCREENS.DRAWERMENUTITLES.LOGOUT,
  //   SCREEN: "Logout",
  //   COLOR: "#F6BDE9",
  // },
};

export const SETTING_LIST = [
  {
    CARD: "updateauthenticaion",
    TITLE: "updateauthenticaion",
    URI: LocalImages.securityImage,
    RIGHT_ICON: LocalImages.sideArrowImage,
    SCREEN: "ProfileScreen",
    COLOR: "#D7EFFB",
  },
  {
    CARD: "language",
    TITLE: "language",
    URI: LocalImages.translateImage,
    SCREEN: "Home",
    RIGHT_ICON: LocalImages.sideArrowImage,
    COLOR: "#FFDD9B",
  },
];
