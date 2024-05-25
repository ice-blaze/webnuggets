import {Component} from "@angular/core"
import {CommonModule} from "@angular/common"
import {RouterOutlet} from "@angular/router"
import {ListComponent} from "./list/list.component"
import {DetailsComponent} from "./details/details.component"
import {FooterComponent} from "./footer/footer.component"

@Component({
	selector: `app-root`,
	standalone: true,
	imports: [
		CommonModule,
		RouterOutlet,
		ListComponent,
		DetailsComponent,
		FooterComponent,
	],
	templateUrl: `./app.component.html`,
	styleUrls: [`./app.component.scss`],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AppComponent {}
