import type { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '../../../sanity';
import { groq } from 'next-sanity';

import { IProject } from '../../../typings';

const query = groq`*[_type == "project"] {
	...,
	technologies[]->,
}`;

type Data = {
  data: IProject[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const data: IProject[] = await sanityClient.fetch(query);

  res.status(200).json({ data });
}
