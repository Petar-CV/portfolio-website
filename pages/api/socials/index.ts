import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../../sanity'
import { groq } from 'next-sanity'

import { ISocial } from '../../../typings'

const query = groq`*[_type == "social"]`

type Data = {
	socials: ISocial[]
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const socials: ISocial[] = await sanityClient.fetch(query)

	res.status(200).json({ socials })
}
