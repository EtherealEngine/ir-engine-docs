---
title: Optimize assets for performance
description: Optimize your assets to increase performance
---

Learn to optimize your assets to use within your iR Engine projects and ensure high performance for your creations across devices.

## General guidelines

Because the iR Engine is a WebXR platform that works on a wide range of devices, from high-end PCs to mobile phones, you must optimize your assets similarly to how you would for a mobile game. These guidelines include information about pre-import optimization and optimization within the engine.

## Pre-import optimization

The optimization process starts *before* you bring your assets into the iR Engine. Here's how to optimize your 3D models for the best performance:

### Minimize vertex count

Reducing the vertex count is crucial for performance.

- **Aim for a low polygon count**: Although our engine can handle higher polygon limits, an asset shouldn't exceed 200,000 polygons, and you should consider the total polycount of your scene after adding all your assets.
- **Use decimation tools**: Reduce the number of polygons in your mesh without sacrificing visual quality.
- **Maintain a uniform topology**: Ensure a consistent mesh structure for better in-engine decimation.

### Minimize material count

Reuse and share materials whenever possible.

- **Limit materials**: Ideally, an asset should have just one material per blend model; For example, one for opaque objects and one for transparent objects.

### Minimize texture count

Combining multiple textures helps reduce the overall texture count.

- **Use trim sheets**: Consolidate textures to optimize your models.
  - **Blender tutorial**: [Trim sheet tutorial](https://www.youtube.com/watch?v=1M-GNe_pB9M)
  - **Substance Painter tutorial**: [Trim sheet tutorial](https://m.youtube.com/watch?v=QoVWM-IKmFw)

### Additional tips

Further steps you can take to optimize your models include:

- **Combine meshes**: Merge meshes that share the same material.
- **Instance repeating geometry**: Reuse geometry to reduce the number of unique meshes.

## In-engine optimization

Once imported, IR Engine provides further tools to optimize your assets for web delivery. This optimization pipeline leverages the [GLTF Transform NodeJS package](https://gltf-transform.dev/).

**The engine performs various actions, including**:

- **Compressing images**: Convert images to KTX2 format.
- **Running mesh compression**: Use Meshoptimizer and DRACO for efficient mesh compression.
- **Deduplicating materials**: Eliminate duplicate materials to streamline the asset.
- **Merging meshes**: Combine multiple meshes into a single entity.
- **Performing additional decimation**: Further reduce mesh complexity if needed.

The resulting GLTF file is fully optimized and ready for use in your IR Engine project. Here are the three ways to optimize assets within the engine:

### Model transform panel (recommended)

This is the preferred method for in-engine optimization.

**Here's how to use it**:

1. **Open a scene**: Open any scene in the studio.
2. **Add your asset to your scene**: Drag and drop your model file into the scene from the **File Browser** or **Assets Panel**.
3. **Select your model in the Hierarchy**: Ensure you select your entity in the **Hierarchy** and find the **Model component** in the **Properties** panel.
4. **Open Model Transform options**: Expand the **Model** component and find **Model Transform**. Select this option to view its compression settings.
5. **Optimize the model**: Adjust your compression settings and click the **Optimize** button when finished. This creates a new, optimized model file with the -transformed suffix. Use this optimized file instead of the original.

### Compression panel

This panel offers a more advanced interface for compression.

**Here's a step-by-step guide**:

1. **Locate the model file**: Find the model file you want to compress in the **File Browser**.
2. **Open the compression panel**: Right-click the file and select **Compress** to open the compression panel.
3. **Optimize the file**: After adjusting your compression settings, click "**Optimize**" to complete the process.
4. **Use the optimized file**: Use the new file instead of the original, which includes new files and an LOD prefab with the integrated-prefab suffix.

### LOD on import

You can also configure IR Engine to generate LODs for every imported .gltf asset automatically. Enable and adjust this option within the **Import Settings** option inside the hamburger menu (**☰**) on the top left corner of the Studio.
