<template>
  <div class="comment-section">
    <h3 class="simple-title">💬 留言板</h3>
    
    <CommentService :darkmode="isDarkMode" />
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';

defineComponent({
    name: 'CustomComment'
});

const isDarkMode = ref<Boolean>();

let observer : MutationObserver
onMounted(async () => {
  isDarkMode.value = document.documentElement.dataset.theme === 'dark'

  // 监听主题变化
  observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
        const isDark = document.documentElement.dataset.theme === 'dark'
        if (isDark !== isDarkMode.value) {
          isDarkMode.value = isDark
          //console.log('主题变化:', isDark ? '黑' : '白')
        }
      }
    })
  })
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme']
  })
})

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
  }
})

</script>

<style scoped>
.simple-title {
  font-weight: 600;
  color: var(--c-text);
  text-align: center;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--c-brand);
}
</style>