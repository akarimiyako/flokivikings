import { Box } from "@chakra-ui/react";
import { nanoid } from "nanoid";

import Avatar, { genConfig, AvatarFullConfig } from "lib/components/avatar";
import CTASection from "lib/components/samples/CTASection";
import SomeImage from "lib/components/samples/SomeImage";
import SomeText from "lib/components/samples/SomeText";

const Home = () => {
  const config = genConfig();

  return (
    <Box
      display={{ md: "flex" }}
      alignItems="center"
      minHeight="70vh"
      gap={8}
      mb={8}
      w="full"
    >
      <Box>
        <Avatar style={{ width: "8rem", height: "8rem" }} {...config} />
        <SomeText />
        <CTASection />
      </Box>
    </Box>
  );
};

export default Home;
