//runs printQuote on page load to remove place setter quote in index.html
document.getElementById("body").addEventListener("load", printQuote, true);

//click on "Show Another Quote" and it initiates the printQuote function.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//random quote generator
function getRandomQuote() {
    var gurdjieffQuotes;
    gurdjieffQuotes = quotes[Math.floor(Math.random() * quotes.length)];
    return gurdjieffQuotes;
}

//random color generator function for background color using rgb(#,#,#) css
function getRandomColor() {
    
    //set intial rgb
    var rgbColor = 'rgb'
    randomR = Math.floor((Math.random() * 255));
    randomG = Math.floor((Math.random() * 255));
    randomB = Math.floor((Math.random() * 255));
    rgbColor += '(' 
    rgbColor += randomR + ',' 
    rgbColor +=  randomG + ',' 
    rgbColor += randomB + ')';
    return rgbColor;
}

//function to print quote to index.html
function printQuote() {

    //defines the getRandomQuote function as as a variable 
    var gigQuote = getRandomQuote();

    //defines what get output into the html (quote, source, citation and year)   
    var outputHTML = '<p class="quote">' + gigQuote.quote + '</p>' + '<p class="source">' + gigQuote.source + '</p>';
        outputHTML += '<span class="citation">' + gigQuote.citation + '</span>';
        outputHTML += '<span class="year">' + gigQuote.year + '</span>';
    
    //fill in the quote box
    document.getElementById('quote-box').innerHTML = outputHTML;

    //fill in the background-color for #body id
    document.getElementById("body").style.backgroundColor = getRandomColor();
    document.getElementById('loadQuote').style.backgroundColor = document.getElementById("body").style.backgroundColor;

}
