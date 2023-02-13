function easyLoop() {
  let str = '';
  for (let i = 0; i < 99; i++) {
    if (i % 7 == 0) {
      str.append(i);
    }
  }
  return str;
}
console.log(easyLoop());
