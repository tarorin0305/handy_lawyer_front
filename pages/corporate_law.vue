<template>
  <div class="p-5">
    <NuxtLink to="/" class="m-2 p-2 border-2 border-red-500">to home</NuxtLink>
    <div class="mt-5 ml-2"> 
      <form @submit.prevent id="main_form" action="#">
        <label for="hoge">会社法条文</label>
        <input type="text" name="article" placeholder="123" class="ml-2 border-2" id="main_text">
        <input type="submit" v-on:click="click">
      </form>
    </div>
    <div>
      <!-- {{ data.content }} -->
    </div>
  </div>
</template>

<script>
  export default {
    // async asyncData({ $axios }) {
    //   //取得先URL
    //   const  url = "http://localhost:9292/api/v0/corporate_law?article=123";
    //   // リクエスト
    //   const response = await $axios.$get(url);

    //   return response;
    // },
    methods: {
      click() {
        const url = `api/v0/corporate_law?article=${document.forms.main_form.main_text.value}`;
        const response = this.$axios.$get(url)
          .then( response => {
            console.log(response);
            return response
          })
      }
    }
  };
</script>