function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
}

function normalizeHost(host) {
  return host.toLowerCase().replace(/\.$/, '');
}

export default function checkHost(host, matches) {
  const normalizedHost = normalizeHost(host);
  for (let i = 0; i < matches.length; i++) {
    const match = matches[i];
    if (isRegExp(match)) {
      // Reset state so regexes with the global flag behave deterministically
      match.lastIndex = 0;
      if (match.test(normalizedHost)) {
        return true;
      }
    } else if (typeof match === 'string' && normalizedHost === normalizeHost(match)) {
      return true;
    }
  }
  return false;
}
