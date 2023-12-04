import "./Menu.css";

import spaghettiImage from "../../../../assets/menu-spaghetti.png";
import gnocchiImage from "../../../../assets/menu-gnocchi.png";
import ravioliImage from "../../../../assets/menu-rovioli.png";
import penneAllaVodakImage from "../../../../assets/menu-penne-alla-vodak.png";
import risotoImage from "../../../../assets/menu-risoto.png";
import splitzaImage from "../../../../assets/menu-splitza.png";

import starFilled from "../../../../assets/star-filled.svg";
import starEmpty from "../../../../assets/star-empty.svg";

const meals = [
    {
        name: "Spaghetti",
        img: spaghettiImage,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 0, 0],
        price: "$6.99"
    },

    {
        name: "Gnocchi",
        img: gnocchiImage,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 0],
        price: "$11.49"
    },

    {
        name: "Ravioli",
        img: ravioliImage,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 1],
        price: "$14.99"
    },

    {
        name: "Penne Alla Vodak",
        img: penneAllaVodakImage,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 0, 0],
        price: "$19.49"
    },

    {
        name: "Risotto",
        img: risotoImage,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 1],
        price: "$17.49"
    },

    {
        name: "Splitza",
        img: splitzaImage,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 0, 0],
        price: "$6.99"
    }
];

export { meals };
