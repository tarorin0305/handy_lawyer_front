export default {
  server: {
    port: 3333,
    host: 'localhost'
  },
  buildModules: ['@nuxtjs/tailwindcss'],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'],
  proxy: {
    "/api": {
      target: "http://localhost:9292",
      pathRewrite: {
        '^/api': '',
      },
    }
  },
  axios: {
    prefix: '/api'
  }
}