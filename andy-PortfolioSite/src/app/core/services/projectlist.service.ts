import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectlistService {

  private projects: Project[] = [
    {
      title: "LearningOOP",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      overallImage: "../../assets/projects/LearningOOP/LearningOOPImage.png",
      features: [
        {
          description: "Feature 1 for Sample Project 1",
          image: "../../assets/Logo.png",
          name: "Feature 1",
        },
        {
          description: "Feature 2 for Sample Project 1",
          image: "../../assets/projects/LearningOOP/LearningOOPImage.png",
          name: "Feature 1",
        },
        {
          description: "Feature 2 for Sample Project 1",
          image: "../../assets/projects/LearningOOP/LearningOOPImage.png",
          name: "Feature 1",
        },
        {
          description: "Feature 2 for Sample Project 1",
          image: "../../assets/projects/LearningOOP/LearningOOPImage.png",
          name: "Feature 1",
        },
        {
          description: "Feature 2 for Sample Project 1",
          image: "../../assets/projects/LearningOOP/LearningOOPImage.png",
          name: "Feature 1",
        },
        {
          description: "Feature 2 for Sample Project 1",
          image: "../../assets/projects/LearningOOP/LearningOOPImage.png",
          name: "Feature 1",
        },
        {
          description: "Feature 2 for Sample Project 1",
          image: "../../assets/projects/LearningOOP/LearningOOPImage.png",
          name: "Feature 1",
        },
        {
          description: "Feature 2 for Sample Project 1",
          image: "../../assets/projects/LearningOOP/LearningOOPImage.png",
          name: "Feature 1",
        },
        {
          description: "Feature 2 for Sample Project 1",
          image: "../../assets/projects/LearningOOP/LearningOOPImage.png",
          name: "Feature 1",
        },
      ],
    },
    {
      title: "LearningOOP1",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      overallImage: "../../assets/projects/LearningOOP/LearningOOPImage.png",
      features: [
        {
          description: "Feature 1 for Sample Project 1",
          image: "../../assets/Logo.png",
          name: "Feature 1",
        },
        {
          description: "Feature 2 for Sample Project 1",
          image: "../../assets/projects/LearningOOP/LearningOOPImage.png",
          name: "Feature 1",
        },
      ],
    },
    {
      title: "LearningOOP2",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      overallImage: "../../assets/projects/LearningOOP/LearningOOPImage.png",
      features: [
        {
          description: "Feature 1 for Sample Project 1",
          image: "../../assets/Logo.png",
          name: "Feature 1",
        },
        {
          description: "Feature 2 for Sample Project 1",
          image: "../../assets/projects/LearningOOP/LearningOOPImage.png",
          name: "Feature 1",
        },
      ],
    },
    {
      title: "LearningOOP3",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      overallImage: "../../assets/projects/LearningOOP/LearningOOPImage.png",
      features: [
        {
          description: "Feature 1 for Sample Project 1",
          image: "../../assets/Logo.png",
          name: "Feature 1",
        },
        {
          description: "Feature 2 for Sample Project 1",
          image: "../../assets/projects/LearningOOP/LearningOOPImage.png",
          name: "Feature 1",
        },
      ],
    },
    {
      title: "LearningOOP4",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      overallImage: "../../assets/projects/LearningOOP/LearningOOPImage.png",
      features: [
        {
          description: "Feature 1 for Sample Project 1",
          image: "../../assets/Logo.png",
          name: "Feature 1",
        },
        {
          description: "Feature 2 for Sample Project 1",
          image: "../../assets/projects/LearningOOP/LearningOOPImage.png",
          name: "Feature 1",
        },
      ],
    }
  ];

  constructor() { }

  // Get the list of all projects
  getProjects(): Project[] {
    return this.projects;
  }
}

export interface Project {
  title: string;
  description: string;
  overallImage: string;
  features: Feature[];
}

export interface Feature {
  description: string;
  image: string;
  name: string,
}