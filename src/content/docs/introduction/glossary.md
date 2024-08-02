---
title: Glossary
description: Key terminology used accross the iR Engine
---

Welcome to the iR Engine Glossary. This document provides clear definitions of terms and concepts used across the iR Engine. Use this glossary as a reference to fully leverage the capabilities of the engine in your projects.

---

## A-C

---

### Asset

A digital resource used within the iR Engine, such as models, textures, sounds, animations, and scripts. Assets are the building blocks for creating virtual environments and interactive elements in the iR Engine.

### Camera masks

Tools that allow developers to control which parts of a scene are visible to the camera. By selectively rendering or hiding elements based on the camera's perspective in the iR Engine.

### Cinematic content

Visual content designed to tell a story using high-quality scenes, lighting, and advanced composing techniques to create a polished and immersive experience within the iR Engine.

### Console

The console is a web-based interface used to manage projects, users, settings, and deployments within the iR Engine. It provides tools for configuring, monitoring, and administering virtual environments and assets.

## D-F

---

### Depth of field

An effect used in the iR Engine that enhances visual realism by simulating the way cameras focus on objects at different distances. Objects in focus appear sharp, while those in the background or foreground are blurred, creating a sense of depth in the scene.

### E-commerce

A feature in the iR Engine that enables the creation and management of virtual marketplaces. E-commerce functionalities allow users to buy, sell, and trade digital goods and services within virtual environments, enhancing the commercial capabilities of virtual worlds.

### ECS component (or component)

A piece of data linked to an entity, such as position, physics, or visual appearance, within the iR Engine's ECS architecture. Components store the state and data of entities, enabling systems to process them independently. An entity can be comprised of several components.

### ECS entity (or entity)

A unique identifier representing an object or element within the engine. Entities act as containers for components, and their components determine their behavior. Entities can represent characters, items, or any interactive element in the virtual world.

### ECS system (or system)

Logic functions within the iR Engine that operate on entities and their components, driving the behavior of the virtual world. Systems process the data in components to perform actions such as movement, rendering, and interaction.

### Entity component system (ECS)

The iR Engine employs this core architectural pattern to separate data from logic, enhancing flexibility and performance. Data is stored in components, while systems handle the logic, making it easier to manage complex behaviors and optimize performance.

### Skybox

A 360-degree texture representing a scene's surroundings. Skyboxes provide a way to simulate the effects of being in a certain environment within a scene.

### Environment map (env map)

Use a texture map, color, skybox, or light probe to simulate the effect the surrounding environment might have on the surface of objects.

### Frustum culling

A performance optimization technique that involves rendering only the objects within the camera's field of view. Objects outside this view are ignored, saving computational resources in the engine and improving rendering efficiency.

## G-L

---

### GLB (Graphics Library Binary)

The binary version of glTF, offering more compact file sizes and faster loading times. GLB files are optimized for performance and ease of use in 3D applications and the iR Engine.

### glTF (Graphics Library Transmission Format)

A standard file format for 3D models and scenes that includes textures, geometry, animations, and more, making it versatile for use within the iR Engine. glTF files facilitate the efficient transmission and loading of 3D assets.

### GPU path tracers

A rendering technique that uses the GPU to simulate the paths of light rays as they travel through a scene. The engine uses this method to produce highly realistic images with advanced lighting, shadows, and reflections by accurately modeling how light interacts with objects.

### Grabbables

Grabbables are interactive objects that users can pick up, manipulate, or use within a virtual environment created with the iR Engine. They enhance user interaction and immersion in virtual worlds.

### Hierarchy

The organizational structure of entities and components within a scene in the iR Engine. Hierarchies define parent-child relationships, where parent entities can have multiple child entities, helping manage complex scenes and interactions.

### Kits

Curated collections of assets within the iR Engine that feature a unified aesthetic for rapid scene creation. Kits provide pre-configured elements that help developers quickly build cohesive and visually appealing environments.

### Lightmap

Lightmaps are pre-calculated textures that store lighting information for a scene, optimizing real-time rendering in the iR Engine. They help achieve high-quality lighting effects without the computational cost of dynamic lighting.

### Locations (or spaces)

Named, published scenes within the iR Engine that host live, networked sessions where users interact in virtual worlds. Locations serve as predefined environments where users can gather, collaborate, and explore.

### LOD: Level of detail

A method used by the iR Engine to manage the complexity of 3D models based on their distance from the camera. Objects far from the camera are rendered with less detail to improve performance, while closer objects remain highly detailed.

## M-P

---

### Materials

Properties applied to 3D models in the iR Engine that define their appearance, including color, roughness, reflectivity(metalness), and transparency. Materials use shaders to simulate how surfaces interact with light, contributing to the realism of the scene.

### Mocap (motion capture)

The process of recording movement data from real-world performers to animate characters in the iR Engine. Mocap data captures the nuances of human motion, bringing lifelike animations to digital characters.

### Mount points

Predefined attachment points on objects that allow other entities, such as avatars, to seamlessly attach in the iR Engine to the predefined object object (e.g., sitting in a chair). Mount points facilitate interactions and animations involving multiple objects.

