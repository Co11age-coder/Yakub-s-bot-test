import {Bot, InlineKeyboard, Keyboard}  from'grammy'
const bot = new Bot("7070298855:AAFsGRZtfmQL8_KPcgOMrK-uSTKRCapJ1gI");
bot.hears("dayii nasılsın?", async (ctx) => (ctx.reply("iyiyiim daiiii sen nasisin")));
bot.command("start", (ctx) => ctx.reply("Starting copy."));
bot.command("stop", (ctx) => ctx.reply("Im sad =( bye friend"));
//bot.on("message", (ctx) => ctx.reply("Got another message!"));

//bot.hears("click", async (ctx) => {
//  await ctx.reply("boom", { 
//    reply_parameters: { message_id: ctx.msg.message_id },
//  });
//
//});


//bot.hears("ping", async (ctx) => {
//  await ctx.reply("pong", {
//reply_parameters:{message_id:ctx.msg.message_id},
//parse_mode:'MarkdownV2',
//  });
//});

//bot.command("force", async (ctx) => {
//  await ctx.reply("Hi! I can only read messages that explicitly reply to me!", {
//    reply_markup: { force_reply: true },
//  });
//});

//bot.on("edited_message",async (ctx) => {
//
//  console.log(ctx.editedMessage.text);
//})


//const inlineKeyboard = new InlineKeyboard()
//  .text("« 1", "first")
//  .text("‹ 3", "prev")
//  .text("· 4 ·", "stay")
//  .text("5 ›", "next")
//  .text("31 »", "last");
//
//  bot.command("board", async (ctx) => {
//    await ctx.reply("Hi! Feel free when you typing to me!", {
//      reply_markup: inlineKeyboard,
//    });
//  });
//
//const fullLineButton = new InlineKeyboard()
//  .text("FIRST");
//
//  bot.callbackQuery("click-payload" /* , ... */);
//
//bot.on("callback_query:data", async (ctx) => {
//  console.log("Unknown button event with payload", ctx.callbackQuery.data);
//  await ctx.answerCallbackQuery(); 
//});
//
//bot.command("first",async (ctx) => {
//  await ctx.reply("ONE TEXTTT", {
//    reply_markup:fullLineButton,
//  });
//});

//bot.callbackQuery("click-payload", async (ctx) => {
//await ctx.answerCallbackQuery({
//text: "BOOOOOOM!!",
//});
//});

//const inlineKeyboard = new InlineKeyboard()
//.text("A","A")
//.text("B","B")
//.text("C","C")
//.text("D","D");
//
//bot.command("react", async (ctx) => {
//await ctx.reply("What is the true answer?", { reply_markup: inlineKeyboard });
//});




//bot.on("callback_query:data", async (ctx) => {
//if (ctx.callbackQuery.data == "B"){
//ctx.answerCallbackQuery({text:"nice its true answer =)"});
//}else{}
//ctx.answerCallbackQuery({text:"=("});
//});
//


