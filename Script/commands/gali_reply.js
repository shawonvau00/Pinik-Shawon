const fs = require("fs");
module.exports.config = {
	name: "gali",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "PINIK SHAWON☢️_𖣘 -𝐁𝐎𝐓🙋‍♂️", 
	description: "abal, kutta, pagol,",
	commandCategory: "কিরে ছাপড়ি গালাগালি করছ কেন কানের নিচে একটা দিমু বেয়াদব😡",
	usages: "abal",
    cooldowns: 5, 
};
"কিরে ছাপড়ি গালাগালি করছ কেন কানের নিচে একটা দিমু বেয়াদব"
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("fuck")==0 || event.body.indexOf("mc")==0 || event.body.indexOf("chod")==0 || event.body.indexOf("bal")==0 || event.body.indexOf("bc")==0 || event.body.indexOf("maa ki chut")==0 || event.body.indexOf("xod")==0 || event.body.indexOf("behen chod")==0 || event.body.indexOf("🖕")==0 || event.body.indexOf("madarchod")==0 || event.body.indexOf("chudi")==0 || event.body.indexOf("gala gali")==0) {
		var msg = {
				body: "(Boss Dk , Gali q Dete Ho. Lund Katke Hath M rakh Dunga)",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
