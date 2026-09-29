export default function Keycap({ item, onInspect }) {
  const Icon = item.icon;

  return (
    <button
      type="button"
      className="keycap"
      aria-label={`${item.name}: ${item.category}`}
      style={{ '--key-color': item.color, '--key-depth': item.depth, '--key-ink': item.ink }}
      onPointerEnter={() => onInspect?.(item)}
      onFocus={() => onInspect?.(item)}
      onClick={() => onInspect?.(item)}
    >
      <span className="keycap-body">
        <span className="keycap-face">
          <Icon className="keycap-icon" aria-hidden="true" focusable="false" />
          <span className="keycap-label">{item.name}</span>
        </span>
      </span>
    </button>
  );
}
