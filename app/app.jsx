import React from 'react';
import ReactDOM from 'react-dom'
import RecipeBox from 'RecipeBox';

require('style!css!sass!applicationStyles');


const exampleRecipes = [
	{
		'name': 'Baked Bacon Jalapeno Wraps',
		'ingredients': [
			'8oz packaged cream cheese', 
			'12 fresh jalapeno peppers sliced halfwise and seeded',
			'6 slices of bacon cut into halves'
		],
		'directions': [
			'Preheat oven to 425 degrees F (220 degrees C)',
			'Spread cream cheese into jalapeno pepper halves; wrap each with a piece of bacon. Secure the bacon with toothpicks to prevent unraveling while baking. Arrange wrapped jalapeno peppers onto a baking sheet with cream cheese side facing down.',
			'Preheat an outdoor grill for high heat, and lightly oil the grate.',
			'Bake in preheated oven for 10 minutes, turn, and continue cooking until the bacon is completely browned, about 10 minutes more.',
			'Transfer jalapeno wraps to preheated grill; cook until the backon is crisp, 2 to 3 minutes per side'
		],
		'reference': 'http://allrecipes.com/recipe/228679/baked-bacon-jalapeno-wraps/'
	},
	{
		'name': 'Tatertot Casserole',
		'ingredients': [
			'1 pound ground beef',
			'1 pinch salt and ground black pepper to taste',
			'1 (10.75 oz) can condense cream of mushroom soup',
			'2 cups shredded cheddar cheese',
			'1 (16 oz) package frozen tater tots',
		],
		'directions': [
			'Preheat oven to 350 degrees F (175 degrees C)',
			'Cook and stir ground beef in a large skillet over medium heat until no longer pink and completely browned, 7 to 10 minutes; season with salt and black pepper. Stir cream of mushroom soup into the cooked ground beef; pour the mixture into a 9x13-inch baking dish. Layer tater tots evenly over the ground beef mixture; top with Cheddar cheese.',
			'Bake until tater tots are golden brown and hot, 30 to 45 minutes'
		],
		'reference': 'http://allrecipes.com/recipe/222037/tatertot-casserole/'
	},
	{
		'name': 'Smoked Cheese Ravioli',
		'ingredients': [
			'1 (16oz) package frozen cheese ravioli',
			'1 cup half-and-half cream',
			'1 cup shredded smoked Gouda cheese',
			'1 teaspoon chopped fresh parsley',
			'1 teaspoon white pepper'
		],
		'directions': [
			'Bring a large pot of lightly salted water to a rolling boil over high heat; stir in the frozen ravioli and return to a boil. Cook uncovered, stirring occasionally, until the ravioli float to the top and the filling is hot, 6 to 8 minutes. Drain.',
			'Meanwhile, bring the half-and-half to a simmer in a saucepan over medium heat. Whisk in the Gouda cheese until melted; season with parsley and white pepper. Pour the sauce over the cooked ravioli to serve.'
		],
		'reference': 'http://allrecipes.com/recipe/173945/smoked-cheese-ravioli/'
	},
	{
		'name': 'Salsa Biscuit Chicken',
		'ingredients': [
			'3 skinless, boneless chicken breast halves',
			'1 onion, chopped',
			'1 cup salsa',
			'2 cups shredded cheddar cheese',
			'1 (12 oz) can refrigerated biscuit dough'
		],
		'directions': [
			'Preheat oven to 350 degrees F (175 degrees C). Bring a saucepan of lightly salted water to a boil. Add chicken breasts, and boil until easily shredded, about 20 minutes.',
			'Saute onion in a medium saucepan until soft. Remove from heat and stir in salsa, then stir in cheese until melted. Add chicken and mix all together.',
			'Roll out biscuits individually, adding a little of the chicken mixture to each one; then roll up, secure with toothpicks and place on a lightly greased cookie sheet.',
			'Bake at 350 degrees F (175 degrees C) for about 10 minutes, or until biscuits are golden and hot.'
		],
		'reference': 'http://allrecipes.com/recipe/17028/salsa-biscuit-chicken/'
	},
	{
		'name': 'Pesto Cheesy Chicken Rolls',
		'ingredients': [
			'4 skinless, boneless chicken breast halves, pounded to 1/4 inch thickness',
			'1 cup prepared basil pesto',
			'4 thick slices mozzerella cheese',
			'cooking spray'
		],
		'directions': [
			'Preheat the oven to 350 degrees F (175 degrees C). Spray a baking dish with cooking spray.',
			'Spread 2 to 3 tablespoons of the pesto sauce onto each flattened chicken breast. Place one slice of cheese over the pesto. Roll up tightly, and secure with toothpicks. Place in a lightly greased baking dish.',
			'Bake uncovered for 45 to 50 minutes in the preheated oven, until chicken is nicely browned and juices run clear.'
		],
		'reference': 'http://allrecipes.com/recipe/57319/pesto-cheesy-chicken-rolls/'
	},
	{
		'name': 'Mediterranean Spread',
		'ingredients': [
			'1 (8 oz) package cream cheese, softened',
			'1/4 cup sour cream',
			'1 (4 oz) container crumbled feta cheese',
			'2 teaspoons garlic powder',
			'2 teaspoons dried dill weed'
		],
		'directions': [
			'Mix cream cheese, sour cream, feta cheese, garlic powder, and dill weed in a bowl until well blended.',
			'Cover and refrigerate for 30 minutes before serving.'
		],
		'reference': 'http://allrecipes.com/recipe/221255/mediterranean-spread/'
	},
	{
		'name': 'Chorizo Queso Dip',
		'ingredients': [
			'10 oz bulk chorizo sausage',
			'1 (10 oz) can diced tomatoes with green chile peppers (such as RO*TEL®), drained',
			'1 (8 oz) package cream cheese, cubed',
			'1 (8 oz) package processed cheese (such as Velveeta®), cubed'
		],
		'directions': [
			'Cook and stir chorizo sausage in a skillet over medium heat until cooked completed, 5 to 7 minutes; drain and transfer to a slow cooker.',
			'Stir diced tomatoes, cream cheese, and processed cheese in with the chorizo.',
			'Cook on Low until cheese is melted, stirring occasionally, 1 1/2 to 2 hours.'
		],
		'reference': 'http://allrecipes.com/recipe/221371/chorizo-queso-dip/'
	},
	{
		'name': 'Strawberry Peach Smoothie',
		'ingredients': [
			'3/4 cup vanilla-flavored soy milk',
			'1 (1/2 cup) scoop vanilla ice cream',
			'1/4 cup frozen sliced strawberries',
			'4 sliced fresh strawberries',
			'1 small fresh peach, sliced'
		],
		'directions': [
			'Pour soy milk into a blender and add vanilla ice cream, frozen strawberries, fresh strawberries, and peach slices. Blend until smooth and pour into a large glass.'
		],
		'reference': 'http://allrecipes.com/recipe/228421/strawberry-peach-smoothie/'
	},
	{
		'name': '3-Ingredient Peanut Butter Cookies',
		'ingredients': [
			'1 cup peanut butter',
			'1 cup white sugar',
			'1 egg'
		],
		'directions': [
			'Preheat oven to 350 degrees F (175 degrees C)',
			'Mix peanut butter, sugar, and egg together in a bowl using an electric mixer until smooth and creamy. Roll mixture into small balls and arrange on a baking sheet; flatten each with a fork, making a criss-cross pattern.',
			'Bake in the preheated oven for 10 minutes. Cool cookies on the baking sheet for 2 minutes before moving to a plate.'
		],
		'reference': 'http://allrecipes.com/recipe/244614/3-ingredient-peanut-butter-cookies/'
	},
];

let demoRecipes = localStorage.getItem('recipes') || JSON.stringify(exampleRecipes);

ReactDOM.render(
	<div>
		<RecipeBox recipes={demoRecipes}/>
	</div>,
	document.getElementById('app')
);
