

//Exercício de Meia Onda
function meiaonda() {
  
  //Variáveis  
  let V1 = document.querySelector('#V1').value; 
  let N1 = document.querySelector('#N1').value;
  let N2 = document.querySelector('#N2').value;
  let C = document.querySelector('#C').value;
  let RL = document.querySelector('#RL').value;
  let F = 60;

    //Tensão de Pico no Capacitor
    //1 Passo
     let V2 = (V1 * N2) / N1;
    
    //2 Passo
     let V2p = V2 * Math.sqrt(2);
    
    //3 Passo
     let Vcp = V2p - 0.7;

    //Tensão de Ripple
     let I = Vcp / (RL * 1000);
     let Vond = I / (F * (C * Math.pow(10, -6)));

    //Tensão média na carga
     let Vmax = Vcp;
     let Vmin = Vcp - Vond;
     let Vmed = (parseFloat(Vmax) + parseFloat(Vmin)) / 2;

    //Mostrar resultados/valores
    document.querySelector('#res').innerHTML = V2.toFixed(2) + " V";
    document.querySelector('#res1').innerHTML = V2p.toFixed(2) + " V";
    document.querySelector('#res2').innerHTML = Vcp.toFixed(2) + " V";
    document.querySelector('#res4').innerHTML = Vond.toFixed(2) + " V";
    document.querySelector('#res7').innerHTML = Vmed.toFixed(2) + " V";
}


//Exercício de Center Tape
function centertape() {

    //Variáveis  
     let V1 = document.querySelector('#V1').value; 
     let N1 = document.querySelector('#N1').value;
     let N2 = document.querySelector('#N2').value;
     let C = document.querySelector('#C').value;
     let RL = document.querySelector('#RL').value;
     let F = 60;

    //Tensão de pico capacitor
    //1 Passo
     let V2 = (V1 * N2) / N1;
    
    //2 Passo
     let V2p = V2 * Math.sqrt(2);
    
    //3 Passo
     let Vcp = (V2p / 2) - 0.7;

    //Tensão de Ripple
     let I = Vcp / (RL * 1000);
     let Vond = I / ((F * 2) * (C * Math.pow(10, -6)));   

    //Tensão média na carga
     let Vmax = Vcp;
     let Vmin = Vcp - Vond;
     let Vmed = (parseFloat(Vmax) + parseFloat(Vmin)) / 2;

    //Mostrar resultados/valores
    document.querySelector('#res').innerHTML = V2.toFixed(2) + " V";
    document.querySelector('#res1').innerHTML = V2p.toFixed(2) + " V";
    document.querySelector('#res2').innerHTML = Vcp.toFixed(2) + " V";
    document.querySelector('#res4').innerHTML = Vond.toFixed(2) + " V";
    document.querySelector('#res7').innerHTML = Vmed.toFixed(2) + " V";


}

//Exercício de Ponte
function ponte() {
    
     //Variáveis  
      let V1 = document.querySelector('#V1').value; 
      let N1 = document.querySelector('#N1').value;
      let N2 = document.querySelector('#N2').value;
      let C = document.querySelector('#C').value;
      let RL = document.querySelector('#RL').value;
      let F = 60;

     //Tensão de pico capacitor
     //1 Passo
      let V2 = (V1 * N2) / N1;
      
     //2 Passo
     let V2p = V2 * Math.sqrt(2);

     //3 Passo
     let Vcp = V2p - 1.4; 

    //Tensão de Ripple
      let I = Vcp / (RL * 1000);
      let Vond = I / ((2 * F) * (C * Math.pow(10, -6)));  
    
    //Tensão média na carga
     let Vmax = Vcp;
     let Vmin = Vcp - Vond;
     let Vmed = (parseFloat(Vmax) + parseFloat(Vmin)) / 2;

    //Mostrar resultados/valores
    document.querySelector('#res').innerHTML = V2.toFixed(2) + " V";
    document.querySelector('#res1').innerHTML = V2p.toFixed(2) + " V";
    document.querySelector('#res2').innerHTML = Vcp.toFixed(2) + " V";
    document.querySelector('#res4').innerHTML = Vond.toFixed(2) + " V";
    document.querySelector('#res7').innerHTML = Vmed.toFixed(2) + " V";


}

//Exercício de Malha
function malha() {

  //Variáveis
    let E1 = document.querySelector('#E1').value;
    let E2 = document.querySelector('#E2').value;
    let R1 = document.querySelector('#R1').value;
    let R2 = document.querySelector('#R2').value;
    let R3 = document.querySelector('#R3').value;
    let R4 = document.querySelector('#R4').value;
    let R5 = document.querySelector('#R5').value;
    let R6 = document.querySelector('#R6').value;
    let i1;
    let i2;
    let i3;

  //Descobrindo I1
  //i1 = E1  / (((R2 * R2) / - R5 - R6 - R2) + R1 + R2 + R3 + R4);
  var Rtotal = (parseFloat(R1) + parseFloat(R2) + parseFloat(R3) + parseFloat(R4)).toFixed(2);
  let div = ((R2*R2) / (- R5 - R6 - R2)).toFixed(2);
  i1 = (E1 / (parseFloat(Rtotal) + parseFloat(div))).toFixed(2);

  //Descobrindo o I2
  //i2 = ((- E2 + (R2 * i1)) / (- R5 - R6 - R2));
  let soma = - parseFloat(E2) + (parseFloat(R2) * parseFloat(i1));
  i2 = - soma / (- R5 - R6 - R2);

  //Descobrindo I3
  i3 = i1 - i2;

  //Potência do Resistores
  let P1 = R1 * Math.pow(i1, 2);
  let P2 = R2 * Math.pow(i3, 2);
  let P3 = R3 * Math.pow(i1, 2);
  let P4 = R4 * Math.pow(i1, 2);
  let P5 = R5 * Math.pow(i2, 2);
  let P6 = R6 * Math.pow(i2, 2);
  let PE1 = E1 * Math.pow(i1, 2);
  let PE2 = E2 * Math.pow(i2, 2);



  document.querySelector('#res10').innerHTML = i1 + " A";
  document.querySelector('#res11').innerHTML = i2.toFixed(2) + " A";
  document.querySelector('#res12').innerHTML = i3.toFixed(2) + " A";
  document.querySelector('#res14').innerHTML = P1.toFixed(2) + " W";
  document.querySelector('#res15').innerHTML = P2.toFixed(2) + " W";
  document.querySelector('#res16').innerHTML = P3.toFixed(2) + " W";
  document.querySelector('#res17').innerHTML = P4.toFixed(2) + " W";
  document.querySelector('#res18').innerHTML = P5.toFixed(2) + " W";
  document.querySelector('#res19').innerHTML = P6.toFixed(2) + " W";
  document.querySelector('#res20').innerHTML = PE1.toFixed(2) + " W";
  document.querySelector('#res21').innerHTML = PE2.toFixed(2) + " W";

}

//function limpar1(target) {
  

  //Input's
  //document.querySelector('#V1').reset();
  //document.querySelector('#N1').innerHTML = "";
  //document.querySelector('#N2').innerHTML = "";
  //document.querySelector('#C').innerHTML = "";
  //document.querySelector('#RL').innerHTML = "";

  //Resultados
  //document.querySelector('#res').innerHTML = "";
  //document.querySelector('#res1').innerHTML = "";
 // document.querySelector('#res2').innerHTML = "";
  //document.querySelector('#res4').innerHTML = "";
 // document.querySelector('#res7').innerHTML = "";
  

//}