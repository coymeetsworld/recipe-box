import React from 'react';
import ReactDOM from 'react-dom'
import RecipeBox from 'RecipeBox';

require('style!css!sass!applicationStyles');


const exampleRecipes = [
	{
		'name': 'cake',
		'ingredients' : 'milk,flour,sugar'
	},
	{
		'name': 'pizza',
		'ingredients' : 'dough, cheese, sauce'
	},
	{
		'name': 'shake',
		'ingredients' : 'whey protein, 1% milk, peanut butter'
	}
];

let demoRecipes = localStorage.getItem('recipes') || JSON.stringify(exampleRecipes);

ReactDOM.render(
	<div>
		<RecipeBox recipes={demoRecipes}/>
	</div>,
	document.getElementById('app')
);