### Motion blur

An effect that simulates the blurring of moving objects, adding a sense of speed and motion. The iR Engine uses motion blur to make animations appear smoother and more dynamic.

### No-code

An approach to content creation within the iR Engine that minimizes the need for programming. It relies on templates, visual tools, and AI assistance, making our engine more accessible to non-technical users while accelerating the development process.

### Performance capture

The process of recording an individual’s movements and facial expressions to create realistic animations for digital characters. Performance capture integrates both body and facial movements to achieve highly detailed and expressive animations.

### Physically Based Rendering (PBR)Da

PBR is a method of rendering that makes materials appear realistic by accurately simulating how light interacts with them. It ensures that materials in the iR Engine appear accurately under different lighting conditions while enhancing visual fidelity.

### Physics engines

Software components integrated into the iR Engine that simulate physical systems, including collision detection, gravity, and other forces. Physics engines create realistic interactions and movements in 3D environments, making virtual objects behave like they would in the real world.

### Prefabs

Pre-built objects or scenes that can be easily reused within the iR Engine, streamlining the creation process. Prefabs help content authors maintain consistency and efficiency when building complex virtual environments.

### Project

A collection of assets, scenes, and potentially custom code that extends the functionality of the iR Engine. Projects organize and manage all elements of a development effort, enabling collaborative work and version control.

## S-V

---

### Scene

Scenes are a hierarchical arrangement of entities and components representing a specific environment or level within the iR Engine. They define the layout, appearance, and interactions within a virtual space.

### Shaders

Shaders are programs that run on the graphics processing unit (GPU) to determine how materials and surfaces appear in the iR Engine. They also control the rendering of visual effects such as lighting, shadows, and textures.

### Shadow map

Shadow maps are pre-calculated textures that store shadow information for a scene, enhancing rendering efficiency in the iR Engine. They enable realistic shadow casting without the computational expense of real-time calculations.

### Snapping

Snapping is a feature that helps users align objects precisely within the iR Engine, ensuring seamless connections between elements. It aids in the accurate placement and adjustment of objects during scene creation.

### Spatial Data

Data that includes position, rotation, and size information, defining an object's location and orientation in 3D space within the iR Engine. Spatial data is crucial for accurately positioning and interacting with objects in a virtual environment.

### Spatial Environment

The virtual space within which objects (entities) exist and interact with each other. Objects in space have spatial data that might determine their location, orientation, or scale within the space.

### SSGI: Screen space global illumination

A technique the engine uses to simulate the way light bounces off surfaces within a scene, using the existing screen data to calculate indirect lighting in real-time. This results in more natural and dynamic lighting effects.

### SSR: Screen space reflections

A technique for creating realistic reflections on surfaces using the data already present in the current screen view. It allows for dynamic reflections and enhances the visual quality of the iR Engine without the need for additional complex calculations.

### Studio

The engine’s 3D editor. Use the Studio to create, edit, and publish scenes on the web. The Studio provides tools for asset management, scene composition, and real-time preview and modification, enabling efficient development workflows.

### UI (User Interface)

Visual elements and controls that allow users to interact with the iR Engine. The UI encompasses buttons, menus, panels, and other interactive components that facilitate a user’s navigation and control of the interface while providing the means to input data and make changes.

### UX (User Experience)

The overall experience and satisfaction a user has when interacting with the iR Engine. UX design focuses on usability, accessibility, and overall engagement to ensure a positive, effective, and productive user interaction.

### Variants

A mechanism that dynamically switches between different versions of an asset based on factors like device performance or user settings, balancing visual quality and performance in the iR Engine.

### Vertex Animation Texture (VAT)

A technique that stores vertex animation data in textures, allowing the GPU to efficiently animate complex models. VAT reduces CPU load and improves performance for detailed animations.

### Viewport

The Viewport is the area within the Studio where users view and interact with the 3D scene they are building. It provides a real-time representation of the scene, allowing for adjustments and refinements during the world-building process.

### Vulkan

A cross-platform graphics industry standard developed by Khronos Group. It is designed for high-performance rendering that enables developers to target a wide range of devices with the same graphics API. The iR Engine supports Vulkan for better optimization and rendering.

## W-Z

---

### WebGL

WebGL is a JavaScript API that allows 3D graphics to be rendered directly in web browsers without the need for additional plugins. The iR Engine uses WebGL for interactive 3D content on websites, enabling broad accessibility and integration.

### WebGPU

WebGPU is a modern graphics API supported by the engine that provides high-performance 3D graphics capabilities in web browsers. It allows developers to create complex and visually rich web applications that can leverage the power of the GPU for advanced rendering.

### WebXR

WebXR is an API that enables virtual reality (VR) and augmented reality (AR) experiences in web browsers. The iR Engine uses WebXR to make immersive 3D content easily accessible via a web browser.

### Wizard

A guided, step-by-step tool within the iR Engine that helps users quickly create customized scenes without technical expertise. Wizards simplify complex tasks, making it easier for users to achieve desired results efficiently.

### World

Another term for a location or space within the iR Engine. Worlds are virtual environments where users can explore, interact, and experience.
