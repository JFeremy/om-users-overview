
import { createLoader, parseAsStringEnum } from 'nuqs/server'

import { Tabs } from '../models/navigation.model'

export const sectionParser = parseAsStringEnum<Tabs>(Object.values(Tabs))
export const sectionSearchParams = {
    section: sectionParser.withDefault(Tabs.GRAPH)
}

export const loadSearchParams = createLoader(sectionSearchParams)