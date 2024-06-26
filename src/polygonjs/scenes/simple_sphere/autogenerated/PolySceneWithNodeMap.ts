import { ParamValueSerializedTypeMap } from "@polygonjs/polygonjs/dist/src/engine/params/types/ParamValueSerializedTypeMap";

import { PolyScene } from "@polygonjs/polygonjs/dist/src/engine/scene/PolyScene";
// obj
import { GeoObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/Geo";
// sop
import { BoxSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Box";
import { CameraControlsSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/CameraControls";
import { HemisphereLightSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/HemisphereLight";
import { MaterialSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Material";
import { MaterialsNetworkSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/MaterialsNetwork";
import { PerspectiveCameraSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PerspectiveCamera";
// mat
import { MeshStandardBuilderMatNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshStandardBuilder";
// event
import { CameraOrbitControlsEventNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/event/CameraOrbitControls";

export class PolySceneWithNodeMap_simple_sphere extends PolyScene {
  node(path: "/ground"): GeoObjNode;
  node(path: "/ground/material1"): MaterialSopNode;
  node(path: "/ground/box1"): BoxSopNode;
  node(path: "/ground/MAT"): MaterialsNetworkSopNode;
  node(path: "/ground/MAT/meshStandardBuilder1"): MeshStandardBuilderMatNode;
  node(path: "/lights"): GeoObjNode;
  node(path: "/lights/hemisphereLight1"): HemisphereLightSopNode;
  node(path: "/cameras"): GeoObjNode;
  node(path: "/cameras/perspectiveCamera1"): PerspectiveCameraSopNode;
  node(path: "/cameras/cameraControls1"): CameraControlsSopNode;
  node(
    path: "/cameras/cameraControls1/cameraOrbitControls1"
  ): CameraOrbitControlsEventNode;
  node(
    path: string
  ): any /* we need any for now as otherwise an error occurs when adding plugins to the overloaded methods */ {
    return super.node(path);
  }
}

export interface PolySceneProps_simple_sphere {
  "ground--transform"?: ParamValueSerializedTypeMap["folder"];
  "ground--keepPosWhenParenting"?: ParamValueSerializedTypeMap["boolean"];
  "ground--rotationOrder"?: ParamValueSerializedTypeMap["integer"];
  "ground--t"?: ParamValueSerializedTypeMap["vector3"];
  "ground--t-tx"?: ParamValueSerializedTypeMap["float"];
  "ground--t-ty"?: ParamValueSerializedTypeMap["float"];
  "ground--t-tz"?: ParamValueSerializedTypeMap["float"];
  "ground--tx"?: ParamValueSerializedTypeMap["float"];
  "ground--ty"?: ParamValueSerializedTypeMap["float"];
  "ground--tz"?: ParamValueSerializedTypeMap["float"];
  "ground--r"?: ParamValueSerializedTypeMap["vector3"];
  "ground--r-rx"?: ParamValueSerializedTypeMap["float"];
  "ground--r-ry"?: ParamValueSerializedTypeMap["float"];
  "ground--r-rz"?: ParamValueSerializedTypeMap["float"];
  "ground--rx"?: ParamValueSerializedTypeMap["float"];
  "ground--ry"?: ParamValueSerializedTypeMap["float"];
  "ground--rz"?: ParamValueSerializedTypeMap["float"];
  "ground--s"?: ParamValueSerializedTypeMap["vector3"];
  "ground--s-sx"?: ParamValueSerializedTypeMap["float"];
  "ground--s-sy"?: ParamValueSerializedTypeMap["float"];
  "ground--s-sz"?: ParamValueSerializedTypeMap["float"];
  "ground--sx"?: ParamValueSerializedTypeMap["float"];
  "ground--sy"?: ParamValueSerializedTypeMap["float"];
  "ground--sz"?: ParamValueSerializedTypeMap["float"];
  "ground--scale"?: ParamValueSerializedTypeMap["float"];
  "ground--matrixAutoUpdate"?: ParamValueSerializedTypeMap["boolean"];
  "ground--updateTransformFromObject"?: ParamValueSerializedTypeMap["button"];
  "ground--display"?: ParamValueSerializedTypeMap["boolean"];
  "ground--renderOrder"?: ParamValueSerializedTypeMap["integer"];
  "ground--CAD"?: ParamValueSerializedTypeMap["folder"];
  "ground--CADLinearTolerance"?: ParamValueSerializedTypeMap["float"];
  "ground--CADAngularTolerance"?: ParamValueSerializedTypeMap["float"];
  "ground--CADCurveAbscissa"?: ParamValueSerializedTypeMap["float"];
  "ground--CADCurveTolerance"?: ParamValueSerializedTypeMap["float"];
  "ground--CADDisplayEdges"?: ParamValueSerializedTypeMap["boolean"];
  "ground--CADEdgesColor"?: ParamValueSerializedTypeMap["color"];
  "ground--CADEdgesColor-CADEdgesColorr"?: ParamValueSerializedTypeMap["float"];
  "ground--CADEdgesColor-CADEdgesColorg"?: ParamValueSerializedTypeMap["float"];
  "ground--CADEdgesColor-CADEdgesColorb"?: ParamValueSerializedTypeMap["float"];
  "ground--CADEdgesColorr"?: ParamValueSerializedTypeMap["float"];
  "ground--CADEdgesColorg"?: ParamValueSerializedTypeMap["float"];
  "ground--CADEdgesColorb"?: ParamValueSerializedTypeMap["float"];
  "ground--CADDisplayMeshes"?: ParamValueSerializedTypeMap["boolean"];
  "ground--CADMeshesColor"?: ParamValueSerializedTypeMap["color"];
  "ground--CADMeshesColor-CADMeshesColorr"?: ParamValueSerializedTypeMap["float"];
  "ground--CADMeshesColor-CADMeshesColorg"?: ParamValueSerializedTypeMap["float"];
  "ground--CADMeshesColor-CADMeshesColorb"?: ParamValueSerializedTypeMap["float"];
  "ground--CADMeshesColorr"?: ParamValueSerializedTypeMap["float"];
  "ground--CADMeshesColorg"?: ParamValueSerializedTypeMap["float"];
  "ground--CADMeshesColorb"?: ParamValueSerializedTypeMap["float"];
  "ground--CADWireframe"?: ParamValueSerializedTypeMap["boolean"];
  "ground--CSG"?: ParamValueSerializedTypeMap["folder"];
  "ground--CSGFacetAngle"?: ParamValueSerializedTypeMap["float"];
  "ground--CSGLinesColor"?: ParamValueSerializedTypeMap["color"];
  "ground--CSGLinesColor-CSGLinesColorr"?: ParamValueSerializedTypeMap["float"];
  "ground--CSGLinesColor-CSGLinesColorg"?: ParamValueSerializedTypeMap["float"];
  "ground--CSGLinesColor-CSGLinesColorb"?: ParamValueSerializedTypeMap["float"];
  "ground--CSGLinesColorr"?: ParamValueSerializedTypeMap["float"];
  "ground--CSGLinesColorg"?: ParamValueSerializedTypeMap["float"];
  "ground--CSGLinesColorb"?: ParamValueSerializedTypeMap["float"];
  "ground--CSGMeshesColor"?: ParamValueSerializedTypeMap["color"];
  "ground--CSGMeshesColor-CSGMeshesColorr"?: ParamValueSerializedTypeMap["float"];
  "ground--CSGMeshesColor-CSGMeshesColorg"?: ParamValueSerializedTypeMap["float"];
  "ground--CSGMeshesColor-CSGMeshesColorb"?: ParamValueSerializedTypeMap["float"];
  "ground--CSGMeshesColorr"?: ParamValueSerializedTypeMap["float"];
  "ground--CSGMeshesColorg"?: ParamValueSerializedTypeMap["float"];
  "ground--CSGMeshesColorb"?: ParamValueSerializedTypeMap["float"];
  "ground--CSGWireframe"?: ParamValueSerializedTypeMap["boolean"];
  "ground-material1--group"?: ParamValueSerializedTypeMap["string"];
  "ground-material1--applyToChildren"?: ParamValueSerializedTypeMap["boolean"];
  "ground-material1--assignMat"?: ParamValueSerializedTypeMap["boolean"];
  "ground-material1--material"?: ParamValueSerializedTypeMap["node_path"];
  "ground-material1--cloneMat"?: ParamValueSerializedTypeMap["boolean"];
  "ground-material1--shareCustomUniforms"?: ParamValueSerializedTypeMap["boolean"];
  "ground-material1--swapCurrentTex"?: ParamValueSerializedTypeMap["boolean"];
  "ground-material1--texSrc0"?: ParamValueSerializedTypeMap["string"];
  "ground-material1--texDest0"?: ParamValueSerializedTypeMap["string"];
  "ground-box1--size"?: ParamValueSerializedTypeMap["float"];
  "ground-box1--sizes"?: ParamValueSerializedTypeMap["vector3"];
  "ground-box1--sizes-sizesx"?: ParamValueSerializedTypeMap["float"];
  "ground-box1--sizes-sizesy"?: ParamValueSerializedTypeMap["float"];
  "ground-box1--sizes-sizesz"?: ParamValueSerializedTypeMap["float"];
  "ground-box1--sizesx"?: ParamValueSerializedTypeMap["float"];
  "ground-box1--sizesy"?: ParamValueSerializedTypeMap["float"];
  "ground-box1--sizesz"?: ParamValueSerializedTypeMap["float"];
  "ground-box1--divisions"?: ParamValueSerializedTypeMap["vector3"];
  "ground-box1--divisions-divisionsx"?: ParamValueSerializedTypeMap["float"];
  "ground-box1--divisions-divisionsy"?: ParamValueSerializedTypeMap["float"];
  "ground-box1--divisions-divisionsz"?: ParamValueSerializedTypeMap["float"];
  "ground-box1--divisionsx"?: ParamValueSerializedTypeMap["float"];
  "ground-box1--divisionsy"?: ParamValueSerializedTypeMap["float"];
  "ground-box1--divisionsz"?: ParamValueSerializedTypeMap["float"];
  "ground-box1--center"?: ParamValueSerializedTypeMap["vector3"];
  "ground-box1--center-centerx"?: ParamValueSerializedTypeMap["float"];
  "ground-box1--center-centery"?: ParamValueSerializedTypeMap["float"];
  "ground-box1--center-centerz"?: ParamValueSerializedTypeMap["float"];
  "ground-box1--centerx"?: ParamValueSerializedTypeMap["float"];
  "ground-box1--centery"?: ParamValueSerializedTypeMap["float"];
  "ground-box1--centerz"?: ParamValueSerializedTypeMap["float"];
  "ground-MAT-meshStandardBuilder1--default"?: ParamValueSerializedTypeMap["folder"];
  "ground-MAT-meshStandardBuilder1--transparent"?: ParamValueSerializedTypeMap["boolean"];
  "ground-MAT-meshStandardBuilder1--opacity"?: ParamValueSerializedTypeMap["float"];
  "ground-MAT-meshStandardBuilder1--alphaTest"?: ParamValueSerializedTypeMap["float"];
  "ground-MAT-meshStandardBuilder1--textures"?: ParamValueSerializedTypeMap["folder"];
  "ground-MAT-meshStandardBuilder1--useMap"?: ParamValueSerializedTypeMap["boolean"];
  "ground-MAT-meshStandardBuilder1--map"?: ParamValueSerializedTypeMap["node_path"];
  "ground-MAT-meshStandardBuilder1--useAlphaMap"?: ParamValueSerializedTypeMap["boolean"];
  "ground-MAT-meshStandardBuilder1--alphaMap"?: ParamValueSerializedTypeMap["node_path"];
  "ground-MAT-meshStandardBuilder1--useAOMap"?: ParamValueSerializedTypeMap["boolean"];
  "ground-MAT-meshStandardBuilder1--aoMap"?: ParamValueSerializedTypeMap["node_path"];
  "ground-MAT-meshStandardBuilder1--aoMapIntensity"?: ParamValueSerializedTypeMap["float"];
  "ground-MAT-meshStandardBuilder1--useBumpMap"?: ParamValueSerializedTypeMap["boolean"];
  "ground-MAT-meshStandardBuilder1--bumpMap"?: ParamValueSerializedTypeMap["node_path"];
  "ground-MAT-meshStandardBuilder1--bumpScale"?: ParamValueSerializedTypeMap["float"];
  "ground-MAT-meshStandardBuilder1--bumpBias"?: ParamValueSerializedTypeMap["float"];
  "ground-MAT-meshStandardBuilder1--useDisplacementMap"?: ParamValueSerializedTypeMap["boolean"];
  "ground-MAT-meshStandardBuilder1--displacementMap"?: ParamValueSerializedTypeMap["node_path"];
  "ground-MAT-meshStandardBuilder1--displacementScale"?: ParamValueSerializedTypeMap["float"];
  "ground-MAT-meshStandardBuilder1--displacementBias"?: ParamValueSerializedTypeMap["float"];
  "ground-MAT-meshStandardBuilder1--emissive"?: ParamValueSerializedTypeMap["color"];
  "ground-MAT-meshStandardBuilder1--emissive-emissiver"?: ParamValueSerializedTypeMap["float"];
  "ground-MAT-meshStandardBuilder1--emissive-emissiveg"?: ParamValueSerializedTypeMap["float"];
  "ground-MAT-meshStandardBuilder1--emissive-emissiveb"?: ParamValueSerializedTypeMap["float"];
  "ground-MAT-meshStandardBuilder1--emissiver"?: ParamValueSerializedTypeMap["float"];
  "ground-MAT-meshStandardBuilder1--emissiveg"?: ParamValueSerializedTypeMap["float"];
  "ground-MAT-meshStandardBuilder1--emissiveb"?: ParamValueSerializedTypeMap["float"];
  "ground-MAT-meshStandardBuilder1--useEmissiveMap"?: ParamValueSerializedTypeMap["boolean"];
  "ground-MAT-meshStandardBuilder1--emissiveMap"?: ParamValueSerializedTypeMap["node_path"];
  "ground-MAT-meshStandardBuilder1--emissiveIntensity"?: ParamValueSerializedTypeMap["float"];
  "ground-MAT-meshStandardBuilder1--useEnvMap"?: ParamValueSerializedTypeMap["boolean"];
  "ground-MAT-meshStandardBuilder1--envMap"?: ParamValueSerializedTypeMap["node_path"];
  "ground-MAT-meshStandardBuilder1--envMapIntensity"?: ParamValueSerializedTypeMap["float"];
  "ground-MAT-meshStandardBuilder1--useLightMap"?: ParamValueSerializedTypeMap["boolean"];
  "ground-MAT-meshStandardBuilder1--lightMap"?: ParamValueSerializedTypeMap["node_path"];
  "ground-MAT-meshStandardBuilder1--lightMapIntensity"?: ParamValueSerializedTypeMap["float"];
  "ground-MAT-meshStandardBuilder1--useNormalMap"?: ParamValueSerializedTypeMap["boolean"];
  "ground-MAT-meshStandardBuilder1--normalMap"?: ParamValueSerializedTypeMap["node_path"];
  "ground-MAT-meshStandardBuilder1--normalMapType"?: ParamValueSerializedTypeMap["integer"];
  "ground-MAT-meshStandardBuilder1--normalScale"?: ParamValueSerializedTypeMap["vector2"];
  "ground-MAT-meshStandardBuilder1--normalScale-normalScalex"?: ParamValueSerializedTypeMap["float"];
  "ground-MAT-meshStandardBuilder1--normalScale-normalScaley"?: ParamValueSerializedTypeMap["float"];
  "ground-MAT-meshStandardBuilder1--normalScalex"?: ParamValueSerializedTypeMap["float"];
  "ground-MAT-meshStandardBuilder1--normalScaley"?: ParamValueSerializedTypeMap["float"];
  "ground-MAT-meshStandardBuilder1--normalScaleMult"?: ParamValueSerializedTypeMap["float"];
  "ground-MAT-meshStandardBuilder1--useMetalnessMap"?: ParamValueSerializedTypeMap["boolean"];
  "ground-MAT-meshStandardBuilder1--metalnessMap"?: ParamValueSerializedTypeMap["node_path"];
  "ground-MAT-meshStandardBuilder1--metalness"?: ParamValueSerializedTypeMap["float"];
  "ground-MAT-meshStandardBuilder1--useRoughnessMap"?: ParamValueSerializedTypeMap["boolean"];
  "ground-MAT-meshStandardBuilder1--roughnessMap"?: ParamValueSerializedTypeMap["node_path"];
  "ground-MAT-meshStandardBuilder1--roughness"?: ParamValueSerializedTypeMap["float"];
  "ground-MAT-meshStandardBuilder1--advanced"?: ParamValueSerializedTypeMap["folder"];
  "ground-MAT-meshStandardBuilder1--setBuilderNode"?: ParamValueSerializedTypeMap["boolean"];
  "ground-MAT-meshStandardBuilder1--builderNode"?: ParamValueSerializedTypeMap["node_path"];
  "ground-MAT-meshStandardBuilder1--doubleSided"?: ParamValueSerializedTypeMap["boolean"];
  "ground-MAT-meshStandardBuilder1--front"?: ParamValueSerializedTypeMap["boolean"];
  "ground-MAT-meshStandardBuilder1--overrideShadowSide"?: ParamValueSerializedTypeMap["boolean"];
  "ground-MAT-meshStandardBuilder1--shadowDoubleSided"?: ParamValueSerializedTypeMap["boolean"];
  "ground-MAT-meshStandardBuilder1--shadowFront"?: ParamValueSerializedTypeMap["boolean"];
  "ground-MAT-meshStandardBuilder1--colorWrite"?: ParamValueSerializedTypeMap["boolean"];
  "ground-MAT-meshStandardBuilder1--depthWrite"?: ParamValueSerializedTypeMap["boolean"];
  "ground-MAT-meshStandardBuilder1--depthTest"?: ParamValueSerializedTypeMap["boolean"];
  "ground-MAT-meshStandardBuilder1--premultipliedAlpha"?: ParamValueSerializedTypeMap["boolean"];
  "ground-MAT-meshStandardBuilder1--blending"?: ParamValueSerializedTypeMap["integer"];
  "ground-MAT-meshStandardBuilder1--dithering"?: ParamValueSerializedTypeMap["boolean"];
  "ground-MAT-meshStandardBuilder1--polygonOffset"?: ParamValueSerializedTypeMap["boolean"];
  "ground-MAT-meshStandardBuilder1--polygonOffsetFactor"?: ParamValueSerializedTypeMap["integer"];
  "ground-MAT-meshStandardBuilder1--polygonOffsetUnits"?: ParamValueSerializedTypeMap["integer"];
  "ground-MAT-meshStandardBuilder1--wireframe"?: ParamValueSerializedTypeMap["boolean"];
  "ground-MAT-meshStandardBuilder1--wireframeLinewidth"?: ParamValueSerializedTypeMap["float"];
  "ground-MAT-meshStandardBuilder1--useFog"?: ParamValueSerializedTypeMap["boolean"];
  "ground-MAT-meshStandardBuilder1--shadowPCSS"?: ParamValueSerializedTypeMap["boolean"];
  "ground-MAT-meshStandardBuilder1--shadowPCSSFilterSize"?: ParamValueSerializedTypeMap["float"];
  "ground-MAT-meshStandardBuilder1--overrideCustomMaterials"?: ParamValueSerializedTypeMap["boolean"];
  "ground-MAT-meshStandardBuilder1--createCustomMatDistance"?: ParamValueSerializedTypeMap["boolean"];
  "ground-MAT-meshStandardBuilder1--createCustomMatDepth"?: ParamValueSerializedTypeMap["boolean"];
  "ground-MAT-meshStandardBuilder1--createCustomMatDepthDOF"?: ParamValueSerializedTypeMap["boolean"];
  "lights--transform"?: ParamValueSerializedTypeMap["folder"];
  "lights--keepPosWhenParenting"?: ParamValueSerializedTypeMap["boolean"];
  "lights--rotationOrder"?: ParamValueSerializedTypeMap["integer"];
  "lights--t"?: ParamValueSerializedTypeMap["vector3"];
  "lights--t-tx"?: ParamValueSerializedTypeMap["float"];
  "lights--t-ty"?: ParamValueSerializedTypeMap["float"];
  "lights--t-tz"?: ParamValueSerializedTypeMap["float"];
  "lights--tx"?: ParamValueSerializedTypeMap["float"];
  "lights--ty"?: ParamValueSerializedTypeMap["float"];
  "lights--tz"?: ParamValueSerializedTypeMap["float"];
  "lights--r"?: ParamValueSerializedTypeMap["vector3"];
  "lights--r-rx"?: ParamValueSerializedTypeMap["float"];
  "lights--r-ry"?: ParamValueSerializedTypeMap["float"];
  "lights--r-rz"?: ParamValueSerializedTypeMap["float"];
  "lights--rx"?: ParamValueSerializedTypeMap["float"];
  "lights--ry"?: ParamValueSerializedTypeMap["float"];
  "lights--rz"?: ParamValueSerializedTypeMap["float"];
  "lights--s"?: ParamValueSerializedTypeMap["vector3"];
  "lights--s-sx"?: ParamValueSerializedTypeMap["float"];
  "lights--s-sy"?: ParamValueSerializedTypeMap["float"];
  "lights--s-sz"?: ParamValueSerializedTypeMap["float"];
  "lights--sx"?: ParamValueSerializedTypeMap["float"];
  "lights--sy"?: ParamValueSerializedTypeMap["float"];
  "lights--sz"?: ParamValueSerializedTypeMap["float"];
  "lights--scale"?: ParamValueSerializedTypeMap["float"];
  "lights--matrixAutoUpdate"?: ParamValueSerializedTypeMap["boolean"];
  "lights--updateTransformFromObject"?: ParamValueSerializedTypeMap["button"];
  "lights--display"?: ParamValueSerializedTypeMap["boolean"];
  "lights--renderOrder"?: ParamValueSerializedTypeMap["integer"];
  "lights--CAD"?: ParamValueSerializedTypeMap["folder"];
  "lights--CADLinearTolerance"?: ParamValueSerializedTypeMap["float"];
  "lights--CADAngularTolerance"?: ParamValueSerializedTypeMap["float"];
  "lights--CADCurveAbscissa"?: ParamValueSerializedTypeMap["float"];
  "lights--CADCurveTolerance"?: ParamValueSerializedTypeMap["float"];
  "lights--CADDisplayEdges"?: ParamValueSerializedTypeMap["boolean"];
  "lights--CADEdgesColor"?: ParamValueSerializedTypeMap["color"];
  "lights--CADEdgesColor-CADEdgesColorr"?: ParamValueSerializedTypeMap["float"];
  "lights--CADEdgesColor-CADEdgesColorg"?: ParamValueSerializedTypeMap["float"];
  "lights--CADEdgesColor-CADEdgesColorb"?: ParamValueSerializedTypeMap["float"];
  "lights--CADEdgesColorr"?: ParamValueSerializedTypeMap["float"];
  "lights--CADEdgesColorg"?: ParamValueSerializedTypeMap["float"];
  "lights--CADEdgesColorb"?: ParamValueSerializedTypeMap["float"];
  "lights--CADDisplayMeshes"?: ParamValueSerializedTypeMap["boolean"];
  "lights--CADMeshesColor"?: ParamValueSerializedTypeMap["color"];
  "lights--CADMeshesColor-CADMeshesColorr"?: ParamValueSerializedTypeMap["float"];
  "lights--CADMeshesColor-CADMeshesColorg"?: ParamValueSerializedTypeMap["float"];
  "lights--CADMeshesColor-CADMeshesColorb"?: ParamValueSerializedTypeMap["float"];
  "lights--CADMeshesColorr"?: ParamValueSerializedTypeMap["float"];
  "lights--CADMeshesColorg"?: ParamValueSerializedTypeMap["float"];
  "lights--CADMeshesColorb"?: ParamValueSerializedTypeMap["float"];
  "lights--CADWireframe"?: ParamValueSerializedTypeMap["boolean"];
  "lights--CSG"?: ParamValueSerializedTypeMap["folder"];
  "lights--CSGFacetAngle"?: ParamValueSerializedTypeMap["float"];
  "lights--CSGLinesColor"?: ParamValueSerializedTypeMap["color"];
  "lights--CSGLinesColor-CSGLinesColorr"?: ParamValueSerializedTypeMap["float"];
  "lights--CSGLinesColor-CSGLinesColorg"?: ParamValueSerializedTypeMap["float"];
  "lights--CSGLinesColor-CSGLinesColorb"?: ParamValueSerializedTypeMap["float"];
  "lights--CSGLinesColorr"?: ParamValueSerializedTypeMap["float"];
  "lights--CSGLinesColorg"?: ParamValueSerializedTypeMap["float"];
  "lights--CSGLinesColorb"?: ParamValueSerializedTypeMap["float"];
  "lights--CSGMeshesColor"?: ParamValueSerializedTypeMap["color"];
  "lights--CSGMeshesColor-CSGMeshesColorr"?: ParamValueSerializedTypeMap["float"];
  "lights--CSGMeshesColor-CSGMeshesColorg"?: ParamValueSerializedTypeMap["float"];
  "lights--CSGMeshesColor-CSGMeshesColorb"?: ParamValueSerializedTypeMap["float"];
  "lights--CSGMeshesColorr"?: ParamValueSerializedTypeMap["float"];
  "lights--CSGMeshesColorg"?: ParamValueSerializedTypeMap["float"];
  "lights--CSGMeshesColorb"?: ParamValueSerializedTypeMap["float"];
  "lights--CSGWireframe"?: ParamValueSerializedTypeMap["boolean"];
  "lights-hemisphereLight1--skyColor"?: ParamValueSerializedTypeMap["color"];
  "lights-hemisphereLight1--skyColor-skyColorr"?: ParamValueSerializedTypeMap["float"];
  "lights-hemisphereLight1--skyColor-skyColorg"?: ParamValueSerializedTypeMap["float"];
  "lights-hemisphereLight1--skyColor-skyColorb"?: ParamValueSerializedTypeMap["float"];
  "lights-hemisphereLight1--skyColorr"?: ParamValueSerializedTypeMap["float"];
  "lights-hemisphereLight1--skyColorg"?: ParamValueSerializedTypeMap["float"];
  "lights-hemisphereLight1--skyColorb"?: ParamValueSerializedTypeMap["float"];
  "lights-hemisphereLight1--groundColor"?: ParamValueSerializedTypeMap["color"];
  "lights-hemisphereLight1--groundColor-groundColorr"?: ParamValueSerializedTypeMap["float"];
  "lights-hemisphereLight1--groundColor-groundColorg"?: ParamValueSerializedTypeMap["float"];
  "lights-hemisphereLight1--groundColor-groundColorb"?: ParamValueSerializedTypeMap["float"];
  "lights-hemisphereLight1--groundColorr"?: ParamValueSerializedTypeMap["float"];
  "lights-hemisphereLight1--groundColorg"?: ParamValueSerializedTypeMap["float"];
  "lights-hemisphereLight1--groundColorb"?: ParamValueSerializedTypeMap["float"];
  "lights-hemisphereLight1--intensity"?: ParamValueSerializedTypeMap["float"];
  "lights-hemisphereLight1--position"?: ParamValueSerializedTypeMap["vector3"];
  "lights-hemisphereLight1--position-positionx"?: ParamValueSerializedTypeMap["float"];
  "lights-hemisphereLight1--position-positiony"?: ParamValueSerializedTypeMap["float"];
  "lights-hemisphereLight1--position-positionz"?: ParamValueSerializedTypeMap["float"];
  "lights-hemisphereLight1--positionx"?: ParamValueSerializedTypeMap["float"];
  "lights-hemisphereLight1--positiony"?: ParamValueSerializedTypeMap["float"];
  "lights-hemisphereLight1--positionz"?: ParamValueSerializedTypeMap["float"];
  "lights-hemisphereLight1--name"?: ParamValueSerializedTypeMap["string"];
  "cameras--transform"?: ParamValueSerializedTypeMap["folder"];
  "cameras--keepPosWhenParenting"?: ParamValueSerializedTypeMap["boolean"];
  "cameras--rotationOrder"?: ParamValueSerializedTypeMap["integer"];
  "cameras--t"?: ParamValueSerializedTypeMap["vector3"];
  "cameras--t-tx"?: ParamValueSerializedTypeMap["float"];
  "cameras--t-ty"?: ParamValueSerializedTypeMap["float"];
  "cameras--t-tz"?: ParamValueSerializedTypeMap["float"];
  "cameras--tx"?: ParamValueSerializedTypeMap["float"];
  "cameras--ty"?: ParamValueSerializedTypeMap["float"];
  "cameras--tz"?: ParamValueSerializedTypeMap["float"];
  "cameras--r"?: ParamValueSerializedTypeMap["vector3"];
  "cameras--r-rx"?: ParamValueSerializedTypeMap["float"];
  "cameras--r-ry"?: ParamValueSerializedTypeMap["float"];
  "cameras--r-rz"?: ParamValueSerializedTypeMap["float"];
  "cameras--rx"?: ParamValueSerializedTypeMap["float"];
  "cameras--ry"?: ParamValueSerializedTypeMap["float"];
  "cameras--rz"?: ParamValueSerializedTypeMap["float"];
  "cameras--s"?: ParamValueSerializedTypeMap["vector3"];
  "cameras--s-sx"?: ParamValueSerializedTypeMap["float"];
  "cameras--s-sy"?: ParamValueSerializedTypeMap["float"];
  "cameras--s-sz"?: ParamValueSerializedTypeMap["float"];
  "cameras--sx"?: ParamValueSerializedTypeMap["float"];
  "cameras--sy"?: ParamValueSerializedTypeMap["float"];
  "cameras--sz"?: ParamValueSerializedTypeMap["float"];
  "cameras--scale"?: ParamValueSerializedTypeMap["float"];
  "cameras--matrixAutoUpdate"?: ParamValueSerializedTypeMap["boolean"];
  "cameras--updateTransformFromObject"?: ParamValueSerializedTypeMap["button"];
  "cameras--display"?: ParamValueSerializedTypeMap["boolean"];
  "cameras--renderOrder"?: ParamValueSerializedTypeMap["integer"];
  "cameras--CAD"?: ParamValueSerializedTypeMap["folder"];
  "cameras--CADLinearTolerance"?: ParamValueSerializedTypeMap["float"];
  "cameras--CADAngularTolerance"?: ParamValueSerializedTypeMap["float"];
  "cameras--CADCurveAbscissa"?: ParamValueSerializedTypeMap["float"];
  "cameras--CADCurveTolerance"?: ParamValueSerializedTypeMap["float"];
  "cameras--CADDisplayEdges"?: ParamValueSerializedTypeMap["boolean"];
  "cameras--CADEdgesColor"?: ParamValueSerializedTypeMap["color"];
  "cameras--CADEdgesColor-CADEdgesColorr"?: ParamValueSerializedTypeMap["float"];
  "cameras--CADEdgesColor-CADEdgesColorg"?: ParamValueSerializedTypeMap["float"];
  "cameras--CADEdgesColor-CADEdgesColorb"?: ParamValueSerializedTypeMap["float"];
  "cameras--CADEdgesColorr"?: ParamValueSerializedTypeMap["float"];
  "cameras--CADEdgesColorg"?: ParamValueSerializedTypeMap["float"];
  "cameras--CADEdgesColorb"?: ParamValueSerializedTypeMap["float"];
  "cameras--CADDisplayMeshes"?: ParamValueSerializedTypeMap["boolean"];
  "cameras--CADMeshesColor"?: ParamValueSerializedTypeMap["color"];
  "cameras--CADMeshesColor-CADMeshesColorr"?: ParamValueSerializedTypeMap["float"];
  "cameras--CADMeshesColor-CADMeshesColorg"?: ParamValueSerializedTypeMap["float"];
  "cameras--CADMeshesColor-CADMeshesColorb"?: ParamValueSerializedTypeMap["float"];
  "cameras--CADMeshesColorr"?: ParamValueSerializedTypeMap["float"];
  "cameras--CADMeshesColorg"?: ParamValueSerializedTypeMap["float"];
  "cameras--CADMeshesColorb"?: ParamValueSerializedTypeMap["float"];
  "cameras--CADWireframe"?: ParamValueSerializedTypeMap["boolean"];
  "cameras--CSG"?: ParamValueSerializedTypeMap["folder"];
  "cameras--CSGFacetAngle"?: ParamValueSerializedTypeMap["float"];
  "cameras--CSGLinesColor"?: ParamValueSerializedTypeMap["color"];
  "cameras--CSGLinesColor-CSGLinesColorr"?: ParamValueSerializedTypeMap["float"];
  "cameras--CSGLinesColor-CSGLinesColorg"?: ParamValueSerializedTypeMap["float"];
  "cameras--CSGLinesColor-CSGLinesColorb"?: ParamValueSerializedTypeMap["float"];
  "cameras--CSGLinesColorr"?: ParamValueSerializedTypeMap["float"];
  "cameras--CSGLinesColorg"?: ParamValueSerializedTypeMap["float"];
  "cameras--CSGLinesColorb"?: ParamValueSerializedTypeMap["float"];
  "cameras--CSGMeshesColor"?: ParamValueSerializedTypeMap["color"];
  "cameras--CSGMeshesColor-CSGMeshesColorr"?: ParamValueSerializedTypeMap["float"];
  "cameras--CSGMeshesColor-CSGMeshesColorg"?: ParamValueSerializedTypeMap["float"];
  "cameras--CSGMeshesColor-CSGMeshesColorb"?: ParamValueSerializedTypeMap["float"];
  "cameras--CSGMeshesColorr"?: ParamValueSerializedTypeMap["float"];
  "cameras--CSGMeshesColorg"?: ParamValueSerializedTypeMap["float"];
  "cameras--CSGMeshesColorb"?: ParamValueSerializedTypeMap["float"];
  "cameras--CSGWireframe"?: ParamValueSerializedTypeMap["boolean"];
  "cameras-perspectiveCamera1--default"?: ParamValueSerializedTypeMap["folder"];
  "cameras-perspectiveCamera1--fov"?: ParamValueSerializedTypeMap["float"];
  "cameras-perspectiveCamera1--near"?: ParamValueSerializedTypeMap["float"];
  "cameras-perspectiveCamera1--far"?: ParamValueSerializedTypeMap["float"];
  "cameras-perspectiveCamera1--position"?: ParamValueSerializedTypeMap["vector3"];
  "cameras-perspectiveCamera1--position-positionx"?: ParamValueSerializedTypeMap["float"];
  "cameras-perspectiveCamera1--position-positiony"?: ParamValueSerializedTypeMap["float"];
  "cameras-perspectiveCamera1--position-positionz"?: ParamValueSerializedTypeMap["float"];
  "cameras-perspectiveCamera1--positionx"?: ParamValueSerializedTypeMap["float"];
  "cameras-perspectiveCamera1--positiony"?: ParamValueSerializedTypeMap["float"];
  "cameras-perspectiveCamera1--positionz"?: ParamValueSerializedTypeMap["float"];
  "cameras-perspectiveCamera1--rotation"?: ParamValueSerializedTypeMap["vector3"];
  "cameras-perspectiveCamera1--rotation-rotationx"?: ParamValueSerializedTypeMap["float"];
  "cameras-perspectiveCamera1--rotation-rotationy"?: ParamValueSerializedTypeMap["float"];
  "cameras-perspectiveCamera1--rotation-rotationz"?: ParamValueSerializedTypeMap["float"];
  "cameras-perspectiveCamera1--rotationx"?: ParamValueSerializedTypeMap["float"];
  "cameras-perspectiveCamera1--rotationy"?: ParamValueSerializedTypeMap["float"];
  "cameras-perspectiveCamera1--rotationz"?: ParamValueSerializedTypeMap["float"];
  "cameras-perspectiveCamera1--showHelper"?: ParamValueSerializedTypeMap["boolean"];
  "cameras-perspectiveCamera1--matrixAutoUpdate"?: ParamValueSerializedTypeMap["boolean"];
  "cameras-perspectiveCamera1--name"?: ParamValueSerializedTypeMap["string"];
  "cameras-perspectiveCamera1--updateTransformFromCamera"?: ParamValueSerializedTypeMap["button"];
  "cameras-perspectiveCamera1--PBR"?: ParamValueSerializedTypeMap["folder"];
  "cameras-perspectiveCamera1--apertureBlades"?: ParamValueSerializedTypeMap["integer"];
  "cameras-perspectiveCamera1--fStop"?: ParamValueSerializedTypeMap["float"];
  "cameras-perspectiveCamera1--focusDistance"?: ParamValueSerializedTypeMap["float"];
  "cameras-perspectiveCamera1--apertureRotation"?: ParamValueSerializedTypeMap["float"];
  "cameras-perspectiveCamera1--anamorphicRatio"?: ParamValueSerializedTypeMap["float"];
  "cameras-cameraControls1--node"?: ParamValueSerializedTypeMap["node_path"];
  "cameras-cameraControls1-cameraOrbitControls1--enabled"?: ParamValueSerializedTypeMap["boolean"];
  "cameras-cameraControls1-cameraOrbitControls1--allowPan"?: ParamValueSerializedTypeMap["boolean"];
  "cameras-cameraControls1-cameraOrbitControls1--allowRotate"?: ParamValueSerializedTypeMap["boolean"];
  "cameras-cameraControls1-cameraOrbitControls1--allowZoom"?: ParamValueSerializedTypeMap["boolean"];
  "cameras-cameraControls1-cameraOrbitControls1--tdamping"?: ParamValueSerializedTypeMap["boolean"];
  "cameras-cameraControls1-cameraOrbitControls1--damping"?: ParamValueSerializedTypeMap["float"];
  "cameras-cameraControls1-cameraOrbitControls1--screenSpacePanning"?: ParamValueSerializedTypeMap["boolean"];
  "cameras-cameraControls1-cameraOrbitControls1--rotateSpeed"?: ParamValueSerializedTypeMap["float"];
  "cameras-cameraControls1-cameraOrbitControls1--minDistance"?: ParamValueSerializedTypeMap["float"];
  "cameras-cameraControls1-cameraOrbitControls1--maxDistance"?: ParamValueSerializedTypeMap["float"];
  "cameras-cameraControls1-cameraOrbitControls1--limitAzimuthAngle"?: ParamValueSerializedTypeMap["boolean"];
  "cameras-cameraControls1-cameraOrbitControls1--azimuthAngleRange"?: ParamValueSerializedTypeMap["vector2"];
  "cameras-cameraControls1-cameraOrbitControls1--azimuthAngleRange-azimuthAngleRangex"?: ParamValueSerializedTypeMap["float"];
  "cameras-cameraControls1-cameraOrbitControls1--azimuthAngleRange-azimuthAngleRangey"?: ParamValueSerializedTypeMap["float"];
  "cameras-cameraControls1-cameraOrbitControls1--azimuthAngleRangex"?: ParamValueSerializedTypeMap["float"];
  "cameras-cameraControls1-cameraOrbitControls1--azimuthAngleRangey"?: ParamValueSerializedTypeMap["float"];
  "cameras-cameraControls1-cameraOrbitControls1--polarAngleRange"?: ParamValueSerializedTypeMap["vector2"];
  "cameras-cameraControls1-cameraOrbitControls1--polarAngleRange-polarAngleRangex"?: ParamValueSerializedTypeMap["float"];
  "cameras-cameraControls1-cameraOrbitControls1--polarAngleRange-polarAngleRangey"?: ParamValueSerializedTypeMap["float"];
  "cameras-cameraControls1-cameraOrbitControls1--polarAngleRangex"?: ParamValueSerializedTypeMap["float"];
  "cameras-cameraControls1-cameraOrbitControls1--polarAngleRangey"?: ParamValueSerializedTypeMap["float"];
  "cameras-cameraControls1-cameraOrbitControls1--target"?: ParamValueSerializedTypeMap["vector3"];
  "cameras-cameraControls1-cameraOrbitControls1--target-targetx"?: ParamValueSerializedTypeMap["float"];
  "cameras-cameraControls1-cameraOrbitControls1--target-targety"?: ParamValueSerializedTypeMap["float"];
  "cameras-cameraControls1-cameraOrbitControls1--target-targetz"?: ParamValueSerializedTypeMap["float"];
  "cameras-cameraControls1-cameraOrbitControls1--targetx"?: ParamValueSerializedTypeMap["float"];
  "cameras-cameraControls1-cameraOrbitControls1--targety"?: ParamValueSerializedTypeMap["float"];
  "cameras-cameraControls1-cameraOrbitControls1--targetz"?: ParamValueSerializedTypeMap["float"];
}
