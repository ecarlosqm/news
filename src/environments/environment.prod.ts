import { NewsSourceInMemoryService } from 'src/app/context/news_source/services/news-source-in-memory.service';

export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyBxAqOmT3UV3Qk-r6ud0f-lQ4X5aRW_ge4",
    authDomain: "news-dfa82.firebaseapp.com",
    databaseURL: "https://news-dfa82.firebaseio.com",
    projectId: "news-dfa82",
    storageBucket: "news-dfa82.appspot.com",
    messagingSenderId: "1055751134450",
    appId: "1:1055751134450:web:09833b2ce45ccd545d846b"
  },
  newApiKey: "3ff56b67cf24427d9d839efbdacf97a8",
  "newsServiceClass": NewsSourceInMemoryService,
};
