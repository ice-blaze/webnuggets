import {
	Component, Input, OnDestroy, OnInit, inject,
} from '@angular/core'
import {
	IconConverter,
	WebNugget,
	emptyWebNuggets,
	webNuggets,
} from '../nuggets'
import {TileComponent} from '../tile/tile.component'
import {TitleComponent} from '../title/title.component'
import {MatIconModule} from '@angular/material/icon'
import {PillComponent} from '../pill/pill.component'
import {RandomNextComponent} from '../random-next/random-next.component'
import {
	ActivatedRouteSnapshot,
	NavigationEnd,
	Router, RouterModule,
} from '@angular/router'
import {takeUntilDestroyed} from '@angular/core/rxjs-interop'
import {JumpToLinkComponent} from '../jump-to-link/jump-to-link.component'
import {NavigationBackService} from '../navigation-back.service'

@Component({
	selector: `app-details`,
	standalone: true,
	imports: [
		TileComponent,
		TitleComponent,
		MatIconModule,
		PillComponent,
		JumpToLinkComponent,
		RandomNextComponent,
		RouterModule,
	],
	templateUrl: `./details.component.html`,
	styleUrl: `./details.component.scss`,
})
export class DetailsComponent implements OnInit, OnDestroy {
	@Input() nuggetId!: string
	public nugget!: WebNugget
	public readonly IconConverter = IconConverter
	private readonly router = inject(Router)
	private readonly navigationBackService = inject(NavigationBackService)

	// eslint-disable-next-line no-unused-vars
	private oldRouteStrategy: (future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot)=> boolean
	public constructor() {
		// TODO should find an alternative
		// eslint-disable-next-line @typescript-eslint/unbound-method
		this.oldRouteStrategy = this.router.routeReuseStrategy.shouldReuseRoute
		this.router.routeReuseStrategy.shouldReuseRoute = () => {
			return false
		}

		this.router.events.pipe(takeUntilDestroyed()).subscribe((evt) => {
			if (evt instanceof NavigationEnd) {
				this.router.navigated = false
			}
		})
	}

	public ngOnDestroy(): void {
		this.router.routeReuseStrategy.shouldReuseRoute = this.oldRouteStrategy
	}

	public ngOnInit(): void {
		this.nugget = webNuggets().find((nugget) => nugget.id === this.nuggetId) ?? emptyWebNuggets()
	}

	public back(): void {
		this.navigationBackService.back()
	}
}
