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
			name: 'backgroundInformation',
			title: 'Background information',
			type: 'string',
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
		{
			name: 'socials',
			title: 'Socials',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'social' }],
				},
			],
		},
	],
}
