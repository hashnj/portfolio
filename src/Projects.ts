import toh1 from './assets/toh.png';
import toh2 from './assets/toh.mp4';
import bank from './assets/bank.png';
import cc1 from './assets/cc.png';
import cc2 from './assets/cc.mp4';
import blob from './assets/blob.png';
import cart from './assets/cart.mp4';
import cart1 from './assets/cart.png';
import collab from './assets/collab.png';
import collab1 from './assets/collab1.mp4';

const ProjectsList = [
  {
    title: "Collab-up",
    description: 
      "Collab-up is a real-time collaboration platform that integrates **video calling, live chat, a shared whiteboard, and code collaboration** into one seamless interface. Designed for **remote teams, students, and professionals**, it enhances productivity by enabling **instant collaboration on projects** without any setup. The platform ensures **low-latency communication** using WebRTC and WebSockets.",
    tags: ["Next.js", "TypeScript"],
    demo: "https://collab-up.vercel.app/",
    github: "https://github.com/hashnj/collab-up",
    images: [collab, collab1],
  },
  {
    title: "CoreCart",
    description: 
      "CoreCart is a **fully-functional e-commerce platform** featuring a modern and responsive UI. It provides a **secure checkout process**, **user authentication**, and **real-time inventory tracking**. Users can browse products, add items to their cart, and complete **secure transactions**. The platform is optimized for speed and scalability, using **React for the frontend and MongoDB with Express.js for the backend**.",
    tags: ["React", "Node", "Express", "MongoDB", "TypeScript"],
    demo: "https://corecart.vercel.app/",
    github: "https://github.com/hashnj/corecart",
    images: [cart1, cart],
  },
  {
    title: "Career Compass",
    description: 
      "Career Compass is an **AI-powered career guidance platform** that helps users find the right career path through **personalized recommendations**. It evaluates users' **skills, interests, and goals** to suggest suitable career options. Additionally, it provides **job market insights, interview preparation resources, and professional networking opportunities**.",
    tags: ["React", "JavaScript", "Node", "Express", "MongoDB"],
    demo: "https://careercompass-58en.onrender.com/",
    github: "https://github.com/hashnj/career-compass",
    images: [cc1, cc2],
  },
  {
    title: "Tower of Hanoi",
    description: 
      "Tower of Hanoi is an **interactive browser-based puzzle game** that lets users **visually solve the classic Tower of Hanoi problem**. Built with React, it features **smooth animations and drag-and-drop functionality**. The game includes **different difficulty levels** and provides an engaging way to understand **recursion and problem-solving techniques**.",
    tags: ["React", "JavaScript"],
    demo: "https://tower-of-hanoi-rouge.vercel.app/",
    github: "https://github.com/hashnj/tower-of-hanoi",
    images: [toh1, toh2],
  },
  {
    title: "Bankapp",
    description: 
      "Bankapp is a **minimalistic banking application prototype** that demonstrates **secure user authentication, account management, and transaction handling**. It allows users to **check their balance, transfer money, and view transaction history**. Built using **Next.js and Appwrite**, it ensures **fast and secure banking operations**.",
    tags: ["Next.js", "Appwrite"],
    demo: "",
    github: "https://github.com/hashnj/bankapp",
    images: [bank],
  },
  {
    title: "MediumX",
    description: 
      "MediumX is a **feature-rich blogging platform** inspired by Medium, built for content creators. It offers **rich text editing, user authentication, content recommendations, and a seamless reading experience**. The platform is backed by a **robust API and optimized database architecture** for fast content delivery. Users can **write, publish, and interact with posts** effortlessly.",
    tags: ["React", "TypeScript", "Node", "hono", "PostgreSQL", "Prisma", "Cloudflare Workers"],
    demo: "https://blogs-sandy-two.vercel.app/",
    github: "https://github.com/hashnj/Blogs",
    images: [blob],
  },
];

export default ProjectsList;
