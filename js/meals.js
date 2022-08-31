const loadMeals = search => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    const mealsContainer = document.getElementById('meals-container')
    mealsContainer.innerHTML = ``;
    meals.forEach(meal => {
        // console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div onclick="loadMealDetails(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Name: ${meal.strMeal}</h5>
                <p class="card-text">Catagory: ${meal.strCategory}</p>
                <p class="card-text">Area: ${meal.strArea}</p>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
        `;
        mealsContainer.appendChild(mealDiv);
    });
}

const searchFood = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadMeals(searchText);
}

const loadMealDetails = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]))
}

const displayMealDetails = meal => {
    const detailContainer = document.getElementById('detail-container');
    detailContainer.innerHTML = ``;
    const detailDiv = document.createElement('div');
    detailDiv.classList.add('card');
    detailDiv.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Name: ${meal.strMeal}</h5>
            <p class="card-text">Ingredient: ${meal.strIngredient1}, ${meal.strIngredient2}, ${meal.strIngredient3}</p>
            <p class="card-text">Measure: ${meal.strMeasure1}, ${meal.strMeasure2}, ${meal.strMeasure3}</p>
            <p class="card-text">${meal.strInstructions.slice(0, 300)}</p>
        </div>
    `;
    detailContainer.appendChild(detailDiv);
}
