import {
  Box,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Tooltip,
  Stack,
} from "@chakra-ui/react";
import coder from "public/images/coder.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <Box w="80vw" p="8">
        <Box>
          <SimpleGrid
            w="100%"
            columns={{
              sm: 1,
              lg: 2,
            }}
          >
            <Flex direction="column" className="infos">
              <Stack
                spacing={{
                  base: "1.2rem",
                  lg: "3rem",
                }}
              >
                <Box>
                  <Heading
                    size={{
                      base: "xl",
                      lg: "2xl",
                    }}
                    bgGradient="linear(to-l, red, orange)"
                    bgClip="text"
                  >
                    Hi! I'm{" "}
                    <Tooltip
                      hasArrow
                      placement="top"
                      label="Hamit Can DAŞÇİ"
                      aria-label="A tooltip"
                    >
                      Hamit
                    </Tooltip>
                  </Heading>
                </Box>
                <Box>
                  <Text
                    fontSize={{
                      base: "lg",
                      lg: "2xl",
                    }}
                  >
                    Hamit is{" "}
                    <Text
                      fontSize={{
                        base: "lg",
                        lg: "2xl",
                      }}
                      display="inline"
                      color="orange"
                    >
                      Jr Web Developer
                    </Text>{" "}
                    who is improve his skills day by day. He is passionate to
                    use different techs and enjoy to coding. He is student at
                    Ege University in Computer Science/Engineering Degree.
                  </Text>
                </Box>
              </Stack>
            </Flex>

            <Box justify="center" align="center" className="media">
              <Image src={coder}></Image>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
