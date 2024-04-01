import {
	ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot,
} from "@angular/router"
import {
	delay, of,
} from "rxjs"

export const delayGuard: CanDeactivateFn<boolean> = (
	_component: unknown,
	_currentRoute: ActivatedRouteSnapshot,
	_currentState: RouterStateSnapshot,
	nextState: RouterStateSnapshot,
) => {
	// Adds delay everytime we leave the page and go to details/...
	// This code is prone to difficult maintenance in the futur if we forgot it exist
	// We delay the page loading because we want to see the button animation
	if (nextState.url.startsWith(`/details`)) {
		return of(true).pipe(delay(150))
	} else {
		return of(true)
	}
}
