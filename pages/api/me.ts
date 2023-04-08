import { NextApiRequest, NextApiResponse } from 'next';
import db from './db';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  try {
    res.json(db.personalDetails);
  } catch (err) {
    res.statusCode = 500;
    res.json({ success: false, error: err });
  }
};
