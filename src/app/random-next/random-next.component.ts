import {
	Component, Input, OnInit,
	inject,
} from '@angular/core'
import {
	ActivatedRoute, RouterModule,
} from '@angular/router'
import {
	visitedKey, visitedSeparator,
} from '../details/random-memory.guard'
import {webNuggets} from '../nuggets'
import {
	detailsRoute, nuggetId,
} from '../app.routes'

@Component({
	selector: `app-random-next`,
	standalone: true,
	imports: [RouterModule],
	templateUrl: `./random-next.component.html`,
	styleUrl: `./random-next.component.scss`,
})
export class RandomNextComponent implements OnInit {
	public urlToGo = [`/`]
	public allNuggetsWereVisited = false
	private readonly route = inject(ActivatedRoute)

	@Input()
	public buttonText: `Random Next` | `Random Nugget` = `Random Next`

	public clearRandoms(): void {
		localStorage.removeItem(visitedKey)

		// set current URL to avoid to get redirected on the current page
		localStorage.setItem(
			visitedKey,
			this.route.snapshot.params[nuggetId] as string,
		)
		this.ngOnInit()
	}

	public ngOnInit(): void {
		const visited = localStorage.getItem(visitedKey)?.split(visitedSeparator) ?? []
		const nuggets = webNuggets().map((nugget) => nugget.id)
		this.allNuggetsWereVisited = visited.length === nuggets.length

		const unvisited = nuggets.filter((nugget) => !visited.includes(nugget))
		const randomNugget = this.getRandomElement(unvisited)
		this.setUrlToGo(randomNugget)
	}

	private setUrlToGo(nuggetUrl: string): void {
		this.urlToGo = [
			`/`,
			detailsRoute,
			nuggetUrl,
		]
	}

	private getRandomElement<T>(array: T[]): T {
		return array[Math.floor(Math.random() * array.length)]
	}
}
