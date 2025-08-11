import { useEffect } from 'react';

export default function Gonullu() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cxppusa1formui01cdnsa01-endpoint.azureedge.net/eur/FormLoader/FormLoader.bundle.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <>
            <section className="hero" id="anasayfa">
                <div className="hero-content">
                    <h1>Gönüllü Ol, Fark Yarat!</h1>
                    <p>TÜGVA'nın gönüllü programıyla sosyal projelerde yer al, deneyim kazan, gençliğe yön ver!</p>
                    <a href="#iletisim" className="cta-button">Gönüllü Başvurusu Yap</a>
                </div>
            </section>

            <main className="main-content">
                <section className="section" id="iletisim">
                    <h2>Gönüllü Başvuru Formu</h2>
                    <p>Aşağıdaki formu doldurarak gönüllü programımıza başvurabilirsiniz. Ekibimiz sizinle en kısa sürede iletişime geçecektir.</p>

                    <div
                        data-form-id='FORM-ID-GONULLU'
                        data-form-api-url='https://public-eur.mkt.dynamics.com/api/v1.0/orgs/...'
                        data-cached-form-url='https://assets-eur.mkt.dynamics.com/...'>
                    </div>
                </section>
            </main>
        </>
    );
}
