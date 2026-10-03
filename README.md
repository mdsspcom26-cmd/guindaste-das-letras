# 🏗️ Guindaste das Letras - Alfabetização e Pensamento Computacional

[![BNCC Computação](https://img.shields.io/badge/BNCC--Computa%C3%A7%C3%A3o-EF01CO01%20%7C%20EF01CO02-indigo)](https://basenacionalcomum.mec.gov.br/)
[![DUA Acessibilidade Surdos](https://img.shields.io/badge/DUA-Acessibilidade%20Surdos-emerald)](index.html)
[![Língua Portuguesa](https://img.shields.io/badge/BNCC--L%C3%ADngua%20Portuguesa-EF01LP02%20%7C%20EF01LP08-sky)](https://basenacionalcomum.mec.gov.br/)

**Guindaste das Letras** é um jogo educativo interativo desenvolvido para apoiar o processo de alfabetização de crianças (Educação Infantil e 1º ano do Ensino Fundamental) integrando conceitos de **Pensamento Computacional**, **Língua Portuguesa** e **Acessibilidade DUA (Desenho Universal para a Aprendizagem para Alunos Surdos)**, em estrita conformidade com as diretrizes da **BNCC (Base Nacional Comum Curricular)**.

---

## 🆕 Atualizações de Acessibilidade DUA, Garra Mecânica e Transição de Nível

- 🦾 **Controle e Seletor com GARRA MECÂNICA (Substituição do Ímã):**
  - O botão de ação e o seletor da matriz foram atualizados para representar fielmente a **GARRA MECÂNICA DE GUINDASTE (`🦾 PEGAR GARRA`)**.
- 🤟 **Acessibilidade DUA (Desenho Universal para Aprendizagem - Alunos Surdos):**
  - **Visualização de Erro (`⚠️ ATENÇÃO! LETRA INCORRETA`):** Para garantir autonomia a crianças surdas ou com deficiência auditiva, quando a garra pega uma letra incorreta, a tela ativa um **cartão de alerta vermelho pulsante de alta visibilidade com sacudida de atenção** (`bg-red-600 text-white border-4 border-yellow-300 animate-bounce`), além de piscar a célula alvo em vermelho.
  - **Visualização de Acerto (`✅ MUITO BEM! LETRA ENCAIXADA!`):** Ao acertar a letra, a interface emite um **banner verde vibrante de celebração visual** (`bg-emerald-600 border-4 border-emerald-300 animate-pulse`) com checkmark verde (`✅`) nos slots e na matriz.
- 🚀 **Transmissão Transparente de Mudança de Nível:**
  - Ao concluir a 8ª palavra do Nível 1 (Encontros Vocálicos), o jogo abre o modal de transmissão **`#modal-level-complete`**, parabenizando o aluno pelas conquistas BNCC e permitindo que ele decida explicitamente se deseja avançar para o Nível 2 ou repetir o Nível 1.
- 🖼️ **Imagem Fotorrealista 3D do 'EIA':**
  - Adicionada a ilustração 3D fotorrealista estilo Pixar do garotinho sorridente cavalgando no cavalo de pau (`EIA`), sem qualquer texto de spoiler.

---

## 🎯 Alinhamento Explícito com a BNCC Computação & DUA

| Etapa no Jogo | Habilidade BNCC Computação | Recursos DUA para Alunos Surdos |
| :--- | :--- | :--- |
| **Operação da Garra (D-Pad / Teclado)** | **`EF01CO01`** | Deslocamento do trolley e cabo de aço visíveis na malha 4x3 ($X, Y$). |
| **Varredura da Matriz Embaralhada** | **`EF01CO02`** | Associação direta entre a imagem 3D grande e a representação gráfica. |
| **Captura de Letras (PEGAR GARRA 🦾)** | **`EF01CO02`** | Animação da garra mecânica descendo e consumindo a letrinha na matriz. |
| **Erro de Seleção** | **Depuração Formativa** | **Alerta DUA Vermelho Pulsante (`⚠️ ATENÇÃO!`)** + narração em áudio. |
| **Acerto de Seleção** | **Confirmação Algorítmica** | **Banner DUA Verde Vibrante (`✅ MUITO BEM!`)** + checkmark visual. |

---

## 🎮 Níveis e Palavras Disponíveis

### Nível 1 — Encontros Vocálicos (8 Desafios)
* **EU** (Menininga 3D apontando para si)
* **OI** (Menino 3D acenando feliz)
* **UI** (Menino 3D surpreso)
* **IA** (Menina 3D passeando no parque)
* **AI** (Menino 3D com curativo no dedo)
* **EI** (Menino 3D chamando um amigo)
* **EIA** (Garotinho 3D no cavalo de pau)
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
| **Mover Garra para Cima** | Botão `⬆️` (D-Pad) | `Seta Para Cima` / `W` |
| **Mover Garra para Baixo** | Botão `⬇️` (D-Pad) | `Seta Para Baixo` / `S` |
| **Mover Garra para Esquerda** | Botão `⬅️` (D-Pad) | `Seta Para Esquerda` / `A` |
| **Mover Garra para Direita** | Botão `➡️` (D-Pad) | `Seta Para Direita` / `D` |
| **Pegar com a Garra** | Botão `🦾 PEGAR (GARRA)` | `Espaço` / `Enter` |
| **Seleção Direta** | Toque na célula na grade 4x3 | Clique de Mouse |

---

## 🚀 Como Executar

1. Abra o arquivo [index.html](file:///c:/Users/Manoel&M%C3%B4nica&Ian/Desktop/Guindaste/index.html) em qualquer navegador moderno.
2. Funciona 100% offline e sem necessidade de instalação.
