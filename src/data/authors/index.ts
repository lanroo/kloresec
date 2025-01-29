import { Author } from "../types";

export const authors: Record<string, Author> = {
  lucas: {
    id: "lucas",
    name: "Lucas de Souza",
    role: "CEO",
    avatar:
      "https://media.licdn.com/dms/image/v2/D4D03AQEgRKBx-i1SWQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730906860185?e=1743638400&v=beta&t=ARGDLz0eIu54GnCpInfM5zdhXll4kcq-jm4d7kh6JDg",
    bio: "Pesquisador de segurança focado em pentest e exploração de vulnerabilidades",
    social: {
      github: "https://github.com/lucasdesouza",
      linkedin: "https://www.linkedin.com/in/lucas-d-86730b227/",
      website: "https://kloresec.io",
    },
  },
  guest: {
    id: "guest",
    name: "Guest Author",
    role: "Contributor",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=guest&backgroundColor=c0aede",
    bio: "Autor convidado do blog",
  },
};
