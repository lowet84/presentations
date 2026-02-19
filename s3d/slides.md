---
theme: seriph
class: text-white
highlighter: shiki
drawings:
  enabled: true
layout: intro
---

# Testdriven utveckling
## med System-design-driven-development (S3D)
##### *Tre akter, 10 kapitel*

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
<span style="font-size: 10rem;">Akt 1</span>
# S3D

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

Rita krav som ett flödesschema
-->
--- 
layout: fact
---

# Kapitel 2
## Case

---
layout: center
---
# Vi är
Webbteam på Pengabanken 

# Vi ska göra
Feature: Front-end för att flytta pengar mellan egna konton


<!--
Enkel feature

Välj konton, ange summa, bekräfta-sida
-->


---
layout: fact
---
# Kapitel 3 
## S3D flöde

<!--
Nu börjar vi rita S3D-flöde

Just nu ritar vi S3D i FigJam, editor under utveckling
-->
---
layout: center
---
# Start
---
layout: image
image: /FlowStart.png
backgroundSize: contain
---
<!-- Vi börjar ett flöde med en start-nod -->


---
layout: center
---
# Message
---
layout: image
image: /FlowMessage1.png
backgroundSize: contain
---
<!--
Visa fält

Från

Till

Belopp
-->

---
layout: center
---
# User action
---
layout: image
image: /FlowUserAction1.png
backgroundSize: contain
---
<!--
Användaren klickar fortsätt
-->

---
layout: center
---
# Gateway
---
layout: image
image: /FlowGateway1.png
backgroundSize: contain
---
<!--
Validering
-->

---
layout: center
---
# Valideringsfel
---
layout: image
image: /FlowMessage2.png
backgroundSize: contain
---
<!--
Valideringsfel
-->

---
layout: center
---
# Subprocess
---
layout: image
image: /FlowSubprocess1.png
backgroundSize: contain
---
<!--
Subprocess länkas med namn till en ny startnod

Gå vidare till nästa sida
-->

---
layout: center
---
# Sammanfattning
---
layout: image
image: /FlowMessage3.png
backgroundSize: contain
---
<!--
Visa sammanfattning av betalningen
-->

---
layout: center
---
# Avbryt
---
layout: image
image: /FlowUserAction2.png
backgroundSize: contain
---
<!--
Användaren avbryter betalningen

Signal send kan användas för att skicka en "signal" eller att gå någonstans, exempelvis tillbaka
-->

---
layout: center
---
# Genomför betalningen
---
layout: image
image: /FlowUserAction3.png
backgroundSize: contain
---
<!--
Användaren klickar på genomför betalningen
-->

---
layout: center
---
# Service call
---
layout: image
image: /FlowServiceCall1.png
backgroundSize: contain
---
<!--
Anrop till backend för att genomföra betalningen
-->

---
layout: center
---
# Felhantering
---
layout: image
image: /FlowMessage4.png
backgroundSize: contain
---
<!--
Felhantera backend-anrop
-->

---
layout: center
---
# Betalning genomförd
---
layout: image
image: /FlowFull.png
backgroundSize: contain
---
<!--
Betalningen genomförd

Gå tillbaka till översikt, extern sida
-->

---
layout: fact
---
# Kapitel 4 
## Shift left

---
layout: image
image: /ShiftLeft.png
backgroundSize: contain
---
<!--
Ju tidigare man hittar en bugg desto billigare att fixa

Tillbaka till flödet - Hitta minst två buggar
-->

---
layout: image
image: /FlowFull.png
backgroundSize: contain
---
<!--
# Hitta minst två buggar

Belopp för högt, inga pengar på kontot?

Vad har vi för konton egentligen?
-->

---
layout: fact
---
<span style="font-size: 10rem;">Akt 2</span>
# Testgenerering och test-driven utveckling

<!--
Börjar med länken mellan produktägare och utvecklare
-->
---
layout: fact
---
# Kapitel 5
## Generera tester

<!--
Går nu över till länken mellan utvecklare och koden
-->
---
layout: center
---
Gherkin igen
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
Meningen med gherkin är ju att generera tester

**Cucumber** eller **SpecFlow**
-->
---
layout: fact
---
# Kapitel 6
## Vad testar vi?

<!--
Gå vidare till bilden
-->
---
layout: image
image: /WhatWeTest.png
backgroundSize: contain
---
<!--
# Vi testar:

Messages

Signal Send

Service calls (för att se att de faktiskt anropas)
-->

---
layout: fact
---
# Kapitel 7
## Hur testar vi?

<!--
Gå vidare till bilden
-->
---
layout: image
image: /HowWeTest.png
backgroundSize: contain
---
<!--
# Vi testar:

Hittar väg till nod som ska testas

Gateway-värden för att ta sig dit

User actions
-->

---
layout: fact
---
# Kapitel 8
## Exempel

<!--
Gå vidare till koden
-->
---
layout: code
---
```typescript
test('Gå till översikt', async ({ page, context }) => {
  const gateways: GatewayCollection = {
    'Alla fält ifyllda': 'ja',
    'Fel från Genomför överföring': 'nej',
  }
  const state = await handles.setup({ gateways, page, context } as any)
  const args = { gateways, state, page, context } as any
  await handleServiceCalls(args)
  await handles.start(args)
  await handles.action_klickaFortsatt(args)
  let testFunc = handles.test_gaTillOversikt
  if (testFunc.length === 2) testFunc = (await testFunc(args)) as any
  await handles.action_klickaGenomfor(args)
  expect(await testFunc(args)).toBeUndefined()
})
```

<!--
### Target, i detta fall Playwright för front-end


## Lifecycle
- gateways, 
- mocka service calls
- genomför alla actions utom sista
- pre test
- sista action 
- test
-->

---
layout: code
---
```typescript
import {Demo} from "./demo.spec";

export const handles: Demo = {
  serviceCall_genomforOverforing: async ({page, context})=>{
    // Mocka service-anrop här
    // if fel?? svara med fel
    // annars svara med data
  },
  action_klickaFortsatt: async ({page, context})=>{
    // Klicka på fortsätt här
  },
  test_genomforOverforing: async ({page, context})=>{
    // testa att vi kommer vidare till rätt sida
  }
}
```
<!--
# Utvecklaren implementerar innehållet
-->
---
layout: fact
---
# Kapitel 9 
## Refaktorering

<!--
Vidare till bilden
-->
---
layout: image
image: /RefactorError.png
backgroundSize: contain
---
<!--
Om man ändrar på flödet så slutar testerna att fungera

Exempel:
- Byta text
- Nya noder
- Ändra ordning
-->

---
layout: fact
---
<span style="font-size: 10rem;">Akt 3</span>
# Hur jobbar man med S3D?

<!--

-->
---
layout: fact
---
# Kapitel 10
## Arbetsflöde

<!--
Vidare till bilden
-->
---
layout: image
image: /EatSleep.jpg
backgroundSize: contain
---
<!--
Vidare till listan
-->

---
layout:center
---
- Rita
- Testa
- Koda
- Upprepa
---
layout: fact
---
<span style="font-size: 10rem;">Epilog</span>
# roadmap och frågor

<!--
Vi bygger editor

Frågor?
-->

---
layout: fact
---
<span style="font-size: 10rem;">Tack</span>
# Stort tack att ni ville komma

<!--
Nu är det slut.
-->
---

