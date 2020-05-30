'use strict';


$(document).ready(function(){
  console.log("Waiting for submit!");
  processInput()
});

function findUser(userName){
  fetch('https://api.github.com/users/'+ userName + '/repos')
  .then(response => response.json())
  .then(responseJson => {
    displayRepos(responseJson, userName);
  }).catch(error => alert("Sorry, something went wrong"))
}

function displayRepos(responseJson, userName){
  console.log(responseJson)
  $('#results-list').empty();
  $('#results-list').append(`<h4>${userName}</h4>`)
   for (let i = 0; i < responseJson.length; i++){
     $('#results-list').append(
      `<p><a href="${responseJson[i].html_url}">${responseJson[i].name}</a></p>`
     ) 
 }
} 

function processInput(){
  $('#submit').click(event => {
    event.preventDefault();
    const userName = $('#js-search-term').val()
    findUser(userName);
  });
}
