import spaghettiImage from "../../../assets/menu-spaghetti-menu.png";
import gnocchiImage from "../../../assets/menu-gnocchi.png";
import ravioliImage from "../../../assets/menu-rovioli.png";
import penneAllaVodakImage from "../../../assets/menu-penne-alla-vodak.png";
import risotoImage from "../../../assets/menu-risoto.png";
import splitzaImage from "../../../assets/menu-splitza.png";
import linguineImage from "../../../assets/menu-linguine.png";
import capelliniImage from "../../../assets/menu-capellini.png";
import fettuccineImage from "../../../assets/menu-fettucine.png";
import bucatiniImage from "../../../assets/menu-buccatini.png";
import tortelliniImage from "../../../assets/menu-tortellini.png";
import fusilliImage from "../../../assets/menu-fusilli.png";
import farfalleImage from "../../../assets/menu-farfalle.png";
import superSupremeImage from "../../../assets/menu-superSupreme.png";
import veggieGarden from "../../../assets/menu-veggieGarden.png";
import doubleBeef from "../../../assets/menu-doubleBeefBurger.png";
import meatLovers from "../../../assets/menu-meatLovers.png";
import extravaganzza from "../../../assets/menu-extravaganzza.png";
import meatMeat from "../../../assets/menu-meatMeat.png";
import meatzza from "../../../assets/menu-meatzza.png";
import tunaDelight from "../../../assets/menu-tunaDelight.png";

import dessert1 from "../../../assets/desert1.jpg";
import dessert2 from "../../../assets/desert2.jpg";
import dessert3 from "../../../assets/desert3.jpg";
import dessert4 from "../../../assets/desert4.jpg";
import dessert5 from "../../../assets/desert5.jpg";
import dessert6 from "../../../assets/desert6.jpg";
import dessert7 from "../../../assets/desert7.jpg";

import drink1 from "../../../assets/drink1.jpg";
import drink2 from "../../../assets/drink2.jpg";
import drink3 from "../../../assets/drink3.jpg";
import drink4 from "../../../assets/drink4.jpg";
import drink5 from "../../../assets/drink5.jpg";
import drink6 from "../../../assets/drink6.jpg";
import drink7 from "../../../assets/drink7.jpg";
import drink8 from "../../../assets/drink8.jpg";

const primaryMeals = [
    {
        name: "Spaghetti",
        img: spaghettiImage,
        text: "A quintessential Italian dish, featuring al dente pasta tossed in a rich tomato sauce infused with garlic, onions, basil, and topped with grated Parmesan cheese.",
        rating: [1, 1, 1, 0, 0],
        price: "$6.99"
    },

    {
        name: "Gnocchi",
        img: gnocchiImage,
        text: "Pillowy soft potato dumplings, delicately seasoned and served with your choice of savory sauces, offering a comforting taste of Italy in every bite.",
        rating: [1, 1, 1, 1, 0],
        price: "$11.49"
    },

    {
        name: "Ravioli",
        img: ravioliImage,
        text: "Tender pasta pillows stuffed with a variety of delectable fillings, from creamy ricotta and spinach to savory meats, served in a flavorful sauce for an exquisite Italian dining experience.",
        rating: [1, 1, 1, 1, 1],
        price: "$14.99"
    },

    {
        name: "Penne Alla Vodak",
        img: penneAllaVodakImage,
        text: "Al dente penne pasta coated in a creamy tomato sauce infused with vodka, balanced with hints of garlic, onions, and a touch of cream, offering a luxurious twist on traditional Italian cuisine.",
        rating: [1, 1, 1, 0, 0],
        price: "$19.49"
    },

    {
        name: "Risotto",
        img: risotoImage,
        text: "Creamy Arborio rice cooked to perfection, infused with flavorful broth and complemented by a variety of ingredients such as mushrooms, seafood, or vegetables, resulting in a rich and comforting Italian dish.",
        rating: [1, 1, 1, 1, 1],
        price: "$17.49"
    },

    {
        name: "Splitza",
        img: splitzaImage,
        text: "A delightful fusion of Italian pizza and Singaporean flavors, featuring a thin crust topped with unique combinations such as chili crab, laksa, or salted egg, offering a deliciously inventive twist on traditional pizza.",
        rating: [1, 1, 1, 0, 0],
        price: "$6.99"
    }
];

