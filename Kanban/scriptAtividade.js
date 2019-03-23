function getFase(num)
{
	if(num == 1){ return "Inception"; }
	else if(num == 2){ return "Elaboration"; }
	else if(num == 3){ return "Construction"; }
	else { return "Transition"; }
}

function getDisciplina(num)
{
	if(num == 1){ return "Business Modeling"; }
	else if(num == 2){ return "Requirements"; }
	else if(num == 3){ return "Analysis & Design"; }
	else if(num == 4){ return "Implementation"; }
	else if(num == 5){ return "Test"; }
	else if(num == 6){ return "Deployment"; }
	else if(num == 7){ return "Configuration & Change Management"; }
	else if(num == 8){ return "Project Management"; }
	else { return "Environment"; }
}

function atividadeObj(id, disciplina, fase, imagem, texto, papel){
	this.id = id
  this.fase = getFase(fase);
  this.disciplina = getDisciplina(disciplina);
  this.imagem = imagem;
	this.texto = texto;
	this.papel = papel;
}

var atividades = [];
var atv = new atividadeObj("11setadjustgoals", 1, 1, "src/setadjustgoals.png", "Set and Adjust Goals", " Business-Process Analyst");
atividades.push(atv);
atv = new atividadeObj("11detailbusinessentity", 1, 1, "src/detailbusinessentity.png","Detail a Business Entity","Business Designer");
atividades.push(atv);
atv = new atividadeObj("11structurebusinessusecasemodel", 1, 1, "src/structurebusinessusecasemodel.png","Structure the Business Use-Case Model","Business-Process Analyst");
atividades.push(atv);
atv = new atividadeObj("11definebusinessarchitecture", 1, 1, "src/definebusinessarchitecture.png","Define the Business Architecture","Business-Process Analyst");
atividades.push(atv);
atv = new atividadeObj("11defineautomationrequirements", 1, 1, "src/defineautomationrequirements.png","Define Automation Requirements","Business Designer");
atividades.push(atv);
atv = new atividadeObj("13reviewbusinessusecasemodel", 1, 3, "src/reviewbusinessusecasemodel.png", "Review the Business Use-Case Model", "Business-Model Reviewer");
atividades.push(atv);
atv = new atividadeObj("21capturecommonvocabulary", 2, 1, "src/capturecommonvocabulary.png","Capture a Common Vocabulary"," System Analyst");
atividades.push(atv);
atv = new atividadeObj("21detailsoftwarerequirements", 2, 1, "src/detailsoftwarerequirements.png","Detail the Software Requirements", "Requirements Specifier");
atividades.push(atv);
atv = new atividadeObj("21structureusecasemodel", 2, 1, "src/structureusecasemodel.png", "Structure the Use-Case Model", "System Analyst");
atividades.push(atv);
atv = new atividadeObj("21elicitstakeholderrequest", 2, 1, "src/elicitstakeholderrequest.png", "Elicit Stakeholder Requests", "System Analyst");
atividades.push(atv);
atv = new atividadeObj("22detailusecase", 2, 2, "src/detailusecase.png", "Detail a Use Case", "Requirements Specifier");
atividades.push(atv);
atv = new atividadeObj("22managedependencies", 2, 2, "src/managedependencies.png", "Manage Dependencies", "System Analyst");
atividades.push(atv);
atv = new atividadeObj("22reviewrequirements", 2, 2, "src/reviewrequirements.png", "Review Requirements", "Requirements Reviewer");
atividades.push(atv);
atv = new atividadeObj("22prototypeuserinterface", 2, 2, "src/prototypeuserinterface.png", "Prototype the User-Interface", " User-Interface Designer");
atividades.push(atv);
atv = new atividadeObj("31usecaseanalysis", 3, 1, "src/usecaseanalysis.png", "Use-Case Analysis", "Designer");
atividades.push(atv);
atv = new atividadeObj("32databasedesign", 3, 2, "src/databasedesign.png", "Database Design", "Database Designer");
atividades.push(atv);
atv = new atividadeObj("32classdesigner", 3, 2, "src/classdesigner.png", "Class Design", "Designer");
atividades.push(atv);
atv = new atividadeObj("32assessviabilityarchtecturalproofconcept", 3, 2, "src/assessviabilityarchtecturalproofconcept.png", "Assess Viability of Architectural Proof-of-Concept", "Software Architect");
atividades.push(atv);
atv = new atividadeObj("32describeruntimearchitecture", 3, 2, "src/describeruntimearchitecture.png", "Describe the Run-time Architecture", "Software Architect");
atividades.push(atv);
atv = new atividadeObj("32reviewarchitecture", 3, 2, "src/reviewarchitecture.png", "Review the Architecture", "Architecture Reviewer");
atividades.push(atv);
atv = new atividadeObj("33constructarchitecturalproofconcept", 3, 3, "src/constructarchitecturalproofconcept.png", "Construct Architectural Proof-of-Concept", "Software Architect");
atividades.push(atv);
atv = new atividadeObj("42plansystemsintegration", 4, 2, "src/plansystemsintegration.png", "Plan System Integration", "Integrator");
atividades.push(atv);
atv = new atividadeObj("42structureimplementationmodel", 4, 2, "src/structureimplementationmodel.png", "Structure the Implementation Model", "Software Architect");
atividades.push(atv);
atv = new atividadeObj("42implementcomponent", 4, 2, "src/implementcomponent.png", "Implement Component", "Implementer");
atividades.push(atv);
atv = new atividadeObj("42integratesystem", 4, 2, "src/integratesystem.png", "Integrate System", "Integrator");
atividades.push(atv);
atv = new atividadeObj("42reviewcode", 4, 2, "src/reviewcode.png", "Review Code", "Code Reviewer");
atividades.push(atv);
atv = new atividadeObj("43implementcomponent", 4, 3, "src/implementcomponent.png", "Implement Component", "Implementer");
atividades.push(atv);
atv = new atividadeObj("43integratesystem", 4, 3, "src/integratesystem.png", "Integrate System", "Integrator");
atividades.push(atv);
atv = new atividadeObj("43integratesubsystem", 4, 3, "src/integratesubsystem.png", "Integrate Subsystem", "Integrator");
atividades.push(atv);
atv = new atividadeObj("43reviewcode", 4, 3, "src/reviewcode.png", "Review Code", "Code Reviewer");
atividades.push(atv);
atv = new atividadeObj("43fixdefect", 4, 3, "src/fixdefect.png", "Fix a Defect", "Implementer");
atividades.push(atv);
atv = new atividadeObj("43performunittest", 4, 3, "src/performunittest.png", "Perform Unit Tests", "Implementer");
atividades.push(atv);
atv = new atividadeObj("44implementcomponent", 4, 4, "src/implementcomponent.png", "Implement Component", "Implementer");
atividades.push(atv);
atv = new atividadeObj("44performunittest", 4, 4, "src/performunittest.png", "Perform Unit Tests", "Implementer");
atividades.push(atv);
atv = new atividadeObj("44reviewcode", 4, 4, "src/reviewcode.png", "Review Code", "Code Reviewer");
atividades.push(atv);
atv = new atividadeObj("44integratesystem", 4, 4, "src/integratesystem.png", "Integrate System", "Integrator");
atividades.push(atv);
atv = new atividadeObj("44fixdefect", 4, 4, "src/fixdefect.png", "Fix a Defect", "Implementer");
atividades.push(atv);
atv = new atividadeObj("51defineassessmenttraceabilityneeds", 5, 1, "src/defineassessmenttraceabilityneeds.png", "Define Assessment and Traceability Needs", "Test Analyst");
atividades.push(atv);
atv = new atividadeObj("52identifytargetstest", 5, 2, "src/identifytargetstest.png", "Identify Targets of Test", "Test Analyst");
atividades.push(atv);
atv = new atividadeObj("52definetestabilityelements", 5, 2, "src/definetestabilityelements.png", "Define Testability Elements", "Test Designer");
atividades.push(atv);
atv = new atividadeObj("52definetestedetails", 5, 2, "src/definetestedetails.png", "Define Test Details", "Test Analyst");
atividades.push(atv);
atv = new atividadeObj("53implementtest", 5, 3, "src/implementtest.png", "Implement Test", "Tester");
atividades.push(atv);
atv = new atividadeObj("53analyzetestfailure", 5, 3, "src/analyzetestfailure.png", "Analyze Test Failure", "Tester");
atividades.push(atv);
atv = new atividadeObj("53definetestedetails", 5, 3, "src/definetestedetails.png", "Define Test Details", "Test Analyst");
atividades.push(atv);
atv = new atividadeObj("54implementtest", 5, 4, "src/implementtest.png", "Implement Beta Test", "Tester");
atividades.push(atv);
atv = new atividadeObj("54implementtest", 5, 4, "src/implementtest.png", "Implement Test", "Tester");
atividades.push(atv);
atv = new atividadeObj("54analyzetestfailure", 5, 4, "src/analyzetestfailure.png", "Analyze Test Failure", "Tester");
atividades.push(atv);
atv = new atividadeObj("54definetestedetails", 5, 4, "src/definetestedetails.png", "Define Test Details", "Test Analyst");
atividades.push(atv);
atv = new atividadeObj("62createproductartwork", 6, 2, "src/createproductartwork.png", "Create Product Artwork", "Graphic Artist");
atividades.push(atv);
atv = new atividadeObj("62writereleasenotes", 6, 2, "src/writereleasenotes.png", "Write Release Notes", "Deployment Manager");
atividades.push(atv);
atv = new atividadeObj("63developsupportmaterials", 6, 3, "src/developsupportmaterials.png", "Develop Support Materials", "Technical Writer");
atividades.push(atv);
atv = new atividadeObj("63writereleasenotes", 6, 3, "src/writereleasenotes.png", "Write Release Notes", "Deployment Manager");
atividades.push(atv);
atv = new atividadeObj("63developdeploymentplan", 6, 3, "src/developdeploymentplan.png", "Develop Deployment Plan", "Deployment Manager");
atividades.push(atv);
atv = new atividadeObj("64manageacceptancetest", 6, 4, "src/manageacceptancetest.png", "Manage Acceptance Test", "Deployment Manager");
atividades.push(atv);
atv = new atividadeObj("64verifymanufacturedproduct", 6, 4, "src/verifymanufacturedproduct.png", "Verify Manufactured Product", "Deployment Manager");
atividades.push(atv);
atv = new atividadeObj("64writereleasenotes", 6, 4, "src/writereleasenotes.png", "Write Release Notes", "Deployment Manager");
atividades.push(atv);
atv = new atividadeObj("71writecmplan", 7, 1, "src/writecmplan.png", "Write Configuration Management (CM) Plan", "Configuration Manager");
atividades.push(atv);
atv = new atividadeObj("72setupcmenvironment", 7, 2, "src/setupcmenvironment.png", "Set Up Configuration Management (CM) Environment", "Configuration Manager");
atividades.push(atv);
atv = new atividadeObj("72makechange", 7, 2, "src/makechange.png", "Make Changes", "Any Role");
atividades.push(atv);
atv = new atividadeObj("72createbaselines", 7, 2, "src/createbaselines.png", "Create Baselines", "Integrator");
atividades.push(atv);
atv = new atividadeObj("73makechange", 7, 3, "src/makechange.png", "Make Changes", "Any Role");
atividades.push(atv);
atv = new atividadeObj("73createbaselines", 7, 3, "src/createbaselines.png", "Create Baselines", "Integrator");
atividades.push(atv);
atv = new atividadeObj("74makechange", 7, 4, "src/makechange.png", "Make Changes", "Any Role");
atividades.push(atv);
atv = new atividadeObj("74createbaselines", 7, 4, "src/createbaselines.png", "Create Baselines", "Integrator");
atividades.push(atv);
atv = new atividadeObj("81planphasesiterations", 8, 1, "src/planphasesiterations.png", "Plan Phases and Iterations", "Project Manager");
atividades.push(atv);
atv = new atividadeObj("81defineprojectorganizationstaff", 8, 1, "src/defineprojectorganizationstaff.png", "Define Project Organization and Staffing", "Project Manager");
atividades.push(atv);
atv = new atividadeObj("81developqualityassuranceplan", 8, 1, "src/developqualityassuranceplan.png", "Develop Quality Assurance Plan", "Project Manager");
atividades.push(atv);
atv = new atividadeObj("81developiterationplan", 8, 1, "src/developiterationplan.png", "Develop Iteration Plan", "Project Manager");
atividades.push(atv);
atv = new atividadeObj("81monitorprojectstatus", 8, 1, "src/monitorprojectstatus.png", "Monitor Project Status", "Project Manager");
atividades.push(atv);
atv = new atividadeObj("81developbusinesscase", 8, 1, "src/developbusinesscase.png", "Develop Business Case", "Project Manager");
atividades.push(atv);
atv = new atividadeObj("81developriskmanagementplan", 8, 1, "src/developriskmanagementplan.png", "Develop Risk Management Plan", "Project Manager");
atividades.push(atv);
atv = new atividadeObj("81identifyassessrisks", 8, 1, "src/identifyassessrisks.png", "Identify and Assess Risks", "Project Manager");
atividades.push(atv);
atv = new atividadeObj("81reportstatus", 8, 1, "src/reportstatus.png", "Report Status", "Project Manager");
atividades.push(atv);
atv = new atividadeObj("82compilesoftwaredevelopmentplan", 8, 2, "src/compilesoftwaredevelopmentplan.png", "Compile Software Development Plan", "Project Manager");
atividades.push(atv);
atv = new atividadeObj("82developmeasurementplan", 8, 2, "src/developmeasurementplan.png", "Develop Measurement Plan", "Project Manager");
atividades.push(atv);
atv = new atividadeObj("82lifecyclemilestonereview", 8, 2, "src/lifecyclemilestonereview.png", "Lifecycle Milestone Review", "Project Reviewer");
atividades.push(atv);
atv = new atividadeObj("82monitorprojectstatus", 8, 2, "src/monitorprojectstatus.png", "Monitor Project Status", "Project Manager");
atividades.push(atv);
atv = new atividadeObj("82assessiteration", 8, 2, "src/assessiteration.png", "Assess Iteration", "Project Manager");
atividades.push(atv);
atv = new atividadeObj("82reportstatus", 8, 2, "src/reportstatus.png", "Report Status", "Project Manager");
atividades.push(atv);
atv = new atividadeObj("82identifyassessrisks", 8, 2, "src/identifyassessrisks.png", "Identify and Assess Risks", "Project Manager");
atividades.push(atv);
atv = new atividadeObj("82handleexceptionsproblems", 8, 2, "src/handleexceptionsproblems.png", "Handle Exceptions and Problems", "Project Manager");
atividades.push(atv);
atv = new atividadeObj("82developiterationplan", 8, 2, "src/developiterationplan.png", "Develop Iteration Plan", "Project Manager");
atividades.push(atv);
atv = new atividadeObj("83monitorprojectstatus", 8, 3, "src/monitorprojectstatus.png", "Monitor Project Status", "Project Manager");
atividades.push(atv);
atv = new atividadeObj("83assessiteration", 8, 3, "src/assessiteration.png", "Assess Iteration", "Project Manager");
atividades.push(atv);
atv = new atividadeObj("83reportstatus", 8, 3, "src/reportstatus.png", "Report Status", "Project Manager");
atividades.push(atv);
atv = new atividadeObj("83identifyassessrisks", 8, 3, "src/identifyassessrisks.png", "Identify and Assess Risks", "Project Manager");
atividades.push(atv);
atv = new atividadeObj("83handleexceptionsproblems", 8, 3, "src/handleexceptionsproblems.png", "Handle Exceptions and Problems", "Project Manager");
atividades.push(atv);
atv = new atividadeObj("83developiterationplan", 8, 3, "src/developiterationplan.png", "Develop Iteration Plan", "Project Manager");
atividades.push(atv);
atv = new atividadeObj("84assessiteration", 8, 4, "src/assessiteration.png", "Assess Iteration", "Project Manager");
atividades.push(atv);
atv = new atividadeObj("84reportstatus", 8, 4, "src/reportstatus.png", "Report Status", "Project Manager");
atividades.push(atv);
atv = new atividadeObj("84identifyassessrisks", 8, 4, "src/identifyassessrisks.png", "Identify and Assess Risks", "Project Manager");
atividades.push(atv);
atv = new atividadeObj("84handleexceptionsproblems", 8, 4, "src/handleexceptionsproblems.png", "Handle Exceptions and Problems", "Project Manager");
atividades.push(atv);
atv = new atividadeObj("84developiterationplan", 8, 4, "src/developiterationplan.png", "Develop Iteration Plan", "Project Manager");
atividades.push(atv);
atv = new atividadeObj("84projectacceptancereview", 8, 4, "src/projectacceptancereview.png", "Project Acceptance Review", "Project Reviewer");
atividades.push(atv);
atv = new atividadeObj("84prepareprojectcloseout", 8, 4, "src/prepareprojectcloseout.png", "Prepare for Project Close-Out", "Project Manager");
atividades.push(atv);
atv = new atividadeObj("84projectapprovalreview", 8, 4, "src/projectapprovalreview.png", "Project Approval Review", "Project Reviewer");
atividades.push(atv);
atv = new atividadeObj("84monitorprojectstatus", 8, 4, "src/monitorprojectstatus.png", "Monitor Project Status", "Project Manager");
atividades.push(atv);
atv = new atividadeObj("91selectacquiretools", 9, 1, "src/selectacquiretools.png", "Select and Acquire Tools", "Tool Specialist");
atividades.push(atv);
atv = new atividadeObj("92developmanualstyleguide", 9, 2, "src/developmanualstyleguide.png", "Develop Manual Styleguide", "Technical Writer");
atividades.push(atv);
atv = new atividadeObj("93supportdevelopment", 9, 3, "src/supportdevelopment.png", "Support Development", "System Administrator");
atividades.push(atv);
atv = new atividadeObj("93verifytoolconfigurationinstalation", 9, 3, "src/verifytoolconfigurationinstalation.png", "Verify Tool Configuration and Installation", "Tool Specialist");
atividades.push(atv);

