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
		canDeactivate: [() => of(true).pipe(delay(200))],
	},
	{
		path: `details/:nuggetId`,
		component: DetailsComponent,
	},
]
