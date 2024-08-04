---
title: Scene resource guidelines
description: Best practices to ensure smooth scene performance across all devices.
---

Learn crucial guidelines for managing polygons, textures, and instancing to ensure smooth performance of your scenes across all devices.

## Polygon management

Polygons are the building blocks of 3D models, and their count directly impacts performance. Manage them effectively in your scene to balance detail and efficiency.

### Total polygon count

Keep your scene’s total polygon count *below 2,000,000 triangles* to balance visual quality and performance. This is especially important for scenes created outside the Studio.

### Hero assets

Reserve higher polygon counts for hero assets, which are visually prominent elements in your scene. Keep these assets *under 300MB* to avoid performance bottlenecks.

## Texture management

Efficient texture management is vital for maintaining visual quality without compromising performance.

### Total texture size for scenes

Limit the total texture size of your scenes to less than 50 MB to minimize load times and optimize resource use.

### Texture resolution

Choose texture resolutions based on target devices:

- **Mobile devices:** Use 2K resolution for diffuse maps and 1K for other textures.
- **Desktops:** Use textures up to 4096 x 4096 pixels for high-quality visuals.

### Texture compression

Utilize the iR Engine's [compression pipeline](link) to convert images to KTX2 format, reducing file sizes while maintaining image quality.

## Mesh instancing

Mesh instancing allows multiple instances of the same object to share geometry data, reducing memory usage and draw calls.

### Instancing in iR Engine

The iR Engine supports mesh instancing via the glTF GPU instancing extension. Use instancing for repeatable objects to improve performance.

:::tip[Learn to optimize your assets]

For more on asset optimization techniques, refer to the [Optimize assets for performance](/scene-development/working-with-assets/optimize-assets-for-performance) guide.

:::
