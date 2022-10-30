import { Component, OnInit } from '@angular/core';
import {Apollo} from "apollo-angular";
import gql from 'graphql-tag';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  timeline = [
    {
      heading: " Collaborative Platform of Academic Researchers of the faculty of sciences and technologies",
      subtitle: "Tools: React JS, Node JS, Express JS, MySQL, Firebase.",
      content: "This project is a work that I developed as part of my end-of-studies project, to obtain the Bachelor's degree \n" +
      "in Science and Technology, in the Computer Engineering specialty at the Faculty of Science and Technology of Tangier.\n" +
      "The application context of the project is oriented towards higher education and scientific research. The latter requires \n" +
      "collaborative work between researchers, so that they can: communicate to collaborate, share their scientific articles, know \n" +
      "the different themes that other researchers are working on.This project requires a well-organized, structured and effective \n" +
      "working methodology, for this, I used the XP method, eXtreme Programming, which is an agile method.The modeling of the project was\n" +
      " done using the UML language with its different aspects. For the technical and development part, we chose JavaScript, the most \n" +
      "recommended and popular scripting language in web development, ReactJS for the Front-End part, NodeJS and Express for the Back-End \n" +
      "and Server part, MySQL for the Database part, Firebase as real-time database....",      
      className1: "mar-right",
      link: "https://github.com/AbdelaliAzouz/LST-GI-PFE-Project",
      className2: "prt_about_learnbox_right",
    },
    {
      heading: "Web Scraping & Data analysis and visualization",
      subtitle: "Tools: Angular, Flask, MongoDB, GraphQL, BeautifulSoup, Pandas, matplotlib.",
      className1: "mar-left",
      content: "The main objective of the project is the realization of an ETL pipeline ''Extract, Transform, Load'' \n" +
      "and Data Visualization / Analysis.The Extract phase process is done with the web scraping, where the objective is to \n" +
      "collect cryptocurrencies data from the website worldCoinIndex. The tools that I have used are BeautifulSoup and pandas. \n" +
      "After collecting the data, I start the preprocessing to organize this data into a suitable formats, this step is very important \n" +
      "in the ETL process which represent the transform part where I have removed the outliers and fill the missing values with the appropriate \n" +
      "information. then I loaded the data into mongoDB database by connecting Flask with the server.The platform gives the user \n" +
      "the ability to download the data or make a visualization with the matplotlib library.",
      className2: "prt_about_learnbox_right",
      link: "https://github.com/AbdelaliAzouz/Scraping-cryptocurrencies-Data",
    },
    {
      heading: "Simulation of a car parking",
      subtitle: "Tools: JAVA(POO, GUI Swing, Multithreading)",
      content: "A smart parking developed with JAVA, where the graphical part is done with Swing and AWT. Each car is represented as a thread where the behaviors of each car are : \n",
      className1: "mar-right",
      link: "https://github.com/AbdelaliAzouz/Smart-parking-Simulation",
      className2: "right",
      steps1:"•	1. The car get outside for a while.",
      steps2:"•	2. Request and obtain access to the car park. \n",
      steps3:"•	3. Enter the parking lot, and stay there for a while \n" ,
      steps4:"•	4. Exit the car park.",

    },
    {
      heading: "Predict the flow of urban traffic in the city of Sao Paulo",
      subtitle: "Tools: Python, Numpy, Pandas, scikit learn, Random forest.",
      content: "This project covers a simple exploratory analysis over the Behavior of the urban traffic of the city of Sao Paulo in Brazil Data Set. In addition, i shortlisted a few machine learning models to predict the Slowness in Traffic variable (0-100%). Although the size of the dataset is considerably small, limiting the models performance and the exploratory analysis. The notebook was built with self-learning purposes only. The dataset covers 135 instances, each representing 30 minute timeframes over the week, from Monday 12/14/2009 to Friday 12/18/2009. \n" +
      "The steps that I’ve follow are: ",
      steps1:"•	1. Data Overview",
      steps2:"•	2. Data Manipulation ",
      steps3:"•	3. Data Visualization ",
      steps4:"•	4. Data preprocessing ",
      steps5:"•	5. Model Building ",
      steps6:"•	6. Model Performance",

      className1: "mar-left",
      link: "https://www.kaggle.com/code/parismollo/urban-traffic-analysis-sao-paulo",
      className2: "prt_about_learnbox_right"
    },
    {
      heading: "Analyze performance indicators of FSTT students",
      subtitle: "Tools: Power BI, Excel, Visual Studio, SQL Server",
      content: "Dans ce projet on va appliquer les techniques de l’informatique décisionnelles sur des données \n"+
      "des étudiants de DEUST dans la faculté de science et techniques de Tanger pour extraire des \n"+
      "informations et des connaissances utiles sur ces étudiants.\n"+
      "a. Taux d’inscription/réussite par série de bac\n"+
      "b.Taux d’inscription/réussite par ville\n"+
      "c. Taux d’inscription/réussite par Sexe et par année",
      className1: "mar-right",
      link: "https://drive.google.com/file/d/1cza4Qoyl-_922XooeN_1vkF1JFeAwTh3/view?usp=sharing",
      className2: "prt_about_learnbox_right",
        }
    ];
  projects2 = [];
  projects3 = [
    {
      link: "https://github.com/sarthakgoenka/portfolio",
    },
    {
      link: "",
    },
    {
      link: "https://natours-8aa57.web.app/",
    },
    {
      link:""
    },
    {

      link: "http://node-room-chat.herokuapp.com/",
    },
    {
      link: "https://personal-doc.herokuapp.com/",

    }
  ]
  constructor(public apollo: Apollo) { }

  ngOnInit(): void {
    
    }

}
