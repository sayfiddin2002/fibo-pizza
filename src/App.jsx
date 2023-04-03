import React from 'react';
import Navbar from './Components/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style/style.css'
import './style/font.css'
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import novinki1 from './img/novinki1.jpg';
import novinki2 from './img/novinki2.jpeg';
import novinki3 from './img/novinki3.jpeg';
import novinki4 from './img/novinki4.jpeg';

import Zavtrk from './pages/zavtrk/Zavtrk';

import zavtrk1 from './img/zavtrk1.jpeg';
import zavtrk2 from './img/zavtrk2.jpeg';
import zavtrk3 from './img/zavtrk3.jpeg';
import ZavrtrkDetail from './pages/zavtrk/ZavrtrkDetail';
import Footer from './pages/Footer';
import Novinki from './Components/Novinki';
import OpenNovinki from './Components/OpenNovinki';


import pitsa5 from './img/pitsa5.jpeg';
import pitsa6 from './img/pitsa6.jpeg';
import pitsa7 from './img/pitsa7.jpeg';
import pitsa8 from './img/pitsa8.jpeg';
import pitsa9 from './img/pitsa9.jpg';
import pitsa10 from './img/pitsa10.jpg';
import pitsa11 from './img/pitsa11.jpg';
import pitsa12 from './img/pitsa12.jpg';
import pitsa13 from './img/pitsa13.jpg';
import pitsa14 from './img/pitsa14.jpg';
import pitsa15 from './img/pitsa15.jpg';
import pitsa16 from './img/pitsa16.jpg';
import pitsa17 from './img/pitsa17.jpg';
import pitsa18 from './img/pitsa18.jpg';
import pitsa19 from './img/pitsa19.jpg';
import pitsa20 from './img/pitsa20.jpg';
import Pitsa from './pages/pitsa/Pitsa';

import pasta1 from './img/pasta1.jpeg';
import pasta2 from './img/pasta2.jpg';
import pasta3 from './img/pasta3.jpg';
import pasta4 from './img/pasta4.jpg';
import pasta5 from './img/pasta5.jpeg';
import pasta6 from './img/pasta6.jpeg';
import pasta7 from './img/pasta7.jpeg';
import pasta8 from './img/pasta8.jpeg';
import pasta9 from './img/pasta9.jpeg';
import pasta10 from './img/pasta10.jpeg';
import pasta11 from './img/pasta11.jpeg';
import pasta12 from './img/pasta12.jpeg';
import pasta13 from './img/pasta13.jpeg';
import pasta14 from './img/pasta14.jpeg';
import pasta15 from './img/pasta15.jpeg';
import pasta16 from './img/pasta16.png';
import Pasta from './pages/pasta/Pasta';

import ravioli1 from './img/ravioli1.png';
import ravioli2 from './img/ravioli2.png';
import ravioli3 from './img/ravioli3.jpeg';
import Ravioli from './pages/ravioli/Ravioli';

import supi1 from './img/cupi1.png';
import supi2 from './img/supi2.png';
import supi3 from './img/supi3.png';
import supi4 from './img/supi4.png';
import Supi from './pages/supi/Supi';

import zakiska1 from './img/zakiska1.png';
import zakiska2 from './img/zakiska2.png';
import zakiska3 from './img/zakiska3.png';
import zakiska4 from './img/zakiska4.jpeg';
import zakiska5 from './img/zakiska5.jpeg';
import zakiska6 from './img/zakiska6.png';
import zakiska7 from './img/zakiska7.png';
import zakiska8 from './img/zakiska8.png';
import Zakiska from './pages/Горячие закуски/Zakiska';

import salat1 from './img/salat1.png';
import salat2 from './img/salat2.jpeg';
import salat3 from './img/salat3.jpeg';
import salat4 from './img/salat4.jpeg';
import salat5 from './img/salat5.jpeg';
import salat6 from './img/salat6.png';
import salat7 from './img/salat7.png';
import salat8 from './img/salat8.png';
import Salat from './pages/salat/Salat';

