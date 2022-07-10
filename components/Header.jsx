import { Box, HStack } from "@chakra-ui/react";
import Link from "next/link";
import { colours } from "@styles/Colours";

const Header = () => {
  return (
    <>
      <Box textColor={colours.linkColor}>
        <HStack>
          <Box>
            <Link href="/links">
              <a>Social Links</a>
            </Link>
          </Box>
          <Box></Box>
        </HStack>
      </Box>
    </>
  );
};

export default Header;
