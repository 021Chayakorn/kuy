<template>
  <div class=" flex flex-col lg:flex-row min-h-screen">
    <div class=" flex flex-1 w-full bg-gradient-to-r from-blue-300 to-blue-500 ">
      <div class=" w-full flex flex-col justify-center items-center">
        <h1 class=" text-2xl font-semibold  ">ระบบกรรมการอาชีวะ</h1>
        <p>แบบประเมินคณะกรรมการ และ ผู้ประเมิน</p>
      </div>
    </div>

    <div class=" flex flex-1 w-full  ">
      <div class="w-full flex flex-col justify-center items-center">
        <h1 class=" text-2xl font-semibold ">ลงชื่อเข้าใช้บัญชี</h1>
        <form @submit.prevent="handlelogin()">
        <div class=" flex flex-col mt-15 space-y-4 justify-center items-center ">
          <div>
            <h1>ชื่อผู้ใช้งาน</h1>
            <input v-model="keyuser" class=" border p-2 rounded-md w-90 " placeholder="สร้างชื่อผู้ใช้งาน..." type="text"/>
          </div>
          <div>
            <h1>รหัสผ่าน</h1>
            <input v-model="password" class=" border p-2 rounded-md w-90 " placeholder="สร้างรหัสผ่าน..." type="password"/>
          </div>


          <button class=" p-2 border rounded-md w-90 bg-blue-400 hover:bg-blue-500 ">เข้าใช้งาน</button>

          <div class=" flex flex-row gap-2">
            <h1>หากยังไมได้บัญชีแล้ว</h1>
            <RouterLink class=" text-blue-700 " to="/reg">กดตรงนี้</RouterLink>
          </div>

        </div>
        </form>
      </div>
    </div>

  </div>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import { useRouter } from 'vue-router';

const router = useRouter()
const keyuser =ref('')
const password = ref('')

const handlelogin = async () => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API}/api/login`,
      {
        keyuser: keyuser.value,
        password: password.value
      }
    )
      const token = response.data.token
      localStorage.setItem('authtoken', token)

      const decoded = jwtDecode(token)
      
      if(decoded.role === 'user'){
        alert('เข้าสํู่ระบบสำเร็จ')
        router.push('/user')
      } else if(decoded.role === 'boss') {
         alert('เข้าสํู่ระบบสำเร็จ')
        router.push('/boss')
      } else if(decoded.role === 'officer') {
         alert('เข้าสํู่ระบบสำเร็จ')
        router.push('/officer')
      }

      
  } catch(err) {
    console.error(err)
    alert('ฉีผิด')
  }
}
  
</script>