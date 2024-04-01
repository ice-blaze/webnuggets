import {
	ActivatedRouteSnapshot, CanActivateFn,
} from "@angular/router"
import {nuggetId} from "../app.routes"

export const visitedKey = `visitedPages`
export const visitedSeparator = `/`
export const randomMemoryGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
	const nugget = (route.params[nuggetId] as string)

	const storage = localStorage.getItem(visitedKey)?.split(visitedSeparator) ?? []

	if (!storage.includes(nugget)) {
		localStorage.setItem(
			visitedKey,
			[
				...storage,
				nugget,
			].join(visitedSeparator),
		)
	}
	return true
}
