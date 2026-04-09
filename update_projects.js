import fs from 'fs';
const file = './src/components/ProjectsSection.tsx';
let data = fs.readFileSync(file, 'utf8');

// Replace images:
// Note: handle possible trailing spaces like " Caritas Galle .png "
data = data.replace(/\.(png|jpg|jpeg)(\s*["'])/gi, '.webp$2');

// Add active pseudo-classes to emulate hover on mobile touch
data = data.replace(/group-hover:scale-110/g, 'group-hover:scale-110 active:scale-110 group-active:scale-110');
data = data.replace(/group-hover:opacity-100/g, 'group-hover:opacity-100 active:opacity-100 group-active:opacity-100');
data = data.replace(/group-hover:text-\[#A855F7\]/g, 'group-hover:text-[#A855F7] active:text-[#A855F7] group-active:text-[#A855F7]');
data = data.replace(/group-hover:scale-x-100/g, 'group-hover:scale-x-100 active:scale-x-100 group-active:scale-x-100');

fs.writeFileSync(file, data);
console.log('Project section updated successfully');
