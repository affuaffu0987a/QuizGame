const Options=[
    {
        question:"Q1:CLOY stand for",
        a:"close love of you",
        b:"clash land on you",
        c:"Clean Love of your",
        d:"Crash Landing on you",
        ans:"ans4"
    },
    {
        question:"My Love From the Star who play the lead role",
        a:"kim jon-soo",
        b:"Do min-joon",
        c:"kim sum-yoo",
        d:"none of the above",
        ans:"ans2"
    },
    {
        question:"Boys Over flowers Release date",
        a:'March 31 2009',
        b:"April 1 2010",
        c:"January 5 2009",
        d:"Dec 6 2020",
        ans:"ans3"
    },
    {
        question:"Which K-drama are related to Hell",
        a:'Hell Bound',
        b:"I am in Hell",
        c:"Hell always for me",
        d:"sanju in hell",
        ans:"ans1"
    },
    {
        question:"How many Episode in Goblin Drama",
        a:'16',
        b:"10",
        c:"20",
        d:"16+3 specials",
        ans:"ansd"
    },
]

const Question=document.querySelector('#Heading');
const Option1=document.querySelector('#option1');
const Option2=document.querySelector('#option2');
const Option3=document.querySelector('#option3');
const Option4=document.querySelector('#option4');
const Inputs=document.querySelector('#submit')
const Answers=document.querySelectorAll('.answer')
const showscore=document.getElementById('showScore')
let questionCount=0
let score=0;

const LoadQuestion=()=>{
    let questionList=Options[questionCount];
    Question.innerText=questionList.question;
    Option1.innerText=questionList.a;
    Option2.innerText=questionList.b;
    Option3.innerText=questionList.c;
    Option4.innerText=questionList.d;
    
}
LoadQuestion()
const getCheckAnswer=()=>{
    let answers
    Answers.forEach((curAns)=>{
        if(curAns.checked){
             answers=curAns.id;
        }
    })
    return answers
};
const deselect=()=>{
    Answers.forEach((curAns)=> curAns.checked=false);
}
Inputs.addEventListener('click',()=>{
    let checkAnswer=getCheckAnswer();
    if(checkAnswer===Options[questionCount].ans){
        score++;
    }
    questionCount++;
    deselect();
    if(questionCount < Options.length){
        LoadQuestion();
    }
    else{
        showscore.innerHTML=`
        <h3> You score ${score}/${Options.length}</h3>
        <button class='btn' onclick='location.reload()'>Play Again</button>
        `;
        showscore.classList.remove('showArea')
    }
})
