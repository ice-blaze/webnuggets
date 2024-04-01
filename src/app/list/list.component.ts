import {
	Component, inject,
} from '@angular/core'
import {WebNugget} from '../nuggets'
import {TileComponent} from '../tile/tile.component'
import {
	FormControl, ReactiveFormsModule,
} from '@angular/forms'
import {takeUntilDestroyed} from '@angular/core/rxjs-interop'
import {
	ActivatedRoute, Router,
} from '@angular/router'
import {
	map,
	take,
} from 'rxjs'
import {
	AsyncPipe, NgOptimizedImage,
} from '@angular/common'
import {searchParam} from './list.resolver'
import {TitleComponent} from '../title/title.component'
import {RandomNextComponent} from '../random-next/random-next.component'

@Component({
	selector: `app-list`,
	standalone: true,
	imports: [
		TitleComponent,
		TileComponent,
		ReactiveFormsModule,
		AsyncPipe,
		RandomNextComponent,
		NgOptimizedImage,
	],
	templateUrl: `./list.component.html`,
	styleUrl: `./list.component.scss`,
})
export class ListComponent {
	private activatedRoute = inject(ActivatedRoute)
	private router = inject(Router)

	public searchInput = new FormControl(``)

	public nuggets$ = this.activatedRoute.data.pipe(map(({nuggets}) => nuggets as WebNugget[]))

	public constructor() {
		this.activatedRoute.queryParamMap.pipe(take(1)).subscribe((param) => {
			this.searchInput.setValue(param.get(searchParam))
		})

		this.searchInput.valueChanges.pipe(takeUntilDestroyed()).subscribe((searchTerm) => {
			// TODO notify screen reader of the result
			if (searchTerm !== null && searchTerm !== ``) {
				this.navigateWithSearchQueryParam(searchTerm)
			} else {
				this.navigateWithSearchQueryParam(null)
			}
		})
	}

	private navigateWithSearchQueryParam(searchTerm: string | null): void {
		this.router.navigate(
			[],
			{
				queryParams: {search: searchTerm},
				queryParamsHandling: `merge`,
			},
		).catch((error) => {
			console.error(error)
		})
	}
}