const secondaryMeals = [
    {
        name: "Linguine",
        img: linguineImage,
        text: "Experience a fusion of Italian flavors in our Linguine, where al dente pasta meets aromatic spices and innovative combinations like chili crab or laksa-infused sauces, redefining traditional pasta with every bite.",
        rating: [1, 1, 1, 1, 0],
        price: "$9.99"
    },

    {
        name: "Capellini",
        img: capelliniImage,
        text: "Embark on a culinary adventure with our Capellini, where delicate strands of pasta are transformed by inventive combinations like chili crab, laksa, or salted egg, offering a delightful twist on traditional Italian pasta dishes.",
        rating: [1, 1, 1, 1, 0],
        price: "$13.99"
    },

    {
        name: "Fettuccine",
        img: fettuccineImage,
        text: "Discover a symphony of flavors in our Fettuccine, where velvety ribbons of pasta embrace inventive pairings like chili crab, laksa, or salted egg, reimagining classic Italian fare with a tantalizing twist.",
        rating: [1, 1, 1, 1, 1],
        price: "$7.99"
    },

    {
        name: "Bucatini",
        img: bucatiniImage,
        text: "Embark on a flavorful journey with our Bucatini, where hollow strands of pasta intertwine with inventive blends like chili crab, laksa, or salted egg, infusing traditional Italian dishes with a burst of innovative flavors.",
        rating: [1, 1, 1, 1, 1],
        price: "$11.99"
    },

    {
        name: "Tortellini",
        img: tortelliniImage,
        text: "Delight in a culinary adventure with our Tortellini, where each delicate parcel of pasta is filled with inventive combinations like chili crab, laksa, or salted egg, offering a tantalizing twist on traditional Italian flavors.",
        rating: [1, 1, 1, 1, 0],
        price: "$7.99"
    },

    {
        name: "Fusilli",
        img: fusilliImage,
        text: "Experience a burst of creativity with our Fusilli, as spiral-shaped pasta embraces inventive combinations like chili crab, laksa, or salted egg, crafting a delightful fusion of traditional Italian taste and innovative flavors.",
        rating: [1, 1, 1, 1, 1],
        price: "$8.99"
    },

    {
        name: "Farfalle",
        img: farfalleImage,
        text: "Embark on a culinary exploration with our Farfalle, where butterfly-shaped pasta meets inventive pairings like chili crab, laksa, or salted egg, presenting a delightful fusion of traditional Italian essence with innovative flavors.",
        rating: [1, 1, 1, 1, 1],
        price: "$12.99"
    },

    {
        name: "Super Supreme",
        img: superSupremeImage,
        text: "Indulge in the ultimate pizza experience with our Super Supreme, boasting a tantalizing fusion of flavors including savory Italian meats, robust marinara sauce, fresh vegetables, and a hint of aromatic spices, delivering a delightful twist on the classic pizza.",
        rating: [1, 1, 1, 1, 0],
        price: "$10.99"
    },

    {
        name: "Veggie Garden",
        img: veggieGarden,
        text: "Savor the garden-fresh goodness of our Veggie Garden Pizza, featuring a harmonious medley of vibrant vegetables atop a crispy crust, each bite bursting with the flavors of sun-ripened tomatoes, crisp bell peppers, earthy mushrooms, and more, offering a delightful ode to nature's bounty.",
        rating: [1, 1, 1, 0, 0],
        price: "$11.99"
    },

    {
        name: "Double Beef Burger",
        img: doubleBeef,
        text: "Experience the ultimate meat lover's delight with our Double Beef Burger Pizza, where juicy beef patties mingle with savory bacon, melted cheese, tangy pickles, and a drizzle of special sauce atop a golden crust, crafting a flavor-packed homage to the classic American burger.",
        rating: [1, 1, 1, 1, 1],
        price: "$16.99"
    },

    {
        name: "Meat Lovers",
        img: meatLovers,
        text: "Indulge in a carnivorous feast with our Meat Lover's Pizza, featuring a symphony of savory flavors including hearty pepperoni, sizzling sausage, succulent ham, and crispy bacon atop a bed of melted cheese and tangy tomato sauce, offering a mouthwatering celebration of all things meaty.",
        rating: [1, 1, 1, 1, 0],
        price: "$12.99"
    },

    {
        name: "Extravaganzza",
        img: extravaganzza,
        text: "Dive into a culinary spectacle with our Extravaganza Pizza, where every slice is a symphony of flavors, boasting a lavish array of premium toppings such as savory pepperoni, spicy sausage, juicy ham, fresh bell peppers, onions, mushrooms, and olives, all nestled atop a golden crust, delivering an extravagant feast for the senses.",
        rating: [1, 1, 1, 1, 1],
        price: "$16.99"
    },

    {
        name: "Meat & Meat",
        img: meatMeat,
        text: "Experience meaty perfection with our Meat & Meat Pizza, where layers of succulent pepperoni, savory sausage, tender ham, and crispy bacon come together atop a cheesy canvas, offering a flavor-packed celebration of carnivorous delight.",
        rating: [1, 1, 1, 1, 0],
        price: "$11.50"
    },

    {
        name: "Meatzza",
        img: meatzza,
        text: "Enter a realm of carnivorous bliss with our Meatzza Pizza, where a hearty combination of pepperoni, sausage, ham, and bacon, generously piled atop a savory crust, creates a meat lover's dream, delivering a flavor explosion with every bite.",
        rating: [1, 1, 1, 1, 1],
        price: "$13.99"
    },

    {
        name: "Tuna Delight",
        img: tunaDelight,
        text: "Embark on a culinary voyage with our Tuna Delight Pizza, where tender chunks of premium tuna meet savory olives, tangy red onions, and a sprinkle of capers, all atop a golden crust and finished with a drizzle of zesty lemon, offering a delightful fusion of flavors reminiscent of coastal indulgence.",
        rating: [1, 1, 1, 1, 0],
        price: "$9.75"
    }
];

