import assertString from './util/assertString';
import escapeCharClass from './util/escapeCharClass';

export default function whitelist(str, chars) {
  assertString(str);
  return str.replace(new RegExp(`[^${escapeCharClass(chars)}]+`, 'g'), '');
}
