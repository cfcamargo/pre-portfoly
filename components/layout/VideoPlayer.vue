<template>
    <div class="relative w-full h-0">
      <img
        v-if="!isPlaying"
        :src="cover"
        @click="playVideo"
        class="cursor-pointer w-full h-auto"
        alt="Video cover"
      />
      <div v-if="isPlaying" ref="player" class="absolute top-0 left-0 w-full h-full"></div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  
  interface Props {
    videoId: string;
    cover: string;
  }
  
  declare global {
    interface Window {
      YT: any;
      onYouTubeIframeAPIReady: () => void;
    }
  }
  
  const props = defineProps<Props>();
  const isPlaying = ref(false);
  const player = ref<HTMLDivElement | null>(null);
  
  const playVideo = () => {
    isPlaying.value = true;
  };
  
  onMounted(() => {
    if (window.YT) {
      createPlayer();
    } else {
      window.onYouTubeIframeAPIReady = createPlayer;
    }
  });
  
  const createPlayer = () => {
    if (player.value) {
      new window.YT.Player(player.value, {
        videoId: props.videoId,
        events: {
          onReady: (event: any) => {
            event.target.playVideo();
          }
        },
        playerVars: {
          autoplay: 1,
          controls: 1,
          modestbranding: 1,
          rel: 0
        }
      });
    }
  };
  </script>
  
  <style scoped>
  .video-container {
    @apply relative w-full h-0; /* 16:9 Aspect Ratio */
  }
  
  .video-container img,
  .video-container div {
    @apply absolute top-0 left-0 w-full h-full;
  }
  </style>
  