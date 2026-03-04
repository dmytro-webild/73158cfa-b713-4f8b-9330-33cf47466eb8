"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import ContactText from '@/components/sections/contact/ContactText';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Hammer, Shield, Clock, Leaf, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="small"
      sizing="medium"
      background="circleGradient"
      cardStyle="subtle-shadow"
      primaryButtonStyle="flat"
      secondaryButtonStyle="solid"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Doğa Tasarım"
          navItems={[
            { name: "Koleksiyonlar", id: "collections" },
            { name: "Değerlerimiz", id: "values" },
            { name: "Hakkımızda", id: "about" }
          ]}
          button={{ text: "İletişim", href: "contact" }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitTestimonial
          title="HAYALİNİZDEKİ YAŞAM ALANLARINI TASARLIYORUZ"
          description="Doğa Tasarım Mobilya, İzmir'de yüksek bütçeli projelerin tercih ettiği ultra-lüks mobilya tasarım ve üretim atöliyesidir. Her mekanı eşsiz kılıyoruz."
          background={{ variant: "glowing-orb" }}
          imageSrc="http://img.b2bpic.net/free-photo/futuristic-kitchen-interior-design_23-2151821386.jpg"
          imageAlt="Modern Luxury Kitchen with LED Lighting"
          imagePosition="right"
          mediaAnimation="blur-reveal"
          testimonials={[
            {
              name: "Ayşe Kaya",              handle: "İç Mimar, Mimarlık Stüdyosu",              testimonial: "Doğa Tasarım ile çalışmak, hayallarımızı gerçeğe dönüştürmek anlamına geliyor. Detay tutkusu ve kalite anlayışları eşsiz.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/successful-businesswoman-ready-challenges_1163-4336.jpg"
            },
            {
              name: "Mehmet Yilmaz",              handle: "CEO, Lüks Emlak Şirketi",              testimonial: "Her projede Doğa Tasarım'ı tercih ediyoruz. Müşteri memnuniyeti garantisiz değildir, ancak onlar garantilidir.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg"
            },
            {
              name: "Zeynep Özdemir",              handle: "Tasarımcı, Dekorasyon Firması",              testimonial: "Zamanında teslimat, kusursuz işçilik ve kaliteli malzeme. Tüm bunları bir yerde bulmak nadir.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-woman-with-long-brown-hair-black-t-shirt-white-jacket_613910-8245.jpg"
            }
          ]}
          testimonialRotationInterval={5000}
          buttons={[
            { text: "Galeriyi Gör", href: "#collections" },
            { text: "Hemen İletişim Kur", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="collections" data-section="collections">
        <FeatureCardThree
          title="Koleksiyonlarımız"
          description="Her mekan için özel olarak tasarlanmış, kaliteli malzeme ve kusursuz işçiliğin birleşimi. LED aydınlatma efektleri, özel tasarım danışmanlığı ve 20 yıllık uzmanlık ile benzersiz yaşam alanları yaratıyoruz. İzmir'in en seçici müşterilerinin tercihi."
          tag="Premium Tasarımlar"
          textboxLayout="default"
          features={[
            {
              id: "01",              title: "Mutfak Tasarımı",              description: "Modern, Country ve Lake seçenekleriyle hayalinizdeki mutfağı hayata geçiriyoruz. LED aydınlatma efektleriyle benzersiz ambiyans yaratıyoruz.",              imageSrc: "http://img.b2bpic.net/free-photo/base-units-led-line-cooktop_169016-68864.jpg",              imageAlt: "Luxury Kitchen Design with Golden LED"
            },
            {
              id: "02",              title: "Giyinme Odası & Gardırop",              description: "Fonksiyonel ve şık depolama çözümleri ile kişisel alan yaratıyoruz. Her detay göz önüne alınarak tasarlanıyor.",              imageSrc: "http://img.b2bpic.net/free-photo/kitchen-symmetry-metal-cutlery-minimalist-storage_169016-68870.jpg",              imageAlt: "Elegant Wardrobe Interior"
            },
            {
              id: "03",              title: "TV Üniteleri",              description: "Salonlarınıza mimari dokunuş katıyor, estetik ve fonksiyonu mükemmel dengeye getiriyoruz.",              imageSrc: "http://img.b2bpic.net/free-photo/marble-wall-living-room-mock-up_43614-920.jpg",              imageAlt: "Modern TV Unit Design"
            },
            {
              id: "04",              title: "Banyo Mobilyaları",              description: "Kaliteli malzeme ve şık işçiliğin mükemmel birleşimi. Banyo alanınızı lüks spa deneyimine çeviriyoruz.",              imageSrc: "http://img.b2bpic.net/free-photo/basin-black-faucet-green-bathroom-with-lighting-cozy-spa-nook_169016-69326.jpg",              imageAlt: "Premium Bathroom Furniture"
            }
          ]}
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="values" data-section="values">
        <MetricCardThree
          title="Değerlerimiz"
          description="Yirmi yıllık deneyim, mükemmellik arayışı ve müşteri odaklı yaklaşımımız bizi ayırt ediyor."
          tag="Temel Prensiplerimiz"
          textboxLayout="default"
          metrics={[
            { id: "1", icon: Hammer, title: "Temiz İşçilik", value: "100%" },
            { id: "2", icon: Shield, title: "Kaliteli Malzeme", value: "Premium" },
            { id: "3", icon: Clock, title: "Zamanında Teslimat", value: "Garantili" }
          ]}
          animationType="scale-rotate"
          useInvertedBackground={false}
        />
      </div>

      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="Hakkımızda"
          tagIcon={Leaf}
          title="Doğa Tasarım Mobilya - İzmir'in Prestijli Seçimi"
          description="Kurucu: Ahmet Doğan"
          subdescription="20 Yılın Deneyimi | İzmir, Karabağlar"
          icon={Star}
          imageSrc="http://img.b2bpic.net/free-photo/empty-lounge-area-hotel-lobby_482257-78142.jpg"
          imageAlt="Doğa Tasarım Showroom"
          mediaAnimation="blur-reveal"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="Doğa Tasarım Mobilya ile çalışmak, yalnızca bir hizmet almak değil, bir sanat eseri yaratmaktır. Her detay düşünülüyor, her malzeme seçiliyor, her zaman korunuyor."
          rating={5}
          author="Fatih Özcan, İç Mimar - Tasarım Danışmanı"
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/successful-businesswoman-ready-challenges_1163-4336.jpg", alt: "Müşteri 1" },
            { src: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg", alt: "Müşteri 2" },
            { src: "http://img.b2bpic.net/free-photo/portrait-young-woman-with-long-brown-hair-black-t-shirt-white-jacket_613910-8245.jpg", alt: "Müşteri 3" },
            { src: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg", alt: "Müşteri 4" }
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Yaşam alanlarınızı tasarlamaya hazır mısınız? Hadi başlayalım!"
          animationType="entrance-slide"
          background={{ variant: "plain" }}
          buttons={[
            { text: "WhatsApp ile İletişim", href: "https://wa.me/905467216775" },
            { text: "Instagram Sayfamız", href: "https://instagram.com/doga._mobilya" }
          ]}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="Doğa Tasarım"
          columns={[
            {
              title: "Hızlı Bağlantılar",              items: [
                { label: "Koleksiyonlar", href: "#collections" },
                { label: "Değerlerimiz", href: "#values" },
                { label: "Hakkımızda", href: "#about" }
              ]
            },
            {
              title: "İletişim",              items: [
                { label: "Telefon: +90 546 721 67 75", href: "tel:+905467216775" },
                { label: "Adres: 5788/5. Sk. No:15, Karabağlar/İzmir", href: "#" },
                { label: "WhatsApp", href: "https://wa.me/905467216775" }
              ]
            },
            {
              title: "Sosyal Medya",              items: [
                { label: "Instagram: @doga._mobilya", href: "https://instagram.com/doga._mobilya" }
              ]
            }
          ]}
          copyrightText="© 2025 Doğa Tasarım Mobilya. Tüm Hakları Saklıdır. İzmir"
        />
      </div>
    </ThemeProvider>
  );
}
