import { useState, useEffect } from 'react';

export default function TugvaBasvuruSayfa() {
    // URL'den proje ID'sini simüle edelim (gerçek uygulamada URL'den gelecek)
    const [projeId] = useState(4); // Seninle 40 Hadis projesi örnek olarak
    
    const projeBilgileri = {
        1: {
            baslik: "TÜGVA Yurtları",
            kisa_aciklama: "Eğitim hayatını destekleyen güvenli ve konforlu yurt ortamı",
            detay_aciklama: "Eğitim hayatını sadece derslerle değil; kültürel, sosyal ve manevi yönden de destekliyoruz. Modern imkanlar ve rehberlik hizmetleriyle geleceğe hazırlanın.",
            icon: "🏠",
            kategoriler: ["Üniversite", "Lise"],
            renk: "#08a4d4",
            ozellikler: [
                "🛏️ Modern ve temiz odalar",
                "📚 Çalışma alanları",
                "🍽️ Beslenme hizmetleri",
                "🏃‍♂️ Spor imkanları",
                "👨‍🏫 Akademik danışmanlık"
            ],
            sure: "Eğitim dönemi boyunca",
            basvuruTarihleri: "15 Haziran - 15 Eylül 2024",
            hedefKitle: "Üniversite ve Lise öğrencileri",
            kontenjan: "500 kişi",
            lokasyon: "İstanbul, Ankara, İzmir"
        },
        4: {
            baslik: "Seninle 40 Hadis",
            kisa_aciklama: "Hadislerle manevi bir yolculuk",
            detay_aciklama: "40 hadis üzerinden gençlere ilham veren, anlamlı ve içten bir eğitim serisi. Her hafta farklı bir hadisi derinlemesine inceleyerek günlük yaşamımıza nasıl uygulayabileceğimizi öğreneceğiz.",
            icon: "📜",
            kategoriler: ["Üniversite", "Lise"],
            renk: "#e74c3c",
            ozellikler: [
                "📖 40 seçkin hadisin detaylı incelenmesi",
                "🎯 Günlük yaşama uygulanabilir dersler",
                "👥 Grup tartışmaları ve değerlendirmeler",
                "📝 İnteraktif çalışma materyalleri",
                "🎓 Sertifika ve takdir belgesi"
            ],
            sure: "8 hafta (16 saat eğitim)",
            basvuruTarihleri: "1 Mart - 30 Nisan 2024",
            hedefKitle: "16-25 yaş arası gençler",
            kontenjan: "150 kişi",
            lokasyon: "Online + İstanbul Merkez"
        }
    };

    const proje = projeBilgileri[projeId] || projeBilgileri[4];
    const [showForm, setShowForm] = useState(false);

    return (
        <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
            {/* Hero Section - Proje Detayı */}
            <section style={{
                background: `linear-gradient(135deg, ${proje.renk} 0%, ${proje.renk}dd 100%)`,
                color: 'white',
                padding: '120px 20px 80px',
                marginTop: '70px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Arka plan süslemeleri */}
                <div style={{
                    position: 'absolute',
                    top: '-100px',
                    right: '-100px',
                    width: '300px',
                    height: '300px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    animation: 'float 8s ease-in-out infinite'
                }}></div>
                
                <div className="container" style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '60px',
                    alignItems: 'center'
                }}>
                    {/* Sol taraf - Proje bilgileri */}
                    <div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                            marginBottom: '20px'
                        }}>
                            <span style={{ fontSize: '3.5rem' }}>{proje.icon}</span>
                            <div>
                                {proje.kategoriler.map(kategori => (
                                    <span key={kategori} style={{
                                        background: 'rgba(255, 255, 255, 0.2)',
                                        padding: '6px 12px',
                                        borderRadius: '20px',
                                        fontSize: '0.9rem',
                                        fontWeight: '500',
                                        marginRight: '8px'
                                    }}>
                                        {kategori}
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                            fontWeight: '800',
                            marginBottom: '20px',
                            lineHeight: '1.2'
                        }}>
                            {proje.baslik}
                        </h1>
                        
                        <p style={{
                            fontSize: '1.3rem',
                            opacity: '0.9',
                            marginBottom: '25px',
                            lineHeight: '1.6'
                        }}>
                            {proje.kisa_aciklama}
                        </p>
                        
                        <p style={{
                            fontSize: '1.1rem',
                            opacity: '0.8',
                            lineHeight: '1.7',
                            marginBottom: '30px'
                        }}>
                            {proje.detay_aciklama}
                        </p>

                        <button
                            onClick={() => setShowForm(!showForm)}
                            style={{
                                background: 'white',
                                color: proje.renk,
                                border: 'none',
                                padding: '18px 35px',
                                borderRadius: '50px',
                                fontSize: '1.2rem',
                                fontWeight: '700',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 8px 25px rgba(255, 255, 255, 0.2)'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-3px)';
                                e.target.style.boxShadow = '0 12px 35px rgba(255, 255, 255, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.2)';
                            }}
                        >
                            {showForm ? '📋 Bilgileri Gör' : '🚀 Hemen Başvur'}
                        </button>
                    </div>

                    {/* Sağ taraf - Hızlı bilgiler */}
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '20px',
                        padding: '40px',
                        border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}>
                        <h3 style={{
                            fontSize: '1.5rem',
                            fontWeight: '700',
                            marginBottom: '25px'
                        }}>
                            📊 Proje Bilgileri
                        </h3>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ opacity: '0.8' }}>⏰ Süre:</span>
                                <strong>{proje.sure}</strong>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ opacity: '0.8' }}>📅 Başvuru:</span>
                                <strong>{proje.basvuruTarihleri}</strong>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ opacity: '0.8' }}>👥 Hedef:</span>
                                <strong>{proje.hedefKitle}</strong>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ opacity: '0.8' }}>🎯 Kontenjan:</span>
                                <strong>{proje.kontenjan}</strong>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ opacity: '0.8' }}>📍 Lokasyon:</span>
                                <strong>{proje.lokasyon}</strong>
                            </div>
                        </div>
                    </div>
                </div>

                <style>{`
                    @keyframes float {
                        0%, 100% { transform: translateY(0px) rotate(0deg); }
                        50% { transform: translateY(-20px) rotate(5deg); }
                    }
                    
                    @media (max-width: 768px) {
                        .container {
                            grid-template-columns: 1fr !important;
                            gap: 40px !important;
                        }
                    }
                `}</style>
            </section>

            {/* Ana İçerik - Koşullu Gösterim */}
            {!showForm ? (
                // Proje Özellikleri ve Detayları
                <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px' }}>
                    {/* Özellikler */}
                    <section style={{ marginBottom: '80px' }}>
                        <h2 style={{
                            fontSize: '2.5rem',
                            fontWeight: '700',
                            textAlign: 'center',
                            marginBottom: '50px',
                            color: '#333'
                        }}>
                            🌟 Proje Özellikleri
                        </h2>
                        
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '30px'
                        }}>
                            {proje.ozellikler.map((ozellik, index) => (
                                <div
                                    key={index}
                                    style={{
                                        background: 'white',
                                        padding: '30px',
                                        borderRadius: '15px',
                                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                                        border: `3px solid ${proje.renk}15`,
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.boxShadow = `0 15px 40px ${proje.renk}20`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                                    }}
                                >
                                    <p style={{
                                        fontSize: '1.2rem',
                                        color: '#333',
                                        fontWeight: '600',
                                        margin: '0'
                                    }}>
                                        {ozellik}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Neden Bu Proje */}
                    <section style={{
                        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                        borderRadius: '20px',
                        padding: '60px 40px',
                        textAlign: 'center',
                        marginBottom: '80px'
                    }}>
                        <h2 style={{
                            fontSize: '2.5rem',
                            fontWeight: '700',
                            marginBottom: '30px',
                            color: '#333'
                        }}>
                            🎯 Neden Bu Projeyi Seçmelisin?
                        </h2>
                        <p style={{
                            fontSize: '1.3rem',
                            color: '#666',
                            lineHeight: '1.8',
                            maxWidth: '800px',
                            margin: '0 auto'
                        }}>
                            Bu proje, kişisel gelişiminizi desteklerken aynı zamanda manevi yönden de büyümenizi sağlayacak. 
                            Uzman eğitmenler eşliğinde, hem teorik bilgi hem de pratik deneyim kazanacaksınız.
                        </p>
                    </section>

                    {/* CTA Section */}
                    <section style={{
                        background: `linear-gradient(135deg, ${proje.renk}, ${proje.renk}dd)`,
                        borderRadius: '20px',
                        padding: '60px 40px',
                        textAlign: 'center',
                        color: 'white'
                    }}>
                        <h2 style={{
                            fontSize: '2.5rem',
                            fontWeight: '700',
                            marginBottom: '20px'
                        }}>
                            Hazır mısın?
                        </h2>
                        <p style={{
                            fontSize: '1.3rem',
                            opacity: '0.9',
                            marginBottom: '30px'
                        }}>
                            Başvuru formunu doldurarak bu eşsiz deneyimin parçası ol!
                        </p>
                        <button
                            onClick={() => setShowForm(true)}
                            style={{
                                background: 'white',
                                color: proje.renk,
                                border: 'none',
                                padding: '20px 40px',
                                borderRadius: '50px',
                                fontSize: '1.3rem',
                                fontWeight: '700',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-3px)';
                                e.target.style.boxShadow = '0 10px 30px rgba(255, 255, 255, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = 'none';
                            }}
                        >
                            🚀 Başvuru Formuna Git
                        </button>
                    </section>
                </main>
            ) : (
                // Başvuru Formu Alanı
                <main style={{ 
                    maxWidth: '1000px', 
                    margin: '0 auto', 
                    padding: '80px 20px',
                    minHeight: '600px'
                }}>
                    <div style={{
                        background: 'white',
                        borderRadius: '20px',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
                        overflow: 'hidden'
                    }}>
                        {/* Form Header */}
                        <div style={{
                            background: `linear-gradient(135deg, ${proje.renk}, ${proje.renk}dd)`,
                            color: 'white',
                            padding: '40px',
                            textAlign: 'center'
                        }}>
                            <h2 style={{
                                fontSize: '2.5rem',
                                fontWeight: '700',
                                marginBottom: '15px'
                            }}>
                                📝 Başvuru Formu
                            </h2>
                            <p style={{
                                fontSize: '1.2rem',
                                opacity: '0.9',
                                marginBottom: '20px'
                            }}>
                                <strong>{proje.baslik}</strong> projesine başvurmak için aşağıdaki formu doldurunuz
                            </p>
                            <div style={{
                                background: 'rgba(255, 255, 255, 0.2)',
                                borderRadius: '10px',
                                padding: '15px',
                                display: 'inline-block'
                            }}>
                                <span style={{ fontSize: '0.95rem', fontWeight: '600' }}>
                                    ⏰ Son Başvuru: {proje.basvuruTarihleri.split(' - ')[1]}
                                </span>
                            </div>
                        </div>

                        {/* Dynamics Marketing Embed Alanı */}
                        <div style={{
                            padding: '40px',
                            minHeight: '600px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            background: '#f8f9fa'
                        }}>
                            {/* Placeholder - Gerçek uygulamada Dynamics Marketing formu embed edilecek */}
                            <div style={{
                                width: '100%',
                                minHeight: '500px',
                                background: 'white',
                                border: '3px dashed #ddd',
                                borderRadius: '15px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: '#666',
                                fontSize: '1.1rem'
                            }}>
                                <div style={{ fontSize: '4rem', marginBottom: '20px' }}>📋</div>
                                <h3 style={{ marginBottom: '10px', color: '#333' }}>Dynamics Marketing Form</h3>
                                <p style={{ textAlign: 'center', lineHeight: '1.6' }}>
                                    Bu alan Dynamics Marketing embed formu için ayrılmıştır.<br/>
                                    Gerçek uygulamada form embed kodu buraya yerleştirilecektir.
                                </p>
                                <div style={{
                                    background: '#e3f2fd',
                                    border: '1px solid #90caf9',
                                    borderRadius: '8px',
                                    padding: '15px',
                                    marginTop: '20px',
                                    maxWidth: '400px',
                                    fontSize: '0.95rem'
                                }}>
                                    <strong>💡 Embed Kodu:</strong><br/>
                                    <code style={{ fontSize: '0.85rem' }}>
                                        &lt;iframe src="dynamics-form-url" width="100%" height="500px"&gt;&lt;/iframe&gt;
                                    </code>
                                </div>
                            </div>
                        </div>

                        {/* Form Footer */}
                        <div style={{
                            background: '#f8f9fa',
                            padding: '30px 40px',
                            borderTop: '1px solid #eee',
                            textAlign: 'center'
                        }}>
                            <p style={{
                                color: '#666',
                                fontSize: '0.95rem',
                                marginBottom: '15px'
                            }}>
                                ❓ Sorularınız mı var? Bize ulaşın: <strong>info@tugva.org.tr</strong> | <strong>0212 XXX XX XX</strong>
                            </p>
                            <button
                                onClick={() => setShowForm(false)}
                                style={{
                                    background: '#6c757d',
                                    color: 'white',
                                    border: 'none',
                                    padding: '12px 25px',
                                    borderRadius: '25px',
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.background = '#5a6268';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.background = '#6c757d';
                                }}
                            >
                                ⬅️ Proje Detaylarına Dön
                            </button>
                        </div>
                    </div>
                </main>
            )}
        </div>
    );
}