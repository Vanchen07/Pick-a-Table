

export const findRestaurantByName = ({entities: {restaurants}}, restaurantName) => {
    let restaurantArray = Object.values(restaurants)

    console.log("state: ", restaurants);
    console.log("rest array: ", restaurantArray)
    console.log("name: ", restaurantName)
    
    for(let i = 0; i < restaurantArray.length; i++) {
       
        console.log("i: ", i)
     
        console.log("rest: ", restaurantArray[i])
        console.log((restaurantArray[i] === restaurantName) )
        if (restaurantArray[i].name === restaurantName) return restaurantArray[i]
    }

    return null
 
}

