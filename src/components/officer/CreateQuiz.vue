<template>
<div class="flex flex-col max-w-5xl mx-auto border rounded-xl w-full p-5 shadow-blue-200 shadow shadow-md ">
<h1 class="text-xl font-semibold">สร้างคำถาม & แบบประเมิน</h1>

<div class="grid grid-cols-2 gap-2 ">

<div>
  <h1>หัวข้อคำถาม</h1>
  <input placeholder="หัวข้อคำถาม..." class="border rounded-md w-full p-2 " type="text"/>
</div>

<div>
  <h1>หัวข้อหมวดหมู่</h1>
  <select class="border text-center rounded-md w-full p-2 ">
    <option>--กรุณาเลือก--</option>
  </select>
</div>

<div>
  <h1>รูปแบบการให้คะแนน</h1>
  <select class="border text-center rounded-md w-full p-2 ">
    <option>ผ่าน/ไม่ผ่าน</option>
    <option>สเกลคะแนน 1-4</option>
  </select>
</div>

<div>
  <h1>กรุณาเช็คความเรียบร้อย</h1>
<button class=" border rounded-md text-center p-2 bg-blue-300 hover:bg-blue-400 w-full ">ส่งหัวข้อคำถาม</button>
</div>
</div>

</div>

<div class="flex mt-10 flex-col max-w-5xl mx-auto border rounded-xl w-full p-5 shadow-blue-200 shadow shadow-md ">
<h1 class="text-xl font-semibold">รายการที่สร้างทั้งหมด</h1>

<div class="grid grid-cols-2 gap-2 ">

<div>
  <h1>สร้างคำถาม</h1>
  <h1 class="border rounded-md w-full p-2">daafd</h1>
</div>

<div>
  <h1>หัวข้อหมวดหมู่</h1>
<h1 class="border rounded-md w-full p-2">20</h1>
</div>

<div>
  <h1>รูปแบบการให้คะแนน</h1>
<h1 class="border rounded-md w-full p-2 h-10 ">fdfd</h1>
</div>

<div class=" grid gird-cols-2  gap-2 ">
  <button class="border bg-green-300 hover:bg-green-400 rounded-md w-full p-2 h-10 ">แก้ไข</button>
  <button class="border bg-red-300 hover:bg-red-400 rounded-md w-full p-2 h-10 ">ลบ</button>
</div>
</div>

</div>



</template>
