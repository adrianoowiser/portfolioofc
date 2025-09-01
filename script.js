// Textos detalhados de cada tópico
const topics = {
  aprendizado: `
    <h2>📘 Aprendizado</h2>
    <p>O aprendizado em desenvolvimento web exige consistência. 
    Comece pelo <b>HTML</b> (estrutura da página), avance para o <b>CSS</b> (estilo) 
    e depois mergulhe no <b>JavaScript</b> (funcionalidade e interatividade).</p>
    <p>Dicas práticas para evoluir:</p>
    <ul>
      <li>Estude ao menos 30 minutos todos os dias.</li>
      <li>Crie pequenos projetos: página de apresentação, lista de tarefas.</li>
      <li>Use vídeos, livros e IA como apoio, mas pratique mais do que consome.</li>
    </ul>
  `,

  projetos: `
    <h2>💻 Projetos</h2>
    <p>Projetos são a melhor forma de fixar conhecimento e montar seu portfólio. 
    Eles mostram que você consegue aplicar na prática o que aprendeu.</p>
    <p>Alguns projetos ideais para começar:</p>
    <ul>
      <li>Landing page de um negócio fictício.</li>
      <li>Um portfólio online hospedado no GitHub Pages.</li>
      <li>Mini aplicações em JavaScript, como calculadora ou lista de tarefas.</li>
    </ul>
  `,

  mentalidade: `
    <h2>🧠 Mentalidade</h2>
    <p>O caminho de um desenvolvedor não é fácil, mas é recompensador. 
    É preciso disciplina, resiliência e paciência.</p>
    <p>Lembre-se sempre:</p>
    <ul>
      <li>Errar faz parte do aprendizado.</li>
      <li>Compare-se apenas com a sua versão de ontem.</li>
      <li>Vitórias pequenas acumuladas geram grandes resultados.</li>
    </ul>
  `
};

// Função para mostrar o conteúdo quando clicar
function showContent(topic) {
  const content = document.getElementById("content");
  content.innerHTML = topics[topic];
  content.style.display = "block"; // aparece só ao clicar
  content.style.animation = "fadeIn 0.5s ease-in-out"; // efeito suave
}
