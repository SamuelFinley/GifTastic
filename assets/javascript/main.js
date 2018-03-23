$(document).ready(() => {

  let queryURL;

  let config = {
    apiKey: '&api_key=7IvkmXh1DwPHidKwAZmY6eRK8eSWkYMk&limit=',
    URL: 'https://api.giphy.com/v1/gifs/search?q=',
    limit: 10,
  }

  // $.ajax({
  //   url: queryURL,
  //   method: "GET"
  // }).then(function(response) {
  //   console.log(response);
  // });

  $('#submit').click(() => {
    //$('#topicInput').prop('value');
    topics($('#topicInput').prop('value'));
  });

  // $('.topic').onclick(function () {
  //   console.log($(this).attr('value'));
  //   queryURL = config.URL + $(this).attr('value') + config.apiKey + config.limit;
  // });
  function create (clss, src) {
    let element = document.createElement('IMG');
    element.setAttribute('class', clss);
    element.setAttribute("src", src);
    element.setAttribute("alt", "The Pulpit Rock");
    document.getElementsByClassName('gifArea')[0].appendChild(element);
  }

//   function removeElement(clss) {
//     Removes an element from the document
//     var element = document.getElementsByClassName(clss);
//     console.log(element)
//     $(clss).remove();
//     while (node.hasChildNodes()) {
//       node.removeChild(node.lastChild);
//   }
//     element.parentNode.removeChild(element);
// }

//function topicClick() 

  function topics(val) {
    let element = document.createElement('BUTTON');
    element.setAttribute('class', 'topic');
    //element.setAttribute('type', 'button');
    element.innerHTML = val;
    element.value = val;
    element.onclick = function () {
      if (document.getElementsByClassName('gif')[0]) {
        $('.gif').remove();
      }
    console.log($(this).attr('value'));
    queryURL = config.URL + $(this).attr('value') + config.apiKey + config.limit;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      let gifs = response.data;
      console.log(gifs);
      gifs.forEach(gif => {
        create ('gif', gif.images.fixed_height_small.url);
      });
      console.log(response.data);
    });
    }
    document.getElementsByClassName('topicArea')[0].appendChild(element);
};
      // $.ajax({
      //   url: queryURL,
      //   method: "GET"
      // })
      //   .then(function(response) {
      //     var results = response.data;
      //     for (var i = 0; i < results.length; i++) {

      //       if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
      //         var gifDiv = $("<div class='item'>");
      //         var rating = results[i].rating;
      //         var p = $("<p>").text("Rating: " + rating);
      //         var personImage = $("<img>");

      //         personImage.attr("src", results[i].images.fixed_height.url);

      //         gifDiv.append(p);
      //         gifDiv.append(personImage);

      //         $("#gifs-appear-here").prepend(gifDiv);
      //       }
      //     }
      //   });
    // const names = ['#button1', '#button2', '#button3', '#button4'];
    // const letters = ['A: ', 'B: ', 'C: ', 'D: ']
    // let n = 0;
    // let num = 10;
    // let time;
    // let time1;
    // let score = {
    //     correct: 0,
    //     incorrect: 0,
    // }
    // const trivial = [{
    //     question: '"Call me Ishmael" is the opening line from what novel?',
    //     answer: 'Moby Dick',
    //     idx: 2,
    //     choices: ['War and Peace', 'Moby Dick', 'Typee', 'The Bible']
    // },{
    //     question: 'What is the national sport of Japan?',
    //     answer: 'Sumo',
    //     idx: 1,
    //     choices: ['Sumo', 'Baseball', 'Snowboarding', 'Soccer']
    // },{
    //     question: 'What is the only bird known to fly backwards?',
    //     answer: 'Hummingbirds',
    //     idx: 1,
    //     choices: ['Hummingbirds', 'Seagulls', 'Owls', 'Velociraptors']
    // },{
    //     question: 'If you were in the city of Turin, what country would you be in?',
    //     answer: 'Italy',
    //     idx: 4,
    //     choices: ['France', 'Czech Republic', 'Russia', 'Italy']
    // },{
    //     question: "What is the capital city of Canada's Yukon territory?",
    //     answer: 'Whitehorse',
    //     idx: 3,
    //     choices: ['Greyhorse', 'Bluehorse', 'Whitehorse', 'horse']
    // },{
    //     question: 'In our solar system, which planet has the shortest day?',
    //     answer: 'Jupiter',
    //     idx: 3,
    //     choices: ['Mercury', 'Venus', 'Jupiter', 'Saturn']
    // },{
    //     question: 'The RMS Olympic and HMHS Britannic were sister ships to which other British passenger liner?',
    //     answer: 'RMS Titanic',
    //     idx: 1,
    //     choices: ['RMS Titanic', 'USS Constitution', 'RMS Lusitania', 'HMS Beagle']
    // },{
    //     question: 'What was the name of the ship on which Charles Darwin served as a naturalist during a voyage to South America and around the world?',
    //     answer: 'HMS Beagle',
    //     idx: 4,
    //     choices: ['RMS Titanic', 'USS Constitution', 'RMS Lusitania', 'HMS Beagle']
    // },{
    //     question: 'What was the first console video game that allowed the game to be saved?',
    //     answer: 'The Legend of Zelda',
    //     idx: 3,
    //     choices: ['PAC-MAN', 'Mario Bros', 'The Legend of Zelda', 'Doom']
    // },{
    //     question: 'Sriracha is type of hot sauce named after a city located in what country?',
    //     answer: 'Thailand',
    //     idx: 2,
    //     choices: ['Japan', 'Thailand', 'Mexico', 'India']
    // }]

    // window.onload = start ();

    // function timerThing2 () {
    //     if (trivial[n]) {
    //         $('.main').css('display', 'block');
    //         $('#alt').css('display', 'none');
    //         nGame ();
    //     } else {
    //         endGame ();
    //     }
    // }

    // function endGame () {
    //     $('.content').css('background-color', 'transparent');
    //     $('.content').css('border-color', 'transparent');
    //     $('.main').css('display', 'none');
    //     $('#alt').css('display', 'block');
    //     $('.app').css('background-image', 'url("./assets/images/background.jpg")');
    //     $('#alt > h1').html('You got ' + score.correct + ' correct and made ' + score.incorrect + ' happy little accidents!');
    // }

    // function wrong () {
    //     $('.pic').css('display', 'inline');
    //     $('.pic').attr('src', './assets/images/x.png');
    //     $('#pic' + trivial[n-1].idx).attr('src', './assets/images/check.png');
    //     score.incorrect++
    //     time1 = window.setTimeout(timerThing2, 3000)
    // }

    // function correct () {
    //     score.correct++
    //     $('#alt > h1').html('Correct!');
    //     $('.main').css('display', 'none');
    //     $('#alt').css('display', 'block');
    //     $('.content').css('border-color', 'transparent');
    //     $('.app').css('background-image', 'url("./assets/images/epic-bob-ross-painting-printed-poster-0.jpg")');
    //     $('.content').css('background-color', 'transparent');
    //     time1 = window.setTimeout(timerThing2, 3000)
    // }

    // function timeUp () {
    //     score.incorrect++
    //     $('#alt > h1').html('Time Up!');
    //     $('.app').css('background-image', 'url("./assets/images/de4401577135b24388541780e2d9a092_1024x1024.jpg")');
    //     $('.content').css('background-color', 'transparent');
    //     $('.content').css('border-color', 'transparent');
    //     $('.main').css('display', 'none');
    //     $('#alt').css('display', 'block');
    //     time1 = window.setTimeout(timerThing2, 3000)
    // }

    // function nGame () {
    //     $('.button').prop('disabled', false);
    //     num = 10;
    //     $('#time').html('Time Left: 10 seconds!');
    //     $('.pic').css('display', 'none');
    //     $('.content').css('border-color', 'red');
    //     $('.app').css('background-image', 'url("./assets/images/background.jpg")');
    //     $('.content').css('background-color', 'cornsilk');
    //     $('#question').html('Question ' + (n+1) + ': <br>' + trivial[n].question);
    //     for (i = 0; i < 4; i++) {
    //         $(names[i]).html(letters[i] + trivial[n].choices[i]);
    //         $(names[i]).attr('value', trivial[n].choices[i]);
    //     }
    //     n++
    //     time = window.setInterval(timerThing, 1000)
    // }

    // function start () {
    //     $('.main').css('display', 'none');
    //     $('#alt').css('display', 'flex');
    // }
    
    // function timerThing () {
    //     num--
    //     if (num === 0) {
    //         num = 10;
    //         window.clearInterval(time);
    //         timeUp ();
    //     } else {
    //         $('#time').html('Time Left: ' + num + ' seconds!');
    //     }
    // }

    // $('#button0').click( function () {
    //     $('.main').css('display', 'block');
    //     $('#alt').css('display', 'none');
    //     $('#button0').css('display', 'none');
    //     nGame ();
    // })

    // $('.button').click( function () {
    //     $('.button').prop('disabled', true);
    //     window.clearInterval(time);
    //     ($(this).attr('value') === trivial[n-1].answer) ? (correct ()) : (wrong ());
    // })
  })
    