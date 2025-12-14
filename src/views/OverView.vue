<template>
  <div class=" flex-col flex min-h-screen">

    <header class=" bg-gradient-to-r from-blue-300 to-blue-500 p-6 ">
      <div class=" flex flex-row items-center justify-between ">
        <h1 class=" text-xl font-semibold ">OverViews</h1>
        <div class=" flex flex-row gap-2">
          <RouterLink class=" hover:bg-gray-200 bg-white py-1 px-4 border rounded-md  " to="/reg">สมัครบัญชี</RouterLink>
           <RouterLink class=" hover:bg-gray-200 bg-white py-1 px-4 border rounded-md " to="/login">เข้าสู่ระบบ</RouterLink>
        </div>
      </div>
    </header>


    <main class=" flex min-h-screen">
      <div class="  shadow-blue-800 shadow shadow-2xl flex flex-col w-full justify-center items-center">
        <div class=" w-300 flex flex-col  justify-center items-center shadow border p-5 rounded-md ">
          <h1 class=" text-2xl font-semibold ">ระบบงานอาชีวะศึกษา</h1>
          <p>งานอาชีวะการประเมินการเรียนการสอนเพื่องานวิชาอาชีวะ</p>

          <div class=" flex mt-10 flex-row gap-5">
                 <RouterLink class=" hover:bg-gray-200 font-semibold bg-white p-5 border rounded-md  " to="/reg">สมัครบัญชี</RouterLink>
           <RouterLink class=" hover:bg-gray-200 font-semibold bg-white p-5 px-6 border rounded-md " to="/login">เข้าสู่ระบบ</RouterLink>
          </div>

        </div>
      </div>
    </main>

  </div>
</template>
