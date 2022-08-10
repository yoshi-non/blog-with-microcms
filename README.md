# MicroCMSチュートリアル 簡易ブログ

## サーバ起動

npm run dev

## Next.jsとmicroCMSを繋げるSDKをインストール

npm i microcms-js-sdk

## microCMSと接続

libs > client.jsに以下のように書き接続させる。

```js

import { createClient } from "microcms-js-sdk"

export const client = createClient({
    serviceDomain: "microCMSで作ったdomain名を記載",
    apiKey: process.env.API_KEY
})

```

API_KEYは.env.localに記載。