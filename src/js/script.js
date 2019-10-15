import $ from 'jquery';
window.jQuery = $;

import createMask from './mask.js'
import displayMenu from './menu.js'
import submitForm from './feedback.js'

require('@fancyapps/fancybox/dist/jquery.fancybox');

$('.about__callback').fancybox({});

createMask();
displayMenu();
submitForm();
