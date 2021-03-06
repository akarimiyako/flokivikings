import Ear from "./ear";
import Eyebrow from "./eyebrow";
import Eye from "./eyes";
import Face from "./face";
import Glasses from "./glasses";
import Hair from "./hair";
import Hat from "./hat";
import Mouth from "./mouth";
import Shirt from "./shirt";
import type { NiceAvatarProps } from "./types";
import { genConfig } from "./utils";

const ReactNiceAvatar = ({ ...props }: NiceAvatarProps) => {
  const { id, className, style, shape = "circle" } = props;

  const config = genConfig(props);

  // Background shape
  let borderRadius;
  switch (shape) {
    case "circle": {
      borderRadius = "100%";
      break;
    }
    case "rounded": {
      borderRadius = "6px";
      break;
    }
    case "square": {
      borderRadius = 0;
      break;
    }
    default:
      return null;
  }

  return (
    <div
      id={id}
      className={className}
      style={{
        background: config.bgColor,
        overflow: "hidden",
        borderRadius,
        ...style,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "90%",
          }}
        >
          <Face color={config.faceColor} />
          <Hat color={config.hatColor} style={config.hatStyle} />
          {config.hatStyle === "none" && (
            <Hair color={config.hairColor} style={config.hairStyle} />
          )}

          {/* Face detail */}
          <div
            style={{
              position: "absolute",
              right: "-3%",
              top: "30%",
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Eyebrow style={config.eyeBrowStyle} />
            <Eye style={config.eyeStyle} />
            <Glasses style={config.glassesStyle} />
            <Ear color={config.faceColor} size={config.earSize} />
            <Mouth style={config.mouthStyle} />
          </div>

          <Shirt color={config.shirtColor} style={config.shirtStyle} />
        </div>
      </div>
    </div>
  );
};

export default ReactNiceAvatar;

export { genConfig } from "./utils";
