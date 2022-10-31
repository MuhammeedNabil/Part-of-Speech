/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AllData from "./TestData.json";


export default function Practice() {
  const [userWords, setUserWordes]: any[] = useState([]);
  const [question, setQuestion]: any[] = useState([]);

  useEffect(() => {
    // fetch("/getWords").then((res) => res.json())
    //   .then((data) => {
    //     console.log(data)
    //     setUserWordes(data)
    //   });
  // ----------------------------testData.json file code--------------------------
  function randomIntFromInterval(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const filteredWords = () => {
    const wordList = AllData.wordList;
    let result: any[] = [];
    let isLoading = true;
    const groupAllByKey = wordList.reduce((r: any, a) => {
      r[a.pos] = [...(r[a.pos] || []), a];
      return r;
    }, {});
    while (isLoading) {
      let randomId = randomIntFromInterval(1, wordList.length - 1);
      const item = wordList.filter((item) => item.id === randomId);
      if (!result.includes(item)) result.push(...item);
      if (result.length === 9) isLoading = false;
      else if (result.length > 9) isLoading = true;
    }
    const groupByKey = result.reduce((r, a) => {
      r[a.pos] = [...(r[a.pos] || []), a];
      return r;
    }, {});

    if (Object.keys(groupByKey).length < 4) {
      const needed = Object.keys(groupAllByKey).filter(
        (item) => !Object.keys(groupByKey).includes(item)
      );
      const neededList = wordList.filter((item) => item.pos === needed[0]);
      while (result.length !== 10) {
        let randomId = randomIntFromInterval(1, wordList.length - 1);
        const item = neededList.filter((item) => item.id === randomId);
        if (!result.includes(item)) result.push(...item);
      }
    } else if (Object.keys(groupByKey).length === 4) {
      let randomId = randomIntFromInterval(1, wordList.length - 1);
      const item = wordList.filter((item) => item.id === randomId);
      if (!result.includes(item)) result.push(...item);
    }
    return result;
  };
    const res = filteredWords();
    setUserWordes(res);
  }, []);



  let counter = 0;
  let score = 0;
  let questionElement = getElement(counter);
    // ----------------------------get one Element from the Array------------------------- 
function getElement(index:any) {
  return userWords[index]
  
}

// --------------------------Navigate function to rank--------------------------------------------
const navigate = useNavigate();
function goToStudy() {
  navigate("/rank");
}
// --------------------------Move to the next Question function-----------------------------------------
function nextQuestion() {
  counter++
  if (counter < 10) {
      questionElement.word
    getElement(counter)
    console.log('counter',counter);
  console.log('question',userWords[counter]);
  setQuestion(questionElement.word)
  }
else{
  {counter?<div className="col-md-12 btn btn-info ms-auto">Finish</div>:<div onClick={() => nextQuestion()}  className="col-md-12 btn btn-info ms-auto">Next</div>}
  goToStudy()
}
}



// --------------------------chickTrue function to get score--------------------------------------------
  function chickTrue(answerValue: string) {
    if (questionElement.pos == answerValue) {
      <i className="fa-solid text-success fa-check"></i>
      score +=10
      console.log('score',score);
    }
    else{
      <i className="fa-solid text-danger fa-xmark"></i>
      console.log('false',score);
    }
  }


  // console.log('score',score);
  // console.log('counter',counter);
  // console.log('question',userWords);


  return (
    <>
      <div className="row g-2 h-50 bg-white p-5 m-auto justify-content-between align-items-center overflow-auto">
        

      <div className="progress">
  <div className="progress-bar" role="progressbar"></div>
</div>


        {/* -------------------------------Words preview to the Ui------------------------------- */}
        <p>"{question}" is a/an ..........</p> 
        
        {/* <h6  className="col-md-12">
            "{question.word}" is a/an ..........
          </h6>  */}


        {/* {userWords.map((item: any, ) => (
          <h6 key={item.id} className="col-md-12">
            "{item.word}" is a/an ..........
          </h6> 
        ))} */}

        {/* --------------------------------------Choise buttons----------------------------------- */}
        <button
          onClick={(Adverb) => chickTrue("adverb")}
          className="col-md-5 btn btn-primary"
        >
          Adverb
        </button>

        <div
          onClick={(verb) => chickTrue("verb")}
          className="col-md-5 btn btn-primary"
        >
          Verb
        </div>

        <div
          onClick={(Noun) => chickTrue("noun")}
          className="col-md-5 btn btn-primary"
        >
          Noun
        </div>

        <div
          onClick={(e) => chickTrue("adjective")}
          className="col-md-5 btn btn-primary"
        >
          Adjective
        </div>
        {/* --------------------------------------Next buttons------------------------------------------ */}
        <div onClick={() => nextQuestion()} className="col-md-12 btn btn-info ms-auto">Next</div>
        
        
        {/* if (counter < 10){
          question = getElement(counter)
        } */}
        
        
      </div>
    </>
  );
}