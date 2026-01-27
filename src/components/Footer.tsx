export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-links">
          <a
            className="icon-link"
            href="mailto:yourname@gmail.com"
            aria-label="Email"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm0 2.2V18h16V7.2l-7.4 4.8a1 1 0 0 1-1.2 0L4 7.2zm1.7-.2L12 10.8 18.3 7H5.7z" />
            </svg>
          </a>
          <a
            className="icon-link"
            href="https://www.linkedin.com/in/your-handle/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.94 8.5V20H3.5V8.5h3.44zM5.22 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM20.5 13.3V20h-3.43v-6.2c0-1.6-.57-2.7-1.98-2.7-1.08 0-1.72.72-2 1.41-.1.26-.12.62-.12.99V20H9.53s.05-10.7 0-11.5h3.44v1.63c.46-.7 1.28-1.7 3.12-1.7 2.28 0 3.99 1.5 3.99 4.87z" />
            </svg>
          </a>
        </div>
        <p className="footer-text">Created by Raihan Carder</p>
      </div>
    </footer>
  );
}
