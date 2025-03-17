import toh1 from './assets/toh.png';
import toh2 from './assets/toh.mp4';
import bank from './assets/bank.png';
import cc1 from './assets/cc.png';
import cc2 from './assets/cc.mp4';
import blob from './assets/blob.png';
import cart from './assets/cart.mp4'
import cart1 from './assets/cart.png'
import collab from './assets/collab.png'
import collab1 from './assets/collab1.mp4'

const ProjectsList = [
  {
      title: "Collab-up",
      description: "A real-time collaboration platform with video calling, chat, whiteboard, and more, enabling seamless remote teamwork.",
      tags: ["Next.js", "TypeScript"],
      demo: "https://collab-up.vercel.app/",
      github: "https://github.com/hashnj/collab-up",
      images: [collab,collab1],
  },
  {
      title: "CoreCart",
      description: "A feature-rich e-commerce platform designed for smooth online shopping experiences with secure transactions and user-friendly UI.",
      tags: ["React", "Node", "Express", "MongoDB", "TypeScript"],
      demo: "https://corecart.vercel.app/",
      github: "https://github.com/hashnj/corecart",
      images: [cart1,cart],
  },
  {
      title: "Career Compass",
      description: "A career guidance platform helping users find the right career path with tailored recommendations and resources.",
      tags: ["React", "JavaScript", "Node", "Express", "MongoDB"],
      demo: "https://careercompass-58en.onrender.com/",
      github: "https://github.com/hashnj/career-compass",
      images: [cc1,cc2],
  },
  {
    title: "Tower of Hanoi",
    description: "A browser-based game that simulates the classic Tower of Hanoi puzzle, allowing users to interact with and solve it visually.",
    tags: ["React", "JavaScript"],
    demo: "https://tower-of-hanoi-rouge.vercel.app/",
    github: "https://github.com/hashnj/tower-of-hanoi",
    images: [toh1 ,toh2],
},
  {
      title: "Bankapp",
      description: "A basic banking application prototype, showcasing account management features and transactions.",
      tags: ["Next.js", "Appwrite"],
      demo: "",
      github: "https://github.com/hashnj/bankapp",
      images: [bank],
  },
  {
      title: "MediumX",
      description: "A modern blogging platform inspired by Medium, built with a powerful backend and seamless content management.",
      tags: ["React", "TypeScript", "Node", "Express", "PostgreSQL", "Prisma", "Cloudflare Workers"],
      demo: "https://blogs-sandy-two.vercel.app/",
      github: "https://github.com/hashnj/Blogs",
      images: [blob],
  },
  
];

export default ProjectsList;
