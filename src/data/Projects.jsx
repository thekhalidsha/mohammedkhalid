import { SiGooglecalendar, SiInstagram, SiPhp } from "@icons-pack/react-simple-icons";
import cz from './../assets/companies/chainzent.ico'
import { UserCircle } from "lucide-react";

const projectsData = [
  {
    id: "1",
    title: "Personal Portfolio - ReactJs ",
    description: "A Simple Responsive Website & Minimalistic Portfolio website using ReactJs & Tailwind CSS.",
    // image: "https://avatars.githubusercontent.com/u/72810866?s=600&v=4",
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
    link: "https://github.com/thekhalidsha/php-mvc-simple-framework",
    github: "https://github.com/thekhalidsha/php-mvc-simple-framework",
    readmeUrl: "https://raw.githubusercontent.com/thekhalidsha/php-mvc-simple-framework/refs/heads/main/README.md"
  },
  {
    id: "3",
    title: "Laasya '23 - Event Management",
    description: "A PHP Built robust and multi role based cultural and technical event management system. It allows users to manage events seamlessly with features for registration, scheduling, and notifications. It includes features for user authentication, event tracking, and real-time updates.",
    // image: "https://avatars.githubusercontent.com/u/72810866?s=600&v=4",
    icon: SiGooglecalendar,
    link: "https://github.com/thekhalidsha/laasya_23/tree/web-latest",
    github: "https://github.com/thekhalidsha/laasya_23/tree/web-latest",
    readmeUrl: "https://raw.githubusercontent.com/thekhalidsha/laasya_23/refs/heads/web-latest/README.md"
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

    // image: "https://avatars.githubusercontent.com/u/72810866?s=600&v=4",
    icon: SiInstagram,
    link: "https://github.com/thekhalidsha/laasya_23/tree/web-latest",
    github: "https://github.com/thekhalidsha/laasya_23/tree/web-latest",
    readmeUrl: "https://raw.githubusercontent.com/thekhalidsha/laasya_23/refs/heads/web-latest/README.md"
  },
  {
    id: "5",
    title: "Chainzent - Website Revamp",
    description: "A Simple landing page designed for a comapny specializing on web3 technologies. It showcases modern design principles and emphasizes user experience. NextJs and Tailwind CSS were used for this project.",
    image: cz,
    // icon: SiGooglecalendar,
    link: "https://chainzent-viewport.web.app/",
    github: "https://github.com/thekhalidsha/Chainzent-NextJs",
    readmeUrl: "https://raw.githubusercontent.com/thekhalidsha/Chainzent-NextJs/refs/heads/main/README.md"
  },
  {
    id: "6",
    title: "Femprish - Website Design",
    description: "A website design inspired on women empowerment. Completely built on HTML, CSS & Vanilla JS",
    // image: cz,
    icon: UserCircle,
    link: "https://chainzent-viewport.web.app/",
    github: "https://github.com/thekhalidsha/Femprish_Template",
    readmeUrl: "https://github.com/thekhalidsha/Femprish_Template"
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
    readmeUrl: "https://github.com/thekhalidsha/ns_website_revamp/tree/django"
  },

];
export default projectsData;
