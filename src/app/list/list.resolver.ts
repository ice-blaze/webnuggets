import {
	ActivatedRouteSnapshot, ResolveFn,
} from "@angular/router"
import {
	WebNugget, webNuggets,
} from "../nuggets"

export const searchParam = `search`

export const listResolver: ResolveFn<WebNugget[]> = (route: ActivatedRouteSnapshot) => {
	const searchTerm = route.queryParamMap.get(searchParam)
	if (searchTerm === null) {
		return webNuggets()
	}

	const searchLowerCase = searchTerm.toLocaleLowerCase()
	return webNuggets().
		filter((nugget) => {
			const splittedSearch = searchLowerCase.split(` `)
			return nugget.content.toLocaleLowerCase().includes(searchLowerCase) ||
						nugget.title.toLocaleLowerCase().includes(searchLowerCase) ||
						nugget.topics.some((topic) => splittedSearch.includes(topic)) ||
						nugget.format === searchLowerCase
		})
}
