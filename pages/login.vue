<script setup lang="ts">
</script>

<template>
  <section class="flex">
    <nav
      class="lg:w-[35rem] w-full h-screen bg-sidebar flex justify-center flex-col gap-4 lg:p-20 items-center lg:items-start ">
      <Logo width="1.5" />
      <div>
        <h3 class="text-[1.5rem] mb-1">Log in to your account</h3>
        <p class="text-[#F4F4F5]">Don't have an account? <NuxtLink class="text-[#FFAC00]" to="register">Sign up
          </NuxtLink> for one.</p>
      </div>
      <form action="" class="flex flex-col w-[20rem] mt-2">
        <Input label="E-mail adress" placeholder="you@example.com" />
        <Input label="Password" placeholder="***************" />
        <mainButton title="Log in" />
      </form>
    </nav>
    <main class="w-full hidden lg:flex  items-center bg-bg">
      <div class="flex flex-col gap-4  items-center m-auto w-[30rem] h-fit  ">
        <p class="w-[30rem]">
          October 15th, 2024
        </p>
        <p class="w-[30rem]"> Finally took that leap and signed up for pottery classes! The studio has this amazing
          earthy smell - clay
          dust
          and coffee from the café next door. My first attempt at making a bowl looked more like a wonky ashtray, but my
          instructor Sarah said that's totally normal. There's something so therapeutic about feeling the clay move
          between your fingers, even when it's not quite doing what you want it to.
        </p>
        <p class="w-[30rem]">


          On my way home, I stopped by that new bookstore on Oak Street. Found this incredible book on urban foraging of
          all things! Who knew there were edible plants growing all over the city? Already planning to try identifying
          some this weekend at the park. Think I'll bring Maya along - she's always up for my random adventures, even if
          they end with us eating weeds. At least we'll have a good story to tell at Sunday brunch.
        </p>
      </div>
    </main>
  </section>
</template>

<style lang="scss" scoped></style>
