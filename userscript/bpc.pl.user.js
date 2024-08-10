// ==UserScript==
// @name            Bypass Paywalls Clean - pl
// @version         4.3.4.0
// @description     Bypass Paywalls of news sites
// @author          magnolia1234
// @downloadURL     https://gitflic.ru/project/magnolia1234/bypass-paywalls-clean-filters/blob/raw?file=userscript/bpc.pl.user.js
// @updateURL       https://gitflic.ru/project/magnolia1234/bypass-paywalls-clean-filters/blob/raw?file=userscript/bpc.pl.user.js
// @homepageURL     https://gitflic.ru/project/magnolia1234/bypass-paywalls-clean-filters
// @supportURL      https://gitflic.ru/project/magnolia1234/bypass-paywalls-clean-filters
// @license         MIT; https://gitflic.ru/project/magnolia1234/bypass-paywalls-clean-filters/blob/raw?file=LICENSE
// @noframes
// @match           *://*.auto-swiat.pl/*
// @match           *://*.businessinsider.com.pl/*
// @match           *://*.forbes.pl/*
// @match           *://*.komputerswiat.pl/*
// @match           *://*.magazyn-kuchnia.pl/*
// @match           *://*.newsweek.pl/*
// @match           *://*.onet.pl/*
// @match           *://*.parkiet.com/*
// @match           *://*.pb.pl/*
// @match           *://*.rp.pl/*
// @match           *://*.wyborcza.biz/*
// @match           *://*.wyborcza.pl/*
// @match           *://*.wysokieobcasy.pl/*
// @connect         archive.fo
// @connect         archive.is
// @connect         archive.li
// @connect         archive.md
// @connect         archive.ph
// @connect         archive.vn
// @grant           GM.xmlHttpRequest
// @require         https://gitflic.ru/project/magnolia1234/bypass-paywalls-clean-filters/blob/raw?file=userscript/bpc_func.js
// ==/UserScript==

(function() {
  //'use strict';

window.setTimeout(function () {

var pl_ringier_domains = ['auto-swiat.pl', 'businessinsider.com.pl', 'forbes.pl', 'komputerswiat.pl', 'newsweek.pl', 'onet.pl'];

if (matchDomain('pb.pl')) {
  let paywall = document.querySelector('div.paywall');
  if (paywall) {
    paywall.classList.remove('paywall');
    let article_hidden = paywall.querySelector('section.o-article-content');
    if (article_hidden)
      article_hidden.removeAttribute('class');
    let loader = document.querySelector('div.o-piano-template-loader-box');
    removeDOMElement(loader);
  }
}

else if (matchDomain(pl_ringier_domains)) {
  let premium = document.querySelector('div.contentPremium[style]');
  if (premium) {
    premium.removeAttribute('class');
    premium.removeAttribute('style');
    premium.parentNode.removeAttribute('class');
  }
  if (matchDomain('newsweek.pl')) {
    let audio_tts = document.querySelector('button.pw-ap__button[disabled]');
    if (audio_tts)
      audio_tts.removeAttribute('disabled');
    let podcast_locked = document.querySelector('div.embed__podcastPlayer.contentPremium-locked');
    if (podcast_locked)
      podcast_locked.classList.remove('contentPremium-locked');
    let podcast_video = document.querySelector('div.videoPremiumWrapper > div.embed__mainVideoWrapper');
    if (podcast_video) {
      podcast_video.removeAttribute('class');
      podcast_video.parentNode.removeAttribute('class');
    }
  }
  let ads = 'div.adPlaceholder , div[class^="Ad"][class*="Placeholder_"], div[data-placeholder-caption], div[data-run-module$=".floatingAd"], aside[data-ad-container], aside.adsContainer, [class^="pwAds"], .hide-for-paying, div.onet-ad, div.bottomBar, ad-default, ad-floating-group, aside.ods-ads__ad-space';
  hideDOMStyle(ads);
}

else if (matchDomain(['rp.pl', 'parkiet.com'])) {
  let paywall = document.querySelector('div.paywallComp');
  if (paywall) {
    removeDOMElement(paywall);
    let article = document.querySelector('div.article--content');
    if (article) {
      let url = window.location.href;
      article.firstChild.before(googleSearchToolLink(url));
    }
  }
}

else if (matchDomain(['wyborcza.biz', 'wyborcza.pl', 'wysokieobcasy.pl', 'magazyn-kuchnia.pl'])) {
  func_post = function () {
    let block_quotes = document.querySelectorAll('blockquote > a[href]');
    for (let elem of block_quotes) {
      if (!elem.innerText.trim())
        elem.innerText = elem.href;
    }
    let empty_spans = document.querySelectorAll('figure > a > span:empty');
    removeDOMElement(...empty_spans);
    header_nofix('div.mrf-article-body', 'span[style*="linear-gradient"]', 'BPC > no archive-fix');
    let ads = 'div[style^="min-height:"]';
    hideDOMStyle(ads, 2);
  }
  let url = window.location.href;
  getArchive(url, 'div.article--content-fadeout', {rm_attrib: 'class'}, 'div.container[class*="pt"]', '', 'div.body > div:not([style*="background-color:"]):not([old-position]):not([name]):not([id])');
  let ads = 'div[id^="adUnit"], div[id^="ads-"]';
  hideDOMStyle(ads);
}

ads_hide();
leaky_paywall_unhide();

}, 1000);

// General Functions

// import (see @require)

})();
