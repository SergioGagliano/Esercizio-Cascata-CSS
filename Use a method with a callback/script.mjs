import { writeFile } from 'node:fs';

writeFile("message.txt", "Hello", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("File scritto correttamente.");
  }
});
