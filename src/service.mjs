import fs from fs;
import path from path;

// Define the path to your projects directory


export function getProjectImages(projectsDir) {
  const projects = [];

  // Read the projects directory
  fs.readdirSync(projectsDir).forEach((projectFolder) => {
    const projectPath = path.join(projectsDir, projectFolder);

    if (fs.lstatSync(projectPath).isDirectory()) {
      const images = fs.readdirSync(projectPath)
        .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file)) // Filter for image files
        .map(file => path.join(projectPath, file));

      if (images.length > 0) {
        projects.push({
          id: projectFolder,
          mainImage: images[0], // Pick the first image as the main image
          images
        });
      }
    }
  });

  return projects;
}

