const fetch = require('node-fetch');

async function rosedayCommand(sock, chatId, message) {
    try {
        const shizokeys = 'ꜱʏʀᴇɴᴛʜᴀ';
        const res = await fetch(`https://api.shizo.top/quote/roseday?apikey=${shizokeys}`);
        
        if (!res.ok) {
            throw await res.text();
        }
        
        const json = await res.json();
        const rosedayMessage = json.result;

        // Send the roseday message
        await sock.sendMessage(chatId, { text: rosedayMessage }, { quoted: message });
    } catch (error) {
        console.error('Error in roseday command:', error);
        await sock.sendMessage(chatId, { text: 'ꜱʏʀᴇɴᴛʜᴀ! ❌ Failed to get roseday quote. Please try again later!' }, { quoted: message });
    }
}

module.exports = { rosedayCommand };
