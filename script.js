// Textos detalhados de cada tópico
const topics = {
  aprendizado: `
    <h2>📘 Aprendizado</h2>
    <p>O aprendizado em desenvolvimento web exige prática diária. 
    Comece pelo <b>HTML</b> para estruturar páginas, avance para o <b>CSS</b> para estilizar 
    e depois mergulhe no <b>JavaScript</b> para dar vida às suas criações.</p>
    <p>Dicas práticas:</p>
    <ul>
      <li>Estude no mínimo 30 minutos por dia.</li>
      <li>Construa pequenos projetos, como páginas pessoais.</li>
      <li>Use a IA para tirar dúvidas, mas tente resolver sozinho antes.</li>
    </ul>
  `,

  projetos: `
    <h2>💻 Projetos</h2>
    <p>Projetos são o seu portfólio vivo. Eles mostram ao mercado que você não apenas estuda, 
    mas também aplica o que aprendeu.</p>
    <p>Exemplos de projetos:</p>
    <ul>
      <li>Landing page para um negócio fictício.</li>
      <li>Portfólio online hospedado no GitHub Pages.</li>
      <li>Mini jogo simples em JavaScript.</li>
    </ul>
  `,

  mentalidade: `
    <h2>🧠 Mentalidade</h2>
    <p>Ser desenvolvedor vai além do código. É preciso cultivar disciplina, paciência e resiliência. 
    O progresso é lento, mas constante.</p>
    <p>Lembre-se:</p>
    <ul>
      <li>Errar faz parte, é sinal de aprendizado.</li>
      <li>Compare-se apenas com você de ontem.</li>
      <li>Pequenas vitórias diárias constroem grandes resultados.</li>
    </ul>
  `
};

// Função para trocar conteúdo
function showContent(topic) {
  const content = document.getElementById("content");
  content.innerHTML = topics[topic];
  content.style.animation = "fadeIn 0.6s ease-in-out"; // animação
}
