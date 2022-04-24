import Mohawk from "./mohawk";
import Normal from "./normal";
import Thick from "./thick";
import WomanLong from "./womanLong";
import WomanShort from "./womanShort";

export default function hair(props: { style: string; color: string }) {
  const { style, color } = props;
  switch (style) {
    case "thick":
      return <Thick color={color} />;
    case "mohawk":
      return <Mohawk color={color} />;
    case "womanLong":
      return <WomanLong color={color} />;
    case "womanShort":
      return <WomanShort color={color} />;
    case "normal":
    default:
      return <Normal color={color} />;
  }
}
