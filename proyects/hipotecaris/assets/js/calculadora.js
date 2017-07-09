function g(id){
  return document.getElementById(id);
}

function cal(){
  var importe = g("importe").value;
  var plazo = g("meses").value;
  var interes = g("interes").value;
  var multi;
  var multi2;
  var pago;

  if(isNaN(importe) || isNaN(plazo) || isNaN(interes) ||
     importe === "" || plazo==="" || interes===""){
    alert("Revise que haya introducido solamente numeros y que no haya dejado ningún campo vacío");
    return;
  }

  importe = parseInt(importe);
  plazo = parseInt(plazo);
  interes = parseInt(interes);

  interes = interes/(100*12);
  multi = Math.pow(1+interes, -plazo);
  multi2 = importe*interes;
  pago = multi2/(1-multi);

  pago = Number((pago).toFixed(2));

  g("result").value = "$" + pago;


}
