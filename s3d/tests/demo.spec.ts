import type { BrowserContext, Page } from '@playwright/test'
import { expect, test } from '@playwright/test'
import { handles } from './demo.js'

test.describe('demo', () => {
  test('Visa fält Från Till Belopp', async ({ page, context }) => {
    const gateways: GatewayCollection = {}
    const state = await handles.setup({ gateways, page, context } as any)
    const args = { gateways, state, page, context } as any
    await handleServiceCalls(args)

    let testFunc = handles.test_visaFaltFranTillBelopp
    if (testFunc.length === 2) testFunc = (await testFunc(args)) as any
    await handles.start(args)
    expect(await testFunc(args)).toBeUndefined()
  })
  test.describe('Bekräfta sida', () => {
    test('Visa sammanfattning', async ({ page, context }) => {
      const gateways: GatewayCollection = {
        'Alla fält ifyllda': 'ja',
      }
      const state = await handles.setup({ gateways, page, context } as any)
      const args = { gateways, state, page, context } as any
      await handleServiceCalls(args)
      await handles.start(args)
      let testFunc = handles.test_visaSammanfattning
      if (testFunc.length === 2) testFunc = (await testFunc(args)) as any
      await handles.action_klickaFortsatt(args)
      expect(await testFunc(args)).toBeUndefined()
    })
    test('Gå tillbaka', async ({ page, context }) => {
      const gateways: GatewayCollection = {
        'Alla fält ifyllda': 'ja',
      }
      const state = await handles.setup({ gateways, page, context } as any)
      const args = { gateways, state, page, context } as any
      await handleServiceCalls(args)
      await handles.start(args)
      await handles.action_klickaFortsatt(args)
      let testFunc = handles.test_gaTillbaka
      if (testFunc.length === 2) testFunc = (await testFunc(args)) as any
      await handles.action_klickaAvbryt(args)
      expect(await testFunc(args)).toBeUndefined()
    })
    test('Genomför överföring', async ({ page, context }) => {
      const gateways: GatewayCollection = {
        'Alla fält ifyllda': 'ja',
      }
      const state = await handles.setup({ gateways, page, context } as any)
      const args = { gateways, state, page, context } as any
      await handleServiceCalls(args)
      await handles.start(args)
      await handles.action_klickaFortsatt(args)
      let testFunc = handles.test_genomforOverforing
      if (testFunc.length === 2) testFunc = (await testFunc(args)) as any
      await handles.action_klickaGenomfor(args)
      expect(await testFunc(args)).toBeUndefined()
    })
    test('Visa Något gick fel', async ({ page, context }) => {
      const gateways: GatewayCollection = {
        'Alla fält ifyllda': 'ja',
        'Fel från Genomför överföring': 'ja',
      }
      const state = await handles.setup({ gateways, page, context } as any)
      const args = { gateways, state, page, context } as any
      await handleServiceCalls(args)
      await handles.start(args)
      await handles.action_klickaFortsatt(args)
      let testFunc = handles.test_visaNagotGickFel
      if (testFunc.length === 2) testFunc = (await testFunc(args)) as any
      await handles.action_klickaGenomfor(args)
      expect(await testFunc(args)).toBeUndefined()
    })
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
  })
})

export const Gateways = [
  'Alla fält ifyllda',
  'Fel från Genomför överföring',
] as const

export type GatewayKey = (typeof Gateways)[number]
export type GatewayCollection = Partial<Record<GatewayKey, string>>

export type TestArgs<TState, TPageExtensions> = {
  gateways: GatewayCollection
  state: TState
  page: Page & TPageExtensions
  context: BrowserContext
}

export type TestFunction<TState, TPageExtensions> = (
  args: TestArgs<TState, TPageExtensions>,
  usesPrepareFunction?: undefined,
) => Promise<void | (() => Promise<void>)>

const handleServiceCalls = async (args: TestArgs<any, any>) => {
  await handles.serviceCall_genomforOverforing(args)
}

export type Demo<TState = {}, TPageExtensions = {}> = {
  setup: (
    args: Omit<TestArgs<TState, TPageExtensions>, 'state'>,
  ) => Promise<TState>
  start: (args: TestArgs<TState, TPageExtensions>) => Promise<void>
} & DemoRoot<TState, TPageExtensions> &
  DemoBekraftaSida<TState, TPageExtensions>

export type HandlesGenerics<U = typeof handles> =
  U extends Demo<infer A, infer B> ? [A, B] : never

export type DemoRoot<
  TState = HandlesGenerics[0],
  TPageExtensions = HandlesGenerics[1],
> = {
  action_klickaFortsatt: (
    args: TestArgs<TState, TPageExtensions>,
  ) => Promise<void>
  test_visaFaltFranTillBelopp: TestFunction<TState, TPageExtensions>
}

export type DemoBekraftaSida<
  TState = HandlesGenerics[0],
  TPageExtensions = HandlesGenerics[1],
> = {
  serviceCall_genomforOverforing: (
    args: TestArgs<TState, TPageExtensions>,
  ) => Promise<void>
  action_klickaAvbryt: (
    args: TestArgs<TState, TPageExtensions>,
  ) => Promise<void>
  action_klickaGenomfor: (
    args: TestArgs<TState, TPageExtensions>,
  ) => Promise<void>
  test_visaSammanfattning: TestFunction<TState, TPageExtensions>
  test_gaTillbaka: TestFunction<TState, TPageExtensions>
  test_genomforOverforing2222: TestFunction<TState, TPageExtensions>
  test_visaNagotGickFel: TestFunction<TState, TPageExtensions>
  test_gaTillOversikt: TestFunction<TState, TPageExtensions>
}