const dinner = [
    {
        name: "Capellini",
        img: capelliniImage,
        text: "Embark on a culinary adventure with our Capellini, where delicate strands of pasta are transformed by inventive combinations like chili crab, laksa, or salted egg, offering a delightful twist on traditional Italian pasta dishes.",
        rating: [1, 1, 1, 1, 0],
        price: "$13.99"
    },

    {
        name: "Fusilli",
        img: fusilliImage,
        text: "Experience a burst of creativity with our Fusilli, as spiral-shaped pasta embraces inventive combinations like chili crab, laksa, or salted egg, crafting a delightful fusion of traditional Italian taste and innovative flavors.",
        rating: [1, 1, 1, 1, 1],
        price: "$8.99"
    },
    {
        name: "Gnocchi",
        img: gnocchiImage,
        text: "Pillowy soft potato dumplings, delicately seasoned and served with your choice of savory sauces, offering a comforting taste of Italy in every bite.",
        rating: [1, 1, 1, 1, 0],
        price: "$11.49"
    },
    {
        name: "Meatzza",
        img: meatzza,
        text: "Enter a realm of carnivorous bliss with our Meatzza Pizza, where a hearty combination of pepperoni, sausage, ham, and bacon, generously piled atop a savory crust, creates a meat lover's dream, delivering a flavor explosion with every bite.",
        rating: [1, 1, 1, 1, 1],
        price: "$13.99"
    }
];

