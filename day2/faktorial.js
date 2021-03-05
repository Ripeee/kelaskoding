function faktorial(k) {
  var a = 1;
  var f = 1;
  while (a <= k) {
    f = f * a;
    a = a + 1;
  }
  document.write(f);
}
faktorial(5);