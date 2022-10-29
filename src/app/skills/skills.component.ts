import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsSection = {
    title: "Data Science",
    subTitle: "UNCOVER INSIGHTS AND IDENTIFY PATTERNS TO INFORM BUSINESS DECISIONS MAKING",
    skills: [
      " Collecting data from different ressources",
      " Assess quality of data and remove or clean data",
      " Organising data in to usable formats",
      " Building machine learning algorithms and predictive models",
      " Preparing reports for executive and project teams",
      " Data visualization"
    ],
    title2:"Web Developement",
    subTitle2: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills2: [
      " Develop interactive Front end / User Interfaces for web and mobile applications",
      " Creating application backend in Node, Express & Spring Boot",
      " Building SPA with React JS and Angular",
      " Integration of third party services such as Firebase",
      " Unified Modeling Language & Agile methodologie"
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}