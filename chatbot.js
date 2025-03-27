// leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client();
// serviço de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// apos isso ele diz que foi tudo certo
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});
// E inicializa tudo 
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra

// Funil

client.on('message', async msg => {

    if (msg.body.match(/(Oiee🥰|Oi|oi|oii|Oii|ola|Ola|olá|Olá|noite|dia|tarde)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();


        await delay(30000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(1000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'OIEE AMOR❤ vc precisa comprar pelo menos um pacote pra gente poder conversar normalmente...vamos?😏🔥\n\nDigite o número desejado comigo😈\n\n1️⃣ - *Quero um pacote e conversar com vc*🔥😈\n2️⃣ - *Quero uma amostra das fotos*...😏\n3️⃣ - *Quero uma chamada de vídeo com vc📞*'); //Primeira mensagem de texto
       

        // Usando MessageMedia.fromUrl() para carregar a imagem a partir da URL
        const media = await MessageMedia.fromUrl('https://iili.io/3Tj83tS.png');    
        // Envia a imagem diretamente, sem expor a URL
        await client.sendMessage(msg.from, media);
        

        await delay(140000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Eu sou uma gostosa né? rsrsrs');


        // Criar um intervalo para enviar a mensagem "Te amo bb💘" a cada 15 minutos
        setInterval(async () => {
            await chat.sendStateTyping();
            await delay(3000);
            await client.sendMessage(msg.from, 'Te amo bb💘');}, 3600000); // 15 minutos em milissegundos







}



    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat()
    

        await delay(5000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Vou mandar uma prévia pra vc 😈🔥');



        // Usando MessageMedia.fromUrl() para carregar a imagem a partir da URL
        const media = await MessageMedia.fromUrl('https://i.postimg.cc/KYkcPxPq/amostra-gratis.jpg');    
        // Envia a imagem diretamente, sem expor a URL
        await client.sendMessage(msg.from, media);

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Gostou da prévia gatinho? tem muito mais nos meus pacotes, se vc comprar a gente pode conversar... 😏');
    
    }

    

//////////////////////////////////////////////////////////////////// 
   

    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(5000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Vou mandar uma prévia pra vc 😈🔥');
        
        // Usando MessageMedia.fromUrl() para carregar a imagem a partir da URL
        const media = await MessageMedia.fromUrl('https://i.postimg.cc/KYkcPxPq/amostra-gratis.jpg');
        // Envia a imagem diretamente, sem expor a URL
        await client.sendMessage(msg.from, media);


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Gostou da prévia?😈 tem muito mais no meu pacote exclusivo, assim vc pode fazer ligação comigo');

    }

//////////////////////////////////////////////////////////////////////


    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(5000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Vou mandar uma prévia pra vc 😈🔥');
        
        // Usando MessageMedia.fromUrl() para carregar a imagem a partir da URL
        const media = await MessageMedia.fromUrl('https://i.postimg.cc/KYkcPxPq/amostra-gratis.jpg');
        // Envia a imagem diretamente, sem expor a URL
        await client.sendMessage(msg.from, media);


        await delay(7000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Claro a gente pode fazer video chamada sim gatinho, mas vc precisa ter um dos meus pacotes rsrs😋😏');
        
    
    }



});

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// MENSAGENS AUTOMÁTICAS AQUI /////////////////////////////////

client.on('message', async msg => {

    if (msg.body.match(/(Gostosa|gostosa|Linda|linda)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();


        await delay(5000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'sou mais gostosa ainda de 4 nas minhas fotos e videos que tem no meu pacote...😏🔥'); //Primeira mensagem de texto


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'meu corpo tem seu preço bb, vc paga e me liga pra eu gemer bem gostoso');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'ahhh se vc comprar meu pacote a gente pode se ver e sei lá... fazer algo🥰😏 ');
}
});

///////////////////////////////////////////////////////////

client.on('message', async msg => {

    if (msg.body.match(/(gozar|Gozar|Gozei|gozei|Amor|amor)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();


        await delay(5000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'quero ver vc colocando tudo em mim 😈'); //Primeira mensagem de texto

}
});

////////////////////////////////////////////////////////


client.on('message', async msg => {

    if (msg.body.match(/(te comer|Te comer|te fuder|Te fuder|Te foder|te foder)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();


        await delay(5000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'bb se vc comprar algum pacote a gente pode até sair pessoalmente rsrsrs'); //Primeira mensagem de texto

}
});

///////////////////////////////////////////////////////////////////////////////


client.on('message', async msg => {

    if (msg.body.match(/(Buceta|buceta|bucetinha|Bucetinha|bct|Bct|BCT|Buseta|buseta)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();


        await delay(5000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'ahhhh mas pra me ver toda nua vc precisa comprar algum dos meus pacotes, faço até chamada de video...😏🔥'); //Primeira mensagem de texto

        // Usando MessageMedia.fromUrl() para carregar a imagem a partir da URL
        const media = await MessageMedia.fromUrl('https://i.postimg.cc/KYkcPxPq/amostra-gratis.jpg');
        
        // Envia a imagem diretamente, sem expor a URL
        await client.sendMessage(msg.from, media);

}
});

//////////////////////////////////////////////////////////////////

client.on('message', async msg => {

    if (msg.body.match(/(foto|Foto|video|Video|vídeo|Vídeo)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();


        await delay(5000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'gatinho pra vc me ver pelada vc precisa ter algum dos meu pacotes, não quer me ver não?😘🔥'); //Primeira mensagem de texto

        // Usando MessageMedia.fromUrl() para carregar a imagem a partir da URL
       const media = await MessageMedia.fromUrl('https://i.postimg.cc/KYkcPxPq/amostra-gratis.jpg');     
       // Envia a imagem diretamente, sem expor a URL
        await client.sendMessage(msg.from, media);


await delay(7000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '🌶😏');
        


}
});

//////////////////////////////////////////////////////////

client.on('message', async msg => {

    if (msg.body.match(/(Áudio|audio|áudio|Audio)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();


        await delay(10000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'Se vc quer me ouvir gemendo bem gostoso, vc precisa se tornar meu cliente bb...'); //Primeira mensagem de texto

        // Usando MessageMedia.fromUrl() para carregar a imagem a partir da URL
        const media = await MessageMedia.fromUrl('https://i.postimg.cc/KYkcPxPq/amostra-gratis.jpg');
        // Envia a imagem diretamente, sem expor a URL
        await client.sendMessage(msg.from, media);
        
        
}
});

//////////////////////////////////////////////////////////////////

client.on('message', async msg => {

    if (msg.body.match(/(Tesão|tesão|tesao|Pau|pau|transar|Transar|Amostra|amostra|amostras|Amostras)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();


        await delay(10000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'Olha uma amostra grátis rsrsrs... 🌶🔥'); //Primeira mensagem de texto
        

        // Usando MessageMedia.fromUrl() para carregar a imagem a partir da URL
        const media = await MessageMedia.fromUrl('https://i.postimg.cc/KYkcPxPq/amostra-gratis.jpg');
        // Envia a imagem diretamente, sem expor a URL
        await client.sendMessage(msg.from, media);


        await delay(120000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'ai que tesão que vc me deixou...😏🥰');
        
}
});


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// sistema de pagamento ///////////////////////////////////

client.on('message', async msg => {

    if (msg.body.match(/(Valor|Preço|preço|valor|Pix|pix|aceita pix|Aceita pix|Aceita Pix)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();


        await delay(5000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'Meu bem, se vc me mandar algum valor eu te mando todo o meu pacote só por que gostei de vc srsrsrs'); //Primeira mensagem de texto

        await delay(5000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'vc aceita essa proposta? eu não faço pra ninguém em... só pq vc me deixou com tesão 😏');
        
}
});

//////////////////////////////


