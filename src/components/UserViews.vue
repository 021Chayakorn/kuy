<template>
  <div class=" flex flex-col min-h-screen">
 <header class=" bg-gradient-to-r from-blue-300 to-blue-500 p-6 ">
  <button @click="Sidebar" class="  text-2xl lg:hidden  ">ℹ️</button>
  <div class=" flex flex-row  justify-between items-center ">
    <h1 class=" text-xl font-semibold ">แบบประเมิน User</h1>
    <div class=" bg-white border rounded-md p-2 ">
      <h1 class="">สิทธิ์: <span class="text-blue-700">User</span></h1>
    </div>
  </div>
 </header>

 <div class=" flex flex-1 min-h-0">
  <aside :class="['bg-gradient-to-r min-h-screen flex flex-col from-blue-500 to-blue-300 w-85 fixed lg:static top-0 left-0 transtiton transform duration-300 ',
    Open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
  ]">

  <button @click="Sidebar" class=" mt-5 text-2xl lg:hidden  ">ℹ️</button>

  <div class="flex mt-44 flex-col justify-center items-center ">
    <h1 class=" text-xl font-semibold">ระบบ User</h1>
    <p>ระบบทำงานประเมินกรรมการประเมิน</p>




  <div class=" font-semibold mt-10 space-y-3 flex flex-col items-center">

  </div>

  </div>



  </aside>

 <main class=" p-10 flex flex-col w-full min-h-screen">
  <div class=" flex flex-row justify-between items-center ">
          <h1 class="  text-blue-700 text-2xl font-semibold">แบบประเมิน (User Dashboard)</h1>
        
          </div>
          <div class=" mt-5 ">
            <div class=" bg-gradient-to-r from-blue-200 to-blue-400 max-w-5xl border mx-auto rounded-md p-5 ">
             <h1 class="text-xl font-semibold ">รายละเอียดผู้รับการประเมิน</h1>
             <div class=" grid grid-cols-1 lg:grid-cols-2 gap-2 p-5">
              <div class="flex flex-col gap-2">
                <h1>ชื่อจริง-นามสกุล</h1>
                <h1 class=" bg-white border rounded-md w-full p-2 ">ชยกร<span> - </span><span>สัญญาธิกุล</span></h1>
              </div>
              <div class="flex flex-col gap-2">
                <h1>แผนก/ฝ่าย</h1>
       <textarea type="text" class="border bg-white h-10 rounded-md w-full p-2"></textarea>
              </div>

                  <div class="flex flex-col gap-2">
                <h1>ตำแหน่ง</h1>
       <textarea type="text" class="border bg-white h-10 rounded-md w-full p-2"></textarea>
              </div>

                <div class="flex flex-col gap-2">
                <h1>บันทึก</h1>
      <button class=" border rounded-md p-2 bg-green-200 text-green-700 hover:bg-green-300">บันทึกข้อมูล</button>
              </div>

             </div>

            </div>
          </div>

 <div class="max-w-5xl w-full mx-auto space-y-6">
          <div v-for="(item, index) in quiz" :key="index" class="bg-white border rounded-lg shadow-md p-6">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              <div class="lg:col-span-2 space-y-4">
                <div>
                   <h1 class="font-bold text-lg text-blue-800">ข้อที่ {{ item.quiz_id }}</h1>
                   <p class="text-gray-700 mt-1">{{ item.quiz_text }}</p>
                </div>
                
                <textarea 
                  v-model="item.user_answer_text" 
                  placeholder="กรอกรายละเอียด..." ฝ
                  class="border rounded-md p-3 w-full h-24 focus:ring-2 focus:ring-blue-200 outline-none"
                ></textarea>
                
              
              </div>

              <div class="flex flex-col justify-between border-l lg:pl-6 gap-4">
                <div class="flex flex-col items-center justify-center h-full gap-4">
                  <h1 class="font-medium text-gray-900">ให้คะแนนตนเอง</h1>
                  
                  <div class="flex items-center gap-2">
                    <template v-if="Scores">
                      <input 
                        type="number" 
                        min="1" 
                        max="4" 
                        v-model="item.user_score"
                        class="border p-2 w-20 text-center rounded-md font-bold text-xl focus:ring-2 focus:ring-blue-300"
                      >
                      <span class="text-gray-500 font-bold">/ 4</span>
                    </template>
                    
                    <select v-else v-model="item.user_score" class="border text-center rounded-md w-full p-2">
                      <option value="ผ่าน">ผ่าน</option>
                      <option value="ไม่ผ่าน">ไม่ผ่าน</option>
                    </select>
                  </div>
                </div>

                <button 
                  @click="saveQuizItem(item)" 
                  class="bg-green-500 hover:bg-green-600 text-white p-2 rounded-md w-full font-semibold transition shadow-sm"
                >
                  บันทึกผลข้อนี่
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="max-w-5xl space-y-3 p-6 bg-white border rounded-lg shadow-md mt-10 w-full mx-auto">
          <h1 class="text-xl font-semibold text-gray-800">ความคิดเห็นโดยสรุปของกรรมการ:</h1>
          <div class="bg-green-50 text-green-800 p-4 border border-green-200 rounded-md"> 
            
          </div>
        </div>

      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const Open = ref(false);

const Sidebar = () => {
  Open.value = !Open.value;
};
const quiz = ref([]);
const Scores = ref(true); 

const getquiz = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API}/api/getquizuser`);
    if (response.status == 200) {
      const apidata = response.data.message || [];
      
      quiz.value = apidata.map(q => ({
        ...q,
        user_score: 3, 
        user_answer_text: '', 
        user_file: null
      }));
    }
  } catch (err) {
    console.error(err);
  }
};


const saveQuizItem = async (item) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API}/api/saveuseranswer`, {
      quiz_id: item.quiz_id,
      scores: item.user_score,
      details: item.user_answer_text,
    });

    if(response.status === 200) {
        alert('บันทึกสำเร็จ');
    }

  } catch (err) {
    console.error(err);
    alert('เกิดข้อผิดพลาดในการบันทึก');
  }
};


onMounted(() => {
  getquiz();
});
</script>