//const keyboard = new Keyboard()
//  .text("Yes, they certainly are" ,"A")
//  .text("I'm not quite sure", "B")
//  .text("No. 😈", "C")
//  .resized();
//  
//bot.command( "key", (ctx) => ctx.reply("get your custom keyboard",
//{ reply_markup:keyboard}));
//
//bot.on("message:text", (ctx) => {
//if (ctx.message.text == 'B') {
//  ctx.reply("no")
//}else{
//  ctx.reply("yes")
//}
//}
//)
//
//bot.on (':photo', (ctx) => {
//ctx.reply('NO, DONT GIVE US PHOTO 😠')
//});
//
//
//
//const CustomKeyboard = new Keyboard()
//  .text("Katana", "katana")
//  .text("Cutlass", "cutlass")
//  .text("Shaska", "shaska")
//  .text("Carolingian", "carolingian")
//  .text("Rapier", "rapier") ;
//  
//  bot.command("react", async (ctx) => {
//    await ctx.reply("Swords?", { reply_markup: CustomKeyboard });
//    });
//
//bot.hears("Katana", async (ctx) => {
//   await ctx.replyWithPhoto('https://swordis.com/wp-content/uploads/2024/01/Main-Toran-hamon-musashi-katana-Sheathed-sword.jpg')
//   await ctx.reply("Катана длинный японский меч. По форме клинка катана напоминает шашку, однако рукоять у неё прямая и длинная, что позволяет использовать двуручный хват. Навершие отсутствует. Небольшой изгиб клинка и острый конец позволяют наносить также от 60,6 до 75,7 см, общая длина с рукоятью — 85—105 см обычно 90—100 см. Оружие с длиной клинка меньше 2 сяку считается вакидзаси, а больше 2,5 сяку — окатана большая катана или тати, но помимо размера тати традиционно имеет больший изгиб и другую отделку с креплением Аси к доспехам. ");
// });
//bot.callbackQuery("katana", async (ctx) => {
//    await ctx.replyWithPhoto('https://swordis.com/wp-content/uploads/2024/01/Main-Toran-hamon-musashi-katana-Sheathed-sword.jpg')
//    await ctx.reply("Катана длинный японский меч. По форме клинка катана напоминает шашку, однако рукоять у неё прямая и длинная, что позволяет использовать двуручный хват. Навершие отсутствует. Небольшой изгиб клинка и острый конец позволяют наносить также от 60,6 до 75,7 см, общая длина с рукоятью — 85—105 см обычно 90—100 см. Оружие с длиной клинка меньше 2 сяку считается вакидзаси, а больше 2,5 сяку — окатана большая катана или тати, но помимо размера тати традиционно имеет больший изгиб и другую отделку с креплением Аси к доспехам. ");
//  });
//
//  bot.callbackQuery("cutlass", async (ctx) => {
//    await ctx.replyWithPhoto('https://swordis.com/wp-content/uploads/2024/01/Main-Cutlass-Atrim-Design-by-Kingston-Arms-Sword.jpg')
//    await ctx.reply("The word cutlass developed from the 17th century English use of coutelas a 16th century French word for a machete like mid length single edged blade the modern French for knife in general is couteau in 17th and 18th century English the word was often spelled cuttoe The French word coutelas may be a convergent development from a Latin root along with the Italian coltellaccio or cortelazo meaning large knife In Italy the cortelazo was a similar short broad bladed sabre popular during the 16th century The root coltello, for knife derived ultimately from the Latin cultellus meaning smaller knife which is the common Latin root for both the Italian and French words In the English speaking Caribbean the word cutlass is also used as a word for machete");
//  });
//
//
//  bot.callbackQuery("shaska", async (ctx) => {
//    await ctx.replyWithPhoto('https://swordis.com/wp-content/uploads/2024/03/Shashka-type-740x153.png')
//    await ctx.reply("The Shashka is a unique one-sided sword from Eastern Europe. It gained popularity amongst the brave Cossack warriors who used it in horseback combat. What sets this sword apart is that it doesn't have a guard. This absence of a guard makes the Shashka very light, letting users move it with ease during battles. Russian horse soldiers, in particular, took a liking to this design. So much so, that it became one of their main swords. Today, the Shashka is highlighted in modern sword dances.");
//  });
//
//
//  bot.callbackQuery("carolingian", async (ctx) => {
//    await ctx.replyWithPhoto('https://swordis.com/wp-content/uploads/2024/03/Carolingian-Viking-Sword-type-740x153.png')
//    await ctx.reply("The Carolingian sword, sometimes called the Viking sword, was a prevalent weapon in Europe during the Middle Ages. Notable warriors, including Vikings, Franks, and Saxons, often employed it in battle. This sword was a common sight on battlefields and set the standard for many future European swords with its dual sharp edges.");
//  }); 
//
// 
//  bot.callbackQuery("rapier", async (ctx) => {
//    await ctx.replyWithPhoto('https://swordis.com/wp-content/uploads/2024/03/Rapier-type-740x153.png')
//    await ctx.reply("The Rapier is a stylish sword that originated during the Renaissance in Europe. With its sleek and attractive design, it stands out as one of the most lethal thrusting weapons in history, designed to penetrate deeply with a single strike from a fair distance. During its prime, the Rapier was often the weapon of choice in duels. Even today, it continues to feature in Historical European Martial Arts (HEMA).");
//  });  
//
//
//const inlineKeyboard = new InlineKeyboard()
//  .text("Great-sword", "great")
//  .text("Double-edge","straight")
//  .text("Daggers","small")
//  .text("Edgeless","edgeless")
//  .text("Singel-edge","single")
//;
//  
//  bot.command("react", async (ctx) => {
//    await ctx.reply("Swords?", { reply_markup: inlineKeyboard });
//    });
//
//const keyboard = new Keyboard()
//  .text("Great-sword" ,"A")
//  .text("Double-edge", "B")
//  .text("Daggers", "C")
//  .text("Edgeless","D")
//  .text("Singel-edge","E")
//  .resized();
//  
//bot.command( "key", (ctx) => ctx.reply("get your custom keyboard!",
//{ reply_markup:keyboard}));



