export default {
	name: 'experience',
	title: 'Experience',
	type: 'document',
	fields: [
		{
			name: 'jobTitle',
			title: 'Job title',
			type: 'string',
		},
		{
			name: 'companyImage',
			title: 'Company image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'company',
			title: 'Company',
			type: 'text',
		},
		{
			name: 'url',
			title: 'URL',
			type: 'url',
		},
		{
			name: 'dateStarted',
			title: 'Date started',
			type: 'date',
		},
		{
			name: 'dateEnded',
			title: 'Date ended',
			type: 'date',
		},
		{
			name: 'currentEmployer',
			title: 'Current employer?',
			type: 'boolean',
		},
		{
			name: 'technologies',
			title: 'Technologies used',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'skill' }],
				},
			],
		},
		{
			name: 'skillsAcquired',
			title: 'Main skills acquired',
			type: 'array',
			of: [
				{
					type: 'string',
				},
			],
		},
	],
}
