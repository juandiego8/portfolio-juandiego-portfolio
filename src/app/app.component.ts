import { Component } from '@angular/core';
import { hello } from '../scripts/custom.js';
import { CalcService } from '../calc.service';
import { CshbotService } from '../cshbot.service';
import { Thingbot } from '../thingbot/thingbot.component';
//;import { hello } from '../scripts/custom.js'


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [CshbotService]
})
export class AppComponent  {
  name = 'Angular';


 }



