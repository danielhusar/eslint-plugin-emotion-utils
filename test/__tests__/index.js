const { spawnSync } = require('child_process');

describe('eslint-plugin-emotion-utils', () => {
  test('prints errors', async () => {
    const args = ['eslint', './__fixtures__'];
    const { stdout, status } = spawnSync('yarn', args);
    const errors = stdout.toString();
    expect(status).toBe(1);
    expect(errors.match('9:5  error  Do not use "theme" function calls inside of css tagged literals')).toBeTruthy();
    expect(errors.match('12:5  error  Do not use anonymous functions calls inside of css tagged literals')).toBeTruthy();
    expect(errors.match('15:5  error  Do not use anonymous functions calls inside of css tagged literals')).toBeTruthy();
    expect(errors.match('3 errors')).toBeTruthy();
  });
});
