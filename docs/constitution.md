# Constituição do Projeto: Guindaste das Letras

> **Visão Geral:**  
> O **Guindaste das Letras** é uma aplicação educacional voltada para o apoio à alfabetização e ao desenvolvimento do pensamento computacional infantil na Educação Infantil e nos primeiros anos do Ensino Fundamental.

---

## 📜 Princípios Obrigatórios e Permanentes

### 1. Adequação Pedagógica à BNCC (Base Nacional Comum Curricular)
- **Pensamento Computacional:**
  - **EF01CO01:** Criação e execução de algoritmos com sequenciamento e passos discretos em malha matricial/cartesiana.
  - **EF01CO02:** Decomposição de problemas complexos em partes menores e gerenciáveis.
- **Interdisciplinaridade com Língua Portuguesa:**
  - **EF01LP02 & EF01LP08:** Trabalhar a segmentação fonêmica, identificação e construção de encontros vocálicos e a escrita ordenada de palavras simples dissílabas.

---

### 2. Metáfora Visual Coerente
- **Guindaste Mecânico Central:**
  - Braço horizontal perfurado representando a estrutura física.
  - Cabo vertical extensível que realiza os movimentos descendente e ascendente.
  - Seletor magnético com cantoneiras vermelhas destacadas para garra/atração dos blocos de letras.
- **Estrutura do Tabuleiro:**
  - Dividido estritamente em duas áreas quadriculadas de tamanho **4x3**:
    1. **Painel de Montagem (Azul):** Posicionado à esquerda, onde a criança manipula o guindaste e organiza as letras.
    2. **Painel Modelo de Referência (Rosa):** Posicionado à direita, exibindo o gabarito visual/palavra-alvo.

---

### 3. Níveis de Ensino Estruturados
- **Nível 1 – Ditongos e Tritongos Vocálicos:**
  - Foco em formações vocálicas simples: `EU`, `OI`, `UI`, `IA`, `AI`, `EI`, `EIA`.
  - Associação direta a expressões pictóricas de emoção, saudação, dor, susto ou autorreferência.
- **Nível 2 – Palavras Dissílabas Canônicas:**
  - Foco em palavras de estrutura Consonante-Vogal (CV-CV): `PATO`, `BOLA`, `COLA`, `MOLA`.
  - Exigência de montagem silábica ordenada e sequencial.

---

### 4. Feedback Formativo Imediato e Depuração (Debugging)
- **Princípio Sem Punição:** Erros não resultam em perda de vidas, pontos ou bloqueios frustrantes.
- **Ciclo de Depuração:**
  - Ao selecionar uma letra incorreta para a posição ordinal da palavra, o sistema ativa um feedback visual/sonoro amigável de depuração.
  - A peça retorna automaticamente à malha matricial para que a criança reflita e faça uma nova tentativa.

---

### 5. Multimodalidade e Acessibilidade Total
- **Síntese de Voz Nativa (Web Speech API):**
  - Leitura clara em Português Brasileiro (pt-BR) das instruções, palavras e fonemas de cada letra.
- **Efeitos Sonoros Nativos (Web Audio API):**
  - Sons gerados programaticamente via síntese de áudio nativa, eliminando totalmente qualquer dependência de arquivos externos (evitando erros 404/CORS).
- **Entrada Multi-Dispositivo:**
  - Suporte completo a **Touch/Mobile** (toque e arrasto), **Cliques de Mouse** e **Teclado Físico** (setas direcionais + Espaço/Enter para acionar o guindaste).

---

### 6. Arquitetura Estática & Implantação Simplificada (GitHub Pages)
- **100% Client-Side:** Construído estritamente com HTML5, Tailwind CSS e JavaScript nativo modular (ES Modules).
- **Sem Build Complexo:** Executável diretamente no navegador sem necessidade de Node.js, bundlers ou compilações pesadas no runtime.
- **Zero Dependências de Servidor:** Nenhuma dependência de APIs pagas, bancos de dados ou servidores backend.

---

### 7. Verificabilidade Objetiva
- **Garantia de Qualidade:** Todas as mecânicas de jogo, controles, áudio e responsividade devem possuir critérios claros e verificáveis em telas Desktop, Tablets e Smartphones.
