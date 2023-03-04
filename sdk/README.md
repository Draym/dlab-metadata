# `@d-lab/metadata`

- **[API Documentation](https://)**

This package provides the api SDK of the DLab Metadata project

## Installation

```bash
npm i @d-lab/metadata
```

## Domain
#### Production: https://metadata.dlab.com

## Usage

```ts
import Client from '@d-lab/metadata'

// 1. specify your domain
const domain = "https://metadata.dlab.ovh"
const apiKey: string | null = "YOUR_API_KEY" // from dlab sso

// 2. create the client using domain and optional apiKey
const client = new Client(domain, apiKey)

// 3. get metadata
const payload: MetadataGetRequest = {
    chainId: Blockchain.ETHEREUM,
    collectionAddress: "0x23cb09531b6f604F5A4b05E03235082Bede0Ce6f",
    tokenId: 1
}
// metadata will be of type MetadataEthDto because the collection is on ethereum in this exemple
const metadata: MetadataEthDto | MetadataImxDto = await client.token.getMetadata(payload)
```