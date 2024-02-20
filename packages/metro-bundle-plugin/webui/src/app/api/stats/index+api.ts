import { ExpoResponse } from 'expo-router/server';
import { getStatsPath } from '~plugin/metro/createStatsFile';
import { listStatsEntries, validateStatsFile } from '~plugin/metro/readStatsFile';

export async function GET() {
  const projectRoot = process.cwd(); // Note(cedric): let's hope this works
  const statsFile = getStatsPath(projectRoot);

  try {
    await validateStatsFile(statsFile);
  } catch (error: any) {
    return ExpoResponse.json({ error: error.message }, { status: 500 });
  }

  return ExpoResponse.json(await listStatsEntries(statsFile));
}
