const header = document.querySelector("header")

const primeiro_conhecimento = document.querySelector(".conhecimento:first-child")
const conh_contador = document.querySelectorAll(".contador span")
const barra_de_progresso = document.querySelectorAll(".conhecimento svg circle")

const cq_section = document.querySelector(".conquistas")
const cq_contador = document.querySelectorAll(".numero span")

const links = document.querySelectorAll(".nav-link")

const toggle_btn = document.querySelector(".toggle-btn")

const hamburguer = document.querySelector(".hamburguer")

window.addEventListener("scroll", () => {
    linkAtivo()
    if(!conhecimentosPlayed) conhecimentosContador()
    if(!conquistasPlayed) conquistasContador()
})

/* ================ Barra de navegação sticky ================ */

function stickyNavbar(){
    header.classList.toggle("scrolled", window.pageYOffset > 0)
}

stickyNavbar()

window.addEventListener("scroll", stickyNavbar)

/* ================ Animação ao recarregar a página (scroll reveal) ================ */

/* Formas */

ScrollReveal({  duration: 2500, distance: "150px" }).reveal('.triangulo', { distance: '100px', rotate: { y: 180, x: 180 }, scale: 0.05 , delay: 150 });
ScrollReveal({  duration: 2500, distance: "150px" }).reveal('.triangulo2', { distance: '100px', rotate: { y: 180, x: 180 }, scale: 0.05 , delay: 150 });
ScrollReveal({ duration: 2500, distance: "150px"}).reveal('.quadrado', { distance: '100px', rotate: { x: 90, z: 90 }, scale: 0.05 , delay: 150 });
ScrollReveal({ duration: 2500, distance: "150px"}).reveal('.circulo', { distance: '100px', scale: 0.05 , delay: 150 });
ScrollReveal({ duration: 2500, distance: "150px"}).reveal('.pontos', { distance: '100px', scale: 0.05 , delay: 150 });

/* Portfolio */

ScrollReveal({ duration: 2500, distance: "150px"}).reveal('.inicio-informacoes', { origin: 'bottom', delay: 200 });
ScrollReveal({ duration: 2500, distance: "150px"}).reveal('.inicio-imagem', { origin: 'top', delay: 400 });

ScrollReveal({ duration: 2500, distance: "150px"}).reveal('.sobremim-grid', { origin: 'left', delay: 500 });
ScrollReveal({ duration: 2500, distance: "150px"}).reveal('.sobremim-informacoes', { origin: 'right', delay: 150 });

ScrollReveal({ duration: 2500, distance: "150px"}).reveal('.caixa-conhecimentos', { origin: 'left', delay: 150 });

ScrollReveal({ duration: 2500, distance: "150px"}).reveal('.projetos-info', { origin: 'right', delay: 200 });
ScrollReveal({ duration: 2500, distance: "150px"}).reveal('.projetos-grid', { origin: 'right', delay: 200 });

ScrollReveal({ duration: 2500, distance: "150px"}).reveal('.contatos-info', { origin: 'bottom', delay: 300 });
ScrollReveal({ duration: 2500, distance: "150px"}).reveal('.contatos-form', { origin: 'bottom', delay: 300 });

/* Histórico Escolar */

ScrollReveal({ duration: 2500, distance: "150px"}).reveal('.escola-informacoes', { origin: 'bottom', delay: 200 });
ScrollReveal({ duration: 2500, distance: "150px"}).reveal('.escola-imagem', { origin: 'top', delay: 400 });

ScrollReveal({ duration: 2500, distance: "150px"}).reveal('.faculdade-informacoes', { origin: 'right', delay: 200 });
ScrollReveal({ duration: 2500, distance: "150px"}).reveal('.faculdade-imagem', { origin: 'right', delay: 200 });

ScrollReveal({ duration: 2500, distance: "150px"}).reveal('.thomas-informacoes', { origin: 'left', delay: 200 });
ScrollReveal({ duration: 2500, distance: "150px"}).reveal('.thomas-imagem', { origin: 'left', delay: 200 });

/* Cursos */

ScrollReveal({ duration: 2500, distance: "150px"}).reveal('.cursowebdev-informacoes', { origin: 'bottom', delay: 200 });
ScrollReveal({ duration: 2500, distance: "150px"}).reveal('.cursowebdev-imagem', { origin: 'top', delay: 400  });

ScrollReveal({ duration: 2500, distance: "150px"}).reveal('.cursolp-informacoes', { origin: 'right', delay: 200 });
ScrollReveal({ duration: 2500, distance: "150px"}).reveal('.cursolp-imagem', { origin: 'right', delay: 200  });

ScrollReveal({ duration: 2500, distance: "150px"}).reveal('.cursotic-informacoes', { origin: 'left', delay: 200 });
ScrollReveal({ duration: 2500, distance: "150px"}).reveal('.cursotic-imagem', { origin: 'left', delay: 200  });

/* Experiência */

ScrollReveal({ duration: 2500, distance: "150px"}).reveal('.experiencias1', { origin: 'bottom', delay: 200 });

/* Projeto App Matricula */

