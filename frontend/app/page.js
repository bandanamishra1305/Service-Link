import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="container text-center animate-fade-in" style={{ padding: '6rem 1.5rem', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h1 className="text-gradient" style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Find Trusted Workers <br /> In Minutes
          </h1>
          <p className="text-muted" style={{ fontSize: '1.25rem', maxWidth: '600px', marginBottom: '2.5rem' }}>
            Labour Link connects homeowners with verified professionals and trusted shops. Reliable service, secure payments, and live tracking.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/auth/signup" className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
              Get Started Right Now
            </Link>
            <Link href="#features" className="btn-secondary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
              Learn More
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container" style={{ padding: '5rem 1.5rem' }}>
          <h2 className="section-title text-gradient">Why Choose Labour Link?</h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛡️</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Trusted & Verified</h3>
              <p className="text-muted">Every worker goes through a rigorous verification process. We ensure your safety and peace of mind.</p>
            </div>
            <div className="glass-panel delay-100" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📍</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Live Tracking</h3>
              <p className="text-muted">Track your hired professional in real-time. Know exactly when they will arrive at your doorstep.</p>
            </div>
            <div className="glass-panel delay-200" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💳</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Secure Payments</h3>
              <p className="text-muted">Pay securely through cash, UPI, or cards only after the job is completed and verified via OTP.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container text-center" style={{ padding: '5rem 1.5rem', marginBottom: '4rem' }}>
          <div className="glass-panel" style={{ padding: '4rem 2rem', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.1))' }}>
            <h2 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Ready to transform your home?</h2>
            <p className="text-muted" style={{ fontSize: '1.2rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              Join thousands of satisfied homeowners and grow your service business today.
            </p>
            <Link href="/auth/signup" className="btn-primary" style={{ fontSize: '1.25rem', padding: '1rem 3rem' }}>
              Create Your Account
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
