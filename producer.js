/*const amqp = require("amqplib");
const dotenv = require("dotenv").config();

let api_key = process.env.AMQP;

async function sendMessage() {
  let queue = "hello";

  let message = "Hello World";

  try {
    const connection = await amqp.connect(api_key);

    const channel = await connection.createChannel();

    await channel.assertQueue(queue, { durable: false });

    channel.sendToQueue(queue, Buffer.from(message));
    console.log("Mensagem enviada: " + message);

    setTimeout(() => {
      connection.close();
      process.exit(0);
    }, 500);
  } catch (error) {
    console.error(error);
    connection.close();
  }
}

sendMessage();
*/

const amqp = require("amqplib");
const dotenv = require("dotenv").config();

let api_key = process.env.AMQP;

async function sendMessage() {
  let queue = "hello";
  let message = JSON.stringify({ value: 40.0 }); // Valor de dinheiro a ser enviado

  try {
    const connection = await amqp.connect(api_key);
    const channel = await connection.createChannel();

    await channel.assertQueue(queue, { durable: false });
    channel.sendToQueue(queue, Buffer.from(message));

    console.log("Valor enviado: " + message);

    setTimeout(() => {
      connection.close();
      process.exit(0);
    }, 500);
  } catch (error) {
    console.error(error);
  }
}

sendMessage();
