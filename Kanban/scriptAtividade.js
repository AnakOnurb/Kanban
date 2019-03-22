function getFase(num)
{
	if(num == 1){ return "Concepção"; }
	else if(num == 2){ return "Elaboração"; }
	else if(num == 3){ return "Contrução"; }
	else { return "Integração"; }
}

function getDisciplina(num)
{
	if(num == 1){ return "Modelagem de Negócio"; }
	else if(num == 2){ return "Requisitos"; }
	else if(num == 3){ return "Análise e Design"; }
	else if(num == 4){ return "Implementação"; }
	else if(num == 5){ return "Teste"; }
	else if(num == 6){ return "Implantação"; }
	else if(num == 7){ return "Gerenciamento de Configuração e Mudança"; }
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