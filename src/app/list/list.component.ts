import {Component} from '@angular/core'
import {webNuggets} from '../nuggets'
import {TileComponent} from '../tile/tile.component'

@Component({
	selector: `app-list`,
	standalone: true,
	imports: [TileComponent],
	templateUrl: `./list.component.html`,
	styleUrl: `./list.component.scss`,
})
export class ListComponent {
	public nuggets = webNuggets()
}
