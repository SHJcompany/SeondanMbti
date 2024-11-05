const quotes = [
    {
        quotes :"어리석은 자는 멀리서 행복을 찾지만 현명한 자는 자신의 발치에서 행복을 키운다" ,
        author :"제임스 오펜하임" ,
    },
    {
        quotes :"삶이 있는한 희망은 있다" ,
        author :"키케로" ,
    },
    {
        quotes :"신은 용기있는자를 결코 버리지 않는다" ,
        author :"켄러" ,
    },
    {
        quotes :"피할수 없으면 즐겨라" ,
        author :"로버트 엘리엇" ,
    },
    {
        quotes :"자신감 있는 표정을 지으면 자신감이 생긴다" ,
        author :"찰스다윈" ,
    },
    {
        quotes :"행복은 습관이다,그것을 몸에 지니라" ,
        author :"허버드" ,
    },
    {
        quotes :"1퍼센트의 가능성,그것이 나의 길이다" ,
        author :"나폴레옹" ,
    },
    {
        quotes :"마음만을 가지고있어서는 안됀다.반드시 실천해야 한다 " ,
        author :"이소룡" ,
    },
    {
        quotes :"자신을 내보여라.그러면 재능이 드러날 것이다" ,
        author :"발타사르 그라시안" ,
    },
    {
        quotes :"그대의 하루하루를 그대의 마지막 날이라고 생각해라" ,
        author :"호라티우스" ,
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;