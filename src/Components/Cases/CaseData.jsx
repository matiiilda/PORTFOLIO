import placeholder from '../../assets/caseImages/placeholder.png';

import futurewood1 from '../../assets/caseImages/wood/MacBook_Air.png';
import upplevelsekartaD from '../../assets/caseImages/wood/future1D.svg';
import upplevelsekartaL from '../../assets/caseImages/wood/future1L.svg';
import personasD from '../../assets/caseImages/wood/personasD.png';
import personasL from '../../assets/caseImages/wood/personasL.png';
import måltavla from '../../assets/caseImages/wood/måltavla.png';
import kassaW from '../../assets/caseImages/wood/Kassa.png';
import kassaP from '../../assets/caseImages/wood/kundkorgp.png';
import matbordp1 from '../../assets/caseImages/wood/matbordp1.png';
import matbordp2 from '../../assets/caseImages/wood/matbordp2.png';
import produktsidaw from '../../assets/caseImages/wood/Pruduktsidan.png';
import startsida1 from '../../assets/caseImages/wood/startsida1.png';
import startsida2 from '../../assets/caseImages/wood/startsida2.png';
import startsidap from '../../assets/caseImages/wood/Startsidap.png';
import tillvalssida from '../../assets/caseImages/wood/Tillvalssida.png';

export const cases = [
    {
      id: "futurewood",
      title: "Future Wood",
      image: futurewood1,
      role: "UX/UI-Design",
      typeOfProject: "School Project",
      content: "Creating a webshop for responsibly-sourced wooden tables done by the imagined company Future Wood.",

      introduction1:"Future Wood is an imaginary start-up company that offers customizable tables. Their goal is to bring more sustainable furniture to the market and encourage slow-living.",
      introduction2:"In this project we followed the whole process, from idéa to finished prototype. We brainstormed marketing strategies, core branding, did user-research as well as user-interviews to then later incorporate into the finished product.",

      processAndTactics1: "We began by analyzing the existing online market for furniture to understand the common layouts, visual hierarchies, and user expectations. This exploration revealed significant gaps in accessibility across many platforms, such as low contrast between text and background, overlapping text and images, and frequent non-compliance with WCAG (Web Content Accessibility Guidelines). Recognizing these shortcomings, we made accessibility a top priority in our design process to ensure that Future Wood’s platform would be both inclusive and user-friendly.",
      processAndTactics2: "To further refine our approach, we conducted a workshop to clarify the target market for Future Wood. We then interviewed five individuals who closely matched the target demographic to gain deeper insights into their shopping habits, preferences, and values. From these interviews, three distinct personas emerged:",
      design1: "Leveraging the insights gained from our personas, we identified five key features that would best appeal to the target market. However, due to time constraints, we recognized that it would not be feasible to incorporate all these features into the initial prototype. To address this, we created a feature prioritization map that allowed us to determine the essential features and the order in which they should be implemented. This approach ensured that we focused on the most impactful elements first while leaving room for future iterations.",
      design2: "We experimented with multiple site flow variations, conducting user testing to evaluate their effectiveness. After careful consideration, we selected the most efficient and user-friendly flow, which laid the foundation for the subsequent stages of the design. We had two main goals, to create a simple and recognizable design, and enable users to acces the product pages with one click wherever they are on the site.",
      design3: "During the high-fidelity prototyping phase, our focus shifted to refining the visual design to ensure that it communicated exclusivity and modernity—key aspects of Future Wood’s brand identity. We dedicated significant time to testing various combinations of brand colors, aiming to create a palette that would resonate with the target audience. Additionally, we prioritized the use of ample white space to allow users to navigate the site with ease and enjoy a calm, uncluttered browsing experience. This focus on visual simplicity and clarity was essential in reinforcing the slow-living ethos that Future Wood seeks to promote.",
      
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
      tillvalssida
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
