import React from 'react';
import Recipe from 'Recipe';

class RecipeBox extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			recipes : props.recipes
		};
	}
	
	render () {

		var listRecipes = () => {
			let id = 1;
			return this.state.recipes.map((recipe) => {
				return <Recipe key={id++} name={recipe.name} ingredientString={recipe.ingredientString}/>
			});
		}
		
		return (
			<div className="recipe-box">
				{listRecipes()}	
			</div>
		)

	}
	
}

export default RecipeBox;
