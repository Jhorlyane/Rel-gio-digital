function relogio(){
    const elementoRelogio = document.querySelector('.relogio');
    const horaAtual = new Date();
    const horas = horaAtual.getHours();
    
    const minutos = horaAtual.getMinutes();
    const segundos = horaAtual.getSeconds();
    
    const formatoHoras = horas.toString().padStart(2, '0');
    const formatoMinutos = minutos.toString().padStart(2, '0');
    const formatoSegundos = segundos.toString().padStart(2, '0');

     elementoRelogio.textContent = `${formatoHoras}| ${formatoMinutos}| ${formatoSegundos}`;

     const frase = document.querySelector('.frase')

     dia = new Array('Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado');

     mes = new Array('janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro')

    hoje = new Date

    frase.innerHTML = `${dia[hoje.getDay()]}, ${hoje.getDate(). toString().padStart(2, '0')} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()}`

     if(formatoHoras >= 0 && formatoHoras <5){
        document.body.style.backgroundImage = "url(https://criticalhits.com.br/wp-content/uploads/2022/04/FHqaLBeXMAMz8_5-910x512.jpg)"
    }

    else if (formatoHoras >= 10 && formatoHoras <12){
        document.body.style.backgroundImage = "url(https://disneyplusbrasil.com.br/wp-content/uploads/2022/10/A-Casa-Coruja-Disney-Plus.jpg)"
    }

    else if (formatoHoras >= 13 && formatoHoras <16){
        document.body.style.backgroundImage = "url(https://static.anime21.blog.br/2019/02/Dororo-6_9.png)"
    }

    else if(formatoHoras >= 17 && formatoHoras <18){
        document.body.style.backgroundImage = "url(https://www.omegascopio.com.br/wp-content/uploads/2023/02/Black-Clover-movie_KV.jpg)"
    }
    else{
        document.body.style.backgroundImage = "url(https://www.omegascopio.com.br/wp-content/uploads/2023/02/Black-Clover-movie_KV.jpg) "
        
    }

}

  

    



setInterval(relogio, 1000)











