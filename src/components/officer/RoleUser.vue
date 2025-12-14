<template>
<div class="flex flex-col max-w-5xl mx-auto border rounded-xl w-full p-5 shadow-blue-200 shadow shadow-md ">
<h1 class="text-xl font-semibold">เลื่อนตำแหน่ง & ผู้ใช้งาน</h1>
<form @submit.prevent="uprole()">
<div class="grid grid-cols-2 gap-2 ">

<div>
    <h1>เลือกผู้ใช้งาน(User)</h1>
  <select v-model="select_user" class="border text-center rounded-md w-full p-2 ">
<option v-for="(item,index) in getuser_list" :key="index" :value="item.user_id">{{ item.firstname }} {{ item.lastname }}</option>
  </select>
</div>


<div>
    <h1>เลือกตำแหน่ง</h1>
  <select v-model="select_role" class="border text-center rounded-md w-full p-2 ">
<option value="กรรมการร่วม">กรรมการ</option>
<option value="ประธาน">ประธาน</option>
  </select>
</div>



</div>

<button class=" w-full bg-blue-300 hover:bg-blue-400 p-2 mt-2 border rounded-md ">เชื่อม</button>
</form>
</div>


</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
 
const select_user = ref('')
const getuser_list = ref([])
const getboss_list = ref([])
const select_role = ref([])

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

const uprole = async () => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API}/api/uprole`,{
      boss_id: select_user.value,
      posittion: select_role.value
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