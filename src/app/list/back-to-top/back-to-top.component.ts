import {
	Component, DoCheck,
} from '@angular/core'

@Component({
	selector: `app-back-to-top`,
	standalone: true,
	imports: [],
	templateUrl: `./back-to-top.component.html`,
	styleUrl: `./back-to-top.component.scss`,
})
export class BackToTopComponent implements DoCheck {
	public scrollExist = false

	public ngDoCheck() {
		this.scrollExist = document.body.scrollHeight > window.innerHeight
	}

	public backToTop(): void {
		scroll(
			0,
			0,
		)
	}
}
