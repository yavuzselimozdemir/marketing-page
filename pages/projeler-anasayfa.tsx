import { useState } from 'react';

// Proje tipi tanımı
interface Proje {
    id: number;
    baslik: string;
    kisa_aciklama: string;
    detay_aciklama: string;
    icon: string;
    kategoriler: string[];
    aktif: boolean;
    basvuru_url: string;
    renk: string;
    populer?: boolean;
    yeni?: boolean;
    yakinda?: boolean;
}

export default function TugvaAnasayfa() {
    // Proje verilerini revize ettim - çoklu kategoriler ve eğitim seviyesi bazlı kategoriler
    const [projeler] = useState<Proje[]>([
        {
            id: 1,
            baslik: "TÜGVA Yurtları",
            kisa_aciklama: "Eğitim hayatını destekleyen güvenli ve konforlu yurt ortamı",
            detay_aciklama: "Eğitim hayatını sadece derslerle değil; kültürel, sosyal ve manevi yönden de destekliyoruz. Modern imkanlar ve rehberlik hizmetleriyle geleceğe hazırlanın.",
            icon: "🏠",
            kategoriler: ["Üniversite", "Lise"],
            aktif: true,
            basvuru_url: "/yurt",
            renk: "#08a4d4",
            populer: true
        },
        {
            id: 2,
            baslik: "Yaz Okulu",
            kisa_aciklama: "Gençlere dolu dolu bir yaz eğitim serüveni",
            detay_aciklama: "Kur'an, temel dini bilgiler ve sportif etkinliklerle hem ruhu hem bedeni besleyen bir yaz deneyimi.",
            icon: "🏖️",
            kategoriler: ["Lise", "Ortaokul"],
            aktif: true,
            basvuru_url: "/projeler/yaz-okulu",
            renk: "#f39c12"
        },
        {
            id: 3,
            baslik: "Vakıf Okulu",
            kisa_aciklama: "Gençlere sosyal, kültürel ve manevi gelişim imkânı",
            detay_aciklama: "Spor, seminer, gezi ve dini eğitimle zenginleştirilmiş kapsamlı bir öğrenim ortamı.",
            icon: "🏫",
            kategoriler: ["Lise"],
            aktif: true,
            basvuru_url: "/projeler/vakif-okulu",
            renk: "#27ae60"
        },
        {
            id: 4,
            baslik: "Seninle 40 Hadis",
            kisa_aciklama: "Hadislerle manevi bir yolculuk",
            detay_aciklama: "40 hadis üzerinden gençlere ilham veren, anlamlı ve içten bir eğitim serisi.",
            icon: "📜",
            kategoriler: ["Üniversite", "Lise"],
            aktif: true,
            basvuru_url: "/projeler/seninle-40-hadis",
            renk: "#e74c3c",
            populer: true
        },
        {
            id: 5,
            baslik: "Kitap Kurdu",
            kisa_aciklama: "Okuma kültürünü gençlerle buluşturmak",
            detay_aciklama: "Okuma saatleri ve grup tartışmalarıyla gençlerde edebi merak ve düşünsel gelişim.",
            icon: "📚",
            kategoriler: ["Üniversite", "Lise", "Ortaokul"],
            aktif: true,
            basvuru_url: "/projeler/kitap-kurdu",
            renk: "#8e44ad"
        },
        {
            id: 6,
            baslik: "Doğa Kampı",
            kisa_aciklama: "Doğayla bütünleşen gençlik deneyimi",
            detay_aciklama: "Doğanın içinde takım ruhu, keşif ve bireysel gelişim odaklı kamp deneyimi.",
            icon: "🏕️",
            kategoriler: ["Lise", "Ortaokul"],
            aktif: true,
            basvuru_url: "/projeler/doga-kampi",
            renk: "#3498db"
        },
        {
            id: 7,
            baslik: "Enderun Okulu",
            kisa_aciklama: "Sanat, kültür ve bilimde donanım",
            detay_aciklama: "Gençlere sanat ve kültür alanında donanımlı birey olma yolunda rehberlik eden eğitim.",
            icon: "🎓",
            kategoriler: ["Üniversite"],
            aktif: true,
            basvuru_url: "/projeler/endurun-okulu",
            renk: "#c0392b",
            yeni: true
        },
        {
            id: 8,
            baslik: "Genç Lig",
            kisa_aciklama: "Sporda gençlere sağlıklı rekabet alanı",
            detay_aciklama: "Turnuva ve spor etkinlikleriyle gençlerde takım ruhu ve fiziksel gelişim oluşturma.",
            icon: "⚽",
            kategoriler: ["Üniversite", "Lise", "Ortaokul"],
            aktif: true,
            basvuru_url: "/projeler/genc-lig",
            renk: "#d35400"
        },
        {
            id: 9,
            baslik: "Türkiye Münazara Yarışması",
            kisa_aciklama: "Gençlere münazara sahnesinde söz hakkı",
            detay_aciklama: "Tartışma teknikleri ve ifade becerilerini geliştirmeye yönelik ulusal düzeyde yarışma.",
            icon: "🎙️",
            kategoriler: ["Üniversite", "Lise"],
            aktif: true,
            basvuru_url: "/projeler/turkiye-munazara-yarismasi",
            renk: "#16a085",
            populer: true
        },
        {
            id: 10,
            baslik: "İhtisas Akademi",
            kisa_aciklama: "Uzmanlık alanlarında derinleşme fırsatı",
            detay_aciklama: "Alanlarında uzmanlık kazandırmayı amaçlayan, disiplin odaklı akademik program.",
            icon: "🏛️",
            kategoriler: ["Üniversite"],
            aktif: true,
            basvuru_url: "/projeler/ihtisas-akademi",
            renk: "#2980b9"
        },
        {
            id: 11,
            baslik: "Genç Yönetici Okulu",
            kisa_aciklama: "Liderlik ve yönetim becerileri kazandıran eğitim",
            detay_aciklama: "Gençleri liderlik, organizasyon ve yönetim becerileriyle donatan kapsayıcı bir eğitim serisi.",
            icon: "👔",
            kategoriler: ["Üniversite", "Lise"],
            aktif: false,
            basvuru_url: "/projeler/genc-yonetici-okulu",
            renk: "#e67e22",
            yakinda: true
        },
        {
            id: 12,
            baslik: "İcathane",
            kisa_aciklama: "Teknoloji cart curt",
            detay_aciklama: "Gençleri liderlik, organizasyon ve yönetim becerileriyle donatan kapsayıcı bir eğitim serisi.",
            icon: "🤖",
            kategoriler: ["Ortaokul", "Lise"],
            aktif: true,
            basvuru_url: "/projeler/icathane",
            renk: "#08a4d4",
        }

    ]);

    const [seciliKategori, setSeciliKategori] = useState('Tümü');
    const [aramaMetni, setAramaMetni] = useState('');
    
    // Eğitim seviyesi kategorileri
    const kategoriler = ['Tümü', 'Üniversite', 'Lise', 'Ortaokul'];
    
    // Filtrelenmiş projeler - arama ve kategori filtresi
    const filtreliProjeler = projeler.filter(proje => {
        const kategoriUygun = seciliKategori === 'Tümü' || proje.kategoriler.includes(seciliKategori);
        const aramaUygun = proje.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) ||
                          proje.kisa_aciklama.toLowerCase().includes(aramaMetni.toLowerCase());
        return kategoriUygun && aramaUygun;
    });

    // Popüler projeler
    const populerProjeler = projeler.filter(proje => proje.populer);

    const handleBasvuru = (proje: Proje) => {
        if (proje.aktif) {
            window.location.href = proje.basvuru_url;
        }
    };

    return (
        <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
            {/* Hero Section - Geliştirilmiş */}
            <section className="hero" style={{
                background: 'linear-gradient(135deg, #08a4d4 0%, #0892c0 100%)',
                color: 'white',
                textAlign: 'center',
                padding: '150px 20px 100px',
                marginTop: '70px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Arka plan şekilleri */}
                <div style={{
                    position: 'absolute',
                    top: '-50px',
                    right: '-50px',
                    width: '200px',
                    height: '200px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    animation: 'float 6s ease-in-out infinite'
                }}></div>
                <div style={{
                    position: 'absolute',
                    bottom: '-100px',
                    left: '-100px',
                    width: '300px',
                    height: '300px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '50%',
                    animation: 'float 8s ease-in-out infinite reverse'
                }}></div>

                <div className="hero-content" style={{
                    maxWidth: '900px',
                    margin: '0 auto',
                    position: 'relative',
                    zIndex: 1
                }}>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        marginBottom: '25px',
                        fontWeight: '800',
                        letterSpacing: '-2px',
                        textShadow: '0 4px 8px rgba(0,0,0,0.2)'
                    }}>
                        Geleceğini <span style={{color: '#FFD700'}}>TÜGVA</span> ile Şekillendir
                    </h1>
                    <p style={{
                        fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                        marginBottom: '40px',
                        opacity: '0.95',
                        lineHeight: '1.8',
                        maxWidth: '600px',
                        margin: '0 auto 40px'
                    }}>
                        Eğitimden spora, sanattan teknolojiye kadar geniş bir yelpazede 
                        gençlerin potansiyelini ortaya çıkaran projelerimizle tanışın.
                    </p>
                    
                    {/* CTA Butonları */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '20px',
                        flexWrap: 'wrap'
                    }}>
                        <button style={{
                            background: 'rgba(255, 255, 255, 0.2)',
                            backdropFilter: 'blur(10px)',
                            color: 'white',
                            border: '2px solid rgba(255, 255, 255, 0.3)',
                            padding: '15px 30px',
                            borderRadius: '50px',
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            const target = e.target as HTMLButtonElement;
                            target.style.background = 'rgba(255, 255, 255, 0.3)';
                            target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            const target = e.target as HTMLButtonElement;
                            target.style.background = 'rgba(255, 255, 255, 0.2)';
                            target.style.transform = 'translateY(0)';
                        }}>
                            🚀 Projelerimizi Keşfet
                        </button>
                        <button style={{
                            background: 'white',
                            color: '#08a4d4',
                            border: '2px solid white',
                            padding: '15px 30px',
                            borderRadius: '50px',
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            const target = e.target as HTMLButtonElement;
                            target.style.transform = 'translateY(-2px)';
                            target.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                            const target = e.target as HTMLButtonElement;
                            target.style.transform = 'translateY(0)';
                            target.style.boxShadow = 'none';
                        }}>
                            📞 İletişime Geç
                        </button>
                    </div>
                </div>

                <style>{`
                    @keyframes float {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-20px); }
                    }
                `}</style>
            </section>

            {/* Popüler Projeler Section */}
            <section style={{
                padding: '80px 20px 60px',
                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                            marginBottom: '15px',
                            fontWeight: '700',
                            color: '#333'
                        }}>
                            🌟 Popüler Projeler
                        </h2>
                        <p style={{
                            fontSize: '1.2rem',
                            color: '#666',
                            maxWidth: '500px',
                            margin: '0 auto'
                        }}>
                            En çok tercih edilen ve başarılı projelerimiz
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
                        gap: '25px'
                    }}>
                        {populerProjeler.slice(0, 3).map(proje => (
                            <div
                                key={proje.id}
                                style={{
                                    background: 'white',
                                    borderRadius: '15px',
                                    padding: '30px',
                                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                                    border: `3px solid ${proje.renk}20`,
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.boxShadow = `0 20px 40px ${proje.renk}30`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                                }}
                            >
                                <div style={{
                                    position: 'absolute',
                                    top: '15px',
                                    right: '15px',
                                    background: '#FFD700',
                                    color: '#333',
                                    padding: '5px 10px',
                                    borderRadius: '12px',
                                    fontSize: '0.8rem',
                                    fontWeight: '600'
                                }}>
                                    ⭐ Popüler
                                </div>
                                
                                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                                    <div style={{ fontSize: '3.5rem', marginBottom: '15px' }}>
                                        {proje.icon}
                                    </div>
                                    <h3 style={{
                                        fontSize: '1.4rem',
                                        fontWeight: '700',
                                        color: '#333',
                                        marginBottom: '10px'
                                    }}>
                                        {proje.baslik}
                                    </h3>
                                    <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
                                        {proje.kategoriler.map(kategori => (
                                            <span key={kategori} style={{
                                                background: proje.renk + '20',
                                                color: proje.renk,
                                                padding: '3px 8px',
                                                borderRadius: '8px',
                                                fontSize: '0.8rem',
                                                fontWeight: '500'
                                            }}>
                                                {kategori}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                <p style={{
                                    color: '#666',
                                    fontSize: '1rem',
                                    lineHeight: '1.6',
                                    textAlign: 'center'
                                }}>
                                    {proje.kisa_aciklama}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ana Projeler Section */}
            <main style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: 'clamp(40px, 8vw, 80px) 20px'
            }}>
                {/* Arama ve Filtreler */}
                <section style={{ marginBottom: '60px' }}>
                    {/* Başlık */}
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                            marginBottom: '15px',
                            fontWeight: '700',
                            color: '#333'
                        }}>
                            Tüm Projelerimiz
                        </h2>
                        <p style={{
                            fontSize: '1.1rem',
                            color: '#666'
                        }}>
                            Eğitim seviyenize uygun projeleri keşfedin
                        </p>
                    </div>

                    {/* Arama Çubuğu */}
                    <div style={{
                        maxWidth: '500px',
                        margin: '0 auto 30px',
                        position: 'relative'
                    }}>
                        <input
                            type="text"
                            placeholder="Proje ara... (örn: yaz okulu, münazara)"
                            value={aramaMetni}
                            onChange={(e) => setAramaMetni(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '15px 50px 15px 20px',
                                fontSize: '1.1rem',
                                border: '2px solid #e9ecef',
                                borderRadius: '50px',
                                outline: 'none',
                                transition: 'all 0.3s ease'
                            }}
                            onFocus={(e) => {
                                e.target.style.borderColor = '#08a4d4';
                                e.target.style.boxShadow = '0 0 0 3px rgba(8, 164, 212, 0.1)';
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = '#e9ecef';
                                e.target.style.boxShadow = 'none';
                            }}
                        />
                        <div style={{
                            position: 'absolute',
                            right: '20px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: '#999',
                            fontSize: '1.2rem'
                        }}>
                            🔍
                        </div>
                    </div>

                    {/* Kategori Filtreleri */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: 'clamp(10px, 2vw, 15px)'
                    }}>
                        {kategoriler.map(kategori => (
                            <button
                                key={kategori}
                                onClick={() => setSeciliKategori(kategori)}
                                style={{
                                    background: seciliKategori === kategori 
                                        ? 'linear-gradient(135deg, #08a4d4, #0892c0)' 
                                        : 'white',
                                    color: seciliKategori === kategori ? 'white' : '#08a4d4',
                                    border: '2px solid #08a4d4',
                                    padding: 'clamp(10px, 2vw, 12px) clamp(20px, 4vw, 25px)',
                                    borderRadius: '50px',
                                    cursor: 'pointer',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    transition: 'all 0.3s ease',
                                    boxShadow: seciliKategori === kategori 
                                        ? '0 8px 25px rgba(8, 164, 212, 0.3)' 
                                        : '0 4px 15px rgba(0, 0, 0, 0.1)',
                                    position: 'relative'
                                }}
                                onMouseEnter={(e) => {
                                    if (seciliKategori !== kategori) {
                                        const target = e.target as HTMLButtonElement;
                                        target.style.background = 'linear-gradient(135deg, #08a4d4, #0892c0)';
                                        target.style.color = 'white';
                                        target.style.transform = 'translateY(-2px)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (seciliKategori !== kategori) {
                                        const target = e.target as HTMLButtonElement;
                                        target.style.background = 'white';
                                        target.style.color = '#08a4d4';
                                        target.style.transform = 'translateY(0)';
                                    }
                                }}
                            >
                                {kategori === 'Tümü' && '📋 '}
                                {kategori === 'Üniversite' && '🎓 '}
                                {kategori === 'Lise' && '🏫 '}
                                {kategori === 'Ortaokul' && '📚 '}
                                {kategori}
                                {seciliKategori === kategori && (
                                    <span style={{
                                        marginLeft: '8px',
                                        background: 'rgba(255, 255, 255, 0.2)',
                                        borderRadius: '50%',
                                        padding: '2px 6px',
                                        fontSize: '0.8rem'
                                    }}>
                                        {filtreliProjeler.length}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Projeler Grid */}
                <section>
                    {filtreliProjeler.length === 0 ? (
                        <div style={{
                            textAlign: 'center',
                            padding: '60px 20px',
                            color: '#666'
                        }}>
                            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🔍</div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>
                                Aradığınız kriterlere uygun proje bulunamadı
                            </h3>
                            <p>Farklı bir kategori seçmeyi veya arama terimini değiştirmeyi deneyin.</p>
                        </div>
                    ) : (
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
                            gap: 'clamp(20px, 4vw, 30px)'
                        }}>
                            {filtreliProjeler.map(proje => (
                                <div
                                    key={proje.id}
                                    style={{
                                        background: 'white',
                                        borderRadius: '20px',
                                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                                        border: `2px solid ${proje.renk}15`,
                                        overflow: 'hidden',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        opacity: proje.aktif ? 1 : 0.7,
                                        cursor: proje.aktif ? 'pointer' : 'not-allowed',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: '100%'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (proje.aktif) {
                                            e.currentTarget.style.transform = 'translateY(-10px)';
                                            e.currentTarget.style.boxShadow = `0 20px 40px ${proje.renk}25`;
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                                    }}
                                >
                                    {/* Üst Kısım - Renkli Header */}
                                    <div style={{
                                        background: `linear-gradient(135deg, ${proje.renk}, ${proje.renk}dd)`,
                                        padding: '30px 25px 20px',
                                        textAlign: 'center',
                                        position: 'relative'
                                    }}>
                                        {/* Rozet */}
                                        {proje.yeni && (
                                            <div style={{
                                                position: 'absolute',
                                                top: '15px',
                                                right: '15px',
                                                background: '#e74c3c',
                                                color: 'white',
                                                padding: '5px 10px',
                                                borderRadius: '12px',
                                                fontSize: '0.8rem',
                                                fontWeight: '600'
                                            }}>
                                                🆕 Yeni
                                            </div>
                                        )}
                                        
                                        <div style={{
                                            fontSize: '3rem',
                                            marginBottom: '15px'
                                        }}>
                                            {proje.icon}
                                        </div>
                                        <h3 style={{
                                            color: 'white',
                                            fontSize: '1.5rem',
                                            fontWeight: '700',
                                            marginBottom: '15px'
                                        }}>
                                            {proje.baslik}
                                        </h3>
                                        {/* Çoklu kategori etiketleri */}
                                        <div style={{ 
                                            display: 'flex', 
                                            justifyContent: 'center', 
                                            gap: '8px', 
                                            flexWrap: 'wrap' 
                                        }}>
                                            {proje.kategoriler.map(kategori => (
                                                <span key={kategori} style={{
                                                    background: 'rgba(255, 255, 255, 0.2)',
                                                    color: 'white',
                                                    padding: '4px 12px',
                                                    borderRadius: '15px',
                                                    fontSize: '0.85rem',
                                                    fontWeight: '500'
                                                }}>
                                                    {kategori}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Alt Kısım - İçerik */}
                                    <div style={{ 
                                        padding: '25px', 
                                        display: 'flex', 
                                        flexDirection: 'column', 
                                        flexGrow: 1 
                                    }}>
                                        <p style={{
                                            color: '#666',
                                            fontSize: '1rem',
                                            lineHeight: '1.6',
                                            marginBottom: '15px',
                                            fontWeight: '500'
                                        }}>
                                            {proje.kisa_aciklama}
                                        </p>
                                        <p style={{
                                            color: '#888',
                                            fontSize: '0.95rem',
                                            lineHeight: '1.6',
                                            marginBottom: '25px',
                                            flexGrow: 1
                                        }}>
                                            {proje.detay_aciklama}
                                        </p>
                                        
                                        {/* Alt kısım - Durum ve Başvuru */}
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        }}>
                                            <span style={{
                                                background: proje.aktif ? '#e8f5e8' : '#f5f5f5',
                                                color: proje.aktif ? '#27ae60' : '#95a5a6',
                                                padding: '6px 12px',
                                                borderRadius: '20px',
                                                fontSize: '0.85rem',
                                                fontWeight: '600'
                                            }}>
                                                {proje.aktif ? '✅ Başvuru Açık' : '⏳ Yakında'}
                                            </span>
                                            
                                            <button
                                                onClick={() => handleBasvuru(proje)}
                                                disabled={!proje.aktif}
                                                style={{
                                                    background: proje.aktif ? proje.renk : '#95a5a6',
                                                    color: 'white',
                                                    border: 'none',
                                                    padding: '10px 20px',
                                                    borderRadius: '25px',
                                                    fontSize: '0.95rem',
                                                    fontWeight: '600',
                                                    cursor: proje.aktif ? 'pointer' : 'not-allowed',
                                                    transition: 'all 0.3s ease'
                                                }}
                                                onMouseEnter={(e) => {
                                                    if (proje.aktif) {
                                                        const target = e.target as HTMLButtonElement;
                                                        target.style.transform = 'scale(1.05)';
                                                        target.style.boxShadow = `0 4px 15px ${proje.renk}50`;
                                                    }
                                                }}
                                                onMouseLeave={(e) => {
                                                    if (proje.aktif) {
                                                        const target = e.target as HTMLButtonElement;
                                                        target.style.transform = 'scale(1)';
                                                        target.style.boxShadow = 'none';
                                                    }
                                                }}
                                            >
                                                {proje.aktif ? 'Başvur' : '📋 Bilgi Al'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}