import suv1 from './img/suv1.jpeg';
import suv2 from './img/suv2.png';
import suv3 from './img/suv3.png';
import suv4 from './img/suv4.jpg';
import suv5 from './img/suv5.jpg';
import suv6 from './img/suv6.png';
import suv7 from './img/suv7.jpeg';
import suv8 from './img/suv8.jpeg';
import Napitki from './pages/napitki/Napitki';
import Kontact from './pages/kontakt/Kontact';
import Card from './Components/Card';
import Daastavka from './Components/Daastavka';
import PitsaDetail from './pages/pitsa/PitsaDetail';
import PastaDetailed from './pages/pasta/PastaDetailed';
import Raviolidetail from './pages/ravioli/Raviolidetail';
import SupiDetail from './pages/supi/SupiDetail';
import ZakiskaDetail from './pages/Горячие закуски/ZakiskaDetail';
import SalatDetail from './pages/salat/SalatDetail';
import NapitkiDetail from './pages/napitki/NapitkiDetail';
import OpenPitsa from './Components/OpenPitsa';
import Po_card from './pages/Po_card';



function App() {

  const [novinki, setNovinki] = useState([
    { id: 1, stock: 0, price: 75, img: novinki1, name: 'Сок добрый детский', description: 'Яблочный сок' },
    { id: 2, stock: 0, price: 250, img: novinki2, name: 'Чай без чая - Глинтвейн', description: 'Пюре глинтвейна, апельсин, сушеное яблоко, мята.' },
    { id: 3, stock: 0, price: 250, img: novinki3, name: 'Чай без чая - Облепиха', description: 'Пюре облепихи, ягоды облепихи, имбирь, апельсин ' },
    { id: 4, stock: 0, price: 250, img: novinki4, name: 'Чай без чая -Лесные Ягоды', description: 'Фруктовое пюре ягод, черная смородина, мята.' },
  ]);
  const [detail, setDetail] = useState(null);


  const [zavtrks, setZavtrk] = useState([
    { id: 1, stock: 0, img: zavtrk1, name: 'Овсяная каша с грушей', description: 'Геркулес, классическое молоко, сахар, груша, лепестки миндаля..', price: 240 },
    { id: 2, stock: 0, img: zavtrk2, name: 'Рисовая каша на кокосом молоке', description: 'Кокосовое молоко, рис, сахар, кокосовые чипсы..', price: 260 },
    { id: 3, stock: 0, img: zavtrk3, name: 'Рисовая каша с рикоттой', description: 'Классическое молоко, рис, сахар, рикотта, лепестки миндаля..', price: 290 },
    { id: 4, stock: 0, img: pasta10, price: 650, name: 'Паста с креветками', description: 'Фетучини ручной работы в фирменном соусе Альфредо ' },
  ]);
  const [detailed, setDetailed] = useState(null);

  const [pitsa, setPitsa] = useState([
    { id: 5, stock: 0, price: 270, img: pitsa5, name: 'Слайс пиццы Ветчина-Грибы', description: 'Слайс пиццы на тонком неаполитанском тесте, на итальянской закваске и дрожжах (созревание теста 48 часов). Пицца на томатной основе с добавлением моцареллы. Кусок пиццы, в целой пицце 8 слайсов (30 см)' },
    { id: 6, stock: 0, price: 270, img: pitsa6, name: 'Слайс пиццы Маргарита', description: 'Слайс пиццы на тонком неаполитанском тесте, на итальянской закваске и дрожжах (созревание теста 48 часов). Пицца на томатной основе с добавлением моцареллы. Кусок пиццы, в целой пицце 8 слайсов (30 см)' },
    { id: 7, stock: 0, price: 270, img: pitsa7, name: 'Слайс пиццы Четыре Сыра', description: 'Слайс пиццы на тонком неаполитанском тесте на итальянской закваске и дрожжах (созревание теста 48 часов), на сливочной основе с сырами дорблю, моцарелла, пармезан, чеддер. Кусок пиццы (30 см), в целой пицце 8 слайсов' },
    { id: 8, stock: 0, price: 270, img: pitsa8, name: 'Слайс пиццы Пеперони', description: 'Слайс пиццы на тонком неаполитанском тесте на итальянской закваске и дрожжах (созревание теста 48 часов), на томатной основе с пикантной колбасой пеперони. Кусок пиццы (30 см), в целой пицце 8 слайсов' },
    { id: 9, stock: 0, price: 480, img: pitsa9, name: 'Маргарита', description: 'Пицца на тонком неаполитанском тесте, на итальянской закваске и дрожжах (созревание теста 48 часов). Пицца на томатной основе с добавлением моцареллы (30 см)' },
    { id: 10, stock: 0, price: 510, img: pitsa10, name: 'Ветчина грибы', description: 'Пицца на тонком неаполитанском тесте, на итальянской закваске и дрожжах (созревание теста 48 часов), на томатной основе с ветчиной из индейки и грибами (30 см)' },
    { id: 11, stock: 0, price: 530, img: pitsa11, name: 'Пепперони', description: 'Пицца на тонком неаполитанском тесте на итальянской закваске и дрожжах (созревание теста 48 часов), на томатной основе с пикантной колбасой пепперони (30 см)' },
    { id: 12, stock: 0, price: 540, img: pitsa12, name: 'Сырный цыпленок', description: 'Пицца на тонком неаполитанском тесте, на итальянской закваске и дрожжах (созревание теста 48 часов), фирменный соус альфредо, сочный цыпленком, томаты, сырный соус (30 см)' },
    { id: 13, stock: 0, price: 550, img: pitsa13, name: 'Грибная с трюфельным ', description: 'На тонком неаполитанском тесте, итальянской закваске и дрожжах (созревание теста 48 часов), на сливочной основе с сыром моцарелла, шампиньонами и трюфельным маслом (30 см)' },
    { id: 14, stock: 0, price: 590, img: pitsa14, name: 'Цезарь', description: 'На тонком неаполитанском тесте, итальянской закваске и дрожжах (созревание теста 48 часов), на сливочной основе с сыром моцарелла, нежными кусочками куриного филе, хрустящими листьями салата Романо, сочными помидорами черри и пикантным соусом Цезарь (30 см)' },
    { id: 15, stock: 0, price: 590, img: pitsa15, name: 'Грибная карбонара', description: 'Пицца на тонком неаполитанском тесте, на итальянской закваске и дрожжах (созревание теста 48 часов), фирменный соус альфредо, беконом, шампиньоны (30 см)' },
    { id: 16, stock: 0, price: 590, img: pitsa16, name: 'Четыре сыра', description: 'Пицца на тонком, неаполитанском тесте, итальянской закваске и дрожжах (созревание теста 48 часов), на сливочной основе с сырами дорблю, моцарелла, пармезан, чеддер (30 см).' },
    { id: 17, stock: 0, price: 650, img: pitsa17, name: 'Двойная пепперони', description: 'Пицца на тонком неаполитанском тесте на итальянской закваске и дрожжах (созревание теста 48 часов), на томатной основе с пикантной колбасой пепперони (30 см)' },
    { id: 18, stock: 0, price: 650, img: pitsa18, name: 'Цыпленок песто', description: 'Пицца на тонком неаполитанском тесте, на итальянской закваске и дрожжах. Пицца на сливочной основе с нежным филе цыпленка, грибами и домашним соусом песто (30 см)' },
    { id: 19, stock: 0, price: 790, img: pitsa19, name: 'Буратино', description: 'Пицца на тонком неаполитанском тесте на итальянской закваске и дрожжах (созревание теста 48 часов), на томатной основе с микс салатом, томатами, бурратой, базиликовым маслом и бальзамическим крем-соусом (30 см)' },
    { id: 20, stock: 0, price: 790, img: pitsa20, name: 'Римская пицца', description: 'Пицца на тонком неаполитанском тесте, на итальянской закваске и дрожжах (созревание теста 48 часов), на томатной основе с тигровыми креветками, цукини и соусом песто (30 см)' },
  ])

  const [pissa, setPissa] = useState(null);

  const [pasta, setPasta] = useState([
    { id: 1, stock: 0, img: pasta1, price: 390, name: 'Паста Альфредо', description: 'Домашняя паста феттучине в фирменном соусе Альфредо (на основе сливок, пармезана, черного перца и чеснока). При подаче посыпается пармезаном и черным перцем' },
    { id: 2, stock: 0, img: pasta2, price: 440, name: 'Паста Лесная', description: 'Спагетти ручной работы в фирменном лайт соусе без сливок с белыми грибами и петрушкой' },
    { id: 3, stock: 0, img: pasta3, price: 450, name: 'Паста с белыми грибами и курицей', description: 'Феттуччине ручной работы в фирменном соусе Альфредо с обжаренными белыми грибами и курицей. Посыпается пармезаном и черным перцем' },
    { id: 4, stock: 0, img: pasta4, price: 550, name: 'Паста с вонголе', description: 'Спагетти ручной работы с вонголе (моллюски), сливочное масло, чесночное масло, рыбный соус, петрушка' },
    { id: 5, stock: 0, img: pasta5, price: 430, name: 'Паста Дикая грибная Санта', description: 'Фетучине с шампиньонами в соусе Альфредо (на основе сливок, пармезана, чеснока и черного и соевого соуса) с добавлением зеленого лука. При подаче посыпается пармезаном и черным перцем' },
    { id: 6, stock: 0, img: pasta6, price: 470, name: 'Паста с курицей в сливочно-устричном соусе', description: 'Домашние феттучине в соусе Альфредо (на основе сливок, пармезана, чеснока и черного перца с добавлением устричного и соевого соуса) с курицей сувид и болгарским перцем. При подаче посыпается пармезаном и черным перцем' },
    { id: 7, stock: 0, img: pasta7, price: 490, name: 'Паста Карбонара', description: 'Фетучине ручной работы с сырокопченым беконом в фирменном соусе Альфредо (на основе сливок, пармезана, чеснока и черного перца) с добавлением петрушки. При подаче посыпается черным перцем и пармезаном' },
    { id: 8, stock: 0, img: pasta8, price: 490, name: 'Паста с домашним сыром и вялеными томатами', description: 'Фетучине ручной работы в фирменном соусе Альфредо (на основе сливок, пармезана, чеснока и черного перца). При отдаче украшается вялеными томатами, домашним сыром, фирменным соусом песто, пармезаном и черным перцем' },
    { id: 9, stock: 0, img: pasta9, price: 650, name: 'Паста с креветками и трюфелем', description: 'Фетучини ручной работы в фирменном соусе Альфредо (на основе сливок, пармезана, чеснока, черного перца) с обжаренными креветками и трюфельным маслом. При отдаче посыпается пармезаном и черным перцем' },
    { id: 10, stock: 0, img: pasta10, price: 650, name: 'Паста с семгой и цукини', description: 'Фетучине ручной работы с семгой и цукини в фирменном соусе Альфредо (на основе сливок, пармезана, чеснока и черного перца) с добавлением соевого соуса. При отдаче посыпается пармезаном и черным перцем' },
    { id: 11, stock: 0, img: pasta11, price: 650, name: 'Блю чиз с горгонзолой и прошутто', description: 'Домашние феттучине в фирменном соусе Блю Чиз (на основе сливок, пармезана и итальянской горгонзолы). При отдаче украшаются слайсами итальянского прошутто, пармезаном и черным перцем' },
    { id: 12, stock: 0, img: pasta12, price: 650, name: 'Паста с морепродуктами в сливочном соусе', description: 'Паста ручной работы с морепродуктами (креветки, мидии, кальмары) в фирменном соусе Альфредо на основе сливок, пармезана, чеснока, черного перца с добавлением соевого соуса и петрушки. При отдаче посыпается пармезаном и черным перцем' },
    { id: 13, stock: 0, img: pasta13, price: 430, name: 'Паста Помодоро с базиликом', description: 'Домашние спагетти в фирменном соусе Помодоро, (на основе итальянских томатов в собственном соку, базилика, чеснока и черного перца). При подаче посыпается черным перцем и пармезаном' },
    { id: 14, stock: 0, img: pasta14, price: 490, name: 'Болоньезе с мраморной говядиной', description: 'Спагетти ручной работы в фирменный соусе Болоньезе (на основе говяжьего фарша, томатов в собственном соку, моркови, репчатого лука, сельдерея и специй). При отдаче посыпается пармезаном и черным перцем' },
    { id: 15, stock: 0, img: pasta15, price: 550, name: 'Паста с курицей и халапеньо в томатно-сливочном соусе', description: 'Фетучине ручной работы с курицей сувид и халапеью в томатно-сливочном соусе (на основе итальянских томатов в собственном соку, сливок, чеснока и черного перца) с добавлением петрушки. При отдаче посыпается пармезаном и черным перцем' },
    { id: 16, stock: 0, img: pasta16, price: 650, name: 'Помодоро с фермерской бурратой', description: 'Спагетти ручной работы в фирменном соусе Помодоро (на основе итальянских томатов в собственном соку, базилика, пармезана, чеснока и черного перца). При отдаче украшается половинкой фермерской бурраты, пармезаном, оливковым маслом и черным перцем' },
  ])

  const [past, setPast] = useState(null);


  const [ravioli, setRavioli] = useState([
    { id: 1, stock: 0, img: ravioli1, price: 490, name: 'Равиоли с курицей Полло', description: 'Равиоли  ручной работы с начинкой из куриного филе с сельдереем и специями(мускатный орех,черный перец, белый перец). При подаче посыпаются пармезаном и черным перцем. Соус на выбор :' },
    { id: 2, stock: 0, img: ravioli2, price: 400, name: 'Равиоли с грибами Фунги', description: 'Равиоли ручной работы с начинкой из грибов (шампиньоны), со сливочным сыром и специями(мускатный орех,черный перец, белый перец). При подаче посыпаются пармезаном и черным перцем. Соус на выбор: ' },
    { id: 3, stock: 0, img: ravioli3, price: 700, name: 'Равиоли с креветками Ди маре', description: 'Равиоли ручной работы с начинкой из тигровых креветок нарезанных тар-таром, с добавлением сливочно-творожного сыра, пармезана и черного перца. Тесто окрашено чернилами каракатицы. При отдаче блюдо посыпается пармезаном и черным перцем. Соус на выбор:' },
  ])
  const [ravi, setRavi] = useState(null);


  const [supi, setSupi] = useState([
    { id: 1, stock: 0, img: supi1, price: 290, name: 'Куриный суп с домашней лапшой', description: 'Куриный бульон, курица, домашняя лапша, петрушка, черный перец' },
    { id: 2, stock: 0, img: supi2, price: 340, name: 'Томатный крем-суп с домашним сыром и соусом песто', description: 'Фирменный томатный суп на основе томатов в собственном соку. Подается с домашним сыром и соусом песто' },
    { id: 3, stock: 0, img: supi3, price: 360, name: 'Сырный крем-суп с вялеными томатами', description: 'Сыр чеддер, моцарелла, пармезан, вяленые томаты, картофель, лук репчатый, петрушка' },
    { id: 4, stock: 0, img: supi4, price: 490, name: 'Томатный крем-суп с морепродуктами и соусом Песто', description: 'Фирменный томатный суп на основе томатов в собственном соку. Подается обжаренными морепродуктами (креветки, мидии, кальмары) и соусом песто' },
  ])
  const [sup, setSup] = useState(null);

  const [zakus, setZakus] = useState([
    { id: 1, stock: 0, img: zakiska1, price: 270, name: 'Картофель по-деревенски', description: 'Обжаренный во фритюре до хрустящей корочки картофель дольками' },
    { id: 2, stock: 0, img: zakiska2, price: 400, name: 'Картофель фри с пармезаном', description: 'Обжаренный во фритюре до хрустящей корочки картофель. ' },
    { id: 3, stock: 0, img: zakiska3, price: 250, name: 'Куриные крылья', description: 'Крылья в пикантной панировке из курицы халяль.  (3 шт.)' },
    { id: 4, stock: 0, img: zakiska8, price: 280, name: 'Куриные крылья в сырном соусе от Шефа Fibo', description: 'Маринованные крылья в сырным соусе с крекерами (5 шт.)' },
    { id: 5, stock: 0, img: zakiska4, price: 290, name: 'Куриный крылья в соусе BBQ от Шефа', description: 'Маринованные крылья в соусе BBQ (5 шт.)' },
    { id: 6, stock: 0, img: zakiska5, price: 450, name: 'Наггетсы куриные', description: 'Обжаренные во фритюре до хрустящей корочки наггетсы их курицы халяль.  (8 шт.)' },
    { id: 7, stock: 0, img: zakiska7, price: 410, name: 'Сырные палочки из моцареллы', description: 'Сырные палочки из моцареллы, обжаренные во фритюре до золотистой корочки. (7 шт.)' },
    { id: 8, stock: 0, img: zakiska6, price: 370, name: 'Сырные палочки из чеддера', description: 'Обжаренные во фритюре до золотистой корочки. (7 шт.)' },
  ])
  const [zaks, setZaks] = useState(null);


  const [salat, setSalat] = useState([
    { id: 1, stock: 0, img: salat1, price: 390, name: 'Капрезе с домашним сыром и сладкими томатами', description: 'Томаты, домашний сыр, соус песто, бальзамический крем, базилик, красный лук' },
    { id: 2, stock: 0, img: salat2, price: 550, name: 'Салат с креветкой', description: 'Микс-салат, томаты, тигровые креветки, соус юзу' },
    { id: 3, stock: 0, img: salat3, price: 440, name: 'Салат с прошутто', description: 'Микс-салат, томаты, прошутто, заправка моденская, фирменное базиликовое масло' },
    { id: 4, stock: 0, img: salat4, price: 550, name: 'Салат с тунцом', description: 'Листья Романо, обжаренный тунец, томаты, куриное яйцо, медово-горчичная заправка' },
    { id: 5, stock: 0, img: salat5, price: 290, name: 'Салат Фермерский', description: 'Огурцы, томаты, перец болгарский, оливковое масло' },
    { id: 6, stock: 0, img: salat6, price: 420, name: 'Салат Цезарь с курицей', description: 'Романо, соус цезарь, куриное филе, черри, пармезан, домашние гренки' },
    { id: 7, stock: 0, img: salat7, price: 550, name: 'Салат Цезарь с креветками', description: 'Романо, соус цезарь, креветки, черри, пармезан, домашние гренки' },
    { id: 8, stock: 0, img: salat8, price: 650, name: 'Фермерская буррата с томатами', description: 'Буррата, томаты, бальзамический крем, соус песто, базилик' },
  ]);

  const [alivya, setAlivya] = useState(null);

  const [suv, setSuv] = useState([
    { id: 1, stock: 0, img: suv1, price: 120, name: 'Aqua Minerale', description: 'Фруктовое пюре ягод, черная смородина, мята...' },
    { id: 2, stock: 0, img: suv2, price: 200, name: 'Coca-cola', description: 'Холодный пюре ягод, черная' },
    { id: 3, stock: 0, img: suv3, price: 400, name: 'Био Лимонад', description: 'Натуральные лимонады из Италии. ' },
    { id: 4, stock: 0, img: suv4, price: 180, name: 'Морс домашний', description: 'Морс домашний со вкусом на выбор' },
    { id: 5, stock: 0, img: suv5, price: 75, name: 'Сок добрый детский', description: 'Яблочный сок ' },
    { id: 6, stock: 0, img: suv6, price: 250, name: 'Сок Рич', description: 'Натуральный сок' },
    { id: 7, stock: 0, img: suv7, price: 290, name: 'Чай без чая - Облепиха', description: 'Пюре облепихи, ягоды облепихи, имбирь, апельсин ' },
    { id: 8, stock: 0, img: suv8, price: 170, name: 'Чай без чая - Глинтвейн', description: 'Пюре глинтвейна, апельсин, сушеное яблоко, мята.' },
  ])

  const [napitki, setNapitki] = useState(null);

  const [orders, setOrders] = useState([])
  const [count, setCount] = useState(0)

  const addToCart = (obj) => {
    let isDefined = false;
    for (let o of orders) {
      if (o.id === obj.id) {
        isDefined = true;
      }
    }
    if (!isDefined) {
      setCount(count + obj.price)
      setOrders([...orders, obj])
    }
  }

  const deleteOrderItem = (order) => {
    setOrders(orders.filter(o => o.id !== order.id));
    setCount(count - order.price)
  }

  

  return (
    <BrowserRouter>
      <div className='stikky'>
        <Navbar orders={orders} setCount={setCount} count={count} deleteOrderItem={deleteOrderItem} />
      </div>

      <Routes>
        <Route path='/' element={<Novinki novinki={novinki} addToCart={addToCart} setDetail={setDetail} pitsa={pitsa} setPissa={setPissa} />} />
        <Route path='/novinki/:id' element={<OpenNovinki novinki={novinki} addToCart={addToCart} detail={detail} />} />
        <Route path='/pitsa/:id' element={<OpenPitsa addToCart={addToCart} pissa={pissa} pitsa={pitsa} />} />


        <Route path='/zavtrks' element={<Zavtrk addToCart={addToCart} zavtrks={zavtrks} setDetailed={setDetailed} />} />
        <Route path='/zavtrks/:id' element={<ZavrtrkDetail addToCart={addToCart} zavtrks={zavtrks} detailed={detailed} />} />

        <Route path='/pitsa' element={<Pitsa addToCart={addToCart} pitsa={pitsa} setPissa={setPissa} />} />
        <Route path='/pitsa/:id' element={<PitsaDetail addToCart={addToCart} pissa={pissa} pitsa={pitsa} />} />

        <Route path='/pasta' element={<Pasta addToCart={addToCart} pasta={pasta} setPast={setPast} />} />
        <Route path='/pasta/:id' element={<PastaDetailed addToCart={addToCart} pasta={pasta} past={past} />} />

        <Route path='/ravioli' element={<Ravioli addToCart={addToCart} setRavi={setRavi} ravioli={ravioli} />} />
        <Route path='/ravioli/:id' element={<Raviolidetail addToCart={addToCart} ravi={ravi} ravioli={ravioli} />} />

        <Route path='/supi' element={<Supi addToCart={addToCart} setSup={setSup} supi={supi} />} />
        <Route path='/supi/:id' element={<SupiDetail addToCart={addToCart} supi={supi} sup={sup} />} />

        <Route path='/zakiska' element={<Zakiska addToCart={addToCart} setZaks={setZaks} zakus={zakus} />} />
        <Route path='/zakiska/:id' element={<ZakiskaDetail addToCart={addToCart} zaks={zaks} zakus={zakus} />} />

        <Route path='/salat' element={<Salat addToCart={addToCart} setAlivya={setAlivya} salat={salat} />} />
        <Route path='/salat/:id' element={<SalatDetail alivya={alivya} addToCart={addToCart} salat={salat} />} />

        <Route path='/suv' element={<Napitki addToCart={addToCart} suv={suv} setNapitki={setNapitki} />} />
        <Route path='/suv/:id' element={<NapitkiDetail addToCart={addToCart} suv={suv} napitki={napitki} />} />

        <Route path='/kontact' element={<Kontact />} />
        <Route path='/card' element={<Card orders={orders} deleteOrderItem={deleteOrderItem} count={count} />} />
        <Route path='/dastavka' element={<Daastavka />} />
        <Route path='/po_card' element={<Po_card count={count} />} />
      </Routes>

      <Footer />
    </BrowserRouter>

  )
}

export default App