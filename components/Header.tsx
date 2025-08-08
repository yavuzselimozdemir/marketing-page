import { useEffect } from 'react';

export default function Header() {
    useEffect(() => {
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navMenu = document.getElementById('navMenu');

        if (mobileMenuBtn && navMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });
        }
    }, []);

    return (
        <header className="header">
            <div className="nav-container">
                <a href="#" className="logo">TÜGVA</a>
                <nav>
                    <ul className="nav-menu" id="navMenu">
                        <li><a href="https://basvuru.tugva.org/">Anasayfa</a></li>
                        <li><a href="https://tugva.org/hakkimizda">Hakkımızda</a></li>
                        <li><a href="https://tugva.org/yurtlar">Yurtlar</a></li>
                        <li><a href="https://tugva.org/tugva-icathane">İcathane</a></li>
                        <li><a href="https://tugva.org/i%CC%87letisim">İletişim</a></li>
                    </ul>
                    <button className="mobile-menu-btn" id="mobileMenuBtn">☰</button>
                </nav>
            </div>
        </header>
    );
}
