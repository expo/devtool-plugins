import { ExpoRequest, ExpoResponse } from 'expo-router/server';
import { getStatsPath } from '~plugin/metro/createStatsFile';
import { getStatsEntry, validateStatsFile } from '~plugin/metro/readStatsFile';

export async function GET(request: ExpoRequest) {
  const projectRoot = process.cwd(); // Note(cedric): let's hope this works
  const statsFile = getStatsPath(projectRoot);

  try {
    await validateStatsFile(statsFile);
  } catch (error: any) {
    return ExpoResponse.json({ error: error.message }, { status: 500 });
  }

  const entry = request.expoUrl.searchParams.get('entry');
  const entryId = entry ? parseInt(entry, 10) : null;
  
  if (!entryId || Number.isNaN(entryId) || entryId <= 1) {
    return ExpoResponse.json({ error: `Stats entry "${entry}" not found.`});
  }

  return ExpoResponse.json(await getStatsEntry(statsFile, entryId));
}
