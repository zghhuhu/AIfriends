<template>
  <div class="flex min-h-screen items-start justify-center bg-base-100 p-4 pt-12">
    <fieldset
      class="w-full max-w-sm rounded-xl border border-base-300 bg-base-200 p-6 shadow-lg"
    >
      <legend class="text-center text-xl font-bold text-primary">登录</legend>

      <form class="space-y-4 mt-4">
        <div>
          <label class="label"><span class="label-text">邮箱</span></label>
          <input type="email" class="input input-bordered w-full" placeholder="your@email.com" />
        </div>

        <div>
          <label class="label"><span class="label-text">密码</span></label>
          <input type="password" class="input input-bordered w-full" placeholder="••••••••" />
        </div>

        <button class="btn btn-primary w-full mt-2">Login</button>

        <div class="text-center space-y-2 mt-3">
          <a href="#" class="link link-hover text-sm">忘记密码?</a>
          <!-- ✅ 新增注册链接 -->
          <p class="text-sm">
            还没有账号？
            <RouterLink :to="{ name: 'register-index' }" class="link link-primary ml-1">
              立即注册
            </RouterLink>
          </p>
        </div>
      </form>
    </fieldset>
  </div>
</template>