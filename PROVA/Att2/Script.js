document.getElementById("1").addEventListener("click", function () {
    const Jogada1 = document.getElementById("2").value;
    const Jogada2 = document.getElementById("3").value;

    if (Jogada1 == "pedra" && Jogada2 == "papel")  {
        texto.textContent = 'jogador 2 ganhou';
    
    }else if (Jogada1 == "papel" && Jogada2 == "pedra")  {
        texto.textContent = 'jogador 1 ganhou';
        
    }else if (Jogada1 == "pedra" && Jogada2 == "tesoura")  {
        texto.textContent = 'jogador 1 ganhou';
        
    }else if (Jogada1 == "tesoura" && Jogada2 == "pedra")  {
        texto.textContent = 'jogador 2 ganhou';
       
    }else if (Jogada1 == "tesoura" && Jogada2 == "papel")  {
        texto.textContent = 'jogador 1 ganhou';
        
    }else if (Jogada1 == "papel" && Jogada2 == "papel")  {
        texto.textContent = 'empate';
        
    }else if (Jogada1 == "pedra" && Jogada2 == "pedra")  {
        texto.textContent = 'empate';
        
    }else if (Jogada1 == "tesoura" && Jogada2 == "tesoura")  {
        texto.textContent = 'empate';
       
    }else {
       texto.textContent = 'jogador 2 ganhou';
       
    }


});