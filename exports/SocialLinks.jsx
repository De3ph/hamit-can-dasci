import { Github, Linkedin } from "@emotion-icons/evaicons-solid";
import Image from "next/image"

export const socialLinks = [
  {
    platform: "github",
    href: "https://github.com/De3ph",
    icon: <Github size="96" />
  },
  {
    platform: "linkedin",
    href: "https://www.linkedin.com/in/hamitcandasci/",
    icon: <Linkedin size="96" />
  },
  {
    platform: "stackblitz",
    href: "https://stackblitz.com/@De3ph",
    icon: (
      <Image
        src="https://pbs.twimg.com/profile_images/1055142255722344448/xhqy_EUP.jpg"
        alt="stackblitz logo"
        width="96"
        height="96"
      />
    )
  }
]
