import type { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '../../../sanity';
import { groq } from 'next-sanity';

import { ISkillExperience } from '../../../typings';

const query = groq`*[_type == "experience"] {
	...,
	technologies[]->,
} | order(currentEmployer)`;

type Data = {
  data: ISkillExperience[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const data: ISkillExperience[] = await sanityClient.fetch(query);

  res.status(200).json({ data });
}
