import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Booking } from '@/components/Booking';
import { Services } from '@/components/Services';
import { Testimonials } from '@/components/Testimonials';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Testimonials />
                <Services />
                <Booking />
            </main>
            <Footer />
        </>
    );
}