function listarAtividades(){

	var concepcao = document.getElementById("CONCEPCAO");
	var atvconcepcao = atividades.filter(e => e.fase === "Inception");
	var string = "";
	for(var item of atvconcepcao){
		var color = "#F5F5F6";
		color = getColor(item.disciplina);
		var aux = "'" + item.imagem + "' ,'" + item.texto + "'";
		string = string + '<article class="kanban-entry grab" id="'+ item.id +'" draggable="true" onclick="showDetail('+ aux +');">' +
			'<div class="kanban-entry-inner">' +
				'<div class="kanban-label" style="background-color:' +color+ '">' +
					'<h2><a href="#">'+ item.texto +'</a></h2>' +
					'<p> Discipline: '+ item.disciplina +'.</p>' +
					'<p> Role: '+ item.papel +'.</p>' +
				'</div>' +
			'</div>' +
		'</article>';
	}
	concepcao.innerHTML = string;

	var elaboracao = document.getElementById("ELABORACAO");
	var atvelaboracao = atividades.filter(e => e.fase === "Elaboration");
	var string = "";
	for(var item of atvelaboracao){
		var color = "#F5F5F6";
		color = getColor(item.disciplina);
		var aux = "'" + item.imagem + "' ,'" + item.texto + "'";
		string = string + '<article class="kanban-entry grab" id="'+ item.id +'" draggable="true" onclick="showDetail('+ aux +');">' +
			'<div class="kanban-entry-inner">' +
				'<div class="kanban-label" style="background-color:' +color+ '">' +
					'<h2><a href="#">'+ item.texto +'</a></h2>' +
					'<p> Discipline: '+ item.disciplina +'.</p>' +
					'<p> Role: '+ item.papel +'.</p>' +
				'</div>' +
			'</div>' +
		'</article>';
	}
	elaboracao.innerHTML = string;

	var construcao = document.getElementById("CONSTRUCAO");
	var atvconstrucao = atividades.filter(e => e.fase === "Construction");
	var string = "";
	for(var item of atvconstrucao){
		var color = "#F5F5F6";
		color = getColor(item.disciplina);
		var aux = "'" + item.imagem + "' ,'" + item.texto + "'";
		string = string + '<article class="kanban-entry grab" id="'+ item.id +'" draggable="true" onclick="showDetail('+ aux +');">' +
			'<div class="kanban-entry-inner">' +
				'<div class="kanban-label" style="background-color:' +color+ '">' +
					'<h2><a href="#">'+ item.texto +'</a></h2>' +
					'<p> Discipline: '+ item.disciplina +'.</p>' +
					'<p> Role: '+ item.papel +'.</p>' +
				'</div>' +
			'</div>' +
		'</article>';
	}
	construcao.innerHTML = string;

	var transicao = document.getElementById("TRANSICAO");
	var atvtransicao = atividades.filter(e => e.fase === "Transition");
	var string = "";
	for(var item of atvtransicao){
		var color = "#F5F5F6";
		color = getColor(item.disciplina);
		var aux = "'" + item.imagem + "' ,'" + item.texto + "'";
		string = string + '<article class="kanban-entry grab" id="'+ item.id +'" draggable="true" onclick="showDetail('+ aux +');">' +
			'<div class="kanban-entry-inner">' +
				'<div class="kanban-label" style="background-color:' +color+ '">' +
					'<h2><a href="#">'+ item.texto +'</a></h2>' +
					'<p> Discipline: '+ item.disciplina +'.</p>' +
					'<p> Role: '+ item.papel +'.</p>' +
				'</div>' +
			'</div>' +
		'</article>';
	}
	transicao.innerHTML = string;
}

function getColor(disciplina){
	if(disciplina == "Business Modeling"){ return "#ef9a9a"; } //red
	else if(disciplina == "Requirements"){ return "#FFCC80"; } //orange
	else if(disciplina == "Analysis & Design"){ return "#90CAF9"; } //blue
	else if(disciplina == "Implementation"){ return "#A5D6A7"; } //green
	else if(disciplina == "Test"){ return "#FFF59D"; } //yellow
	else if(disciplina == "Deployment"){ return "#9FA8DA"; } //indigo
	else if(disciplina == "Configuration & Change Management"){ return "#FFAB91"; } //deeporange
	else if(disciplina == "Project Management"){ return "#80CBC4"; } //teal
	else if(disciplina == "Environment"){ return "#F48FB1"; } //pink
}

function showDetail(imagem, texto){
	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementById('myImg');
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
	}
	modal.style.display = "block";
	modalImg.src = imagem;
	captionText.innerHTML = texto;
}
