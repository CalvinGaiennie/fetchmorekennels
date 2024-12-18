function Header() {
  return (
    <div className={` textDiv center`}>
      <h1>Fetch More Kennels</h1>
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="right"
      >
        <img src="/assets/facebook.png" alt="Facebook" width={50} />
      </a>
    </div>
  );
}

export default Header;
