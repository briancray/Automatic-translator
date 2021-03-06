(function () {
    var loaded = false;

    test_cc = window.test_cc ? test_cc : false;
    test_url = window.test_url ? test_url : false;

    var inject_jsapi = function () {
        var h = document.getElementsByTagName('head')[0];
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.onreadystatechange = function () {
            if (this.readyState === 'loaded' || this.readyState === 'complete') {
                translate(test_cc || (google.loader.ClientLocation && google.loader.ClientLocation.address.country_code), 'en');
            }
        };
        s.onload = function () {
            translate(test_cc || (google.loader.ClientLocation && google.loader.ClientLocation.address.country_code), 'en');
        };
        s.src = 'http://www.google.com/jsapi';
        h.appendChild(s);
    };

    var translate = function (cc, lang) {
        if (!cc || loaded) {
            return;
        }
        loaded = true;

        cc = cc.toLowerCase();

        // http://www.mobilefish.com/tutorials/country_language_codes/countrylanguagecodes.html
        var cc2lang = {
            af: 'fa', ax: 'sv', al: 'sq', dz: 'ar', as: 'sm', ad: 'ca',
            ao: 'pt', ai: 'en', aq: 'en', ag: 'en', ar: 'es', am: 'hy',
            aw: 'nl', ac: 'en', au: 'en', at: 'de', az: 'az', bs: 'en',
            bh: 'ar', bd: 'bn', bb: 'en', by: 'be', be: 'de', bz: 'en',
            bj: 'fr', bm: 'en', bt: 'dz', bo: 'es', ba: 'bs', bw: 'en',
            br: 'pt', io: 'en', bn: 'ms', bg: 'bg', bf: 'fr', bi: 'fr',
            kh: 'km', cm: 'en', ca: 'en', cv: 'pt', ky: 'en', cf: 'fr',
            td: 'fr', cl: 'es', cn: 'zh', cx: 'en', cc: 'ms', co: 'es',
            km: 'ar', cg: 'fr', cd: 'fr', ck: 'en', cr: 'es', ci: 'fr',
            hr: 'hr', cu: 'es', cy: 'el', cz: 'cs', dk: 'da', dj: 'fr',
            dm: 'en', 'do': 'es', ec: 'es', eg: 'ar', sv: 'es', gq: 'es',
            er: 'ti', ee: 'et', et: 'am', eu: 'en', fk: 'en', fo: 'fo',
            fj: 'en', fi: 'fi', fr: 'fr', gf: 'fr', pf: 'fr', tf: 'fr',
            ga: 'fr', gm: 'en', ge: 'ka', de: 'de', gh: 'en', gi: 'en',
            gr: 'el', gl: 'kl', gd: 'en', gp: 'fr', gu: 'en', gt: 'es',
            gg: 'en', gn: 'fr', gw: 'pt', gy: 'en', ht: 'fr', va: 'lt',
            hn: 'es', hk: 'zh', hu: 'hu', is: 'is', 'in': 'hi', id: 'id',
            ir: 'fa', iq: 'ar', ie: 'en', im: 'en', il: 'he', it: 'it',
            jm: 'en', jp: 'ja', je: 'en', jo: 'ar', kz: 'kk', ke: 'en',
            ki: 'en', kp: 'ko', kr: 'ko', kw: 'ar', kg: 'ky', la: 'lo',
            lv: 'lv', lb: 'ar', ls: 'en', lr: 'en', ly: 'ar', li: 'de',
            lt: 'lt', lu: 'de', mo: 'zh', mk: 'mk', mg: 'mg', mw: 'ny',
            my: 'ms', mv: 'dv', ml: 'fr', mt: 'mt', mh: 'mh', mq: 'fr',
            mr: 'ar', mu: 'en', yt: 'fr', mx: 'es', fm: 'en', md: 'mo',
            mc: 'fr', mn: 'mn', me: 'sr', ms: 'en', ma: 'ar', mz: 'pt',
            mm: 'my', na: 'en', nr: 'na', np: 'ne', nl: 'nl', an: 'nl',
            nc: 'fr', nz: 'en', ni: 'es', ne: 'fr', ng: 'en', nu: 'en',
            nf: 'en', mp: 'en', no: 'no', om: 'ar', pk: 'ur', pw: 'en',
            ps: 'ar', pa: 'es', pg: 'en', py: 'es', pe: 'es', ph: 'tl',
            pn: 'en', pl: 'pl', pt: 'pt', pr: 'es', qa: 'ar', re: 'fr',
            ro: 'ro', ru: 'ru', rw: 'rw', bl: 'fr', sh: 'en', kn: 'en',
            lc: 'en', pm: 'fr', vc: 'en', ws: 'sm', sm: 'it', st: 'pt',
            sa: 'ar', sn: 'fr', rs: 'sr', sc: 'en', sl: 'en', sg: 'en',
            sk: 'sk', si: 'sl', sb: 'en', so: 'so', za: 'en', gs: 'en',
            es: 'es', lk: 'si', sd: 'ar', sr: 'nl', sj: 'no', sz: 'en',
            se: 'sv', ch: 'de', sy: 'ar', tw: 'zh', tj: 'tg', tz: 'sw',
            th: 'th', tl: 'pt', tg: 'fr', tk: 'en', to: 'to', tt: 'en',
            tn: 'ar', tr: 'tr', tm: 'tk', tc: 'en', tv: 'tv', ug: 'en',
            ua: 'uk', ae: 'ar', gb: 'en', us: 'en', um: 'en', uy: 'es',
            vn: 'vi', vg: 'en', vi: 'en', wf: 'fr', eh: 'ar', ye: 'ar',
            yu: 'hr', zm: 'en', zw: 'en'
        };

        if (cc && cc2lang[cc] && cc2lang[cc] != lang) {
            (function (uri) {
                document.location.href = 'http://translate.google.com/translate?langpair=' + lang + '|' + cc2lang[cc] + '&u=' + uri;
            })(test_url || document.location.href);
        }
    };

    inject_jsapi();
})();
