import { Box, useColorModeValue } from "@chakra-ui/react";
import { css } from "@emotion/react";
import type { FunctionComponent } from "react";
import { useState } from "react";
import { FiDownload } from "react-icons/fi";

import Ear from "lib/components/avatar/ear/index";
import Eyes from "lib/components/avatar/eyes/index";
import Face from "lib/components/avatar/face/index";
import Glasses from "lib/components/avatar/glasses/index";
import Hair from "lib/components/avatar/hair/index";
import Hat from "lib/components/avatar/hat/index";
import Mouth from "lib/components/avatar/mouth/index";
import Shirt from "lib/components/avatar/shirt/index";
import { defaultOptions } from "lib/components/avatar/utils";

import ConfigButton from "./config-button";
import Circle from "./svgs-components/circle";
import Square from "./svgs-components/square";
import SquareRounded from "./svgs-components/square-rounded";

//     config: PropTypes.object.isRequired,
//     shape: PropTypes.string.isRequired,
//     updateConfig: PropTypes.func.isRequired,
//     updateShape: PropTypes.func.isRequired,
//     download: PropTypes.func.isRequired,

type AvatarEditorProps = {
  config: any;
  shape: any;
  updateConfig: () => void;
  switchShape: () => void;
  download: () => void;
};

const AvatarEditor: FunctionComponent<AvatarEditorProps> = (props: any) => {
  const { config, shape, switchShape, download, updateConfig } = props;

  const bg = useColorModeValue("gray.50", "gray.900");

  // Modification on defaultOptions for convenient
  const genDefaultOptions = (opts) => {
    const hairSet = new Set(opts.hairStyleMan.concat(opts.hairStyleWoman));
    return {
      ...opts,
      hairStyle: Array.from(hairSet),
    };
  };

  const myDefaultOptions = genDefaultOptions(defaultOptions);

  const switchConfig = (type) => {
    const currentOpt = config[type];
    const opts = myDefaultOptions[type];
    const currentIdx = opts.findIndex((item) => item === currentOpt);
    const newIdx = (currentIdx + 1) % opts.length;
    updateConfig(type, opts[newIdx]);
  };

  const genCodeString = (config) => {
    const ignoreAttr = ["id"];
    const myConfig = Object.keys(config)
      .filter((key) => !ignoreAttr.includes(key))
      .reduce((acc, key) => ({ ...acc, [key]: config[key] }), {});
    return (
      `const config = ${JSON.stringify(myConfig, null, 2)}\n` +
      `const myConfig = genConfig(config)\n` +
      `<NiceAvatar style={{ width: '5rem', height: '5rem' }} {...myConfig} />`
    );
  };

  // return (
  //   <ConfigButton
  //
  //
  //     aria-label="Face"
  //     onClick={() => () => switchConfig("faceColor")}
  //   >
  //     <Face color={config.faceColor} />
  //   </ConfigButton>
  // );

  const getCurrentShape = () => {
    if (shape === "square") {
      return <Square />;
    }
    if (shape === "circle") {
      return <Circle />;
    }
    return <SquareRounded />;
  };

  return (
    <Box
      display="flex"
      gap="1em"
      backgroundColor={bg}
      padding={2}
      borderRadius="md"
    >
      {/* Face */}
      <ConfigButton
        aria-label="Face"
        icon={<Face color={config.faceColor} />}
      />
      {/* Hair style */}
      <ConfigButton
        aria-label="Hair"
        onClick={() => switchConfig("hairStyle")}
        icon={<Hair style={config.hairStyle} color="#fff" />}
      />
      {/* Hat style */}
      <ConfigButton aria-label="Hat" onClick={() => switchConfig("hatStyle")}>
        <Hat style={config.hatStyle} color="#fff" />
      </ConfigButton>
      {/* Eyes style */}
      <ConfigButton aria-label="Eyes" onClick={() => switchConfig("eyeStyle")}>
        <Eyes style={config.eyeStyle} color="#fff" />
      </ConfigButton>
      {/* Glasses style */}
      <ConfigButton
        aria-label="Glasses"
        onClick={() => switchConfig("glassesStyle")}
      >
        <Glasses style={config.glassesStyle} color="#fff" />
      </ConfigButton>
      {/* Ear style */}
      <ConfigButton aria-label="Ear" onClick={() => switchConfig("earSize")}>
        <Ear size={config.earSize} color="#fff" />
      </ConfigButton>

      {/* Mouth style */}
      <ConfigButton
        aria-label="Mouth"
        onClick={() => switchConfig("mouthStyle")}
        icon={<Mouth style={config.mouthStyle} />}
      />
      {/* Shirt style */}
      <ConfigButton
        aria-label="Shirt"
        onClick={() => switchConfig("shirtStyle")}
      >
        <Shirt style={config.shirtStyle} color="#fff" />
      </ConfigButton>

      {/* Shape style */}
      <ConfigButton
        aria-label="Shape"
        onClick={switchShape}
        icon={getCurrentShape()}
      />

      <ConfigButton
        aria-label="Download"
        onClick={download}
        icon={<FiDownload />}
      />
    </Box>
  );
};

export default AvatarEditor;
