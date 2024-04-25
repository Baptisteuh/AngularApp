import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-skin-founder',
  templateUrl: './skin-founder.component.html',
  styleUrls: ['./skin-founder.component.scss']
})
export class SkinFounderComponent implements OnInit {

  imageUrl!: string;
  image!: string;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  onSearch(): void {
    if (this.imageUrl.length!=0) {
      this.image = "https://mc-heads.net/body/" + this.imageUrl;
    } else {
    }
  }

}
