

function solicitar(){
	

	var ibm = document.getElementById("ibm");
	var pcomum = document.getElementById("pcomum");
	var pdual = document.getElementById("pdual");
	var tcomum = document.getElementById("tcomum");
	var tdual = document.getElementById("tdual");
	var adesivos = document.getElementById("adesivos");

	var dados = JSON.parse(localStorage.getItem("dadosSolicitacao"));

	if (dados == null){
		localStorage.setItem("dadosSolicitacao","[]");
		dados = [];
	}

	var registro = {
		ibm: ibm.value,
		pcomum: pcomum.value,
		pdual: pdual.value,
		tcomum: tcomum.value,
		tdual: tdual.value,
		adesivos: adesivos.value
	}

	dados.push(registro);

	localStorage.setItem("dadosSolicitacao",JSON.stringify(dados));
	alert("Pendencia Enviada");

		dados.value = "";
		window.location.href = "index.html";
		
}