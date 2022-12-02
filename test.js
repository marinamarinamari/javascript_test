let i ;
for (i = 1; i <= 50; i++) {
  if(i % 10 === 0) {
    console.log("今" + i +"回ループしました。");
} else if(i % 4 === 0) {
  console.log("４で割れる数です。" + i +"");
} else if(i === 50) {
  console.log(i);
}
}
alert("50回カウントが終わりました。");