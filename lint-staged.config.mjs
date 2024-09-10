export default {
  '*.{mjs,js,json}': () => ['biome check'],
  '*.ts': () => ['tsc --noEmit', 'biome check'],
};
