import {
  Box,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Tooltip,
  Stack,
  Button,
  Highlight
} from "@chakra-ui/react"
import { Github } from "@emotion-icons/evaicons-solid"
import { colours } from "@exports/Colours"
import computerAnimation from "public/lottie/computer.json"
import Lottie from "lottie-react"

const Hero = ({ title, desc, highlightWords }) => {
  return (
    <>
      <Box w="80vw" p="8">
        <Box>
          <SimpleGrid
            w="100%"
            columns={{
              sm: 1,
              lg: 2
            }}
          >
            <Flex direction="column" className="infos">
              <Stack
                gap={{
                  base: "2rem",
                  md: "3rem",
                  lg: "4rem"
                }}
              >
                <Box>
                  <Heading
                    size="3xl"
                    bgGradient={colours.hero_title_gradient}
                    bgClip="text"
                  >
                    <Tooltip
                      hasArrow
                      placement="top"
                      label="Hamit Can DAŞÇİ"
                      aria-label="A tooltip"
                    >
                      {title}
                    </Tooltip>
                  </Heading>
                </Box>

                <Box>
                  <Text
                    fontSize={{
                      base: "2xl",
                      lg: "3xl"
                    }}
                  >
                    <Highlight
                      query={highlightWords}
                      styles={{
                        color: "orange"
                      }}
                    >
                      {desc}
                    </Highlight>
                  </Text>
                </Box>
              </Stack>
            </Flex>

            <Lottie animationData={computerAnimation} />
          </SimpleGrid>
          <Box
            mt={{
              lg: "4",
              xl: "auto"
            }}
            width="fit-content"
            mx={{
              base: "auto",
              lg: "unset"
            }}
          >
            <Button
              leftIcon={<Github size="24" />}
              variant="solid"
              bgColor={colours.github_button_link}
              size={{
                base: "sm",
                sm: "md",
                md: "lg"
              }}
              _hover={{
                opacity: "0.7",
                color: colours.github_button_link_hover_text
              }}
            >
              <a href="https://github.com/De3ph">Let's preview my GitHub</a>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Hero
