export default function escapeCharClass(chars) {
  return chars.replace(/\\/g, '\\\\').replace(/]/g, '\\]');
}
