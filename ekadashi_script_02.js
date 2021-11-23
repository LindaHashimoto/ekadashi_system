var alimento = "";
var dados = "";
const pega_json = JSON.parse('{"alimentos_permitidos":["batata inglesa", "batata baroa", "batata doce", "inhame", "mandioca", "abobora", "pepino", "rabanete", "limao", "abacate", "azeitonas", "coco", "trigo mourisco", "oleo de coco", "azeite de oliva", "oleo de girassol","acucar mascavo", "acucar cristal nao refinado", "acucar demerara", "acucar de coco", "acucar de beterraba","leite fresco", "queijo sem coalho", "manteiga", "ghee", "gengibre fresco", "acafrao fresco", "pimenta do reino preta", "sal","pimenta preta", "tumerique fresco", "amendoim","coentro verde", "hortela verde", "salsinha verde", "curcuma"], "alimentos_proibidos": ["pimentao", "tomate", "soja", "arroz", "trigo", "cevada", "grao de bico", "ervilha","lentilha", "milho", "mostarda", "gergelim", "flocos de aveia", "flocos de arroz", "farinha de trigo", "farinha integral", "farinha de rosca", "po de arroz", "po de cereal", "oleo de soja", "oleo de milho", "oleo de gergelim", "amido de milho", "refrigerante", "sorvete", "semente de gergelim", "semente de mostarda", "semente de cominho", "cardamomo", "semente de papoula", "semente de kalonji", "semente de ajwain", "berinjela", "couve flor", "brocolis", "pimentao", "beterraba", "pepino amargo", "abobora branca", "cabaca", "toroi e kunli", "aspargo", "quiabo", "aipo", "salsao", "flor da bananeira", "champignon", "espinafre", "salsa", "coentro", "couve", "bicarbonato de sodio", "fermento em po"]}');

const permitidos = pega_json.alimentos_permitidos;
const proibidos = pega_json.alimentos_proibidos;

function pega_valor(){
	alimento = (document.getElementById("busca_alimento").value).toLowerCase();
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
Fazer isto em React e React Native
Upar a versão React e React Native no github
Criar demo
Upar no Google Play
*/

