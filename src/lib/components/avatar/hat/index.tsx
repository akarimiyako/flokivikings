import type { ReactElement } from "react";

import Beanie from "./beanie";
import Turban from "./turban";

export default function hat(props: {
  color: string;
  style: string;
}): ReactElement | null {
  const { style, color } = props;
  switch (style) {
    case "beanie":
      return <Beanie color={color} />;
    case "turban":
      return <Turban color={color} />;
    case "none":
    default:
      return null;
  }
}
