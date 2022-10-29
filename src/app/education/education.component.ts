import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  timeline = [
    // {
    //   heading: "Infosys",
    //   duration: "Present",
    //   subtitle: "",
    //   content: "Upcoming Full stack develover at Infosys!",
    //   className1: "mar-left",
    //   className2: "prt_about_learnbox_right"
    // },
    {
      heading: "Master in Mobility and Big Data (ongoing)",
      duration: "2023",
      subtitle: "Faculty Of Science and Technology Tangier",
      content: "Content: Big Data, Data Mining, Machine Learning, Deep Learning, Virtualization, Database Administration, NoSQL ... ",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    },
    {
      heading: "Bachelor of Computer Science",
      duration: "2021",
      subtitle: "Faculty Of Science and Technology Tangier",
      className1: "mar-left",
      content: "Content: \n programing launguages : JAVA / Python / C++  \n Web Developement : HTML, CSS, JavaScript, Laravel, React JS, Node JS \n Operating Systems, Networking, UML,  ",
      className2: "prt_about_learnbox_right"
    },
    {
      heading: "BAC+2 in Mathematics-Physics-Computer Science",
      duration: "2020",
      subtitle: "Faculty Of Science and Technology Tangier",
      content: "Successfully completed my Bac+2 studies in 2021 with a solid base in mathematics, physics and computer science.",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    },
    {
      heading: "Baccalaureate of Mathematics",
      duration: "2017",
      subtitle: "Mohamadia high school Ksar El Kebir",
      content: "Successfully completed my high school studies in 2017",
      className1: "mar-left",
      className2: "prt_about_learnbox_right"
    }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
