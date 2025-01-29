export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  timestamp: number;
  readTime: string;
  image: string;
  tags: string[];
  author: Author;
}

export interface Author {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio?: string;
  social?: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

export const defaultAuthor: Author = {
  id: "admin",
  name: "Admin",
  role: "Security Researcher",
  avatar: "https://github.com/github.png",
};

export const authors: Record<string, Author> = {
  lucas: {
    id: "lucas",
    name: "Lucas de Souza",
    role: "CEO",
    avatar:
      "https://media.licdn.com/dms/image/v2/D4D03AQEgRKBx-i1SWQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730906860185?e=1743638400&v=beta&t=ARGDLz0eIu54GnCpInfM5zdhXll4kcq-jm4d7kh6JDg",
    bio: "Offensive & Application Security",
    social: {
      github: "https://github.com/lucasdesouza",
      linkedin: "https://linkedin.com/in/lucasdesouza",
      website: "https://blog.lucasdesouza.com",
    },
  },
  carlos: {
    id: "carlos",
    name: "Carlos Silva",
    role: "Red Team Engineer",
    avatar:
      "https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg",
    bio: "Especialista em Red Team com foco em Active Directory e Cloud Security",
    social: {
      github: "https://github.com/carlossilva",
      linkedin: "https://linkedin.com/in/carlossilva",
      twitter: "https://twitter.com/carlossilva",
    },
  },
  guest: {
    id: "guest",
    name: "Guest Author",
    role: "Contributor",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=guest",
  },
};
