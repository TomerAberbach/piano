var Base64Binary={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",decodeArrayBuffer:function(e){var r=Math.ceil(3*e.length/4),t=new ArrayBuffer(r);return this.decode(e,t),t},decode:function(e,r){var t,n,a,i,h,c,f,d=this._keyStr.indexOf(e.charAt(e.length-1)),y=this._keyStr.indexOf(e.charAt(e.length-1)),A=Math.ceil(3*e.length/4);64==d&&A--,64==y&&A--;var s=0,k=0;for(t=r?new Uint8Array(r):new Uint8Array(A),e=e.replace(/[^A-Za-z0-9\+\/\=]/g,""),s=0;s<A;s+=3)n=this._keyStr.indexOf(e.charAt(k++))<<2|(h=this._keyStr.indexOf(e.charAt(k++)))>>4,a=(15&h)<<4|(c=this._keyStr.indexOf(e.charAt(k++)))>>2,i=(3&c)<<6|(f=this._keyStr.indexOf(e.charAt(k++))),t[s]=n,64!=c&&(t[s+1]=a),64!=f&&(t[s+2]=i);return t}};