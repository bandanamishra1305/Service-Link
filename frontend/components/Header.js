import Link from 'next/link';

export default function Header() {
  return (
    <header className="glass-panel" style={{ position: 'sticky', top: 0, zIndex: 100, borderRadius: 0, borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}>
      <div className="container flex items-center justify-between" style={{ height: '80px' }}>
        <Link href="/" className="text-gradient" style={{ fontSize: '1.5rem', fontWeight: 800 }}>
          Labour Link
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="#features" style={{ fontWeight: 500 }}>Features</Link>
          <Link href="#how-it-works" style={{ fontWeight: 500 }}>How it Works</Link>
          <Link href="/auth/login" className="btn-secondary">Log In</Link>
          <Link href="/auth/signup" className="btn-primary">Sign Up</Link>
        </nav>
      </div>
    </header>
  );
}
