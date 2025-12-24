<template>
<div class="flex flex-col max-w-5xl mx-auto border rounded-xl w-full p-5 shadow-blue-200 shadow shadow-md ">
<h1 class="text-xl font-semibold">สร้างคำถาม & แบบประเมิน</h1>
<form @submit.prevent="createquiz()">
<div class="grid grid-cols-2 gap-2 ">

<div>
  <h1>หัวข้อคำถาม</h1>
  <input v-model="quiz_text" placeholder="หัวข้อคำถาม..." class="border rounded-md w-full p-2 " type="text"/>
</div>

<div>
  <h1>หัวข้อหมวดหมู่</h1>
  <select v-model="topic_id" class="border text-center rounded-md w-full p-2 ">
    <option value="" disabled>--กรุณาเลือก--</option>
    <option v-for="(item, index) in topics_list" :key="index" :value="item.topic_id">{{ item.topic_name }}</option>
  </select>
</div>

<div>
  <h1>รูปแบบการให้คะแนน</h1>
  <select v-model="quiz_type" class="border text-center rounded-md w-full p-2 ">
    <option value="YN">ผ่าน/ไม่ผ่าน</option>
    <option value="Scores">สเกลคะแนน 1-4</option>
  </select>
</div>

<div>
  <h1>กรุณาเช็คความเรียบร้อย</h1>
<button class=" border rounded-md text-center p-2 bg-blue-300 hover:bg-blue-400 w-full ">ส่งหัวข้อคำถาม</button>
</div>
</div>
</form>
</div>

<div class="flex mt-10 flex-col max-w-5xl mx-auto border rounded-xl w-full p-5 shadow-blue-200 shadow shadow-md ">
<h1 class="text-xl font-semibold">รายการที่สร้างทั้งหมด</h1>

<div v-for="(item, index) in quiz_list" :key="index"  class="grid grid-cols-2 gap-2 ">

<div>
  <h1>ชื่อคำถาม</h1>
  <h1 class="border rounded-md w-full p-2">{{ item.quiz_text }}</h1>
</div>

<div>
  <h1>หมวดหมู่</h1>
<h1 class="border rounded-md w-full p-2">{{ item.topic_id }}</h1>
</div>

<div>
  <h1>รูปแบบการให้คะแนน</h1>
<h1 class="border rounded-md w-full p-2 h-10 ">{{ item.quiz_type }}</h1>
</div>

<div class=" grid gird-cols-2  gap-2 ">
  <button class="border bg-green-300 hover:bg-green-400 rounded-md w-full p-2 h-10 ">แก้ไข</button>
  <button class="border bg-red-300 hover:bg-red-400 rounded-md w-full p-2 h-10  ">ลบ</button>
</div>
<p class="mb-6">________________________________________________________________________________________________________________________________________</p>
</div>

</div>



</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const topic_id = ref('')
const quiz_text = ref('')
const quiz_type = ref('')
const topics_list = ref([])
const quiz_list = ref([])

const createquiz = async () => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API}/api/quiz`,
      {
        topic_id: topic_id.value,
        quiz_text: quiz_text.value,
        quiz_type: quiz_type.value
      }
    )
      
      if(response.status == 200) {
        alert('รักฉี รักติน')
      }
      
  } catch(err) {
    console.error(err)
    alert('ฉีผิด')
  }
}
const showtopic = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API}/api/topic`
    )
      
      if(response.data.success) {
        topics_list.value = response.data.message
      }
      
  } catch(err) {
    console.error(err)
    alert('ฉีผิด')
  }.
}
  
  onMounted(()=>{
    showtopic()
  })
const showquiz = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API}/api/quiz`
    )
      
      if(response.data.success) {
        quiz_list.value = response.data.message
      }
      
  } catch(err) {
    console.error(err)
    alert('ฉีผิด')
  }
}
  
  onMounted(()=>{
    showtopic(),
    showquiz()
  })
</script>