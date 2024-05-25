import {
	Injectable, inject,
} from '@angular/core'
import {
	EventType, Router,
} from '@angular/router'
import {Location} from "@angular/common"

@Injectable({providedIn: `root`})
export class NavigationBackService {
	private readonly router = inject(Router)
	private readonly location = inject(Location)

	private lastUrls: string[] = []
	private homeUrl = `/`

	private push(value: string): void {
		this.lastUrls.push(value)
		if (this.lastUrls.length > 2) {
			this.lastUrls.shift()
		}
	}

	private lastUrl(): string {
		if (this.lastUrls.length === 2) {
			return this.lastUrls[0]
		} else {
			return ``
		}
	}

	public constructor() {
		this.router.events.subscribe((route) => {
			if (route.type === EventType.NavigationEnd) {
				const buildFakeUrl = new URL(`http://random.com${route.url}`)
				this.push(buildFakeUrl.pathname)
			}
		})
	}

	public back(): void {
		if (this.lastUrl() === this.homeUrl) {
			this.location.back()
		} else {
			void this.router.navigate([this.homeUrl])
		}
	}
}
