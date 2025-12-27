<script setup>
import { ref } from 'vue'

// ประเภท field ของ Quiz
const fieldTypes = [
  { id: 'rating', label: 'ให้คะแนน 1-5' },
  { id: 'boolean', label: 'ผ่าน / ไม่ผ่าน' }
]

// 2. State สำหรับเก็บรายการฟอร์ม (support ทั้งหัวข้อและคำถาม)
const formItems = ref([
  {
    mode: 'topic', // 'topic' | 'question'
    type: 'short_text',
    question: '',
    answer: '',
    weight: '',
    detail: '',
    category: ''
  }
])

// 3. ฟังก์ชันจัดการ Logic
const addItem = () => {
  formItems.value.push({
    mode: 'topic',
    type: 'short_text',
    question: '',
    answer: '',
    weight: '',
    detail: '',
    category: ''
  })
}

const removeItem = (index) => {
  if (formItems.value.length > 1) {
    formItems.value.splice(index, 1)
  }
}

const submitForm = () => {
  const ok = confirm('คุณเพิ่มหัวข้อทั้งหมดเรียบร้อยแล้วใช่ไหม?')
  if (!ok) return

  console.log('Data Submitted:', JSON.parse(JSON.stringify(formItems.value)))
  alert('ส่งข้อมูลเรียบร้อย! ตรวจสอบข้อมูลใน Console')
}
</script>

<template>
  <div class="min-h-screen  py-12 px-4">
    <div class="max-w-4xl mx-auto">

      <div class="mb-8 text-center">
        <h1 class="text-3xl font-extrabold text-slate-800">สร้างหัวข้อการประเมิน</h1>
        <p class="text-slate-500 mt-2">สร้างและกรอกข้อมูลตามประเภทที่ต้องการ</p>
      </div>

      <div class="space-y-6">
        <div v-for="(item, index) in formItems" :key="index"
             class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 transition-all hover:shadow-md">

          <div class="flex flex-wrap justify-between items-center gap-4 mb-6 pb-4 border-b border-slate-100">
            <div class="flex items-center gap-3">
              <span class="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-sm">
                {{ index + 1 }}
              </span>

              <select v-model="item.mode" class="bg-slate-100 border-none rounded-lg text-sm font-semibold py-1 px-2">
                <option value="topic">หัวข้อ</option>
                <option value="question">คำถาม</option>
              </select>

              <select v-if="item.mode === 'question'" v-model="item.type" class="bg-slate-100 border-none rounded-lg text-sm font-semibold py-1 px-2">
                <option v-for="t in fieldTypes" :key="t.id" :value="t.id">{{ t.label }}</option>
              </select>
            </div>

            <button @click="removeItem(index)" class="text-slate-400 hover:text-red-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

            <div class="space-y-4">
              <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">หัวข้อ/คำถาม</label>
                <input v-model="item.question" type="text" placeholder="ระบุคำถามที่นี่..."
                       class="w-full p-2 border  rounded-lg focus:ring-indigo-500 focus:border-indigo-500">
              </div>

              <div v-if="item.mode === 'question'">
                <label class="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">รูปแบบการให้คะแนน</label>

                <div v-if="item.type === 'boolean'" class="flex text-center w-full gap-4 p-1">
                  <div class="flex-1 py-2 px-3 border rounded">ผ่าน</div>
                  <div class="flex-1 py-2 px-3 border rounded">ไม่ผ่าน</div>
                </div>

                <div v-if="item.type === 'rating'" class="flex flex-col items-start gap-2">
                  <h1 class=" text-left">เลือกระดับคะแนน</h1>
                  <div class=" flex flex-row gap-4">
                    <button v-for="n in 5" :key="n" @click="item.answer = n" type="button"
                           :class="item.answer >= n ? 'bg-amber-400 text-white' : 'bg-slate-100 text-slate-400'"
                           class="w-10 h-10 rounded-full font-bold transition-all hover:scale-110">
                      {{ n }}
                    </button>
                  </div>
                </div>
              </div>

            </div>

            <div class="flex flex-col">
              <template v-if="item.mode === 'topic'">
                <label class="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">น้ำหนักคะแนน</label>
                <select v-model="item.weight" class="border p-2 h-10 rounded-lg text-sm font-semibold py-1.5 px-3 focus:ring-2 focus:ring-indigo-500">
                  <option value="">เลือกน้ำหนัก</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>

                <label class="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 mt-4">รายละเอียด</label>
                <textarea v-model="item.detail" class=" border  flex-1 w-full p-2 rounded-lg bg-slate-50 focus:bg-white transition-colors"
                          placeholder="เพิ่มความคิดเห็นเพิ่มเติม..."></textarea>
              </template>

              <template v-else>
                <label class="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">เลือกหัวข้อหมวดหมู่</label>
                <select v-model="item.category" class="border p-2 h-10 rounded-lg text-sm font-semibold py-1.5 px-3 focus:ring-2 focus:ring-indigo-500">
                  <option value="">-- เลือกหมวดหมู่ --</option>
                </select>
              </template>

            </div>



          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 mt-8">
          <button @click="addItem"
                  class="flex-1 py-3 px-6 rounded-xl border-2 border-dashed border-indigo-300 text-indigo-600 font-bold hover:bg-indigo-50 transition-all">
            + เพิ่มหัวข้อใหม่
          </button>

          <button @click="submitForm"
                  class="flex-1 py-3 px-6 rounded-xl bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 active:scale-95 transition-all">
            บันทึกข้อมูลทั้งหมด
          </button>
        </div>

      </div>
    </div>
  </div>
</template>
