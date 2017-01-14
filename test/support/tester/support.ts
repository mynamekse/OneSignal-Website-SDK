export async function throwsAsync(testContext, func, error) {
  try {
    await func();
    testContext.fail('expected exception not caught');
  } catch (e) {
    testContext.truthy(e instanceof error);
  }
}