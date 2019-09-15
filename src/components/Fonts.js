const FontFaceObserver = require('fontfaceobserver');

const Fonts = async () => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css?family=Lato:300,400,700&subset=latin-ext';
  link.rel = 'stylesheet';

  document.head.appendChild(link);

  const lato = new FontFaceObserver('Lato');

  return await lato.load().then(() => {
    document.documentElement.classList.add('lato');
  });
};

export default Fonts;
