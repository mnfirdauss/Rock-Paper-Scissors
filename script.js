const game = () => {
	//initial score
	let pScore = 0;
	let cScore = 0;

	//Game
	const playMatch = () => {
		const options = document.querySelectorAll(".options button");
		const playerHand = document.querySelector(".player-hand");
		const computerHand = document.querySelector(".computer-hand");
		const hands = document.querySelectorAll(".hands img");

		hands.forEach(hand => {
			hand.addEventListener("animationend", function() {
				this.styleMedia.animation = "";
			});
		});

		//opsi komputer
		const computerOption = ["Rock", "Paper", "Scissors"];

		options.forEach(option => {
			option.addEventListener("click", function() {
				const computerNumber = Math.floor(Math.random() * 3); //cari index untuk computerOptions
				const computerChoice = computerOption[computerNumber];

				compareHands(this.textContent, computerChoice);
				//ganti gambar
				playerHand.src = `./image/${this.textContent}.png`;
				computerHand.src = `./image/${computerChoice}.png`;
			});
		});
	}

	const updateScore = () => {
		const playerScore = document.querySelector(".player-score p");
		const computerScore = document.querySelector(".computer-score p");
		playerScore.textContent = pScore;
		computerScore.textContent = cScore;
	};

	const compareHands = (playerChoice, computerChoice) => {
		const opt_text = document.querySelector(".opt_text");
		if (playerChoice === computerChoice) {
			opt_text.textContent = "It's a tie";
			return;
			}

		if (playerChoice === "Rock") {
			if (computerChoice === "Paper") {
				opt_text.textContent = "Computer Wins";
				cScore++;
				updateScore();
				return;
			} else {
				opt_text.textContent = "Player Wins";
				pScore++;
				updateScore();
				return;
			}
		}
		if (playerChoice === "Paper") {
			if (computerChoice === "Scissors") {
				opt_text.textContent = "Computer Wins";
				cScore++;
				updateScore();
				return;
			} else {
				opt_text.textContent = "Player Wins";
				pScore++;
				updateScore();
				return;
			}
		}
		if (playerChoice === "Scissors") {
			if (computerChoice === "Rock") {
				opt_text.textContent = "Computer Wins";
				cScore++;
				updateScore();
				return;
			} else {
				opt_text.textContent = "Player Wins";
				pScore++;
				updateScore();
				return;
			}
		}
	}

	playMatch();
};

game();

