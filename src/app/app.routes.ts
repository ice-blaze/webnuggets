import {Routes} from "@angular/router"
import {DetailsComponent} from "./details/details.component"
import {ListComponent} from "./list/list.component"
import {
	delay, of,
} from "rxjs"

export const routes: Routes = [
	{
		path: ``,
		component: ListComponent,
<<<<<<< HEAD
		canDeactivate: [() => of(true).pipe(delay(200))],
=======
		canDeactivate: [() => of(true).pipe(delay(300))],
>>>>>>> 061f383 (feat: add css responsiveness and click animation)
	},
	{
		path: `details/:nuggetId`,
		component: DetailsComponent,
	},
]
