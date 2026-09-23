# Baker's Blog
### LaunchCode W+ 2026 - Unit 2 Final Project
##### Created by Rome Diaz-Rivero

## About
Baker's Blog is a passion project turned into a website prototype. In Baker's Blog, users get to see all kinds of baking recipes posted by other bakers, being able
to create accounts to save recipes and comment on them. Baker's Blog is also focused on having allergy friendly recipes, where users can easily filter for them in the 
search page. 

## Technologies Used

| Languages  | Programs |
| ------------- |-------------  |
| HTML      | Visual Studio Code     |
| CSS      | IntelliJ     |
| Javascript/JSX    | Spring Boot    |
| Java      |   MySQLWorkbench   |
| SQL |  

## Installation Steps

> This requires an SQL server on your machine with a database called `bakersblog_sql05`. If you do not have this server, your data will not save nor work with the Spring Boot server.

1. Install MySQLWorkbench and create an SQL Server labelled `bakersblog_sql05`
2. Clone this repo and start up the Spring Boot server in `Unit2BakersBlogApplication.java`
3. Look into the `UserController` and `RecipeController` to see how GET, POST, and other HTTP requests work and function. Try using Postman first to send some preliminary data to `localhost/8080/...`. See bottom for JSON recipe examples.
4. Open a terminal and navigate into the bakers-blog directory in `.../unit2_bakers-blog/bakers-blog_React/bakers-blog`. Run `npm run dev`. (You may have to install some npm packages first).
5. Open your browser and go to [localhost:5173](http://localhost:5173/). You should see the homepage. 

## Wireframes
https://www.figma.com/design/uRAcxWNIIlozIxAa8pc2GL/LaunchCode-wireframes?node-id=0-1&p=f

![Home Page Wireframe](https://i.postimg.cc/YC23gb4Y/draft-01.jpg "Home Page")
![Individual Recipe Wireframe](https://i.postimg.cc/L84TfNq8/draft-2.jpg "Individual Recipe page")
![Profile Example](https://i.postimg.cc/0y5fmc67/normal-user-profile.jpg "Profile Example")
![Login Page wireframe](https://i.postimg.cc/bwYTb3Gn/login.jpg "Login Example")

## ER Diagrams
https://dbdiagram.io/d/bakers-blog-6a849e0efd15a881e5acfa04
![ER Diagram](https://i.postimg.cc/k4N6TPzW/Screenshot-2026-09-23-at-5-05-48-PM.png "ER Diagram")

## Future Features
For the future, I want to make a verification form for users to submit an application to become a Baker user, where they're allowed to post their own recipes from their accounts. Then each recipe would show the user that is the poster of said recipe. I would also allow users to make their own lists, like naming the list and saving specific recipes to that list. For each recipe, I would add a download/print to a PDF format for easier accessibility. 

## Preliminary Recipe Data
```
[
    {
        "title": "Healthy Berry Streusel Bars",
        "mainImageUrl": "https://sallysbakingaddiction.com/wp-content/uploads/2014/07/healthy-berry-oat-streusel-bars-3.jpg",
        "utensils": [
            {
                "utensil": "8x8-inch pan",
                "id": 1
            },
            {
                "utensil": "Spatula or wooden spoon",
                "id": 2
            },
            {
                "utensil": "Fork",
                "id": 3
            }
        ],
        "steps": [
            {
                "stepDesc": "Set an oven rack to the middle position and preheat the oven to 350 degrees F (175 degrees C). Lightly grease an 8x8-inch baking dish.",
                "id": 1,
                "order": 1,
                "recipeId": 0
            },
            {
                "stepDesc": "Step two",
                "id": 2,
                "order": 2,
                "recipeId": 0
            },
            {
                "stepDesc": "Step three",
                "id": 3,
                "order": 3,
                "recipeId": 0
            }
        ],
        "ingredients": [
            {
                "ingredient": "1 and 1/2 Tablespoons (12g) cornstarch",
                "id": 1
            },
            {
                "ingredient": "1 and 1/2 Tablespoons (23ml) water",
                "id": 2
            },
            {
                "ingredient": "2 cups (about 300g) fresh or frozen mixed berries (do not thaw & see note)",
                "id": 3
            },
            {
                "ingredient": "1/4 cup (60ml) pure maple syrup",
                "id": 4
            },
            {
                "ingredient": "1 Tablespoon (11g) coconut sugar, brown sugar, or granulated sugar",
                "id": 5
            },
            {
                "ingredient": "2 and 1/2 cups (213g) old-fashioned whole rolled oats or quick oats",
                "id": 6
            },
            {
                "ingredient": "1/2 teaspoon ground cinnamon",
                "id": 7
            },
            {
                "ingredient": "1 cup (255g) almond butter",
                "id": 8
            },
            {
                "ingredient": "1/4 cup (60ml) pure maple syrup",
                "id": 4
            },
            {
                "ingredient": "1/4 cup (60g) unsweetened applesauce",
                "id": 9
            },
            {
                "ingredient": "1/4 cup (56g) coconut oil, melted (or use melted butter)",
                "id": 10
            },
            {
                "ingredient": "For topping: 1/2 cup (64g) sliced or chopped almonds and 1 extra Tablespoon oats",
                "id": 11
            }
        ],
        "tags": [
            {
                "tag": "Gluten Free",
                "description": null,
                "id": 10
            },
            {
                "tag": "Fruity",
                "description": null,
                "id": 2
            }
        ],
        "images": [],
        "comments": [
            {
                "content": "Sending this to my friend who bakes!",
                "id": 8,
                "recipeid": 1,
                "userId": 3
            },
            {
                "content": "Sending this to my friend who bakes!",
                "id": 9,
                "recipeid": 1,
                "userId": 3
            },
            {
                "content": "trying to edit",
                "id": 20,
                "recipeid": 1,
                "userId": 1
            }
        ],
        "createdAt": null,
        "id": 1,
        "userId": 0
    },
    {
        "title": "Moist Chocolate Muffins",
        "mainImageUrl": "https://www.allrecipes.com/thmb/m7IoQUlfO4p1OYm-jamwwJjpY_Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/228553-moist-chocolate-muffins-DDMFS-4x3-a9f73a46938547c99d921613dc167741.jpg",
        "utensils": [
            {
                "utensil": "Muffin pan",
                "id": 4
            },
            {
                "utensil": "Paper liners",
                "id": 5
            },
            {
                "utensil": "Mixing bowl",
                "id": 6
            }
        ],
        "steps": [
            {
                "stepDesc": "Gather ingredients.",
                "id": 4,
                "order": 1,
                "recipeId": 0
            },
            {
                "stepDesc": "Preheat the oven to 400 degrees F (200 degrees C). Line a 12-cup muffin tin with paper liners.",
                "id": 5,
                "order": 2,
                "recipeId": 0
            },
            {
                "stepDesc": "Combine flour, sugar, ¾ cup chocolate chips, cocoa powder, and baking soda in a large bowl.",
                "id": 6,
                "order": 3,
                "recipeId": 0
            },
            {
                "stepDesc": "Whisk yogurt, milk, oil, egg, and vanilla extract together in separate bowl until smooth.",
                "id": 7,
                "order": 4,
                "recipeId": 0
            },
            {
                "stepDesc": "Pour yogurt mixture into the chocolate mixture and stir until batter is just blended.",
                "id": 8,
                "order": 5,
                "recipeId": 0
            },
            {
                "stepDesc": "Divide batter among the prepared muffin cups, filling each ¾ full; sprinkle with remaining ¼ cup chocolate chips.",
                "id": 9,
                "order": 6,
                "recipeId": 0
            },
            {
                "stepDesc": "Bake in the preheated oven until a toothpick inserted into centers comes out clean, about 20 minutes. Cool in the tin for 10 minutes before transferring to a wire rack to cool completely.",
                "id": 10,
                "order": 7,
                "recipeId": 0
            }
        ],
        "ingredients": [
            {
                "ingredient": "2 cups all-purpose flour",
                "id": 12
            },
            {
                "ingredient": "1 cup white sugar",
                "id": 13
            },
            {
                "ingredient": "1 cup semisweet chocolate chips, divided",
                "id": 14
            },
            {
                "ingredient": "½ cup unsweetened cocoa powder",
                "id": 15
            },
            {
                "ingredient": "1 teaspoon baking soda",
                "id": 16
            },
            {
                "ingredient": "1 cup plain yogurt",
                "id": 17
            },
            {
                "ingredient": "½ cup milk",
                "id": 18
            },
            {
                "ingredient": "½ cup vegetable oil",
                "id": 19
            },
            {
                "ingredient": "1 large egg",
                "id": 20
            },
            {
                "ingredient": "1 teaspoon vanilla extract",
                "id": 21
            }
        ],
        "tags": [
            {
                "tag": "Chocolate",
                "description": null,
                "id": 3
            },
            {
                "tag": "Beginner",
                "description": null,
                "id": 4
            }
        ],
        "images": [],
        "comments": [],
        "createdAt": null,
        "id": 2,
        "userId": 0
    },
    {
        "title": "Lemon Bars",
        "mainImageUrl": "https://www.allrecipes.com/thmb/9rW0tBgO35EwBSVkstIEuZ2FlVc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/1662481908IMG_2020_Chef-Johns-Lemon-Bars-4x3-37cd9e7a6a144c95815e54b82a547f7b.jpg",
        "utensils": [
            {
                "utensil": "8x8-inch pan",
                "id": 1
            },
            {
                "utensil": "Spatula or wooden spoon",
                "id": 2
            },
            {
                "utensil": "Fork",
                "id": 3
            }
        ],
        "steps": [
            {
                "stepDesc": "Set an oven rack to the middle position and preheat the oven to 350 degrees F (175 degrees C). Lightly grease an 8x8-inch baking dish.",
                "id": 11,
                "order": 1,
                "recipeId": 0
            },
            {
                "stepDesc": "Make crust: Use the back of a spatula or wooden spoon to mash flour and butter in a large bowl until thoroughly combined. Mix in confectioners' sugar, vanilla, and salt until mixture resembles slightly crumbly cookie dough. Use a fork to prick holes all over crust.",
                "id": 12,
                "order": 2,
                "recipeId": 0
            },
            {
                "stepDesc": "Bake on the middle rack in the preheated oven until edges are barely golden brown, about 22 minutes. Set aside.",
                "id": 13,
                "order": 3,
                "recipeId": 0
            },
            {
                "stepDesc": "Make custard: Beat together eggs and egg yolks in a medium bowl until combined. Whisk in white sugar and flour until smooth. Add lemon juice and zest; whisk for 2 minutes. Pour over warm crust.",
                "id": 14,
                "order": 4,
                "recipeId": 0
            },
            {
                "stepDesc": "Bake on the center rack until custard is set and the top has a thin white sugary crust, about 25 minutes. Let cool completely before cutting into bars.",
                "id": 15,
                "order": 5,
                "recipeId": 0
            },
            {
                "stepDesc": "Dip a knife into very hot water, then run the blade around the edges and cut into 16 squares. Dust bars with confectioners' sugar.",
                "id": 16,
                "order": 6,
                "recipeId": 0
            }
        ],
        "ingredients": [
            {
                "ingredient": "1 cup all-purpose flour",
                "id": 22
            },
            {
                "ingredient": "½ cup unsalted butter at room temperature",
                "id": 23
            },
            {
                "ingredient": "¼ cup confectioners' sugar",
                "id": 24
            },
            {
                "ingredient": "¼ teaspoon vanilla extract",
                "id": 25
            },
            {
                "ingredient": "¼ teaspoon salt",
                "id": 26
            },
            {
                "ingredient": "2 large eggs",
                "id": 27
            },
            {
                "ingredient": "1 large egg yolks",
                "id": 28
            },
            {
                "ingredient": "1 cup white sugar",
                "id": 13
            },
            {
                "ingredient": "2 tablespoons all-purpose flour",
                "id": 29
            },
            {
                "ingredient": "¼ cup freshly squeezed lemon juice",
                "id": 30
            },
            {
                "ingredient": "1 tablespoon freshly grated lemon zest",
                "id": 31
            },
            {
                "ingredient": "1 teaspoon confectioners' sugar, or to taste",
                "id": 32
            }
        ],
        "tags": [
            {
                "tag": "Beginner",
                "description": null,
                "id": 4
            }
        ],
        "images": [
            {
                "imageUrl": "https://lifemadesimplebakes.com/wp-content/uploads/2020/03/Easy-Lemon-Bars-square-1200.jpg",
                "id": 1
            },
            {
                "imageUrl": "https://i2.wp.com/lifemadesimplebakes.com/wp-content/uploads/2015/04/Classic-Lemon-Bars-2.jpg",
                "id": 2
            },
            {
                "imageUrl": "https://www.allrecipes.com/thmb/ZIfSPeyslzwgUB6iUYRX3pv5xcU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25091-lemon-square-bars-VAT-Beauty-2x1-c2f27817dcc34820a0cd5d3a718838c3.jpg",
                "id": 3
            }
        ],
        "comments": [],
        "createdAt": null,
        "id": 3,
        "userId": 0
    },
    {
        "title": "Allergy-Friendly Fudgy Mint Brownies",
        "mainImageUrl": "https://www.allergicliving.com/wp-content/uploads/2024/03/Mint-Brownies-Stacked-2.jpg",
        "utensils": [
            {
                "utensil": "8×8-inch square brownie pan",
                "id": 7
            },
            {
                "utensil": "Stand mixer with mixing bowl",
                "id": 8
            },
            {
                "utensil": "Flat beater attachment",
                "id": 9
            },
            {
                "utensil": "Piping bag",
                "id": 10
            },
            {
                "utensil": "Open star tip",
                "id": 11
            },
            {
                "utensil": "Silicone melting pot or small microwavable bowl",
                "id": 12
            },
            {
                "utensil": "Optional: Parchment paper",
                "id": 13
            }
        ],
        "steps": [
            {
                "stepDesc": "Prepare brownie mix according to the instructions on the package. To prevent sticking, grease or line the bottom and edges of a non-stick brownie pan with parchment paper.",
                "id": 17,
                "order": 1,
                "recipeId": 0
            },
            {
                "stepDesc": "Once the brownies have finished baking, set aside to cool completely.",
                "id": 18,
                "order": 2,
                "recipeId": 0
            },
            {
                "stepDesc": "Begin preparing the mint frosting. On low speed, whip softened dairy-free margarine in the stand mixer’s bowl for 2-3 minutes, or until it is soft and smooth. Mix in dairy-free milk beverage, followed by confectioners’ sugar.",
                "id": 19,
                "order": 3,
                "recipeId": 0
            },
            {
                "stepDesc": "Once frosting is created, slowly add peppermint extract. Remember: A little bit goes a long way. Taste and adjust the amount based on your preferences.",
                "id": 20,
                "order": 4,
                "recipeId": 0
            },
            {
                "stepDesc": "If adding food coloring, mix in a drop of green gel coloring.",
                "id": 21,
                "order": 5,
                "recipeId": 0
            },
            {
                "stepDesc": "Fill a piping bag with frosting, then pipe thick rows of frosting across cooled brownies in pan.",
                "id": 22,
                "order": 6,
                "recipeId": 0
            }
        ],
        "ingredients": [
            {
                "ingredient": "1 14.4 oz package Dark Chocolate Fudgy Brownie Plant-Based Baking Mix",
                "id": 33
            },
            {
                "ingredient": "1/2 cup dairy-free, soy-free margarine (room temperature)",
                "id": 34
            },
            {
                "ingredient": "2 tbsp dairy-free milk beverage (e.g. rice milk)",
                "id": 35
            },
            {
                "ingredient": "2 cups confectioners’ sugar",
                "id": 36
            },
            {
                "ingredient": "1 tsp peppermint extract",
                "id": 37
            },
            {
                "ingredient": "1 drop green gel food coloring (e.g. Americolor)",
                "id": 38
            },
            {
                "ingredient": "1/2 cup allergy-friendly semi-sweet chocolate chips (e.g. Enjoy Life)",
                "id": 39
            },
            {
                "ingredient": "4 tbsp dairy-free, soy-free margarine (room temperature)",
                "id": 40
            }
        ],
        "tags": [
            {
                "tag": "Tree Nut Free",
                "description": null,
                "id": 5
            },
            {
                "tag": "Nut Free",
                "description": null,
                "id": 6
            }
        ],
        "images": [
            {
                "imageUrl": "https://myorganizedchaos.net/wp-content/uploads/2025/03/chocolate-mint-brownies-1.jpg",
                "id": 4
            }
        ],
        "comments": [],
        "createdAt": null,
        "id": 4,
        "userId": 0
    }
  ]
```