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
          <h1 class="  text-blue-700 text-2xl font-semibold">แบบประเมิน (User Dashboard)</h1>
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

<div class=" max-w-5xl mt-5 w-full mx-auto  ">
  <div class=" border rounded-md p-5 ">
    <div class=" ">
      <h1 class=" text-xl font-semibold">การประเมิน:<span>นาย dffddffdfdf</span></h1>

    </div>
    <div class=" grid grid-cols-1 lg:grid-cols-3 gap-2 ">
      <div class=" md:col-span-2 p-2 space-y-2">
        <h1 class=" font-semibold">ข้อที่.1</h1>
        <p>หนก่ดฟนหกด่หกกดนดานฟหกดยน่หำดนไาำดนยไำดดๆพเบำพำนพาๆำพเ</p>
    <textarea placeholder="กรอกรายเอียด..." class="border rounded-md p-3 w-full"></textarea>
      <input class=" border rounded-md p-3 w-full" type="file"/>

      </div>
      <div class=" border rounded-md flex flex-col justify-around items-center  ">



         <div class=" justify-center w-full p-3 items-center flex flex-col  ">
   <h1>ให้คะแนนตนเอง</h1>
   <div>
    <select class=" mt-2 bg-gradient-to-r from-blue-200 to-blue-400 border rounded-md p-2 w-70">
      <option>ไม่ผ่าน</option>
      <option>ผ่าน</option>
    </select>
   </div>
        </div>

  </div>

  <div class="p-2"><button class=" p-2 bg-green-300  text-green-700 hover:bg-green-400 font-semibold border rounded-md  ">ส่งแบบประเมิน</button></div>

    </div>

<div class=" grid grid-cols-1 lg:grid-cols-3 gap-2 ">
      <div class=" md:col-span-2 p-2 space-y-2">
        <h1 class=" font-semibold">ข้อที่.1</h1>
        <p>หนก่ดฟนหกด่หกกดนดานฟหกดยน่หำดนไาำดนยไำดดๆพเบำพำนพาๆำพเ</p>
    <textarea placeholder="กรอกรายเอียด..." class="border rounded-md p-3 w-full"></textarea>
      <input class=" border rounded-md p-3 w-full" type="file"/>

      </div>
      <div class=" border rounded-md flex flex-col justify-around items-center  ">



         <div class=" justify-center w-full p-3 items-center flex flex-col  ">
   <h1>ให้คะแนนตนเอง</h1>
   <div>
    <select class=" mt-2 bg-gradient-to-r from-blue-200 to-blue-400 border rounded-md p-2 w-70">
      <option>ไม่ผ่าน</option>
      <option>ผ่าน</option>
    </select>
   </div>
        </div>

  </div>

  <div class="p-2"><button class=" p-2 bg-green-300  text-green-700 hover:bg-green-400 font-semibold border rounded-md  ">ส่งแบบประเมิน</button></div>

    </div>

      <div class=" grid grid-cols-1 lg:grid-cols-3 gap-2 ">
      <div class=" md:col-span-2 p-2 space-y-2">
        <h1 class=" font-semibold">ข้อที่.1</h1>
        <p>หนก่ดฟนหกด่หกกดนดานฟหกดยน่หำดนไาำดนยไำดดๆพเบำพำนพาๆำพเ</p>
    <textarea placeholder="กรอกรายเอียด..." class="border rounded-md p-3 w-full"></textarea>
      <input class=" border rounded-md p-3 w-full" type="file"/>

      </div>
      <div class=" border rounded-md flex flex-col justify-around items-center  ">



         <div class=" justify-center w-full p-3 items-center flex flex-col  ">
   <h1>ให้คะแนนตนเอง</h1>
   <div>
    <select class="  bg-gradient-to-r from-blue-200 to-blue-400  mt-2 border rounded-md p-2 w-70">
      <option>4-ดีเยี่ยม</option>
      <option>3-ดี</option>
      <option>2-ปานกลาง</option>
      <option>1-ปรับปรุง</option>
    </select>
   </div>
        </div>

  </div>

  <div class="p-2"><button class=" p-2 bg-green-300  text-green-700 hover:bg-green-400 font-semibold border rounded-md  ">ส่งแบบประเมิน</button></div>

    </div>


  </div>






</div>


<div class="max-w-5xl   space-y-3 p-5 border rounded-md mt-10 w-full mx-auto ">
  <h1 class="text-xl font-semibold">ความคิดเห็นโดยสรุปของกรรมการ:</h1>
<h1 class=" bg-green-200 text-green-700 p-2 border rounded-md ">โดยรวมดีมาก แต่ควรปรับรุงเรื่องงงงงงงงงงงงงงงงงงงงงงงงงงง</h1>


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
