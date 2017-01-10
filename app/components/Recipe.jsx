import React from 'react';

class Recipe extends React.Component {
	
	constructor(props) {
		super(props);
		this.onDeleteRecipe = this.onDeleteRecipe.bind(this);
	}

	onDeleteRecipe(recipeId) {
		return () => {
			this.props.onDeleteRecipe(recipeId);
		}
	}
	
	render () {
		
		var listIngredients = () => {
			let id = 1;
			return this.props.ingredients.split(',').map((ingredient) => {
				return <li key={id++}>{ingredient}</li>	
			});
		}		

		return (
			<div className="recipe">
				<div className="recipe-header">{this.props.name}</div>
				<div className="recipe-body">
					<ul>
						{listIngredients()}
					</ul>
				</div>
				<div className="recipe-controls">
					<button>Edit</button>
					<button onClick={this.onDeleteRecipe(this.props.id)}>Delete</button>	
				</div>
			</div>
		)
	}
	
}

export default Recipe;