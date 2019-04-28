const categories = document.querySelectorAll('.Category');
const institutionalVideos = document.querySelectorAll('.video--institutional');
const publicityVideos = document.querySelectorAll('.video--publicity');
const magazineVideos = document.querySelectorAll('.video--magazine');

categories.forEach(category => category.addEventListener("click", event => {
  categories.forEach(category => category.classList.remove('Category--active'));
  category.classList.add('Category--active');

  if ( category.innerText === 'institutionnel') {
    institutionalVideos.forEach(video => video.style.display = "");
    publicityVideos.forEach(video => video.style.display = "none");
    magazineVideos.forEach(video => video.style.display = "none");
  }

  if ( category.innerText === 'publicité') {
    institutionalVideos.forEach(video => video.style.display = "none");
    publicityVideos.forEach(video => video.style.display = "");
    magazineVideos.forEach(video => video.style.display = "none");
  }

  if ( category.innerText === 'magazine | documentaire') {
    institutionalVideos.forEach(video => video.style.display = "none");
    publicityVideos.forEach(video => video.style.display = "none");
    magazineVideos.forEach(video => video.style.display = "");
  }

  if ( category.innerText === 'tout') {
    institutionalVideos.forEach(video => video.style.display = "");
    publicityVideos.forEach(video => video.style.display = "");
    magazineVideos.forEach(video => video.style.display = "");
  }
}));