const lunch = [
    {
        name: "Extravaganzza",
        img: extravaganzza,
        text: "Dive into a culinary spectacle with our Extravaganza Pizza, where every slice is a symphony of flavors, boasting a lavish array of premium toppings such as savory pepperoni, spicy sausage, juicy ham, fresh bell peppers, onions, mushrooms, and olives, all nestled atop a golden crust, delivering an extravagant feast for the senses.",
        rating: [1, 1, 1, 1, 1],
        price: "$16.99"
    },
    {
        name: "Farfalle",
        img: farfalleImage,
        text: "Embark on a culinary exploration with our Farfalle, where butterfly-shaped pasta meets inventive pairings like chili crab, laksa, or salted egg, presenting a delightful fusion of traditional Italian essence with innovative flavors.",
        rating: [1, 1, 1, 1, 1],
        price: "$12.99"
    },
    {
        name: "Ravioli",
        img: ravioliImage,
        text: "Tender pasta pillows stuffed with a variety of delectable fillings, from creamy ricotta and spinach to savory meats, served in a flavorful sauce for an exquisite Italian dining experience.",
        rating: [1, 1, 1, 1, 1],
        price: "$14.99"
    },

    {
        name: "Tuna Delight",
        img: tunaDelight,
        text: "Embark on a culinary voyage with our Tuna Delight Pizza, where tender chunks of premium tuna meet savory olives, tangy red onions, and a sprinkle of capers, all atop a golden crust and finished with a drizzle of zesty lemon, offering a delightful fusion of flavors reminiscent of coastal indulgence.",
        rating: [1, 1, 1, 1, 0],
        price: "$9.75"
    },
    {
        name: "Penne Alla Vodak",
        img: penneAllaVodakImage,
        text: "Al dente penne pasta coated in a creamy tomato sauce infused with vodka, balanced with hints of garlic, onions, and a touch of cream, offering a luxurious twist on traditional Italian cuisine.",
        rating: [1, 1, 1, 0, 0],
        price: "$19.49"
    },
    {
        name: "Super Supreme",
        img: superSupremeImage,
        text: "Indulge in the ultimate pizza experience with our Super Supreme, boasting a tantalizing fusion of flavors including savory Italian meats, robust marinara sauce, fresh vegetables, and a hint of aromatic spices, delivering a delightful twist on the classic pizza.",
        rating: [1, 1, 1, 1, 0],
        price: "$10.99"
    }
];

const pizzas = [
    {
        name: "Splitza",
        img: splitzaImage,
        text: "A delightful fusion of Italian pizza and Singaporean flavors, featuring a thin crust topped with unique combinations such as chili crab, laksa, or salted egg, offering a deliciously inventive twist on traditional pizza.",
        rating: [1, 1, 1, 0, 0],
        price: "$6.99"
    },
    {
        name: "Super Supreme",
        img: superSupremeImage,
        text: "Indulge in the ultimate pizza experience with our Super Supreme, boasting a tantalizing fusion of flavors including savory Italian meats, robust marinara sauce, fresh vegetables, and a hint of aromatic spices, delivering a delightful twist on the classic pizza.",
        rating: [1, 1, 1, 1, 0],
        price: "$10.99"
    },

    {
        name: "Veggie Garden",
        img: veggieGarden,
        text: "Savor the garden-fresh goodness of our Veggie Garden Pizza, featuring a harmonious medley of vibrant vegetables atop a crispy crust, each bite bursting with the flavors of sun-ripened tomatoes, crisp bell peppers, earthy mushrooms, and more, offering a delightful ode to nature's bounty.",
        rating: [1, 1, 1, 0, 0],
        price: "$11.99"
    },

    {
        name: "Double Beef Burger",
        img: doubleBeef,
        text: "Experience the ultimate meat lover's delight with our Double Beef Burger Pizza, where juicy beef patties mingle with savory bacon, melted cheese, tangy pickles, and a drizzle of special sauce atop a golden crust, crafting a flavor-packed homage to the classic American burger.",
        rating: [1, 1, 1, 1, 1],
        price: "$16.99"
    },

    {
        name: "Meat Lovers",
        img: meatLovers,
        text: "Indulge in a carnivorous feast with our Meat Lover's Pizza, featuring a symphony of savory flavors including hearty pepperoni, sizzling sausage, succulent ham, and crispy bacon atop a bed of melted cheese and tangy tomato sauce, offering a mouthwatering celebration of all things meaty.",
        rating: [1, 1, 1, 1, 0],
        price: "$12.99"
    },

    {
        name: "Extravaganzza",
        img: extravaganzza,
        text: "Dive into a culinary spectacle with our Extravaganza Pizza, where every slice is a symphony of flavors, boasting a lavish array of premium toppings such as savory pepperoni, spicy sausage, juicy ham, fresh bell peppers, onions, mushrooms, and olives, all nestled atop a golden crust, delivering an extravagant feast for the senses.",
        rating: [1, 1, 1, 1, 1],
        price: "$16.99"
    },

    {
        name: "Meat & Meat",
        img: meatMeat,
        text: "Experience meaty perfection with our Meat & Meat Pizza, where layers of succulent pepperoni, savory sausage, tender ham, and crispy bacon come together atop a cheesy canvas, offering a flavor-packed celebration of carnivorous delight.",
        rating: [1, 1, 1, 1, 0],
        price: "$11.50"
    },

    {
        name: "Meatzza",
        img: meatzza,
        text: "Enter a realm of carnivorous bliss with our Meatzza Pizza, where a hearty combination of pepperoni, sausage, ham, and bacon, generously piled atop a savory crust, creates a meat lover's dream, delivering a flavor explosion with every bite.",
        rating: [1, 1, 1, 1, 1],
        price: "$13.99"
    },

    {
        name: "Tuna Delight",
        img: tunaDelight,
        text: "Embark on a culinary voyage with our Tuna Delight Pizza, where tender chunks of premium tuna meet savory olives, tangy red onions, and a sprinkle of capers, all atop a golden crust and finished with a drizzle of zesty lemon, offering a delightful fusion of flavors reminiscent of coastal indulgence.",
        rating: [1, 1, 1, 1, 0],
        price: "$9.75"
    }
];

