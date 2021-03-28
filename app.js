const quiz =[
  {
    question : 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
    answers:[
      'スーパーファミコン',
      'プレステ2',
      'ニンテンドースイッチ',
      'ニンテンドーDS'
   ],
   correct:'ニンテンドーDS'
  },
  {
    question : '糸井重里が企画にかかわった、任天堂の看板ゲームとは？',
    answers:[
     'MOTHER2',
     'スーパーマリオブラザーズ３',
     'スーパードンキーコング',
     '星のカービー'
    ],
    correct:'MOTHER2'
  },
  {
    question : 'ファイナルファンタジーⅣの主人公の名前は？',
    answers:[
      'フリオニール',
      'クラウド',
      'ティーダ',
      'セシル'
   ],
   correct:'セシル'

  }
];
const quizlength = quiz.length;
let quizindex =0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonlength = $button.length;

const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizindex].question;
  let buttonindex = 0;
  let buttonlength = $button.length;
  while(buttonindex < buttonlength){
    $button[buttonindex].textContent = quiz[quizindex].answers[buttonindex],
    buttonindex++;
  }
}
setupQuiz()

const clickHandler = (e) => {
  if(quiz[quizindex].correct === e.target.textContent){
    window.alert('正解');
    score++;
  } else{
    window.alert('不正解');
  }

  quizindex++;
  if(quizindex < quizlength){
    setupQuiz();
  }else{
    window.alert('終了！、あなたの正解数は'+score+'/'+quizlength+'です。');

  }
};


let handlerindex = 0;

while (handlerindex < buttonlength) {
  $button[handlerindex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerindex++;
}
