const categories = document.querySelectorAll('.Categories-item');
const institutionalVideos = document.querySelectorAll('.Video--institutional');
const publicityVideos = document.querySelectorAll('.Video--publicity');
const magazineVideos = document.querySelectorAll('.Video--magazine');

categories.forEach(category => category.addEventListener("click", event => {
  categories.forEach(category => category.classList.remove('Categories-item--active'));
  category.classList.add('Categories-item--active');

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
