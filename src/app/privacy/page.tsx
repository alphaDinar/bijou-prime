"use client";
import { adminContact } from "@/src/external/quickLinks";
import React from "react";

/**
 * Bijou Homes — Privacy Policy Page
 * Single-file Next.js (TSX) component styled with Tailwind CSS.
 *
 * Usage:
 * - Place this file in your pages/ or app/(route)/ directory (Next.js) as appropriate.
 * - Update the company contact details and retention periods to match Bijou Homes' policies.
 */

const LAST_UPDATED = "November 26, 2025";

export default function BijouHomesPrivacyPolicy(): JSX.Element {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12 pt-[18vh] md-screen:pt-[25vh]">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
          <p className="mt-2 text-sm text-slate-600">Last updated: <span className="font-medium">{LAST_UPDATED}</span></p>
        </header>

        <nav className="mb-8 bg-white shadow-sm rounded-lg p-4">
          <ul className="flex flex-wrap gap-3 text-sm text-slate-700">
            <li><a className="hover:underline" href="#introduction">Introduction</a></li>
            <li><a className="hover:underline" href="#data-we-collect">Data we collect</a></li>
            <li><a className="hover:underline" href="#how-we-use">How we use your data</a></li>
            <li><a className="hover:underline" href="#sharing">Sharing &amp; disclosure</a></li>
            <li><a className="hover:underline" href="#cookies">Cookies</a></li>
            <li><a className="hover:underline" href="#security">Security</a></li>
            <li><a className="hover:underline" href="#your-rights">Your rights</a></li>
            <li><a className="hover:underline" href="#contact">Contact</a></li>
          </ul>
        </nav>

        <article className="prose prose-slate lg:prose-lg bg-white rounded-lg p-8 shadow-sm">
          <section id="introduction">
            <h2>Introduction</h2>
            <p>
              {'Bijou Homes ("we", "our", "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store and share your information when you use our website, mobile applications and services (collectively, the "Services").'}
            </p>
          </section>

          <section id="data-we-collect">
            <h2>Data we collect</h2>
            <p>We collect information necessary to provide our services and to improve user experience. This may include:</p>

            <h3 className="mt-4">Personal Information</h3>
            <ul>
              <li>Full name, email address, phone number</li>
              <li>Postal address and billing information</li>
              <li>Identification documents (where required for property transactions or KYC)</li>
            </ul>

            <h3 className="mt-4">Technical &amp; Usage Data</h3>
            <ul>
              <li>IP address, device type, browser type and version</li>
              <li>Pages visited, time spent on pages, click and navigation behavior</li>
              <li>Search queries and preferences</li>
            </ul>

            <h3 className="mt-4">Marketing &amp; Communications</h3>
            <p>
              If you opt in, we store your preferences and communication history so we can send you relevant updates
              and promotional material. You can unsubscribe at any time.
            </p>
          </section>

          <section id="how-we-use">
            <h2>How we use your data</h2>
            <p>We use your information for the following purposes:</p>
            <ul>
              <li>To provide, operate and maintain our Services.</li>
              <li>To process property inquiries, bookings, viewings and transactions.</li>
              <li>To respond to your requests and communicate with you.</li>
              <li>To improve and personalize our Services, website and search results.</li>
              <li>To detect, prevent and address technical issues and abuse.</li>
              <li>To send marketing emails and promotional messages (with consent where required).</li>
            </ul>
          </section>

          <section id="sharing">
            <h2>Sharing &amp; disclosure</h2>
            <p>
              We may share your data in limited circumstances, including:
            </p>
            <ul>
              <li>With service providers who perform services on our behalf (e.g., hosting, analytics, payment processors).</li>
              <li>With property owners, agents and other third parties necessary to complete a booking or transaction.</li>
              <li>To comply with legal obligations, court orders, or law enforcement requests.</li>
              <li>In connection with a corporate transaction (e.g., merger, acquisition, asset sale).</li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>
          </section>

          <section id="cookies">
            <h2>Cookies &amp; tracking</h2>
            <p>
              We and our partners use cookies and similar tracking technologies to collect information about how you
              use the Services and to provide tailored content. Cookies help us remember your preferences and show
              relevant listings and ads. You can manage cookie preferences through your browser settings or using
              controls provided on our site.
            </p>

            <h3 className="mt-4">Types of cookies we use</h3>
            <ul>
              <li><strong>Essential:</strong> Required for core site functionality (cannot be disabled).</li>
              <li><strong>Performance:</strong> Help us understand how the site is used.</li>
              <li><strong>Functional:</strong> Remember preferences (e.g., language, region).</li>
              <li><strong>Advertising:</strong> Used to deliver relevant ads; may involve third-party tracking.</li>
            </ul>
          </section>

          <section id="data-retention">
            <h2>Data retention</h2>
            <p>
              We retain personal data for as long as necessary to fulfil the purposes described in this policy, including
              to comply with legal obligations, resolve disputes and enforce our agreements. Retention periods vary by the
              type of data and the services you use; please contact us if you need specific retention information.
            </p>
          </section>

          <section id="security">
            <h2>Security</h2>
            <p>
              We implement reasonable administrative, technical and physical safeguards designed to protect your
              personal information. However, no method of transmission over the internet or electronic storage is 100%
              secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section id="third-party-links">
            <h2>Third-party links</h2>
            <p>
              Our Services may contain links to third-party websites or services. We are not responsible for the privacy
              practices or content of those third parties. We encourage you to read their privacy policies before
              providing personal information.
            </p>
          </section>

          <section id="your-rights">
            <h2>Your rights</h2>
            <p>
              Depending on your jurisdiction, you may have rights regarding your personal data, including the right to:
            </p>
            <ul>
              <li>Access and receive a copy of your data.</li>
              <li>Request correction of inaccurate information.</li>
              <li>Request deletion of your data.</li>
              <li>Object to or restrict processing of your data.</li>
              <li>Request data portability.</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the details in the <a href="#contact">Contact</a> section.
            </p>
          </section>

          <section id="children">
            <h2>{"Children's privacy"}</h2>
            <p>
              Our Services are not directed to children under the age of 16. We do not knowingly collect personal
              information from children. If you believe we have collected data from a child, please contact us so we can
              take steps to remove it.
            </p>
          </section>

          <section id="updates">
            <h2>Changes to this policy</h2>
            <p>
              {"We may update this Privacy Policy from time to time. When we make changes, we will update the 'Last updated' date above and, where required, provide notice of material changes."}
            </p>
          </section>

          <section id="contact">
            <h2>Contact</h2>
            <p>
              If you have questions or requests regarding this Privacy Policy, please contact us:
            </p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:contact@bijouhomes.com">info@bijouhomes.com</a></li>
              <li><strong>Address:</strong> Appolonia City, Oyibi - Accra</li>
              <li><strong>Phone:</strong> {adminContact}</li>
            </ul>
          </section>
        </article>

        <div className="mt-8 flex gap-3">
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-200 bg-white text-sm shadow-sm hover:bg-slate-50"
          >
            Print
          </button>

          <a
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-sky-600 text-white text-sm font-medium shadow-sm hover:bg-sky-700"
            href="/"
          >
            Back to home
          </a>
        </div>

        <footer className="mt-12 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Bijou Homes. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
