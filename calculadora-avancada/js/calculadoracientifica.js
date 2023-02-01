/* =========== Calculadora Científica =========== */

function adicionarCaractere(input, character) {
   if(input.value == null || input.value == "0")
      input.value = character
   else
      input.value += character
}

function sen(form) {
   form.display.value = Math.sin(form.display.value);
}

function cos(form) {
   form.display.value = Math.cos(form.display.value);
}

function tan(form) {
   form.display.value = Math.tan(form.display.value);
}

function sqrt(form) {
   form.display.value = Math.sqrt(form.display.value);
}

function ln(form) {
   form.display.value = Math.log(form.display.value).toFixed(5).replace(/\.?0+$/, '');
}

function log(form) {
   form.display.value = Math.log10(form.display.value).toFixed(5).replace(/\.?0+$/, '');
}

function exp(form) {
   form.display.value = Math.exp(form.display.value);
}

function fatorial(form) {
   form.display.value = fact(form.display.value);
}

function fact(input) {
   if (input < 0) 
      return -1;
   else if (input == 0) 
         return 1;
      else
      return (input * fact(input - 1));
}

var val = 0.0;
function percento(input) {
   val = input.value;
   input.value = input.value + "%";
}

var val2 = 0;
function potencia(input) {
   val2 = input.value;
   input.value = input.value + "**";
}

function computar(form) {
      form.display.value = eval(form.display.value);
}

function checarEntrada(str) {
   for (var i = 0; i < str.length; i++) {
      var ch = str.charAt(i);
      if (ch < "0" || ch > "9") {
         if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "." && ch != "(" && ch!= ")" && ch != "%") {
            alert("Entrada Inválida!")
            return false
         }
      }
   }
   return true
}