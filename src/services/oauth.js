import httpService  from './httpService'; // Import your httpService module or function

const clientId = 'YOUR_CLIENT_ID'; // Replace with your actual client ID
const clientSecret = 'YOUR_CLIENT_SECRET'; // Replace with your actual client secret
const redirectUri = 'YOUR_REDIRECT_URI'; // Replace with your actual redirect URI

export default {
  // Initiate the OAuth flow and redirect to the OAuth provider's authorization endpoint
  async initiateOAuthFlow() {
    const state = generateRandomState(); // Generate a random state for security
    const authorizationUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code&state=${state}`;
    window.location.href = authorizationUrl;
  },

  // Handle the OAuth authorization response (authorization code received from the OAuth provider)
  async handleAuthorizationResponse(authorizationCode) {
    try {
      // Exchange authorization code for access token using httpService
      const accessTokenResponse = await httpService.post('https://oauth2.googleapis.com/token', {
        grant_type: 'authorization_code',
        code: authorizationCode,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri
      });

      // Check if the access token was retrieved successfully
      if (accessTokenResponse.data && accessTokenResponse.data.access_token) {
        const accessToken = accessTokenResponse.data.access_token;
        const refreshToken = accessTokenResponse.data.refresh_token; // Store refresh token securely

        // Update Pinia store with access token (assuming you have a Pinia store)
        const myBusinessApi = useMyBusinessApi();
        myBusinessApi.accessToken = accessToken;

        // Optionally, handle refresh token logic (implement refreshing access token when it expires)
      } else {
        // Handle error if access token retrieval failed
        console.error('Failed to retrieve access token.');
      }
    } catch (error) {
      console.error('Error obtaining access token:', error);
      // Handle errors appropriately (e.g., display an error message to the user)
    }
  }
};

// Function to generate a random state for security reasons
function generateRandomState() {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let state = '';
  for (let i = 0; i < 32; i++) {
    state += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return state;
}
