import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../../sanity'
import { groq } from 'next-sanity'

import { ISkill } from '../../../typings'

const query = groq`*[_type == "skill"]`

type Data = {
	data: ISkill[]
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const data: ISkill[] = await sanityClient.fetch(query)

	res.status(200).json({ data })
}
