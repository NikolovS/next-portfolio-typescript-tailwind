import { RiComputerLine } from 'react-icons/ri';
import { FaServer } from 'react-icons/fa';
import { IProject, IService, ISkill } from './type';
import {
  AiOutlineAntDesign,
  AiOutlineApi,
  AiOutlineCloudServer,
} from 'react-icons/ai';
import { DiJavascript1, DiReact, DiFirebase } from 'react-icons/di';
import { BsCircleFill, BsFillBootstrapFill } from 'react-icons/bs';
import { TbBrandReactNative } from 'react-icons/tb';
import { FiFigma } from 'react-icons/fi';
import {
  SiMongodb,
  SiMaterialui,
  SiAdobephotoshop,
  SiTailwindcss,
} from 'react-icons/si';

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: 'Frontend Development',
    about:
      'I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b> and <b>React.js</b>.',
  },
  {
    Icon: FaServer,
    title: 'Backend  Development',
    about:
      'handle database, server, api using <b>Express </b> & other popular frameworks',
  },
  {
    Icon: AiOutlineApi,
    title: 'API Development',
    about: 'I can develop REST API using  <b>Node API</b> ',
  },

  {
    Icon: AiOutlineAntDesign,
    title: 'UI/UX designer',
    about:
      'stunning user interface designer using <b>Figma</b>  and  <b>Adobe </b> ',
  },
  {
    Icon: RiComputerLine,
    title: 'Whatever',
    about:
      'State management with <b>React Redux</b>. Mobile apps using <b>React Native</b>',
  },
];

export const languages: ISkill[] = [
  {
    name: 'Java Script',
    level: '90%',
    Icon: DiJavascript1,
  },
  {
    name: 'React',
    level: '80%',
    Icon: DiReact,
  },
  {
    name: 'React Native',
    level: '70%',
    Icon: TbBrandReactNative,
  },
  {
    name: 'BootStrap',
    level: '80%',
    Icon: BsFillBootstrapFill,
  },
  {
    name: 'TailWind',
    level: '40%',
    Icon: SiTailwindcss,
  },

  {
    name: 'Material UI',
    level: '80%',
    Icon: SiMaterialui,
  },
];

export const tools: ISkill[] = [
  {
    name: 'Figma',
    level: '90%',
    Icon: FiFigma,
  },
  {
    name: 'Adobe Photoshop',
    level: '30%',
    Icon: SiAdobephotoshop,
  },

  {
    name: 'Mongo DB',
    level: '60%',
    Icon: SiMongodb,
  },
  {
    name: 'Firebase',
    level: '70%',
    Icon: DiFirebase,
  },
  {
    name: 'Google Cloud Platform',
    level: '50%',
    Icon: AiOutlineCloudServer,
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: 'Social Media Blog Posts App',
    description:
      'This app is build using graphql. It is a simple social media app,in which the user must register or login and after that can create, comment or like a post. and track a discussion.',
    image_path: '/images/social-media-blog-app.png',
    github_url: 'https://github.com/NikolovS/merng-client',
    deployed_url: 'https://singular-squirrel-e39d78.netlify.app/',
    category: ['react', 'graphql'],
    key_techs: ['GraphQl', 'Semantic UI', 'React'],
  },
  {
    id: 2,
    name: 'Gallery/ E-commerce with React',
    description:
      'This app is build using React and React Redux. It is a simple gallery,in which the user must register or login and after that can create, buy or like paintings.',
    image_path: '/images/react-gallery.png',
    github_url: 'https://github.com/NikolovS/gallery',
    deployed_url: 'https://yangog-gallery.herokuapp.com/',
    category: ['react', 'mongo', 'express'],
    key_techs: ['Express', 'Bootstrap 4', 'React'],
  },
  {
    id: 3,
    name: 'Gallery/ E-commerce with NextJs',
    description:
      'This app is build using NextJs. It is a gallery store,in which the user must register or login and after that can buy or rate paintings and leave a review',
    image_path: '/images/gallery-next.png',
    github_url: 'https://github.com/NikolovS/next-gallery',
    deployed_url: 'https://next-gallery-hazel.vercel.app/',
    category: ['react', 'nextjs', 'mongo'],
    key_techs: ['React', 'Material UI', 'NextJs'],
  },
];
