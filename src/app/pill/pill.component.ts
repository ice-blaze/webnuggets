import {AsyncPipe} from '@angular/common'
import {
	Component, Input,
	OnChanges,
	inject,
} from '@angular/core'
import {
	ActivatedRoute, RouterModule,
} from '@angular/router'
import {
	BehaviorSubject,
	combineLatest,
	map,
} from 'rxjs'

@Component({
	selector: `app-pill`,
	standalone: true,
	imports: [
		RouterModule,
		AsyncPipe,
	],
	templateUrl: `./pill.component.html`,
	styleUrl: `./pill.component.scss`,
})
export class PillComponent implements OnChanges {
	private readonly route = inject(ActivatedRoute)

	@Input()
	public text = ``

	private onChanges$ = new BehaviorSubject<void>(undefined)
	public ngOnChanges(): void {
		this.onChanges$.next()
	}

	public orangeBorder$ =
		combineLatest([
			this.route.queryParams,
			this.onChanges$,
		]).pipe(map(([params]) => {
			const searchParam = params[`search`] as string | undefined
			const orangeBorder = (searchParam)?.split(` `).includes(this.text)
			return orangeBorder ?? false
		}))
}
