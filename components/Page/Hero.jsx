import Image from "next/image";
import {
  Box,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Tooltip,
  Stack,
  Button,
  Link,
} from "@chakra-ui/react";
import { Github } from "@emotion-icons/evaicons-solid";
import { colours } from "@exports/Colours";
import coder from "public/images/coder.svg";
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
                      base: "2xl",
                      lg: "3xl",
                    }}
                    bgGradient={colours.hero_title_gradient}
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
                    as="div"
                    fontSize={{
                      base: "2xl",
                      lg: "2xl",
                    }}
                  >
                    Hamit is a{" "}
                    <Text
                      fontSize={{
                        base: "2xl",
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
              <Image priority={true} src={coder}></Image>
            </Box>
          </SimpleGrid>
          <Box
            mt={{
              lg: "4",
              xl: "auto",
            }}
            width="fit-content"
            mx={{
              base: "auto",
              md: "unset",
            }}
          >
            <Button
              leftIcon={<Github size="24" />}
              variant="solid"
              bgColor={colours.github_button_link}
              size={{
                base: "sm",
                sm: "md",
                md: "lg",
              }}
              _hover={{
                opacity: "0.7",
                color: colours.github_button_link_hover_text,
              }}
            >
              <a href="https://github.com/De3ph">Let's preview my GitHub</a>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
