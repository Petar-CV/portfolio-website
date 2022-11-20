import type { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '../../../sanity';
import { groq } from 'next-sanity';

import { IPageInfo } from '../../../typings';

const query = groq`*[_type == "pageInfo"][0]`;

type Data = {
  data: IPageInfo;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const data: IPageInfo = await sanityClient.fetch(query);

  res.status(200).json({ data });
}
