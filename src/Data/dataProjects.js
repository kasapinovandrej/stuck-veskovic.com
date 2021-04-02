import fassaden1 from '../assets/img/PageProjects/fassaden-hauses/fassaden1.jpg';
import fassaden2 from '../assets/img/PageProjects/fassaden-hauses/fassaden2.jpg';
import fassaden3 from '../assets/img/PageProjects/fassaden-hauses/fassaden3.jpg';
import fassaden4 from '../assets/img/PageProjects/fassaden-hauses/fassaden4.jpg';
import fassaden5 from '../assets/img/PageProjects/fassaden-hauses/fassaden5.jpg';
import fassadenBackground from '../assets/img/PageProjects/fassaden-hauses/fassaden-backgrpund.jpg';

/////////////////////small project images///////////////////

import fassaden from '../assets/img/PageProjects/small-project-images/FASSADEN.jpg';
import akustikdecken from '../assets/img/PageProjects/small-project-images/AKUSTIKDECKEN.png';
import innenraum from '../assets/img/PageProjects/small-project-images/INNENRAUM-DES-HAUSES.png';
import keramikboden from '../assets/img/PageProjects/small-project-images/KERAMIKBODEN.png';
import badezimmer from '../assets/img/PageProjects/small-project-images/MODERNES-BADEZIMMER.png';
import pergola from '../assets/img/PageProjects/small-project-images/ZUSAMMENKLAPPBARES-GLASSYSTEM.png';


const fassadenCard = {
    image: fassaden,
    title: 'Haus Fassaden',
    text: 'Die Außenseite des Hauses wird nach Ihren Wünschen mit Stuck oder mit Putz verarbeitet.Das erste Erscheinungsbild eines Gebäudes ist am wichtigsten.'
}
const akustikdeckenCard = {
    image: akustikdecken,
    title: 'Akustikdecken',
    text: 'Wir können Ihren Raum mit Trockenbautechnik nach Ihren Wünschen aufteilen.Fast sämtliche Anforderungen an den Brand-, Wärme- und Schallschutz kann man mit  rockenbau, sofern man diese nach den technischen Vorschriften einbaut, erfüllen.'
}
const pergolaCard = {
    image: pergola,
    title: 'zusammenklappbares Glassystem',
    text: 'Ein zusammenklappbares Glassystem stellt eine der besten Möglichkeiten da, um große Räume zu schaffen. Dieses System ist leicht zu reinigen und bietet einen hohen Schutz gegen äußere Einflüsse wie Regen, Schlamm und Staub.'
}
const badezimmerCard = {
    image: badezimmer,
    title: 'Modernes Badezimmer',
    text: 'In kürzester Zeit ein neues Badezimmer bauen und ein altes renovieren, unter Verwendung von Material höchster Qualität'

}
const keramikbodenCard = {
    image: keramikboden,
    title: 'Keramikboden',
    text: 'Wir verlegen mit viel Liebe zum Detail fachgerecht Fliesen im Innenbereich und Außenbereich und übernehmen jegliche Untergrundarbeiten und Vorbereitungsarbeiten.'
}
const innenraumCard = {
    image: innenraum,
    title: 'Innenraum des Hauses',
    text: 'Gestaltung aller Arten von Innenräumen für Ihre Wohnung, Ihr Haus, Ihre Wohnung, Ihren Geschäftsraum. 3D - Modelle für jeden Raum, Möbelmodellierung, Visualisierung und Renderings.'
}



const projects = [
    {
        id: 1,
        path: '/fassaden-hauses',
        title: 'fassaden hauses',
        background: fassadenBackground,
        galleryImages: [fassaden1, fassaden2, fassaden3, fassaden4, fassaden5],
        text: 'Die Außenseite des Hauses wird nach Ihren Wünschen mit Stuck oder mit Putz verarbeitet. Das erste Erscheinungsbild eines Gebäudes ist am wichtigsten.',
        caption: 'Ähnlich projekte',
        cards: [{ cardImage: akustikdeckenCard }, { cardImage: pergolaCard }, { cardImage: keramikbodenCard }, { cardImage: keramikbodenCard }, { cardImage: innenraumCard }],

    },

]

export default projects;

