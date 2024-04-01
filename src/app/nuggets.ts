export type Format = `book` | `article` | `video` | `tip` | `podcast`
export type Topic = `web` | `gaming` | `softskills` | `angular` | `javascript`

export const IconConverter: Record<Format, string> = {
	book: `menu_book`,
	article: `article`,
	video: `videocam`,
	tip: `lightbulb`,
	podcast: `mic`,
}

export interface WebNugget {
	id: string
	title: string
	content: string
	link: string
	format: Format
	topics: Topic[]
}

export const emptyWebNuggets: ()=> WebNugget = () => ({
	id: `empty`,
	title: `empty`,
	content: `empty`,
	link: `empty`,
	format: `book`,
	topics: [],
})

export const webNuggets: ()=> WebNugget[] = () => [
	{
		id: `maps`,
		title: `Google maps`,
		content: `I love google maps`,
		link: `https://www.google.com/maps`,
		format: `book`,
		topics: [`web`],
	},
	{
		id: `beforeunload`,
		title: `Dialog before leaving page and lose data`,
		content: `
		TBD explain 'data can be lost' feature,
		angular guard deactivate can help but dont covers
		all cases. beforeunload allows to cover most cases
		(some exceptions with mobile) but the downside is the
		message can't be customised. Still, only 10 code lines
		to have this feature compared to handle it with a framework
		which couldn't cover all cases (external links need to be coverd without
			the guard and therefore nasty dom manual changes)
		`,
		link: `https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event`,
		format: `tip`,
		topics: [
			`web`,
			`angular`,
			`javascript`,
		],
	},
	{
		id: `githubpagesrouting`,
		title: `GitHub pages angular redirection`,
		content: `
		TBD explain 'data can be lost' feature,
		angular guard deactivate can help but dont covers
		all cases. beforeunload allows to cover most cases
		(some exceptions with mobile) but the downside is the
		message can't be customised. Still, only 10 code lines
		to have this feature compared to handle it with a framework
		which couldn't cover all cases (external links need to be coverd without
			the guard and therefore nasty dom manual changes)
		`,
		link: `https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event`,
		format: `tip`,
		topics: [
			`web`,
			`javascript`,
			`angular`,
		],
	},
	{
		id: `calendar`,
		title: `Google Calendar`,
		content: `I love calendars`,
		link: `https://calendar.google.com/`,
		format: `article`,
		topics: [`gaming`],
	},
	{
		id: `calendar2`,
		title: `Google Calendar super long title super long title super long title`,
		content: `I love calendars`,
		link: `https://calendar.google.com/`,
		format: `article`,
		topics: [`gaming`],
	},
]
