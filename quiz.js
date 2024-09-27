const questions = [{
    'que': 'Which of the following is a markup language?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'JavaScript',
    'd': 'PHP',
    'correct': 'a'
},
{
    'que': 'What is a fullform of CSS?',
    'a': 'cascading sheet style',
    'b': 'Cascading style sheet',
    'c': 'Canon style sheet',
    'd': 'Common style sheet',
    'correct': 'b'
},
{
    'que': 'Which year javascript launched?',
    'a': '1995',
    'b': '1994',
    'c': '1996',
    'd': 'none of the above',
    'correct': 'a'
}
];

const testEl=document.getElementById("first-box");
const testBtnEl=document.getElementById("test-btn");
const clockEl=document.getElementById("clock");

// testBtnEl.addEventHandler("click",()=>{
//     testEl.classList.add("hidden");
// });






let time=10;
let index=0;
let total=questions.length;

let right=0,wrong=0;
const ques=document.getElementById('ques');
const options=document.querySelectorAll(".options");
testBtnEl.onclick=function(){


    testEl.classList.add("hidden");
    loadQuestions();

};



const loadQuestions=()=>{
    if(index===total){
        console.log(index,total);
         return endQuiz();

    }


     reset();
    const data=questions[index];
    console.log(data);
    ques.innerHTML= `${index+1}. ${data.que}`;
    options[0].nextElementSibling.innerText=data.a;
    options[1].nextElementSibling.innerText=data.b;
    options[2].nextElementSibling.innerText=data.c;
    options[3].nextElementSibling.innerText=data.d;
    time=10;
    start_timer();


}
function start_timer(){
   timeInterval= setInterval(function(){
    clockEl.textContent=time;
    time--;
    

    if(time<0){
        clearInterval(timeInterval);
        const Ans=getAnswer();
        
        
        const data=questions[index];
            if(Ans===data.correct){
                right++;
                console.log(`right:${right}`);
            }
            else{
                wrong++;
                console.log(`wrong:${wrong}`);
            }
            index++;
            console.log(`${index}/${questions.length}`)
        
            loadQuestions();
        
            return;
        
    }
  

    },1000)


    
       
    
    
}




const submitAns=()=>{

    
clearInterval(timeInterval);



    const Ans=getAnswer();
if (Ans==null) {//(!Ans)
    alert('Please select an answer before proceeding.');
    return start_timer();;
}

const data=questions[index];
    if(Ans===data.correct){
        right++;
        console.log(`right:${right}`);
    }
    else{
        wrong++;
        console.log(`wrong:${wrong}`);
    }
    index++;
    console.log(`${index}/${questions.length}`)
 clockEl.textContent=10;
    loadQuestions();

    return;

};

const getAnswer=()=>{
    let answer;
    options.forEach((input)=>{
        if(input.checked){
           answer=input.value;
        }

    });
    return answer;
};
// const endQuiz=()=>{
//     document.getElementsByClassName(".box").innerHTML=`
//     <h3>Thank you for taking test</h3>
//     <h3> ${right}/${total} are correct</h3>
//     `

// };
const reset=()=>{

    options.forEach((input)=>{
        input.checked=false;
    })

};

const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
    <h3>Thank you for taking test</h3>
    <h3>${right}/${total} are correct</h3>
    <button id=again onclick="location.reload()">Take test again</button>
    `

}



// {

// const testEl = document.getElementById("first-box");
// const testBtnEl = document.getElementById("test-btn");

// testBtnEl.onclick = function () {
//     testEl.classList.add("hidden");
// };

// let index = 0;
// let right = 0, wrong = 0;
// let total = questions.length;
// const quesEl = document.getElementById("ques");
// const optionsEl = document.querySelectorAll(".options");
// const loadQuestions = () => {
//     if (index === total) {
//        return endQuiz();
//     }
//     reset();
//     const data = questions[index];
//     console.log(data);
//     quesEl.innerHTML = `${index + 1}.${data.que}`;
//     optionsEl[0].nextElementSibling.innerHTML = data.a;
//     optionsEl[1].nextElementSibling.innerHTML = data.b;
//     optionsEl[2].nextElementSibling.innerHTML = data.c;
//     optionsEl[3].nextElementSibling.innerHTML = data.d;


// }

// const submitAns = () => {
//     const Ans = getAnswer();
//     if (!Ans) {
//         alert('Please select an answer before proceeding.');
//         return;
//     }
    
//     const data = questions[index];
//     if (Ans === data.correct) {
//         right++;
//     }
//     else {
//         wrong++
//     }
//     index++;
//     loadQuestions();
//     return;
// }

// const getAnswer = () => {
//     let Answer;

//     optionsEl.forEach((input) => {
//         if (input.checked) {
//             Answer = input.value;
//         }
//     });
//     return Answer;

// }

// const endQuiz = () => {
//     document.getElementById("box").innerHTML = `
    
//     <h2>Thankyou for taking test</h2>
//     <h2>${right}/${total} are correct</h2>
//     <button class="Again" onclick="location.reload()">Take test again</button>
    
//     `
// }

// const reset = () => {
//     optionsEl.forEach((input) => {
//         input.checked = false;
//     })
// }
// loadQuestions();

// }


