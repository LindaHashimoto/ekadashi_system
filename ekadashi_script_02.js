var alimento = "";
var dados = "";
const pega_json = JSON.parse('{"alimentos_permitidos":["batata inglesa", "batata baroa", "batata doce", "inhame", "mandioca", "abobora", "pepino", "rabanete", "limao", "abacate", "azeitonas", "coco"], "alimentos_proibidos": ["pimentao", "tomate", "soja"]}');

const permitidos = pega_json.alimentos_permitidos;
const proibidos = pega_json.alimentos_proibidos;

function pega_valor(){
	alimento = document.getElementById("busca_alimento").value;
	var pode = "";
	for(var i = 0; i < permitidos.length;i++){
		for(var j = 0; j < proibidos.length; j++){
			
			if(alimento == permitidos[i]){
				
				pode += (document.getElementById("resposta").innerHTML = "Alimento permitido!");

			}else if(alimento == proibidos[j]){
				
				pode += (document.getElementById("resposta").innerHTML = "Alimento proibido!");
			}
		}

	}
	return pode;
	
}

function adiciona_item(){

	var recebe_alimento = document.createElement("INPUT");
	var botao = document.createElement("BUTTON");
	botao.innerHTML = "Adicionar alimento";	
	var novo_alimento = document.getElementById("recebe_alimento").value;
	document.body.appendChild(recebe_alimento);
}

/*For e if estão funcionando. Próximas alterações:
melhorar o css
Upar no github
Fazer isto em React e React Native
Upar a versão React e React Native no github
Criar demo
Upar no Google Play
*/