const desserts = [
    {
        name: "Crème Brûlée",
        img: dessert4,
        text: "Dive into a culinary spectacle with our Extravaganza Pizza, where every slice is a symphony of flavors, boasting a lavish array of premium toppings such as savory pepperoni, spicy sausage, juicy ham, fresh bell peppers, onions, mushrooms, and olives, all nestled atop a golden crust, delivering an extravagant feast for the senses.",
        rating: [1, 1, 1, 1, 1],
        price: "$16.99"
    },

    {
        name: "Panna Cotta",
        img: dessert5,
        text: "Experience meaty perfection with our Meat & Meat Pizza, where layers of succulent pepperoni, savory sausage, tender ham, and crispy bacon come together atop a cheesy canvas, offering a flavor-packed celebration of carnivorous delight.",
        rating: [1, 1, 1, 1, 0],
        price: "$11.50"
    },

    {
        name: "Éclair",
        img: dessert6,
        text: "Enter a realm of carnivorous bliss with our Meatzza Pizza, where a hearty combination of pepperoni, sausage, ham, and bacon, generously piled atop a savory crust, creates a meat lover's dream, delivering a flavor explosion with every bite.",
        rating: [1, 1, 1, 1, 1],
        price: "$13.99"
    },
    {
        name: "Lava Cake",
        img: dessert1,
        text: "Savor the garden-fresh goodness of our Veggie Garden Pizza, featuring a harmonious medley of vibrant vegetables atop a crispy crust, each bite bursting with the flavors of sun-ripened tomatoes, crisp bell peppers, earthy mushrooms, and more, offering a delightful ode to nature's bounty.",
        rating: [1, 1, 1, 0, 0],
        price: "$11.99"
    },

    {
        name: "Tiramisu",
        img: dessert2,
        text: "Experience the ultimate meat lover's delight with our Double Beef Burger Pizza, where juicy beef patties mingle with savory bacon, melted cheese, tangy pickles, and a drizzle of special sauce atop a golden crust, crafting a flavor-packed homage to the classic American burger.",
        rating: [1, 1, 1, 1, 1],
        price: "$16.99"
    },

    {
        name: "Cheesecake",
        img: dessert3,
        text: "Indulge in a carnivorous feast with our Meat Lover's Pizza, featuring a symphony of savory flavors including hearty pepperoni, sizzling sausage, succulent ham, and crispy bacon atop a bed of melted cheese and tangy tomato sauce, offering a mouthwatering celebration of all things meaty.",
        rating: [1, 1, 1, 1, 0],
        price: "$12.99"
    },

    {
        name: "Profiteroles",
        img: dessert7,
        text: "Embark on a culinary voyage with our Tuna Delight Pizza, where tender chunks of premium tuna meet savory olives, tangy red onions, and a sprinkle of capers, all atop a golden crust and finished with a drizzle of zesty lemon, offering a delightful fusion of flavors reminiscent of coastal indulgence.",
        rating: [1, 1, 1, 1, 0],
        price: "$9.75"
    }
];