ScrollReveal({ duration: 2500, distance: "150px"}).reveal('.projetoappmatricula-informacoes', { origin: 'bottom', delay: 200 });
ScrollReveal({ duration: 2500, distance: "150px"}).reveal('.projetoappmatricula-imagem', { origin: 'top', delay: 400  });

/* Projeto Jogo Fuga da Prisão */

ScrollReveal({ duration: 2500, distance: "150px"}).reveal('.projetojogoprisao-informacoes', { origin: 'bottom', delay: 200 });
ScrollReveal({ duration: 2500, distance: "150px"}).reveal('.projetojogoprisao-imagem', { origin: 'top', delay: 400  });

/* Projeto Irrigador Automático */

ScrollReveal({ duration: 2500, distance: "150px"}).reveal('.projetoirrigadorautomatico-informacoes', { origin: 'bottom', delay: 200 });
ScrollReveal({ duration: 2500, distance: "150px"}).reveal('.projetoirrigadorautomatico-imagem', { origin: 'top', delay: 400  });

/* ================ Animação barra de progresso conhecimentos ================ */

function chegou(el){
    let posTopo = el.getBoundingClientRect().top
    if(window.innerHeight >= posTopo + el.offsetHeight) return true 
    return false
}

function atualizarContagem(num, maxNum){
    let currentNum = +num.innerText
    
    if(currentNum < maxNum){
        num.innerText = currentNum + 1
        setTimeout(() => {
            atualizarContagem(num, maxNum)
        }, 12)
    }
}

let conhecimentosPlayed = false

function conhecimentosContador(){
    if(!chegou(primeiro_conhecimento)) return;
    
    conhecimentosPlayed = true
    
    conh_contador.forEach((contador, i) => {
        let target = +contador.dataset.target;
        let strokeValue = 427 - 427 * (target/100);
        
        barra_de_progresso[i].style.setProperty("--target", strokeValue);
        
        setTimeout(() => {
            atualizarContagem(contador, target);
        }, 400)
    })
    
    barra_de_progresso.forEach(
        (p) => (p.style.animation = "progress 2s ease-in-out forwards")
    );
}

conhecimentosContador()

/* ================ Animação contador conquistas ================ */

let conquistasPlayed = false

function conquistasContador(){
    if(!chegou(cq_section)) return

    conquistasPlayed = true

    cq_contador.forEach((ctr) => {
        let target = +ctr.dataset.target

        setTimeout(() => {
            atualizarContagem(ctr, target)
        }, 400)
    })
}

/* ================ Mudar Link Ativo No Scroll ================ */

function linkAtivo(){
    let sections = document.querySelectorAll("section[id]")
    let sectionPassada = Array.from(sections).map((sct, i) => {
        return { 
            y: sct.getBoundingClientRect().top - header.offsetHeight,
            id: i,
        }
    }).filter(sct => sct.y <= 0)
    let sectionAtualID = sectionPassada.at(-1).id

    links.forEach(l => l.classList.remove("active"))
    links[sectionAtualID].classList.add("active")
}

linkAtivo()

/* ================ Mudar Tema (claro/escuro) ================ */

let primeiroTema = localStorage.getItem("escuro")

mudarTema(+primeiroTema)

function mudarTema(estaEscuro){
    if(estaEscuro){
        document.body.classList.add("escuro")
        toggle_btn.classList.replace("uil-moon", "uil-sun")
        localStorage.setItem("escuro", 1)
    } else {
        document.body.classList.remove("escuro")
        toggle_btn.classList.replace("uil-sun", "uil-moon")
        localStorage.setItem("escuro", 0)
    }
}

toggle_btn.addEventListener("click", () => {
    mudarTema(!document.body.classList.contains("escuro"))
})

/* ================ Abrir e Fechar Menu Navbar ================ */

hamburguer.addEventListener("click", () => {
    document.body.classList.toggle("open")
    document.body.classList.toggle("stopScrolling")
})

links.forEach(link => link.addEventListener("click", () => {
    document.body.classList.remove("open")
    document.body.classList.remove("stopScrolling")
}))

/* ================ Links Redes Sociais ================ */

function copyToClipboard(elementId) {
    
    // Create a "hidden" input
    var aux = document.createElement("input");
    
    // Assign it the value of the specified element
    aux.setAttribute("value", document.getElementById(elementId).innerHTML);
  
    // Append it to the body
    document.body.appendChild(aux);
    
    // Highlight its content
    aux.select();
    
    // Copy the highlighted text
    document.execCommand("copy");
    
    // document.body.classList.add("active");
    
    // Remove it from the body
    document.body.removeChild(aux);
    
}

/* ================ Enviar Formulário Para Email ================ */

const form = document.querySelector(".contatos-form")

function enviarMsg(e){
    e.preventDefault()
    const name = document.querySelector(".input-form-name"),
          email = document.querySelector(".input-form-email"),
          msg = document.querySelector(".input-form-msg");

    Email.send({
        SecureToken : "13fdbb8c-957d-48c6-8f77-251093c61ddb",
        To : 'leo.pereira.cortes@gmail.com',
        From : email.value,
        Subject : "Novo contato profissional",
        Body : "Nome: " + name.value + "<br>Mensagem: " + msg.value
    }).then(
    message => alert("Mensagem enviada com sucesso!")
    );
}

form.addEventListener("submit", enviarMsg)