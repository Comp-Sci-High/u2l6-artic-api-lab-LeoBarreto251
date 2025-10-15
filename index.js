// Task 1
// Define a function called getDogArtworks that makes the API call to the request URL you defined in the worksheet (to get 3 dog artworks)
// Make sure to console log all 3 titles (after you get the data retrieve the nested values) 
let request = "https://api.artic.edu/api/v1/artworks/search?q=dogs&limit=3"
async function getDogArtworks(requestUrl){
const response = await fetch (requestUrl);
const data = await response.json()
console.log(data)
return data;

}


// Call the function and confirm it worked correctly
getDogArtworks(request)

// Task 2
// Define another function called searchArtworks that takes in a search query and a size limit
// You can use the function above and modify it to make the API call with the function parameters instead
// You will need to use string concatenation to build the request URL
// Now when the function it's called it should only return artwork the specified # of artworks based on the inputed search query
// Make sure to console log the values. 
async function searchArtworks(search, limit) {
let requestUrl = `https://api.artic.edu/api/v1/artworks/search?q=${search}&limit=${limit}`    
const response = await fetch(requestUrl)
const data = await response.json()
console.log(data)
return data
}


// Call the new function with the user inputs and confirm it worked correctly 
// Test with anything you'd like like 5 "cats" or 2 "flowers"
searchArtworks("flowers", 2)
