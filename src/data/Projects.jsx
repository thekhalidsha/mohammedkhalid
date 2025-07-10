import { SiGooglecalendar, SiInstagram, SiNpm, SiPhp } from "@icons-pack/react-simple-icons";
import cz from './../assets/companies/chainzent.ico'
import { UserCircle } from "lucide-react";
import me from './../assets/me.png'
const projectsData = [
  {
    id: "1",
    title: "Personal Portfolio - ReactJs ",
    description: "A Simple Responsive Website & Minimalistic Portfolio website using ReactJs & Tailwind CSS.",
    image: me,
    // icon: SiPhp,
    link: "/",
    github: "https://github.com/thekhalidsha/mohammedkhalid/tree/minimalistic",
    readmeUrl: "/README.md"
  },
  {
    id: "2",
    title: "SlymPHP MVC Framework",
    description: "A Simple PHP MVC Framework (without the need for composer)",
    // image: "https://avatars.githubusercontent.com/u/72810866?s=600&v=4",
    icon: SiPhp,
    link: "https://thekhalidsha.gitbook.io/slym-php-docs",
    github: "https://github.com/thekhalidsha/slymphp/",
    readmeUrl: "https://raw.githubusercontent.com/thekhalidsha/portfolio-readme/refs/heads/main/slymphp.md"
  },
  {
    id: "3",
    title: "Laasya '23 - Event Management",
    description: "A PHP Built robust and multi role based cultural and technical event management system. It allows users to manage events seamlessly with features for registration, scheduling, and notifications. It includes features for user authentication, event tracking, and real-time updates.",
    // image: "https://avatars.githubusercontent.com/u/72810866?s=600&v=4",
    icon: SiGooglecalendar,
    link: "#",
    github: "#",
    readmeUrl: "https://raw.githubusercontent.com/thekhalidsha/portfolio-readme/refs/heads/main/Laasya.md"
  },
  {
    id: "4",
    title: "Instanza - Instagram Automation",
    description: (
      <>
        Tools Used: Python, Django & SQLite
        <br />
        An Instagram Automation Toolkit which can randomize Instagram actions such as liking, commenting, and following users to automate repetitive tasks and improve user engagement. It provides users with a seamless experience to enhance their Instagram presence.
      </>
    ),

    image: "https://thekhalidsha.pythonanywhere.com/static/images/instanza_favicon.png",
    // icon: SiInstagram,
    link: "https://thekhalidsha.pythonanywhere.com/",
    github: "#",
    readmeUrl: "https://raw.githubusercontent.com/thekhalidsha/portfolio-readme/refs/heads/main/Instanza.md"
  },
  {
    id: "5",
    title: "Chainzent - Website Revamp",
    description: "A Simple landing page designed for a comapny specializing on web3 technologies. It showcases modern design principles and emphasizes user experience. NextJs and Tailwind CSS were used for this project.",
    image: cz,
    // icon: SiGooglecalendar,
    link: "https://chainzent-viewport.web.app/",
    github: "https://github.com/thekhalidsha/Chainzent-NextJs",
    readmeUrl: "https://raw.githubusercontent.com/thekhalidsha/portfolio-readme/refs/heads/main/ChainzentRevamp.md"
  },
  {
    id: "6",
    title: "Femprish - Website Design",
    description: "A website design inspired on women empowerment. Completely built on HTML, CSS & Vanilla JS",
    image: 'https://thekhalidsha.github.io/Femprish_Template/assets/images/favicon.jpg',
    // icon: UserCircle,
    link: "https://thekhalidsha.github.io/Femprish_Template/",
    github: "https://github.com/thekhalidsha/Femprish_Template",
    readmeUrl: "https://raw.githubusercontent.com/thekhalidsha/portfolio-readme/refs/heads/main/Femprish.md"
  },
  {
    id: "7",
    title: "Networkz Systems - CMS",
    description: (
      <>
        Tools Used: Python, Django & SQLite
        <br />
        A Complete Content Management System (CMS) that allows admins to create, edit, and manage their content efficiently. This CMS provides a user-friendly interface for managing courses, events, images and job opening, ensuring a streamlined workflow for visitors. The webiste is equipped with a enquiry system which has a OTP verification method and auto emailing of the enquiries to respected branches. The website does have a dunamic url for each branch d=created within with the ability to edit each sections as they like. 
      </>
    ),
    image: "https://networkzsystems.com/static/frontend/assets/images/favicon.ico",
    // icon: UserCircle,
    link: "https://networkzsystems.com",
    github: "https://github.com/thekhalidsha/ns_website_revamp/tree/django",
    readmeUrl: "https://raw.githubusercontent.com/thekhalidsha/portfolio-readme/refs/heads/main/NetworkzSystems.md"
  },
  {
    id: "8",
    title: "Easy Fullscreen - UI Component ",
    description: "A simple and lightweight React component for creating **fullscreen sliding sections** – horizontally or vertically.",
    // image: "https://avatars.githubusercontent.com/u/72810866?s=600&v=4",
    icon: SiNpm,
    link: "https://www.npmjs.com/package/@thekhalidsha/easy-fullscreen",
    github: "https://github.com/thekhalidsha/easy-fullscreen",
    readmeUrl: "https://raw.githubusercontent.com/thekhalidsha/portfolio-readme/refs/heads/main/easy-fullscreen.md"
  },
  {
    id: "9",
    title: "CG-IFMS Revamp - ReactJs ",
    description: "A Responsive frontend design revamp for CG-IFMS - A Government financial audit software using ReactJs & Tailwind CSS.",
    image: "https://cgifms.vercel.app/favicon.svg",
    // icon: SiPhp,
    link: "https://cgifms.vercel.app/",
    github: "https://github.com/thekhalidsha/mohammedkhalid/tree/minimalistic",
    readmeUrl: "https://raw.githubusercontent.com/thekhalidsha/portfolio-readme/refs/heads/main/CGIFMS_Revamp.md"
  },

];
export default projectsData;
