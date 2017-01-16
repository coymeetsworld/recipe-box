# Recipe Box

## Description

FreeCodeCamp React project in the Data Visualization curriculum to build a recipe box that allows users to store, create, and modify user recipes. 

A user can add new recipes with a list of ingredients and directions (separated by newlines in the textareas). An optional source URL can also be added for reference. These recipes can be edited or removed from the recipe box completely after they are created.

Recipes are stored in *[local storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage)* so recipe lists will be saved even if internet connection is lost, web browser is closed or refreshed, or the user leaves the app. A list of default recipes will get rendered for new users.

## Testing

Since local storage is used to store the recipes, a user can clear their recipes on their browser by typing `localStorage.setItem('_coymeetsworld_recipes', '')`. Refreshing the browser will render the default recipes.

*[link to project description](https://www.freecodecamp.com/challenges/build-a-recipe-box)*
