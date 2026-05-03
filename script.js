(function() {
    // Scroll Suave 
    const lenis = new Lenis();
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);

    
    const typedEl = document.getElementById('typed-subtitle');
    const phrases = ['Ciência da Computação - Centro Universitário Senac', 'Engenharia de Software & Baixo Nível', 'Alexi.Malloc Brand Developer'];
    let pIdx = 0, cIdx = 0, isDel = false;

    function type() {
        const full = phrases[pIdx];
        typedEl.textContent = isDel ? full.substring(0, cIdx--) : full.substring(0, cIdx++);
        if(!isDel && cIdx > full.length) { isDel = true; setTimeout(type, 2000); }
        else if(isDel && cIdx < 0) { isDel = false; pIdx = (pIdx+1)%phrases.length; setTimeout(type, 500); }
        else setTimeout(type, isDel ? 40 : 80);
    }
    type();

    // Dinâmica de Dados do Modal
    const researchData = {
        quantum: {
            content: `
                <h1 id="res-intro">Ciências Quânticas</h1>
                <p>Estudo focado na simulação de estados e fenômenos quânticos em arquiteturas clássicas, abordando desde os fundamentos matemáticos da mecânica quântica até estratégias de otimização algorítmica para computação de alto desempenho. A pesquisa estabelece uma ponte entre a teoria quântica e a implementação prática em linguagem C, explorando os limites da simulação exata de sistemas quânticos em hardware convencional.</p>

                <h2 id="res-obj">Objetivo</h2>
                <p>Otimizar algoritmos para o cálculo de emaranhamento e superposição em sistemas quânticos simulados, reduzindo a complexidade computacional e o consumo de memória para viabilizar experimentos com múltiplos qubits em hardware clássico. Busca-se também estabelecer uma base teórica sólida que permita a migração futura desses algoritmos para processadores quânticos reais, compreendendo as limitações e os gargalos da simulação em arquiteturas von Neumann. O foco central é a implementação de matrizes complexas em linguagem C para alta performance, garantindo que o overhead de memória seja mínimo e que as operações de álgebra linear explorem ao máximo as capacidades do processador, como vetorização SIMD e paralelismo.</p>

                <h2 id="res-dev">Desenvolvimento</h2>
                <p>Implementação de matrizes complexas em linguagem C para alta performance, garantindo que o overhead de memória seja mínimo. Diferentemente dos bits clássicos que assumem valores discretos 0 ou 1, os qubits operam em superposição de estados, representados matematicamente por vetores no espaço de Hilbert bidimensional: |ψ⟩ = α|0⟩ + β|1⟩, onde α e β são amplitudes complexas cujos módulos ao quadrado representam probabilidades de colapso da função de onda. O emaranhamento, por sua vez, estabelece correlações não clássicas entre múltiplos qubits, de modo que o estado do sistema não pode ser fatorado como produto tensorial dos estados individuais, fenômeno descrito pelos estados de Bell.</p>
                <p>A exponencialidade do espaço de estados é o principal desafio: para n qubits, o vetor de estado possui 2ⁿ amplitudes complexas, exigindo que qualquer simulação direta consuma recursos que crescem exponencialmente com o número de qubits. Na simulação, o estado do sistema é armazenado como um vetor de números complexos de tamanho 2ⁿ, e as operações quânticas — portas lógicas — são aplicadas por meio de multiplicações matriciais. Para minimizar o overhead de memória e maximizar a localidade de cache, os arrays são armazenados contiguamente em C, e os acessos são otimizados para explorar padrões de stride. A escolha entre float complex e double complex impacta significativamente a capacidade de simulação: com precisão simples é possível simular um ou dois qubits adicionais para a mesma quantidade de RAM.</p>
                <p>Para quantificar emaranhamento, calcula-se a entropia de von Neumann do subsistema: S(ρ_A) = -Tr(ρ_A log₂ ρ_A), onde ρ_A é a matriz densidade reduzida obtida pelo traço parcial sobre o subsistema B. A implementação em C requer a construção da matriz densidade, o traço parcial e a diagonalização da matriz densidade reduzida, que é Hermitiana. Os autovalores obtidos são usados para calcular a entropia. A superposição é preservada e manipulada através de portas quânticas, garantindo-se a unitariedade das transformações: cada porta deve satisfazer U†U = I, validando a identidade dentro de uma tolerância numérica de 10⁻¹².</p>
                <p>Estratégias centrais de otimização incluem vetorização SIMD com intrínsecos AVX2/AVX-512, que permitem processar até 8 números complexos por ciclo de clock; paralelismo com OpenMP, onde a aplicação de portas de um qubit é embaraçosamente paralelizável com redução linear do tempo de execução; redução de acesso à memória com tabelas de permutação pré-calculadas (gray codes); e circuitos com gates esparsas, onde portas controladas como CNOT afetam apenas um subconjunto de amplitudes, reduzindo a complexidade de O(2ⁿ) para O(2ⁿ⁻ᵏ). Algoritmos são avaliados por fidelidade (F = |⟨ψ_sim|ψ_teo⟩|², com meta superior a 0.9999 para até 20 qubits), escalabilidade (limite teórico de 30 qubits com 32 GB de RAM em precisão dupla) e tempo de execução, que cresce como O(D × 2ⁿ) para circuitos de profundidade D. A barreira da exponencialidade permanece intransponível para simulação exata de sistemas com mais de 50 qubits, limiar onde se estima que computadores quânticos atinjam supremacia quântica.</p>

                <h2 id="res-bib">Bibliografia</h2>
                <p>Nielsen, M. & Chuang, I. (2010). Quantum Computation and Quantum Information. 10th Anniversary Edition. Cambridge University Press.</p>
                <p>Arute, F. et al. (2019). Quantum supremacy using a programmable superconducting processor. Nature, 574, 505–510.</p>
                <p>Williams, C. P. (2011). Explorations in Quantum Computing. 2nd ed. Springer.</p>
                <p>Press, W. H., Teukolsky, S. A., Vetterling, W. T., & Flannery, B. P. (2007). Numerical Recipes: The Art of Scientific Computing. 3rd ed. Cambridge University Press.</p>
                <p>Hidary, J. D. (2019). Quantum Computing: An Applied Approach. Springer.</p>
            `
        },
        assembly: {
            content: `
               <h1 id="res-intro">Assembly 8086</h1>
                <p>Análise profunda da arquitetura original x86 e gestão de memória segmentada, explorando otimização de hardware via manipulação de registradores e interrupções da BIOS.</p>

                <h2 id="res-obj">Objetivo</h2>
                <p>Otimizar ciclos de instrução e rotinas críticas de I/O em nível de processador, demonstrando técnicas para bypass das limitações do MS-DOS através de programação Assembly direcionada ao hardware.</p>

                <h2 id="res-dev">Desenvolvimento</h2>
                <p>Manipulação direta de registradores (AX, BX, CX, DX) e uso estratégico de interrupções da BIOS. Exploração do modelo de memória segmentada (CS, DS, SS, ES) e das funções específicas de cada registrador: AX como acumulador aritmético, BX como base indexada, CX como contador de laços e DX para I/O indireto. Implementação de estratégias de otimização como minimização de acessos à memória, acesso direto ao segmento de vídeo (B800h) e programação de portas de hardware (61h para som). Uso de instruções de string (REP MOVSW) e desenrolamento de laços para redução de ciclos de clock.</p>

                <h2 id="res-bib">Bibliografia</h2>
                <p>Tanenbaum, A. S. (2013). Organização Estruturada de Computadores.</p>
                <p>Intel Corporation. (1979). 8086 Family User's Manual.</p>
                <p>Abel, P. (2001). IBM PC Assembly Language and Programming.</p>
                <p>Hyde, R. (2004). Write Great Code, Volume 1.</p>
            `
        }
    };

    // Abertura/Fechamento Modal
    const modal = document.getElementById('research-modal');
    const modalBody = document.getElementById('modal-body');

    document.querySelectorAll('.research-trigger').forEach(t => {
        t.addEventListener('click', () => {
            modalBody.innerHTML = researchData[t.dataset.research].content;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Trava o fundo
            modalBody.scrollTop = 0;
        });
    });

    document.querySelector('.close-modal').addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Libera o fundo
    });

    // Clique no Sumário do Modal
    document.querySelectorAll('.sidebar-list a').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href').substring(1);
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                modalBody.scrollTo({
                    top: targetEl.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animações de Scroll
    gsap.registerPlugin(ScrollTrigger);
    document.querySelectorAll('.reveal').forEach(el => {
        gsap.from(el, { 
            opacity: 0, 
            y: 40, 
            duration: 1.2, 
            ease: "power3.out", 
            scrollTrigger: { trigger: el, start: "top 90%" }
        });
    });
})();