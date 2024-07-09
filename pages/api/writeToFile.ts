import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const now = new Date();
  const time = `${now.getHours().toString().padStart(2, '0')}${now.getMinutes().toString().padStart(2, '0')}${now.getSeconds().toString().padStart(2, '0')}`;

  const machineID = 'v'; 
  const sawLocation = '1'; 
  const reason = 'snaking';

  // Using template literals
  const message = `${machineID}${sawLocation}_${reason}`;
  const fileName = `${time}`

  // Define the path to the file
  const filePath = path.join('transfer', `${fileName}.txt`);

  fs.writeFile(filePath, message, (err) => {
    if (err) {
      res.status(500).json({ message: `Error: ${err}` });
    } else {
      res.status(200).json({ message: 'Successfully wrote to file!' });
    }
  });
}
