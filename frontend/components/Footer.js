import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="glass-panel" style={{ borderRadius: 0, borderBottom: 'none', borderLeft: 'none', borderRight: 'none', marginTop: '4rem', padding: '3rem 0' }}>
      <div className="container flex justify-between" style={{ flexWrap: 'wrap', gap: '2rem' }}>
        <div style={{ maxWidth: '300px' }}>
          <h3 className="text-gradient" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Labour Link</h3>
          <p className="text-muted">Connecting trusted professionals with homeowners for all your service needs.</p>
        </div>
        <div className="flex gap-8">
          <div className="flex-col gap-4">
            <h4 style={{ marginBottom: '1rem' }}>Platform</h4>
            <Link href="/auth/signup?role=homeowner" className="text-muted">For Homeowners</Link><br/>
            <Link href="/auth/signup?role=shopowner" className="text-muted">For Shop Owners</Link><br/>
            <Link href="/auth/signup?role=employee" className="text-muted">For Employees</Link>
          </div>
          <div className="flex-col gap-4">
            <h4 style={{ marginBottom: '1rem' }}>Company</h4>
            <Link href="#about" className="text-muted">About Us</Link><br/>
            <Link href="#contact" className="text-muted">Contact</Link><br/>
            <Link href="#privacy" className="text-muted">Privacy Policy</Link>
          </div>
        </div>
      </div>
      <div className="container text-center text-muted" style={{ marginTop: '3rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
        &copy; {new Date().getFullYear()} Labour Link. All rights reserved.
      </div>
    </footer>
  );
}
