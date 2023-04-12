quotes = [
    {
        content: '"The only reason for time is so that everything doesnt happen at once"',
        person: '~Albert Einstein'
    },{
        content: '"if you hesitate between me and another person, dont choose me"',
        person: '~Unknown'
    },{
        content: '"Maybe it is time, for the fighter to be fought, for the holder to be hold, and for the lover to be loved"',
        person: '~Unknown'
    },{
        content: '"This life goes on and on, living my truth is all i know."',
        person: '~Kid Cudi'
    },{
        content: '"Some days I miss the gentle, kind, soft spoken me, and other days i am like fuck that person. They were a doormat. i am still wearing footprint because they couldnt stand up for themselves"',
        person: '~Kalen Dion'
    },{
        content: '"forget popularity. Just do your thing with passion, humility, and honesty. Do what you do, not for an applause but because it is what is right. Pursue it a little bit each day, no matter what anyone else thinks. that is how dreams are archieved"',
        person: '~marcandangel'
    },{
        content: '"Humans construct the atom bomb but no mouse in the world would construct a mousetrap"',
        person: '~Albert Einstein'
    },{
        content: '"Knowledge makes a man unfit to be a slave"',
        person: '~comicenlightment'
    },{
        content: '"sometimes the hardest truth to accept is that no amount of love or effort can change people that dont work towards changing themselves"',
        person: '~Morgan Richard Olivier'
    },{
        content: '"Until you make the unconscious conscious, it will direct your life and you will call it fate"',
        person: '~Carl Jung'
    },{
        content: '"And once you are awake, you shall remain awake eternally."',
        person: '~FriedRich Nietzsche'
    }

]

let text_content = document.querySelector('.text-content');
let author = document.querySelector('.author');
let Btn = document.querySelector('.btn');

Btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length)
    text_content.innerText = quotes[random].content;
    author.innerText = quotes[random].person;
})