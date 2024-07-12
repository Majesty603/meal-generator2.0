// Define arrays of meal options with recipes for different diets
const breakfastOptions = {
    standard: [
        { meal: "Oatmeal with fruits", recipe: "Cook oats with water, add fruits like bananas and berries, top with honey or maple syrup." },
        { meal: "Avocado toast", recipe: "Toast bread, spread mashed avocado on top, sprinkle with salt and pepper, drizzle with olive oil." },
        { meal: "Greek yogurt with berries", recipe: "Mix Greek yogurt with fresh berries like strawberries, blueberries, and raspberries, add a drizzle of honey." },
        { meal: "Smoothie bowl", recipe: "Blend frozen fruits like bananas and berries with yogurt or milk until smooth, pour into a bowl and top with granola, nuts, and fruits." },
        { meal: "Eggs and toast", recipe: "Fry or scramble eggs, serve with toasted bread, optionally spread with butter or jam." },
        { meal: "Pancakes with syrup", recipe: "Mix flour, eggs, milk, and baking powder to make pancake batter. Cook pancakes on a griddle, serve with syrup." }
    ],
    keto: [
        { meal: "Egg muffins with cheese and spinach", recipe: "Whisk eggs, cheese, and spinach together, pour into muffin tins, bake until set." },
        { meal: "Bacon and eggs", recipe: "Fry bacon until crispy, cook eggs as desired (scrambled, fried, or poached)." },
        { meal: "Chia seed pudding", recipe: "Mix chia seeds with almond milk, sweeten with a keto-friendly sweetener, refrigerate until thickened." },
        { meal: "Avocado and smoked salmon", recipe: "Slice avocado, top with smoked salmon, sprinkle with salt and pepper, drizzle with olive oil." },
        { meal: "Coconut flour pancakes", recipe: "Combine coconut flour, eggs, and almond milk to make batter. Cook pancakes on a griddle, serve with butter." }
    ],
    mediterranean: [
        { meal: "Mediterranean omelette", recipe: "Whisk eggs, tomatoes, olives, and feta cheese together, cook in a pan until eggs are set." },
        { meal: "Greek yogurt with honey and nuts", recipe: "Mix Greek yogurt with honey, top with nuts like almonds or walnuts." },
        { meal: "Muesli with fruits", recipe: "Combine oats, nuts, seeds, and dried fruits. Serve with Greek yogurt and fresh fruits." },
        { meal: "Hummus and veggies", recipe: "Serve hummus with fresh vegetables like cucumbers, carrots, and bell peppers." },
        { meal: "Caprese salad", recipe: "Layer slices of tomatoes, mozzarella cheese, and basil leaves. Drizzle with olive oil and balsamic vinegar." },
        { meal: "Whole grain toast with olive oil and tomato", recipe: "Toast whole grain bread, drizzle with olive oil, top with sliced tomatoes and sprinkle with salt and pepper." }
    ],
    carnivore: [
        { meal: "Steak and eggs", recipe: "Grill steak to desired doneness, serve with scrambled or fried eggs." },
        { meal: "Chicken thighs with roasted vegetables", recipe: "Season chicken thighs, roast in the oven with vegetables like carrots and potatoes." },
        { meal: "Beef burger (no bun)", recipe: "Grill beef patties, serve without a bun, optionally top with cheese, lettuce, and tomato." },
        { meal: "Pork chops with salad", recipe: "Season pork chops, grill or bake until cooked through, serve with a side salad." },
        { meal: "Ground beef stir-fry", recipe: "Stir-fry ground beef with vegetables like bell peppers, onions, and broccoli, season with soy sauce." }
    ],
    lowCarb: [
        { meal: "Zucchini noodles with pesto", recipe: "Spiralize zucchini into noodles, toss with pesto sauce made from basil, pine nuts, and olive oil." },
        { meal: "Cauliflower fried rice", recipe: "Grate cauliflower into rice-sized pieces, stir-fry with vegetables, eggs, and soy sauce." },
        { meal: "Spinach and feta omelette", recipe: "Whisk eggs, spinach, and feta cheese together, cook in a pan until eggs are set." },
        { meal: "Grilled chicken with green beans", recipe: "Grill chicken breasts, serve with steamed green beans tossed in olive oil and lemon juice." },
        { meal: "Salmon with asparagus", recipe: "Bake or grill salmon fillets, serve with roasted asparagus, drizzle with olive oil and sprinkle with salt and pepper." }
    ],
    pescatarian: [
        { meal: "Grilled salmon with quinoa", recipe: "Grill salmon fillets, serve with cooked quinoa seasoned with herbs and lemon juice." },
        { meal: "Tuna salad with avocado", recipe: "Mix canned tuna with mashed avocado, serve on top of salad greens." },
        { meal: "Shrimp stir-fry with veggies", recipe: "Stir-fry shrimp with vegetables like bell peppers, snow peas, and carrots, season with soy sauce." },
        { meal: "Seared scallops with spinach", recipe: "Sear scallops in a hot pan, serve with sautéed spinach and garlic." },
        { meal: "Sushi rolls with avocado", recipe: "Prepare sushi rolls with seaweed, sushi rice, avocado, and optional fillings like cucumber or cooked shrimp." }
    ],
    vegan: [
        { meal: "Smoothie bowl with fruits", recipe: "Blend frozen fruits with plant-based milk, pour into a bowl, top with granola, nuts, and seeds." },
        { meal: "Avocado toast", recipe: "Toast bread, spread mashed avocado on top, sprinkle with salt and pepper, drizzle with olive oil." },
        { meal: "Chia pudding with almond milk", recipe: "Mix chia seeds with almond milk, sweeten with agave or maple syrup, refrigerate until thickened." },
        { meal: "Vegan pancakes", recipe: "Combine flour, plant-based milk, and baking powder to make batter. Cook pancakes on a griddle, serve with syrup." },
        { meal: "Tofu scramble", recipe: "Crumble tofu, stir-fry with vegetables like spinach, onions, and bell peppers, season with turmeric and nutritional yeast." },
        { meal: "Fruit salad", recipe: "Combine fresh fruits like berries, melons, and citrus fruits, optionally drizzle with a citrus dressing." }
    ],
    paleo: [
        { meal: "Sweet potato hash with eggs", recipe: "Dice sweet potatoes, sauté with onions and bell peppers until tender, serve with fried or scrambled eggs." },
        { meal: "Smoothie with almond milk and spinach", recipe: "Blend almond milk, spinach, and frozen fruits until smooth, optionally add protein powder." },
        { meal: "Berries with coconut cream", recipe: "Serve fresh berries with coconut cream, optionally sweeten with honey or maple syrup." },
        { meal: "Almond flour pancakes", recipe: "Combine almond flour, eggs, and almond milk to make batter. Cook pancakes on a griddle, serve with berries." },
        { meal: "Scrambled eggs with avocado", recipe: "Scramble eggs, serve with sliced avocado, sprinkle with salt and pepper." }
    ],
    vegetarian: [
        { meal: "Greek yogurt with honey and nuts", recipe: "Mix Greek yogurt with honey, top with nuts like almonds or walnuts." },
        { meal: "Avocado toast", recipe: "Toast bread, spread mashed avocado on top, sprinkle with salt and pepper, drizzle with olive oil." },
        { meal: "Fruit smoothie", recipe: "Blend fresh fruits with yogurt or plant-based milk until smooth, optionally add honey or agave syrup." },
        { meal: "Vegetable omelette", recipe: "Whisk eggs, sautéed vegetables like bell peppers and mushrooms, cook in a pan until eggs are set." },
        { meal: "Whole grain toast with peanut butter", recipe: "Toast whole grain bread, spread with peanut butter, optionally top with sliced bananas or berries." }
    ],
    glutenFree: [
        { meal: "Smoothie bowl with fruits", recipe: "Blend frozen fruits with yogurt or plant-based milk, pour into a bowl, top with gluten-free granola and nuts." },
        { meal: "Oatmeal with almond milk", recipe: "Cook gluten-free oats with almond milk, top with fresh berries and a drizzle of honey." },
        { meal: "Greek yogurt with berries", recipe: "Mix Greek yogurt with fresh berries like strawberries, blueberries, and raspberries, add a drizzle of honey." },
        { meal: "Eggs and bacon", recipe: "Fry bacon until crispy, cook eggs as desired (scrambled, fried, or poached)." },
        { meal: "Rice cakes with avocado", recipe: "Spread mashed avocado on top of rice cakes, sprinkle with salt and pepper." }
    ]
};

