<template>
  <div class="flex flex-col min-h-screen font-sans">

    <header class="bg-gradient-to-r from-blue-300 to-blue-500 p-6 shadow-md">
      <div class="flex flex-row justify-between items-center">
        <button @click="isSidebarOpen = !isSidebarOpen" class="text-2xl lg:hidden mr-4">ℹ️</button>

        <h1 class="text-xl font-bold text-white shadow-sm">แบบประเมิน Boss</h1>

        <div class="bg-white/90 backdrop-blur-sm border rounded-md px-4 py-2 shadow-sm">
          <h1 class="text-sm font-semibold text-gray-700">สิทธิ์: <span class="text-blue-700 font-bold">Boss</span></h1>
        </div>
      </div>
    </header>

    <div class="flex flex-1 min-h-0 relative">

      <aside :class="['bg-gradient-to-b from-blue-500 to-blue-300 w-80 fixed lg:static top-0 left-0 z-20 h-full transition-transform duration-300 ease-in-out shadow-xl lg:shadow-none',
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0']">
        <button @click="isSidebarOpen = false" class="absolute top-4 right-4 text-white text-2xl lg:hidden">✖️</button>

        <div class="flex mt-20 flex-col justify-center items-center text-white px-6 text-center">
          <h1 class="text-2xl font-bold mb-2">ระบบ Boss</h1>
          <p class="opacity-90">ระบบบริหารจัดการและประเมินผลงาน</p>
          <div class="w-16 h-1 bg-white/50 rounded-full mt-4"></div>
        </div>
      </aside>

      <div v-if="isSidebarOpen" @click="isSidebarOpen = false" class="fixed inset-0 bg-black/50 z-10 lg:hidden"></div>

      <main class="flex-1 p-6 lg:p-10 bg-gray-50 w-full overflow-y-auto">

        <h1 class="text-blue-700 text-2xl font-bold mb-6">แดชบอร์ดการประเมิน</h1>

        <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8 max-w-5xl mx-auto">
          <h2 class="text-lg font-semibold mb-4 text-gray-700 flex items-center gap-2">
            👤 รายชื่อผู้รอการประเมิน
          </h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-h-80 overflow-y-auto pr-2">
            <div v-for="user in userList" :key="user.user_id" :class="['border rounded-lg p-3 text-center cursor-pointer transition-all duration-200 select-none', currentUser?.user_id === user.user_id ? 'bg-blue-600 text-white shadow-md transform scale-105 border-blue-600' : 'bg-white hover:bg-blue-50 hover:border-blue-300 text-gray-600']">
              {{ user.firstname }} {{ user.lastname }}
            </div>
          </div>
          <p v-if="userList.length === 0" class="text-center text-gray-400 mt-4">ไม่มีรายชื่อที่รอการประเมิน</p>
        </div>

        <div v-if="currentUser" class="max-w-5xl w-full mx-auto space-y-6 fade-in">

          <div class="bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-center justify-between">
             <h2 class="text-lg text-blue-800">
               กำลังประเมิน: <span class="font-bold text-2xl ml-2">{{ currentUser.firstname }} {{ currentUser.lastname }}</span>
             </h2>
             <button @click="currentUser = null" class="text-sm text-blue-500 underline hover:text-blue-700">ปิด / ยกเลิก</button>
          </div>






          
          <div class="grid grid-cols-1 gap-6">
            <div v-for="(quizItem, index) in quizList" :key="quizItem.quiz_id || index" class="bg-white border rounded-xl shadow-sm p-6 relative overflow-hidden">
              <div class="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>

              <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

                <div class="lg:col-span-2 space-y-4">
                  <div>
                    <h3 class="font-bold text-lg text-gray-800 mb-1">{{ index + 1 }}. {{ quizItem.topic || 'หัวข้อการประเมิน' }}</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">{{ quizItem.description || 'รายละเอียด...' }}</p>
                  </div>

                  <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">ความคิดเห็นเพิ่มเติม (Boss Comment):</label>
                    <textarea
                      v-model="quizItem.boss_comment"
                      placeholder="ระบุความคิดเห็น จุดเด่น หรือสิ่งที่ควรปรับปรุง..."
                      class="w-full p-3 h-24 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-50 focus:bg-white"
                    ></textarea>
                  </div>
                </div>

                <div class="bg-gray-50 rounded-lg p-5 flex flex-col justify-between border border-gray-100">
                  <div class="text-center mb-4">
                     <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded border border-blue-200">
                       คะแนน User ประเมินตนเอง
                     </span>
                     <div class="text-3xl font-bold text-blue-600 mt-2">{{ quizItem.user_score || 0 }}</div>
                  </div>

                  <div class="flex flex-col items-center">
                    <label class="font-bold text-gray-700 mb-2">คะแนนกรรมการ</label>
                    <div class="flex items-center gap-2">
                       <input
                        type="number"
                        min="1"
                        max="4"
                        v-model="quizItem.boss_score"
                        class="w-20 text-center text-2xl font-bold p-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 outline-none"
                      >
                      <span class="text-gray-400 font-bold text-xl">/ 4</span>
                    </div>
                  </div>

                  <button
                    @click="saveOneQuiz(quizItem)"
                    class="mt-6 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow transition-colors flex items-center justify-center gap-2"
                  >
                    <span>💾 บันทึกข้อนี่</span>
                  </button>
                </div>

              </div>
            </div>
















          </div>

          <div class="bg-white border rounded-xl shadow-md p-8 mt-8">
            <h3 class="text-xl font-bold text-gray-800 mb-4 border-b pb-2">✍️ ลงนามและยืนยันผลการประเมิน</h3>
            <div class="flex flex-col gap-4 max-w-md">
              <div>
                <label class="block text-gray-600 mb-2">ลงชื่อกรรมการ:</label>
                <input
                  v-model="signature"
                  class="w-full text-xl border-b-2 border-gray-300 py-2 px-1 focus:border-blue-600 outline-none transition-colors bg-transparent placeholder-gray-300"
                  type="text"
                  placeholder="พิมพ์ชื่อเพื่อลงนาม..."
                />
              </div>
              <button
                @click="verifyBossSignature"
                :disabled="!signature"
                :class="['font-bold py-3 px-6 rounded-lg shadow-md transition-all',
                  signature ? 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer' : 'bg-gray-300 text-gray-500 cursor-not-allowed']"
              >
                ยืนยันการประเมินทั้งหมด
              </button>
            </div>
          </div>

        </div> </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';


