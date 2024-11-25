import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class RecipeService {
	image = 'https://placehold.co/100';

	recipes: Recipe[] = [
    {
      id: 1,
      name: 'Spaghetti Bolognese',
      description: 'A classic Italian pasta dish with rich meat sauce.',
      imagePath: '/Spaghetti Bolognese.jpg',
      ingredients: [
        'spaghetti',
        'ground beef',
        'tomato sauce',
        'onion',
        'garlic',
        'parmesan cheese',
      ],
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Thai Green Curry',
      description: 'A fragrant and creamy green curry with vegetables.',
      imagePath: '/Thai Green Curry.jpg',
      ingredients: [
        'coconut milk',
        'green curry paste',
        'chicken',
        'bamboo shoots',
        'basil leaves',
      ],
      rating: 4.9,
    },
    {
      id: 3,
      name: 'Mediterranean Quinoa Salad',
      description: 'A healthy and vibrant salad with quinoa and fresh veggies.',
      imagePath: '/Mediterranean Quinoa Salad.jpg',
      ingredients: [
        'quinoa',
        'cucumber',
        'cherry tomatoes',
        'feta cheese',
        'olive oil',
        'lemon juice',
      ],
      rating: 4.6,
    },
    {
      id: 4,
      name: 'Fish Tacos',
      description: 'Crispy fish tacos with zesty lime crema.',
      imagePath: '/Fish Tacos.jpg',
      ingredients: [
        'white fish',
        'taco shells',
        'cabbage',
        'lime',
        'mayo',
      ],
      rating: 4.7,
    },
    {
      id: 5,
      name: 'BBQ Chicken Pizza',
      description: 'A smoky and flavorful pizza with BBQ sauce.',
      imagePath: '/BBQ Chicken Pizza.jpg',
      ingredients: [
        'pizza dough',
        'BBQ sauce',
        'chicken',
        'mozzarella',
        'red onion',
        'cilantro',
      ],
      rating: 4.8,
    },
    {
      id: 6,
      name: 'Greek Salad',
      description: 'A refreshing salad with classic Mediterranean flavors.',
      imagePath: '/Greek Salad.jpg',
      ingredients: [
        'romaine lettuce',
        'cucumber',
        'olives',
        'feta cheese',
        'olive oil',
        'oregano',
      ],
      rating: 4.5,
    },
    {
      id: 7,
      name: 'Avocado Toast',
      description: 'Simple yet delicious avocado toast.',
      imagePath: '/Avocado Toast.jpg',
      ingredients: [
        'bread',
        'avocado',
        'lemon juice',
        'chili flakes',
        'olive oil',
      ],
      rating: 4.6,
    },
    {
      id: 8,
      name: 'Banana Pancakes',
      description: 'Sweet and fluffy banana pancakes.',
      imagePath: '/Banana Pancakes.jpg',
      ingredients: [
        'banana',
        'flour',
        'egg',
        'baking powder',
        'honey',
      ],
      rating: 4.7,
    },
    {
      id: 9,
      name: 'French Onion Soup',
      description: 'Rich and savory soup topped with melted cheese.',
      imagePath: '/French Onion Soup.jpg',
      ingredients: [
        'onion',
        'beef broth',
        'white wine',
        'bread',
        'gruyere cheese',
      ],
      rating: 4.8,
    },
    {
      id: 10,
      name: 'Lemon Cheesecake',
      description: 'A tangy and creamy lemon-flavored cheesecake.',
      imagePath: '/Lemon Cheesecake.jpg',
      ingredients: [
        'cream cheese',
        'lemon juice',
        'sugar',
        'graham crackers',
        'butter',
      ],
      rating: 4.9,
    },
  ];
  
	getRecipes(): Observable<Recipe[]> {
		return new Observable((observer) => {
			observer.next(this.recipes);
			observer.complete();
		});
	}
}