import placeholder from '../../assets/caseImages/placeholder.png';

import futurewood1 from '../../assets/caseImages/wood/MacBook_Air.png';
import upplevelsekartaD from '../../assets/caseImages/wood/future1D.svg';
import upplevelsekartaL from '../../assets/caseImages/wood/future1L.svg';
import personasD from '../../assets/caseImages/wood/personasD.png';
import personasL from '../../assets/caseImages/wood/personasL.png';
import måltavla from '../../assets/caseImages/wood/måltavla.png';
import kassaW from '../../assets/caseImages/wood/Kassa.png';
import kassaP from '../../assets/caseImages/wood/kundkorgp.png';
import barbord from '../../assets/caseImages/wood/barbord.png';
import matbordp1 from '../../assets/caseImages/wood/matbordp1.png';
import matbordp2 from '../../assets/caseImages/wood/matbordp2.png';
import produktsidaw from '../../assets/caseImages/wood/Pruduktsidan.png';
import startsida1 from '../../assets/caseImages/wood/startsida1.png';
import startsida2 from '../../assets/caseImages/wood/startsida2.png';
import startsidap from '../../assets/caseImages/wood/Startsidap.png';
import tillvalssida from '../../assets/caseImages/wood/Tillvalssida.png';
import produktsidan from '../../assets/caseImages/wood/Pruduktsidanp.png';
import läsmer from '../../assets/caseImages/wood/läsmer.png';
import bekräftelse from '../../assets/caseImages/wood/Bekräftelse.png';
import bekräftelsep from '../../assets/caseImages/wood/bekräftelsep.png';


export const cases = [
    {
      id: "futurewood",
      title: "Future Wood",
      image: futurewood1,
      role: "UX/UI-Design",
      typeOfProject: "School Project",
      content: "Creating a webshop for responsibly-sourced wooden tables done by the imagined company Future Wood.",

      introduction1:"Future Wood is an imaginary start-up company that offers customizable tables. Their goal is to bring more sustainable furniture to the market and encourage slow-living.",
      introduction2:"This project encompassed the whole process in creating a new product. From idéa to a finished prototype that is ready to be handed over to the developers.",

      processAndTactics1: "We began with exploring the existing market to understand the common layouts, visual hierarchies, and user expectations. This revealed significant gaps in accessibility across many platforms, such as low contrast between text and background and frequent non-compliance with WCAG (Web Content Accessibility Guidelines). Something we made sure to test frequently during the designing process. ",
      processAndTactics2: "Before conducting user-research we claryfied our target demographic through a workshop, and then chose five individuals to interview that suited our criteria. This gave us insights into their shopping habits, preferences, and values. From these interviews, three distinct personas emerged:",
      design1: "By adopting the persona's perspective, we brainstormed key features for our product. To guide our prototype, we created a feature prioritization map to determine which features to implement based on impact and effort. We decided to include customization options, an inspiration gallery, and a care advice page.",
      design2: "We experimented with multiple site flow variations, conducting user testing to evaluate their effectiveness. After careful consideration, we selected the most efficient and user-friendly flow, which laid the foundation for the subsequent stages of the design. We had two main goals, to create a simple and recognizable design, and enable users to acces the product pages with one click wherever they are on the site.",
      design3: "When creating hi-fi wireframes we wanted our design to communicate exclusivity and modernity—key aspects of Future Wood’s brand identity. We dedicated significant time to testing various combinations of brand colors, aiming to create a palette that would resonate with the target audience. Additionally, we prioritized the use of big images and ample white space to allow users to navigate the site with ease and enjoy a calm, uncluttered browsing experience. This focus on visual simplicity and clarity was essential in reinforcing the slow-living ethos that Future Wood seeks to promote.",
      
      upplevelsekartaD, // Dark theme image
      personasD,
      upplevelsekartaL, // Light theme image
      personasL,
      måltavla, //default
      kassaW,
      kassaP,
      matbordp1,
      matbordp2,
      produktsidaw,
      startsida1,
      startsida2,
      startsidap,
      tillvalssida,
      barbord,
      produktsidan,
      läsmer,
      bekräftelse,
      bekräftelsep
    },
    {
      id: "plantpal",
      title: "Plant Pal",
      image: placeholder,
      role: "UX/UI-Design & Frontend",
      typeOfProject: "Passion Project",
      content: "A mobile application made to help first-time plant owners choose and take care of their plants. More TBA"
    },
    {
      id: "simplymade",
      title: "Simply Made",
      image: placeholder,
      role: "UX/UI-Design",
      typeOfProject: "Team Project",
      content: "An e-commerce site for hobbyists, to help them gain a customer base and sell handcrafted items. More TBA"
    }
  ];
  
  export default cases;
