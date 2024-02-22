import { type SerializerConfigT } from 'metro-config';
import path from 'path';

type CustomSerializerParameters = Parameters<NonNullable<SerializerConfigT['customSerializer']>>;
type ConvertOptions = {
  projectRoot: string;
  entryPoint: CustomSerializerParameters[0];
  preModules: CustomSerializerParameters[1];
  graph: CustomSerializerParameters[2];
  options: CustomSerializerParameters[3];
};

export type MetroStatsEntry = ReturnType<typeof convertGraphToStats>;
export type MetroStatsModule = ReturnType<typeof convertModule>

export function convertGraphToStats({ projectRoot, entryPoint, preModules, graph, options }: ConvertOptions) {
  return [
    path.relative(projectRoot, entryPoint),
    preModules.map((module) => convertModule(projectRoot, module)),
    convertGraph(projectRoot, graph),
    convertOptions(options),
  ] as const;
}

function convertOptions(options: ConvertOptions['options']) {
  return {
    ...options,
    processModuleFilter: undefined,
    createModuleId: undefined,
    getRunModuleStatement: undefined,
    shouldAddToIgnoreList: undefined,
  };
}

function convertGraph(projectRoot: string, graph: ConvertOptions['graph']) {
  return {
    ...graph,
    entryPoints: Array.from(graph.entryPoints.values()),
    dependencies: Array.from(graph.dependencies.values()).map((dependency) => (
      convertModule(projectRoot, dependency)
    )),
  };
}

function convertModule(projectRoot: string, module: ConvertOptions['preModules'][0]) {
  const nodeModuleName = getNodeModuleNameFromPath(module.path);

  return {
    nodeModuleName: nodeModuleName || '[unknown]',
    isNodeModule: !!nodeModuleName,
    dependencies: Array.from(module.dependencies.values()).map((dependency) => (
      path.relative(projectRoot, dependency.absolutePath)
    )),
    relativePath: path.relative(projectRoot, module.path),
    absolutePath: module.path,
    size: getModuleOutputInBytes(module),
    // source: module.getSource().toString(),
    // output: module.output.map((output) => ({
    //   type: output.type,
    //   data: output.data,
    // })),
  };
}

function getModuleOutputInBytes(module: ConvertOptions['preModules'][0]) {
  return module.output.reduce((bytes, module) => bytes + Buffer.byteLength(module.data.code, 'utf-8'), 0);
}

const nodeModuleNameCache = new Map<string, string>();
function getNodeModuleNameFromPath(path: string) {
  if (nodeModuleNameCache.has(path)) {
    return nodeModuleNameCache.get(path) ?? null;
  }

  const segments = path.split('/');

  for (let i = segments.length - 1; i >= 0; i--) {
    if (segments[i] === 'node_modules') {
      let name = segments[i + 1];

      if (name.startsWith('@') && i + 2 < segments.length) {
        name += '/' + segments[i + 2];
      }

      nodeModuleNameCache.set(path, name);
      return name;
    }
  }

  return null;
}