import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {

  currentLang: string;
  currentDate: number;

  constructor(private translateService: TranslateService) {
    this.currentLang = this.translateService.currentLang;
    this.currentDate = Date.now();
  }
}
