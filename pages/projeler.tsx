import { useState } from 'react';

// Proje tipi tanımı
interface Proje {
    id: number;
    baslik: string;
    kisa_aciklama: string;
    detay_aciklama: string;
    icon: string;
    kategori: string;
    aktif: boolean;
    basvuru_url: string;
    renk: string;
}

export default function Projeler() {
    // Proje verilerini state olarak tutuyoruz - kolayca yeni projeler eklenebilir
    const [projeler] = useState<Proje[]>([
        {
            id: 1,
            baslik: "TÜGVA Yurtları",
            kisa_aciklama: "Eğitim hayatını destekleyen güvenli ve konforlu yurt ortamı",
            detay_aciklama: "Eğitim hayatını sadece derslerle değil; kültürel, sosyal ve manevi yönden de destekliyoruz. Modern imkanlar ve rehberlik hizmetleriyle geleceğe hazırlanın.",
            icon: "🏠",
            kategori: "Barınma",
            aktif: true,
            basvuru_url: "/yurt",
            renk: "#08a4d4"
        },
        {
            id: 2,
            baslik: "Yaz Okulu",
            kisa_aciklama: "Gençlere dolu dolu bir yaz eğitim serüveni",
            detay_aciklama: "Kur’an, temel dini bilgiler ve sportif etkinliklerle hem ruhu hem bedeni besleyen bir yaz deneyimi.",
            icon: "🏖️",
            kategori: "Eğitim",
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
            kategori: "Eğitim",
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
            kategori: "Dini Eğitim",
            aktif: true,
            basvuru_url: "/projeler/seninle-40-hadis",
            renk: "#e74c3c"
          },
          {
            id: 5,
            baslik: "Kitap Kurdu",
            kisa_aciklama: "Okuma kültürünü gençlerle buluşturmak",
            detay_aciklama: "Okuma saatleri ve grup tartışmalarıyla gençlerde edebi merak ve düşünsel gelişim.",
            icon: "📚",
            kategori: "Kültür",
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
            kategori: "Kamp",
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
            kategori: "Eğitim",
            aktif: true,
            basvuru_url: "/projeler/endurun-okulu",
            renk: "#c0392b"
          },
          {
            id: 8,
            baslik: "Genç Lig",
            kisa_aciklama: "Sporda gençlere sağlıklı rekabet alanı",
            detay_aciklama: "Turnuva ve spor etkinlikleriyle gençlerde takım ruhu ve fiziksel gelişim oluşturma.",
            icon: "⚽",
            kategori: "Spor",
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
            kategori: "Tartışma",
            aktif: true,
            basvuru_url: "/projeler/turkiye-munazara-yarismasi",
            renk: "#16a085"
          },
          {
            id: 10,
            baslik: "İhtisas Akademi",
            kisa_aciklama: "Uzmanlık alanlarında derinleşme fırsatı",
            detay_aciklama: "Alanlarında uzmanlık kazandırmayı amaçlayan, disiplin odaklı akademik program.",
            icon: "🏛️",
            kategori: "Akademi",
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
            kategori: "Liderlik",
            aktif: true,
            basvuru_url: "/projeler/genc-yonetici-okulu",
            renk: "#e67e22"
          }
    ]);

    const [seciliKategori, setSeciliKategori] = useState('Tümü');
    
    // Kategorileri otomatik olarak çıkarıyoruz
    const kategoriler = ['Tümü', ...new Set(projeler.map((proje: Proje) => proje.kategori))];
    
    // Filtrelenmiş projeler
    const filtreliProjeler = seciliKategori === 'Tümü' 
        ? projeler 
        : projeler.filter((proje: Proje) => proje.kategori === seciliKategori);

    const handleBasvuru = (proje: Proje) => {
        if (proje.aktif) {
            // Gerçek uygulamada react-router kullanılabilir
            window.location.href = proje.basvuru_url;
        }
    };

    return (
        <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
            {/* Hero Section */}
            <section className="hero" style={{
                background: 'linear-gradient(135deg, #08a4d4 0%, #0892c0 100%)',
                color: 'white',
                textAlign: 'center',
                padding: '150px 20px 80px',
                marginTop: '70px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="hero-content" style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    position: 'relative',
                    zIndex: 1
                }}>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                        marginBottom: '20px',
                        fontWeight: '700',
                        letterSpacing: '-1px'
                    }}>
                        TÜGVA Projeleri
                    </h1>
                    <p style={{
                        fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                        marginBottom: '30px',
                        opacity: '0.95',
                        lineHeight: '1.8'
                    }}>
                        Gençlerin kişisel, akademik ve sosyal gelişimini destekleyen kapsamlı projelerimizi keşfedin. 
                        Her biri özenle tasarlanmış bu programlarla potansiyelinizi keşfedin.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <main style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: 'clamp(40px, 8vw, 80px) 20px'
            }}>
                {/* Kategori Filtreleri */}
                <section style={{ marginBottom: '60px', textAlign: 'center' }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: 'clamp(10px, 2vw, 15px)',
                        marginBottom: '40px'
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
                                        : '0 4px 15px rgba(0, 0, 0, 0.1)'
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
                                {kategori}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Projeler Grid */}
                <section>
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
                                        const target = e.currentTarget as HTMLDivElement;
                                        target.style.transform = 'translateY(-10px)';
                                        target.style.boxShadow = `0 20px 40px ${proje.renk}25`;
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    const target = e.currentTarget as HTMLDivElement;
                                    target.style.transform = 'translateY(0)';
                                    target.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                                }}
                            >
                                {/* Üst Kısım - Renkli Header */}
                                <div style={{
                                    background: `linear-gradient(135deg, ${proje.renk}, ${proje.renk}dd)`,
                                    padding: '30px 25px 20px',
                                    textAlign: 'center',
                                    position: 'relative'
                                }}>
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
                                        marginBottom: '10px'
                                    }}>
                                        {proje.baslik}
                                    </h3>
                                    <span style={{
                                        background: 'rgba(255, 255, 255, 0.2)',
                                        color: 'white',
                                        padding: '5px 15px',
                                        borderRadius: '20px',
                                        fontSize: '0.9rem',
                                        fontWeight: '500'
                                    }}>
                                        {proje.kategori}
                                    </span>
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

                                    <button
                                        onClick={() => handleBasvuru(proje)}
                                        disabled={!proje.aktif}
                                        style={{
                                            width: '100%',
                                            background: proje.aktif 
                                                ? `linear-gradient(135deg, ${proje.renk}, ${proje.renk}dd)` 
                                                : '#ccc',
                                            color: 'white',
                                            border: 'none',
                                            padding: '15px 25px',
                                            borderRadius: '50px',
                                            fontSize: '1.1rem',
                                            fontWeight: '600',
                                            cursor: proje.aktif ? 'pointer' : 'not-allowed',
                                            transition: 'all 0.3s ease',
                                            position: 'relative',
                                            overflow: 'hidden'
                                        }}
                                        onMouseEnter={(e) => {
                                            if (proje.aktif) {
                                                const target = e.target as HTMLButtonElement;
                                                target.style.transform = 'translateY(-2px)';
                                                target.style.boxShadow = `0 8px 25px ${proje.renk}40`;
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (proje.aktif) {
                                                const target = e.target as HTMLButtonElement;
                                                target.style.transform = 'translateY(0)';
                                                target.style.boxShadow = 'none';
                                            }
                                        }}
                                    >
                                        {proje.aktif ? 'Başvuru Yap' : 'Yakında Açılacak'}
                                    </button>
                                </div>

                                {/* Durum Badge */}
                                {!proje.aktif && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '15px',
                                        right: '15px',
                                        background: '#ffc107',
                                        color: '#333',
                                        padding: '5px 12px',
                                        borderRadius: '20px',
                                        fontSize: '0.8rem',
                                        fontWeight: '600'
                                    }}>
                                        Yakında
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* İstatistik Section */}
                <section style={{
                    background: 'linear-gradient(135deg, #08a4d4, #0892c0)',
                    borderRadius: '20px',
                    padding: '60px 40px',
                    marginTop: '80px',
                    color: 'white',
                    textAlign: 'center'
                }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        marginBottom: '30px',
                        fontWeight: '700'
                    }}>
                        TÜGVA ile Geleceğe Yatırım
                    </h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))',
                        gap: 'clamp(20px, 4vw, 30px)',
                        marginTop: '40px'
                    }}>
                        <div>
                            <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🎓</div>
                            <div style={{ fontSize: '2.5rem', fontWeight: '700' }}>5000+</div>
                            <div style={{ opacity: '0.9' }}>Faydalanan Öğrenci</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🏆</div>
                            <div style={{ fontSize: '2.5rem', fontWeight: '700' }}>25+</div>
                            <div style={{ opacity: '0.9' }}>Aktif Proje</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🌟</div>
                            <div style={{ fontSize: '2.5rem', fontWeight: '700' }}>98%</div>
                            <div style={{ opacity: '0.9' }}>Memnuniyet Oranı</div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}