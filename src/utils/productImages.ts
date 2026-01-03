import type { ImageMetadata } from 'astro';

const imageModules = import.meta.glob('../assets/products/*.{jpg,png}', { eager: true });

const productImageMap = new Map<string, ImageMetadata>();

for (const [path, module] of Object.entries(imageModules)) {
  const fileName = path.split('/').pop();
  if (!fileName) continue;
  productImageMap.set(fileName, (module as { default: ImageMetadata }).default);
}

const getProductImage = (fileName: string) => productImageMap.get(fileName);

export { getProductImage };
