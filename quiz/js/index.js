var myQuestions = [
	{
		question: "No Xadrez existe uma única peça que pode pular outras peças para chegar à um ponto do tabuleiro, que peça é essa? ",
		answers: {
			a: 'Bispo ',
			b: 'Cavalo',
			c: 'Rainha',
			d: 'Torre'
		},
		correctAnswer: 'b'
	},
	{
		question: "Qual país foi governado pelo ditador Antônio de  Oliveira Salazar?",
		answers: {
			a: 'Espanha',
			b: ' Venezuela ',
			c: 'Cuba',
			d: 'Portugal'
		},
		correctAnswer: 'd'
	},
	{
		question: "O lema 50 anos em 5 foi idealizado por qual político? ",
		answers: {
			a: 'Getúlio Vargas',
			b: 'Luís Inácio Lula da Silva',
			c: 'Juscelino Kubitschek',
			d: 'Fernando Collor'
		},
		correctAnswer: 'c'
	},

	{
		question: "Qual o nome da máquina de mensagens criptografadas utilizada pela Alemanha Nazista durante a segunda guerra mundial? ",
		answers: {
			a: 'Stroheim ',
			b: 'Enigma',
			c: 'Doppelgänger',
			d: 'CodeBuster'
		},
		correctAnswer: 'b'
	},

	{
		question: "Nos contos, qual o nome da lendária espada empunhada pelo Rei Arthur? ",
		answers: {
			a: ' Soulcalibur ',
			b: 'Excalibur',
			c: ' Excaliburn ',
			d: 'Xcalibur '
		},
		correctAnswer: 'b'
	},

	{
		question: "Qual desses animais é mais perigoso para o ser humano?",
		answers: {
			a: 'Leão',
			b: 'Tigre',
			c: 'Sucuri',
			d: 'Aranha Armadeira'
		},
		correctAnswer: 'd'
	},

	{
		question: "Na mitologia chinesa existe uma figura conhecida  como Deus macaco, qual seu nome?  ",
		answers: {
			a: ' Sun Wukong  ',
			b: 'Ne Zha ',
			c: ' Lu Bu ',
			d: 'Pan ku '
		},
		correctAnswer: 'a'
	},


	{
		question: " Qual a verdadeira cor do cabelo do Cascão de Turma da Mônica? ",
		answers: {
			a: ' Preto ',
			b: ' Castanho claro ',
			c: ' Castanho escuro ',
			d: 'Loiro '
		},
		correctAnswer: 'd'
	},

	{
		question: " Segundo a mitologia nórdica, a série de acontecimentos que leva ao fim dos tempos é chamada de:",
		answers: {
			a: '  Ragnarok ',
			b: 'Sentença final ',
			c: ' Valhalla ',
			d: 'Guerra dos 9 reinos'
		},
		correctAnswer: 'a'
	},

	{
		question: "Na mitologia japonesa existe a história de uma princesa que foi levada para a lua, qual o nome da princesa?",
		answers: {
			a: ' Momotaro ',
			b: 'Kaguya',
			c: ' Tsukasa  ',
			d: 'Urashima '
		},
		correctAnswer: 'b'
	}

];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// precisaremos de um lugar para armazenar a saída e as opções de resposta
		var output = [];
		var answers; // poderia ter dado outro nome, alem do mais, eu mesmo me confundi :/

		// para cada questão
		for(var i=0; i<questions.length; i++){
			
			// mas, primeiro resetamos a lista de questões
			answers = [];

			// e aqui faremos para cada resposta na questão.
			for(letter in questions[i].answers){

				// Aqui será escrito para html para usar o Radio.
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					//	+ letter + ') ' vou deixar a letra comentada, porque achei melhor assim
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			// add this question and its answers to the output
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		// finally combine our output list into one string of html and put it on the page
		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
			
		
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		
		var userAnswer = '';
		var numCorrect = 0;
		
		
		for(var i=0; i<questions.length; i++){

			// agora ele vai virar a letra que esta marcada.
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			
			
			if(userAnswer===questions[i].correctAnswer){
				
				numCorrect++;
				
				
				answerContainers[i].style.color = 'lightgreen';
			}
			
			else{
				
				answerContainers[i].style.color = 'red';
			}
		}

			
			resultsContainer.innerHTML = numCorrect + ' de ' + questions.length;
		}

	// show questions right away
	showQuestions(questions, quizContainer);

	// on submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
