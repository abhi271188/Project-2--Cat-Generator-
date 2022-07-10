//------------------------------------ Defining a driver function ----------------------------------------------------------------------

document.querySelector('#cat-generator-button-primary').addEventListener('click', catGenerator);
function catGenerator()
{
    let catImage = document.createElement('img');
    catImage.src = "https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/d7.gif";
    document.querySelector('#cat-generator-row-2').appendChild(catImage);
}

//--------------------------------------------------------------------------------------------------------------------------------------
