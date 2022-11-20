export default {
	name: 'pageInfo',
	title: 'Page info',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string',
		},
		{
			name: 'role',
			title: 'Role',
			type: 'string',
		},
		{
			name: 'heroImage',
			title: 'Hero image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'typewriterWords',
			title: 'Words for typewriter effect',
			type: 'array',
			of: [
				{
					type: 'string',
				},
			],
		},
		{
			name: 'backgroundInformation',
			title: 'Background information',
			type: 'text',
		},
		{
			name: 'profilePicture',
			title: 'Profile picture',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'email',
			title: 'Email',
			type: 'string',
		},
		{
			name: 'address',
			title: 'Address',
			type: 'string',
		},
	],
}
