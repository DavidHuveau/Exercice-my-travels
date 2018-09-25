import React from "react";


import Travel from "./Travel";

const travels = [
    {
        destination: "Myvatn",
        country: "Icland",
        photo: "https://www.northiceland.is/static/toy/images/Place_405_1___Selected.jpg",
        distance: "2500km"
    },
    {
        destination: "London",
        country: "England",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/London_Montage_L.jpg/275px-London_Montage_L.jpg",
        distance: "1234km"
    },
    {
        destination: "Rome",
        country: "Italia",
        photo: "https://back.rive-gauche.fr/Upload/Gallery/97cf2e25-d32e-489b-b3c9-619c7549453f/ea446072-0447-431e-b522-cbfd7ca608c9.jpg",
        distance: "3000km"
    },
    {
        destination: "Barcelone",
        country: "Spain",
        photo: "https://media.routard.com/image/81/9/barcelone-parc-guell.1475819.c1000x300.jpg",
        distance: "1500km"
    },
    {
        destination: "Reims",
        country: "France",
        photo: "http://www.ifrap.org/sites/default/files/styles/visuel_700x372/public/articles/image_logo/ville_reims.jpg?itok=Mew1QRR4",
        distance: "250km"
    },
    {
        destination: "Amsterdam",
        country: "Pays-Bas",
        photo: "https://mixmag.fr/assets/uploads/images/_columns2/amsterdamtourism.jpg",
        distance: "2000km"
    }
];

const Travels = () => (
//   <div>
//     {quotes.map(quote => (
//       <img src={quote.image} alt=""/>
//     ))}
//   </div>
<div>
{travels.map(travel => (
    <Travel destination={travel.destination} country={travel.country} photo={travel.photo} distance={travel.distance}/>
))}
</div>
);

export default Travels;
