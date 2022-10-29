import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  socialMediaLinks = {

    github: "https://github.com/AbdelaliAzouz",
    linkedin: "https://www.linkedin.com/in/abdelali-azouz/",
    gmail: "abdelali.aazouz@gmail.com",
    instagram : "https://www.instagram.com/sarthak_goenka/?hl=en",
    facebook: "https://www.facebook.com/sharthak.agrawal"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
