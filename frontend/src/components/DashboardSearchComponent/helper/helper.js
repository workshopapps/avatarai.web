export function browserIsFirefox() {
  const userAgent = navigator.userAgent;
  const Firefox = userAgent.indexOf("Firefox") != -1;

  let isFirefox = false;
  if(Firefox){
    isFirefox = true
  }
  return isFirefox
}
