/**
 * 🎬 Bollywood Movie Title Fixer
 *
 * Pappu ne ek movie database banaya hai lekin usne saare titles galat type
 * kar diye - kuch ALL CAPS mein, kuch all lowercase mein, kuch mein extra
 * spaces hain. Tu fix kar de titles ko proper Title Case mein!
 *
 * Rules:
 *   - Extra spaces hatao: leading, trailing, aur beech ke multiple spaces ko
 *     single space banao
 *   - Har word ka pehla letter uppercase, baaki lowercase (Title Case)
 *   - EXCEPTION: Chhote words jo Title Case mein lowercase rehte hain:
 *     "ka", "ki", "ke", "se", "aur", "ya", "the", "of", "in", "a", "an"
 *     LEKIN agar word title ka PEHLA word hai toh capitalize karo
 *   - Hint: Use trim(), split(), map(), join(), charAt(), toUpperCase(),
 *     toLowerCase(), slice()
 *
 * Validation:
 *   - Agar input string nahi hai, return ""
 *   - Agar string trim karne ke baad empty hai, return ""
 *
 * @param {string} title - Messy Bollywood movie title
 * @returns {string} Cleaned up Title Case title
 *
 * @example
 *   fixBollywoodTitle("  DILWALE   DULHANIA   LE   JAYENGE  ")
 *   // => "Dilwale Dulhania Le Jayenge"
 *
 *   fixBollywoodTitle("dil ka kya kare")
 *   // => "Dil ka Kya Kare"
 */
export function fixBollywoodTitle(title) {
  // Your code here
  if (typeof title !== "string" || title.trim() === "") {
    return ""
  }

  const chotteWords = ["ka", "ki", "ke", "se", "aur", "ya", "the", "of", "in", "a", "an"];

  return title
    .trim()
    .toLowerCase()
    .split(/\s+/) // regex for extra whitespace
    .map((word, i) => {

      //if word is not proper
      if (word.length === 0) return "";

      //if word is at first and not in chotteWords
      if (i === 0 || !chotteWords.includes(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }

      return word

    })

    .join(" ")

}

/*
LOGIC:

// RULES 
Agar title ka type string nhi hai ya title ko trim krne pr kuch nhi aata => return kro ""


// TITTLE 
1. trim 
2. lowercase 
3. split -> tod do string ko aur extra space hatado
4. map -> i) word ki length 0 hai to => ignore kro 
          ii) agar phela word hai, ya small word mein nhi hai toh => phele letter ko capital krdo
    Nhi toh word vaise ka vaise hi return krdo

5. akiri mein jod do
6. final trim krdo

*/
