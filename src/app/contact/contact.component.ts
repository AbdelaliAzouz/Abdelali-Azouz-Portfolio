import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contactInfo = {
    title: "Contact Me",
    subtitle: "My Inbox is open for all.",
    number: "06 77 05 92 54",
    email_address: "abdelali.aazouz@gmail.com"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
