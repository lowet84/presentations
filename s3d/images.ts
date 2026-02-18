import * as fs from "node:fs";
import * as path from "node:path";

const images: Record<string, string> = {}

const download = async () => {
  for (const img of Object.entries(images)) {
    const imgPath = path.join("public", img[0]+".png")
    if (!fs.existsSync(imgPath)) {
      const response = await fetch(img[1])
      if (!response.ok) throw new Error(`Unexpected response ${response.statusText}`);
      if (!response.body) throw new Error('Response body is null');

      const arrayBuffer = await response.arrayBuffer();

      // Convert to Buffer (Node.js specific)
      const buffer = Buffer.from(arrayBuffer);

      // Write directly to disk
      fs.writeFileSync(imgPath, buffer);

      console.log(`✅ Image saved to ${imgPath}`);
    }
  }
}

download().then()
