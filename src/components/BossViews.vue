<template>
  <div class=" flex flex-col min-h-screen">
 <header class=" bg-gradient-to-r from-blue-300 to-blue-500 p-6 ">
  <button @click="Sidebar" class="  text-2xl lg:hidden  ">ℹ️</button>
  <div class=" flex flex-row  justify-between items-center ">
    <h1 class=" text-xl font-semibold ">แบบประเมิน Boss</h1>
    <div class=" bg-white border rounded-md p-2 ">
      <h1 class="">สิทธิ์: <span class="text-blue-700">Boss</span></h1>
    </div>
  </div>
 </header>

 <div class=" flex flex-1 min-h-0">
  <aside :class="['bg-gradient-to-r min-h-screen flex flex-col from-blue-500 to-blue-300 w-85 fixed lg:static top-0 left-0 transtiton transform duration-300 ',
    Open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
  ]">

  <button @click="Sidebar" class=" mt-5 text-2xl lg:hidden  ">ℹ️</button>

  <div class="flex mt-44 flex-col justify-center items-center ">
    <h1 class=" text-xl font-semibold">ระบบ Boss</h1>
    <p>ระบบทำงานประเมินกรรมการประเมิน</p>

  <div class=" font-semibold mt-10 space-y-3 flex flex-col items-center">

  </div>

  </div>



  </aside>

 <main class=" p-10 flex flex-col w-full min-h-screen">
          <h1 class=" text-blue-700 text-2xl font-semibold">แบบประเมิน (Boss Dashboard)</h1>
          <div class=" p-10 ">
            <div class=" max-w-5xl border mx-auto rounded-md p-5 ">
             <h1 class="text-xl font-semibold ">รายชื่อผู้รอรับการประเมิน</h1>
             <div class=" grid grid-cols-1 lg:grid-cols-5 overflow-auto max-h-70 p-2 gap-2">
              <div v-for="(item,index) in userlist" :key="index"  class=" border rounded-md p-2 text-center hover:bg-blue-300">
                {{ item.firstname }} {{ item.lastname }}
              </div>
             </div>
            </div>
          </div>

<div class=" max-w-5xl w-full mx-auto  ">
  <div class=" border rounded-md p-5 ">
    <div class=" ">
      <h1 class=" text-xl font-semibold">การประเมิน:<span>นาย {{ firstname }} {{ lastname }} </span></h1>

    </div>
    <div class=" grid grid-cols-3 gap-2 ">
      <div class=" md:col-span-2 p-2 space-y-2">
        <h1 class=" font-semibold"></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, dignissimos!</p>
      <p></p>
  <h1 class="text-xl font-semibold">ความคิดเห็นโดยสรุป:</h1>
  <textarea placeholder="แสดงความคิดเห็นโดยรวม..." class=" w-100 p-2 h-12 border rounded-md "></textarea>

  <div class="flex flex-row justify-between items-center">

  <div>  <h1 class=" text-xl font-semibold">ลงนามลายเซ็นกรรมการ:</h1>
    <input class=" p-2 text-xl border-b" type="text"/></div>


  </div>
      </div>
      <div class=" border p-4 rounded-md flex flex-col justify-around items-center  ">
        <div>
         <h1 class=" border rounded-md p-2 bg-blue-200 text-blue-700"> คะแนนผู้ประเมิน(User): <span class="">3</span></h1>
        </div>

         <div class=" justify-center items-center flex flex-col  ">
   <h1>คะแนนคณะกรรมการ</h1>
   <div>
    <input  min="1" max="4" type="number" class="border p-1 w-20 text-center rounded font-bold ">
    <span v-if="Scores" class="text-md "> /4</span>
    <select v-else class=" border rounded-md p-2 w-full">
      <option >ไม่ผ่าน</option>
      <option>ผ่าน</option>
    </select>
   </div>
        </div>

        
  </div>
      <button class=" bg-green-300 hover:bg-green-400 p-2 text-green-700 border rounded-md ">ยืนยันผลการประเมิน</button>
    </div>
  </div>
</div>
        </main>
 </div>

  </div>
</template>


<script setup>
  import { ref, onMounted } from 'vue';
import axios from 'axios';
  const Open =ref(false)
  const Sidebar =() => {
    Open.value =! Open.value
  }

const Scores = ref('Scores')
const userlist = ref([])
const user = ref({
    user_id: '',
    firstname: '',
    lastname: ''
})
const quiz = ref([])
const getuser = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API}/api/getuserinprocess`)

        if(response.data.success){
            userlist.value = response.data.message
            user.value = response.data.message
        }
    } catch(err){
        console.error(err)
        alert('ฉีผิด')
    }
}
const getquiz = async () => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API}/api/getquiz`)

        if(response.data.success){
            quiz.value = response.data.message
        }
    } catch(err){
        console.error(err)
        alert('ฉีผิด')
    }
}


onMounted(()=>{
    getuser()
    getquiz()
})
</script>
