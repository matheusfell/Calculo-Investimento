function calcular()
{
    //pegar os 3 valores dos campos para efetuar o calculo
    var valorInvestido = document.getElementById("valor-investido").value;
    var numeroMes = document.getElementById("numero-mes").value;
    var taxaRendimento = document.getElementById("taxa-rendimento").value / 100;
    var total = parseFloat(valorInvestido);

    //laco para percorrer o numero de meses, e ir salvando em "total" os rendimentos
    for(var i = 0; i < numeroMes; i++){
        total = total + (total * taxaRendimento);
    }
    var resp = "Valor Investido: " + parseFloat(valorInvestido).toFixed(2) + "<br />";
    resp += "Resultado: " + total.toFixed(2);

    //jogar o "resp" dentro da div "#resultado"
    document.querySelector('#resultado').innerHTML = resp;
}

var btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click', calcular);