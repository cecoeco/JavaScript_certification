function rot13(str) {
  function transformChar(char) {
    const isUpperCase = /[A-Z]/.test(char);
    const baseCharCode = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);

    if (/[A-Za-z]/.test(char)) {

      const rotatedCharCode = (char.charCodeAt(0) - baseCharCode + 13) % 26 + baseCharCode;
      return String.fromCharCode(rotatedCharCode);
    }

    return char;
  }

  return str.split('').map(transformChar).join('');
}