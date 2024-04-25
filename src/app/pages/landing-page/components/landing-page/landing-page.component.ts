import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  userEmail: string = 'example@cgi.com';
  textInput: string = 'Example';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onContinue(): void {
    this.router.navigateByUrl('photos');
  }

  onSubmitForm(): void {
    console.log(this.userEmail);
    console.log(this.textInput);
  }

}
