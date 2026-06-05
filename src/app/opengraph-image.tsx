import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Helix Engine | Autonomous Agentic Compute';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #050505, #111111)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 40 }}>
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              background: 'rgba(16, 185, 129, 0.1)',
              border: '4px solid rgba(16, 185, 129, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 40,
            }}
          >
            <svg
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#34d399"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </div>
          <h1
            style={{
              fontSize: 110,
              fontWeight: 800,
              color: 'white',
              margin: 0,
              letterSpacing: '-0.04em',
            }}
          >
            Helix Engine
          </h1>
        </div>
        <p
          style={{
            fontSize: 48,
            color: '#a3a3a3',
            marginTop: 0,
            maxWidth: 1000,
            textAlign: 'center',
            lineHeight: 1.4,
          }}
        >
          Autonomous Agentic Compute, Redefined.
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
