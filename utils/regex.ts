/**
 * capitalise first letters of words in string.
 * @param {string} str String to be modified
 * @param {boolean=false} lower Whether all other letters should be lowercased
 * @return {string}
 * @usage
 *   capitalise('fix this string');     // -> 'Fix This String'
 *   capitalise('javaSCrIPT');          // -> 'JavaSCrIPT'
 *   capitalise('javaSCrIPT', true);    // -> 'Javascript'
 */
export const capitalise = (str: string, lower = false): string =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
    match.toUpperCase(),
  );
