import type { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '../../../sanity';
import { groq } from 'next-sanity';

import { IExperience } from '../../../typings';

const query = groq`*[_type == "skillExperience"]`;

type Data = {
  data: IExperience[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const data: IExperience[] = await sanityClient.fetch(query);

  res.status(200).json({ data });
}
