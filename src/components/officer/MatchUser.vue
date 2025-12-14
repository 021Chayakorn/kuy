<template>
<div class="flex flex-col max-w-5xl mx-auto border rounded-xl w-full p-5 shadow-blue-200 shadow shadow-md ">
<h1 class="text-xl font-semibold">เลื่อนตำแหน่ง & ผู้ใช้งาน</h1>
<form @submit.prevent="match()">
<div class="grid grid-cols-2 gap-2 ">

<div>
    <h1>เลือกผู้ใช้งาน(User)</h1>
  <select v-model="select_user" class="border text-center rounded-md w-full p-2 ">
<option v-for="(item,index) in getuser_list" :key="index" :value="item.user_id">{{ item.firstname }} {{ item.lastname }}</option>
  </select>
</div>


<div>
    <h1>เลือกกรรมการ(Boss)</h1>
  <select v-model="select_boss" class="border text-center rounded-md w-full p-2 ">
<option v-for="(item,index) in getboss_list" :key="index" :value="item.user_id">{{ item.firstname }} {{ item.lastname }}</option>

  </select>
</div>



</div>

<button class=" w-full bg-blue-300 hover:bg-blue-400 p-2 mt-2 border rounded-md ">เลื่อนตำแหน่ง</button>
</form>
</div>

</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
 
const select_user = ref('')
const select_boss = ref('')

const getboss_list = ref([])
const getuser_list = ref([])

const getuser = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API}/api/getuser`,
    )
      
      if(response.data.success) {
        getuser_list.value = response.data.rows
      }
      
  } catch(err) {
    console.error(err)
    alert('ฉีผิด')
  }
}
const getboss = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API}/api/getboss`,
    )
      
      if(response.data.success) {
        getboss_list.value = response.data.rows
      }
      
  } catch(err) {
    console.error(err)
    alert('ฉีผิด')
  }
}
const match = async () => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API}/api/matchuser`,{
      user_id: select_user.value,
      boss_id: select_boss.value
    }
    )
     if(response.data.success) {
        alert('ส่งข้อมูลเรียบร้อย')
      }
  } catch(err) {
    console.error(err)
    alert('ฉีผิด')
  }
}
  
  onMounted(()=>{
    getuser()
    getboss()
  })
</script>