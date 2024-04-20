import {
	WebNugget, webNuggets,
} from "./nuggets"

function removeOneElementOfAnArray(
	arr: WebNugget[], index: number,
): WebNugget[] {
	return [
		...arr.splice(
			0,
			index,
		),
		...arr.splice(
			index + 1,
			arr.length,
		),
	]
}

describe(
	`Nuggets`,
	() => {
		function containsDuplicatedId(array: WebNugget[]): boolean {
			return array.some((
				nugget, index,
			) => removeOneElementOfAnArray(
				array,
				index,
			).find((nugget2) => nugget2.id === nugget.id))
		}

		it(
			`should not have any duplicated id`,
			() => {
				const nuggets = webNuggets()
				const containsDuplicates = containsDuplicatedId(nuggets)
				expect(containsDuplicates).toBe(false)
			},
		)

		it(
			`should fail when adding two same elements`,
			() => {
				const nuggets = [
					...webNuggets(),
					webNuggets()[0],
				]
				const containsDuplicates = containsDuplicatedId(nuggets)
				expect(containsDuplicates).toBe(true)
			},
		)

		describe(
			`topics`,
			() => {
				it(
					`should fail when there are nuggets with more than 3 topics`,
					() => {
						const nuggets = webNuggets()

						const moreThan3 = (nugget: WebNugget) => nugget.topics.length > 3
						const containsTooManyTopics = nuggets.some(moreThan3)
						if (containsTooManyTopics) {
							const failingNugget = nuggets.find(moreThan3)
							console.error(`This nugget has too many topics: ${failingNugget?.id}`)
						}
						expect(containsTooManyTopics).toBe(false)
					},
				)

				it(
					`should fail when there are duplicated topics`,
					() => {
						const nuggets = webNuggets()

						const duplicatedTopics =
							(nugget: WebNugget) => nugget.topics.length !== new Set(nugget.topics).size
						const containsDuplicatedTopics = nuggets.some(duplicatedTopics)
						if (containsDuplicatedTopics) {
							const failingNugget = nuggets.find(duplicatedTopics)
							console.error(`This nugget has too many topics: ${failingNugget?.id}`)
						}
						expect(containsDuplicatedTopics).toBe(false)
					},
				)
			},
		)
	},
)
