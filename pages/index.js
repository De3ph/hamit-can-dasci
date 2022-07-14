import Hero from "@components/Page/Hero";
import { Box } from "@chakra-ui/react";
import style from "@styles/Glass.module.css";

export default function Home() {
  return (
    <Box p={4} className={style.glass}>
      <Hero />
    </Box>
  );
}
