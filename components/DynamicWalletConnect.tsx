'use client'
import dynamic from 'next/dynamic';

const WalletConnect = dynamic(() => import('./WalletConnect'), {
  ssr: false,
  loading: () => (
    <button className="px-3 py-1 rounded-lg border border-white/20 text-sm">
      Connect Wallet
    </button>
  ),
});

export default WalletConnect;
