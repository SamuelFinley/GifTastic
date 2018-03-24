$(document).ready(() => {


  let topics = {};
  const config = {
    apiKey: '&api_key=7IvkmXh1DwPHidKwAZmY6eRK8eSWkYMk&limit=',
    URL: 'https://api.giphy.com/v1/gifs/search?q=',
    limit: 10,
  }
  
  function create (tag1, tag2, clss, bool, obj) {
    let element = document.createElement(tag1);
    let child = document.createElement(tag2);
    if (bool) {
      let close = document.createElement('BUTTON');
      element.setAttribute('class', clss);
      child.setAttribute("src", obj.images.fixed_height_small_still.url);
      element.setAttribute("value", obj.images.fixed_height_small_still.url);
      child.setAttribute("alt", obj.images.fixed_height_small.url);
      element.innerHTML = 'rating: ' + obj.rating + '<br><br>';
      document.getElementsByClassName('gifArea')[0].appendChild(element);
      element.appendChild(child);
      element.onclick = function () {
        $('#alt').css('display', 'flex');
        $('#container > h1').html('URL: ' + obj.url + '<br><br>Source URL: ' + obj.source + '<br><br>Date Uploaded: ' + obj.import_datetime + '<br><br>Rating: ' + obj.rating);
        $('#pic1').attr("src", obj.images.original.url);
      }
        $(".gif").hover(
            function() {
              $(this.childNodes[3]).attr("src", this.childNodes[3].alt);
            },
            function() {
              $(this.childNodes[3]).attr("src", this.value);
            }                         
        );                  

    } else {
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
      return {element: element, child: child, child2: child2, id: obj.value};
    }
  }


  function api (url) {
    $.ajax({
      url: url,
      method: "GET"
    }).then(function(response) {
      let gifs = response.data;
      gifs.forEach(gif => {
        create ('BUTTON', 'IMG', 'gif', true, gif);
      });
    });
  };

  function search (value) {
    let obj = create ('DIV', 'BUTTON', 'topic', false, {value: value});
    obj.child2.onclick = function () {
      let name = $(this).attr('value')
      if (document.getElementsByClassName('gif')[0]) {
        $('.gif').remove();
      };
      api(topics[name].url);
    };
    document.getElementsByClassName('topicArea')[0].appendChild(obj.element);
    document.getElementById(obj.id).appendChild(obj.child2);
    document.getElementById(obj.id).appendChild(obj.child);
  };

  $('#submit').click(() => {
    let value = $('#topicInput').prop('value');
    let queryURL = config.URL + value + config.apiKey + config.limit;
    if (!topics[value]) {
      $('.gif').remove();
      $('#mainContent > h1').css('display', 'none');
      $('#mainContent').css('display', 'block');
      topics[value] = {
        name: value,
        url: queryURL,
      };
      api(queryURL);
      search(value);
    };
    //window.localStorage.setItem('topics', JSON.stringify(topics));
    //JSON.parse(localStorage.getItem('user'));
  });

  $('#close').click(function () {
    $('#alt').css('display', 'none');
  });
})
    