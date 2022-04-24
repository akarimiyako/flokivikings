import chroma from "chroma-js";
import type { ReactElement } from "react";

import Hoody from "./hoody";
import Polo from "./polo";
import Short from "./short";

export default function shirt(props: {
  color: string;
  style: string;
}): ReactElement {
  const { style, color } = props;
  const secondColor = chroma(color).brighten(1).hex();
  switch (style) {
    case "hoody":
      return <Hoody color={color} lightColor={secondColor} />;
    case "polo":
      return <Polo color={color} lightColor={secondColor} />;
    case "short":
    default:
      return <Short color={color} />;
  }
}
