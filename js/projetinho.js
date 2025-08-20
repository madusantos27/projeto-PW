function toggleMode() { //função que alterna entre os modos claro e escuro

    const html = document.documentElement; // seleciona o elemento HTML <html> da pagina
    html.classList.toggle("ligth"); //alterna a classe "ligth" no elemento html. se a classe existir ela e removida; se não ele é adicionada

    // alterar imagem do perfil
    const img = document.querySelector("#profile img"); //seleciona a imagem dentro do elemento com o id "profile"(a foto do perfil)


    // condicional para verificar se a classe "ligth" foi adicionada ao elemento HTML
    if(html.classList.contains("ligth")){ // verifica se  o elemento html comtem a classe "ligth" (modo claro)

        img.setAttribute("src", ".img/foto1.webp"); //se estiver no modo claro, alterar a imagem para "foto 1"
    } else {

        img.setAttribute("src", "./img/foto2.jpg"); // se não estiver no modo claro(modo escuro), matem ou coloca a imagem "foto2"

    }

}
