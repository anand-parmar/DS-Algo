let codes = ["", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tu", "vwx", "yz"];

printkpc("456789456", "");

function printkpc(ques, ans) {
  if (ques.length == 0) {
    console.log(ans);
    return;
  }

  let ch = ques.charAt(0);
  let roq = ques.substring(1);

  let codeforch = codes[Number(ch)];
  for (let i = 0; i < codeforch.length; i++) {
    cho = codeforch.charAt(i);
    printkpc(roq, ans + cho);
  }
}
