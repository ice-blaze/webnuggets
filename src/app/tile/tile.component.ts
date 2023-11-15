import {
	Component, Input,
} from '@angular/core'
import {WebNugget} from '../nuggets'
import {RouterModule} from '@angular/router'

@Component({
	selector: `app-tile`,
	standalone: true,
	imports: [RouterModule],
	templateUrl: `./tile.component.html`,
	styleUrl: `./tile.component.scss`,
})
export class TileComponent {
	@Input({required: true})
		nugget!: WebNugget
}
