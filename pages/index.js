import { useMantineColorScheme } from "@mantine/core";

export default function Home() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return <div className="container">Index.js</div>;
}
