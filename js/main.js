//var name="Danilo Akira";
//var n1 = 32;
//var n2=18;
//var frase = "japão é o melhor time do mundo"
//alert(name + " Tem " + idade + " anos")
//alert(idade+idade2);
//console.log(name);
//console.log(n1+n2);
//console.log(frase.replace("japão","Brasil"));
//var lista=["maçã","pera","laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" | "));
/*var fruta = {nome:"maçã",cor:"vermelho"}
console.log(fruta.nome);
alert(fruta.cor);*/
//var fruta = [{nome:"maçã",cor:"vermelho"},{nome:"uva",cor:"roxa"}]
//console.log(fruta);
//alert(fruta[1].nome);
/*var idade=prompt("Qual sua idade");
if(idade>=18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};*/
/*var count = 0;
while(count<=5){
    console.log(count);
    alert(count);
    count++;
}*/
/*var count;
for(count=0; count<=5; count++){
    alert(count);
};*/
/*var d = new Date();
alert(d.getMinutes());
alert(d.getDay());
alert(d.getHours());*/
/*function soma(n1, n2){
    return n1+n2;
}*/
/*function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);

}
alert(soma(5, 10));
alert(setReplace("Vai Japão","Japão","Brasil"));*/
/*var validar=0
function validaidade(idade){
    if(idade>=18){
        validar=true
    }else{
        validar=false
    }return validar;
}
var idade=prompt("Qual sua idade");
validaidade(idade);
console.log(validar);*/
function clicou(){
   document.getElementById("agradecimento").innerHTML="<b>Obrigado por clicar</b>";

   //console.log(document.getElementById("agradecimento"))
   // alert("Obrigado por clicar");
}
function redirecionar(){
    window.open("http://globallabs.academy/");
    window.location.href="http://globallabs.academy/";
}
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML="Obrigado por passar o mouse";
    //alert("Trocar texto");
    elemento.innerHTML="Obrigado por passar o mouse";
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML="Passe o mouse aqui";
    elemento.innerHTML="passe o mouse aqui";
}
function load(){
    alert("pagina carregada");
}
function funcaochange(elemento){
    console.log(elemento.value);
}