const lunchOptions = {
    standard: [
        { meal: "Grilled chicken salad", recipe: "Grill chicken breasts, slice and serve over mixed greens with tomatoes, cucumbers, and dressing." },
        { meal: "Quinoa and vegetable stir-fry", recipe: "Cook quinoa, stir-fry with mixed vegetables like bell peppers, broccoli, and carrots." },
        { meal: "Caprese sandwich", recipe: "Layer slices of tomato, mozzarella cheese, and basil leaves between slices of bread, drizzle with balsamic glaze." },
        { meal: "Sushi rolls", recipe: "Prepare sushi rolls with seaweed, sushi rice, and fillings like cucumber, avocado, or cooked shrimp." },
        { meal: "Burrito bowl", recipe: "Layer rice, black beans, grilled chicken or beef, salsa, avocado, and sour cream in a bowl." },
        { meal: "Pasta with tomato sauce", recipe: "Cook pasta, toss with tomato sauce made from tomatoes, garlic, and herbs, optionally top with grated cheese." }
    ],
    keto: [
        { meal: "Chicken Caesar salad (no croutons)", recipe: "Grill or roast chicken breasts, slice and serve over romaine lettuce with Caesar dressing." },
        { meal: "Avocado and chicken lettuce wraps", recipe: "Fill lettuce leaves with sliced avocado, grilled chicken, and ranch dressing." },
        { meal: "Beef and broccoli stir-fry", recipe: "Stir-fry beef strips with broccoli and garlic in a skillet, season with soy sauce and sesame oil." },
        { meal: "Eggplant parmesan", recipe: "Bread and bake eggplant slices, layer with marinara sauce and mozzarella cheese, bake until cheese melts." },
        { meal: "Cobb salad with ranch dressing", recipe: "Combine mixed greens, grilled chicken, bacon, hard-boiled eggs, avocado, tomatoes, and blue cheese, drizzle with ranch dressing." }
    ],
    mediterranean: [
        { meal: "Greek salad with grilled chicken", recipe: "Grill chicken breasts, slice and serve over Greek salad with tomatoes, cucumbers, olives, feta cheese, and Greek dressing." },
        { meal: "Falafel wrap", recipe: "Prepare falafel patties, wrap in pita bread with lettuce, tomatoes, cucumbers, and tahini sauce." },
        { meal: "Tabbouleh salad", recipe: "Combine bulgur wheat, parsley, tomatoes, onions, and mint, dress with lemon juice and olive oil." },
        { meal: "Mediterranean vegetable couscous", recipe: "Cook couscous, toss with roasted vegetables like zucchini, bell peppers, and chickpeas." },
        { meal: "Stuffed bell peppers", recipe: "Fill bell peppers with a mixture of rice, tomatoes, onions, and herbs, bake until peppers are tender." },
        { meal: "Lentil soup", recipe: "Cook lentils with onions, carrots, celery, and tomatoes in vegetable broth, season with cumin and coriander." }
    ],
    carnivore: [
        { meal: "Beef steak with mashed potatoes", recipe: "Grill or pan-sear steak to desired doneness, serve with mashed potatoes and gravy." },
        { meal: "Pulled pork sandwich", recipe: "Slow-cook pork shoulder until tender, shred and serve on sandwich buns with coleslaw." },
        { meal: "Bacon and cheese burger", recipe: "Grill beef patties, serve on burger buns with bacon, cheese, lettuce, tomato, and condiments." },
        { meal: "Beef kebabs with salad", recipe: "Skewer beef cubes with vegetables like onions and bell peppers, grill until beef is cooked through, serve with salad." },
        { meal: "Roast chicken with vegetables", recipe: "Roast whole chicken with root vegetables like potatoes, carrots, and onions, season with herbs and lemon." }
    ],
    lowCarb: [
        { meal: "Turkey lettuce wraps", recipe: "Fill lettuce leaves with sliced turkey, avocado, cheese, and mayo." },
        { meal: "Cauliflower crust pizza", recipe: "Make pizza crust from cauliflower, top with sauce, cheese, and toppings, bake until cheese is melted." },
        { meal: "Salmon and avocado salad", recipe: "Grill or bake salmon fillets, serve over mixed greens with avocado, cucumber, and lemon vinaigrette." },
        { meal: "Egg salad with lettuce wraps", recipe: "Mix chopped hard-boiled eggs with mayo and mustard, serve in lettuce wraps." },
        { meal: "Shrimp and avocado bowl", recipe: "Grill or sauté shrimp, serve with sliced avocado over a bed of mixed greens, drizzle with olive oil and lemon juice." }
    ],
    pescatarian: [
        { meal: "Tuna salad sandwich", recipe: "Mix canned tuna with mayo, serve on whole grain bread with lettuce and tomato." },
        { meal: "Seared tuna salad", recipe: "Sear tuna steaks, slice and serve over mixed greens with soy-ginger dressing." },
        { meal: "Fish tacos with slaw", recipe: "Grill or bake fish fillets, serve in tortillas with cabbage slaw and avocado." },
        { meal: "Grilled shrimp skewers with quinoa", recipe: "Skewer shrimp with vegetables, grill until shrimp are pink, serve with quinoa." },
        { meal: "Seafood paella", recipe: "Cook rice with seafood like shrimp, mussels, and calamari, season with saffron and paprika." }
    ],
    vegan: [
        { meal: "Quinoa salad with chickpeas", recipe: "Cook quinoa, toss with chickpeas, chopped vegetables like cucumbers and tomatoes, dress with lemon vinaigrette." },
        { meal: "Vegan burrito bowl", recipe: "Layer rice, black beans, grilled vegetables, salsa, guacamole, and corn in a bowl." },
        { meal: "Lentil soup", recipe: "Cook lentils with onions, carrots, celery, and tomatoes in vegetable broth, season with cumin and coriander." },
        { meal: "Grilled veggie sandwich", recipe: "Grill vegetables like zucchini, bell peppers, and eggplant, serve on whole grain bread with hummus." },
        { meal: "Vegan sushi rolls", recipe: "Prepare sushi rolls with seaweed, sushi rice, and fillings like cucumber, avocado, or marinated tofu." },
        { meal: "Falafel wrap", recipe: "Prepare falafel patties, wrap in pita bread with lettuce, tomatoes, cucumbers, and tahini sauce." }
    ],
    paleo: [
        { meal: "Grilled chicken with avocado", recipe: "Grill chicken breasts, serve with sliced avocado and a side of steamed vegetables." },
        { meal: "Salmon salad with mixed greens", recipe: "Grill or bake salmon fillets, serve over mixed greens with tomatoes, cucumbers, and lemon vinaigrette." },
        { meal: "Turkey lettuce wraps", recipe: "Fill lettuce leaves with sliced turkey, avocado, and veggies." },
        { meal: "Zucchini noodles with pesto", recipe: "Spiralize zucchini into noodles, toss with pesto sauce made from basil, pine nuts, and olive oil." },
        { meal: "Stuffed bell peppers", recipe: "Fill bell peppers with a mixture of ground meat, tomatoes, onions, and herbs, bake until peppers are tender." }
    ],
    vegetarian: [
        { meal: "Vegetable stir-fry with tofu", recipe: "Stir-fry tofu with vegetables like bell peppers, broccoli, and carrots, season with soy sauce and sesame oil." },
        { meal: "Caprese salad", recipe: "Layer slices of tomato, mozzarella cheese, and basil leaves. Drizzle with olive oil and balsamic vinegar." },
        { meal: "Minestrone soup", recipe: "Cook vegetables like carrots, celery, and tomatoes in vegetable broth, add pasta and beans, season with Italian herbs." },
        { meal: "Veggie burger", recipe: "Grill or bake veggie patties, serve on whole grain buns with lettuce, tomato, and condiments." },
        { meal: "Stuffed mushrooms", recipe: "Fill mushrooms with a mixture of breadcrumbs, cheese, and herbs, bake until mushrooms are tender." }
    ],
    glutenFree: [
        { meal: "Grilled chicken salad", recipe: "Grill chicken breasts, slice and serve over mixed greens with tomatoes, cucumbers, and dressing." },
        { meal: "Quinoa and vegetable stir-fry", recipe: "Cook quinoa, stir-fry with mixed vegetables like bell peppers, broccoli, and carrots." },
        { meal: "Gluten-free pasta with marinara", recipe: "Cook gluten-free pasta, toss with marinara sauce made from tomatoes, garlic, and herbs, optionally top with grated cheese." },
        { meal: "Rice and beans", recipe: "Cook rice and beans, season with herbs and spices, serve as a side dish or main course." },
        { meal: "Turkey and avocado wrap", recipe: "Fill gluten-free wrap with sliced turkey, avocado, lettuce, and tomato, optionally add mayo or mustard." }
    ]
};
const dinnerOptions = {
    standard: [
        { meal: "Salmon with roasted vegetables", recipe: "Season salmon fillets with salt, pepper, and herbs, roast in the oven with vegetables like broccoli, carrots, and potatoes." },
        { meal: "Vegetarian lasagna", recipe: "Layer lasagna noodles with marinara sauce, ricotta cheese, spinach, and mozzarella, bake until cheese is melted and bubbly." },
        { meal: "Teriyaki chicken with rice", recipe: "Marinate chicken in teriyaki sauce, grill or bake until cooked through, serve with steamed rice and steamed vegetables." },
        { meal: "Steak and mashed potatoes", recipe: "Grill or pan-sear steak to desired doneness, serve with mashed potatoes made with butter, milk, and seasonings." },
        { meal: "Shrimp tacos", recipe: "Season shrimp with taco seasoning, sauté until cooked, serve in taco shells with shredded lettuce, diced tomatoes, and salsa." },
        { meal: "Pizza margherita", recipe: "Spread pizza dough with marinara sauce, top with fresh mozzarella slices and basil leaves, bake until crust is golden and cheese is melted." }
    ],
    keto: [
        { meal: "Grilled salmon with broccoli", recipe: "Season salmon fillets with salt, pepper, and olive oil, grill until cooked through, serve with steamed broccoli." },
        { meal: "Zucchini noodles with pesto", recipe: "Spiralize zucchini into noodles, toss with pesto sauce made from basil, pine nuts, and olive oil." },
        { meal: "Stuffed bell peppers (keto version)", recipe: "Fill bell peppers with ground beef or turkey, cauliflower rice, and cheese, bake until peppers are tender and cheese is melted." },
        { meal: "Baked chicken thighs with cauliflower mash", recipe: "Season chicken thighs, bake until cooked through, serve with mashed cauliflower made with butter, cream, and seasonings." },
        { meal: "Keto beef stir-fry", recipe: "Stir-fry beef strips with low-carb vegetables like bell peppers, broccoli, and mushrooms, season with soy sauce and garlic." }
    ],
    mediterranean: [
        { meal: "Mediterranean baked cod", recipe: "Season cod fillets with herbs, lemon juice, and olive oil, bake until fish flakes easily with a fork." },
        { meal: "Ratatouille with chickpeas", recipe: "Cook eggplant, zucchini, bell peppers, and tomatoes with chickpeas and herbs until vegetables are tender." },
        { meal: "Lamb chops with couscous", recipe: "Grill or roast lamb chops with herbs and spices, serve with couscous cooked with vegetables and dried fruits." },
        { meal: "Greek lemon chicken", recipe: "Marinate chicken in lemon juice, garlic, and oregano, bake until chicken is tender and juicy." },
        { meal: "Moussaka", recipe: "Layer eggplant, ground lamb or beef, tomatoes, and béchamel sauce, bake until golden and bubbly." },
        { meal: "Spinach and feta pie", recipe: "Layer phyllo dough with spinach, feta cheese, and herbs, bake until golden and crisp." }
    ],
    carnivore: [
        { meal: "Ribeye steak with baked potatoes", recipe: "Season ribeye steak with salt and pepper, grill or pan-sear to desired doneness, serve with baked potatoes." },
        { meal: "Pork ribs with coleslaw", recipe: "Rub pork ribs with barbecue seasoning, bake until tender, serve with coleslaw." },
        { meal: "Beef brisket with roasted vegetables", recipe: "Slow-cook beef brisket with herbs and spices until tender, serve with roasted vegetables." },
        { meal: "Lamb chops with mint sauce", recipe: "Grill or roast lamb chops, serve with mint sauce and roasted potatoes." },
        { meal: "Chicken wings with BBQ sauce", recipe: "Bake or grill chicken wings until crispy, toss in barbecue sauce, serve with celery sticks and ranch dressing." }
    ],
    lowCarb: [
        { meal: "Cauliflower crust pizza with toppings", recipe: "Make pizza crust with cauliflower, cheese, and eggs, top with sauce, cheese, and toppings, bake until crust is crispy and cheese is melted." },
        { meal: "Stuffed mushrooms with sausage and cheese", recipe: "Fill mushroom caps with sausage, cheese, and breadcrumbs, bake until mushrooms are tender and filling is bubbly." },
        { meal: "Chicken and vegetable stir-fry", recipe: "Stir-fry chicken strips with low-carb vegetables like bell peppers, broccoli, and snap peas, season with soy sauce and ginger." },
        { meal: "Beef stew with cauliflower", recipe: "Cook beef stew meat with onions, carrots, and celery in broth, add cauliflower florets, simmer until beef is tender and cauliflower is cooked." },
        { meal: "Grilled chicken with salad", recipe: "Grill chicken breasts, serve over mixed greens with tomatoes, cucumbers, and dressing." }
    ],
    pescatarian: [
        { meal: "Baked cod with lemon and herbs", recipe: "Season cod fillets with lemon juice, garlic, and herbs, bake until fish flakes easily with a fork." },
        { meal: "Shrimp scampi with zoodles", recipe: "Sauté shrimp with garlic, lemon juice, and butter, serve over zucchini noodles (zoodles)." },
        { meal: "Grilled swordfish with quinoa", recipe: "Grill swordfish steaks, serve with cooked quinoa seasoned with herbs and lemon juice." },
        { meal: "Tofu and vegetable stir-fry", recipe: "Stir-fry tofu cubes with vegetables like bell peppers, snow peas, and carrots, season with soy sauce and sesame oil." },
        { meal: "Vegetarian sushi rolls", recipe: "Prepare sushi rolls with seaweed, sushi rice, avocado, cucumber, and optional fillings like pickled radish or carrots." }
    ],
    vegan: [
        { meal: "Vegan curry with rice", recipe: "Sauté onions, garlic, and spices, add vegetables like potatoes, carrots, and bell peppers, simmer in coconut milk, serve over rice." },
        { meal: "Stuffed bell peppers", recipe: "Fill bell peppers with quinoa, black beans, corn, and tomatoes, bake until peppers are tender." },
        { meal: "Spaghetti with marinara sauce", recipe: "Cook spaghetti pasta, toss with marinara sauce made from tomatoes, garlic, and herbs, optionally top with nutritional yeast." },
        { meal: "Vegan chili", recipe: "Sauté onions, garlic, and chili peppers, add beans, tomatoes, and spices, simmer until flavors blend, serve with cornbread or rice." },
        { meal: "Grilled tofu with veggies", recipe: "Marinate tofu in soy sauce and ginger, grill or bake until tofu is golden and vegetables are tender-crisp." },
        { meal: "Vegan stir-fry", recipe: "Stir-fry tofu or tempeh with vegetables like broccoli, bell peppers, and snap peas, season with soy sauce and sesame oil." }
    ],
    paleo: [
        { meal: "Grilled steak with sweet potatoes", recipe: "Season steak with salt and pepper, grill to desired doneness, serve with roasted sweet potatoes." },
        { meal: "Baked salmon with asparagus", recipe: "Season salmon fillets with lemon juice and herbs, bake until fish flakes easily with a fork, serve with roasted asparagus." },
        { meal: "Chicken stir-fry with vegetables", recipe: "Stir-fry chicken strips with vegetables like bell peppers, onions, and mushrooms, season with coconut aminos and garlic." },
        { meal: "Stuffed acorn squash", recipe: "Roast acorn squash halves, fill with a mixture of ground turkey or beef, quinoa, and herbs, bake until squash is tender." },
        { meal: "Lamb chops with roasted carrots", recipe: "Grill or roast lamb chops with herbs, serve with roasted carrots seasoned with olive oil and herbs." }
    ],
    vegetarian: [
        { meal: "Vegetarian lasagna", recipe: "Layer lasagna noodles with marinara sauce, ricotta cheese, spinach, and mozzarella, bake until cheese is melted and bubbly." },
        { meal: "Stuffed bell peppers", recipe: "Fill bell peppers with a mixture of rice, tomatoes, onions, and herbs, bake until peppers are tender." },
        { meal: "Vegetable stir-fry with tofu", recipe: "Stir-fry tofu cubes with mixed vegetables like bell peppers, broccoli, and snap peas, season with soy sauce and garlic." },
        { meal: "Eggplant parmesan", recipe: "Bread and bake eggplant slices, layer with marinara sauce and mozzarella cheese, bake until cheese melts and eggplant is tender." },
        { meal: "Vegetable curry with rice", recipe: "Sauté onions, garlic, and curry paste, add vegetables like potatoes, carrots, and peas, simmer in coconut milk, serve over rice." }
    ],
    glutenFree: [
        { meal: "Grilled chicken with vegetables", recipe: "Grill chicken breasts, serve with grilled or roasted vegetables seasoned with olive oil and herbs." },
        { meal: "Baked fish with quinoa", recipe: "Season fish fillets with lemon juice and herbs, bake until fish flakes easily with a fork, serve with cooked quinoa." },
        { meal: "Quinoa salad with vegetables", recipe: "Cook quinoa, toss with mixed vegetables like cucumbers, tomatoes, and bell peppers, drizzle with olive oil and lemon juice." },
        { meal: "Eggs and avocado on toast", recipe: "Toast gluten-free bread, top with mashed avocado and fried or poached eggs, season with salt and pepper." },
        { meal: "Chicken and vegetable soup", recipe: "Simmer chicken broth with diced chicken, carrots, celery, and onions, season with herbs and spices, optionally add gluten-free noodles." }
    ]
};
const snackOptions = {
    standard: [
        { meal: "Mixed nuts", recipe: "Combine almonds, walnuts, and cashews, optionally roast with olive oil and sea salt." },
        { meal: "Fruit smoothie", recipe: "Blend fresh fruits like bananas, strawberries, and oranges with yogurt or milk." },
        { meal: "Cheese and crackers", recipe: "Serve sliced cheese with whole grain crackers." },
        { meal: "Vegetable sticks with hummus", recipe: "Cut carrots, cucumbers, and bell peppers into sticks, serve with hummus." },
        { meal: "Yogurt with granola", recipe: "Mix Greek yogurt with granola and honey." }
    ],
    keto: [
        { meal: "Cheese crisps", recipe: "Bake cheese slices until crispy, let cool and serve." },
        { meal: "Avocado with salt and pepper", recipe: "Slice avocado, sprinkle with salt and pepper." },
        { meal: "Hard-boiled eggs", recipe: "Boil eggs until cooked through, peel and serve with salt and pepper." },
        { meal: "Olives", recipe: "Serve a variety of olives, optionally marinated with herbs and olive oil." },
        { meal: "Beef jerky", recipe: "Choose keto-friendly beef jerky without added sugars." }
    ],
    mediterranean: [
        { meal: "Greek yogurt with honey and nuts", recipe: "Mix Greek yogurt with honey, top with nuts like almonds or walnuts." },
        { meal: "Hummus with pita chips", recipe: "Serve hummus with whole grain pita chips." },
        { meal: "Fruit salad with citrus dressing", recipe: "Combine fresh fruits like oranges, grapes, and pomegranate seeds, drizzle with lemon or orange juice." },
        { meal: "Stuffed grape leaves (dolmas)", recipe: "Fill grape leaves with rice, pine nuts, and herbs, optionally serve with lemon wedges." },
        { meal: "Tabbouleh salad", recipe: "Mix bulgur wheat, parsley, tomatoes, and onions, dress with lemon juice and olive oil." }
    ],
    carnivore: [
        { meal: "Beef jerky", recipe: "Choose high-quality beef jerky without added sugars." },
        { meal: "Chicken wings", recipe: "Bake or grill chicken wings, season with salt and pepper." },
        { meal: "Sliced deli meat", recipe: "Serve sliced turkey or roast beef." },
        { meal: "Hard-boiled eggs", recipe: "Boil eggs until cooked through, peel and serve with salt and pepper." },
        { meal: "Cheese sticks", recipe: "Serve string cheese or cheese sticks." }
    ],
    lowCarb: [
        { meal: "String cheese", recipe: "Serve string cheese or cheese sticks." },
        { meal: "Celery sticks with peanut butter", recipe: "Spread peanut butter on celery sticks." },
        { meal: "Cucumber slices with cream cheese", recipe: "Spread cream cheese on cucumber slices." },
        { meal: "Almonds", recipe: "Serve raw or roasted almonds." },
        { meal: "Cherry tomatoes with mozzarella", recipe: "Serve cherry tomatoes with fresh mozzarella balls." }
    ],
    pescatarian: [
        { meal: "Seaweed snacks", recipe: "Serve roasted seaweed snacks." },
        { meal: "Edamame", recipe: "Boil or steam edamame, sprinkle with sea salt." },
        { meal: "Smoked salmon on cucumber slices", recipe: "Serve smoked salmon on cucumber slices." },
        { meal: "Greek yogurt with berries", recipe: "Mix Greek yogurt with fresh berries like strawberries, blueberries, and raspberries." },
        { meal: "Avocado slices with salt and pepper", recipe: "Slice avocado, sprinkle with salt and pepper." }
    ],
    vegan: [
        { meal: "Fruit and nut mix", recipe: "Combine dried fruits like apricots and cranberries with nuts like almonds and cashews." },
        { meal: "Guacamole with vegetable sticks", recipe: "Serve guacamole with carrot and celery sticks." },
        { meal: "Chia pudding", recipe: "Mix chia seeds with almond milk, sweeten with agave or maple syrup, refrigerate until thickened." },
        { meal: "Trail mix with seeds and dried fruits", recipe: "Combine pumpkin seeds, sunflower seeds, and dried fruits like raisins and cranberries." },
        { meal: "Coconut yogurt with granola", recipe: "Mix coconut yogurt with granola and fresh berries." }
    ],
    paleo: [
        { meal: "Mixed nuts", recipe: "Combine almonds, walnuts, and cashews, optionally roast with olive oil and sea salt." },
        { meal: "Beef jerky", recipe: "Choose high-quality beef jerky without added sugars." },
        { meal: "Hard-boiled eggs", recipe: "Boil eggs until cooked through, peel and serve with salt and pepper." },
        { meal: "Guacamole with vegetable sticks", recipe: "Serve guacamole with carrot and celery sticks." },
        { meal: "Fruit with almond butter", recipe: "Serve apple or banana slices with almond butter." }
    ],
    vegetarian: [
        { meal: "Cheese and crackers", recipe: "Serve sliced cheese with whole grain crackers." },
        { meal: "Hummus with cucumber slices", recipe: "Serve hummus with cucumber slices." },
        { meal: "Caprese salad", recipe: "Layer slices of tomato, fresh mozzarella cheese, and basil leaves, drizzle with balsamic glaze." },
        { meal: "Roasted chickpeas", recipe: "Season chickpeas with olive oil and spices, bake until crispy." },
        { meal: "Fruit smoothie", recipe: "Blend fresh fruits like bananas, strawberries, and mango with yogurt or almond milk." }
    ],
    glutenFree: [
        { meal: "Mixed nuts", recipe: "Combine almonds, walnuts, and cashews, optionally roast with olive oil and sea salt." },
        { meal: "Rice cakes with almond butter", recipe: "Spread almond butter on rice cakes." },
        { meal: "Yogurt with gluten-free granola", recipe: "Mix yogurt with gluten-free granola and fresh berries." },
        { meal: "Vegetable sticks with hummus", recipe: "Cut carrots, cucumbers, and bell peppers into sticks, serve with hummus." },
        { meal: "Apple slices with peanut butter", recipe: "Serve apple slices with peanut butter." }
    ]
};

// Export the meal options for use in the website
export { breakfastOptions, lunchOptions, dinnerOptions, snackOptions };

document.getElementById('generateMealButton').addEventListener('click', generateMeal);

function getRandomMeal(mealType, dietType) {
    const options = {
        breakfast: breakfastOptions,
        lunch: lunchOptions,
        dinner: dinnerOptions,
        snack: snackOptions
    };

    if (!options[mealType] || !options[mealType][dietType]) {
        return null;
    }

    const meals = options[mealType][dietType];
    const randomIndex = Math.floor(Math.random() * meals.length);
    return meals[randomIndex];
}

function generateMeal() {
    const mealType = document.getElementById('mealType').value;
    const dietType = document.getElementById('dietType').value;

    if (!mealType || !dietType) {
        alert('Please select both meal type and diet type');
        return;
    }

    const meal = getRandomMeal(mealType, dietType);

    if (meal) {
        document.getElementById('mealSuggestion').innerHTML = `
            <p><strong>Meal:</strong> ${meal.meal}</p>
            <p><strong>Recipe:</strong> ${meal.recipe}</p>
        `;
    } else {
        document.getElementById('mealSuggestion').innerHTML = `
            <p>No meals found for the selected options.</p>
        `;
    }
}

