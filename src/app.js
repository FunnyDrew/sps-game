import i18next from 'i18next';
import ru from './ru.js';
import en from './en.js';

const i18 = i18next.createInstance();
i18.init({
  lng: 'ru',
  debug: true,
  resources:{
    en,
    ru,
  }
});

export default () => {
  const title = document.querySelector('title');  
  title.textContent = i18.t('title');
}
