import i18next from 'i18next';
import ru from './ru.js';
import en from './en.js';
import {staticRender} from './render';


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

  const state = {
    ui: {
      lng: 'ru',
    },
  };

  staticRender(i18);


  const lngSwitcher = document.querySelector('button.lng-main');
  lngSwitcher.addEventListener('click', (e) => {
    e.preventDefault();
    state.ui.lng = state.ui.lng === 'ru' ? 'en' : 'ru';
    i18.changeLanguage(state.ui.lng);
    staticRender(i18);    
  })
  


    
}
