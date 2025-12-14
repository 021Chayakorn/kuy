<template>
<div class="flex flex-col max-w-5xl mx-auto border rounded-xl w-full p-5 shadow-blue-200 shadow shadow-md ">
<h1 class="text-xl font-semibold">สร้างคำถาม & แบบประเมิน</h1>
<form @submit.prevent="createtopic()">
<div class="grid grid-cols-2 gap-2 ">

<div>
  <h1>หัวข้อตัวชี้วัด</h1>
  <input v-model="topic_name" placeholder="ชื่อตัวชี้วัด เช่น การทำงาน..." class="border rounded-md w-full p-2 " type="text"/>
</div>

<div>
  <h1>น้ำหนักคะแนน</h1>
 <input v-model="topic_weight" type="number" class="border rounded-md w-full p-2 " />
</div>

<div>
  <h1>รายละเอียด/อธิบาย</h1>
  <textarea v-model="topic_detail" class="border rounded-md w-full p-2 h-10 " placeholder="ใส่รายละเอียด"></textarea>
</div>

<div>
  <h1>กรุณาเช็คความเรียบร้อย</h1>
<button class=" border rounded-md text-center p-2 bg-blue-300 hover:bg-blue-400 w-full ">บันทึกหัวข้อ</button>
</div>
</div>
</form>
</div>

<div class="flex mt-10 flex-col max-w-5xl mx-auto border rounded-xl w-full p-5 shadow-blue-200 shadow shadow-md ">
<h1 class="text-xl font-semibold mb-4">รายการที่สร้างทั้งหมด</h1>

<div v-for="(item, index) in topics_list" :key="index" class="grid grid-cols-2 gap-2 ">

<div>
  <h1>หัวข้อตัวชี้วัด</h1>
  <h1 class="border rounded-md w-full p-2">{{ item.topic_name }}</h1>
</div>

<div>
  <h1>น้ำหนักคะแนน</h1>
<h1 class="border rounded-md w-full p-2">{{ item.topic_weight }}</h1>
</div>

<div>
  <h1>รายละเอียด/อธิบาย</h1>
<h1 class="border rounded-md w-full p-2 h-10 ">{{ item.topic_detail }}</h1>
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


const topic_name = ref('')
const topic_detail = ref('')
const topic_weight = ref('')

const topics_list = ref({
  topic_name: '',
  topic_detail: '',
  topic_weight: ''
})

const createtopic = async () => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API}/api/topic`,
      {
        topic_name: topic_name.value,
        topic_detail: topic_detail.value,
        topic_weight: topic_weight.value
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
  }
}
  
  onMounted(()=>{
    showtopic()
  })
</script>