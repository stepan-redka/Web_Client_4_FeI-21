<template>
  <div className="bg-[#8A2BE2]">
    <div className="container mx-auto w-11/12 md:w-full py-20 md:py-26">
      <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-x-10">
        <div className="lg:w-7/12 my-auto">
          <h1 className="text-5xl font-normal text-white font-lato text-center lg:text-start">Test</h1>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div className="container mx-auto w-11/12 md:w-full font-lato py-10">
      <div v-for="(item, index) in testsList" :key="index">
        <h2 className="text-2xl px-10 md:px-40 mt-10">Question {{ item.id + 1 }}: {{ item.question }}</h2>
        <div className="mx-auto w-8/12 md:w-6/12 space-y-5 mt-10">
          <div class="form-control" v-for="(answear, anwid) in item.answears" :key="anwid">
            <label class="space-x-5 flex cursor-pointer">
              <input type="radio" :value="answear.isCorrect" :name="`radio-group-` + item.id" class="radio checked:bg-[#8A2BE2]" />
              <span class="label-text text-xl" :class="this.testChecked ? answear.isCorrect ? 'text-green-600' : 'text-purple-600' : 'text-black'" :id="`text-`+item.id">{{ answear.text }}</span>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div v-if="testChecked">
      <h2 className="text-center my-20 text-3xl">You answered {{ this.correctAnswear }} out of {{ this.totalQuestions }} questions correctly. Your score: {{ this.scores }}%</h2>
    </div>
    <div className="flex justify-center">
      <button @click="checkTest" :disabled="testChecked" className="rounded-2xl bg-[#8A2BE2] hover:bg-white border-4 hover:text-black border-[#8A2BE2] py-4 px-8 text-white uppercase disabled:cursor-not-allowed">Submit now</button>
    </div>
  </div>
</template>

<script>
import { testsList } from '../data/testsData.js'

export default {
  data() {
    return {
      testsList,
      selectedAnswers: [],
      correctAnswear: 0,
      totalQuestions: 0,
      totalAnswears: 0,
      scores: 0,
      testChecked: false
    }
  },
  methods: {
    checkTest() {
      this.correctAnswear = 0;
      this.testChecked = true;
      this.totalQuestions = this.testsList.length;

      this.testsList.forEach((question, index) => {
        const selectedAnswer = document.querySelector(`input[name="radio-group-${index}"]:checked`);
        if (selectedAnswer) {
          if (selectedAnswer.value == `true`) {
            this.correctAnswear++
          }
        }
        this.scores = (this.correctAnswear / this.totalQuestions) * 100;
      })
    }
  }
}
</script>

<style scoped></style>
