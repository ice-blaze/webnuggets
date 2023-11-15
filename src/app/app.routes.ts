import {Routes} from "@angular/router"
import {DetailsComponent} from "./details/details.component"
import {ListComponent} from "./list/list.component"

export const routes: Routes = [
	{
		path: ``,
		component: ListComponent,

	},
	{
		path: `details/:nuggetId`,
		component: DetailsComponent,
	},
]
