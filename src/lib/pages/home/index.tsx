import { Box, useColorMode } from "@chakra-ui/react";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import { useState } from "react";

import Avatar, { genConfig } from "lib/components/avatar";
import AvatarEditor from "lib/components/avatar-editor";

const Home = () => {
  const generatedConfig = genConfig();

  const shapes = ["circle", "rounded", "square"];

  const [config, setConfig] = useState(
    genConfig({
      isGradient: Boolean(Math.round(Math.random())),
    })
  );
  const [shape, setShape] = useState("circle");
  const avatarId = "myAvatar";

  const selectConfig = (customConfig) => {
    setConfig(customConfig);
  };

  const updateConfig = (key, value) => {
    config[key] = value;
    setConfig({ config });
  };

  const switchShape = () => {
    const currentIdx = shapes.findIndex((item) => item === shape);
    const newIdx = (currentIdx + 1) % shapes.length;
    setShape(shapes[newIdx]);
  };

  const download = async () => {
    const scale = 2;
    const node = document.getElementById(avatarId);
    if (node) {
      const blob = await domtoimage.toBlob(node, {
        height: node.offsetHeight * scale,
        style: {
          transform: `scale(${scale}) translate(${
            node.offsetWidth / 2 / scale
          }px, ${node.offsetHeight / 2 / scale}px)`,
          "border-radius": 0,
        },
        width: node.offsetWidth * scale,
      });

      saveAs(blob, "avatar.png");
    }
  };

  const size = "20rem";

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      minHeight="70vh"
      gap={8}
      w="full"
    >
      <Box id={avatarId}>
        <Avatar style={{ width: size, height: size }} {...generatedConfig} />
      </Box>
      <AvatarEditor
        config={config}
        shape={shape}
        updateConfig={updateConfig}
        download={download}
        switchShape={switchShape}
      />
    </Box>
  );
};

export default Home;
