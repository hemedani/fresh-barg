import { setTokens } from 'utils/setToken.ts'
import { coreApp } from '../../../../mod.ts'
import { getMeFn } from './getMe.fn.ts'
import { getMeValidator } from './getMe.val.ts'
import { setUser } from 'utils/setUser.ts'

export const getMeSetup = () =>
	coreApp.acts.setAct({
		schema: 'user',
		fn: getMeFn,
		actName: 'getMe',
		preAct: [setTokens, setUser],
		validator: getMeValidator(),
	})

export * from './getMe.fn.ts'
export * from './getMe.val.ts'
