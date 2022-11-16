const texto = " <html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>       A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br></body></html>";


//Nome das cidades avaliadas
function cidades(texto){
    var nomesCidades = texto.split("*");
    var cidades = [];

    for(let i=1; i < nomesCidades.length; i += 2){
        cidades.push(nomesCidades[i]);
    }

    return cidades;
}


//O conteúdo do roteiro A de cada cidade avaliada.
function roteiroA(texto){
    var conteudoRoteiroA = texto.split("#");
    var roteiroA = []

    roteiroA.push(conteudoRoteiroA[1]);
    roteiroA.push(conteudoRoteiroA[4]);
    roteiroA.push(conteudoRoteiroA[7]);

    return roteiroA;
}


//Quantos locais são citados no roteiro A de cada cidade.
function locaisRoteiroA(texto){
    let roteiro = roteiroA(texto);
    let saoPaulo = roteiro[0].slice(19).split(";");
    let lasVegas = roteiro[1].slice(19).split(";");
    let moscou = roteiro[2].slice(19).split(";");
    
    locaisRoteiroA =`
        Quantos locais são citados no roteiro A de cada cidade:<br>
        São Paulo: ${saoPaulo.length} locais,<br>
        Las Vegas: ${lasVegas.length} locais,<br>
        Moscou:    ${moscou.length}   locais,
    `;

    return locaisRoteiroA;
}

function nomesPontosTuristicos(texto){
    //O nome dos pontos turísticos localizados no bairro Centro da cidade de São Paulo.
    var roteiroCentro = texto.split("<br>").slice(6,7);

    //O nome dos pontos turísticos localizados no bairro Downtown na cidade de Los Angeles.
    var roteiroDowntown = texto.split("<br>").slice(15,16);

    nomesPontosTuristicos = `
        <strong>Roteiro Centro de São Paulo:</strong><br>
        ${roteiroCentro}
        <br>
        <strong>Roteiro Downtown:</strong><br>
        ${roteiroDowntown}
    `;

    return nomesPontosTuristicos;
}


document.getElementById("demo1").innerHTML = cidades(texto);
document.getElementById("demo2").innerHTML = roteiroA(texto);
document.getElementById("demo3").innerHTML = locaisRoteiroA(texto);
document.getElementById("demo4").innerHTML = nomesPontosTuristicos(texto);
document.getElementById("texto").innerHTML = texto;