import Hero from "@components/Hero/Hero";
import { Box } from "@chakra-ui/react";
import style from "@styles/Glass.module.css";

const title = "Hi! I'm Hamit";
const heroDesc = `Hamit is a Jr Web Developer who is improve his skills day
by day. He is passionate to use different techs and enjoy
coding. He is student at Ege University in Computer
Science/Engineering Degree.`;
const highlightWords = "Jr Web Developer";

export default function Home() {
  return (
    <Box p={4} className={style.glass}>
      <Hero title={title} desc={heroDesc} highlightWords={highlightWords} />
    </Box>
  );
}
