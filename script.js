var beers = [];
var sortOpposite = true;

$('.post-beer').on('click', function (e) {
  e.preventDefault();
  var name = $('#beer-name').val();
  var cat = $('#beer-category').val();
  var rate = $('#beer-rating').val();
  addBeer(name,cat,rate);
  updateBeer();
});

$('.sort-beer').on('click', function (e) {
	e.preventDefault();
	sortRating();
});



var addBeer = function	(name, category, rating) {
	var beerObj = {
		beerName: name,
		beerCategory: category,
		beerRating: rating
	};
	beers.push(beerObj);
}

var updateBeer = function () {
	$('.beers').find('div').remove(); 
	for (var i = 0; i < beers.length; i++) {
		$('.beers').append('<div>' + "Beer name: " + beers[i].beerName + "; Beer type: " + beers[i].beerCategory + "; Beer rating: " + beers[i].beerRating  + '</div>');
	}
}

var sortRating = function () {
	if (sortOpposite){
		beers.sort(function(a,b){
		return b.beerRating - a.beerRating});
		sortOpposite = false;
	}
	else {
		beers.sort(function(a,b){
		return a.beerRating - b.beerRating});
		sortOpposite = true;
	}
	updateBeer();


	// for (var i=0; i<beers.length; i++) {
	// 	if (beers[i].beerRating < beers[i+1].beerRating) {
	// 		var temp = beers[i];
	// 		beers[i] = beers[i+1];
	// 		beers[i+1] = temp;
	// 	}
	// }
}

