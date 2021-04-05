import fassaden1 from '../assets/img/PageProjects/fassaden-hauses/fassaden1.jpg';
import fassaden2 from '../assets/img/PageProjects/fassaden-hauses/fassaden2.jpg';
import fassaden3 from '../assets/img/PageProjects/fassaden-hauses/fassaden3.jpg';
import fassaden4 from '../assets/img/PageProjects/fassaden-hauses/fassaden4.jpg';
import fassaden5 from '../assets/img/PageProjects/fassaden-hauses/fassaden5.jpg';
import fassadenBackground from '../assets/img/PageProjects/fassaden-hauses/fassaden-backgrpund.jpg';
////////////////////////////////////////////////////////////
import akustikdecken1 from '../assets/img/PageProjects/Akustikdecken/Akustikdecken1.jpg';
import akustikdecken2 from '../assets/img/PageProjects/Akustikdecken/akustikdecken2.jpg';
import akustikdecken3 from '../assets/img/PageProjects/Akustikdecken/akustikdecken3.jpg';
import akustikdecken4 from '../assets/img/PageProjects/Akustikdecken/akustikdecken4.jpg';
import akustikdecken5 from '../assets/img/PageProjects/Akustikdecken/akustikdecken5.jpg';
import akustikdeckenBackground from '../assets/img/PageProjects/Akustikdecken/Akustikdecken.jpg';
////////////////////////////////////////////////////////////
import glassystem from '../assets/img/PageProjects/glassystem/glassystem.jpg';
import glassystem1 from '../assets/img/PageProjects/glassystem/1.jpg';
import glassystem2 from '../assets/img/PageProjects/glassystem/2.jpg';
import glassystem3 from '../assets/img/PageProjects/glassystem/3.jpg';
import glassystem4 from '../assets/img/PageProjects/glassystem/4.jpg';
import glassystem5 from '../assets/img/PageProjects/glassystem/5.jpg';
////////////////////////////////////////////////////////////
import badezimmerImg from '../assets/img/PageProjects/badezimmer/badzimmer.jpg';
import badezimmer1 from '../assets/img/PageProjects/badezimmer/1.jpg';
import badezimmer2 from '../assets/img/PageProjects/badezimmer/2.jpg';
import badezimmer3 from '../assets/img/PageProjects/badezimmer/3.jpg';
import badezimmer4 from '../assets/img/PageProjects/badezimmer/4.jpg';
import badezimmer5 from '../assets/img/PageProjects/badezimmer/5.jpg';
////////////////////////////////////////////////////////////
import keramikbodenImg from '../assets/img/PageProjects/keramikboden/Keramikboden.jpg';
import keramikboden1 from '../assets/img/PageProjects/keramikboden/1.jpg';
import keramikboden2 from '../assets/img/PageProjects/keramikboden/2.jpg';
import keramikboden3 from '../assets/img/PageProjects/keramikboden/3.jpg';
import keramikboden4 from '../assets/img/PageProjects/keramikboden/4.jpg';
import keramikboden5 from '../assets/img/PageProjects/keramikboden/5.jpeg';
/////////////////////////////////////////////////////////////
import innenraumImg from '../assets/img/PageProjects/innenraum/Innenraum-des-hauses.jpg'
import innenraum1 from '../assets/img/PageProjects/innenraum/1.jpg'
import innenraum2 from '../assets/img/PageProjects/innenraum/2.jpg'
import innenraum3 from '../assets/img/PageProjects/innenraum/3.jpg'
import innenraum4 from '../assets/img/PageProjects/innenraum/4.jpg'
import innenraum5 from '../assets/img/PageProjects/innenraum/5.jpg'
/////////////////////small project images///////////////////
import fassaden from '../assets/img/PageProjects/small-project-images/FASSADEN.jpg';
import akustikdecken from '../assets/img/PageProjects/small-project-images/AKUSTIKDECKEN.jpg';
import innenraum from '../assets/img/PageProjects/small-project-images/INNENRAUM-DES-HAUSES.jpg';
import keramikboden from '../assets/img/PageProjects/small-project-images/KERAMIKBODEN.jpg';
import badezimmer from '../assets/img/PageProjects/small-project-images/MODERNES-BADEZIMMER.jpg';
import pergola from '../assets/img/PageProjects/small-project-images/ZUSAMMENKLAPPBARES-GLASSYSTEM.jpg';

