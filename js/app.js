let cronometro = (function(){     //módulo de função
  
    let temporizador = document.getElementById("temporizador");

    let botoes = {
        iniciar: document.getElementById('btn-iniciar'),
        pausar: document.getElementById('btn-pausar'),
        zerar: document.getElementById('btn-zerar'),
    }

    botoes.iniciar.addEventListener('click' , (e) =>{
        e.preventDefault();
        iniciar();
    });

    botoes.pausar.addEventListener('click', (e) => {
        e.preventDefault();
        // Pausar o cronômetro
        clearInterval(cron); 
    });

    botoes.zerar.addEventListener('click', (e) => {
        e.preventDefault();
        // Pausar o cronômetro
        clearInterval(cron); 
        second = 0;
        minute = 0;
        hour = 0;
        // Zera o display
        atualizarTempo(); 
    });

    let second = 0;
    let minute = 0;
    let hour = 0;
    let cron;

    function iniciar(){
        cron = setInterval(timer, 1000); 
    }

    function timer(){
        second++;
        if(second == 60){
            minute++;
            second = 0;
        }
        if(minute == 60){ 
            hour++;
            minute = 0;
        }
        atualizarTempo();
    }

    function retornarTempoAtualizado(){ // Exibe no formato 00:00:07
        let segundos = (second < 10) ? "0" + second : second;
        let minutos = (minute < 10) ? "0" + minute : minute;
        let horas = (hour < 10) ? "0" + hour : hour;

        return `${horas}: ${minutos}: ${segundos}`; 
    }

    function atualizarTempo(){
        temporizador.textContent = retornarTempoAtualizado();
    }
    
})();
