# 预习

- [webglbook](https://github.com/tparisi/webglbook)
- [three.js](https://github.com/mrdoob/three.js)
- [openclipart](http://www.openclipart.org/)
- [godotengine](https://godotengine.org/)
- [voxel-engine](https://github.com/maxogden/voxel-engine)
- [Three.js入门指南：张雯莉](https://read.douban.com/reader/ebook/7412854/)
- [Three.js 基础入门：郑世强](https://gitbook.cn/gitchat/column/5b320521bebc3c4bd7e72436#catalog)
- [source code](https://github.com/Ovilia/ThreeExample.js)

>[source-han-serif](https://github.com/adobe-fonts/source-han-serif/tree/release/)
>[facetype字体转换](https://gero3.github.io/facetype.js/)

OpenGL ES Embedded Systems
WebGL无缝整合到页面，本身只是一个元素

3D坐标系
x、y、z

Mesh网格
一个或多个多边形组成的物体

3D网格叫做model模型

材质 material
纹理 texture
光源 light

变换和矩阵
transform 

shader
longitude 经度
latitude 纬度

vertex shader 顶点着色器
fragment shader 片元着色器
pixel shader 像素着色器

geometry 几何
Material 材质

- Renderer:action 咔嚓
- Scene:舞台
- Camera：镜头

立方体、平面、球体、圆柱体、四面体、八面体等几何形状

![右手坐标系](./public/img/doc/右手坐标系.jpg)

Cameras（照相机，控制投影方式）

- Camera
- OrthographicCamera（正交:平行，比例不变）
- THREE.OrthographicCamera(left, right, top, bottom, near, far)

![视景体](./public/img/doc/frustum.jpg)

```js
    PerspectiveCamera（透视:：人眼近大远小）
    /* 张角 */
    THREE.PerspectiveCamera(fov, aspect, near, far)
```

---
Core（核心对象）

- BufferGeometry
- Clock（用来记录时间）
- EventDispatcher
- Face3
- Face4
- Geometry
- Object3D:每个能够直接添加到场景内的对象的基类
- Projector
- Raycaster（计算鼠标拾取物体时很有用的对象）

---
Lights（光照）：

- Light
- AmbientLight
    `环境光会照亮场景中所有的物体，在计算物体的颜色的时候，都会叠加上环境光的颜色。由于环境光作用于所有的物体，所有的材质，所以环境光是没有方向的，也无法产生阴影效果。`

```js
    //创建灯光
    function initLight() {
        var light = new THREE.DirectionalLight(0xffffff); //添加了一个白色的平行光
        light.position.set(20, 50, 50); //设置光的方向
        scene.add(light); //添加到场景

        //添加一个全局环境光
        scene.add(new THREE.AmbientLight(0x222222));
    }
```

- AreaLight
- DirectionalLight
- HemisphereLight
- PointLight
`点光源就是从一个点的位置向四面八方发射出去的光，一个简单的例子就是一个裸露的灯泡。`
- SpotLight
`聚光灯光源的效果也是从一个点发出光线，然后沿着一个个圆锥体进行照射，可以模仿手电筒，带有灯罩的灯泡等效果。`

---

Loaders（加载器，用来加载特定文件）

- Loader
- BinaryLoader
- GeometryLoader
- ImageLoader
- JSONLoader
- LoadingMonitor
- SceneLoader
- TextureLoader

---
 Materials（材质，控制物体的颜色、纹理等）

- Material
- LineBasicMaterial
- LineDashedMaterial
- MeshBasicMaterial
    `不会受到光的影响，直接看到的效果就是整个物体的颜色都是一样，没有立体的感觉。`
- MeshDepthMaterial
- MeshFaceMaterial
- MeshLambertMaterial:
    `这种材质会对光有反应，但是不会出现高光，可以模拟一些粗糙的材质的物体，比如木头或者石头`
    Idiffuse = Kd * Id * cos(theta)
- MeshNormalMaterial
    `这种材质会根据面的方向不同自动改变颜色，此材质不受灯光影响。`
- MeshPhongMaterial
    `这种材质具有高光效果，可以模拟一些光滑的物体的材质效果，比如油漆面，瓷瓦等光滑物体。`
- MeshStandardMaterial
    `这种材质基于物理的渲染（PBR）材质，生成的材质效果更佳，但是相应也占用更多的计算量。这种材质我们可以定义它的粗糙度来确定反光效果，经常用于模拟金属的质感，使金属质感更加真实。`
- ParticleBasicMaterial
- ParticleCanvasMaterial
- ParticleDOMMaterial
- ShaderMaterial
- SpriteMaterial

Math（和数学相关的对象）
- Box2
- Box3
- Color
- Frustum
- Math
- Matrix3
- Matrix4
- Plane
- Quaternion
- Ray
- Sphere
- Spline
- Triangle
- Vector2
- Vector3
- Vector4

Objects（物体）
- Bone（骨骼）
- Line（线）
- LOD
- Mesh（网格，最常用的物体）
- Mesh(geometry, material)

```js
    mesh.visible = false; //设置为false，模型将不会被渲染到场景内
    mesh.position.x = 3; //将模型的位置调整到x正轴距离原点为3的位置。
    mesh.position.y += 5; //将模型的y轴位置以当前的位置向上移动5个单位。
    mesh.position.z -= 6;
    mesh.position.set(3, 5, -6);  //直接将模型的位置设置在x轴为3，y轴为5，z轴为-6的位置
    mesh.position = new THREE.Vector3(3, 5, -6); //上面的设置位置也可以通过这样设置。

    mesh.scale.x = 2; //模型沿x轴放大一倍
    mesh.scale.y = 0.5; //模型沿y轴缩小一倍
    mesh.scale.z = 1; //模型沿z轴保持不变
    mesh.scale.set(2, 2, 2); //每个方向等比放大一倍
    mesh.scale.set(0.5, 0.5, 0.5); //每个方向等比缩小一倍
    mesh.scale = new THREE.Vector3(2, 2, 2); //每个方向都放大一倍
    /* 欧拉角对象 */
    mesh.rotation = new THREE.Euler(Math.PI, 0, - Math.PI / 2, "YZX");

```

- MorphAnimMesh
- Particle
- ParticleSystem
- Ribbon
- SkinnedMesh
- Sprite

Renderers（渲染器，可以渲染到不同对象上）
- CanvasRenderer
- WebGLRenderer（使用WebGL渲染，这是本书中最常用的方式）
- WebGLRenderTarget
- WebGLRenderTargetCube
- WebGLShaders（着色器，在最后一章作介绍）

Renderers / Renderables
- RenderableFace3
- RenderableFace4
- RenderableLine
- RenderableObject
- RenderableParticle
- RenderableVertex

Scenes（场景）
    Fog
    FogExp2
    Scene

```js
object3D.name = "firstObj";
scene.add(object3D);
scene.add(mesh); //将一个模型添加到场景当中
scene.remove(mesh); //将一个模型从场景中删除
scene.getObjectByName("firstObj"); //返回第一个匹配的3d对象
scene.getObjectById(1); //返回id值为1的3d对象
console.log(scene.children); // [mesh1, mesh2]
scene.traverse(fucntion(child){
    console.log(child);
});
scene.add(mesh); //将模型添加到场景
console.log(mesh.parent === scene); //true
```

Textures（纹理）
- CompressedTexture
- DataTexture
- Texture

Extras
- FontUtils
- GeometryUtils
- ImageUtils
- SceneUtils

Extras / Animation
    Animation
    AnimationHandler
    AnimationMorphTarget
    KeyFrameAnimation

Extras / Cameras
    CombinedCamera
    CubeCamera

Extras / Core
    Curve
    CurvePath
    Gyroscope
    Path
    Shape

Extras / Geometries（几何形状）
// 水平分段：分段是什么意思？切片，切片越多，控制可以越精细

    CircleGeometry:圆 THREE.CircleGeometry(radius, segments, thetaStart, thetaLength)
    ConvexGeometry
    CubeGeometry：长方体 THREE.CubeGeometry(width, height, depth, widthSegments, heightSegments, depthSegments)
    CylinderGeometry：圆柱 THREE.CylinderGeometry(radiusTop, radiusBottom, height, radiusSegments, heightSegments, openEnded)
    ExtrudeGeometry
    IcosahedronGeometry：正二十面体
    LatheGeometry
    OctahedronGeometry:正八面体
    ParametricGeometry
    PlaneGeometry:平面THREE.PlaneGeometry(width, height, widthSegments, heightSegments)
    PolyhedronGeometry
    ShapeGeometry：
    SphereGeometry： 球体 /* 半径 */ THREE.SphereGeometry(radius, segmentsWidth, segmentsHeight, phiStart, phiLength, thetaStart, thetaLength)
    TetrahedronGeometry
    TextGeometry:文字形状THREE.TextGeometry(text, parameters)
    {
        size:"字号大小，一般为大写字母的高度",
        height:"文字的厚度",
        curveSegments:"弧线分段数，使得文字的曲线更加光滑",
        font:"字体，默认是'helvetiker'，需对应引用的字体文件",
        weight:"值为'normal'或'bold'，表示是否加粗",
        style:"值为'normal'或'italics'，表示是否斜体",
        bevelEnabled:"布尔值，是否使用倒角，意为在边缘处斜切",
        bevelThickness:"倒角厚度",
        bevelSize:"倒角宽度"
    }
    TorusGeometry:圆环面 THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc)
    TorusKnotGeometry:圆环结 THREE.TorusKnotGeometry(radius, tube, radialSegments, tubularSegments, p, q, heightScale)
    TubeGeometry

Extras / Helpers
    ArrowHelper
    AxisHelper
    CameraHelper
    DirectionalLightHelper
    HemisphereLightHelper
    PointLightHelper
    SpotLightHelper

Extras / Objects
    ImmediateRenderObject
    LensFlare
    MorphBlendMesh

Extras / Renderers / Plugins
    DepthPassPlugin
    LensFlarePlugin
    ShadowMapPlugin
    SpritePlugin

Extras / Shaders
    ShaderFlares
    ShaderSprite
```

照相机、几何形状、材质、物体

使用动画、模型导入、加入光照

着色器

## 照相机

三维投影到二维的一个抽象

## others

[vantajs](https://www.vantajs.com/?effect=clouds)
[水波纹](http://uusama.com/643.html)
