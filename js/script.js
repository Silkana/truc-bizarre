var imagesBank = init_imagesBank();
var ARRAY_LENGTH = 24;
var completeArray = randomPick(imagesBank);

console.log(completeArray);

//Creates the image data base indexes.
function init_imagesBank(){

	var images = new Array();

	for (var i = 0; i < 50; i++) {
		images.push(i);
	}
	return images;
}

// piocher dans l'array 24 valeurs uniques.
function randomPick(pImagesBank) {
	
	var arrayFinal = new Array();
	var currentBank = new Array();
		
  	for (var i = 0; i<pImagesBank.length; i++) {
      	currentBank[i] = pImagesBank[i];
    }

  	currentBank = arrayShuffle(currentBank);

  	for (var i = 0; i < ARRAY_LENGTH; i++) {
  		arrayFinal[i] = currentBank[i]; 
  	}
  
  	return arrayFinal;
};

function arrayShuffle(pArray) {
    var j, x, i;
    for (i = pArray.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = pArray[i - 1];
        pArray[i - 1] = pArray[j];
        pArray[j] = x;
    }
    return pArray;


}

$(function () {
    //stuff here
});

//TO DO

//mettre array 24 valeurs dans array double dimension.

// Random Horizontal Vertical.  //
								// entre 0 et 1
// Rand Direction 				//


// grosse fonction qui gere le mouvement de la direction en fonction 

switch pOrientation
	case 0 
		HAUT
		if direction = 0 
			déplacer les images HAUT

		else l'inverse.

	case 1

		same gauche droite




// """""Boucle"""" de temps de 5 secondes, exec = > rotation