export default function Hamburger({ isOpen, toggleMenu }) {
  return (
    <div>
      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isOpen ? '✕' : '☰'}
      </button>
    </div>
  );
}