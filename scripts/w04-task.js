/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = { name: { first:'Raphael Shawn', last : 'Taurai'},
                  photo: 'images/shawn.jpg',
                  favoriteFoods: ['sadza','rice','beef', 'chicken','potato salad'],
                  hobbies: ['animal husbandry','studying','finances','coding'],
                  placesLived: [],
                };

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Zimbabwe',
        length: '20 years',
    },
    {
        place: 'Kenya, Nairobi',
        length: '15 months',
    },
    {
        place: 'Botswana',
        length: '1 year',
    },
    {
        place: 'South Africa',
        length: '21 months',
    },
) 



/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name.first + ' ' + myProfile.name.last;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
let dlElement = document.getElementById('places-lived');
myProfile.placesLived.forEach(place => {
    let dtElement = document.createElement('dt');
    dtElement.textContent = place.place;
    let ddElement = document.createElement('dd');
    ddElement.textContent = place.length;

    dlElement.appendChild(dtElement);
    dlElement.appendChild(ddElement);
});



