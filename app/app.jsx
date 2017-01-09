import React from 'react';
import ReactDOM from 'react-dom'
import RecipeBox from 'RecipeBox';

require('style!css!sass!applicationStyles');


const testRecipes = [
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

ReactDOM.render(
	<div>
		<RecipeBox recipes={testRecipes}/>
	</div>,
	document.getElementById('app')
);
