// Shawn Gutierrez Session 7 Activity 2 HW

// Original list
let attractions_list = [
    {
        "id":[0],
        "name":["Carousel"],
        "price":[10],
        "opening":["Mon", "Tue"],
        "children":[true]
    },
    {
        "id":[1],
        "name":["Swing"],
        "price":[5],
        "opening":["Sat", "Sun"],
        "children":[true]
    },
    {
        "id":[2],
        "name":["Coaster"],
        "price":[20],
        "opening":["Wed", "Fri"],
        "children":[false]
    }
]

// Cloning list using JSON
let new_attractions_list = JSON.parse(JSON.stringify(attractions_list));
// console.log("New list: ", new_attractions_list)

doublePrices(new_attractions_list)

function doublePrices(attractions_list)
{
    let returnedList = []
    attractions_list.forEach( (attraction, index) => {
        if (index === 1) {
            returnedList.push(attractions_list[index].price *= 1)
        }
        else {
            returnedList.push(attractions_list[index].price *= 2)
        }
    });

    return returnedList
}

let old_sentence_list = ''
let new_sentence_list = ''

let iteration = 0

function debugAmusementRides(attractions_list)
{
    attractions_list.forEach( (attraction, index) => {
        if (iteration <= 2)
        {
            old_sentence_list = old_sentence_list +attractions_list[index].name + " has a price of: " + attractions_list[index].price
            old_sentence_list+="\n"
            console.log(old_sentence_list)
            iteration+=1
        }
        else
        {
            new_sentence_list = new_sentence_list +attractions_list[index].name + " has a price of: " + attractions_list[index].price
            new_sentence_list+="\n"
            console.log(new_sentence_list)
        }
    });
}

debugAmusementRides(attractions_list)
debugAmusementRides(new_attractions_list)

document.getElementById("content-1").innerHTML = old_sentence_list
document.getElementById("content-2").innerHTML = new_sentence_list
