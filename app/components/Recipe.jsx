import React from 'react';

class Recipe extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			name: props.name,
			ingredients : props.ingredients	
		};
	}
	
	render () {
		
		var listIngredients = () => {
			let id = 1;
			return this.state.ingredients.split(',').map((ingredient) => {
				return <li key={id++}>{ingredient}</li>	
			});
		}		

		return (
			<div className="recipe">
				<div className="recipe-header">{this.state.name}</div>	
				<div className="recipe-body">
					<ul>
						{listIngredients()}
					</ul>
				</div>
				<div className="recipe-controls">
					<button>Edit</button>
					<button>Delete</button>	
				</div>
			</div>
		)
	}
	
}

export default Recipe;