import {
	Component, Input,
} from '@angular/core'
import {WebNugget} from '../nuggets'
import {MatIconModule} from '@angular/material/icon'

@Component({
	selector: `app-jump-to-link`,
	standalone: true,
	imports: [MatIconModule],
	templateUrl: `./jump-to-link.component.html`,
	styleUrl: `./jump-to-link.component.scss`,
})
export class JumpToLinkComponent {
	@Input({required: true})
	public nugget!: WebNugget
}
