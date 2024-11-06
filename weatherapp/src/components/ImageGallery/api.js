const data = [
    {
        id: 1,
        name: 'Shrimp and Chorizo Paella',
        date: 'September 14, 2016',
        description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
        image: 'https://loremflickr.com/200/200?random=1',
        type: 'breakfast'
    },
    {
        id: 2,
        name: 'Grilled Chicken Salad',
        date: 'October 2, 2017',
        description: 'A healthy and refreshing salad featuring grilled chicken, fresh vegetables, and a light vinaigrette dressing. Perfect for a light lunch.',
        image: 'https://loremflickr.com/200/200?random=2',
        type: 'lunch'
    },
    {
        id: 3,
        name: 'Steak and Potatoes',
        date: 'December 22, 2018',
        description: 'A classic combination of grilled steak with perfectly roasted potatoes, served with a side of vegetables for a hearty dinner.',
        image: 'https://loremflickr.com/200/200?random=3',
        type: 'dinner'
    },
    {
        id: 4,
        name: 'Avocado Toast',
        date: 'January 15, 2019',
        description: 'A delicious open-faced sandwich made with mashed avocado on toast, sprinkled with a dash of olive oil, salt, and pepper.',
        image: 'https://loremflickr.com/200/200?random=4',
        type: 'breakfast'
    },
    {
        id: 5,
        name: 'Tuna Sandwich',
        date: 'March 10, 2020',
        description: 'A savory sandwich filled with tuna, lettuce, and tomatoes, dressed in mayonnaise and served with a side of chips.',
        image: 'https://loremflickr.com/200/200?random=5',
        type: 'lunch'
    },
    {
        id: 6,
        name: 'Spaghetti Bolognese',
        date: 'August 8, 2020',
        description: 'Rich and hearty spaghetti with a slow-cooked Bolognese sauce, made with minced beef, tomatoes, and herbs.',
        image: 'https://loremflickr.com/200/200?random=6',
        type: 'dinner'
    },
    {
        id: 7,
        name: 'Pancakes with Maple Syrup',
        date: 'July 4, 2021',
        description: 'Fluffy pancakes topped with butter and drizzled with maple syrup, a breakfast favorite for all ages.',
        image: 'https://loremflickr.com/200/200?random=7',
        type: 'breakfast'
    },
    {
        id: 8,
        name: 'Caesar Salad with Grilled Shrimp',
        date: 'June 15, 2021',
        description: 'A crisp Caesar salad topped with grilled shrimp, croutons, and Parmesan cheese, tossed in a tangy Caesar dressing.',
        image: 'https://loremflickr.com/200/200?random=8',
        type: 'lunch'
    },
    {
        id: 9,
        name: 'Roast Chicken with Vegetables',
        date: 'September 5, 2021',
        description: 'Oven-roasted chicken with a side of perfectly cooked vegetables, served with a light gravy for a comforting dinner.',
        image: 'https://loremflickr.com/200/200?random=9',
        type: 'dinner'
    },
    {
        id: 10,
        name: 'French Toast',
        date: 'April 10, 2021',
        description: 'Deliciously sweet French toast topped with powdered sugar and fresh berries, perfect for a leisurely breakfast.',
        image: 'https://loremflickr.com/200/200?random=10',
        type: 'breakfast'
    },
    {
        id: 11,
        name: 'Vegetable Stir Fry',
        date: 'May 20, 2021',
        description: 'A vibrant mix of seasonal vegetables stir-fried in a savory sauce, served with rice for a healthy lunch.',
        image: 'https://loremflickr.com/200/200?random=11',
        type: 'lunch'
    },
    {
        id: 12,
        name: 'Lasagna',
        date: 'February 14, 2022',
        description: 'Layers of pasta, rich meat sauce, and cheese baked to perfection, a family favorite dinner dish.',
        image: 'https://loremflickr.com/200/200?random=12',
        type: 'dinner'
    },
    {
        id: 13,
        name: 'Omelette with Spinach and Feta',
        date: 'January 9, 2022',
        description: 'A fluffy omelette filled with fresh spinach and creamy feta cheese, served with toast for a wholesome breakfast.',
        image: 'https://loremflickr.com/200/200?random=13',
        type: 'breakfast'
    },
    {
        id: 14,
        name: 'Chicken Quesadilla',
        date: 'March 18, 2022',
        description: 'A cheesy chicken quesadilla served with salsa and guacamole, great for a satisfying lunch.',
        image: 'https://loremflickr.com/200/200?random=14',
        type: 'lunch'
    },
    {
        id: 15,
        name: 'Beef Tacos',
        date: 'August 12, 2022',
        description: 'Flavorful beef tacos with all the toppings, a fun and interactive dinner option.',
        image: 'https://loremflickr.com/200/200?random=15',
        type: 'dinner'
    },
    {
        id: 16,
        name: 'Muffins',
        date: 'November 30, 2022',
        description: 'Freshly baked muffins, perfect for breakfast or a snack throughout the day.',
        image: 'https://loremflickr.com/200/200?random=16',
        type: 'breakfast'
    },
    {
        id: 17,
        name: 'Pasta Primavera',
        date: 'February 22, 2023',
        description: 'A light and colorful pasta dish with seasonal vegetables, ideal for a light lunch.',
        image: 'https://loremflickr.com/200/200?random=17',
        type: 'lunch'
    },
    {
        id: 18,
        name: 'Chicken Curry',
        date: 'March 10, 2023',
        description: 'A spicy and flavorful chicken curry served with rice, perfect for a cozy dinner.',
        image: 'https://loremflickr.com/200/200?random=18',
        type: 'dinner'
    },
    {
        id: 19,
        name: 'Smoothie Bowl',
        date: 'April 14, 2023',
        description: 'A refreshing smoothie bowl topped with granola, nuts, and fresh fruit, great for breakfast.',
        image: 'https://loremflickr.com/200/200?random=19',
        type: 'breakfast'
    },
    {
        id: 20,
        name: 'Caprese Salad',
        date: 'May 20, 2023',
        description: 'A simple yet elegant salad with fresh mozzarella, tomatoes, basil, and balsamic glaze, perfect for lunch.',
        image: 'https://loremflickr.com/200/200?random=20',
        type: 'lunch'
    },
    {
        id: 21,
        name: 'Pork Chops with Applesauce',
        date: 'June 15, 2023',
        description: 'Juicy pork chops served with homemade applesauce for a comforting dinner option.',
        image: 'https://loremflickr.com/200/200?random=21',
        type: 'dinner'
    },
    {
        id: 22,
        name: 'Breakfast Burrito',
        date: 'July 4, 2023',
        description: 'A hearty burrito filled with scrambled eggs, cheese, and your choice of meat, perfect for breakfast on the go.',
        image: 'https://loremflickr.com/200/200?random=22',
        type: 'breakfast'
    },
    {
        id: 23,
        name: 'Quinoa Salad',
        date: 'August 10, 2023',
        description: 'A nutritious quinoa salad with black beans, corn, and cilantro lime dressing, great for a filling lunch.',
        image: 'https://loremflickr.com/200/200?random=23',
        type: 'lunch'
    },
    {
        id: 24,
        name: 'Salmon with Asparagus',
        date: 'September 25, 2023',
        description: 'Grilled salmon served with roasted asparagus, a healthy and delicious dinner option.',
        image: 'https://loremflickr.com/200/200?random=24',
        type: 'dinner'
   
    }
]
export default data;