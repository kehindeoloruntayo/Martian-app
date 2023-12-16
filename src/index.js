import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './css/styles.css';
import Logo from './assets/img/logo18f7.png';
import badge from './assets/img/logo18f7.png';
import telegram from './assets/img/telegram-icon1b84.png';
import x from './assets/img/twitter-icon6d69.png';
import us from './assets/img/static/media/en.2117e9c7.svg';

$("link").attr("href", Logo);
$("img").attr("src", badge);
$(".telegram").attr("src", telegram);
$(".x").attr("src", x);
$(".us").attr("src", us);
