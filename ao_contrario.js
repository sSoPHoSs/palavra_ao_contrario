var palavra = reverse(prompt("digite algo aqui"));

function reverse(palavra) {
  return palavra.split("").reverse().join("");
}
alert(palavra);
