import type { IconButtonProps } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { css, keyframes } from "@emotion/react";
import type { FunctionComponent } from "react";

const jelly = keyframes`
  0%,
  100% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(0.9, 1.1);
  }
  50% {
    transform: scale(1.1, 0.9);
  }
  75% {
    transform: scale(0.95, 1.05);
  }
`;

const ConfigButton: FunctionComponent<IconButtonProps> = (props) => {
  const { ...rest } = props;

  return (
    <IconButton
      colorScheme="blue"
      borderRadius="50%"
      width="50px"
      height="50px"
      position="relative"
      css={css`
        &:hover {
          animation: ${jelly} 0.5s;
        }
      `}
      {...rest}
    />
  );
};

export default ConfigButton;
