import axios from 'axios';

const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
const TOKEN_URL = 'https://accounts.spotify.com/api/token';

let accessToken = '';

export const getAccessToken = async () => {
    try {
      const response = await axios.post(
        TOKEN_URL,
        new URLSearchParams({
          grant_type: 'client_credentials',
        }),
        {
          headers: {
            Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      return response.data.access_token;
    } catch (error) {
      console.error('Error fetching Spotify token:', error);
      throw error;
    }
  };

export const searchSpotify = async (query) => {
    const token = await getAccessToken();
    const response = await axios.get(
      `https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`, // Only fetch tracks
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  };
