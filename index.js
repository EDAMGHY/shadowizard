function shadowizard({ shadowType, padding = false }) {
  let images = document.querySelectorAll('.shadowizard');
  if (shadowType === 'hard') {
    shadowType = '0px';
  } else {
    shadowType = '15px';
  }
  images.forEach((image) => {
    image.style.boxShadow = `10px 10px ${shadowType} 1px rgba(0,0,0,0.12);`;
    if (padding) {
      image.style.padding = '1rem';
    }
  });
}
module.exports.shadowizard = shadowizard;
