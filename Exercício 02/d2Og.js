let numOfStudents = Number(prompt('Digite o número de estudantes'));

let estudantes = [];

let lista = [];

let media = function (n1, n2) {
  return (n1 + n2) / 2;
}

//Solicitação e atribuição dos prompts
for (let i = 0; i < numOfStudents; i++) {
  let nome = prompt('Digite o seu nome:');
  let nota1 = Number(prompt('Digite a primeira nota'));
  let nota2 = Number(prompt('Digite a segunda nota'));

  estudantes.push({
    nome: nome,
    n1: nota1,
    n2: nota2,
    media: media(nota1, nota2)
  });
}

//iteração para exibição
for (const estudante of estudantes) {
  if (estudante.media >= 7) {
    alert(`A média do(a) aluno(a) ${estudante.nome} é: ${estudante.media} \n
      Parabéns, ${estudante.nome}! Você foi aprovado(a) `)
  } else {
    alert(`A média do(a) aluno(a)${estudante.nome} é: ${estudante.media} \n
      Não foi dessa vez, ${estudante.nome}! Tente novamente`)
  }
}

