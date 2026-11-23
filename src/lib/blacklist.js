import assertString from './util/assertString';
import escapeCharClass from './util/escapeCharClass';

export default function blacklist(str, chars, { isEscaped = false } = {}) {
  assertString(str);
  const escapedChars = isEscaped ? chars : escapeCharClass(chars);
  return str.replace(new RegExp(`[${escapedChars}]+`, 'g'), '');
}
