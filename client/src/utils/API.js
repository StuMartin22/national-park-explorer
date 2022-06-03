export const searchParks = (query) => {
    return fetch(`https://developer.nps.gov/api/v1/parks?q=${query}&api_key=JffACTqv5cyiRP3324FtfrelMR4M3HjiBb7YgiWL`);
}

// park name = "data[0].fullName"
// parkCode = "data[0].parkCode"
// park state = "data[0].addresses[0].stateCode"  ex) WY
// park City = "data[0].addresses[0].city"
// park address = "data[0].addresses[0].line1, "data[0].addresses[0].line2", "data[0].addresses[0].line3"
// park postal = "data[0].addresses[0].postalCode"

// park images caption = "data[0].images[0].caption"
// park images url = "data[0].images[0].url"

// park description = "data[0].description"

// park Activities = "data[0].activities[0]" , "data[0].activities[1]", etc. 
