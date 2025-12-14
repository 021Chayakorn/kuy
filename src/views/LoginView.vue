<template>
  <div class=" flex flex-col lg:flex-row min-h-screen">
    <div class=" flex flex-1 w-full bg-gradient-to-r from-blue-300 to-blue-500 ">
      <div class=" w-full flex flex-col justify-center items-center">
        <h1 class=" text-2xl font-semibold  ">ระบบกรรมการอาชีวะ</h1>
        <p>แบบประเมินคณะกรรมการ และ ผู้ประเมิน</p>
      </div>
    </div>

    <div class=" flex flex-1 w-full  ">
      <div class="w-full flex flex-col justify-center items-center">
        <h1 class=" text-2xl font-semibold ">ลงชื่อเข้าใช้บัญชี</h1>
        <div class=" flex flex-col mt-15 space-y-4 justify-center items-center ">
          <div>
            <h1>ชื่อผู้ใช้งาน</h1>
            <input class=" border p-2 rounded-md w-90 " placeholder="สร้างชื่อผู้ใช้งาน..." type="text"/>
          </div>
          <div>
            <h1>รหัสผ่าน</h1>
            <input class=" border p-2 rounded-md w-90 " placeholder="สร้างรหัสผ่าน..." type="password"/>
          </div>


          <button class=" p-2 border rounded-md w-90 bg-blue-400 hover:bg-blue-500 ">เข้าใช้งาน</button>

          <div class=" flex flex-row gap-2">
            <h1>หากยังไมได้บัญชีแล้ว</h1>
            <RouterLink class=" text-blue-700 " to="/reg">กดตรงนี้</RouterLink>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>
