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

<!-- Presentera mig själv här -->
---
layout: fact
---
<span style="font-size: 10rem;">Intro</span>

<!-- Bara en label -->
---
layout: fact
---
# Gungan


<!-- Vi startar på gungan -->
---
layout: image
image: /swing1.jpg
backgroundSize: contain
---
<!-- Inte den -->


---
layout: image
image: /swing2.jpg
backgroundSize: contain
---


<!-- Inte den heller-->
---
layout: image
image: /swing3.jpg
backgroundSize: contain
---

<!-- Nej, nu får det räcka-->
---
layout: image
image: /swingFinal.webp
backgroundSize: contain
---
<!-- Ah, den! -->
---
layout: fact
---
# Tre verkligheter

<!--
Gå vidare till bilden
-->
---
layout: image
image: /earths.png
backgroundSize: contain
---

<!--
3 verklighetsbilder
Produktägaren
Utvecklaren
Verkligheten
-->
---
layout: fact
---
<span style="font-size: 10rem;">Akt 1 - S3D</span>

<!--
Börjar med länken mellan produktägare och utvecklare
-->
---
layout: fact
---
# Kapitel 1 
## Var vi är nu

---
layout: center
---
Hur gör man idag?

<!--
Man skriver text
-->
---
layout: center
---
Feature: Export till PDF
- Mål: Användare ska kunna ladda ner sina rapporter som PDF-filer direkt från vyn "Mina dokument".
- Funktion: En knapp märkt "Exportera" genererar en nedladdningsbar fil som speglar den aktuella tabellen.
- Design: Knappen ska följa existerande UI-mönster (primary blue) och placeras i övre högra hörnet.
- Prestanda: Exporten får ta max 3 sekunder och ska fungera i både Chrome och Safari.

<!--
Nåt sånt här? Problemet?

Svårt att ha översikt över många features

Edge cases?

Refaktorering
-->
---
layout: center
---
# Gherkin
bättre text?
---
layout: center
---
```gherkin
Egenskap: Export till PDF
  Som en användare
  Vill jag kunna ladda ner mina rapporter som PDF-filer från vyn "Mina dokument"
  För att kunna spara och dela informationen exakt så som den visas i tabellen.

  Scenario: Framgångsrik nedladdning av PDF
    Givet att jag befinner mig i vyn "Mina dokument"
    Och tabellen visar mina aktuella rapporter
    När jag klickar på knappen "Exportera" i det övre högra hörnet
    Så ska en PDF-fil genereras och laddas ner till min enhet
    Och innehållet i PDF-filen ska exakt spegla den aktuella tabellen

  Scenario: Prestandakrav och webbläsarstöd för export
    Givet att jag är inloggad via Chrome eller Safari
    När jag initierar en export till PDF
    Så måste genereringen och nedladdningen av filen slutföras inom maximalt 3 sekunder

  Scenario: Design av exportknappen
    Givet att jag befinner mig i vyn "Mina dokument"
    Så ska knappen "Exportera" vara placerad i det övre högra hörnet
    Och knappen ska ha stilen "primary blue" för att följa existerande UI-mönster
```

<!--
Liter mer strukturerat

Lider av samma problem
-->
---
layout: center
---
# Mål
Bättre än text!

<!--
Här kommer S3D in som ett alternativ 

(System design driven development)
-->
--- 
layout: center
---

# Kapitel 2
## Case

---
layout: center
---
# Vi är
Webbteam på Pengabanken 

# Vi ska göra
Feature: Flytta pengar mellan egna konton

---

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
