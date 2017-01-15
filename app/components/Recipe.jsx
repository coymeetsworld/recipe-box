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
		let ingredients = this.refs.updatedRecipeIngredients.value.split('\n').filter((ingredient) => { return ingredient != ''; });
		this.refs.updatedRecipeIngredients.value = '';
		let directions = this.refs.updatedRecipeDirections.value.split('\n').filter((direction) => { return direction != ''; });
		this.refs.updatedRecipeDirections.value = '';
		let reference = this.refs.updatedReference.value;
		this.refs.updatedReference.value = '';
		
		let updatedRecipe = 
		{
			inEditMode: false,
			name,
			ingredients,
			directions,
			reference
		};
		
		this.props.onUpdateRecipe(this.props.id, updatedRecipe);
	}
	
	render () {
		var listIngredients = () => {
			let id = 1;
			return this.props.ingredients.map((ingredient) => {
				return <li key={id++}>{ingredient}</li>	
			});
		}		
		var listDirections = () => {
			let id = 1;
			return this.props.directions.map((direction) => {
				return <li key={id++}>{direction}</li>	
			});
		}		
	
		var getRows = (entries) => {
			return entries.length + 2;
		}
		

		if (this.props.inEditMode) {
			
			return (
				<div className="recipe">
					<form onSubmit={this.handleUpdate.bind(this)}>
						<div className="recipe-header">
							<input type="text" ref="updatedName" defaultValue={this.props.name} />
							<div className="recipe-controls">
								<button>Update</button>
							</div>
						</div>
						<div className="recipe-body">
							<div className="recipe-ingredients">
								<p>Ingredients</p>
								<textarea ref="updatedRecipeIngredients" rows={getRows(this.props.ingredients)} defaultValue={this.props.ingredients.join('\n')}/>
							</div>
							<div className="recipe-directions">		
								<p>Directions</p>
								<textarea ref="updatedRecipeDirections" rows={getRows(this.props.directions)} defaultValue={this.props.directions.join('\n')}/>
							</div>
							<div className="recipe-reference">
								<span>Source: </span>
								<input type="text" ref="updatedReference" defaultValue={this.props.reference} />
							</div>
						</div>
					</form>
				</div>
			);
			
		} else {
			return (
				<div className="recipe">
					<div className="recipe-header">
						{this.props.name}
						<div className="recipe-controls">
							<button onClick={this.renderEditRecipe(this.props.id)}>Edit</button>
							<button onClick={this.onDeleteRecipe(this.props.id)}>Delete</button>	
						</div>
					
					
					</div>
					<div className="recipe-body">
						<div className="recipe-ingredients">
							<p>Ingredients</p>
							<ul>
								{listIngredients()}
							</ul>
						</div>
						<div className="recipe-directions">
							<p>Directions</p>
							<ul>
								{listDirections()}
							</ul>
						</div>
						<div className="recipe-reference">
							<p>Source: <a href={this.props.reference} target="_blank">{this.props.reference}</a></p>
						</div>
					</div>
				</div>);
		}
		

	}
	
}

export default Recipe;