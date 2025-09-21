'use client'
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultConfig, RainbowKitProvider, ConnectButton } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, base, sepolia } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const config = getDefaultConfig({
  appName: 'AutoStrata',
  projectId: 'AUTO-STRATA-DEMO', // Replace with your WalletConnect Cloud ID for production
  chains: [mainnet, base, polygon, optimism, arbitrum, sepolia],
  ssr: true,
});

const queryClient = new QueryClient();

export default function WalletConnect(){
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <ConnectButton label="Connect wallet" chainStatus="icon" showBalance={false} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
