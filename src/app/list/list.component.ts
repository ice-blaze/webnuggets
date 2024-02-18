import {Component} from '@angular/core'
import {
	Format, Topic, webNuggets,
} from '../nuggets'
import {TileComponent} from '../tile/tile.component'

@Component({
	selector: `app-list`,
	standalone: true,
	imports: [TileComponent],
	templateUrl: `./list.component.html`,
	styleUrl: `./list.component.scss`,
})
export class ListComponent {
	public nuggets = [
		...webNuggets(),
		...(Array.from(Array(30).keys()).map(() => (
			{
				id: `calendar`,
				title: `Google Calendar`,
				content: `I love calendars`,
				link: `https://calendar.google.com/`,
				format: `article` as Format,
				topics: [
					`web`,
					`gaming`,
				] as Topic[],
			}))),
	]
}
