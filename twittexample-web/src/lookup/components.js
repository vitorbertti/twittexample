export function loadTweets (callback) {
   const xhr = new XMLHttpRequest();
   const method = 'GET';
   const url = process.env.REACT_APP_SERVER_URL;
   const responseType = 'json';
 
   xhr.responseType = responseType;
   xhr.open(method, url);
 
   xhr.onload = () => {
     callback(xhr.response, xhr.status);
   };
   xhr.onerror = () => {
     callback({'message': 'The request was an error'}, 400);
   };
   xhr.send();
 }