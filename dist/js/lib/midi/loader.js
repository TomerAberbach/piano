"undefined"==typeof MIDI&&(MIDI={}),MIDI.Soundfont=MIDI.Soundfont||{},MIDI.Player=MIDI.Player||{},function(o){"use strict";o.DEBUG=!0,o.USE_XHR=!0,o.soundfontUrl="./soundfont/",o.loadPlugin=function(t){"function"==typeof t&&(t={onsuccess:t}),o.soundfontUrl=t.soundfontUrl||o.soundfontUrl,o.audioDetect(function(i){var r=window.location.hash,u="";if(i[t.api]?u=t.api:i[r.substr(1)]?u=r.substr(1):i.webmidi?u="webmidi":window.AudioContext?u="webaudio":window.Audio&&(u="audiotag"),n[u]){if(t.targetFormat)var e=t.targetFormat;else e=i["audio/ogg"]?"ogg":"mp3";o.__api=u,o.__audioFormat=e,o.supports=i,o.loadResource(t)}})},o.loadResource=function(t){var i=t.instruments||t.instrument||"acoustic_grand_piano";"object"!=typeof i&&(i=i||0===i?[i]:[]);for(var r=0;r<i.length;r++){var u=i[r];u===+u&&o.GM.byId[u]&&(i[r]=o.GM.byId[u].id)}t.format=o.__audioFormat,t.instruments=i,n[o.__api](t)};var n={webmidi:function(n){o.WebMIDI.connect(n)},audiotag:function(o){t(o,"AudioTag")},webaudio:function(o){t(o,"WebAudio")}},t=function(n,t){for(var r=n.format,u=n.instruments,e=n.onprogress,a=n.onerror,d=u.length,s=d,c=function(){--s||(e&&e("load",1),o[t].connect(n))},f=0;f<d;f++){var l=u[f];MIDI.Soundfont[l]?c():i(u[f],r,function(o,n){e&&e("load",n/d+(d-s)/d,l)},function(){c()},a)}},i=function(n,t,i,r,u){var e=o.soundfontUrl+n+"-"+t+".js";o.USE_XHR?o.util.request({url:e,format:"text",onerror:u,onprogress:i,onsuccess:function(o,n){var t=document.createElement("script");t.language="javascript",t.type="text/javascript",t.text=n,document.body.appendChild(t),r()}}):dom.loadScript.add({url:e,verify:'MIDI.Soundfont["'+n+'"]',onerror:u,onsuccess:function(){r()}})};o.setDefaultPlugin=function(n){for(var t in n)o[t]=n[t]}}(MIDI);