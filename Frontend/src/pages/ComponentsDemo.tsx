import React from 'react';
import Button from '../components/common/Button/Button';
import Container from '../components/common/Container/Container';
import Section from '../components/common/Section/Section';
import Heading from '../components/common/Heading/Heading';
import Input from '../components/common/Input/Input';
import Card from '../components/common/Card/Card';
import LoadingState from '../components/common/LoadingState/LoadingState';
import EmptyState from '../components/common/EmptyState/EmptyState';
import Error from '../components/common/Error/Error';

export default function ComponentsDemo() {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', padding: '24px', maxWidth: '800px', margin: '0 auto', backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      
      {/* Platform Header Card - Pro Polish */}
      <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '24px', marginBottom: '32px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '16px', boxShadow: '0 2px 4px rgba(79, 70, 229, 0.3)' }}>
            📚
          </div>
          <div>
            <span style={{ fontSize: '11px', fontWeight: '800', color: '#4f46e5', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block' }}>
              WaslaTech Platform
            </span>
            <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '500' }}>Academic Research Assistant Hub</span>
          </div>
        </div>
        
        <h1 style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a', margin: '12px 0 6px 0', letterSpacing: '-0.5px' }}>
          Design System & Components
        </h1>
        <p style={{ fontSize: '13px', color: '#475569', margin: '0', lineHeight: '1.5' }}>
          Interactive showcase for shared UI elements and layout modules designed for source-first research processing.
        </p>
      </div>

      {/* 1. Action Buttons */}
      <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '20px', marginBottom: '24px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
        <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#1e293b', marginBottom: '12px' }}>
          1. Action Buttons
        </h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button onClick={() => {}}>Primary Button</Button>
          <Button onClick={() => {}} className="secondary">Secondary Button</Button>
        </div>
      </div>

      {/* 2. Form Inputs */}
      <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '20px', marginBottom: '24px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
        <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#1e293b', marginBottom: '12px' }}>
          2. Form Inputs
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>
              Username
            </label>
            <Input id="username" label="" placeholder="Enter username..." />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>
              Email Address
            </label>
            <Input id="email" label="" placeholder="name@waslatech.com" />
          </div>
        </div>
      </div>

      {/* 3. Cards Layouts */}
      <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '20px', marginBottom: '24px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
        <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#1e293b', marginBottom: '12px' }}>
          3. Cards Layouts
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
          <Card className="p-4">
            <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: '#0f172a', marginBottom: '6px' }}>
              Research Overview
            </h3>
            <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>
              Standard container for displaying study modules and findings.
            </p>
          </Card>

          <Card className="p-4">
            <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: '#4f46e5', marginBottom: '6px' }}>
              Featured Sources
            </h3>
            <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>
              Highlighted panel for essential academic repository references.
            </p>
          </Card>
        </div>
      </div>

      {/* 4. Feedback States */}
      <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '20px', marginBottom: '16px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
        <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#1e293b', marginBottom: '16px' }}>
          4. System Feedback States
        </h2>

        <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px', backgroundColor: '#f8fafc' }}>
          <div>
            <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>Loading State</span>
            <LoadingState />
          </div>

          <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '16px' }}>
            <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>Empty State</span>
            <EmptyState message="No documents uploaded yet." />
          </div>

          <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '16px' }}>
            <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>Error State</span>
            <Error message="Unable to fetch search results." />
          </div>
        </div>
      </div>

    </div>
  );
}