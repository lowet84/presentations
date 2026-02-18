---
theme: seriph
class: text-white
highlighter: shiki
drawings:
  enabled: true
layout: intro
---

# Testdriven utevckling
## med System-design-driven-development (S3D)

<div class="absolute bottom-10">
  <span class="font-700 text-xl">
    Fredrik Löwenhamn
  </span>
  <div class="text-sm opacity-80">
    Systemutvecklare
  </div>
</div>

---
layout: fact
---
# Intro
---
layout: fact
---
## Gungan

---
layout: image
image: /swing1.jpg
backgroundSize: contain
---
---
layout: image
image: /swing2.jpg
backgroundSize: contain
---
---
layout: image
image: /swing3.jpg
backgroundSize: contain
---
---
layout: image
image: /swingFinal.webp
backgroundSize: contain
---
---
layout: fact
---
## Tre verkligheter
---
layout: image
image: /earths.png
backgroundSize: contain
---
---



## Akt 1 - S3D
### Kapitel 1 - Intro
- Hur gör man idag - Text
- Bättre text - gherkin
- Bättre än text

### Kapitel 2 - Case
- Webbteam - Pengabanken
- Flytta pengar mellan egna konton

### Kapitel 3 - S3D flöde
- Början av flödet - **Start**
- Visa fält - **Message**
- Klicka fortsätt - **User Action**
- Alla fält ifyllda? - **Gateway**
- Felhantering, användardata
- Gå till bekräfta-sidan - **Subprocess**
- Visa sammanfattning
- Avbryt - **Signal send**
- Klicka genomför
- Anrop till backend - **Service Call**
- Felhantering, backendanrop, *vad ska vi göra här?*
- Gå till översikt

### Kapitel 4 - Shift left
- Ju tidigare man hittar en bugg desto billigare att fixa
- Tillbaka till flödet - Hitta minst två buggar

## Akt 2 - Testgenerering och test-driven utveckling

### Kapitel 5 - Generera tester
- Knyter tillbaka till gherkin
- Generera tester - utvecklaren implementerar innehållet
- Targets - i detta fall Playwright för front-end

### Kapitel 6 - Vad testar vi?
- Messages
- Signal send
- Service calls

### Kapitel 7 - Hur testar vi?
- Gateways
- User actions

### Kapitel 8 - Exempel
- Lifecycle - gateways, mocks, actions, pre test, last action test
- Mocka service call
- Implementera user action
- Testa utfall

### Kapitel 9 - Refaktorering
- Ändra i flöde, tester slutar fungera
- Byta text
- Nya noder
- Ändra ordning

## Akt 3 - Hur jobbar man med S3D?
### Kapitel 10 - arbetsflöde
- Först - rita flöde och diskutera med team och produktägare
- Implementera ett eller nåra få tester
- Implementera feature i app tills tester går igenom
- Upprepa!

## Epilog - roadmap och frågor
