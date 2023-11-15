import {
	Component, Input, OnInit,
} from '@angular/core'
import {
	WebNugget, emptyWebNuggets, webNuggets,
} from '../nuggets'

@Component({
	selector: `app-details`,
	standalone: true,
	imports: [],
	templateUrl: `./details.component.html`,
	styleUrl: `./details.component.scss`,
})
export class DetailsComponent implements OnInit {
	@Input() nuggetId!: string
	public nugget!: WebNugget

	public ngOnInit(): void {
		this.nugget = webNuggets().find((nugget) => nugget.id === this.nuggetId) ?? emptyWebNuggets()
	}
}