const CustomKeyboard = new Keyboard()
  .text("Great-sword", "katana")
  .text("Double-edge", "cutlass")   //-----------------------------------------------------------------------------------------------------------------
  .text("Daggers", "shaska")        //-----------------------------------------------------------------------------------------------------------------
  .text("Edgeless", "carolingian")
  .text("Singel-edge", "rapier") ;
  
  bot.command("react", async (ctx) => {
    await ctx.reply("Swords?", { reply_markup: CustomKeyboard });
    });

bot.hears("Great-sword", async (ctx) => {

  const greatKeyboard = new Keyboard()
  .text("Claymore","claymore")                                  //povtor
  .text("Zweihänder","zwerProsto")
  .text("<= Go back <=","Menu")
  await ctx.reply("here menu", {reply_markup: greatKeyboard});
});

bot.hears("<= Go back <=", async (ctx) => {
await ctx.reply("yes sir!",{ reply_markup:CustomKeyboard})
});


bot.hears("Claymore", async (ctx) => {
   await ctx.replyWithPhoto('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Two-handed_Highland_sword.JPG/220px-Two-handed_Highland_sword.JPG')
   await ctx.reply("The word claymore was first used in reference to basket-hilted swords during the 18th century in Scotland and parts of England.[2] This description was maybe not used during the 17th century, when basket-hilted swords were the primary military swords across Europe, but these basket-hilted, broad-bladed swords remained in service with officers of Scottish regiments into the 21st century. After the Acts of Union in 1707 (when Scottish and English regiments were integrated together), the swords were seen as a mark of distinction by Scottish officers over the more slender sabres used by their English contemporaries: a symbol of physical strength and prowess, and a link to the historic Highland way of life.");
 });

 bot.hears("Zweihänder", async (ctx) => {
  await ctx.replyWithPhoto('https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Zweihaender_im_historischen_Museum_Basel.JPG/300px-Zweihaender_im_historischen_Museum_Basel.JPG')
  await ctx.reply("Zweihänder swords developed from the longswords of the Late Middle Ages and became the hallmark weapon of the German Landsknechte from the time of Maximilian I (d. 1519) and during the Italian Wars of 1494–1559. The Goliath Fechtbuch (1510) shows an intermediate form between longsword and Zweihänder.This represented the final stage in the trend of making very large swords, which started in the 14th century and ended in the 16th century. In its developed form, the Zweihänder acquired the handling characteristics of a polearm, rather than a sword due to their increased size and weight, therefore adding to its striking power and longer reach. Consequently, it was not carried in a sheath, but across the shoulder like that of a pike or halberd.");
});


bot.hears("Double-edge", async (ctx) => {

  const doubleKeyboard = new Keyboard()
  .text("Jian","Jian")                                
  .text("Longsword","Longsword")
  .text("Spatha","Spatha")
  .text("<= Go back <=","Menu")
  await ctx.reply("here menu", {reply_markup: doubleKeyboard});
});

bot.hears("<= Go back <=", async (ctx) => {
  await ctx.reply("yes sir!",{ reply_markup:CustomKeyboard})
  });