const fassadenCard = {
    path: '/fassaden-hauses',
    image: fassaden,
    title: 'Haus Fassaden',
    text: 'Die Außenseite des Hauses wird nach Ihren Wünschen mit Stuck oder mit Putz verarbeitet.Das erste Erscheinungsbild eines Gebäudes ist am wichtigsten.'
}
const akustikdeckenCard = {
    path: '/akustikdecken',
    image: akustikdecken,
    title: 'Akustikdecken',
    text: 'Wir können Ihren Raum mit Trockenbautechnik nach Ihren Wünschen aufteilen.Fast sämtliche Anforderungen an den Brand-, Wärme- und Schallschutz kann man mit  rockenbau, sofern man diese nach den technischen Vorschriften einbaut, erfüllen.'
}
const pergolaCard = {
    path: '/zusammenklappbares-glassystem',
    image: pergola,
    title: 'zusammenklappbares Glassystem',
    text: 'Ein zusammenklappbares Glassystem stellt eine der besten Möglichkeiten da, um große Räume zu schaffen. Dieses System ist leicht zu reinigen und bietet einen hohen Schutz gegen äußere Einflüsse wie Regen, Schlamm und Staub.'
}
const badezimmerCard = {
    path: '/modernes-badezimmer',
    image: badezimmer,
    title: 'Modernes Badezimmer',
    text: 'In kürzester Zeit ein neues Badezimmer bauen und ein altes renovieren, unter Verwendung von Material höchster Qualität'

}
const keramikbodenCard = {
    path: '/keramikboden',
    image: keramikboden,
    title: 'Keramikboden',
    text: 'Wir verlegen mit viel Liebe zum Detail fachgerecht Fliesen im Innenbereich und Außenbereich und übernehmen jegliche Untergrundarbeiten und Vorbereitungsarbeiten.'
}
const innenraumCard = {
    path: '/innenraum-des-hauses',
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
        cards: [akustikdeckenCard, pergolaCard, badezimmerCard, keramikbodenCard, innenraumCard],
    },
    {
        id: 2,
        path: '/akustikdecken',
        title: 'akustikdecken',
        background: akustikdeckenBackground,
        galleryImages: [akustikdecken1, akustikdecken2, akustikdecken3, akustikdecken4, akustikdecken5],
        text: 'Wir können Ihren Raum mit Trockenbautechnik nach Ihren Wünschen aufteilen. Fast sämtliche Anforderungen an den Brand-, Wärme - und Schallschutz kann man mit Trockenbau, sofern man diese nach den technischen Vorschriften einbaut, erfüllen',
        caption: 'Ähnlich projekte',
        cards: [fassadenCard, pergolaCard, badezimmerCard, keramikbodenCard, innenraumCard],
    },
    {
        id: 3,
        path: '/zusammenklappbares-glassystem',
        title: 'zusammenklappbares glassystem',
        background: glassystem,
        galleryImages: [glassystem1, glassystem2, glassystem3, glassystem4, glassystem5],
        text: 'Ein zusammenklappbares Glassystem stellt eine der besten Möglichkeiten da, um große Räume zu schaffen. Dieses System ist leicht zu reinigen und bietet einen hohen Schutz gegen äußere Einflüsse wie Regen, Schlamm und Staub.Glasscheiben können leicht links oder rechts, oder beides gleichzeitig zusammengeklappt werden.',
        caption: 'Ähnlich projekte',
        cards: [fassadenCard, akustikdeckenCard, badezimmerCard, keramikbodenCard, innenraumCard],
    },
    {
        id: 4,
        path: '/modernes-badezimmer',
        title: 'modernes badezimmer',
        background: badezimmerImg,
        galleryImages: [badezimmer1, badezimmer2, badezimmer3, badezimmer4, badezimmer5],
        text: 'In kürzester Zeit ein neues Badezimmer bauen und ein altes renovieren, unter Verwendung von Material höchster Qualität',
        caption: 'Ähnlich projekte',
        cards: [fassadenCard, akustikdeckenCard, pergolaCard, keramikbodenCard, innenraumCard],
    },
    {
        id: 5,
        path: '/keramikboden',
        title: 'keramikboden',
        background: keramikbodenImg,
        galleryImages: [keramikboden1, keramikboden2, keramikboden3, keramikboden4, keramikboden5],
        text: 'Wir verlegen mit viel Liebe zum Detail fachgerecht Fliesen im Innenbereich und Außenbereich und übernehmen jegliche Untergrundarbeiten und Vorbereitungsarbeiten.',
        caption: 'Ähnlich projekte',
        cards: [fassadenCard, akustikdeckenCard, pergolaCard, badezimmerCard, innenraumCard],
    },
    {
        id: 6,
        path: '/innenraum-des-hauses',
        title: 'innenraum des hauses',
        background: innenraumImg,
        galleryImages: [innenraum1, innenraum2, innenraum3, innenraum4, innenraum5],
        text: 'Gestaltung aller Arten von Innenräumen für Ihre Wohnung, Ihr Haus, Ihre Wohnung, Ihren Geschäftsraum. 3D-Modelle für jeden Raum, Möbelmodellierung, Visualisierung und Renderings.',
        caption: 'Ähnlich projekte',
        cards: [fassadenCard, akustikdeckenCard, pergolaCard, badezimmerCard, keramikbodenCard],
    },
]

export default projects;

