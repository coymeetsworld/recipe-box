import React from 'react';

class AddRecipePane extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	handleSubmit (e) {

		e.preventDefault();
		let name = this.refs.recipeName.value;
		let ingredients = this.refs.recipeIngredients.value;
		
		if (name === '') { 
			this.refs.recipeName.focus(); 
		} else if (ingredients === '') { 
			this.refs.recipeIngredients.focus();
		} else {
			this.refs.recipeName.value = '';
			this.refs.recipeIngredients.value = '';
			this.props.onAddRecipe({ name, ingredients });
		}
		
	}

	render () {
		
		
		return (
			<div className="add-recipe-pane">
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input type="text" ref="recipeName" placeholder="Recipe name"/>
					<textarea ref="recipeIngredients" placeholder="ingredients,in,comma,separated,list"/>
					<button>Add Recipe</button>
				</form>					
			</div>
		)
		
	}	
	
}

export default AddRecipePane;