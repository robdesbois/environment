javascript:(function(){var newSS, styles='* { background: black ! important; color: #88aaee !important; font-family:"Arial" } pre, tt { font-family:"Inconsolata" } :link, :link * { color: #0000EE%20!important%20}%20:visited,%20:visited%20*%20{%20color:%20#551A8B%20!important%20}';%20if(document.createStyleSheet)%20{%20document.createStyleSheet("javascript:'"+styles+"'");%20}%20else%20{%20newSS=document.createElement('link');%20newSS.rel='stylesheet';%20newSS.href='data:text/css,'+escape(styles);%20document.getElementsByTagName("head")[0].appendChild(newSS);%20}%20})();
