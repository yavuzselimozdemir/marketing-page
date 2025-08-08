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

export default function TugvaInteractiveVariant() {
    const [activeStep, setActiveStep] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isVisible, setIsVisible] = useState<{[key: string]: boolean}>({});
    
    // Warm storytelling renk paleti
    const ana_renk = "#2c3e50";
    const accent_renk = "#e74c3c";
    const warm_renk = "#f39c12";
    const soft_renk = "#ecf0f1";

    const projeBilgileri: ProjeBilgileri = {
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

    const proje = projeBilgileri[4];
    
    const journeySteps = [
        {
            title: "Keşfet",
            description: "40 değerli hadisi keşfederek yolculuğa başla",
            icon: "🔍",
            color: "#3498db"
        },
        {
            title: "Öğren",
            description: "Her hadisi derinlemesine inceleyin ve anlayın",
            icon: "📚",
            color: warm_renk
        },
        {
            title: "Uygula",
            description: "Öğrendiklerinizi günlük yaşamınıza entegre edin",
            icon: "⚡",
            color: accent_renk
        },
        {
            title: "Paylaş",
            description: "Deneyimlerinizi grup ile paylaşın ve tartışın",
            icon: "💬",
            color: "#27ae60"
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
            setScrollProgress((scrolled / maxHeight) * 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(prev => ({
                        ...prev,
                        [entry.target.id]: entry.isIntersecting
                    }));
                });
            },
            { threshold: 0.3 }
        );

        document.querySelectorAll('[id]').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div style={{ 
            fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
            position: 'relative'
        }}>
            {/* Scroll Progress Bar */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: `${scrollProgress}%`,
                height: '4px',
                background: `linear-gradient(90deg, ${accent_renk}, ${warm_renk})`,
                zIndex: 1000,
                transition: 'width 0.1s ease'
            }}></div>

            {/* Hero - Storytelling Approach */}
            <section style={{
                minHeight: '100vh',
                background: `linear-gradient(135deg, ${ana_renk} 0%, #34495e 100%)`,
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Animated background elements */}
                <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle at 30% 70%, rgba(231,76,60,0.1) 0%, transparent 50%)',
                    animation: 'float 6s ease-in-out infinite'
                }}></div>
                
                <div style={{ 
                    maxWidth: '1200px', 
                    margin: '0 auto', 
                    padding: '0 60px',
                    zIndex: 2,
                    width: '100%'
                }}>
                    <div style={{
                        textAlign: 'center',
                        color: 'white'
                    }}>
                        <div style={{
                            fontSize: '6rem',
                            marginBottom: '30px',
                            animation: 'pulse 2s ease-in-out infinite'
                        }}>
                            📜
                        </div>
                        
                        <h1 style={{
                            fontSize: 'clamp(3rem, 8vw, 5rem)',
                            fontWeight: '800',
                            marginBottom: '30px',
                            background: 'linear-gradient(135deg, #fff, #ecf0f1)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            lineHeight: '1.2'
                        }}>
                            Seninle 40 Hadis
                        </h1>
                        
                        <p style={{
                            fontSize: '1.8rem',
                            marginBottom: '20px',
                            opacity: '0.9',
                            maxWidth: '800px',
                            margin: '0 auto 50px'
                        }}>
                            Her hadis bir hikaye, her hikaye bir ders
                        </p>
                        
                        <div style={{
                            background: 'rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '20px',
                            padding: '30px',
                            maxWidth: '600px',
                            margin: '0 auto 50px',
                            border: '1px solid rgba(255,255,255,0.2)'
                        }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '30px', textAlign: 'center' }}>
                                <div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: '700', color: warm_renk }}>40</div>
                                    <div style={{ opacity: '0.8' }}>Hadis</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#3498db' }}>8</div>
                                    <div style={{ opacity: '0.8' }}>Hafta</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: '700', color: accent_renk }}>150</div>
                                    <div style={{ opacity: '0.8' }}>Kişi</div>
                                </div>
                            </div>
                        </div>
                        
                        <button
                            onClick={() => scrollToSection('journey-section')}
                            style={{
                                background: `linear-gradient(135deg, ${accent_renk}, #c0392b)`,
                                color: 'white',
                                border: 'none',
                                padding: '20px 50px',
                                borderRadius: '50px',
                                fontSize: '1.3rem',
                                fontWeight: '700',
                                cursor: 'pointer',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                boxShadow: '0 10px 30px rgba(231,76,60,0.3)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                                e.currentTarget.style.boxShadow = '0 15px 40px rgba(231,76,60,0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(231,76,60,0.3)';
                            }}
                        >
                            Yolculuğa Başla 🚀
                        </button>
                    </div>
                </div>

                <style>{`
                    @keyframes float {
                        0%, 100% { transform: translateY(0px) rotate(0deg); }
                        50% { transform: translateY(-20px) rotate(5deg); }
                    }
                    
                    @keyframes pulse {
                        0%, 100% { transform: scale(1); }
                        50% { transform: scale(1.05); }
                    }
                `}</style>
            </section>
            {/* Journey Steps Section */}
            <section id="journey-section" style={{
                padding: '120px 0',
                background: `linear-gradient(to bottom, #f8f9fa, ${soft_renk})`,
                position: 'relative'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 60px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                            fontWeight: '800',
                            color: ana_renk,
                            marginBottom: '30px'
                        }}>
                            Öğrenme Yolculuğun
                        </h2>
                        <p style={{
                            fontSize: '1.4rem',
                            color: '#7f8c8d',
                            maxWidth: '600px',
                            margin: '0 auto'
                        }}>
                            4 adımda hadislerin derinliklerini keşfet
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '40px',
                        marginBottom: '80px'
                    }}>
                        {journeySteps.map((step, index) => (
                            <div
                                key={index}
                                style={{
                                    background: 'white',
                                    borderRadius: '25px',
                                    padding: '40px 30px',
                                    textAlign: 'center',
                                    boxShadow: isVisible['journey-section'] ? '0 15px 35px rgba(0,0,0,0.1)' : '0 5px 15px rgba(0,0,0,0.05)',
                                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                                    transform: isVisible['journey-section'] ? `translateY(0) scale(1)` : 'translateY(50px) scale(0.9)',
                                    opacity: isVisible['journey-section'] ? 1 : 0,
                                    transitionDelay: `${index * 0.2}s`,
                                    cursor: 'pointer',
                                    border: activeStep === index ? `3px solid ${step.color}` : '3px solid transparent'
                                }}
                                onClick={() => setActiveStep(index)}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                }}
                            >
                                <div style={{
                                    fontSize: '4rem',
                                    marginBottom: '20px',
                                    transition: 'transform 0.3s ease'
                                }}>
                                    {step.icon}
                                </div>
                                <h3 style={{
                                    fontSize: '1.8rem',
                                    fontWeight: '700',
                                    color: ana_renk,
                                    marginBottom: '15px'
                                }}>
                                    {step.title}
                                </h3>
                                <p style={{
                                    color: '#7f8c8d',
                                    fontSize: '1.1rem',
                                    lineHeight: '1.6'
                                }}>
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Program Details Section */}
            <section id="details-section" style={{
                padding: '120px 0',
                background: `linear-gradient(135deg, ${ana_renk} 0%, #2c3e50 100%)`,
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Background Pattern */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `radial-gradient(circle at 70% 30%, rgba(243,156,18,0.1) 0%, transparent 50%)`,
                    zIndex: 1
                }}></div>

                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 60px', position: 'relative', zIndex: 2 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                        {/* Sol taraf - Program özellikleri */}
                        <div style={{
                            transform: isVisible['details-section'] ? 'translateX(0)' : 'translateX(-50px)',
                            opacity: isVisible['details-section'] ? 1 : 0,
                            transition: 'all 0.8s ease'
                        }}>
                            <h2 style={{
                                fontSize: '3rem',
                                fontWeight: '800',
                                marginBottom: '40px',
                                background: `linear-gradient(135deg, ${warm_renk}, ${accent_renk})`,
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>
                                Program Özellikleri
                            </h2>
                            
                            <div style={{ marginBottom: '40px' }}>
                                {proje.ozellikler.map((ozellik, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            marginBottom: '20px',
                                            padding: '15px 20px',
                                            background: 'rgba(255,255,255,0.1)',
                                            borderRadius: '15px',
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(255,255,255,0.2)',
                                            transition: 'all 0.3s ease',
                                            transform: isVisible['details-section'] ? 'translateX(0)' : 'translateX(-30px)',
                                            opacity: isVisible['details-section'] ? 1 : 0,
                                            transitionDelay: `${index * 0.1}s`
                                        }}
                                    >
                                        <span style={{ fontSize: '1.2rem', marginRight: '15px' }}>✨</span>
                                        <span style={{ fontSize: '1.1rem' }}>{ozellik}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sağ taraf - Program bilgileri */}
                        <div style={{
                            background: 'rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(20px)',
                            borderRadius: '30px',
                            padding: '50px',
                            border: '1px solid rgba(255,255,255,0.2)',
                            transform: isVisible['details-section'] ? 'translateX(0) scale(1)' : 'translateX(50px) scale(0.9)',
                            opacity: isVisible['details-section'] ? 1 : 0,
                            transition: 'all 0.8s ease'
                        }}>
                            <h3 style={{
                                fontSize: '2rem',
                                fontWeight: '700',
                                marginBottom: '40px',
                                color: warm_renk
                            }}>
                                Program Detayları
                            </h3>
                            
                            <div style={{ display: 'grid', gap: '25px' }}>
                                {[
                                    { icon: '⏱️', label: 'Süre', value: proje.sure },
                                    { icon: '📅', label: 'Başvuru', value: proje.basvuruTarihleri },
                                    { icon: '👥', label: 'Hedef Kitle', value: proje.hedefKitle },
                                    { icon: '👤', label: 'Kontenjan', value: proje.kontenjan },
                                    { icon: '📍', label: 'Lokasyon', value: proje.lokasyon },
                                    { icon: '💰', label: 'Ücret', value: proje.ucret }
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: '20px 0',
                                            borderBottom: '1px solid rgba(255,255,255,0.1)'
                                        }}
                                    >
                                        <span style={{ fontSize: '1.5rem', marginRight: '20px' }}>{item.icon}</span>
                                        <div>
                                            <div style={{ fontSize: '0.9rem', opacity: '0.8', marginBottom: '5px' }}>
                                                {item.label}
                                            </div>
                                            <div style={{ fontSize: '1.2rem', fontWeight: '600' }}>
                                                {item.value}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section style={{
                padding: '120px 0',
                background: `linear-gradient(to right, ${warm_renk}, ${accent_renk})`,
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                    animation: 'movePattern 20s linear infinite'
                }}></div>

                <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 60px', position: 'relative', zIndex: 2 }}>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                        fontWeight: '800',
                        color: 'white',
                        marginBottom: '30px',
                        textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                    }}>
                        Hazır mısın?
                    </h2>
                    
                    <p style={{
                        fontSize: '1.6rem',
                        color: 'white',
                        marginBottom: '50px',
                        opacity: '0.95',
                        lineHeight: '1.6'
                    }}>
                        40 hadis ile başlayacak bu manevi yolculukta sen de yer al
                    </p>
                    
                    <div style={{
                        background: 'rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(15px)',
                        borderRadius: '20px',
                        padding: '40px',
                        marginBottom: '40px',
                        border: '1px solid rgba(255,255,255,0.3)'
                    }}>
                        <div style={{
                            fontSize: '1.2rem',
                            color: 'white',
                            marginBottom: '20px',
                            fontWeight: '600'
                        }}>
                            İletişim Bilgileri
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: '1.4rem',
                            color: 'white'
                        }}>
                            <span style={{ marginRight: '15px' }}>📧</span>
                            <a 
                                href={`mailto:${proje.iletisim}`}
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                    fontWeight: '700',
                                    borderBottom: '2px solid rgba(255,255,255,0.5)',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderBottomColor = 'white';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.5)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                {proje.iletisim}
                            </a>
                        </div>
                    </div>
                    
                    <button
                        style={{
                            background: 'white',
                            color: accent_renk,
                            border: 'none',
                            padding: '25px 60px',
                            borderRadius: '50px',
                            fontSize: '1.4rem',
                            fontWeight: '800',
                            cursor: 'pointer',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                            e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.3)';
                            e.currentTarget.style.background = soft_renk;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                            e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.2)';
                            e.currentTarget.style.background = 'white';
                        }}
                        onClick={() => window.open(`mailto:${proje.iletisim}?subject=Seninle 40 Hadis Programı Başvurusu`, '_blank')}
                    >
                        Şimdi Başvur 🌟
                    </button>
                </div>

                <style>{`
                    @keyframes movePattern {
                        0% { transform: translate(0, 0); }
                        100% { transform: translate(50px, 50px); }
                    }
                `}</style>
            </section>

            {/* Footer */}
            <footer style={{
                background: ana_renk,
                color: 'white',
                padding: '60px 0 30px',
                textAlign: 'center'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 60px' }}>
                    <div style={{
                        fontSize: '3rem',
                        marginBottom: '20px'
                    }}>
                        📜
                    </div>
                    
                    <h3 style={{
                        fontSize: '2rem',
                        fontWeight: '700',
                        marginBottom: '20px',
                        background: `linear-gradient(135deg, ${warm_renk}, ${accent_renk})`,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Seninle 40 Hadis
                    </h3>
                    
                    <p style={{
                        fontSize: '1.2rem',
                        marginBottom: '40px',
                        opacity: '0.8',
                        maxWidth: '600px',
                        margin: '0 auto 40px'
                    }}>
                        Her hadis bir hikaye, her hikaye hayatına dokunacak bir ders
                    </p>
                    
                    <div style={{
                        borderTop: '1px solid rgba(255,255,255,0.2)',
                        paddingTop: '30px',
                        fontSize: '1rem',
                        opacity: '0.6'
                    }}>
                        © 2024 TUGVA - Türkiye Gençlik Vakfı
                    </div>
                </div>
            </footer>
        </div>
    );
}