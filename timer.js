 timer = setInterval(() => {
     count = count + 0.2
     cai.style.width = count + "%"

     if (count > 100) {
         cai.style.width = 100 + "%"
         clearInterval(timer)
     }

 }, 10)