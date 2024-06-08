import { citySetup } from './city/mod.ts'
import { formSetup } from "./form/mod.ts"
import { letterSetup } from './letter/mod.ts'
import { orgSetup } from './org/mod.ts'
import { positionSetup } from './position/mod.ts'
import { predefletterSetup } from './predefletter/mod.ts'
import { prioritySetup } from './priority/mod.ts'
import { provinceSetup } from './province/mod.ts'
import { questionSetup } from './question/mod.ts'
import { refferSetup } from './reffer/mod.ts'
import { unitSetup } from './unit/mod.ts'
import { userSetup } from './user/mod.ts'

export const dynamicSetup = () => {
	provinceSetup(),
	citySetup(),
	userSetup(),
	orgSetup(),
	unitSetup(),
	letterSetup(),
	positionSetup(),
	predefletterSetup(),
	refferSetup(),
	prioritySetup(),
	formSetup(),
	questionSetup()
}
