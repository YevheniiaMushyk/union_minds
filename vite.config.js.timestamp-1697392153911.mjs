// vite.config.js
import { defineConfig } from "file:///F:/Jina/Frontend/Go%20It%20%D0%BD%D0%B0%D0%B2%D1%87%D0%B0%D0%BD%D0%BD%D1%8F/GIT/union_minds/node_modules/vite/dist/node/index.js";
import glob from "file:///F:/Jina/Frontend/Go%20It%20%D0%BD%D0%B0%D0%B2%D1%87%D0%B0%D0%BD%D0%BD%D1%8F/GIT/union_minds/node_modules/glob/glob.js";
import injectHTML from "file:///F:/Jina/Frontend/Go%20It%20%D0%BD%D0%B0%D0%B2%D1%87%D0%B0%D0%BD%D0%BD%D1%8F/GIT/union_minds/node_modules/vite-plugin-html-inject/dist/index.mjs";
import FullReload from "file:///F:/Jina/Frontend/Go%20It%20%D0%BD%D0%B0%D0%B2%D1%87%D0%B0%D0%BD%D0%BD%D1%8F/GIT/union_minds/node_modules/vite-plugin-full-reload/dist/index.js";
var vite_config_default = defineConfig({
  define: {
    global: {}
  },
  root: "src",
  build: {
    rollupOptions: {
      input: glob.sync("./src/*.html")
    },
    outDir: "../dist"
  },
  plugins: [injectHTML(), FullReload(["./src/**/**.html"])]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxKaW5hXFxcXEZyb250ZW5kXFxcXEdvIEl0IFx1MDQzRFx1MDQzMFx1MDQzMlx1MDQ0N1x1MDQzMFx1MDQzRFx1MDQzRFx1MDQ0RlxcXFxHSVRcXFxcdW5pb25fbWluZHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXEppbmFcXFxcRnJvbnRlbmRcXFxcR28gSXQgXHUwNDNEXHUwNDMwXHUwNDMyXHUwNDQ3XHUwNDMwXHUwNDNEXHUwNDNEXHUwNDRGXFxcXEdJVFxcXFx1bmlvbl9taW5kc1xcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovSmluYS9Gcm9udGVuZC9HbyUyMEl0JTIwJUQwJUJEJUQwJUIwJUQwJUIyJUQxJTg3JUQwJUIwJUQwJUJEJUQwJUJEJUQxJThGL0dJVC91bmlvbl9taW5kcy92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xyXG5pbXBvcnQgZ2xvYiBmcm9tICdnbG9iJztcclxuaW1wb3J0IGluamVjdEhUTUwgZnJvbSAndml0ZS1wbHVnaW4taHRtbC1pbmplY3QnO1xyXG5pbXBvcnQgRnVsbFJlbG9hZCBmcm9tICd2aXRlLXBsdWdpbi1mdWxsLXJlbG9hZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gICBkZWZpbmU6IHtcclxuICAgIGdsb2JhbDoge30sXHJcbiAgfSxcclxuICByb290OiAnc3JjJyxcclxuICBidWlsZDoge1xyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBpbnB1dDogZ2xvYi5zeW5jKCcuL3NyYy8qLmh0bWwnKSxcclxuICAgIH0sXHJcbiAgICBvdXREaXI6ICcuLi9kaXN0JyxcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtpbmplY3RIVE1MKCksIEZ1bGxSZWxvYWQoWycuL3NyYy8qKi8qKi5odG1sJ10pXSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdVgsU0FBUyxvQkFBb0I7QUFDcFosT0FBTyxVQUFVO0FBQ2pCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBRXZCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3pCLFFBQVE7QUFBQSxJQUNQLFFBQVEsQ0FBQztBQUFBLEVBQ1g7QUFBQSxFQUNBLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxNQUNiLE9BQU8sS0FBSyxLQUFLLGNBQWM7QUFBQSxJQUNqQztBQUFBLElBQ0EsUUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLFNBQVMsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDMUQsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
