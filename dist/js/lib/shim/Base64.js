!function(){var t="undefined"!=typeof exports?exports:this,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function r(t){this.message=t}r.prototype=new Error,r.prototype.name="InvalidCharacterError",t.btoa||(t.btoa=function(t){for(var o,n,a=0,i=e,c="";t.charAt(0|a)||(i="=",a%1);c+=i.charAt(63&o>>8-a%1*8)){if((n=t.charCodeAt(a+=.75))>255)throw new r("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");o=o<<8|n}return c}),t.atob||(t.atob=function(t){if((t=t.replace(/=+$/,"")).length%4==1)throw new r("'atob' failed: The string to be decoded is not correctly encoded.");for(var o,n,a=0,i=0,c="";n=t.charAt(i++);~n&&(o=a%4?64*o+n:n,a++%4)?c+=String.fromCharCode(255&o>>(-2*a&6)):0)n=e.indexOf(n);return c})}();