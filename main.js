const memory = [];
let playerChoice = [];

$('button').click(() => {
    computerTurn()
    $('button').addClass('none')
})

$(".player-button").click(function() {
  playerChoice.push(parseInt($(this).attr("id")));
  $(this).css('opacity', '.3')
  setTimeout(() => {
      $(this).css('opacity', '1')
  }, 300)
        compareTwoArrays(); 
});

const computerTurn = () => {
    const random = Math.floor(Math.random() * 4 + 1);
    memory.push(random);
    shine()
  };

const shine = () => {
    memory.forEach((square, index) => {
        setTimeout(() => {
            console.log(square)
            styleChosenSquares(square)
        }, 1000 * index)
    })
}

const styleChosenSquares = (choice) => {
    const chosenSquare = $(`#${choice}`)
    chosenSquare.css('opacity', '.3')
    setTimeout(() => {
        chosenSquare.css('opacity', '1')
    }, 600)
}

const compareTwoArrays = () => {
  playerChoice.forEach((arr1, i) => {
    if (arr1 === memory[i]) {
      return;
    } else {
      $("body").html(`<div>YOU LOSE</div>
        <button onClick="location.reload()">Play again?</button>`);
    }
  });
  if (playerChoice.length === memory.length) {
    setTimeout(() => {
        playerChoice = [];
    computerTurn();
    }, 1000)
  }
};