const isSidebarOpen = ref(false);
const userList = ref([]);
const quizList = ref([]);
const currentUser = ref(null);
const signature = ref('');


const fetchUserList = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API}/api/getuserinprocess`);
        if (response.data.success) {
            userList.value = response.data.message;
        }
    } catch (err) {
        console.error(err);
    }
}

const handleSelectUser = async (user) => {
    currentUser.value = user;
    signature.value = '';
    quizList.value = [];

    try {
        const response = await axios.post(`${import.meta.env.VITE_API}/api/getquiz`, {
            user_id: user.user_id
        });

        if (response.data.success) {
            quizList.value = response.data.message.map(q => ({
                ...q,
                boss_score: q.boss_score || 3,
                boss_comment: q.boss_comment || ''
            }));
        }
    } catch (err) {
        console.error(err);
        alert('ไม่สามารถดึงข้อมูลแบบประเมินได้');
    }
}

const saveOneQuiz = async (quizItem) => {
    if (!currentUser.value) return alert('กรุณาเลือกผู้ถูกประเมินก่อน');

    try {
        const response = await axios.post(`${import.meta.env.VITE_API}/api/savebossanswer`, {
            user_id: currentUser.value.user_id,
            quiz_id: quizItem.quiz_id,
            scores: quizItem.boss_score,
            comment: quizItem.boss_comment,
        });

        if (response.status === 200) {
            alert(`บันทึกหัวข้อ "${quizItem.topic || 'นี้'}" เรียบร้อยแล้ว ✅`);
        }
    } catch (err) {
        console.error(err);
        alert('เกิดข้อผิดพลาดในการบันทึก ❌');
    }
}

const verifyBossSignature = async () => {
    if (!signature.value) return alert('กรุณาลงนามลายเซ็น');
    if (!currentUser.value) return;

    if (!confirm(`ยืนยันการประเมินของคุณ ${currentUser.value.firstname}? การกระทำนี้ไม่สามารถแก้ไขได้`)) {
        return;
    }

    try {
        const response = await axios.post(`${import.meta.env.VITE_API}/api/bossvertify`, {
            user_id: currentUser.value.user_id,
            boss_sig: signature.value
        });

        if (response.data.success) {
            alert('ยืนยันผลการประเมินเสร็จสิ้นสมบูรณ์ 🎉');
            currentUser.value = null;
            quizList.value = [];
            fetchUserList();
        }
    } catch (err) {
        console.error("Verify error:", err);
        alert('เกิดข้อผิดพลาดในการยืนยัน');
    }
}

onMounted(() => {
    fetchUserList();
});


</script>
