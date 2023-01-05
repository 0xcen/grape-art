import type { EndpointTypes } from './models/types';
import { Connection } from '@solana/web3.js';
import type { EndpointInfo } from './types/types';

const ENDPOINTS: EndpointInfo[] = [
    {
        name: 'mainnet',
        url: 'https://delicate-proportionate-haze.solana-mainnet.discover.quiknode.pro/8fe803961e6fb67a6741c5885201221fb69c2f27/',
    },
    {
        name: 'devnet',
        url: process.env.DEVNET_RPC || 'https://psytrbhymqlkfrhudd.dev.genesysgo.net:8899',
    },
    {
        name: 'localnet',
        url: 'http://127.0.0.1:8899',
    },
];

console.log('deployed ENDPOINTS:', ENDPOINTS);

export interface ConnectionContext {
    cluster: EndpointTypes;
    current: Connection;
    endpoint: string;
}

export function getConnectionContext(cluster: string): ConnectionContext {
    const ENDPOINT = ENDPOINTS.find((e) => e.name === cluster) || ENDPOINTS[0];
    return {
        cluster: ENDPOINT!.name as EndpointTypes,
        current: new Connection(ENDPOINT!.url, 'recent'),
        endpoint: ENDPOINT!.url,
    };
}
