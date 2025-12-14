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



              <div class=" border rounded-md p-2 text-center hover:bg-blue-300">
                นายควย เย้ดหิ
              </div>
              <div class=" border rounded-md p-2 text-center hover:bg-blue-300">
                นายควย เย้ดหิ
              </div>
              <div class=" border rounded-md p-2 text-center hover:bg-blue-300">
                นายควย เย้ดหิ
              </div>
              <div class=" border rounded-md p-2 text-center hover:bg-blue-300">
                นายควย เย้ดหิ
              </div>
              <div class=" border rounded-md p-2 text-center hover:bg-blue-300">
                นายควย เย้ดหิ
              </div>
              <div class=" border rounded-md p-2 text-center hover:bg-blue-300">
                นายควย เย้ดหิ
              </div>
              <div class=" border rounded-md p-2 text-center hover:bg-blue-300">
                นายควย เย้ดหิ
              </div>
              <div class=" border rounded-md p-2 text-center hover:bg-blue-300">
                นายควย เย้ดหิ
              </div>
              <div class=" border rounded-md p-2 text-center hover:bg-blue-300">
                นายควย เย้ดหิ
              </div>
              <div class=" border rounded-md p-2 text-center hover:bg-blue-300">
                นายควย เย้ดหิ
              </div>

             </div>
            </div>
          </div>

<div class=" max-w-5xl w-full mx-auto  ">
  <div class=" border rounded-md p-5 ">
    <div class=" ">
      <h1 class=" text-xl font-semibold">การประเมิน:<span>นาย dffddffdfdf</span></h1>

    </div>
    <div class=" grid grid-cols-3 gap-2 ">
      <div class=" md:col-span-2 p-2 space-y-2">
        <h1 class=" font-semibold">ข้อที่.1</h1>
        <p>หนก่ดฟนหกด่หกกดนดานฟหกดยน่หำดนไาำดนยไำดดๆพเบำพำนพาๆำพเ</p>
      <h1 class=" border rounded-md p-3 w-full"> ผมทำดีครับ</h1>
      <input class=" border rounded-md p-3 w-full" type="file"/>

      </div>
      <div class=" border rounded-md flex flex-col justify-around items-center  ">
        <div>
         <h1 class=" border rounded-md p-2 bg-blue-200 text-blue-700"> คะแนนผู้ประเมิน(User): <span class="">3</span></h1>
        </div>

         <div class=" justify-center items-center flex flex-col  ">
   <h1>คะแนนคณะกรรมการ</h1>
   <div>
    <select class=" border rounded-md p-2 w-full">
      <option>ไม่ผ่าน</option>
      <option>ผ่าน</option>
    </select>
   </div>
        </div>

  </div>

  <div class="p-2"><button class=" p-2 bg-green-300  text-green-700 hover:bg-green-400 font-semibold border rounded-md  ">ส่งแบบประเมิน</button></div>

    </div>

 <div class=" grid grid-cols-3 gap-2 ">
      <div class=" md:col-span-2 p-2 space-y-2">
        <h1 class=" font-semibold">ข้อที่.1</h1>
        <p>หนก่ดฟนหกด่หกกดนดานฟหกดยน่หำดนไาำดนยไำดดๆพเบำพำนพาๆำพเ</p>
      <h1 class=" border rounded-md p-3 w-full"> ผมทำดีครับ</h1>
      <input class=" border rounded-md p-3 w-full" type="file"/>

      </div>
      <div class=" border rounded-md flex flex-col justify-around items-center  ">
        <div>
         <h1 class=" border rounded-md p-2 bg-blue-200 text-blue-700"> คะแนนผู้ประเมิน(User): <span class="">3</span></h1>
        </div>

         <div class=" justify-center items-center flex flex-col  ">
   <h1>คะแนนคณะกรรมการ</h1>
   <div>
    <input max="4" placeholder="กรุณาเลือก 1-4" class=" border rounded-md p-2" type="number"/>
   </div>
        </div>

  </div>

  <div class="p-2"><button class=" p-2 bg-green-300  text-green-700 hover:bg-green-400 font-semibold border rounded-md  ">ส่งแบบประเมิน</button></div>

    </div>

     <div class=" grid grid-cols-3 gap-2 ">
      <div class=" md:col-span-2 p-2 space-y-2">
        <h1 class=" font-semibold">ข้อที่.1</h1>
        <p>หนก่ดฟนหกด่หกกดนดานฟหกดยน่หำดนไาำดนยไำดดๆพเบำพำนพาๆำพเ</p>
      <h1 class=" border rounded-md p-3 w-full"> ผมทำดีครับ</h1>
      <input class=" border rounded-md p-3 w-full" type="file"/>

      </div>
      <div class=" border rounded-md flex flex-col justify-around items-center  ">
        <div>
         <h1 class=" border rounded-md p-2 bg-blue-200 text-blue-700"> คะแนนผู้ประเมิน(User): <span class="">3</span></h1>
        </div>

         <div class=" justify-center items-center flex flex-col  ">
   <h1>คะแนนคณะกรรมการ</h1>
   <div>
    <input max="4" placeholder="กรุณาเลือก 1-4" class=" border rounded-md p-2" type="number"/>
   </div>
        </div>

  </div>

  <div class="p-2"><button class=" p-2 bg-green-300 text-green-700 hover:bg-green-400 font-semibold border rounded-md  ">ส่งแบบประเมิน</button></div>

    </div>


  </div>






</div>


<div class="max-w-5xl   space-y-3 p-5 border rounded-md mt-10 w-full mx-auto ">
  <h1 class="text-xl font-semibold">ความคิดเห็นโดยสรุป:</h1>
  <textarea placeholder="แสดงความคิดเห็นโดยรวม..." class=" w-245 p-2 h-12 border rounded-md "></textarea>

  <div class="flex flex-row justify-between items-center">

  <div>  <h1 class=" text-xl font-semibold">ลงนามลายเซ็นกรรมการ:</h1>
    <input class=" p-2 text-xl border-b" type="text"/></div>

    <button class=" bg-green-300 hover:bg-green-400 p-2 text-green-700 border rounded-md ">ยืนยันผลการประเมิน</button>

  </div>



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
