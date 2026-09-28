function parseHex(hex){
  if(typeof hex!=="string")throw new TypeError("Expected color to be a string");
  const value=hex.trim().replace(/^#/u,"");
  if(!/^(?:[\da-f]{3}|[\da-f]{6})$/iu.test(value))throw new RangeError("Expected a 3- or 6-digit HEX color");
  const full=value.length===3?[...value].map(c=>c+c).join(""):value;
  return [0,2,4].map(i=>parseInt(full.slice(i,i+2),16));
}
function linear(channel){const c=channel/255;return c<=0.04045?c/12.92:((c+0.055)/1.055)**2.4;}
export function relativeLuminance(color){const [r,g,b]=parseHex(color).map(linear);return 0.2126*r+0.7152*g+0.0722*b;}
export function contrastRatio(a,b){const l1=relativeLuminance(a),l2=relativeLuminance(b);const [light,dark]=l1>=l2?[l1,l2]:[l2,l1];return (light+0.05)/(dark+0.05);}
export function meetsContrast(a,b,ratio=4.5){if(typeof ratio!=="number"||ratio<=1)throw new RangeError("Expected ratio to be greater than 1");return contrastRatio(a,b)>=ratio;}
