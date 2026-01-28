<script setup>
</script>
<template>
  <div class="flex min-h-screen items-start justify-center bg-base-100 p-4 pt-12">
    <fieldset
      class="w-full max-w-sm rounded-xl border border-base-300 bg-base-200 p-6 shadow-lg"
    >
      <legend class="text-center text-xl font-bold text-primary">注册</legend>

      <form class="space-y-4 mt-4">

        <div>
          <label class="label"><span class="label-text">用户名</span></label>
          <input type="email" class="input input-bordered w-full" />
        </div>

        <div>
          <label class="label"><span class="label-text">密码</span></label>
          <input type="email" class="input input-bordered w-full" />
        </div>

        <div>
          <label class="label"><span class="label-text">确认密码</span></label>
          <input type="password" class="input input-bordered w-full"  />
        </div>

        <button class="btn btn-primary w-full mt-2">注册</button>


      </form>
    </fieldset>
  </div>
</template>