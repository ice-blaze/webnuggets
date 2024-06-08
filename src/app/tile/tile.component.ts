import {
	Component, Input,
} from '@angular/core'
import {
	IconConverter, WebNugget,
} from '../nuggets'
import {RouterModule} from '@angular/router'
import {PillComponent} from '../pill/pill.component'
import {MatIconModule} from '@angular/material/icon'
import {RandomBackgroundColorDirective} from './random-background-color.directive'

@Component({
	selector: `app-tile`,
	standalone: true,
	imports: [
		RouterModule,
		MatIconModule,
		PillComponent,
		RandomBackgroundColorDirective,
	],
	templateUrl: `./tile.component.html`,
	styleUrl: `./tile.component.scss`,
})
export class TileComponent {
	public readonly IconConverter = IconConverter
	@Input({required: true})
	public nugget!: WebNugget
}
