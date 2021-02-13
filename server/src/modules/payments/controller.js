const axios = require('axios');

const helloWorld = async (ctx, next) => {
    ctx.body = 'Hello world';
}

const checkout = async (ctx, next) => {
    const { data: response } = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    ctx.body = response + '\n\n' +  process.env.PAYPAL_CREDENTIALS;
   
}

const confirmPayment = async (ctx, next) => {

}



module.exports =  {
    helloWorld,
    checkout,
    confirmPayment
};