bot.hears("Jian", async (ctx) => {
  await ctx.replyWithPhoto('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Sword_with_Scabbard_MET_DP119025_brightened_2x3.jpg/220px-Sword_with_Scabbard_MET_DP119025_brightened_2x3.jpg')
  await ctx.reply("is a double-edged straight sword used during the last 2,500 years in China. The first Chinese sources that mention the jian date to the 7th century BCE, during the Spring and Autumn period one of the earliest specimens being the Sword of Goujian. Historical one-handed versions have blades varying from 45 to 80 centimeters 18 to 31 inches in length. The weight of an average sword of 70-centimetre 28-inch blade-length would be in a range of approximately 700 to 900 grams 1.5 to 2 poundsThere are also larger two-handed versions used for training by many styles of Chinese martial arts.Professional jian practitioners are referred to as jianke Chinese pinyin lit. sword guests or swordsmen a term dating from the Han dynasty.In Chinese folklore, it is known as The Gentleman of Weapons and is considered one of the four major weapons, along with the gun, qiang , and the dao . These swords are also sometimes referred to as taijijian or tai chi swords, reflecting their current use as training weapons for tai chi practitioners, though there were no historical jian types created specifically for tai chi.");
});

bot.hears("Longsword", async (ctx) => {
  await ctx.replyWithPhoto('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Hand-and-a-Half_Sword_MET_DP146428.jpg/220px-Hand-and-a-Half_Sword_MET_DP146428.jpg')
  await ctx.reply("A longsword also spelled as long sword or long sword is a type of European sword characterized as having a cruciform hilt with a grip for primarily two-handed use around 15 to 30 cm or 6 to 12 in a straight double edged blade of around 80 to 110 cm 31 to 43 in, and weighing approximately 1 to 1.5 kg 2 lb 3 oz to 3 lb 5 ozThe longsword type exists in a morphological continuum with the medieval knightly sword and the Renaissance-era Zweihänder. It was prevalent during the late medieval and Renaissance periods approximately 1350 to 1550 with early and late use reaching into the 12th and 17th centuries.");
});

bot.hears("Spatha", async (ctx) => {
  await ctx.replyWithPhoto('https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Spatha_end_of_second_century_1.jpg/150px-Spatha_end_of_second_century_1.jpg')
  await ctx.reply("The spatha was a type of straight and long sword, measuring between 0.5 and 1 m 19.7 and 39.4 in, with a handle length of between 18 and 20 cm 7.1 and 7.9 in, in use in the territory of the Roman Empire during the 1st to 6th centuries AD. Later swords, from the 7th to 10th centuries, like the Viking swords, are recognizable derivatives and sometimes subsumed under the term spatha.The Roman spatha was used in war and in gladiatorial fights. The spatha of literature appears in the Roman Empire in the 1st century AD as a weapon used by presumably Celtic auxiliaries and gradually became a standard heavy infantry weapon by the 3rd century AD, relegating the gladius to use as a light infantry weapon. The spatha apparently replaced the gladius in the front ranks, giving the infantry more reach when thrusting. While the infantry version had a long point, versions carried by the cavalry had a rounded tip that prevented accidental stabbing of the cavalryman's own foot or horse.Archaeologically many instances of the spatha have been found in Britain and Germany. It was used extensively by Germanic warriors. It is unclear whether it came from the gladius or the longer Celtic swords, or whether it served as a model for the various arming swords and Viking swords of Europe. The spatha remained popular throughout the Migration Period. It evolved into the knightly sword of the High Middle Ages by the 12th century.");
});

bot.hears("Daggers", async (ctx) => {

  const DagKeyboard = new Keyboard()
  .text("Dirk","dirk")                                
  .text("Fairbairn","fairbrainbroooo")
  .text("PushDagger","pdagger")
  .text("<= Go back <=","Menu")
  await ctx.reply("here menu", {reply_markup: DagKeyboard});
});
bot.hears("<= Go back <=", async (ctx) => {
  await ctx.reply("yes sir!",{ reply_markup:CustomKeyboard})
  });

