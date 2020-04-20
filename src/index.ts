export type ChromeApisType = typeof chrome;

export function debuggerGetTargets(localChrome: ChromeApisType) {
  return new Promise<chrome.debugger.TargetInfo[]>((res) => {
    localChrome.debugger.getTargets(res);
  });
}
