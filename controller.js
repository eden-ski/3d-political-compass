$(document).ready(function () { // jQuery detects state of readiness
	var questionNumber = 0;
	var questionBank = new Array();
	var stage = "#game1";
	var stage2 = new Object;
	var questionLock = false;
	var numberOfQuestions;
	var scores = [0, 0, 0];
	var score = 0;

	$.getJSON('activity.json', function(data) {
		for (i = 0; i < data.quizlist.length; i++) {
			questionBank[i] = new Array;
			questionBank[i][0] = data.quizlist[i].question;
			questionBank[i][1] = data.quizlist[i].option1;
			questionBank[i][2] = data.quizlist[i].option2;
			questionBank[i][3] = data.quizlist[i].option3;
			questionBank[i][4] = data.quizlist[i].option4;
		}
		numberOfQuestions = questionBank.length;
		displayQuestion();
	})//gtjson

	function displayQuestion() {
		$(stage).append('<div class="questionText">'
			+ questionBank[questionNumber][0] + '</div><div id="1" class="option">'
			+ "Strongly agree" + '</div><div id="2" class="option">'
			+ "Agree" +'</div><div id="3" class="option">'
			+ "Disagree" + '</div><div id="4" class="option">'
			+ "Strongly disagree" +'</div>');

		$('.option').click(function() {
		  if (questionLock == false) {
				questionLock = true;
				var weights = questionBank[questionNumber][parseInt(this.id)];
				console.log("scores + weights:");
				console.log(scores);
				console.log(weights);
				for (i = 0; i < 3; i++) {
					scores[i] += weights[i];
				}
				console.log("scores after:");
				console.log(scores);
				var id = parseInt(this.id);
				score += id;
				setTimeout(function() {changeQuestion()}, 1000);
			}
		})
	}

	function changeQuestion() {
		questionNumber++;
	 	if (stage == "#game1") {
			stage2 = "#game1";
			stage = "#game2";
		} else {
			stage2 = "#game2";
			stage = "#game1";
		} if (questionNumber < numberOfQuestions) {
			displayQuestion();
		} else {
			endQuiz();
		}
		$(stage2).animate({"right": "+=800px"}, 300, function() {$(stage2)
			.css('right','-800px'); $(stage2).empty();});
		$(stage).animate({"right": "+=800px"}, 300,
			function() { questionLock = false;});
	}

	function endQuiz() {
		for (i = 0; i < scores.length; i++) {
			scores[i] = Math.round((scores[i] + Number.EPSILON) * 100) / 100;
			console.log(scores[i]);
		}
		var url = "http://localhost/resultsprocessing.php/?e=" + scores[0] + "&s=" + scores[1]
			+ "&p=" + scores[2];
		window.location.assign(url);
		/* $(stage).append('<div class="questionText">You have finished the quiz!<br>'
			+ '<br>Total questions: ' + numberOfQuestions + '<br>Correct answers: '
			+ score + '</div>'); */
	}
});//doc ready
