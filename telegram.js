require('dotenv').config();

const axios = require('axios');

const base = 'https://api.telegram.org';
const token = process.env.TOKEN;
let url = `${base}/bot${token}/getUpdates`;

axios.get(url)
    .then((res) => {
        const chat_id = res.data.result[0].message.chat.id;
        const text = "hello";
        url = `${base}/bot${token}/sendMessage?text=${text}&chat_id=${chat_id}`
        console.log(url)
        axios.get(url)
            .then(res => {
                console.log(res.status)
            });
    })