bot.hears("Dirk", async (ctx) => {
  await ctx.replyWithPhoto('https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Scottish_dirk%2C_blade_by_Andrew_Boog%2C_Edinburgh%2C_c._1795_-_Royal_Ontario_Museum_-_DSC09484.JPG/170px-Scottish_dirk%2C_blade_by_Andrew_Boog%2C_Edinburgh%2C_c._1795_-_Royal_Ontario_Museum_-_DSC09484.JPG')
  await ctx.reply("A dirk is a long-bladed thrusting dagger Historically it gained its name from the Highland dirk Scottish Gaelic dearg where it was a personal weapon of officers engaged in naval hand-to-hand combat during the Age of Sail as well as the personal sidearm of Highlanders It was also the traditional sidearm of the Highland Clansman and later used by the officers, pipers and drummers of Scottish Highland regiments around 1725 to 1800 and by Japanese naval officers");
});

bot.hears("Fairbairn", async (ctx) => {
  await ctx.replyWithPhoto('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Fairbairn-Sykes_fighting_knife_%28colour4%29.jpg/300px-Fairbairn-Sykes_fighting_knife_%28colour4%29.jpg')
  await ctx.reply("The Fairbairn–Sykes fighting knife is a double-edged fighting knife resembling a dagger or poignard with a foil grip. It was developed by William Ewart Fairbairn and Eric Anthony Sykes in Shanghai based on ideas that the two men had while serving on the Shanghai Municipal Police in China before World War II The F-S fighting knife was made famous during World War II when issued to British Commandos the Airborne Forces the SAS and many other units especially for the Normandy landings in June 1944. With its acutely tapered sharply pointed blade, the F-S fighting knife is frequently described as a stiletto a weapon optimised for thrusting although the FS knife can be used to inflict slash cuts upon an opponent when its cutting edges are sharpened according to specification. The Wilkinson Sword Company made the knife with minor pommel and grip design variations.");
});

bot.hears("PushDagger", async (ctx) => {
  await ctx.replyWithPhoto('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Push_dagger_2009_G1.jpg/350px-Push_dagger_2009_G1.jpg')
  await ctx.reply("A push dagger alternately known as a punch dagger punch knife push knife or less often a push dirk is a shortbladed dagger with a T handle designed to be grasped and held in a closed-fist hand so that the blade protrudes from the front of the fist either between the index and middle fingers or between the two central fingers when the grip and blade are symmetrical.It originated as a close-combat weapon for civilians in the early 19th century and also saw some use in the trench warfare of World War I");
});


bot.hears("Edgeless", async (ctx) => {

  const NoEdgeeg = new Keyboard()
  .text("Basket-hilted","Basket-hilted")                                
  .text("Xiphos","Xiphos")
  .text("Rapier","Rapier")
  .text("<= Go back <=","Menu")
  await ctx.reply("here menu", {reply_markup: NoEdgeeg});
});

bot.hears("<= Go back <=", async (ctx) => {
  await ctx.reply("yes sir!",{ reply_markup:CustomKeyboard})
  });
  

bot.hears("Basket-hilted", async (ctx) => {
  await ctx.replyWithPhoto('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Schiavona-Morges.jpg/220px-Schiavona-Morges.jpg')
  await ctx.reply("The basket hilted sword is a sword type of the early modern era characterised by a basket-shaped guard that protects the hand. The basket hilt is a development of the quillons added to swords crossguards since the Late Middle Ages. In modern times, this variety of sword is also sometimes referred to as the broadsword The basket hilted sword was generally in use as a military sword. True broadsword possesses a double-edged blade, while similar wide-bladed swords with a single sharpened edge and a thickened back are called backswords. Various forms of basket-hilt were mounted on both broadsword and backsword blades.One of the weapon types in the modern German dueling sport of Mensur academic fencing is the basket-hilted Korbschläger.");
});

bot.hears("Xiphos", async (ctx) => {
  await ctx.replyWithPhoto('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Xiphos_2.jpg/220px-Xiphos_2.jpg')
  await ctx.reply("The xiphos ( plural xiphe, Ancient Greek is a double edged, one-handed Iron Age straight shortsword used by the ancient Greeks. It was a secondary battlefield weapon for the Greek armies after the dory or javelin. The classic blade was generally about 45–60 cm 18–24 in long, although the Spartans supposedly preferred to use blades as short as 30 cm 12 in around the era of the Greco Persian Wars");
});

