import futurewood1 from '../../assets/caseImages/wood/MacBook_Air.png';
import upplevelsekartaD from '../../assets/caseImages/wood/future1D.svg';
import upplevelsekartaL from '../../assets/caseImages/wood/future1L.svg';
import placeholder from '../../assets/caseImages/Placeholder.png';

export const cases = [
    {
      id: "futurewood",
      title: "Future Wood",
      image: futurewood1,
      role: "UX/UI-Design",
      typeOfProject: "School Project",
      content: "Creating a webshop for responsibly-sourced wooden tables done by the imagined company Future Wood.",

      introduction1:"Future Wood is an imaginary start-up company that offers customizable tables. Their goal is to bring more sustainable furniture to the market and encourage slow-living; And our goal was to create a webbshop for them.",
      introduction2:"In this project we followed the whole process, from idéa to finished prototype. We brainstormed marketing strategies, core branding, did user-research as well as user-interviews to then later incorporate into the finished product.",

      processAndTactics: "Here we describe the process and tactics used in Case futurewood, highlighting key strategies and approaches.",
      results: "The results of Case futurewood were outstanding, leading to significant improvements and success.",

      collageImages: [
        '/path/to/image1.jpg',
        '/path/to/image2.jpg',
        '/path/to/image3.jpg',
        '/path/to/image4.jpg',
        '/path/to/image5.jpg',
        '/path/to/image6.jpg'
      ],

      upplevelsekartaD, // Dark theme image
      upplevelsekartaL, // Light theme image

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