import {
	Component, Input,
} from '@angular/core'
import {
	IconConverter, WebNugget,
} from '../nuggets'
import {RouterModule} from '@angular/router'
import {PillComponent} from '../pill/pill.component'
import {MatIconModule} from '@angular/material/icon'

@Component({
	selector: `app-tile`,
	standalone: true,
	imports: [
		RouterModule,
		MatIconModule,
		PillComponent,
	],
	templateUrl: `./tile.component.html`,
	styleUrl: `./tile.component.scss`,
})
export class TileComponent {
	public readonly IconConverter = IconConverter
	@Input({required: true})
		nugget!: WebNugget
}
