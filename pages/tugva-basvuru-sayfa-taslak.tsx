import { useState, useEffect } from 'react';

interface ProjeBilgisi {
    baslik: string;
    kisa_aciklama: string;
    detay_aciklama: string;
    icon: string;
    kategoriler: string[];
    ozellikler: string[];
    sure: string;
    basvuruTarihleri: string;
    hedefKitle: string;
    kontenjan: string;
    lokasyon: string;
    ucret: string;
    iletisim: string;
}

interface ProjeBilgileri {
    [key: number]: ProjeBilgisi;
}

export default function TugvaBasvuruSayfa() {
    // URL'den proje ID'sini simüle edelim (gerçek uygulamada URL'den gelecek)
    const [projeId] = useState(4); // Seninle 40 Hadis projesi örnek olarak
    
    // Kurumsal renkler
    const ana_renk = "#08a4d4"; // TÜGVA ana mavisi
    const ikincil_renk = "#2c3e50"; // Koyu gri-mavi
    const vurgu_renk = "#f39c12"; // Warm turuncu
    
    const projeBilgileri: ProjeBilgileri = {
        1: {
            baslik: "TÜGVA Yurtları",
            kisa_aciklama: "Eğitim hayatını destekleyen güvenli ve konforlu yurt ortamı",
            detay_aciklama: "Eğitim hayatını sadece derslerle değil; kültürel, sosyal ve manevi yönden de destekliyoruz. Modern imkanlar ve rehberlik hizmetleriyle geleceğe hazırlanın.",
            icon: "🏠",
            kategoriler: ["Üniversite", "Lise"],
            ozellikler: [
                "🛏️ Modern ve temiz odalar",
                "📚 Çalışma alanları ve kütüphane",
                "🍽️ Beslenme hizmetleri",
                "🏃‍♂️ Spor ve sosyal alanlar",
                "👨‍🏫 Akademik danışmanlık",
                "🔒 24/7 güvenlik hizmeti"
            ],
            sure: "Eğitim dönemi boyunca",
            basvuruTarihleri: "15 Haziran - 15 Eylül 2024",
            hedefKitle: "Üniversite ve Lise öğrencileri",
            kontenjan: "500 kişi",
            lokasyon: "İstanbul, Ankara, İzmir",
            ucret: "Uygun fiyat seçenekleri",
            iletisim: "yurt@tugva.org.tr"
        },
        4: {
            baslik: "Seninle 40 Hadis",
            kisa_aciklama: "Hadislerle manevi bir yolculuk",
            detay_aciklama: "40 hadis üzerinden gençlere ilham veren, anlamlı ve içten bir eğitim serisi. Her hafta farklı bir hadisi derinlemesine inceleyerek günlük yaşamımıza nasıl uygulayabileceğimizi öğreneceğiz.",
            icon: "📜",
            kategoriler: ["Üniversite", "Lise"],
            ozellikler: [
                "📖 40 seçkin hadisin detaylı incelenmesi",
                "🎯 Günlük yaşama uygulanabilir dersler",
                "👥 Grup tartışmaları ve değerlendirmeler",
                "📝 İnteraktif çalışma materyalleri",
                "🎓 Sertifika ve takdir belgesi",
                "📱 Online kaynak erişimi"
            ],
            sure: "8 hafta (16 saat eğitim)",
            basvuruTarihleri: "1 Mart - 30 Nisan 2024",
            hedefKitle: "16-25 yaş arası gençler",
            kontenjan: "150 kişi",
            lokasyon: "Online + İstanbul Merkez",
            ucret: "Ücretsiz",
            iletisim: "hadis@tugva.org.tr"
        }
    };

    const proje = projeBilgileri[projeId] || projeBilgileri[4];
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Dynamics Marketing script'ini yükle
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cxppusa1formui01cdnsa01-endpoint.azureedge.net/eur/FormLoader/FormLoader.bundle.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup: script'i kaldır
            const existingScript = document.querySelector('script[src*="FormLoader.bundle.js"]');
            if (existingScript) {
                document.body.removeChild(existingScript);
            }
        };
    }, []);

    const handleScrollToElement = (elementId: string) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>, isEnter: boolean) => {
        const target = e.target as HTMLButtonElement;
        if (isEnter) {
            target.style.transform = 'translateY(-3px) scale(1.02)';
            target.style.boxShadow = `0 12px 35px ${vurgu_renk}50`;
        } else {
            target.style.transform = 'translateY(0) scale(1)';
            target.style.boxShadow = `0 8px 25px ${vurgu_renk}40`;
        }
    };

    return (
        <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
            {/* Hero Section - Proje Tanıtımı */}
            <section style={{
                background: `linear-gradient(135deg, ${ana_renk} 0%, #0892c0 50%, ${ikincil_renk} 100%)`,
                color: 'white',
                padding: '120px 20px 100px',
                marginTop: '70px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Dinamik arka plan elementleri */}
                <div style={{
                    position: 'absolute',
                    top: '10%',
                    right: '5%',
                    width: '200px',
                    height: '200px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    borderRadius: '50%',
                    transform: `translateY(${scrollY * 0.1}px)`,
                    animation: 'pulse 4s ease-in-out infinite'
                }}></div>
                <div style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '8%',
                    width: '150px',
                    height: '150px',
                    background: 'rgba(243, 156, 18, 0.1)',
                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                    transform: `translateY(${scrollY * -0.05}px)`,
                    animation: 'rotate 20s linear infinite'
                }}></div>

                <div className="container" style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr',
                    gap: '80px',
                    alignItems: 'center'
                }}>
                    {/* Sol taraf - Ana içerik */}
                    <div style={{ zIndex: 2, position: 'relative' }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '20px',
                            marginBottom: '25px'
                        }}>
                            <span style={{ 
                                fontSize: '4rem',
                                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
                            }}>{proje.icon}</span>
                            <div>
                                {proje.kategoriler.map((kategori: string) => (
                                    <span key={kategori} style={{
                                        background: 'rgba(255, 255, 255, 0.15)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        padding: '8px 16px',
                                        borderRadius: '25px',
                                        fontSize: '0.95rem',
                                        fontWeight: '600',
                                        marginRight: '10px',
                                        display: 'inline-block',
                                        marginBottom: '5px'
                                    }}>
                                        {kategori}
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                        <h1 style={{
                            fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
                            fontWeight: '900',
                            marginBottom: '25px',
                            lineHeight: '1.1',
                            textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                            background: 'linear-gradient(135deg, #ffffff, #f8f9fa)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            {proje.baslik}
                        </h1>
                        
                        <p style={{
                            fontSize: '1.4rem',
                            opacity: '0.95',
                            marginBottom: '20px',
                            lineHeight: '1.6',
                            fontWeight: '500'
                        }}>
                            {proje.kisa_aciklama}
                        </p>
                        
                        <p style={{
                            fontSize: '1.1rem',
                            opacity: '0.85',
                            lineHeight: '1.7',
                            marginBottom: '40px'
                        }}>
                            {proje.detay_aciklama}
                        </p>

                        {/* CTA Button */}
                        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                            <button
                                onClick={() => handleScrollToElement('basvuru-formu')}
                                style={{
                                    background: `linear-gradient(135deg, ${vurgu_renk}, #e67e22)`,
                                    color: 'white',
                                    border: 'none',
                                    padding: '20px 40px',
                                    borderRadius: '50px',
                                    fontSize: '1.3rem',
                                    fontWeight: '700',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: `0 8px 25px ${vurgu_renk}40`,
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                                onMouseEnter={(e) => handleButtonHover(e, true)}
                                onMouseLeave={(e) => handleButtonHover(e, false)}
                            >
                                🚀 Hemen Başvur
                            </button>
                            
                            <button
                                onClick={() => handleScrollToElement('proje-detaylari')}
                                style={{
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    backdropFilter: 'blur(10px)',
                                    color: 'white',
                                    border: '2px solid rgba(255, 255, 255, 0.3)',
                                    padding: '18px 35px',
                                    borderRadius: '50px',
                                    fontSize: '1.1rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    const target = e.target as HTMLButtonElement;
                                    target.style.background = 'rgba(255, 255, 255, 0.2)';
                                    target.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    const target = e.target as HTMLButtonElement;
                                    target.style.background = 'rgba(255, 255, 255, 0.1)';
                                    target.style.transform = 'translateY(0)';
                                }}
                            >
                                📋 Detayları İncele
                            </button>
                        </div>
                    </div>

                    {/* Sağ taraf - Hızlı bilgiler kartı */}
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(15px)',
                        borderRadius: '25px',
                        padding: '40px',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '-50%',
                            right: '-50%',
                            width: '100%',
                            height: '100%',
                            background: 'rgba(243, 156, 18, 0.05)',
                            borderRadius: '50%'
                        }}></div>
                        
                        <h3 style={{
                            fontSize: '1.6rem',
                            fontWeight: '700',
                            marginBottom: '30px',
                            position: 'relative',
                            zIndex: 1
                        }}>
                            📊 Hızlı Bilgiler
                        </h3>
                        
                        <div style={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            gap: '20px',
                            position: 'relative',
                            zIndex: 1
                        }}>
                            {[
                                { icon: '⏰', label: 'Süre', value: proje.sure },
                                { icon: '📅', label: 'Başvuru', value: proje.basvuruTarihleri },
                                { icon: '👥', label: 'Hedef', value: proje.hedefKitle },
                                { icon: '📍', label: 'Lokasyon', value: proje.lokasyon }
                                
                            ].map((item, index) => (
                                <div key={index} style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '12px 0',
                                    borderBottom: index < 5 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
                                }}>
                                    <span style={{ 
                                        opacity: '0.9',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        fontSize: '1rem'
                                    }}>
                                        {item.icon} {item.label}:
                                    </span>
                                    <strong style={{ fontSize: '0.95rem', textAlign: 'right', maxWidth: '60%' }}>
                                        {item.value}
                                    </strong>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <style>{`
                    @keyframes pulse {
                        0%, 100% { transform: scale(1); opacity: 0.8; }
                        50% { transform: scale(1.1); opacity: 0.4; }
                    }
                    
                    @keyframes rotate {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }
                    
                    @media (max-width: 768px) {
                        .container {
                            grid-template-columns: 1fr !important;
                            gap: 40px !important;
                        }
                    }
                `}</style>
            </section>

            {/* Proje Detayları Section */}
            <main id="proje-detaylari" style={{ 
                maxWidth: '1200px', 
                margin: '0 auto', 
                padding: '100px 20px' 
            }}>
                {/* Özellikler Grid */}
                <section style={{ marginBottom: '100px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{
                            fontSize: '3rem',
                            fontWeight: '800',
                            color: ikincil_renk,
                            marginBottom: '20px'
                        }}>
                            ✨ Proje Avantajları
                        </h2>
                        <div style={{
                            width: '80px',
                            height: '4px',
                            background: `linear-gradient(90deg, ${ana_renk}, ${vurgu_renk})`,
                            margin: '0 auto 25px',
                            borderRadius: '2px'
                        }}></div>
                        <p style={{
                            fontSize: '1.3rem',
                            color: '#666',
                            maxWidth: '600px',
                            margin: '0 auto',
                            lineHeight: '1.6'
                        }}>
                            Bu projede sizi bekleyen eşsiz fırsatlar ve kazanımlar
                        </p>
                    </div>
                    
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '30px'
                    }}>
                        {proje.ozellikler.map((ozellik: string, index: number) => (
                            <div
                                key={index}
                                style={{
                                    background: 'white',
                                    padding: '35px',
                                    borderRadius: '20px',
                                    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.08)',
                                    border: '1px solid #f0f0f0',
                                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                                onMouseEnter={(e) => {
                                    const target = e.currentTarget;
                                    target.style.transform = 'translateY(-8px)';
                                    target.style.boxShadow = `0 25px 50px ${ana_renk}15`;
                                    target.style.borderColor = ana_renk;
                                }}
                                onMouseLeave={(e) => {
                                    const target = e.currentTarget;
                                    target.style.transform = 'translateY(0)';
                                    target.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.08)';
                                    target.style.borderColor = '#f0f0f0';
                                }}
                            >
                                <div style={{
                                    position: 'absolute',
                                    top: '0',
                                    left: '0',
                                    width: '100%',
                                    height: '4px',
                                    background: `linear-gradient(90deg, ${ana_renk}, ${vurgu_renk})`
                                }}></div>
                                
                                <p style={{
                                    fontSize: '1.3rem',
                                    color: ikincil_renk,
                                    fontWeight: '600',
                                    margin: '0',
                                    lineHeight: '1.6'
                                }}>
                                    {ozellik}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Başvuru Formu Section */}
            <section id="basvuru-formu" style={{
                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                padding: '100px 20px'
            }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{
                        background: 'white',
                        borderRadius: '25px',
                        boxShadow: '0 25px 70px rgba(0, 0, 0, 0.1)',
                        overflow: 'hidden'
                    }}>
                        {/* Form Header */}
                        <div style={{
                            background: `linear-gradient(135deg, ${ana_renk} 0%, #0892c0 100%)`,
                            color: 'white',
                            padding: '50px 40px',
                            textAlign: 'center',
                            position: 'relative'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '-50px',
                                left: '-50px',
                                width: '150px',
                                height: '150px',
                                background: 'rgba(255, 255, 255, 0.1)',
                                borderRadius: '50%'
                            }}></div>
                            
                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <h2 style={{
                                    fontSize: '2.8rem',
                                    fontWeight: '800',
                                    marginBottom: '20px'
                                }}>
                                    Başvuru Formu
                                </h2>
                                <p style={{
                                    fontSize: '1.3rem',
                                    opacity: '0.95',
                                    marginBottom: '25px',
                                    fontWeight: '500'
                                }}>
                                </p>
                            </div>
                        </div>

                        {/* Dynamics Marketing Embed Alanı */}
                        <div style={{
                            padding: '60px 40px',
                            background: 'white',
                            minHeight: '600px'
                        }}>
                            {/* Form embed alanı */}
                            <div
                                data-form-id='e19be403-4a56-f011-877b-7ced8d42a435'
                                data-form-api-url='https://public-eur.mkt.dynamics.com/api/v1.0/orgs/97c73e55-bfd3-ed11-aed0-000d3a64dc63/landingpageforms'
                                data-cached-form-url='https://assets-eur.mkt.dynamics.com/97c73e55-bfd3-ed11-aed0-000d3a64dc63/digitalassets/standaloneforms/0bc84e2b-a930-f011-8c4e-0022489aeafa'
                            ></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}