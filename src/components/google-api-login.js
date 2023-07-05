// import { GoogleOAuthProvider } from '@react-oauth/google';
// import Google from './google';

// const CLIENT_ID = '157144026998-m6ttloec606q7jqb82ks58iteu7k00mq.apps.googleusercontent.com';
// const SCOPES = ['https://www.googleapis.com/auth/userinfo.email'];

// const handleLogin = async () => {
//     const auth = new GoogleAuth({
//       clientId: CLIENT_ID,
//       scope: SCOPES
//     });
  
//     try {
//       await auth.login();
//       const userEmail = auth.getUserEmail();
//       // Perform additional checks to authorize IIITD domain email IDs
//       if (userEmail.endsWith('@iiitd.ac.in')) {
//         // Authorized, proceed with login
//         // Redirect or perform necessary actions
//       } else {
//         // Unauthorized, display error or take appropriate action
//       }
//     } catch (error) {
//       console.log('Error during login:', error);
//       // Handle error scenario
//     }
//   };