bot.hears("Rapier", async (ctx) => {
  await ctx.replyWithPhoto('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Rapiere-Morges-kitsch.jpg/200px-Rapiere-Morges-kitsch.jpg')
  await ctx.reply("A rapier or espada ropera dress sword is a type of sword used in Renaissance Spain to designate a sword with a straight, slender and sharply pointed two-edged long blade wielded in one hand. It was widely popular in Western Europe throughout the 16th and 17th centuries as a symbol of nobility or gentleman status.It is called espada ropera because it was carried as an accessory to clothing, generally used for fashion and as a weapon for dueling, self defense and as a military side arm Its name is of Spanish origin and appears recorded for the first time in the Coplas de la panadera, by Juan de Mena, written approximately between 1445 and 1450");
});

bot.hears("Singel-edge", async (ctx) => {

  const EdgeKeyboard = new Keyboard()
  .text("Backsword","Backsword")                                
  .text("Dao","Dao")
  .text("Hook sword","Hook sword")
  .text("Kopis","Kopis")
  .text("<= Go back <=","Menu")
  await ctx.reply("here menu", {reply_markup: EdgeKeyboard});
});

bot.hears("<= Go back <=", async (ctx) => {
  await ctx.reply("yes sir!",{ reply_markup:CustomKeyboard})
  });

bot.hears("Backsword", async (ctx) => {
  await ctx.replyWithPhoto('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Pallasch_M1808_%284%29_-_no_BG.png/400px-Pallasch_M1808_%284%29_-_no_BG.png')
  await ctx.reply("A backsword is a type of sword characterised by having a single-edged blade and a hilt with a single-handed grip. It is so called because the triangular cross section gives a flat back edge opposite the cutting edge. Later examples often have a false edge on the back near the tip, which was in many cases sharpened to make an actual edge and facilitate thrusting attacks. From around the early 14th century, the backsword became the first type of European sword to be fitted with a knuckle guard.");
});

bot.hears("Dao", async (ctx) => {
  await ctx.replyWithPhoto('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Saber_with_Scabbard_and_Belt_Hook_%28%E6%B8%85_%E8%85%B0%E5%88%80%29_MET_DP-834-001.jpg/220px-Saber_with_Scabbard_and_Belt_Hook_%28%E6%B8%85_%E8%85%B0%E5%88%80%29_MET_DP-834-001.jpg')
  await ctx.reply("Dao (pronunciation: [táʊ], English approximation: /daʊ/ dow, Chinese: 刀; pinyin: dāo; jyutping: dou1) are single-edged Chinese swords, primarily used for slashing and chopping. They can be straight or curved. The most common form is also known as the Chinese sabre, although those with wider blades are sometimes referred to as Chinese broadswords. In China, the dao is considered one of the four traditional weapons, along with the gun (stick or staff), qiang (spear), and the jian (double-edged sword), called in this group ");
});

bot.hears("Hook sword", async (ctx) => {
  await ctx.replyWithPhoto('https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Double_Hook_Swords.jpg/220px-Double_Hook_Swords.jpg')
  await ctx.reply("The hook sword, twin hooks, fu tao, hu tou gou (tiger head hook) or shuang gou (Chinese: 鈎 or 鉤; pinyin: Gōu) is a Chinese weapon traditionally associated with northern styles of Chinese martial arts and Wushu weapons routines, but now often practiced by southern styles as well.");
});

bot.hears("Kopis", async (ctx) => {
  await ctx.replyWithPhoto('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Kopis_2.jpg/220px-Kopis_2.jpg')
  await ctx.reply("The term kopis in Ancient Greece could describe a heavy knife with a forward-curving blade, primarily used as a tool for cutting meat, for ritual slaughter and animal sacrifice,citation needed or refer to a single edged cutting or cut and thrust sword with a similarly shaped blade.");
});

bot.start();
