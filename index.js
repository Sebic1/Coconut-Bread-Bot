const fs = require('fs');
function moduleIndex(){
//Setup
const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const CoolAdminID = '297264596010663937708489474002124891';



//JSON Files
//let userData = JSON.parse(fs.readFileSync('./userData.json', 'utf8'));
//let stockData = JSON.parse(fs.readFileSync('./stockData.json', 'utf8'));


//Token
const token = 'NzA4NDg4NTU1MzMyMjM5NDIw.XrYF5A.KnqAdtiOTyCL8cBlf3bSO0k4OPo';///PUT THIS INTO ANOTHER FILE RETARD

//Role Setup
const breadRoleID = '708559411949338634'
const coconutRoleID = '708559456228737094'
const lifelessRoleID = '708560560593305645'
const deadRoleID = '708560709935693848'



//Listener Event
bot.on('message', message =>{
    



    //Setup
    let sender = message.author;
    let msg = message.content.toLowerCase();
    let prefix = '^';
    let args = msg.substring(prefix.length).split(" ");
    let userData = JSON.parse(fs.readFileSync('./userData.json', 'utf8'));
    let stockData = JSON.parse(fs.readFileSync('./stockData.json', 'utf8'));
    let weaponData = JSON.parse(fs.readFileSync('./weaponData.json', 'utf8'));
    let userName = sender.username;
    let userID = (sender.id + message.guild.id);
    let convertionRate = 1.2;
    let mentioned = message.mentions.members
    let giveTax = 0.8;
    let revGiveTax = 1.2;
    let miningMult = 1.5;
    let craftingRate = 10;
    let craftingTimeRate = 7;
    const baseLevelCost = 100;
    let levelCostMult = 10/3;
    let moneyValue = stockData.moneyValue;
    let deathFunnyArray = [
        "commiting suiside",
        "commiting toaster bath",
        "commiting DED",
        "commiting せっぷく",
        "commiting not living",
        "commiting not breathing",
        "drinking bleach",
        "entering that white van",
        "looking into the sun for too long",
        "driving while texting",
        "playing league for 27 hours straight",
        "attempting to consume 400 'chicken' nuggets",
        "almost finding out Obama's last name",
        "finding out who joe is",
        "randomly being struck by lightning"
    ];
    var deathFunny = deathFunnyArray[Math.floor(Math.random()*deathFunnyArray.length)];
    if ((message.mentions.users.first() == undefined) == false) {
        var mentionedID = (message.mentions.users.first().id + message.guild.id)
        var mentionedName = message.mentions.users.first().username

    }

    //Events
    if (bot.user.id === message.author.id) {return};
        //User init
    if (!userData[userID]){
        userData[userID] = {};
    }
    if (!userData[userID].money){
        userData[userID].money = 0;
    };
    userData[userID].userNameUD = userName;
    if (!userData[userID].foodChoice){
        userData[userID].foodChoice = "Not Choosen";
    };
    if (!userData[userID].breadAmount){
        userData[userID].breadAmount = 0;
    }
    if (!userData[userID].coconutAmount){
        userData[userID].coconutAmount = 0;
    }
    if (!userData[userID].level){
        userData[userID].level = 1;
    }
    if (!userData[userID].rawBread){
        userData[userID].rawBread = [];
        for (i = 1; i < 6; i++){
            userData[userID].rawBread[i] = {};
            userData[userID].rawBread[i].amount = 0;
            userData[userID].rawBread[i].harvestPower = 1;
            userData[userID].rawBread[i].lastTime = 0;
        }
    }
    if (!userData[userID].rawCoconut){
        userData[userID].rawCoconut = [];
        for (i = 1; i < 6; i++){
            userData[userID].rawCoconut[i] = {};
            userData[userID].rawCoconut[i].amount = 0;
            userData[userID].rawCoconut[i].harvestPower = 1;
            userData[userID].rawCoconut[i].lastTime = 0;
        }
    }   
    if ((message.mentions.users.first() == undefined) == false){
        //Mentioned init
    if (!userData[mentionedID]){
        userData[mentionedID] = {};//Array init
    }
    if (!userData[mentionedID].money){
        userData[mentionedID].money = 0;//Money init
    };
    if (!userData[mentionedID].foodChoice){
        userData[mentionedID].foodChoice = "Not Choosen";//Team init
    };
    if (!userData[mentionedID].breadAmount){
        userData[mentionedID].breadAmount = 0;//Bread amount init
    }
    if (!userData[mentionedID].coconutAmount){
        userData[mentionedID].coconutAmount = 0;
    }
    if (!userData[mentionedID].level){
        userData[mentionedID].level = 1;
    }
    if (!userData[mentionedID].rawBread){
        userData[mentionedID].rawBread = [];
        for (i = 1; i < 6; i++){
            userData[mentionedID].rawBread[i] = {};
            userData[mentionedID].rawBread[i].amount = 0;
            userData[mentionedID].rawBread[i].harvestPower = 1;
            userData[mentionedID].rawBread[i].lastTime = 0;
        }
    }
    if (!userData[mentionedID].rawCoconut){
        userData[mentionedID].rawCoconut = [];
        for (i = 1; i < 6; i++){
            userData[mentionedID].rawCoconut[i] = {};
            userData[mentionedID].rawCoconut[i].amount = 0;
            userData[mentionedID].rawCoconut[i].harvestPower = 1;
            userData[mentionedID].rawCoconut[i].lastTime = 0;
        }
    }
    }   
    if ((message.mentions.users.first() == undefined) == false) {
        const userDataEmbed = new Discord.MessageEmbed()//Mentioned Data Embed
            .setColor('#0099ff')
            .setTitle(mentionedName + "'s Data")
            .addFields(
                { name: 'Level', value: userData[mentionedID].level, inline: true },
                { name: 'Food Choice', value: userData[mentionedID].foodChoice, inline: true }
            )
    }
    

    //Embeds
        ///Probs should put this in another file but I'm not bothered
    const exampleEmbed = new Discord.MessageEmbed()//Template Embed
        .setColor('#0099ff')
        .setTitle('Some title')
        .addFields(
            { name: 'Regular field title1', value: 'Some value here1' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title2', value: 'Some value here2', inline: true },
            { name: 'Inline field title3', value: 'Some value here3', inline: true },
        )
        .addField('Inline field title', 'Some value here@', true)
    const breadBalEmbed = new Discord.MessageEmbed()//Bread Ballance Embed
        .setColor('#ac8435')
        .setTitle(userName + "'s Bread Ballance")
        .addFields(
            { name: '🍞 Liquid Bread', value: userData[userID].breadAmount, inline: true },
            { name: '🥔 Raw Bread (Tier 1)', value: userData[userID].rawBread[1].amount, inline: true },
            { name: '🍞 Bread (Tier 2)', value: userData[userID].rawBread[2].amount, inline: true },
            { name: '🥖 Nice Bread (Tier 3)', value: userData[userID].rawBread[3].amount, inline: true },
            { name: '🥐 Exquisite Bread (Tier 4)', value: userData[userID].rawBread[4].amount, inline: true },
            { name: '🥨 Legendary Bread (Tier 5)', value: userData[userID].rawBread[5].amount, inline: true },
        )
    const coconutBalEmbed = new Discord.MessageEmbed()//Coconut Ballance Embed
        .setColor('#ceceff')
        .setTitle(userName + "'s Coconut Ballance")
        .addFields(
            { name: '🥥 Liquid Coconut', value: userData[userID].coconutAmount, inline: true },
            { name: '🍈 Raw Coconuts (Tier 1)', value: userData[userID].rawCoconut[1].amount, inline: true },
            { name: '🥥 Coconuts (Tier 2)', value: userData[userID].rawCoconut[2].amount, inline: true },
            { name: '🍚 Coarse Coconut Powder (Tier 3)', value: userData[userID].rawCoconut[3].amount, inline: true },
            { name: '🍚 Coconut Powder (Tier 4)', value: userData[userID].rawCoconut[4].amount, inline: true },
            { name: '✨🍚 Fine Coconut Powder (Tier 5)', value: userData[userID].rawCoconut[5].amount, inline: true },
        )
    const helpEmbed = new Discord.MessageEmbed()//List of commands Embed
        .setColor('#0099ff')
        .setTitle('Commands')
        .addFields(
            { name: 'Ballance', value: '^bal, ^breadbal, ^coconutbal', inline: true },
            { name: 'Economic', value: '^harvest, ^craft, ^liquidate, ^invest', inline: true },
            { name: 'Combat', value: '^choose, ^give, ^die, ^revive', inline: true },
            { name: 'Info', value: '^help, ^data, ^howtoplay', inline: true },
        )
    const dataEmbed = new Discord.MessageEmbed()//Player Data Embed
        .setColor('#0099ff')
        .setTitle(userName + "'s Data")
        .addFields(
            { name: 'Level', value: userData[userID].level, inline: true },
            { name: 'Food Choice', value: userData[userID].foodChoice, inline: true },
        )
    const howToPlayEmbed = new Discord.MessageEmbed()//How To Play Embed
        .setColor('#0099ff')
        .setTitle("How to Play Menu")                                  ///////////////REMEMBER TO UPDATE THIS WHEN NECESSARY!!!
        .addFields(
            { name: 'Pages', value: '^htp basics, ^htp combat, ^htp crafting'},  
        )
    const howToPlayBasicsEmbed = new Discord.MessageEmbed()//How To Play Embed
        .setColor('#0099ff')
        .setTitle('How to Play')
        .addFields(
            { name: 'Basics', value: 'In this game (idk what to call it) there are two main currencies, bread and coconut. Obtaining these takes a few steps. Firstly, type "^harvest", then the name of the resource (^harvest [coconut/bread]). This will give you some amount of raw bread/coconut. Using this, you can either refine the resource (see "Crafting"), or you can liquidate it. To liquidate the raw resource all you need to is type "^Liquidate", then which resource it is, then the tier of the resource (raw resources are tier 1; See "Crafting" for more info on tiers), then the amount you want to convert (^liquidate [bread/coconut] [tier] [amount]).'},
        )
    const howToPlayCombatEmbed = new Discord.MessageEmbed()//How To Play Embed
        .setColor('#0099ff')
        .setTitle('How to Play')
        .addFields(
            { name: 'Combat', value: 'This game is all about showing the enemy team who\'s boss, and I\'m going to tell you just how to do that. Firstly, you must pick a side, either bread or coconut. To do this, type "^choose" then the team you want to join (^choose [bread/coconut]). Now for the part where you kill people. After collecting come liquid bread/coconut, you can give your resource to people on your team and people on the other team. Giving to your fellow team members is not so intresting, it\'s just ^give then the amount you want to give them (this amount is taxed a certain amount(' + (100-giveTax*100) + '%)) (^give [@Username] [bread/coconut] [amount]), but what\'s more intresting is when you give to someone on the enemy team. You see, bread and coconut are opposites, so much so that when put together, they annihilate each other. By using the same command you can reduce the amount coconut/bread someone has (this amount is anti-taxed by a certain amount(' + (revGiveTax*100-100) + '%)). If you reduce someone\'s bread/coconut amount enough, so that they have less than 0, they die!'},
        )
    const howToPlayCraftingEmbed = new Discord.MessageEmbed()//How To Play Embed
        .setColor('#0099ff')
        .setTitle('How to Play')
        .addFields(
            { name: 'Crafting', value: 'Crafting is one of the ways you can increase the amount of bread/coconut you have. The way crafting works is a bit weird and hard to explain, so you\'re going to have to bare with me as I explain how to do it and make profit out of it. When you ^harvest, you get an amount of raw resources. These resources can be refined into a more valuble version. Each tier of resource is 12 times more valuble than the one below it, but only costs 10 times the one below it to craft. This means you get an extra 20% of bread/coconut everytime you craft them into the next tier. To craft a certain tier of resource, you need 10 of the resource below it. For example, say I want 5 tier 2 bread. This requires, in total, 50 tier 1 bread. The command for crafting is (^craft [bread/coconut] [tier] [amount]). Just as a reminder the command for liquidating is (^liquidate [bread/coconut] [tier] [amount]). One thing to note is that you can only craft to tiers that are at your level or below (use ^data to check your level).'},
        )
    

    //Commands
    switch(args[0]){
        case "^"://If nothing
            message.channel.send(exampleEmbed)
            break;
        case "pog"://If pog
            message.channel.send("gers")
            break;
        case "floor"://If floor
            message.channel.send("gang!")
            break;
        case "bruh"://If bruh
            message.channel.send("moment")
            break;
        case "htp":
        case "howtoplay":
            switch(args[1]){
                default:
                    message.channel.send(howToPlayEmbed)
                    break;
                case "basics":
                case "basic":
                    message.channel.send(howToPlayBasicsEmbed)
                    break;
                case "combat":
                    message.channel.send(howToPlayCombatEmbed)
                    break;
                case "crafting":
                    message.channel.send(howToPlayCraftingEmbed)
                    break;
            }
            break;
        case "exch":
        case "exchange":
        case "exchangerate":
            message.channel.send(userName + ": 1 bread per " + moneyValue + " moneys.")
            break;
        case "die"://Kills player
            if(userData[userID].foodChoice === "bread" || userData[userID].foodChoice === "coconut" || userData[userID].foodChoice === "Not Choosen"){ ///FIX LATER
                message.channel.send(userName + ": After " + deathFunny + ", you die! ot big suprise.")
                userData[userID].foodChoice = "dead"
            } else if (userData[userID].foodChoice === "dead") {
                message.channel.send(userName + ": You have already died.")
            }
            break;
        case "revive"://Revives player
            if(userData[userID].foodChoice == "dead"){
                userData[userID].foodChoice = "Not Choosen"
                message.channel.send(userName + ": You raise from the dead!")
            } else {
                message.channel.send(userName + ": You are already alive.")
            }
            break;
        case "data":
        case "level":
            message.channel.send(dataEmbed)
            break;
        case "userdata":
            break;
        case "admin":
            if (userID == CoolAdminID){
                switch(args[1]){
                    case "weapon":
                        switch(args[2]){
                            case "create":
                                if(!args[3]){
                                    message.channel.send("[weaponID] [weaponName] [weaponDescription] [taxMult] [maxGiveMult] [weaponAttributes](seperate with '|') [weaponPrice]")
                                } else {
                                    let weaponID = args[3] //finish this!!
                                    let weaponName = args[4]
                                    let weaponDescription = args[5]
                                    let taxMult = args[6]
                                    let maxGiveMult = args[7]
                                    let weaponAttributesUnspaced = args[8]
                                    let weaponPrice = args[9]
                                    
                                    weaponData[weaponID] = {}
                                    weaponData[weaponID].weaponName = weaponName
                                    weaponData[weaponID].weaponDescription = weaponDescription
                                    weaponData[weaponID].taxMult = taxMult
                                    weaponData[weaponID].maxGiveTax = maxGiveTax
                                    weaponData[weaponID].weaponAttributes = weaponAttributes.split("|")
                                    weaponData[weaponID].weaponPrice = weaponPrice
                                }
                                break;
                            case "edit":
                                break;
                            case "delete":
                                break;
                        }
                        break;
                }
            }
            break;
        case "help"://help
            message.channel.send(helpEmbed)
            break;
        case "bal"://Checks bal
        case "moneybal":
        case "ballance":
            message.channel.send(userName + ": You have " + userData[userID].money + " moneys!!!");
            break;
        case "invest":
            switch(args[1]){
                default:
                    message.channel.send(userName + ": Choose what you want to invest, and how much. ([bread/coconut] [amount])");
                    break;
                case "bread":
                    let invAmountB = args[2];
                    if (invAmountB == undefined){
                        message.channel.send(userName + ": Choose how much you want to invest. ([amount])");
                    }
                    else if (invAmountB > userData[userID].breadAmount){
                        message.channel.send(userName + ": You do not have enough bread to invest this amount");
                    } else {
                        let invMoney = stockData.moneyValue*invAmountB
                        message.channel.send(userName + ": You invest " + invAmountB + " bread and get " + invMoney + " in return.");
                        userData[userID].money = invMoney
                        userData[userID].breadAmount =- invAmountB
                    }
                    break;
                case "coconut":
                    let invAmountC = args[2];
                    if (invAmountC == undefined){
                        message.channel.send(userName + ": Choose how much you want to invest. ([amount])");
                    }
                    else if (invAmountC > userData[userID].coconutAmount){
                        message.channel.send(userName + ": You do not have enough coconuts to invest this amount");
                    } else {
                        let invMoney = stockData.moneyValue*invAmountC
                        message.channel.send(userName + ": You invest " + invAmountC + " coconuts and get " + invMoney + " in return.");
                        userData[userID].money = invMoney
                        userData[userID].coconutAmount =- invAmountC
                    }
                    break;
            }
            break;
        case "peepee"://poopoo
            message.channel.send(userName + ": poopoo!");
            break;
        case "bbal":
        case "breadbal"://Checks breadbal
            message.channel.send(breadBalEmbed)
            break;
        case "cbal":
        case "coconutbal"://Checks coconutbal
            message.channel.send(coconutBalEmbed)
            break;
        case "lqd":
        case "liquidate"://converts raw resources into spendable version
            switch(args[1]){
                default:
                    message.channel.send(userName + ": Choose which one of your resources to liquidate. ([bread/coconut] [Tier] [amount])")
                    break;
                case "bread"://bread convert
                    switch(args[2]){
                        default:
                            message.channel.send(userName + ": Choose which tier of bread you want to liquidate. ([Tier] [amount])")
                            break;
                        case '1':
                        case '2':
                        case '3':
                        case '4':
                        case '5':
                            console.log(args[2] + args[3]);
                            let Tier = parseInt(args[2], 10);
                            let conAmount = parseInt(args[3], 10);
                            if (userData[userID].rawBread[Tier].amount >= conAmount){ 
                                userData[userID].rawBread[Tier].amount -= conAmount
                                userData[userID].breadAmount += Math.floor(Math.pow((convertionRate*craftingRate), (Tier-1))* conAmount)
                                message.channel.send(userName + ": " + args[3] + " bread, tier " + args[2] + ", converted to " + Math.floor(Math.pow((convertionRate*craftingRate), (Tier-1))*conAmount) + " liquid bread.")
                            } else {
                                message.channel.send(userName + ": Either something or you didn't have enough bread to convert.")
                            }
                    }
                    break;
                case "coconut"://coconut convert
                    switch(args[2]){
                        default:
                            message.channel.send(userName + ": Choose which tier of coconut you want to liquidate. ([Tier] [amount])")
                            break;
                        case '1':
                        case '2':
                        case '3':
                        case '4':
                        case '5':    
                            console.log(args[2] + args[3]);
                            let Tier = parseInt(args[2], 10);
                            let conAmount = parseInt(args[3], 10);
                            if (userData[userID].rawCoconut[Tier].amount >= conAmount){ 
                                userData[userID].rawCoconut[Tier].amount -= conAmount
                                userData[userID].coconutAmount += Math.floor(Math.pow((convertionRate*craftingRate), (Tier-1))* conAmount)
                                message.channel.send(userName + ": " + args[3] + " coconuts, tier " + args[2] + ", converted to " + Math.floor(Math.pow((convertionRate*craftingRate), (Tier-1))*conAmount) + " liquid coconuts.")
                            } else {
                                message.channel.send(userName + ": Either something or you didn't have enough coconuts to convert.")
                            }
                    }
                    break;
            }
            break;
        case "enlist":
        case "choose"://Choosing which team
            switch(args[1]){
                default:
                    message.channel.send(userName + ": You choose what? ([bread/coconut])")
                    break;
                case "bread":
                    if (userData[userID].foodChoice == "Not Choosen"){
                        message.channel.send(userName + ": You choose bread. Good choice!")
                        userData[userID].foodChoice = "bread";
                    } else if(userData[userID].foodChoice == "coconut"){
                        message.channel.send(userName + ": No switching!")
                    } else {
                        message.channel.send(userName + ": You can't be in a team if you're dead.")
                    }
                    break;
                case "coconut":
                    if (userData[userID].foodChoice == "Not Choosen"){
                        message.channel.send(userName + ": You choose coconut. Good choice!")
                        userData[userID].foodChoice = "coconut";
                    } else if(userData[userID].foodChoice == "bread"){
                        message.channel.send(userName + ": No switching!")
                    } else {
                        message.channel.send(userName + ": You can't be in a team if you're dead.")
                    }
                    break;
            };
            break;
        case "harvest"://Harvesting
            if (userData[userID].foodChoice === "bread" || userData[userID].foodChoice === "coconut" || userData[userID].foodChoice === "Not Choosen"){//FIX LATER
                switch(args[1]){
                    default:
                        message.channel.send(userName + ": Choose what you want to harvest. ([bread/coconut])")
                        break;
                    case "bread":
                        let gainedBread = Math.floor(Math.random()*3*(Math.pow(miningMult*(userData[userID].level-1))))*(userData[userID].rawBread[1].harvestPower)+1
                        userData[userID].rawBread[1].amount = userData[userID].rawBread[1].amount + gainedBread
                        message.channel.send(userName + ": You harvested " + gainedBread + " bread!")
                        break;
                    case "coconut":
                        let gainedCoconut = Math.floor(Math.random()*3*(Math.pow(miningMult*(userData[userID].level-1))))*(userData[userID].rawBread[1].harvestPower)+1
                        userData[userID].rawCoconut[1].amount = userData[userID].rawCoconut[1].amount + gainedCoconut
                        message.channel.send(userName + ": You harvested " + gainedCoconut + " coconuts!")
                        break;   
                };
            } else {
                message.channel.send(userName + ": You can't harvest if you're DEAD!")
            }
            break;
        case "give"://Giving
            if (message.mentions.members.first()){
                if (args[2] === "bread") {//if giving bread
                    let giveAmount = parseInt(args[3], 10);
                    if (giveAmount > 0 && giveAmount <= userData[userID].breadAmount){//checking if the give amount makes sence
                        if (userData[userID].foodChoice === 'bread') {//if sender has "Bread" role
                            console.log(mentionedID);
                            if (userData[mentionedID].foodChoice === 'bread'){//if resipient has the "Bread" role
                                userData[userID].breadAmount -= giveAmount
                                userData[mentionedID].breadAmount += Math.floor(giveAmount*giveTax)
                                message.channel.send(userName + ": You have given " + mentionedName + " " + giveAmount + " bread, taxed at " + 100-giveTax*100 + "%.")
                            } else if (userData[mentionedID].foodChoice === 'coconut') {//if resipient has the "Coconut" role
                                message.channel.send(userName + ": You have given " + mentionedName + " " + giveAmount + " bread, reverse taxed at " + (revGiveTax*100-100) + "%, redusing their coconut amount by " + Math.floor(giveAmount*revGiveTax) + ".")
                                userData[userID].breadAmount -= giveAmount
                                userData[mentionedID].coconutAmount -= Math.floor(giveAmount*revGiveTax)
                                if (userData[mentionedID].coconutAmount < 0){//if this kills them
                                    message.channel.send(userName + ": " + mentionedName + " is DEAD, no big suprise.")
                                }
                            } else {//if resipient doesn't have a gang role
                                message.channel.send(userName + ": You can't give bread to people who are dead or lifeless.")
                            }
                        } else if (userData[userID].foodChoice === 'coconut') {//if sender has "Coconut" role
                            message.channel.send(userName + ": You can't give bread if you're part of the coconut gang.")
                        } else {//if something didn't work
                            message.channel.send(userName + ": You have to have the 'Bread' role to give bread.")
                        }
                    } else {//Sender's give amount did not make sense (either giving negative bread, or giving more bread than they own)
                        message.channel.send(userName + ": How much bread do you want to give? ([amount]) Note: You might be giving more bread than you own.")
                    }
                } else if (args [2] === "coconut"){//if giving coconuts
                    let giveAmount = parseInt(args[3], 10);
                    if (giveAmount > 0 && giveAmount <= userData[userID].coconutAmount){//checking if the give amount makes sence
                        if (userData[userID].foodChoice === 'coconut') {//if sender has "Coconut" role
                            if (userData[mentionedID].foodChoice === 'coconut'){//if resipient has the "Coconut" role
                                userData[userID].coconutAmount -= giveAmount
                                userData[mentionedID].coconutAmount += Math.floor(giveAmount*giveTax)
                                message.channel.send(userName + ": You have given " + mentionedName + " " + giveAmount + " coconuts, taxed at " + 100-giveTax*100 + "%.")
                            } else if (userData[mentionedID].foodChoice === 'bread') {//if resipient has the "Bread" role
                                message.channel.send(userName + ": You have given " + mentionedName + " " + giveAmount + " coconuts, reverse taxed at " + (revGiveTax*100-100) + "%, redusing their bread amount by " + Math.floor(giveAmount*revGiveTax) + ".")
                                userData[userID].coconutAmount -= giveAmount
                                userData[mentionedID].breadAmount -= Math.floor(giveAmount*revGiveTax)
                                if (userData[mentionedID].breadAmount < 0){//if this kills them
                                    message.channel.send(userName + ": " + mentionedName + " is DEAD, no big suprise.")
                                }
                            } else {//if resipient doesn't have a gang role
                                message.channel.send(userName + ": You can't give coconuts to people who are dead or lifeless.")
                            }
                        } else if (userData[userID].foodChoice === 'Bread') {//if sender has "Bread" role
                            message.cha=nnel.send(userName + ": You can't give coconuts if you're part of the bread gang.")
                        } else {//if something didn't work
                            message.channel.send(userName + ": You have to have the 'Coconut' role to give coconuts.")
                        }
                    } else {//Sender's give amount did not make sense (either giving negative bread, or giving more bread than they own)
                        message.channel.send(userName + ": How much coconuts do you want to give? ([amount]) Note: You might be giving more coconuts than you own.")
                    }
                } else {
                    message.channel.send(userName + ": What do you want to give, and how much? ([bread/coconut] [amount])")
                }
            } else {
                message.channel.send(userName + ": Who do you want to give to, and what do you want to give? ([@Username] [bread/coconut] [amount])")
            }
            break;
        case "craft":
            let foodType = args[1]
            let foodTier = parseInt(args[2])
            let foodAmount = parseInt(args[3])
            if (foodType == "bread" && foodAmount*craftingRate <= userData[userID].rawBread[(foodTier-1)].amount && foodTier < 6 && userData[userID].level >= foodTier ){
                if (Date.now()/1000 - userData[userID].rawBread[foodTier].lastTime > Math.pow(craftingTimeRate, (foodTier - 1))){
                    userData[userID].rawBread[foodTier].amount += foodAmount
                    userData[userID].rawBread[(foodTier-1)].amount -= foodAmount*craftingRate
                    userData[userID].rawBread[foodTier].lastTime = Date.now()/1000
                    message.channel.send(userName + ": You have converted " + (foodAmount*craftingRate) + ", Tier " + (foodTier-1) + " bread into " + foodAmount + ", Tier " + foodTier + " bread, increasing it's value by x" + convertionRate)
                } else {
                    message.channel.send(userName + ": You have to wait " + Math.pow(craftingTimeRate, (foodTier - 1))-(Date.now()/1000 - userData[userID].rawBread[foodTier].lastTime) + " more seconds.")
                }
            } else if (foodType == "coconut" && foodAmount*craftingRate <= userData[userID].rawCoconut[(foodTier-1)].amount && foodTier < 6 && userData[userID].level >= foodTier ){
                if (Date.now()/1000 - userData[userID].rawCoconut[foodTier].lastTime > Math.pow(craftingTimeRate, (foodTier - 1))){
                    userData[userID].rawCoconut[foodTier].amount += foodAmount
                    userData[userID].rawCoconut[(foodTier-1)].amount -= foodAmount*craftingRate
                    userData[userID].rawCoconut[foodTier].lastTime = Date.now()/1000
                    message.channel.send(userName + ": You have converted " + (foodAmount*craftingRate) + ", Tier " + (foodTier-1) + " coconuts into " + foodAmount + ", Tier " + foodTier + "coconuts, increasing it's value by x" + convertionRate)
                } else {
                    message.channel.send(userName + ": You have to wait " + Math.pow(craftingTimeRate, (foodTier - 1))-(Date.now()/1000 - userData[userID].rawCoconut[foodTier].lastTime) + " more seconds.")
                }
            } else {
                message.channel.send(userName + ": What food do you want to craft, what tier, and how much? ([bread/coconut] [Tier] [amount]) Note: you might not have a high enough level to craft the tier you are attempting to craft.")
            }
            break;
    };



/*
    if (userData[userID].foodChoice === "bread"){
        message.member.roles.set(breadRoleID);
    } else if (userData[userID].foodChoice === "coconut"){
        message.member.roles.set(coconutRoleID);
    } else {
        message.member.roles.set(lifelessRoleID);
    };
*/  
/*
    //Post-Events
    switch(userData[userID].foodChoice){
        //default:
            //message.member.roles.set([lifelessRoleID])
            //break;
        case "bread":
            message.member.roles.add([breadRoleID])
            break;
        case "coconut":
            message.member.roles.add([coconutRoleID])
            break;
    };
    switch(userData[userID].foodChoice){
        //default:
            //message.member.roles.set([lifelessRoleID])
            //break;
        case "bread":
            message.member.roles.remove([coconutRoleID])
            break;
        case "coconut":
            message.member.roles.remove([breadRoleID])
            break;
    };*/
        //Dying
    if (userData[userID].breadAmount < -0.001 || userData[userID].coconutAmount < -0.001 || userData[userID].foodChoice == "dead") {
        userData[userID].foodChoice = "dead"
        userData[userID].breadAmount = 0
        userData[userID].coconutAmount = 0
        userData[userID].level = 1;
        for (i = 1; i < 6; i++){
            userData[userID].rawBread[i] = {};
            userData[userID].rawBread[i].amount = 0;
            userData[userID].rawBread[i].harvestPower = 1;
            userData[userID].rawBread[i].lastTime = 0;
        }
        for (i = 1; i < 6; i++){
            userData[userID].rawCoconut[i] = {};
            userData[userID].rawCoconut[i].amount = 0;
            userData[userID].rawCoconut[i].harvestPower = 1;
            userData[userID].rawCoconut[i].lastTime = 0;
        }
    }
    

        //Roles
    switch(userData[userID].foodChoice){
        default:
            message.member.roles.set([lifelessRoleID])
            break;
        case "bread":
            message.member.roles.set([breadRoleID])
            break;
        case "coconut":
            message.member.roles.set([coconutRoleID])
            break;
        case "dead":
            message.member.roles.set([deadRoleID])
    }

        //Leveling
    /* old code just in case something bad happens
    if (userData[userID].level == 1 && userData[userID].breadAmount >= 100 || userData[userID].coconutAmount >= 100) {
        userData[userID].level = 2
        message.channel.send(userName + ": You have leveled up to level 2!")
    }
    if (userData[userID].level == 2 && userData[userID].breadAmount >= 330 || userData[userID].coconutAmount >= 330) {
        userData[userID].level = 3
        message.channel.send(userName + ": You have leveled up to level 3!")
    }
    if (userData[userID].level == 3 && userData[userID].breadAmount >= 1000 || userData[userID].coconutAmount >= 1000) {
        userData[userID].level = 4
        message.channel.send(userName + ": You have leveled up to level 4!")
    }
    if (userData[userID].level == 4 && userData[userID].breadAmount >= 3300 || userData[userID].coconutAmount >= 3300) {
        userData[userID].level = 5
        message.channel.send(userName + ": You have leveled up to level 5!")
    }
    if (userData[userID].level == 5 && userData[userID].breadAmount >= 10000 || userData[userID].coconutAmount >= 10000) {
        userData[userID].level = 6
        message.channel.send(userName + ": You have leveled up to level 6!")
    }
    */
    if (userData[userID].breadAmount >= baselevelCost*Math.pow(levelCostMult,(userData[userID].level-1))){
        userData[userID].level ++
        message.channel.send(userName + ": You have leveled up to level " + userData[userID].level + "!")
    }

        //Debugging stuff
    process.on('warning', e => console.warn(e.stack));
    process.on('unhandledRejection', function(err) {
        console.log(err);
    });

        //Writing JSON file
    fs.writeFile('./userData.json', JSON.stringify(userData), (err) => {
        if (err) console.error(err);
    });
    fs.writeFile('./userDataBackup.json', JSON.stringify(userData), (err) => {
        if (err) console.error(err);
    });
    fs.writeFile('./weaponData.json', JSON.stringify(weaponData), (err) => {
        if (err) console.error(err);
    });
    



});




//Login
bot.on('ready', () => { 
    console.log('Main Bot Activated');
});
bot.login(token);
}
module.exports = moduleIndex;
