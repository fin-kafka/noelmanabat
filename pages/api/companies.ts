import { NextApiRequest, NextApiResponse } from 'next';
import db from './db';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    res.statusCode = 200;
    res.json(db.companyDetails);
  } catch (err) {
    res.statusCode = 500;
    res.json({ success: false, error: err });
  }
};
