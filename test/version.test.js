import { describe, test } from 'node:test';
import assert from 'node:assert/strict';
import { compareVersions, sortReleases } from '../src/version.js';

describe('version sorting', () => {
  test('orders patch versions', () => {
    assert.ok(compareVersions('1.2.3', '1.2.4') < 0);
  });

  test('orders 1.10.0 above 1.9.0', () => {
    assert.ok(compareVersions('1.10.0', '1.9.0') > 0);
  });

  test('sorts releases newest first', () => {
    const releases = [{ version: '1.9.0' }, { version: '2.0.0' }, { version: '1.10.0' }];
    const versions = sortReleases(releases).map((release) => release.version);
    assert.deepEqual(versions, ['2.0.0', '1.10.0', '1.9.0']);
  });
});
