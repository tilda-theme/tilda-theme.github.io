

$('#searchInput').keypress(function (e) {var key = e.which;if(key == 13){$('.btn__search1222').click();return false;}});
$('.btn__search1222').click(function() {
console.log("click!!!");
var searchInput=$('#searchInput').val();
var _href1=window.location.href;
_href1=decodeURIComponent(_href1);
console.log("_href1=="+_href1);
var _href11=_href1.split('#');var _href110 = _href11[0];
console.log("_href11=="+_href110);
var window_location_href='https://tilda-theme.github.io/'+'search.html'+'#'+searchInput;
if(searchInput!=''){
$('html, body').animate({scrollTop: 0}, 0);
window.location.href = window_location_href;
}
});


$('.j-menu-item').click(function() {var j_menu_item12=$(this).attr('href');window.location.href = j_menu_item12;$('html, body').animate({scrollTop: 0}, 0);location.reload();});
$('.banner222').click(function() {var banner222=$(this).attr('href');window.location.href = banner222;$('html, body').animate({scrollTop: 0}, 0);location.reload();});

if(_hash=='#stroitelstvo_stroimaterialy'){var _h111='Строительство, стройматериалы';}
else if(_hash=='#prodovolstvennye_tovary'){var _h111='Продовольственные товары';}
else if(_hash=='#mebel'){var _h111='Мебель';}
else if(_hash=='#transport_i_uslugi'){var _h111='Транспорт и услуги';}
else if(_hash=='#sport'){var _h111='Спорт, отдых, отели';}
else if(_hash=='#promyshlennost'){var _h111='Промышленность';}
else if(_hash=='#organy_vlasti_zhkh_obschestvennye_i_dr_organizacii_hozyaistva'){var _h111='Общественные организации, ЖКХ, С/Х';}
else if(_hash=='#odezhda_obuv_sumki_bele_tkani'){var _h111='Одежда, обувь';}
else if(_hash=='#obrazovanie_kursy'){var _h111='Образование, курсы';}
else if(_hash=='#detskie_tovari'){var _h111='Детские товары';}
else if(_hash=='#electronika'){var _h111='Электроника';}
else if(_hash=='#medicine'){var _h111='Медицина, тату, косметика';}
else if(_hash=='#neitralnyi_dizain'){var _h111='Нейтральный дизайн';}
else if(_hash=='#delovye_uslugi'){var _h111='Деловые услуги';}
else if(_hash=='#bytovye_uslugi_dosug_turizm'){var _h111='Бытовые услуги';}
else if(_hash=='#bytovye_tovary_elektronika_tovary_dlya_ofisa'){var _h111='Бытовые товары';}
else if(_hash=='#urist'){var _h111='Юридические';}
else if(_hash=='#plumber'){var _h111='Сантехнические услуги';}


if(_h111==undefined){}else{
$('.catalog-title').html(_h111+' | Готовые сайты от 950 ₽');
$('.breadcrumbs-item2').html(_h111);
$('title').html(_h111+' | Создание сайтов от 950 ₽, каталог сайтов, готовые сайты для малого бизнеса | Tilda-ws. ');
$('meta[property="og:title"]').attr('content',_h111+' | Создание сайтов от 950 ₽, каталог сайтов, готовые сайты для малого бизнеса | Tilda-ws. ');
$('meta[name="twitter:title"]').attr('content',_h111+' | Создание сайтов от 950 ₽, каталог сайтов, готовые сайты для малого бизнеса | Tilda-ws. ');
$('meta[name="aiturec:title"]').attr('content',_h111+' | Создание сайтов от 950 ₽, каталог сайтов, готовые сайты для малого бизнеса | Tilda-ws. ');
$('meta[name="description"]').attr('content','Более 5000 готовых сайтов. Разработка сайтов. Купить готовые сайты. Создание сайтов для бизнеса. Категория '+_h111);
$('meta[itemprop="description"]').attr('content','Более 5000 готовых сайтов. Разработка сайтов. Купить готовые сайты. Создание сайтов для бизнеса. Категория '+_h111);
$('meta[name="twitter:description"]').attr('content','Более 5000 готовых сайтов. Разработка сайтов. Купить готовые сайты. Создание сайтов для бизнеса. Категория '+_h111);
$('meta[property="og:description"]').attr('content','Более 5000 готовых сайтов. Разработка сайтов. Купить готовые сайты. Создание сайтов для бизнеса. Категория '+_h111);
$('meta[property="aiturec:description"]').attr('content','Более 5000 готовых сайтов. Разработка сайтов. Купить готовые сайты. Создание сайтов для бизнеса. Категория '+_h111);
}
$('a[href="https://tilda-theme.github.io/'+_hash+'"]').addClass('name');
$('a[href="https://tilda-theme.github.io/'+_hash+'"]').parent().addClass('menu-burger__main-list-item--active');

var _hash22zzz=window.location.hash;console.log("_hash22zzz== "+_hash22zzz);if(_hash22zzz!=''){$('.banners-catalog22').remove();}

$(function(){
$(".j-menu-burger-btn").click(function() {$('.j-menu-burger').addClass('menu-burger--active');$('.j-menu-burger-main').addClass('j-menu-active');});
$(".swiper-slide-active").mouseenter(function() {$(this).addClass('hover');});
$(".swiper-slide-active").mouseleave(function(){$(this).removeClass('hover');});
$(".comment-card__message").mouseenter(function() { $(this).addClass('comment-card__message_hover');$('.j-show-more-btn').hide();});
$(".comment-card__message").mouseleave(function() {$(this).removeClass('comment-card__message_hover');$('.j-show-more-btn').show();});
$(".menu-burger__main-list-item--subcategory").mouseenter(function() {$(this).addClass('menu-burger__main-list-item--active');});
$(".j-close-menu-mobile").click(function(){$('.j-menu-burger').removeClass('menu-burger--active');$('.j-menu-burger-main').removeClass('j-menu-active');});
$(".menu-burger__main-list-item--subcategory").mouseleave(function(){$(this).removeClass('menu-burger__main-list-item--active');$('a[href="https://tilda-theme.github.io/'+_hash+'"]').parent().addClass('menu-burger__main-list-item--active');});
});
$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 100) {
            $('#scroll_top').show();
        } else {
            $('#scroll_top').hide();
        }
    });

    $('#scroll_top').click(function(){
        $('html, body').animate({scrollTop: 0}, 600);
        return false;
    });
});

// var hr0=window.location.href,hr7=hr0.split('/', '6'),hr8=hr7[2],hr1=hr8.split('-', '1'),hr2=hr1[0],hr5='da',hr4='l',hr3='ti',hr6=hr3+hr4+hr5;if(hr2!=hr6){$('body').remove();}