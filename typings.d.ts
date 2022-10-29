interface ISanityBody {
	_createdAt: string
	_id: string
	_rev: string
	_updatedAt: string
}

interface ISanityImage {
	_type: 'image'
	asset: {
		_ref: string
		_type: 'reference'
	}
}

export interface IExperience extends ISanityBody {
	_type: 'experience'
	company: string
	companyImage: ISanityImage
	jobTitle: string
	technologies: ITechnology[]
	url: string
}

export interface IPageInfo extends ISanityBody {
	_type: 'pageInfo'
	address: string
	email: string
	heroImage: ISanityImage
	name: string
	profilePicture: ISanityImage
	role: string
}

export interface IProject extends ISanityBody {
	_type: 'project'
	image: ISanityImage
	summary: string
	technologies: ITechnology[]
	title: string
}

export interface ISkill extends ISanityBody {
	_type: 'skill'
	experience: ISkillExperience
	image: ISanityImage
	name: string
}

export interface ISkillExperience extends ISanityBody {
	_type: 'skillExperience'
	skillDescription: string
}

export interface ISocial extends ISanityBody {
	_type: 'social'
	title: string
	url: string
}