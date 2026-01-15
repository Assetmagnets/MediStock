import { Link } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';
import {
    Pill,
    Sparkles,
    Rocket,
    ArrowRight,
    Receipt,
    Package,
    Store,
    BarChart3,
    Users,
    IndianRupee,
    ReceiptIndianRupeeIcon,
    ReceiptText
} from 'lucide-react';
import '../styles/landing.css';

export default function Landing() {
    const { isAuthenticated } = useAuth();


    return (
        <div className="landing-page">
            {/* Background */}
            <div className="landing-bg">
                <div className="bg-gradient"></div>
                <div className="bg-pattern"></div>
            </div>

            {/* Navbar */}
            <nav className="landing-nav">
                <div className="nav-brand">
                    <img src="/logo.png" alt="IntellPharma - AI Powered Pharmacy Management System Logo" className="brand-logo" />
                    <span className="brand-text">IntellPharma</span>
                </div>
                <div className="nav-links">
                    {isAuthenticated ? (
                        <Link to="/dashboard" className="btn btn-primary">
                            Go to Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link to="/login" className="btn btn-ghost">
                                Login
                            </Link>
                            <Link to="/register" className="btn btn-primary">
                                Get Started
                            </Link>
                        </>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <div className="hero-badge">
                        <Sparkles size={16} /> #1 AI Pharmacy Management System
                    </div>
                    <h1 className="hero-title">
                        Transform Your <br />
                        <span className="gradient-text">Pharmacy Business</span>
                        with Intelligence
                    </h1>
                    <p className="hero-description">
                        IntellPharma is the ultimate AI-driven pharmacy software for multi-branch governance, smart inventory control, and automated GST billing. Experience the future of pharmaceutical retail management.
                    </p>
                    <div className="hero-actions">
                        <Link to="/register" className="btn btn-primary btn-lg hover:text-white">
                            <Rocket size={20} /> Get Started Free
                        </Link>
                        <Link to="/login" className="btn btn-secondary btn-lg btn-ghost">
                            Sign In <ArrowRight size={20} />
                        </Link>
                    </div>
                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-value">12+</span>
                            <span className="stat-label">Smart Modules</span>
                        </div>
                        <div className="stat">
                            <span className="stat-value">Zero</span>
                            <span className="stat-label">Expiry Loss</span>
                        </div>
                        <div className="stat">
                            <span className="stat-value">24/7</span>
                            <span className="stat-label">Cloud Access</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="dashboard-preview">
                        <div className="preview-header">
                            <div className="preview-dots">
                                <span></span><span></span><span></span>
                            </div>
                            <span className="preview-title">IntellPharma Analytics Dashboard</span>
                        </div>
                        <div className="preview-content">
                            <div className="preview-card">
                                <span className="preview-icon"><IndianRupee size={24} /></span>
                                <div>
                                    <h4>₹45,230</h4>
                                    <p>Today's Revenue</p>
                                </div>
                            </div>
                            <div className="preview-card">
                                <span className="preview-icon"><Package size={24} /></span>
                                <div>
                                    <h4>1,234</h4>
                                    <p>Active Inventory</p>
                                </div>
                            </div>
                            <div className="preview-card">
                                <span className="preview-icon"><ReceiptIndianRupeeIcon size={24} /></span>
                                <div>
                                    <h4>89</h4>
                                    <p>GST Invoices</p>
                                </div>
                            </div>
                            <div className="preview-card ai-card">
                                <span className="preview-icon"><Sparkles size={24} /></span>
                                <div>
                                    <h4>AI Insights</h4>
                                    <p>"Stock Paracetamol - demand rising +15% this week"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <h2 className="section-title">Everything You Need to Scale</h2>
                <p className="section-subtitle">Powerful tools designed specifically for modern pharmacies, utilizing data-driven healthcare logistics.</p>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <ReceiptText size={32} />
                        </div>
                        <h3>Smart GST Billing</h3>
                        <p>Barcode scanning, automated GST calculation, and instant professional invoice generation.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <Package size={32} />
                        </div>
                        <h3>Inventory Governance</h3>
                        <p>Track stock levels, manage batched expiry dates, and receive automated low-stock alerts.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <Store size={32} />
                        </div>
                        <h3>Multi-Branch Management</h3>
                        <p>Connect and control all your pharmacy branches from a single unified cloud dashboard.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <Sparkles size={32} />
                        </div>
                        <h3>AI Predictive Analytics</h3>
                        <p>Leverage machine learning to predict stock demand and optimize purchasing decisions.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <BarChart3 size={32} />
                        </div>
                        <h3>Compliance Reports</h3>
                        <p>Auto-generate GSTR-1, GSTR-3B and other essential pharma compliance reports in one click.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <Users size={32} />
                        </div>
                        <h3>Staff & Role Control</h3>
                        <p>Secure role-based access control (RBAC) for Pharmacists, Managers, and Store owners.</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-content">
                    <h2>Ready to Transform Your Pharmacy?</h2>
                    <p>Join thousands of healthcare professionals optimizing their business with IntellPharma.</p>
                    <Link to="/register" className="btn btn-primary btn-lg">
                        Start Your Free Trial
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="landing-footer">
                <div className="footer-content">
                    <div className="footer-brand">
                        <img src="/logo.png" alt="IntellPharma Logo" className="footer-logo" />
                        <span>IntellPharma</span>
                    </div>
                    <p>© {new Date().getFullYear()} IntellPharma. All rights reserved.</p>
                </div>
            </footer>

        </div>
    );
}
