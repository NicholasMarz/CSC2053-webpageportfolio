
const toggleBtn = document.getElementById('toggle-photo');
const photoContainer = document.getElementById('photo-container');

toggleBtn.addEventListener('click', () => {

  const isHidden =
    photoContainer.style.display === 'none' ||
    getComputedStyle(photoContainer).display === 'none';

  if (isHidden) {
    
    photoContainer.style.display = 'block';
    toggleBtn.textContent = 'Hide Photo';
  } else {
    
    photoContainer.style.display = 'none';
    toggleBtn.textContent = 'Show Photo';
  }
});

const addArtistButton = document.getElementById('add-artist');

addArtistButton.addEventListener('click', function () {
  const input = prompt('Enter one of your artists:');
  if (input && input.trim() !== '') {
    const p = document.createElement('p');
    p.textContent = '• ' + input;
    p.style.backgroundColor = '#f0f8ff';
    p.style.padding = '5px';
    p.style.margin = '5px 0';
    p.style.borderRadius = '3px';

    const container = document.getElementById('artists-container');
    container.appendChild(p);
  }
});