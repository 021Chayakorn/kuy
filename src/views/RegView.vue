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
        <h1 class=" text-2xl font-semibold ">สมัครเข้าใช้บัญชี</h1>
        <div class=" flex flex-col mt-15 space-y-4 justify-center items-center ">
          <div>
            <h1>ชื่อผู้ใช้งาน</h1>
            <input class=" border p-2 rounded-md w-90 " placeholder="สร้างชื่อผู้ใช้งาน..." type="text"/>
          </div>
          <div>
            <h1>รหัสผ่าน</h1>
            <input class=" border p-2 rounded-md w-90 " placeholder="สร้างรหัสผ่าน..." type="password"/>
          </div>
          <div>
            <h1>ชื่อจริง</h1>
            <input class=" border p-2 rounded-md w-90 " placeholder="ชื่อผู้ใช้งาน..." type="text"/>
          </div>
          <div>
            <h1>นามสกุล</h1>
            <input class=" border p-2 rounded-md w-90 " placeholder="นามสกุลผู้ใช้งาน..." type="text"/>
          </div>

          <button class=" p-2 border rounded-md w-90 bg-blue-400 hover:bg-blue-500 ">สมัครเข้าใช้งาน</button>

          <div class=" flex flex-row gap-2">
            <h1>หากสมัครบัญชีแล้ว</h1>
            <RouterLink class=" text-blue-700 " to="/login">กดตรงนี้</RouterLink>
          </div>

        </div>
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
const keyuser =ref()
</script>
