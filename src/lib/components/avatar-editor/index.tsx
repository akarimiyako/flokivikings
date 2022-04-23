import { Box } from "@chakra-ui/react";
import classnames from "classnames";
import React, { Component } from "react";

import Ear from "lib/components/avatar/ear/index";
import Eyes from "lib/components/avatar/eyes/index";
import Face from "lib/components/avatar/face/index";
import Glasses from "lib/components/avatar/glasses/index";
import Hair from "lib/components/avatar/hair/index";
import Hat from "lib/components/avatar/hat/index";
import Mouth from "lib/components/avatar/mouth/index";
import Nose from "lib/components/avatar/nose/index";
import Shirt from "lib/components/avatar/shirt/index";
import { defaultOptions } from "lib/components/avatar/utils";

import Box from "./Box/index";

import "./index.scss";

export default class AvatarEditor extends Component {
  //   static propTypes = {
  //     config: PropTypes.object.isRequired,
  //     shape: PropTypes.string.isRequired,
  //     updateConfig: PropTypes.func.isRequired,
  //     updateShape: PropTypes.func.isRequired,
  //     download: PropTypes.func.isRequired,
  //   };

  constructor(props: any) {
    super(props);
    this.state = {
      isCodeShow: false,
    };
    this.myDefaultOptions = this.genDefaultOptions(defaultOptions);
    this.shapes = ["circle", "rounded", "square"];
  }

  // Modification on defaultOptions for convenient
  genDefaultOptions(opts) {
    const hairSet = new Set(opts.hairStyleMan.concat(opts.hairStyleWoman));
    return {
      ...opts,
      hairStyle: Array.from(hairSet),
    };
  }

  switchConfig(type, currentOpt) {
    const { updateConfig } = this.props;
    const opts = this.myDefaultOptions[type];
    const currentIdx = opts.findIndex((item) => item === currentOpt);
    const newIdx = (currentIdx + 1) % opts.length;
    updateConfig(type, opts[newIdx]);
  }

  switchShape(currentShape) {
    const { updateShape } = this.props;
    const currentIdx = this.shapes.findIndex((item) => item === currentShape);
    const newIdx = (currentIdx + 1) % this.shapes.length;
    updateShape(this.shapes[newIdx]);
  }

  toggleCodeShow() {
    const { isCodeShow } = this.state;
    this.setState({
      isCodeShow: !isCodeShow,
    });
  }

  genCodeString(config) {
    const ignoreAttr = ["id"];
    const myConfig = Object.keys(config)
      .filter((key) => !ignoreAttr.includes(key))
      .reduce((acc, key) => ({ ...acc, [key]: config[key] }), {});
    return (
      `const config = ${JSON.stringify(myConfig, null, 2)}\n` +
      `const myConfig = genConfig(config)\n` +
      `<NiceAvatar style={{ width: '5rem', height: '5rem' }} {...myConfig} />`
    );
  }

  render() {
    const { config, shape, download } = this.props;
    const { isCodeShow } = this.state;
    return (
      <div className="AvatarEditor rounded-full px-3 py-2 flex items-center">
        {/* Face */}
        <Box
          className="w-8 h-8 rounded-full p-2 mx-2"
          data-tip="Face"
          onClick={this.switchConfig.bind(this, "faceColor", config.faceColor)}
        >
          <Face color={config.faceColor} />
        </Box>
        {/* Hair style */}
        <Box
          className="w-8 h-8 rounded-full p-2 mx-2"
          data-tip="Hair"
          onClick={this.switchConfig.bind(this, "hairStyle", config.hairStyle)}
        >
          <Hair style={config.hairStyle} color="#fff" colorRandom />
        </Box>
        {/* Hat style */}
        <Box
          className="w-8 h-8 rounded-full p-2 mx-2"
          data-tip="Hat"
          onClick={this.switchConfig.bind(this, "hatStyle", config.hatStyle)}
        >
          <Hat style={config.hatStyle} color="#fff" />
        </Box>
        {/* Eyes style */}
        <Box
          className="w-8 h-8 rounded-full p-2 mx-2"
          data-tip="Eyes"
          onClick={this.switchConfig.bind(this, "eyeStyle", config.eyeStyle)}
        >
          <Eyes style={config.eyeStyle} color="#fff" />
        </Box>
        {/* Glasses style */}
        <Box
          className="w-8 h-8 rounded-full p-2 mx-2"
          data-tip="Glasses"
          onClick={this.switchConfig.bind(
            this,
            "glassesStyle",
            config.glassesStyle
          )}
        >
          <Glasses style={config.glassesStyle} color="#fff" />
        </Box>
        {/* Ear style */}
        <Box
          className="w-8 h-8 rounded-full p-2 mx-2"
          data-tip="Ear"
          onClick={this.switchConfig.bind(this, "earSize", config.earSize)}
        >
          <Ear size={config.earSize} color="#fff" />
        </Box>
        {/* Nose style */}
        <Box
          className="w-8 h-8 rounded-full p-2 mx-2"
          data-tip="Nose"
          onClick={this.switchConfig.bind(this, "noseStyle", config.noseStyle)}
        >
          <Nose style={config.noseStyle} color="#fff" />
        </Box>
        {/* Mouth style */}
        <Box
          className="w-8 h-8 rounded-full p-2 mx-2"
          data-tip="Mouth"
          onClick={this.switchConfig.bind(
            this,
            "mouthStyle",
            config.mouthStyle
          )}
        >
          <Mouth style={config.mouthStyle} color="#fff" />
        </Box>
        {/* Shirt style */}
        <Box
          className="w-8 h-8 rounded-full p-2 mx-2"
          data-tip="Shirt"
          onClick={this.switchConfig.bind(
            this,
            "shirtStyle",
            config.shirtStyle
          )}
        >
          <Shirt style={config.shirtStyle} color="#fff" />
        </Box>

        {/* Shape style */}
        <Box
          className="w-8 h-8 rounded-full p-2 mx-2"
          data-tip="Shape"
          onClick={this.switchShape.bind(this, shape)}
        >
          <div
            className={classnames("w-3 h-3 bg-white", {
              "rounded-full": shape === "circle",
              rounded: shape === "rounded",
            })}
          />
        </Box>

        <div className="divider w-0.5 h-5 rounded mx-2" />
        <div className="mx-2 relative flex justify-center">
          <i
            className={classnames(
              "iconfont icon-code text-xl  cursor-pointer transition duration-300 hover:text-green-100",
              {
                banTip: isCodeShow,
              }
            )}
            data-data-tip="Config"
            onClick={this.toggleCodeShow.bind(this)}
          />
          <div
            className={classnames(
              "rounded-lg bg-white p-5 absolute bottom-full codeBlock mb-4",
              {
                active: isCodeShow,
              }
            )}
          >
            <pre className="text-xs highres:text-sm">
              {this.genCodeString(config)}
            </pre>
          </div>
        </div>

        <div className="divider w-0.5 h-5 rounded mx-2" />
        <i
          className="iconfont icon-download text-xl mx-2 cursor-pointer transition duration-300 hover:text-green-100"
          data-data-tip="Download"
          onClick={download}
        />
      </div>
    );
  }
}
