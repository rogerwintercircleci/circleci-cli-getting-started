// Compare two version strings. Returns a negative number when a is older
// than b, a positive number when a is newer, and 0 when they are equal.
export function compareVersions(a, b) {
  if (a === b) return 0;
  return a < b ? -1 : 1;
}

// Return a copy of the releases, newest version first.
export function sortReleases(releases) {
  return [...releases].sort((x, y) => compareVersions(y.version, x.version));
}
