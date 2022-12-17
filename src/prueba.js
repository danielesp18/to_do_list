function getGiftsToRefill(a1 = [], a2 = [], a3 = []) {
  let allGifts = [...a1, ...a2, ...a3],
    cleanGifts = [...new Set(allGifts)];

  let pedidos = [];

  //console.log(allGifts);
  //console.log(cleanGifts);

  allGifts.map((el) => {
    cleanGifts.map((el1) => {
      if (el === el1) {
        console.log("Elemento coinside: " + el);
      } else {
        //console.log("Elemento no coinside: " + el);
      }
    });
  });
}

const a1 = ["bici", "coche", "bici", "bici"];
const a2 = ["coche", "bici", "muñeca", "coche"];
const a3 = ["bici", "pc", "pc"];

/* El almacén a1 tiene "bici" y "coche".
El almacén a2 tiene "coche", "bici" y "muñeca".
El almacén a3 tiene "bici" y "pc".

El regalo "muñeca" y "pc" sólo están en los almacenes a2 y a3 respectivamente.
*/

//const gifts = getGiftsToRefill(a1, a2, a3); // ['muñeca', 'pc']

/* -------------------------------------------------- */

function checkPart(part = "") {
  let lyrics = [...new Set(part.split(""))];

  console.log(part.split(""));
  console.log(lyrics);
}

checkPart("uwu"); // true
checkPart("zzzoonzzz");
// "uwu" es un palíndromo sin eliminar ningún carácter

//checkPart("miidim"); // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

//checkPart("midu"); // false
// "midu" no puede ser un palíndromo después de eliminar un carácter
