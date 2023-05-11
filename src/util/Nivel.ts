export default function base_nivel(n_competicoes: number){  
    let nivel_atual = 0;
    const xpAtual = n_competicoes * 50;

    const nivel = {
      nivel_1: Math.round((100 * (1.1 ** 1))),
      nivel_2: Math.round((100 * 2) * (1.1 ** 2)),
      nivel_3: Math.round((100 * 3) * (1.1 ** 3)),
      nivel_4: Math.round((100 * 4) * (1.1 ** 4)),
      nivel_5: Math.round((100 * 5) * (1.1 ** 5)),
      nivel_6: Math.round((100 * 6) * (1.1 ** 6)),
      nivel_7: Math.round((100 * 7) * (1.1 ** 7)),
      nivel_8: Math.round((100 * 8) * (1.1 ** 8)),
      nivel_9: Math.round((100 * 9) * (1.1 ** 9)),
      nivel_10:Math.round((100 * 10) * (1.1 ** 10))
    }     
    
    if(xpAtual < nivel.nivel_1){
      nivel_atual = 0;
    }else if(xpAtual > nivel.nivel_1 && xpAtual < nivel.nivel_2){
      nivel_atual = 1;
    }else if(xpAtual > nivel.nivel_2 && xpAtual < nivel.nivel_3){
      nivel_atual = 2;
    }else if(xpAtual > nivel.nivel_3 && xpAtual < nivel.nivel_4){
      nivel_atual = 3;
    }else if(xpAtual > nivel.nivel_4 && xpAtual < nivel.nivel_5){
      nivel_atual = 4;
    }else if(xpAtual > nivel.nivel_5 && xpAtual < nivel.nivel_6){
      nivel_atual = 5;
    }else if(xpAtual > nivel.nivel_6 && xpAtual < nivel.nivel_7){
      nivel_atual = 6;
    }else if(xpAtual > nivel.nivel_7 && xpAtual < nivel.nivel_8){
      nivel_atual = 7;
    }else if(xpAtual > nivel.nivel_8 && xpAtual < nivel.nivel_9){
      nivel_atual = 8;
    }else if(xpAtual > nivel.nivel_9 && xpAtual < nivel.nivel_10){
      nivel_atual = 9;
    }else if(xpAtual > nivel.nivel_10){
      nivel_atual = 10;
    }
    return nivel_atual;
}