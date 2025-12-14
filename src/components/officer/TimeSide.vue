<template>
  <div class="flex flex-col max-w-5xl mx-auto border rounded-xl w-full p-5 shadow-blue-200 shadow shadow-md ">
    <h1 class=" text-xl font-semibold ">จัดการเวลา & เลือกผู้ประเมิน</h1>
<form @submit.prevent="settime()">
<div class="grid grid-cols-2 gap-2 ">

<div>
  <h1>เลือกผู้ประเมิน</h1>

  <select v-model="select_user" class="border rounded-md w-full p-2  text-center">
    <option  v-for="(item,index) in user_list" :key="index" :value="item.user_id" >{{ item.firstname }} {{ item.lastname }}</option>
  </select>

</div>

<div>
  <h1>เลือกเวลาจบ(End)</h1>
  <input v-model="timeend" class="border rounded-md w-full p-2 text-center  " type="date" name="" id="">
</div>


</div>

<button class="border rounded-md  w-full p-2 text-center mt-2 bg-blue-300 hover:bg-blue-400 ">บันทึกเวลา</button>
</form>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

const select_user = ref('')
const timeend = ref('')
const user_list = ref([])

const settime = async () => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API}/api/settime`,
      {
        user_id: select_user.value,
        timeend: timeend.value
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
const showuser = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API}/api/getuser`
    )
      
      if(response.data.success) {
        user_list.value = response.data.rows
      }
      
  } catch(err) {
    console.error(err)
    alert('ฉีผิด')
  }
}
   onMounted(()=>{
    showuser()
   })
</script>