//Arrow   13/02
//------------------------------------------------------------------------------
// a arrow é uma function com sintaxe reduzida, ou seja, ela dimuiu o tamanho da nossa função, mas mantém as mesmas funcionalidades

// import React, { Component } from 'react';

// class Arrow extends Component {
//   state = {
//     alunos: [
//       {
//         nome: "Thiago Augusto",
//         idade: 16,
//         amigos: ["Jonathan", "Lucas", "Mariana"]
//       },
//       {
//         nome: "gustavo Henrique",
//         idade: 21,
//         amigos: ["Grazy", "Letícia", "Karina"]
//       }
//     ]

//   }

//   //Arrow function ()=>{} usamos o sinal => para criá-la, o que lembra uma flecha, fazendo jus ao n/ome "arrow function (função de seta) "

//   //ex1
//   Texto = () => {
//     return "Segundou!!"
//   }

//   //ex2
//   Conta = (x) => {
//     return x * 2
//   }

//   //ex3

//   Triplo = (n1) => {
//     return n1 * 3
//   }

//   //desestruturação

//   exibirNome = () => {
//     const { alunos } = this.state; //desestruturando.
// // o que se ganha desestruturando
//     return (
//       <>
//         <ul>
//           {/* são as mesmas coisas */}
//           <li> {alunos[0].nome} </li>
//           <li> {this.state.alunos[0].nome} </li>
//         </ul>
//       </>
//     )
//   }

//   exibirIdade = () => {
//     const { alunos } = this.state;
//     return (
//       <>
//         <h2> {alunos[1].idade} </h2>
//       </>
//     )
//   }

//   //MAP - Mapeamento de uma array

//   render() {
//     return (
//       <>
//         {/* <h1> Boa noite! </h1>
//       <h2> Segundou!! </h2> */}
//         <ul>
//           <li> {this.state.alunos[0].idade} </li>
//           <li> {this.state.alunos[1].nome} </li>
//         </ul>
//         <h2> {this.Texto()} </h2>
//         <h2> {this.Conta(6)} </h2>
//         <h2> {this.Triplo(12)}  </h2>

//         {this.exibirNome()}
//         {this.exibirIdade()}

//         {/* MAP */}
//         <div>

//           {/* {this.state.alunos.map((item) => (
//             <ul>
//               <li> nome: {item.nome} </li>
//               <li> idade: {item.idade} </li>
//             </ul>
//           ))} */}

//           {this.state.alunos.map((item) => (
//             <div>
//               <h1> Amigos: </h1>
//               <h2> {item.amigos[1]} </h2>
//               <h2> {item.amigos[2]} </h2>
//             </div>
//           ))}

// {this.exibirNome()}
//         </div>
//       </>
//     )
//   }
// }

// export default Arrow;

// import React, { Component } from "react";

// class App extends Component {
//   state = {
//     frutas: [
//       {
//         bolsa1: ["abacaxi", "graviola"]
//       },
//       {
//         bolsa2: ["melão", "manga"]
//       }
//     ]
//   };

//   render() {
//     return (
//       <div>
//         {this.state.frutas.map((item) => (
//           <div>
//             <p> {item.bolsa1} </p>
//             <p> {item.bolsa2} </p>
//           </div>
//         ))}
//         <h2> {this.state.frutas[0].bolsa1[0]} </h2>
//         <h2> {this.state.frutas[1].bolsa2[1]} </h2>
//       </div>
//     );
//   }
// }

