import {
	Directive, ElementRef, inject,
} from '@angular/core'

@Directive({
	standalone: true,
	selector: `[appRandomBackgroundColor]`,
})
export class RandomBackgroundColorDirective {
	private el = inject(ElementRef)

	private readonly colorList = [
		`#ffe800`, // yellow
		`#008cff`, // blue
		`#2beeff`, // cyan
		`#ff2020`, // red
		`#4ddd4d`, // green
		`#ffc500`, // mustard
	]

	private static availableColorList: string[] = []

	// Improvement: have a last color used variable. And each time you regenerate the availableColor
	// you remove the last used color. This will avoid the case where two same colors are used in a row.
	// It's not implemented because it's a rare case and would add complexity to this code
	private repopulateAvailableColorListIfEmpty(): void {
		if (RandomBackgroundColorDirective.availableColorList.length === 0) {
			RandomBackgroundColorDirective.availableColorList = this.colorList.
				map((value) => ({
					value: value,
					sort: Math.random(),
				})).
				sort((
					a, b,
				) => a.sort - b.sort).
				map(({value}) => value)
		}
	}

	private getRandomColor(): string {
		this.repopulateAvailableColorListIfEmpty()

		return RandomBackgroundColorDirective.availableColorList.pop() ?? this.colorList[0]
	}

	constructor() {
		(this.el.nativeElement as HTMLElement).style.backgroundColor = this.getRandomColor()
	}
}
