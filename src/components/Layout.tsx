'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router'; // Import useRouter
import { Home, GamepadIcon, History } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useAccount } from 'wagmi';
import { toast } from 'react-hot-toast'; 
import Image from 'next/image';
// import Providers from './providers';
import { useConnect, useDisconnect } from 'wagmi';
import { useEffect, useMemo } from 'react';
import { ConnectButton, connectorsForWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { argentWallet, coinbaseWallet, imTokenWallet, injectedWallet, ledgerWallet, metaMaskWallet, omniWallet, rainbowWallet, trustWallet, walletConnectWallet } from '@rainbow-me/rainbowkit/wallets';

import '@rainbow-me/rainbowkit/styles.css';

// import { configureChains, createConfig, WagmiConfig } from 'wagmi';
// import { arbitrum, mainnet, optimism, polygon } from 'wagmi/chains';
// import { publicProvider } from 'wagmi/providers/public';


const ProvidersWrapper = dynamic(() => import('./providers'), {
  ssr: false
});
const NAV_ITEMS = [
  {
    path: '/',
    label: 'Home',
    icon: Home,
  },
  {
    path: '/game',
    label: 'Game',
    icon: GamepadIcon,
  },
  {
    path: '/history',
    label: 'History',
    icon: History,
  },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const { isConnected } = useAccount();
  const router = useRouter(); // Initialize useRouter


  const handleLinkClick = (path: string) => {
    if (!isConnected && path !== '/') {
      toast.error('Please connect your wallet to access this feature.'); // Show error message
    }
  };

  return (
    <ProvidersWrapper>
      <div className='flex flex-col min-h-screen bg-gray-800'>
        {/* Header */}
        <header className='fixed top-0 left-0 right-0 h-14 bg-gray-900 shadow-lg z-50'>
          <div className='flex items-center justify-between h-full px-4'>
            <div className="flex items-center">
              <Image
                src='/rps-img.webp'
                alt='Rock Paper scissor'
                width={40}
                height={40}
                className='mr-2 animate-pulse hover:animate-spin'
              />
              <span className="text-gradient font-bold text-lg">CORE BATTLE ARENA</span>
            </div>
            {/* <ConnectButton /> */}
          </div>
        </header>

        {/* Main Content */}
        <main className='flex-1 mt-14 mb-16 overflow-y-auto bg-gradient-to-b from-gray-900 to-gray-800'>
          <div className='container mx-auto px-4 py-6 max-w-lg'>{children}</div>
        </main>

        {/* Footer Navigation */}
        <footer className='fixed bottom-0 left-0 right-0 h-16 bg-gray-900 border-t border-gray-700 shadow-lg'>
          <nav className='h-full'>
            <ul className='flex items-center justify-around h-full'>
              {NAV_ITEMS.map(({ path, label, icon: Icon }) => {
                const isActive =
                  pathname === path ||
                  (path === '/game' && router.asPath.startsWith('/game'));
                return (
                  <li key={path} className='flex-1'>
                    <Link
                      href={isConnected || path === '/' ? path : '#'}
                      onClick={() => handleLinkClick(path)}
                      className={`flex flex-col items-center justify-center h-full transition-all duration-200 ${
                        isActive
                          ? 'text-blue-400 scale-110'
                          : 'text-gray-400 hover:text-white hover:scale-105'
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${isActive ? 'animate-pulse' : ''}`} />
                      <span className='text-xs mt-1'>{label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </footer>
      </div>
    </ProvidersWrapper>
  );
};

export default Layout;
