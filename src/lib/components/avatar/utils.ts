import type {
  AvatarFullConfig,
  GenConfigFunc,
  Sex,
  EarSize,
  HairStyleMan,
  HairStyleWoman,
  HatStyle,
  EyeStyle,
  GlassesStyle,
  MouthStyle,
  ShirtStyle,
  EyeBrowStyle,
} from "./types";

/**
 * Pick random one from the list
 */
interface PickRandomOpt<T> {
  avoidList?: T[];
  usually?: T[];
}
type PickRandomFromList = <T>(
  data: T[],
  opt?: PickRandomOpt<T | undefined>
) => T;
export const pickRandomFromList: PickRandomFromList = (
  data,
  { avoidList = [], usually = [] } = {}
) => {
  // Filter out avoid options
  const avoidSet = new Set(avoidList.filter((item) => Boolean(item)));
  let myData = data.filter((item) => !avoidSet.has(item));

  // Increase selecting possibility of usually options
  const usuallyData = usually
    .filter(Boolean)
    .reduce((acc, cur) => acc.concat(new Array(15).fill(cur)), [] as any[]);
  myData = myData.concat(usuallyData);

  // Pick randon one from the list
  const amount = myData.length;
  const randomIdx = Math.floor(Math.random() * amount);

  return myData[randomIdx];
};

/**
 * Gennerate avatar configurations
 */
interface DefaultOptions {
  sex: Sex[];
  faceColor: string[];
  earSize: EarSize[];
  hairColor: string[];
  hairStyleMan: HairStyleMan[];
  hairStyleWoman: HairStyleWoman[];
  hatColor: string[];
  hatStyle: HatStyle[];
  eyeBrowWoman: EyeBrowStyle[];
  eyeStyle: EyeStyle[];
  glassesStyle: GlassesStyle[];
  mouthStyle: MouthStyle[];
  shirtStyle: ShirtStyle[];
  shirtColor: string[];
  bgColor: string[];
  gradientBgColor: string[];
}
export const defaultOptions: DefaultOptions = {
  sex: ["man", "woman"],
  faceColor: ["#F9C9B6", "#AC6651"],
  earSize: ["small", "big"],
  hairColor: [
    "#000",
    "#fff",
    "#77311D",
    "#FC909F",
    "#D2EFF3",
    "#506AF4",
    "#F48150",
  ],
  hairStyleMan: ["normal", "thick", "mohawk"],
  hairStyleWoman: ["normal", "womanLong", "womanShort"],
  hatColor: [
    "#000",
    "#fff",
    "#77311D",
    "#FC909F",
    "#D2EFF3",
    "#506AF4",
    "#F48150",
  ],
  hatStyle: ["beanie", "turban", "none"],
  eyeBrowWoman: ["up", "upWoman"],
  eyeStyle: ["circle", "oval", "smile"],
  glassesStyle: ["round", "square", "none"],
  mouthStyle: ["laugh", "smile", "peace"],
  shirtStyle: ["hoody", "short", "polo"],
  shirtColor: ["#9287FF", "#6BD9E9", "#FC909F", "#F4D150", "#77311D"],
  bgColor: [
    "#9287FF",
    "#6BD9E9",
    "#FC909F",
    "#F4D150",
    "#E0DDFF",
    "#D2EFF3",
    "#FFEDEF",
    "#FFEBA4",
    "#506AF4",
    "#F48150",
    "#74D153",
  ],
  gradientBgColor: [
    "linear-gradient(45deg, #178bff 0%, #ff6868 100%)",
    "linear-gradient(45deg, #176fff 0%, #68ffef 100%)",
    "linear-gradient(45deg, #ff1717 0%, #ffd368 100%)",
    "linear-gradient(90deg, #36cd1c 0%, #68deff 100%)",
    "linear-gradient(45deg, #3e1ccd 0%, #ff6871 100%)",
    "linear-gradient(45deg, #1729ff 0%, #ff56f7 100%)",
    "linear-gradient(45deg, #56b5f0 0%, #45ccb5 100%)",
  ],
};

// @ts-ignore
export const genConfig: GenConfigFunc = (userConfig = {}) => {
  const response = {} as Required<AvatarFullConfig>;

  const elementResponse = (element: string) => {
    // @ts-ignore
    return userConfig[element] || pickRandomFromList(defaultOptions[element]);
  };

  response.sex = elementResponse("sex");
  response.faceColor = elementResponse("faceColor");
  response.earSize = elementResponse("earSize");
  response.eyeStyle = elementResponse("eyeStyle");
  response.mouthStyle = elementResponse("mouthStyle");
  response.mouthStyle = elementResponse("shirtStyle");
  response.mouthStyle = elementResponse("glassesStyle");

  // Hair
  let hairColorAvoidList: string[] = [];
  let hairColorUsually: string[] = [];
  if (!userConfig.hairColor) {
    switch (response.sex) {
      case "woman": {
        hairColorAvoidList =
          (response.faceColor === defaultOptions.faceColor[1] && ["#77311D"]) ||
          [];
        break;
      }
      case "man": {
        hairColorUsually = ["#000"];
        break;
      }
      default: {
        hairColorUsually = ["#000"];
      }
    }
  }
  response.hairColor =
    userConfig.hairColor ||
    pickRandomFromList(defaultOptions.hairColor, {
      avoidList: hairColorAvoidList,
      usually: hairColorUsually,
    });

  let myHairStyle = userConfig.hairStyle;
  if (!myHairStyle) {
    switch (response.sex) {
      case "man": {
        myHairStyle = pickRandomFromList(defaultOptions.hairStyleMan, {
          usually: ["normal", "thick"],
        });
        break;
      }
      case "woman": {
        myHairStyle = pickRandomFromList(defaultOptions.hairStyleWoman);
        break;
      }

      default: {
        myHairStyle = pickRandomFromList(defaultOptions.hairStyleWoman);
        break;
      }
    }
  }
  response.hairStyle = myHairStyle;

  // Hat
  response.hatStyle =
    userConfig.hatStyle ||
    pickRandomFromList(defaultOptions.hatStyle, { usually: ["none"] });
  response.hatColor =
    userConfig.hatColor || pickRandomFromList(defaultOptions.hatColor);
  const hairOrHatColor =
    (response.hatStyle === "none" && response.hairColor) || response.hatColor;

  // Eyebrow
  if (userConfig.eyeBrowStyle) {
    response.eyeBrowStyle = userConfig.eyeBrowStyle;
  } else {
    response.eyeBrowStyle =
      response.sex === "woman"
        ? pickRandomFromList(defaultOptions.eyeBrowWoman)
        : "up";
  }

  // Shirt color
  response.shirtColor =
    userConfig.shirtColor ||
    pickRandomFromList(defaultOptions.shirtColor, {
      avoidList: [hairOrHatColor],
    });

  // Background color
  if (userConfig.isGradient) {
    response.bgColor = elementResponse("bgColor");
  } else {
    response.bgColor =
      userConfig.bgColor ||
      pickRandomFromList(defaultOptions.bgColor, {
        avoidList: [hairOrHatColor, response.shirtColor],
      });
  }

  return response;
};
