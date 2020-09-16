import axios from 'axios';
import { useEffect, useState } from 'react';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        search(defaultSearchTerm);
    }, []);

    const search = async (term) => {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: "snippet",
                maxResults: 4,
                q: term,
                type: "video",
                videoEmbeddable: true,
                key: "AIzaSyArgMy_y7fIcVI7f7m7yddXcH-NCLrYlhM"
            }
        });
        setVideos(response.data.items)
    };

    return [videos, search]
};

export default useVideos;