let breadDiv = document.getElementById("breads");
let sweetsDiv = document.getElementById("sweets");
let drinkDiv = document.getElementById("drinks");
let template1 = '<div class="col-md-3"> <div class="card"> <img class="card-img-top" src="photos/';
let template2 = '" alt="';
let template3 = '"> <div class="card-body"> <h4 class="card-title">';
let template4 = '</h4> <p class="card-text">';
let template5 = '</p> <br> <div class="starrate">★★★★☆</div> </div> </div> </div>';
var card;
var title;
var article;
function addElemByJSON(msg) {
	var json = JSON.parse(msg);
	console.dir(json);
	for (var i = 0; i < json.length; i++) {
		card = template1 + json[i].photo + template2 + json[i].name + template3;
		var desclist = json[i].description.split("===");
		title = desclist[0];
		article = desclist[1];
		card += title + template4 + article + template5;

		switch (json[i].name) {
			case "bread":
			breadDiv.innerHTML += card;
			break;
			case "sweets":
			sweetsDiv.innerHTML += card;
			break;
			case "drink":
			drinkDiv.innerHTML += card;
			break;
			default:
			console.dir(json[i].name);
		}
	}
};
$.ajax({
	type: 'GET',
	url: 'http://localhost:8888/db/menulist.php',
	datatype: 'json'
}).done(addElemByJSON);