'use client';
import { useState } from 'react';

import Link from 'next/link';
import styles from './style.module.scss';

import { FaBars } from 'react-icons/fa';
import { useWidthHook } from '@/hook/useWidthHook';

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const { windowSize } = useWidthHook();

  const toggleMenu = () => setOpenMenu((prevState) => !prevState);

  return (
    <header className={styles.headerContainer}>
      <Link href="/">
        <h1>Diego Ramos</h1>
      </Link>

      <nav className={styles.navContainer}>
        <button className={styles.buttonMobile} onClick={toggleMenu}>
          <FaBars width={500} height={500} />
        </button>
        <ul
          className={`${
            openMenu && windowSize < 769 ? styles.active : styles.ulContainer
          }`}
        >
          <li>
            <Link href="/" onClick={() => toggleMenu()}>
              Home
            </Link>
          </li>

          <li>
            <Link href="/tecnologias" onClick={() => toggleMenu()}>
              Tecnologias
            </Link>
          </li>

          <li>
            <Link href="/projetos" onClick={() => toggleMenu()}>
              Projetos
            </Link>
          </li>

          <li>
            <Link href="/sobre-mim" onClick={() => toggleMenu()}>
              Sobre mim
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
