type Tag = `book` | `article` | `video` | `tip`
type Topic = `web` | `gaming` | `softskills` | `angular` | `javascript`

export interface WebNugget {
	id: string
  // TODO add title
	content: string
	link: string
	tag: Tag[]
	topic: Topic[]
}

export const emptyWebNuggets: ()=> WebNugget = () => ({
	id: `empty`,
	content: `empty`,
	link: `empty`,
	tag: [],
	topic: [],
})

export const webNuggets: ()=> WebNugget[] = () => [
	{
		id: `maps`,
		content: `I love google maps`,
		link: `https://www.google.com/maps`,
		tag: [`book`],
		topic: [`web`],
	},
  {
		id: `beforeunload`,
		content: `TBD explain 'data can be lost' feature, angular guard deactivate can help but dont covers all cases. beforeunload allows to cover most cases (some exceptions with mobile) but the downside is the message can't be customised. Still, only 10 code lines to have this feature compared to handle it with a framework which couldn't cover all cases (external links need to be coverd without the guard and therefore nasty dom manual changes)`,
		link: `https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event#usage_notes`,
		tag: [`tip`],
		topic: [`web`, `angular`, `javascript`],
	},
	{
		id: `calendar`,
		content: `I love calendars`,
		link: `https://calendar.google.com/`,
		tag: [`article`],
		topic: [
			`web`,
			`gaming`,
		],
	},
]
