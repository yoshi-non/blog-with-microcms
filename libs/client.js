import { createClient } from "microcms-js-sdk"

export const client = createClient({
    serviceDomain: "yoshinons-blog",
    apiKey: process.env.API_KEY
})