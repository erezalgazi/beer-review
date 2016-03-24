var BeerReviewApp = function () {

	var beers = [];
	var sortOpposite = true;

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
	}
	
	return {
		createBeer: addBeer,
		renderBeer: updateBeer,
		sortBeer: sortRating
	}
};

var app = BeerReviewApp();


$('.post-beer').on('click', function (e) {
  e.preventDefault();
  var name = $('#beer-name').val();
  var cat = $('#beer-category').val();
  var rate = $('#beer-rating').val();
  app.createBeer(name,cat,rate);
  app.renderBeer();
});

$('.sort-beer').on('click', function (e) {
	e.preventDefault();
	app.sortBeer();
});






