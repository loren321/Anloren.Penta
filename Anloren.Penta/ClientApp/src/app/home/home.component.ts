import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ISocialLink } from '../services/ISocialLink';
import { SocialLinkService } from '../services/social-link.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  protected socialLinks$: Observable<ISocialLink[]>;

  public constructor(private socialLinkService: SocialLinkService) {
    this.socialLinks$ = this.socialLinkService.get();
  }
}
