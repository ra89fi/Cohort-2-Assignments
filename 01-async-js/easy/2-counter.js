let x = 1;

function counter() {
  setTimeout(() => {
    console.log(x);
    x += 1;
    counter();
  }, 1000)
}
counter();
