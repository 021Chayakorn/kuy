<template>
  <div class="max-w-md mx-auto p-6 bg-white rounded-xl shadow-sm border border-gray-100">
    <h2 class="text-lg font-semibold text-gray-800 mb-4">Upload Multiple Files</h2>

    <div 
      @click="triggerUpload"
      class="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
    >
      <input 
        type="file" 
        multiple
        ref="fileInput" 
        class="hidden" 
        @change="handleFileChange" 
      />

      <div class="flex flex-col items-center justify-center pt-5 pb-6">
        <svg class="w-8 h-8 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
        </svg>
        <p class="mb-1 text-sm text-gray-500"><span class="font-semibold text-blue-600">Click to upload</span> (Multiple)</p>
        <p class="text-xs text-gray-400">Select multiple files at once</p>
      </div>
    </div>

    <div v-if="selectedFiles.length > 0" class="mt-4 space-y-2">
      <div v-for="(file, index) in selectedFiles" :key="index" class="text-sm text-gray-600 bg-blue-50 p-2 rounded border border-blue-100 flex justify-between">
        <span>📄 {{ file.name }}</span>
        <span class="text-xs text-gray-400">{{ (file.size / 1024).toFixed(1) }} KB</span>
      </div>
    </div>

    <button 
      @click="uploadFiles"
      class="w-full mt-6 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
      :disabled="selectedFiles.length === 0"
      :class="{ 'opacity-50 cursor-not-allowed': selectedFiles.length === 0 }"
    >
      Start Upload ({{ selectedFiles.length }})
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const fileInput = ref(null)
const selectedFiles = ref([]) // เปลี่ยนเป็น Array

const triggerUpload = () => {
  fileInput.value.click()
}

// 2. ปรับการเก็บไฟล์ให้เป็น Array
const handleFileChange = (event) => {
  if (event.target.files) {
    // แปลง FileList เป็น Array ปกติ
    selectedFiles.value = Array.from(event.target.files)
  }
}

const uploadFiles = async () => {
  if (selectedFiles.value.length === 0) return

  const formData = new FormData()

  // 3. วนลูปยัดไฟล์ทีละตัว ใส่ชื่อ key เดียวกัน (เช่น 'files')
  selectedFiles.value.forEach((file) => {
    // ชื่อ 'files' ตรงนี้สำคัญมาก Backend ต้องใช้ upload.array('files') ถึงจะเจอใน req.files
    formData.append('files', file) 
  })

  try {
    const res = await axios.post(`${import.meta.env.VITE_API}/api/uploads`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    console.log('Server response:', res.data)
    alert(`อัปโหลด ${selectedFiles.value.length} ไฟล์เรียบร้อย`)
    
  } catch (err) {
    console.error(err)
    alert('อัปโหลดไม่ผ่าน')
  }
}
</script>