const drinks = [
    {
        name: "Mojito",
        img: drink1,
        text: "Dive into a culinary spectacle with our Extravaganza Pizza, where every slice is a symphony of flavors, boasting a lavish array of premium toppings such as savory pepperoni, spicy sausage, juicy ham, fresh bell peppers, onions, mushrooms, and olives, all nestled atop a golden crust, delivering an extravagant feast for the senses.",
        rating: [1, 1, 1, 1, 1],
        price: "$16.99"
    },

    {
        name: "Cosmopolitan",
        img: drink2,
        text: "Experience meaty perfection with our Meat & Meat Pizza, where layers of succulent pepperoni, savory sausage, tender ham, and crispy bacon come together atop a cheesy canvas, offering a flavor-packed celebration of carnivorous delight.",
        rating: [1, 1, 1, 1, 0],
        price: "$11.50"
    },

    {
        name: "Piña Colada",
        img: drink3,
        text: "Enter a realm of carnivorous bliss with our Meatzza Pizza, where a hearty combination of pepperoni, sausage, ham, and bacon, generously piled atop a savory crust, creates a meat lover's dream, delivering a flavor explosion with every bite.",
        rating: [1, 1, 1, 1, 1],
        price: "$13.99"
    },
    {
        name: "Margarita",
        img: drink4,
        text: "Savor the garden-fresh goodness of our Veggie Garden Pizza, featuring a harmonious medley of vibrant vegetables atop a crispy crust, each bite bursting with the flavors of sun-ripened tomatoes, crisp bell peppers, earthy mushrooms, and more, offering a delightful ode to nature's bounty.",
        rating: [1, 1, 1, 0, 0],
        price: "$11.99"
    },

    {
        name: "Sangria",
        img: drink5,
        text: "Experience the ultimate meat lover's delight with our Double Beef Burger Pizza, where juicy beef patties mingle with savory bacon, melted cheese, tangy pickles, and a drizzle of special sauce atop a golden crust, crafting a flavor-packed homage to the classic American burger.",
        rating: [1, 1, 1, 1, 1],
        price: "$16.99"
    },

    {
        name: "Manhattan",
        img: drink6,
        text: "Indulge in a carnivorous feast with our Meat Lover's Pizza, featuring a symphony of savory flavors including hearty pepperoni, sizzling sausage, succulent ham, and crispy bacon atop a bed of melted cheese and tangy tomato sauce, offering a mouthwatering celebration of all things meaty.",
        rating: [1, 1, 1, 1, 0],
        price: "$12.99"
    },

    {
        name: "Paloma",
        img: drink7,
        text: "Embark on a culinary voyage with our Tuna Delight Pizza, where tender chunks of premium tuna meet savory olives, tangy red onions, and a sprinkle of capers, all atop a golden crust and finished with a drizzle of zesty lemon, offering a delightful fusion of flavors reminiscent of coastal indulgence.",
        rating: [1, 1, 1, 1, 0],
        price: "$9.75"
    },

    {
        name: "Daiquiri",
        img: drink8,
        text: "Embark on a culinary voyage with our Tuna Delight Pizza, where tender chunks of premium tuna meet savory olives, tangy red onions, and a sprinkle of capers, all atop a golden crust and finished with a drizzle of zesty lemon, offering a delightful fusion of flavors reminiscent of coastal indulgence.",
        rating: [1, 1, 1, 1, 0],
        price: "$9.75"
    }
];

export {
    primaryMeals,
    secondaryMeals,
    dinner,
    lunch,
    pizzas,
    desserts,
    drinks
};
