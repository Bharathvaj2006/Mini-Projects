const btn=document.getElementById("checkBtn");
btn.addEventListener("click",()=>{
    const input=document.getElementById("input").value;
    const isPalindrome=checkPalindrome(input);
    const result=document.getElementById("result");
    result.innerHTML=isPalindrome ? "<p><b>It's a palindrome!</b></p>" : "<p><b>Not a palindrome.</b></p>";
});
function checkPalindrome(str){
    const cleanedStr=str.replace(/[^A-Za-z0-9]/g,'').toLowerCase();
    const reversedStr=cleanedStr.split('').reverse().join('');
    return cleanedStr===reversedStr;
}