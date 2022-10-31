const express = require('express')
const app = express()
const port = 3001

const data =  require("./TestData.json")

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

app.get('/getWords', (req, res) => {
    const wordList = data.wordList
    let result = []
    let isLoading = true
    const groupAllByKey =  wordList.reduce((r, a) => {
        r[a.pos] = [...r[a.pos] || [], a];
        return r;
       }, {});
    while(isLoading){
        let randomId = randomIntFromInterval(1, wordList.length-1)
        const item = wordList.filter((item)=>  item.id === randomId)
        if(!result.includes(item)) result.push(...item)
        if(result.length === 9) isLoading = false
        else if (result.length > 9) isLoading = true
    }
     const groupByKey =  result.reduce((r, a) => {
        r[a.pos] = [...r[a.pos] || [], a];
        return r;
       }, {});

       if(Object.keys(groupByKey).length < 4) {
        const needed = Object.keys(groupAllByKey).filter(item => !Object.keys(groupByKey).includes(item))
        const neededList = wordList.filter((item)=>  item.pos === needed)
        while(result.length !== 10){
        let randomId = randomIntFromInterval(1, wordList.length-1)
        const item = neededList.filter((item)=>  item.id === randomId)
        if(!result.includes(item)) result.push(...item)
    }
       }

      
  res.json(result)
})

app.get('/getRank/:score', (req, res) => {
    const score = req.params.score
    const rankList = data.scoresList
    const restOfList = rankList.filter((item) => item < score)
    const userRank = (restOfList.length/rankList.length) * 100
    res.json(userRank)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



