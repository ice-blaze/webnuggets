import {Routes} from "@angular/router"
import {DetailsComponent} from "./details/details.component"
import {ListComponent} from "./list/list.component"
import {listResolver} from "./list/list.resolver"
import {delayGuard} from "./list/delay.guard"
import {randomMemoryGuard} from "./details/random-memory.guard"

export const nuggetId = `nuggetId`
export const detailsRoute = `details`
export const routes: Routes = [
	{
		path: ``,
		component: ListComponent,
		canDeactivate: [delayGuard],
		resolve: {nuggets: listResolver},
		runGuardsAndResolvers: `always`,
	},
	{
		path: `${detailsRoute}/:${nuggetId}`,
		component: DetailsComponent,
		canActivate: [randomMemoryGuard],
	},
]
