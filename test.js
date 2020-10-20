console.log(
	JSON.stringify(
		{
			type: "context",
			elements: [
				{
					type: "plain_text",
					text: `Fill in and submit the form during end-of-day debrief, leave fields blank as needed. Teachers can update responses later by using /debrief update`,
					emoji: true,
				},
			],
		},
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: `Hello, <@${body.user_id}>! ${introMessage}`,
			},
		},
		{
			type: "input",
			optional: true,
			block_id: "generalFeeling",
			element: {
				type: "plain_text_input",
				action_id: "generalFeelingInput",
				initial_value: messageInitial.generalFeelingInitial,
				placeholder: {
					type: "plain_text",
					text: "Note any tensions or the general mood of the batch",
				},
				multiline: true,
			},
			label: {
				type: "plain_text",
				text: "General feeling about the batch:",
				emoji: true,
			},
		},
		{
			type: "input",
			optional: true,
			block_id: "lecture",
			element: {
				type: "plain_text_input",
				action_id: "lectureInput",
				initial_value: messageInitial.lectureInitial,
				placeholder: {
					type: "plain_text",
					text: "How did you feel about them? How about your students' engagement and understanding?",
				},
				multiline: true,
			},
			label: {
				type: "plain_text",
				text: "Lecture & Livecode:",
				emoji: true,
			},
		},
		{
			type: "input",
			optional: true,
			block_id: "challenges",
			element: {
				type: "plain_text_input",
				action_id: "challengesInput",
				initial_value: messageInitial.challengesInitial,
				placeholder: {
					type: "plain_text",
					text: "Queue monitoring, recurring themes and/or difficulties",
				},
				multiline: true,
			},
			label: {
				type: "plain_text",
				text: "Challenges and Tickets:",
				emoji: true,
			},
		},
		{
			type: "input",
			optional: true,
			block_id: "students",
			element: {
				type: "plain_text_input",
				action_id: "studentsInput",
				initial_value: messageInitial.studentsInitial,
				placeholder: {
					type: "plain_text",
					text: "Spotting edge cases: really struggling, not following Le Wagon learning spirit (e.g. leaving buddy behind, isolating oneself, or refusing any help)",
				},
				multiline: true,
			},
			label: {
				type: "plain_text",
				text: "Students:",
				emoji: true,
			},
		},
		{
			type: "input",
			optional: true,
			block_id: "studentsById",
			element: {
				type: "multi_users_select",
				action_id: "studentsByIdInput",
				initial_users: messageInitial.studentsByIdInitial || [],
				placeholder: {
					type: "plain_text",
					text: "Select students",
					emoji: true,
				},
			},
			label: {
				type: "plain_text",
				text: "Students to Monitor:",
				emoji: true,
			},
		},
		{
			type: "input",
			optional: true,
			block_id: "takeaways",
			element: {
				type: "plain_text_input",
				action_id: "takeawaysInput",
				initial_value: messageInitial.takeawaysInitial,
				placeholder: {
					type: "plain_text",
					text: "What actionable advice do you have for next day's staff? (e.g. reiterate to create tickets if students are stuck for more than 15 minutes)",
				},
				multiline: true,
			},
			label: {
				type: "plain_text",
				text: "General takeaways:",
				emoji: true,
			},
		}
	)
)
