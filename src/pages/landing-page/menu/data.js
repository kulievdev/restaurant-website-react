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
import ceaserImage from "../../../assets/menu-ceaser.png";
import superSupremeImage from "../../../assets/menu-superSupreme.png";
import veggieGarden from "../../../assets/menu-veggieGarden.png";
import doubleBeef from "../../../assets/menu-doubleBeefBurger.png";
import meatLovers from "../../../assets/menu-meatLovers.png";
import extravaganzza from "../../../assets/menu-extravaganzza.png";
import meatMeat from "../../../assets/menu-meatMeat.png";
import meatzza from "../../../assets/menu-meatzza.png";
import tunaDelight from "../../../assets/menu-tunaDelight.png";

const meals = [
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
    },

    {
        name: "Linguine",
        img: linguineImage,
        text: "A delightful fusion of Italian pizza and Singaporean flavors, featuring a thin crust topped with unique combinations such as chili crab, laksa, or salted egg, offering a deliciously inventive twist on traditional pizza.",
        rating: [1, 1, 1, 1, 0],
        price: "$9.99"
    },

    {
        name: "Capellini",
        img: capelliniImage,
        text: "A delightful fusion of Italian pizza and Singaporean flavors, featuring a thin crust topped with unique combinations such as chili crab, laksa, or salted egg, offering a deliciously inventive twist on traditional pizza.",
        rating: [1, 1, 1, 1, 0],
        price: "$13.99"
    },

    {
        name: "Fettuccine",
        img: fettuccineImage,
        text: "A delightful fusion of Italian pizza and Singaporean flavors, featuring a thin crust topped with unique combinations such as chili crab, laksa, or salted egg, offering a deliciously inventive twist on traditional pizza.",
        rating: [1, 1, 1, 1, 1],
        price: "$7.99"
    },

    {
        name: "Bucatini",
        img: bucatiniImage,
        text: "A delightful fusion of Italian pizza and Singaporean flavors, featuring a thin crust topped with unique combinations such as chili crab, laksa, or salted egg, offering a deliciously inventive twist on traditional pizza.",
        rating: [1, 1, 1, 1, 1],
        price: "$11.99"
    },

    {
        name: "Tortellini",
        img: tortelliniImage,
        text: "A delightful fusion of Italian pizza and Singaporean flavors, featuring a thin crust topped with unique combinations such as chili crab, laksa, or salted egg, offering a deliciously inventive twist on traditional pizza.",
        rating: [1, 1, 1, 1, 0],
        price: "$7.99"
    },

    {
        name: "Fusilli",
        img: fusilliImage,
        text: "A delightful fusion of Italian pizza and Singaporean flavors, featuring a thin crust topped with unique combinations such as chili crab, laksa, or salted egg, offering a deliciously inventive twist on traditional pizza.",
        rating: [1, 1, 1, 1, 1],
        price: "$8.99"
    },

    {
        name: "Farfalle",
        img: farfalleImage,
        text: "A delightful fusion of Italian pizza and Singaporean flavors, featuring a thin crust topped with unique combinations such as chili crab, laksa, or salted egg, offering a deliciously inventive twist on traditional pizza.",
        rating: [1, 1, 1, 1, 1],
        price: "$12.99"
    },

    {
        name: "Super Supreme",
        img: superSupremeImage,
        text: "A delightful fusion of Italian pizza and Singaporean flavors, featuring a thin crust topped with unique combinations such as chili crab, laksa, or salted egg, offering a deliciously inventive twist on traditional pizza.",
        rating: [1, 1, 1, 1, 0],
        price: "$10.99"
    },

    {
        name: "Veggie Garden",
        img: veggieGarden,
        text: "A delightful fusion of Italian pizza and Singaporean flavors, featuring a thin crust topped with unique combinations such as chili crab, laksa, or salted egg, offering a deliciously inventive twist on traditional pizza.",
        rating: [1, 1, 1, 0, 0],
        price: "$11.99"
    },

    {
        name: "Double Beef Burger",
        img: doubleBeef,
        text: "A delightful fusion of Italian pizza and Singaporean flavors, featuring a thin crust topped with unique combinations such as chili crab, laksa, or salted egg, offering a deliciously inventive twist on traditional pizza.",
        rating: [1, 1, 1, 1, 1],
        price: "$16.99"
    },

    {
        name: "Meat Lovers",
        img: meatLovers,
        text: "A delightful fusion of Italian pizza and Singaporean flavors, featuring a thin crust topped with unique combinations such as chili crab, laksa, or salted egg, offering a deliciously inventive twist on traditional pizza.",
        rating: [1, 1, 1, 1, 0],
        price: "$12.99"
    },

    {
        name: "Extravaganzza",
        img: extravaganzza,
        text: "A delightful fusion of Italian pizza and Singaporean flavors, featuring a thin crust topped with unique combinations such as chili crab, laksa, or salted egg, offering a deliciously inventive twist on traditional pizza.",
        rating: [1, 1, 1, 1, 1],
        price: "$16.99"
    },

    {
        name: "Meat & Meat",
        img: meatMeat,
        text: "A delightful fusion of Italian pizza and Singaporean flavors, featuring a thin crust topped with unique combinations such as chili crab, laksa, or salted egg, offering a deliciously inventive twist on traditional pizza.",
        rating: [1, 1, 1, 1, 0],
        price: "$11.50"
    },

    {
        name: "Meatzza",
        img: meatzza,
        text: "A delightful fusion of Italian pizza and Singaporean flavors, featuring a thin crust topped with unique combinations such as chili crab, laksa, or salted egg, offering a deliciously inventive twist on traditional pizza.",
        rating: [1, 1, 1, 1, 1],
        price: "$13.99"
    },

    {
        name: "Tuna Delight",
        img: tunaDelight,
        text: "A delightful fusion of Italian pizza and Singaporean flavors, featuring a thin crust topped with unique combinations such as chili crab, laksa, or salted egg, offering a deliciously inventive twist on traditional pizza.",
        rating: [1, 1, 1, 1, 0],
        price: "$9.75"
    }
];

export default meals;
