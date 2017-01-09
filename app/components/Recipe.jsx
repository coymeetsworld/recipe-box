import React from 'react';

class Recipe extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			name: props.name,
			ingredientString : props.ingredientString	
		};
	}
	
	render () {
		
		return (
			<div className="recipe">
				<div className="recipe-header">{this.state.name}</div>	
				<div className="recipe-body">
					<ul>
						<li>Item 1</li>
						<li>Item 2</li>
						<li>Item 3</li>
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