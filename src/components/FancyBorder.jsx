import React from 'react';

export default function FancyBorder(Props) {
  return (
    <div style={{ border: `3px solid ${Props.color}` }}>{Props.children}</div>
  );
}
