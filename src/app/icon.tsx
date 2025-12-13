import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 24,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          border: '2px solid #D4AF37',
          position: 'relative',
        }}
      >
        {/* Watch Face Background */}
        <div style={{
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          border: '1px solid #D4AF37',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
          {/* Hands */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '8px',
            height: '2px',
            background: '#00BFFF',
            transform: 'translate(0, -50%) rotate(-90deg)',
            transformOrigin: 'left center',
          }} />
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '10px',
            height: '2px',
            background: '#00BFFF',
            transform: 'translate(0, -50%)',
            transformOrigin: 'left center',
          }} />
          {/* Center Dot */}
          <div style={{
            position: 'absolute',
            width: '4px',
            height: '4px',
            background: '#00BFFF',
            borderRadius: '50%',
          }} />
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}

