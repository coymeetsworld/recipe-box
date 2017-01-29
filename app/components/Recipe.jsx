import React from 'react';
import {connect} from 'react-redux';
import {deleteRecipe, hideRecipe, editRecipe, showRecipe, updateRecipe } from 'actions';


export class Recipe extends React.Component {
	
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
			inShowMode: true,
			name,
			ingredients,
			directions,
			reference
		};
		var {dispatch} = this.props;
		dispatch(updateRecipe(this.props.id, updatedRecipe));
	}
	
	render () {

		var {dispatch, inEditMode, inShowMode, name, id, directions, ingredients, reference } = this.props;

		var listIngredients = () => {
			let id = 1;
			return ingredients.map((ingredient) => {
				return <li key={id++}>{ingredient}</li>	
			});
		}		
		var listDirections = () => {
			let id = 1;
			return directions.map((direction) => {
				return <li key={id++}>{direction}</li>	
			});
		}		
	
		var getRows = (entries) => {
			return entries.length + 2;
		}
		
		if (inEditMode) {
			
			return (
				<div className="recipe">
					<form onSubmit={this.handleUpdate.bind(this)}>
						<div className="recipe-header">
							<input type="text" ref="updatedName" defaultValue={name} />
							<div className="recipe-controls">
								<button type="button" className="hide-button" onClick={() => {dispatch(hideRecipe(id))}}>Hide</button>
								<button className="update-button">Update</button>
								<button className="delete-button" onClick={() => {dispatch(deleteRecipe(id))}}>Delete</button>	
							</div>
						</div>
						<div className="recipe-body">
							<div className="recipe-ingredients">
								<p>Ingredients:</p>
								<textarea ref="updatedRecipeIngredients" rows={getRows(ingredients)} defaultValue={ingredients.join('\n')}/>
							</div>
							<div className="recipe-directions">		
								<p>Directions:</p>
								<textarea ref="updatedRecipeDirections" rows={getRows(directions)} defaultValue={directions.join('\n')}/>
							</div>
							<div className="recipe-reference">
								<span>Source: </span>
								<input type="text" ref="updatedReference" defaultValue={reference} />
							</div>
						</div>
					</form>
				</div>
			);
			
		}	else if (inShowMode) {				
			return (
				<div className="recipe">
					<div className="recipe-header">
							{name}
						<div className="recipe-controls">
							<button type="button" className="hide-button" onClick={() => {dispatch(hideRecipe(id))}}>Hide</button>
							<button className="edit-button" onClick={() => {dispatch(editRecipe(id))}}>Edit</button>
							<button className="delete-button" onClick={() => {dispatch(deleteRecipe(id))}}>Delete</button>	
						</div>
					</div>
					<div className="recipe-body">
						<div className="recipe-ingredients">
							<p>Ingredients:</p>
							<ul>
								{listIngredients()}
							</ul>
						</div>
						<div className="recipe-directions">
							<p>Directions:</p>
							<ul>
								{listDirections()}
							</ul>
						</div>
						<div className="recipe-reference">
							<p>Source: <a href={reference} target="_blank">{reference}</a></p>
						</div>
					</div>
				</div>);
		} 
		else {
			return (
				<div className="recipe">
					<div className="recipe-header">
						{name}
						<div className="recipe-controls">
							<button type="button" className="show-button" onClick={() => {dispatch(showRecipe(id))}}>Show</button>
						</div>
					</div>
				</div>);
		}
	}
}

const mapStateToProps = (state) => {
	return state;
};

export default connect(mapStateToProps)(Recipe);