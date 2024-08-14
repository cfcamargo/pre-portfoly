export function useGetChanelLastVideo() {
    const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY ; // Substitua pela sua chave de API
    const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANEL_ID; // Substitua pelo ID do seu canal

    async function fetchLatestVideo() {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&order=date&part=snippet&type=video&maxResults=1`);
        const data = await response.json();
        return data.items[0].id.videoId;
    }

    return {
        fetchLatestVideo
    }
}