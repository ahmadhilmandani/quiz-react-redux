import axios from "axios";

export const fetchQuestion = async function () {
  try {
    let temptRandomNum = 0

    const res = await axios.get('https://opentdb.com/api.php?amount=10&category=27')

    for (let index = 0; index < res.data.results.length; index++) {
      res.data.results[index].answerOpt = res.data.results[index].incorrect_answers
      temptRandomNum = Math.floor(Math.random() * res.data.results[index].incorrect_answers.length)
      res.data.results[index].answerOpt.splice(temptRandomNum, 0, res.data.results[index].correct_answer)
    }

    return res.data.results
  }
  catch (error) {
    return error;
  }
}