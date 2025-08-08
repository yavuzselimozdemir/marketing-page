import { useEffect } from 'react';

export default function Yurt() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cxppusa1formui01cdnsa01-endpoint.azureedge.net/eur/FormLoader/FormLoader.bundle.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <>
            {/* HERO kısmı */}
            <section className="hero" id="anasayfa">
                <div className="hero-content">
                    <h1>Yeni Başlangıçların Adresi: TÜGVA Yurtları</h1>
                    <p>
                        Eğitim hayatını sadece derslerle değil; kültürel, sosyal ve manevi yönden de destekliyoruz.
                        TÜGVA yurtlarında seni geleceğe hazırlayacak bir ortam bekliyor.
                    </p>
                    <a href="#iletisim" className="cta-button">Hemen Başvur</a>
                </div>
            </section>

            {/* Main Content */}
            <main className="main-content">

                {/* Başvuru Formu Section */}
                <section className="section" id="iletisim">
                    <h2>Başvuru Formu</h2>
                    <p>
                        Eğitim yolculuğunuzda size eşlik edecek güvenli ve konforlu bir yurt ortamı için başvurunuzu hemen şimdi gerçekleştirin.
                        Aşağıdaki formu doldurmanız yeterli. Başvurular özenle değerlendirilecek, ekibimiz sizinle en kısa sürede iletişime geçecektir.
                    </p>

                    {/* Form Embed */}
                    <div
                        data-form-id='0bc84e2b-a930-f011-8c4e-0022489aeafa'
                        data-form-api-url='https://public-eur.mkt.dynamics.com/api/v1.0/orgs/97c73e55-bfd3-ed11-aed0-000d3a64dc63/landingpageforms'
                        data-cached-form-url='https://assets-eur.mkt.dynamics.com/97c73e55-bfd3-ed11-aed0-000d3a64dc63/digitalassets/forms/0bc84e2b-a930-f011-8c4e-0022489aeafa'
                    ></div>
                </section>
            </main>
        </>
    );
}
