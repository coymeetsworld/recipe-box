import React from 'react';
import {connect} from 'react-redux';
import AddRecipePane from 'AddRecipePane';
import Recipe from 'Recipe';

export class RecipeBox extends React.Component {

	render () {
		var listRecipes = () => {
			return this.props.recipes.map((recipe, recipeIndex) => {
				return (<Recipe key={recipeIndex}
												id={recipeIndex}
												name={recipe.name}
												ingredients={recipe.ingredients}
												directions={recipe.directions}
												reference={recipe.reference}
												inEditMode={recipe.inEditMode}
												inShowMode={recipe.inShowMode}/>);
			});
		};
		
		return (
			<div>
				<div className="title">
					My Recipe Box
				</div>
				<AddRecipePane/>
				<div className="recipe-list">
					{listRecipes()}	
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return state;
};

export default connect(mapStateToProps)(RecipeBox);
