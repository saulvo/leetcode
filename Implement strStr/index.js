/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
   if(needle.length === 0 || haystack === needle) return 0;

   for (let i = 0; i <= haystack.length - needle.length; i++) {
      if(needle === haystack.substring(i, i + needle.length)) {
         return i;
      }
   }

   return -1;
};

console.log(strStr("aassdasdsona","son"));