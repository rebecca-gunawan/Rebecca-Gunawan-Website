export default function ProtectedImage({ src, alt, style, className }) {
  return (
    <div className="img-protect-wrap">
      <img
        src={src}
        alt={alt ?? ''}
        draggable="false"
        style={{ width: '100%', height: '100%', display: 'block', ...style }}
        className={className}
      />
    </div>
  );
}
