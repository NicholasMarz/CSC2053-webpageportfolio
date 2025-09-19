function loadNavbar() {
  const container = document.getElementById('navbar-container');
  if (!container) return;

  const nav = document.createElement('nav');
  nav.className = 'navbar navbar-expand-xl navbar-light bg-light';

  const div = document.createElement('div');
  div.className = 'container-fluid';

  const brand = document.createElement('a');
  brand.className = 'navbar-brand';
  brand.href = 'index.html';
  brand.textContent = 'My Portfolio';

  const button = document.createElement('button');
  button.className = 'navbar-toggler';
  button.type = 'button';
  button.setAttribute('data-bs-toggle', 'collapse');
  button.setAttribute('data-bs-target', '#navbarBasic');
  button.setAttribute('aria-controls', 'navbarBasic');
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-label', 'Toggle navigation');
  button.innerHTML = '<span class="navbar-toggler-icon"></span>';

  const collapse = document.createElement('div');
  collapse.className = 'collapse navbar-collapse';
  collapse.id = 'navbarBasic';

  const ul = document.createElement('ul');
  ul.className = 'navbar-nav me-auto mb-2 mb-xl-0';

  const navItems = [
    { text: 'Home', href: 'index.html' },
    { text: 'Hobbies', href: 'hobbies.html' }
  ];

  navItems.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'nav-item';
    const a = document.createElement('a');
    a.className = 'nav-link';
    a.href = item.href;
    a.textContent = item.text;
    li.appendChild(a);
    ul.appendChild(li);
  });

  collapse.appendChild(ul);
  div.appendChild(brand);
  div.appendChild(button);
  div.appendChild(collapse);
  nav.appendChild(div);

  container.appendChild(nav);
}

window.addEventListener('DOMContentLoaded', loadNavbar);
