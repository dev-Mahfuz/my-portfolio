  // Select the elements
  const hamburgerBtn = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  const closeBtn = document.querySelector('.close-btn');

  // Toggle the 'show-sidebar' class on the sidebar when the hamburger button is clicked
  hamburgerBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
  });

  // Remove the 'show-sidebar' class when the close button inside the sidebar is clicked
  closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar');
  });
