import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = './public';
const files = fs.readdirSync(dir);

async function convert() {
    for (const file of files) {
        if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
            const p = path.join(dir, file);
            const parsed = path.parse(p);
            const outPath = path.join(dir, `${parsed.name}.webp`);
            try {
                await sharp(p).webp({ quality: 80 }).toFile(outPath);
                console.log(`Converted ${file} to ${parsed.name}.webp`);
            } catch (e) {
                console.error(`Failed to convert ${file}:`, e);
            }
        }
    }
}

convert();
