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
