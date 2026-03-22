import fs from "node:fs";
import path from "node:path";

function parseEnvFile(filePath: string) {
  const content = fs.readFileSync(filePath, "utf8");
  const values: Record<string, string> = {};

  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();

    if (!line || line.startsWith("#")) {
      continue;
    }

    const separatorIndex = line.indexOf("=");
    if (separatorIndex <= 0) {
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();
    values[key] = value.replace(/^['"]|['"]$/g, "");
  }

  return values;
}

const devEnv = parseEnvFile(path.join(process.cwd(), ".env.development"));

export const expectedWebUrl = devEnv.NEXT_PUBLIC_WEB_URL ?? "";
export const expectedGoogleAnalyticsId = devEnv.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? "";
export const expectedClarityProjectId = devEnv.NEXT_PUBLIC_CLARITY_PROJECT_ID ?? "";
