import React from 'react';

class Recipe extends React.Component {
	
	constructor(props) {
		super(props);
		this.onDeleteRecipe = this.onDeleteRecipe.bind(this);
		this.renderEditRecipe = this.renderEditRecipe.bind(this);
	}

	onDeleteRecipe(recipeId) {
		return () => {
			this.props.onDeleteRecipe(recipeId);
		}
	}
	
	renderEditRecipe(recipeId) {
		return () => {
			this.props.onEditRecipe(recipeId);
		}
	}
	
	handleUpdate(e) {
		e.preventDefault();
		let name = this.refs.updatedName.value;
		this.refs.updatedName.value = '';
		let ingredients = this.refs.updatedRecipeIngredients.value;
		this.refs.updatedRecipeIngredients.value = '';
		
		let updatedRecipe = 
		{
			inEditMode: false,
			name,
			ingredients
		};
		
		this.props.onUpdateRecipe(this.props.id, updatedRecipe);
	}
	
	render () {
		console.log("Render called");	
		console.log(this.props);
		var listIngredients = () => {
			let id = 1;
			return this.props.ingredients.map((ingredient) => {
				return <li key={id++}>{ingredient}</li>	
			});
		}		
		if (this.props.inEditMode) {

						/*<button onClick={this.renderUpdateRecipe(this.props.id)}>Update</button>*/
			return (
				<div className="recipe">
					<form onSubmit={this.handleUpdate.bind(this)}>
						<input type="text" ref="updatedName" defaultValue={this.props.name} />
						<textarea ref="updatedRecipeIngredients" defaultValue={this.props.ingredients}/>
						<button>Update</button>
					</form>
				</div>
			);
			
		} else {
			return (
				<div className="recipe">
					<div className="recipe-header">{this.props.name}</div>
					<div className="recipe-body">
						<ul>
							{listIngredients()}
						</ul>
					</div>
					<div className="recipe-controls">
						<button onClick={this.renderEditRecipe(this.props.id)}>Edit</button>
						<button onClick={this.onDeleteRecipe(this.props.id)}>Delete</button>	
					</div>
				</div>);
		}
		

	}
	
}

export default Recipe;