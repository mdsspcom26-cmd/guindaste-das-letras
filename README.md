# 🏗️ Guindaste das Letras - Alfabetização e Pensamento Computacional

[![BNCC Computação](https://img.shields.io/badge/BNCC--Computa%C3%A7%C3%A3o-EF01CO01%20%7C%20EF01CO02-indigo)](https://basenacionalcomum.mec.gov.br/)
[![Língua Portuguesa](https://img.shields.io/badge/BNCC--L%C3%ADngua%20Portuguesa-EF01LP02%20%7C%20EF01LP08-sky)](https://basenacionalcomum.mec.gov.br/)
[![Tecnologia](https://img.shields.io/badge/HTML5-JS%20Vanilla%20%7C%20TailwindCSS-amber)](index.html)

**Guindaste das Letras** é um jogo educativo interativo desenvolvido para apoiar o processo de alfabetização de crianças (Educação Infantil e 1º ano do Ensino Fundamental) integrando conceitos de **Pensamento Computacional** e **Língua Portuguesa**, em estrita conformidade com as diretrizes da **BNCC (Base Nacional Comum Curricular)**.

No jogo, o aluno opera um guindaste magnético real em uma grade matricial **4x3** para buscar, capturar e organizar letras, construindo palavras de forma lógica, sequencial e desafiadora.

---

## 🆕 Atualizações Recentes

- 🏗️ **Guindaste Físico Animado (Trolley & Cabo de Aço):** Ao acionar o D-Pad ou as setas do teclado, o **trolley (carro de aço)** desliza no braço superior do guindaste e o **cabo de aço se estica verticalmente até a garra magnética**, acompanhando exatamente a posição da célula na matriz 4x3!
- 🔊 **Mensagem de Erro Falada em Voz Alta (Web Speech API):** Quando a criança seleciona uma letra incorreta, o jogo **envia e pronuncia em voz alta a mensagem de erro pedagógica** (`"Ops! A letra X não é a correta para este passo. Tente outra posição na grade!"`), acompanhada de um alerta visual pulsante.
- 🖼️ **Imagens Fotorrealistas 3D Cute (Nível 1 - Encontros Vocálicos):**
  - **EU:** Menininha 3D fotorrealista sorridente apontando para si mesma.
  - **OI:** Menino 3D fotorrealista acenando feliz.
  - **UI:** Menino 3D fotorrealista com expressão divertida de surpresa.
  - **IA:** Menina 3D fotorrealista passeando no caminho do parque.
  - **AI:** Menino 3D fotorrealista olhando para o curativo no dedinho.
  - **EI:** Menino 3D fotorrealista chamando um amigo com a mão na boca.
  - **Nenhuma imagem contém palavras ou spoilers escritos!**
- 🎲 **Embaralhamento Aleatório Real (Fisher-Yates):** As letras na grade 4x3 são espalhadas aleatoriamente a cada partida. A resposta **nunca aparece em ordem sequencial**, exigindo busca, varredura matricial e raciocínio lógico pelo aluno.
- 🙈 **Interação e Consumo de Letras:** Ao capturar a letra correta com a garra, ela **desaparece da grade 4x3**, incentivando a exploração ativa do tabuleiro restante.
- 🏆 **Modal de Transição de Nível e Vitória Final:** Ao concluir o Nível 1, um modal pergunta se o aluno deseja avançar para o Nível 2 ou repetir o Nível 1.

---

## 🎯 Alinhamento Explícito com a BNCC Computação

| Etapa no Jogo | Habilidade BNCC Computação | Descrição Pedagógica |
| :--- | :--- | :--- |
| **Operação do Guindaste (D-Pad / Teclado)** | **`EF01CO01`** | Criar e seguir algoritmos em malha cartesiana ($X, Y$) movimentando o trolley e o cabo de aço. |
| **Varredura da Matriz Embaralhada** | **`EF01CO02`** | Reconhecimento de padrões gráficos na grade 4x3 não-sequencial. |
| **Análise da Palavra & Slots** | **`EF01CO02`** | Decomposição do problema principal (palavra inteira) em partes discretas. |
| **Captura de Letras (PEGAR 🧲)** | **`EF01CO02`** | Validação de grafema e consumo da letrinha na matriz. |
| **Erro de Seleção** | **Depuração Formativa** | Feedback sonoro e falado em voz alta (*Debugging*), orientando o teste de novas hipóteses. |

---

## 🎮 Níveis e Palavras Disponíveis

### Nível 1 — Encontros Vocálicos (8 Desafios)
* **EU** (Menininha 3D apontando para si)
* **OI** (Menino 3D acenando feliz)
* **UI** (Menino 3D surpreso)
* **IA** (Menina 3D passeando no parque)
* **AI** (Menino 3D com curativo no dedo)
* **EI** (Menino 3D chamando um amigo)
* **EIA** (Cavalgando de cowboy)
* **BOI** (Boi felpudo no campo)

### Nível 2 — Palavras Dissílabas Canônicas (7 Desafios)
* **PATO** (Patinho na lagoa 3D)
* **BOLA** (Bola de brinquedo 3D)
* **COLA** (Tubo de cola escolar)
* **MOLA** (Mola maluca arco-íris)
* **SAPO** (Sapinho sorridente 3D)
* **GATO** (Gatinho carinhoso 3D)
* **CASA** (Casinha aconchegante 3D)

---

## 🕹️ Controles de Jogabilidade

| Ação | Painel na Tela | Teclado Físico |
| :--- | :--- | :--- |
| **Mover Guindaste para Cima** | Botão `⬆️` (D-Pad) | `Seta Para Cima` / `W` |
| **Mover Guindaste para Baixo** | Botão `⬇️` (D-Pad) | `Seta Para Baixo` / `S` |
| **Mover Guindaste para Esquerda** | Botão `⬅️` (D-Pad) | `Seta Para Esquerda` / `A` |
| **Mover Guindaste para Direita** | Botão `➡️` (D-Pad) | `Seta Para Direita` / `D` |
| **Pegar Letra** | Botão `🧲 PEGAR` | `Espaço` / `Enter` |
| **Seleção Direta** | Toque na célula na grade 4x3 | Clique de Mouse |

---

## 📁 Estrutura de Arquivos

```text
Guindaste/
├── index.html         # Interface com braço do guindaste, trolley, cabo de aço e modais
├── js/
│   ├── data.js        # Banco de dados pedagógico com imagens 3D fotorrealistas Cute sem spoilers
│   ├── audio.js       # Síntese Web Audio API (sons) e Web Speech API (síntese de voz em voz alta)
│   └── game.js        # Lógica do guindaste, trolley, cabo de aço, embaralhamento e depuração falada
└── README.md          # Documentação do projeto
```

---

## 🚀 Como Executar

1. Abra o arquivo [index.html](file:///c:/Users/Manoel&M%C3%B4nica&Ian/Desktop/Guindaste/index.html) em qualquer navegador moderno.
2. Funciona 100% offline e sem necessidade de instalação.
