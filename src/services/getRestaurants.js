export function getRestaurantsAPI(){
    return fetch('https://discovery.zyda.com/tags/breakfast/restaurants')
    .then( response => response.json() )
}