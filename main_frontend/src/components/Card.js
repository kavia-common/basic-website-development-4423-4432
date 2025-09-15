import React from 'react';

/**
 * PUBLIC_INTERFACE
 * A simple card container with padding and subtle border.
 */
export default function Card({ title, children }) {
  return (
    <div style={{
      textAlign: 'left',
      background: 'var(--bg-primary)',
      border: `1px solid var(--border-color)`,
      borderRadius: 12,
      padding: 16,
      margin: '12px 0',
      boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
    }}>
      {title ? <h3 style={{ marginTop: 0 }}>{title}</h3> : null}
      <div>{children}</div>
    </div>
  );
}
