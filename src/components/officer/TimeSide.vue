<template>
  <div class="flex flex-col max-w-5xl mx-auto border rounded-xl w-full p-5 shadow-blue-200 shadow shadow-md ">
    <h1 class=" text-xl font-semibold ">จัดการเวลา & เลือกผู้ประเมิน</h1>

<div class="grid grid-cols-2 gap-2 ">

<div>
  <h1>เลือกผู้ประเมิน</h1>

  <select class="border rounded-md w-full p-2  text-center">
    <option>--เลือกผู้ประเมิน--</option>
  </select>

</div>

<div>
  <h1>เลือกเวลาจบ(End)</h1>
  <input class="border rounded-md w-full p-2 text-center  " type="date" name="" id="">
</div>


</div>

<button class="border rounded-md  w-full p-2 text-center mt-2 bg-blue-300 hover:bg-blue-400 ">บันทึกเวลา</button>

  </div>









   <div class="flex flex-col max-w-5xl mt-10 mx-auto border rounded-xl w-full p-5 shadow-blue-200 shadow shadow-md ">
    <h1 class=" text-xl font-semibold ">รายการทั้งหมด</h1>

<div class="grid grid-cols-2 gap-2 ">

<div>
  <h1>เลือกผู้ประเมิน</h1>
<h1 class="border rounded-md w-full p-2">นาย ควย</h1>

</div>

<div>
  <h1>เลือกเวลาจบ(End)</h1>
  <h1 class="border rounded-md w-full p-2 text-center">27/4/000</h1>
</div>

<div>
<button class=" border rounded-md text-center p-2 bg-green-300 hover:bg-green-400 w-full ">แก้ไข</button>
</div>
<div>
<button class=" border rounded-md text-center p-2 bg-red-300 hover:bg-red-400 w-full ">ลบ</button>

</div>

</div>



  </div>
</template>
