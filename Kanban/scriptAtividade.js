function getFase(num)
{
	if(num == 1){ return "Concep��o"; }
	else if(num == 2){ return "Elabora��o"; }
	else if(num == 3){ return "Contru��o"; }
	else { return "Integra��o"; }
}

function getDisciplina(num)
{
	if(num == 1){ return "Modelagem de Neg�cio"; }
	else if(num == 2){ return "Requisitos"; }
	else if(num == 3){ return "An�lise e Design"; }
	else if(num == 4){ return "Implementa��o"; }
	else if(num == 5){ return "Teste"; }
	else if(num == 6){ return "Implanta��o"; }
	else if(num == 7){ return "Gerenciamento de Configura��o e Mudan�a"; }
	else if(num == 8){ return "Gerenciamento de Projeto"; }
	else { return "Ambiente"; }
}

var atividades = [];

function atividadeObj(id, fase, disciplina, papel, entrada, entregavel){
	this.id = id
    this.fase = getFase(fase);
    this.disciplina = getDisciplina(disciplina);
    this.papel = papel;
	this.entrada = entrada;
	this.entregavel = entregavel;
}

var atv = new atividadeObj(1, 1, 1, "tester", "docum", "saidinha");
atividades.push(atv);

function listarAtividades(){
	
}