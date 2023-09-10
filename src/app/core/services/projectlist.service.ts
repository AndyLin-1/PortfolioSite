import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectlistService {

  private projects: Project[] = [
    {
      title: "LearningOOP",
      brief: "Built using Angular, PostgreSQL, and the Spring framework, it offers an interactive platform to enhance your OOP skills.",
      description: "LearningOOP is a collaborative capstone project that I worked on with two other students. It's a website designed to resemble platforms like LeetCode or CodingBat. LearningOOP was further improved by adding a special set of problems called OOP problems (Object Oriented Programming), where the problems involve multiple classes. It has a user-friendly interface that mirrors the layout of Eclipse. It is a valuable resource for students and programmers, providing a hands-on and interactive way to enhance your OOP skills.",
      overallImage: "../../assets/projects/LearningOOP/LearningOOP.png",
      features: [
        {
          name: "Simple Problems",
          description: "Simple method problems, similar to LeetCode.",
          image: "../../assets/projects/LearningOOP/features/DSAProblem.png",
        },
        {
          name: "OOP Problems",
          description: "Objected Oriented Programing problems designed similar to eclipse layout.",
          image: "../../assets/projects/LearningOOP/features/OOPProblem.png",
        },
        {
          name: "Testing Problems",
          description: "Running the program will test the solutions with test cases designed by instructor.",
          image: "../../assets/projects/LearningOOP/features/TestCheck.png",
        },
        {
          name: "Error Checks",
          description: "Running the program with an error in the code will return where and what the error is.",
          image: "../../assets/projects/LearningOOP/features/ErrorCheck.png",
        },
        {
          name: "Save Feature",
          description: "Allows the users to save their progress on the site.",
          image: "../../assets/projects/LearningOOP/features/Menu.png",
        },
        {
          name: "Creating Method Problems",
          description: "Allows the instructor to create method problems through a interface.",
          image: "../../assets/projects/LearningOOP/features/CreateDSA.png",
        },
        {
          name: "Creating OOP Problems",
          description: "Allows the instructor to create OOP problems through a interface.",
          image: "../../assets/projects/LearningOOP/features/CreateOOP.png",
        },
      ],
    },
    {
      title: "ArbBot",
      brief: "Created using Node.js, this Discord bot provides a unique advantage by offering the most favorable odds for bets, giving users an edge in their betting endeavors.",
      description: "This Discord bot changes sports betting by gathering the odds of various sportsbooks through the use of an API. With a simple \"odds\" command, users gain access to a comprehensive display of the best Moneyline and Over/Under odds available across these platforms. The bot also includes an \"arb\" command, which scans for arbitrage opportunities among identical odds, allowing users to capitalize on discrepancies in betting markets. Additionally, it offers a \"freebet\" feature that calculates the optimal strategy for converting free bets, often provided by sportsbooks as bonus money, into real cash by strategically hedging bets.",
      overallImage: "../../assets/projects/ArbBot/ArbBot.png",
      features: [
        {
          name: "Odds",
          description: "Offers a Odds command that display the best odds of the day across sports books",
          image: "../../assets/projects/ArbBot/features/Odds.png",        
        },
        {
          name: "Arb",
          description: "Offers a Arb command that displays any arbtirage oppourtunity aross sports books",
          image: "../../assets/projects/ArbBot/features/Arb.png",
        },
        {
          name: "FreeBet",
          description: "Offers a FreeBet command that displays the best way to convert bonus money into real money via hedging",
          image: "../../assets/projects/ArbBot/features/FreeBet.png",
        },
      ],
    },
    {
      title: "CrystalOptical",
      brief: "Built using Angular, PostgreSQL, and the Spring framework, CrystalOptical is a E-commerce site that sells glasses.",
      description: "Our collaborative project with three other students resulted in an e-commerce website specializing in eyeglasses. The site offers features such as a virtual try-on, easy purchasing, order tracking, and an online chatbox. Users can efficiently search for their desired glasses by brand, style, or prescription, ensuring a streamlined shopping experience. ",
      overallImage: "../../assets/projects/CrystalOptical/CrystalOptical.png",
      features: [
        {
          name: "Catalogue",
          description: "Displays a wide range of items that the site admin can chooses.",
          image: "../../assets/projects/CrystalOptical/features/Items.png",        
        },
        {
          name: "Individual Items",
          description: "Displays individual item information, also contains a rating system as well as a virtual try on feature.",
          image: "../../assets/projects/CrystalOptical/features/Item.png",
        },
        {
          name: "Tracking",
          description: "Allows customers who have purchased items to see the status of their order.",
          image: "../../assets/projects/CrystalOptical/features/Tracking.png",
        },
        {
          name: "ChatBox",
          description: "Interactive Chatbox that answers the FAQ, questions are put through a keyword list, and then generated answer is outputted.",
          image: "../../assets/projects/CrystalOptical/features/Chatbox.png",
        },
      ],
    },
    {
      title: "RedPocket",
      brief: "Built using Angular, MongoDB, and the Spring framework, RedPocket is a personal project that was inspired through the WeChat's Redpocket feature.",
      description: "Redpocket is a web platform inspired by WeChat's Redpacket feature, reimagined for e-transfers, Venmo, and Cash App users. With Redpocket, you can create and share personalized red packets (digital envelopes) with your friends. Recipients can choose to claim a portion of the total amount or receive a randomly generated value from the red packet. It's a fun and convenient way to exchange funds with your social circle.",
      overallImage: "../../assets/projects/RedPocket/redpocket.png",
      features: [
        {
          name: "Creating Red Pockets",
          description: "Allows users to create a redpocket with the transfer and split of their choice.",
          image: "../../assets/projects/RedPocket/features/Create.png",        
        },
        {
          name: "Opening Red Pockets",
          description: "The Participant's view of what the Red Pocket looks like.",
          image: "../../assets/projects/RedPocket/features/Open.png",
        },
        {
          name: "Creator's Interface",
          description: "The Creator's view of what the Red Pocket looks like, it is protected by a randomly generated code",
          image: "../../assets/projects/RedPocket/features/AdminView.png",
        },
      ],
    },
    {
      title: "Tab2XML",
      brief: "Built entirely out of java, Tab2XML is a application that converts music tabs to XML format",
      description: "My first collaborative project was a Java-based application developed with three other students. This application transformed music tabs for instruments like drums and guitar into XML files, enabling easy conversion into various useful formats, including sheet music. It was a valuable tool for musicians and enthusiasts looking to work with music notation in different ways. ",
      overallImage: "../../assets/projects/Tab2XML/Tab2XML.png",
      features: [
        {
          name: "Conversion Process",
          description: "Allows users to convert a music tab of text into an XML text file",
          image: "../../assets/projects/Tab2XML/features/Convert.png",       
        },
        {
          name: "Settings",
          description: "Gives users different settings to work with to allow for more accurate conversions",
          image: "../../assets/projects/Tab2XML/features/Settings.png",
        },
      ],
    },
  ];

  constructor() { }

  // Get the list of all projects
  getProjects(): Project[] {
    return this.projects;
  }
}

export interface Project {
  title: string;
  brief: string;
  description: string;
  overallImage: string;
  features: Feature[];
}

export interface Feature {
  description: string;
  image: string;
  name: string,
}