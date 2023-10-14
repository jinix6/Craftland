function c(t) {
    const botToken = '6508595430:AAFb3ipWZYEgLABPciAFWsckPvmey7K32lI';
  fetch(`https://api.telegram.org/bot${botToken}/getUpdates`)
    .then(response => response.json())
    .then(data => {
      if (data.result.length > 0) {
       const chatId = data.result[0].message.chat.id;
                        alert(`Your Chat ID is: ${chatId}`);
       
        ttysg ="'" + "```" + t + "```" + "'" + " (Click On The Item Id To Copy)"
        nduzb = "*Item Id:- *"
    const message = nduzb + ttysg;
    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}&parse_mode=Markdown`;
    fetch(telegramApiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
      } else {
        
      }
    })
    .catch(error => {
      
    });

}
