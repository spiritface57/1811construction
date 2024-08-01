import { readdirSync } from 'fs';
import { resolve } from 'path';

export default async (req, res) => {
  const directoryPath = resolve('../src/assets/img/projects');

  try {
    const files = readdirSync(directoryPath, { withFileTypes: true });
    const folders = files.filter(dirent => dirent.isDirectory()).map(dirent => dirent.name);
    
    res.status(200).json(folders);
  } catch (error) {
    res.status(500).json({ error: 'Unable to scan directory' });
  }
};
