$(document).ready(() => {


  let topics = {};
  let config = {
    apiKey: '&api_key=7IvkmXh1DwPHidKwAZmY6eRK8eSWkYMk&limit=',
    URL: 'https://api.giphy.com/v1/gifs/search?q=',
    limit: 10,
  }

  $('#submit').click(() => {
    $('#mainContent > h1').css('display', 'none')
    $('#mainContent').css('display', 'block')
    let value = $('#topicInput').prop('value');
    $('.gif').remove();
    let queryURL = config.URL + value + config.apiKey + config.limit;
    topics[value] = {
      name: value,
      url: queryURL,
    }
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      let gifs = response.data;
      gifs.forEach(gif => {
        create ('gif', true, {srcURL: gif.images.fixed_height_small_still.url, rating: gif.rating, srcAlt: gif.images.original.url});
      });
    });
    search(value);
    //window.localStorage.setItem('topics', JSON.stringify(topics));
    //JSON.parse(localStorage.getItem('user'));
  });

  function create (clss, bool, obj) {
    if (bool) {
      let child = document.createElement('IMG');
      let element = document.createElement('BUTTON');
      let close = document.createElement('BUTTON');
      element.setAttribute('class', clss);
      child.setAttribute("src", obj.srcURL);
      child.setAttribute("alt", "oh no!");
      element.innerHTML = 'rating: ' + obj.rating + '<br><br>';
      document.getElementsByClassName('gifArea')[0].appendChild(element);
      element.appendChild(child);
      element.onclick = function () {
        console.log(obj.srcAlt)
        $('#alt').css('display', 'flex')
        $('#pic1').attr("src", obj.srcAlt)
        console.log(document.getElementById('pic1'))
      }
    } else {
      let element = document.createElement('DIV');
      let child = document.createElement('BUTTON');
      let child2 = document.createElement('BUTTON');
      element.setAttribute('class', clss);
      element.setAttribute('id', obj.value);
      child.setAttribute('id', 'remove');
      child2.setAttribute('id', 'topicB');
      child2.innerHTML = obj.value;
      child.innerHTML = '&#x2716';
      child2.value = obj.value;
      element.value = obj.value;
      child.onclick = function () {
        this.parentNode.remove();
      }
      console.log(obj.value)
      return {element: element, child: child, child2: child2, id: obj.value};
    }
  }

  $('#close').click(function () {
    $('#alt').css('display', 'none')
  });
  function search (value) {
    let obj = create ('topic', false, {value: value});
    obj.child2.onclick = function () {
      let name = $(this).attr('value')
      if (document.getElementsByClassName('gif')[0]) {
        $('.gif').remove();
      }
      console.log(name)
    $.ajax({
      url: topics[name].url,
      method: "GET"
    }).then(function(response) {
      let gifs = response.data;
      gifs.forEach(gif => {
        console.log(gif.rating)
        create ('gif', true, {srcURL: gif.images.fixed_height_small_still.url, rating: gif.rating, srcAlt: gif.images.original.url});
      });
    });
    };
    document.getElementsByClassName('topicArea')[0].appendChild(obj.element);
    console.log(document.getElementById(obj.id))
    document.getElementById(obj.id).appendChild(obj.child2);
    document.getElementById(obj.id).appendChild(obj.child);
  };
})
    