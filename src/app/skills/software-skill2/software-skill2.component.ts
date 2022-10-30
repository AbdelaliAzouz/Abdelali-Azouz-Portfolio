import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-software-skill2',
  templateUrl: './software-skill2.component.html',
  styleUrls: ['./software-skill2.component.scss']
})
export class SoftwareSkill2Component implements OnInit {
  skillsSection2 = {
         softwareSkills2: [
      // {
      //   fontAwesomeClassname: "fab fa-python"
      // },
      // {
      //   fontAwesomeClassname: "fas fa-database"
        
      // },
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
