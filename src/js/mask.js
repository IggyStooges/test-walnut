// import $ from 'jquery';
// window.jQuery = $;
import Inputmask from "inputmask";

export default function createMask() {

  const phoneInput = document.querySelector(".feedback__tel");
  const phoneMask = new Inputmask("+7(999)999-99-99");

  phoneMask.mask(phoneInput);
}
