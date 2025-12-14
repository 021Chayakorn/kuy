<template>
  <div class=" flex flex-col min-h-screen">
 <header class=" bg-gradient-to-r from-blue-300 to-blue-500 p-6 ">
  <button @click="Sidebar" class="  text-2xl lg:hidden  ">ℹ️</button>
  <div class=" flex flex-row  justify-between items-center ">
    <h1 class=" text-xl font-semibold ">Officer</h1>
    <div class=" bg-white border rounded-md p-2 ">
      <h1 class="">สิทธิ์: <span class="text-blue-700">Officer</span></h1>
    </div>
  </div>
 </header>

 <div class=" flex flex-1 min-h-0">
  <aside :class="['bg-gradient-to-r min-h-screen flex flex-col from-blue-500 to-blue-300 w-85 fixed lg:static top-0 left-0 transtiton transform duration-300 ',
    Open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
  ]">

  <button @click="Sidebar" class=" mt-5 text-2xl lg:hidden  ">ℹ️</button>

  <div class="flex mt-44 flex-col justify-center items-center ">
    <h1 class=" text-xl font-semibold">ระบบ Officer</h1>
    <p>ระบบทำงานประเมิน</p>

  <div class=" font-semibold mt-10 space-y-3 flex flex-col items-center">
    <RouterLink to="/quiz">สร้างคำถาม</RouterLink>
     <RouterLink to="/topic">จัดการหัวข้อ</RouterLink>
     <RouterLink to="/time">จัดการเวลา</RouterLink>

   <RouterLink to="/role">จับคู่กรรมการ/ผู้ประเมิน</RouterLink>
       <RouterLink to="/report">รายงานผล</RouterLink>
        <RouterLink to="/match">กำหนดบทบาท</RouterLink>
  </div>

  </div>



  </aside>

 <main class=" p-10 flex flex-col w-full min-h-screen">
          <h1 class=" text-blue-700 text-2xl font-semibold">จัดการระบบ (Officer Dashboard)</h1>
          <div class=" p-10">
 <RouterView></RouterView>
          </div>

        </main>

 </div>

  </div>
</template>


<script setup>
  import { ref } from 'vue';

  const Open =ref(false)
  const Sidebar =() => {
    Open.value =! Open.value
  }

</script>
