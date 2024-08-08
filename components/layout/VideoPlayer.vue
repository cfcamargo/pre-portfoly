<template>
    <div class="w-full aspect-video">
        <video ref="videoPlayer" class="w-full aspect-video h-full video-js vjs-default-skin vjs-big-play-centered"></video>
    </div>
</template>
  
<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-youtube';

const player = ref<any>(null);
const videoPlayer = ref<HTMLDivElement | null>(null);
  
onMounted(() => {
if (videoPlayer.value) {
    player.value = videojs(videoPlayer.value, {
    techOrder: ['youtube'],
    sources: [{
        src: 'https://www.youtube.com/watch?v=p9gZsFAiSAc&t=2021s',
        type: 'video/youtube'
    }],
        poster: '/video-cover.png',
        controls: true,
        autoplay: false,
        preload: 'auto'
    });
}
});
  
onBeforeUnmount(() => {
if (player.value) {
    player.value.dispose();
}
});
</script>

<style scoped>
</style>
  