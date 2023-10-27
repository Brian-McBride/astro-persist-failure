console.debug('NAV has loaded');

export function Nav() {
  return (
    <nav className="h-[50px] border-b border-gray-500 w-full text-gray-500 flex gap-2">
      <a href="/one">One</a>
      <a href="/two">Two</a>
      <a href="/three">Three</a>
    </nav>
  );
}
export default Nav;
