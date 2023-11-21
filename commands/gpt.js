const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


module.exports = async function gptCommand(client, message) {
    let utext = message.body.replace('.gpt ','');
        try{
            if(utext=='.gpt'){
                await message.reply('No query!')
            }else{
                const response = await fetch(`https://vihangayt.me/tools/chatgpt?q=${utext}`);
                const data = await response.json();
                const respon = await data.data;
                await message.reply(respon);
            }
        }catch(error){
            message.reply('Something went wrong.');
        }
}
