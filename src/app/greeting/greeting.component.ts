import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
})
export class GreetingComponent implements OnInit {
  greeting= {
    username: "Abdelali AZOUZ",
    title: "Hi all, I'm Abdelali AZOUZ",
    subTitle: "Mobility and Big Data master student, passionate about Data Science, Machine Learning, AI and Big Data technologies. On the other hand, I am     interested in developing softwares with JAVA / Spring Boot / Angular /     React JS.",
    resumeLink: "https://drive.google.com/file/d/1Ub56jHA0e6L7ST4vLxpKru9QDSeqwcaK/view?usp=sharing"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
