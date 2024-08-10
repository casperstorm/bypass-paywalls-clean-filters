# Bypass Paywalls Clean filters

Adblocker list which allows you to read articles from (supported) sites that implement a paywall (for a lot of sites you also need to install an userscript).\
For some sites it will log you out (or block you to log in); caused by removing cookies or blocking general paywall-scripts.

Disclaimer: the list doesn't support as many sites as the extension/add-on does though (and even less on iOS).\
On iOS you can also use [Shortcuts](https://apps.apple.com/app/shortcuts/id915249334) app with [Unpaywall](https://www.icloud.com/shortcuts/71648f5ad34f4d8f972718e5f3621ffe) shortcut for some unsupported sites.

### Installation

#### adblocker filters

Use a browser which supports extensions/add-ons and install an adblocker (like uBlock Origin or AdGuard).\
Now add custom (content)filter (copy link):
[Bypass Paywalls Clean filters](https://gitflic.ru/project/magnolia1234/bypass-paywalls-clean-filters/blob/raw?file=bpc-paywall-filter.txt)\
Or subscribe:
[subscribe on filterlists.com](https://filterlists.com/lists/bypass-paywalls-clean-filter) -
[subscribe for AdGuard](https://subscribe.adblockplus.org/?location=https%3A%2F%2Fgitflic.ru%2Fproject%2Fmagnolia1234%2Fbypass-paywalls-clean-filters%2Fblob%2Fraw%3Ffile%3Dbpc-paywall-filter.txt&title=Bypass%20Paywalls%20Clean%20filters)

Brave browser has also incorporated the filterlist (without userscripts though), but some filter rules don't work in Brave's buit-in adblocker or are actively deactivated.\
Better add the filterlist to an extension like uBlock Origin.

On Android you can use [Via Browser](https://play.google.com/store/apps/details?id=mark.via.gp) which supports custom filterlists & userscripts.

You can also install an app like AdGuard* (on Android & iOS/macOS) or [AdLock](https://apps.apple.com/app/adlock-ads-blocker-privacy/id1506604517) (on iOS).\
This way you can use it with Chrome/Firefox (on Android) or Safari (on iOS/macOS).

\* [AdGuard Content Blocker](https://play.google.com/store/apps/details?id=com.adguard.android.contentblocker) (on Android) only works with Yandex Browser or Samsung Internet Browser when you add the filter (url) to user rules (manual update of filter required).\
Or use [AdGuard app](https://adguard.com/adguard-android/overview.html) (from their site) which works for all apps (and automatically updates filter).

An external app may work less effective (timing/refresh issues).\
On iOS there may be no support for scriptlets (for removing cookies, attributes and/or classes), but works with for example AdGuard Premium (paid feature).

#### userscripts

Some fixes also require an app to run an additional userscript to work.\
For example amp-redirect (also disable amp-to-html extension for these sites), unhide text/images and more.

Example apps or extensions/add-ons you can use:

* Android: [AdGuard app](https://adguard.com/adguard-android/overview.html) (load userscript as extension)
* iOS: [wBlock](https://apps.apple.com/app/wblock/id6746388723) or [Tampermonkey (paid)](https://apps.apple.com/app/tampermonkey/id6738342400)
* macOS: [AdGuard app](https://adguard.com/en/adguard-mac/overview.html)
* Windows/ChromeOS: Tampermonkey [Chrome extension](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) or [Firefox add-on](https://addons.mozilla.org/firefox/addon/tampermonkey)

Userscripts for different languages:

[English (& other)](https://gitflic.ru/project/magnolia1234/bypass-paywalls-clean-filters/blob/raw?file=userscript/bpc.en.user.js) -
[Dutch](https://gitflic.ru/project/magnolia1234/bypass-paywalls-clean-filters/blob/raw?file=userscript/bpc.nl.user.js) -
[Finnish/Swedish/Danish](https://gitflic.ru/project/magnolia1234/bypass-paywalls-clean-filters/blob/raw?file=userscript/bpc.fi.se.user.js) -
[French](https://gitflic.ru/project/magnolia1234/bypass-paywalls-clean-filters/blob/raw?file=userscript/bpc.fr.user.js) -
[German](https://gitflic.ru/project/magnolia1234/bypass-paywalls-clean-filters/blob/raw?file=userscript/bpc.de.user.js) -
[Italian](https://gitflic.ru/project/magnolia1234/bypass-paywalls-clean-filters/blob/raw?file=userscript/bpc.it.user.js) -
[Polish](https://gitflic.ru/project/magnolia1234/bypass-paywalls-clean-filters/blob/raw?file=userscript/bpc.pl.user.js) -
[Spanish/Portugese](https://gitflic.ru/project/magnolia1234/bypass-paywalls-clean-filters/blob/raw?file=userscript/bpc.es.pt.user.js)
