import { useState } from 'react';
import Card from './Card';      //

const CardList = () => {

    const [films, setFilms] = useState([
        {   title: 'My Neighbor Totoro', year: '1988', img: 'https://flxt.tmsimg.com/assets/p160146_v_v8_ac.jpg', director: 'Hayao Miyazaki', runtime: '86 minutes', description: 'When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby.', id: 1},
        {   title: 'Ponyo', year: '2008', img: 'https://resizing.flixster.com/D_9DqMNrY1QERAtGKBvTx_6Mx9g=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzFkMGEwYzgyLTdjNWYtNGVlZi04NTkwLWQxNThhNDIzNmRlOS5qcGc=', director: 'Hayao Miyazaki', runtime: '101 minutes', description: 'A five-year-old boy develops a relationship with Ponyo, a young goldfish princess who longs to become a human after falling in love with him.', id: 2},
        {   title: "Kiki's Delievery Service", year: '1989', img: 'https://resizing.flixster.com/ww1xQD57II223RFmcO7oVLI2ahQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzI4ZDY2MTllLWQ5MzktNDVlNC04MWQ4LWVmODQ4ODZiYTRkMS53ZWJw', director: 'Hayao Miyazaki', runtime: '103 minutes', description: 'A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.', id: 3},
        {   title: "The Secret World of Arrietty", year: '2010', img: 'https://flxt.tmsimg.com/assets/p8777609_v_v8_ad.jpg', director: 'Hiromasa Yonebayashi', runtime: '94 minutes', description: "The Clock family are four-inch-tall people who live anonymously in another family's residence, borrowing simple items to make their home. Life changes for the Clocks when their teenage daughter Arrietty is discovered.", id: 4},
        {   title: "The Cat Returns", year: '2002', img: 'https://flxt.tmsimg.com/assets/p8985898_p_v8_ac.jpg', director: 'Hiroyuki Morita', runtime: '75 minutes', description: 'After helping a cat, a seventeen-year-old girl finds herself involuntarily engaged to a cat Prince in a magical world where her only hope of freedom lies with a dapper cat statuette come to life.', id: 5},
        {   title: "From Up on Poppy Hill", year: '2011', img: 'https://flxt.tmsimg.com/assets/p8822358_p_v8_aa.jpg', director: 'Gorô Miyazaki', runtime: '91 minutes', description: "A group of Yokohama teens look to save their school's clubhouse from the wrecking ball in preparations for the 1964 Tokyo Olympics.", id: 6},
        {   title: "When Marinie Was There", year: '2014', img: 'https://flxt.tmsimg.com/assets/p11424795_p_v8_aa.jpg', director: 'Hiromasa Yonebayashi', runtime: '103 minutes', description: "Due to 12 y.o. Anna's asthma, she's sent to stay with relatives of her guardian in the Japanese countryside. She likes to be alone, sketching. She befriends Marnie. Who is the mysterious, blonde Marnie.", id: 7},
        {   title: "The Tale of The Princess Kaguya", year: '2013', img: 'https://flxt.tmsimg.com/assets/p10922577_v_v8_aa.jpg', director: 'Isao Takahata', runtime: '237 minutes', description: 'Found inside a shining stalk of bamboo by an old bamboo cutter and his wife, a tiny girl grows rapidly into an exquisite young lady. The mysterious young princess enthralls all who encounter her, but ultimately she must confront her fate, the punishment for her crime.', id: 8},
        {   title: 'Princess Mononoke', year: '1997', img: 'https://flxt.tmsimg.com/assets/p23052_p_v8_ac.jpg', director: 'Hayao Miyazaki', runtime: '133 minutes', description: 'A prince becomes involved in the struggle between a forest princess and the encroachment of mechanization', id: 9},
        {   title: "Howl's Moving Castle", year: '2004', img: 'https://flxt.tmsimg.com/assets/p36095_p_v8_ac.jpg', director: 'Hayao Miyazaki', runtime: '159 minutes', description: "Sophie has an uneventful life at her late father's hat shop, but all that changes when she befriends wizard Howl, who lives in a magical flying castle. However, the evil Witch of Waste takes issue with their budding relationship and casts a spell on young Sophie, which ages her prematurely. Now Howl must use all his magical talents to battle the jealous hag and return Sophie to her former youth and beauty.", id: 10},
        {   title: 'Grave of the Fireflies', year: '1988', img: 'https://flxt.tmsimg.com/assets/p158931_v_v8_ab.jpg', director: 'Isao Takahata', runtime: '88 minutes', description: 'A teenager is charged with the care of his younger sister after an Allied firebombing during World War II destroys their home and kills their mother.', id: 11},
        {   title: 'Castle in the Sky', year: '1986', img: 'https://flxt.tmsimg.com/assets/p68228_k_v8_aa.jpg', director: 'Hayao Miyazaki', runtime: '124 minutes', description: "Young orphan Sheeta and her kidnapper, Col. Muska, are flying to a military prison when their plane is attacked by a gang of air pirates led by the matronly Dola. Escaping from a mid-air collision via a magic crystal around her neck, Sheeta meets fellow orphan Pazu and the pair join forces to discover the mystical floating city of Laputa while pursued by both Muska and the pirates, who lust for the city's myriad treasures.", id: 12},
        {   title: 'Whisper of the Heart', year: '1995', img: 'https://flxt.tmsimg.com/assets/p160148_p_v8_ab.jpg', director: 'Yoshifumi Kondo', runtime: '111 minutes', description: 'Based on the manga with the same title, this animated film follows Shizuku, an inquisitive young girl and a voracious reader, who longs to be a writer when she grows up. One day she notices that all of her library books have previously been taken out by one Seiji Amasawa. Amid chasing after a large cat, befriending an eccentric antiques dealer and writing her first novel, Shizuku aims to find this mysterious boy who may well be her soul mate.', id: 13},
        {   title: 'Spirited Away', year: '2001', img: 'https://flxt.tmsimg.com/assets/p30673_p_v8_ag.jpg', director: 'Hayao Miyazaki', runtime: '125 minutes', description: "10-year-old Chihiro moves with her parents to a new home in the Japanese countryside. After taking a wrong turn down a wooded path, Chihiro and her parents discover an amusement park with a stall containing an assortment of food. To her surprise, Chihiro's parents begin eating and then transform into pigs. In this supernatural realm, Chihiro encounters a host of characters and endures labor in a bathhouse for spirits, awaiting a reunion with her parents.", id: 14},
        {   title: 'Only Yesterday', year: '1991', img: 'https://flxt.tmsimg.com/assets/p12408271_k_v10_aa.jpg', director: 'Isao Takahata', runtime: '118 minutes', description: 'A put-upon 27-year-old Japanese office worker travels to the countryside and reminisces about her childhood in Tokyo and what life could have been.', id: 15},
        {   title: 'Porco Rosso', year: '1992', img: 'https://flxt.tmsimg.com/assets/p160147_v_v8_ad.jpg', director: 'Hayao Miyazaki', runtime: '90 minutes', description: 'In this entrancing tale by renowned Japanese animator Hiyao Miyazaki, World War I flying ace Marco Pagott mysteriously turns from a man into a pig after all his comrades die in battle. Now known as Porco Rosso, the pilot continues fighting air pirates while, on the ground, flirting with a gorgeous club singer. After an attack by a brash American pilot, Porco meets confident Fio, who repairs his plane with her girl mechanics, and sees him for who he really is.', id: 16},
        {   title: 'The Wind Rises', year: '2014', img: 'https://flxt.tmsimg.com/assets/p10213771_p_v8_aa.jpg', director: 'Hayao Miyazaki & Gary Rydstrom', runtime: '124 minutes', description: 'A lifelong love of flight inspires Japanese aviation engineer Jiro Horikoshi, whose storied career includes the creation of the A-6M World War II fighter plane.', id: 17},
        {   title: 'My Neighbors the Yamadas', year: '2005', img: 'https://flxt.tmsimg.com/assets/p10098132_v_v8_ab.jpg', director: 'Isao Takahata', runtime: '100 minutes', description: 'The adventures of a modern family in Japan.', id: 18},
        {   title: 'Pom Poko', year: '1994', img: 'https://flxt.tmsimg.com/assets/p24121_v_v8_ai.jpg', director: 'Isao Takahata', runtime: '112 minutes', description: 'Shape-shifting raccoons band together to save their forest homeland from the bulldozers of greedy land developers.', id: 19},
        {   title: 'Tales from Earthsea', year: '2006', img: 'https://flxt.tmsimg.com/assets/p8126367_p_v8_ab.jpg', director: 'Goro Miyazaki', runtime: '115 minutes', description: "In the land of Earthsea, a mysterious force threatens to plunge humanity into destruction and chaos. A powerful wizard named Sparrowhawk seeks the source of his world's imbalance, and along the way rescues a runaway prince named Arren. When Sparrowhawk's powers begin to weaken, he and Arren must join forces with a former priestess and her daughter to defeat an evil foe whose quest for immortality will destroy Earthsea.", id: 20},
        {   title: 'Nausicaa of the Valley of the Wind', year: '1984', img: 'https://flxt.tmsimg.com/assets/p160143_d_v8_ab.jpg', director: 'Hayao Miyazaki', runtime: '118 minutes', description: "Far in the future, after an apocalyptic conflict has devastated much of the world's ecosystem, the few surviving humans live in scattered semi-hospitable environments within what has become a 'toxic jungle.' Young Nausicaä lives in the arid Valley of the Wind and can communicate with the massive insects that populate the dangerous jungle. Under the guidance of the pensive veteran warrior, Lord Yupa, Nausicaä works to bring peace back to the ravaged planet.", id: 21},

    ]);

    return(
        <div className="container">
            <div className="row row-cols-1 row-cols-xl-4 g-4">
                <Card films={films.filter((film) => film.title === 'My Neighbor Totoro')} />
                <Card films={films.filter((film) => film.title === 'Ponyo')} />
                <Card films={films.filter((film) => film.title === "Kiki's Delievery Service")} />
                <Card films={films.filter((film) => film.title === 'The Secret World of Arrietty')} />
                <Card films={films.filter((film) => film.title === 'The Cat Returns')} />
                <Card films={films.filter((film) => film.title === 'From Up on Poppy Hill')} />
                <Card films={films.filter((film) => film.title === 'When Marinie Was There')} />
                <Card films={films.filter((film) => film.title === 'The Tale of The Princess Kaguya')} />
                <Card films={films.filter((film) => film.title === 'Princess Mononoke')} />
                <Card films={films.filter((film) => film.title === "Howl's Moving Castle")} />
                <Card films={films.filter((film) => film.title === 'Whisper of the Heart')} />
                <Card films={films.filter((film) => film.title === 'Grave of the Fireflies')} />
                <Card films={films.filter((film) => film.title === 'Castle in the Sky')} />
                <Card films={films.filter((film) => film.title === 'Spirited Away')} />
                <Card films={films.filter((film) => film.title === 'Only Yesterday')} />
                <Card films={films.filter((film) => film.title === 'Porco Rosso')} />
                <Card films={films.filter((film) => film.title === 'The Wind Rises')} />
                <Card films={films.filter((film) => film.title === 'My Neighbors the Yamadas')} />
                <Card films={films.filter((film) => film.title === 'Pom Poko')} />
                <Card films={films.filter((film) => film.title === 'Tales from Earthsea')} />
                <Card films={films.filter((film) => film.title === 'Nausicaa of the Valley of the Wind')} />


            </div>
        </div>
    );
}

export default CardList;