/**
 * @license -------------------------------------------------------------------
 *   module: Base64Binary
 *      src: http://blog.danguer.com/2011/10/24/base64-binary-decoding-in-javascript/
 *  license: Simplified BSD License
 * -------------------------------------------------------------------
 * Copyright 2011, Daniel Guerrero. All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     - Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     - Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL DANIEL GUERRERO BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
var Base64Binary={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",decodeArrayBuffer:function(e){var r=Math.ceil(3*e.length/4),t=new ArrayBuffer(r);return this.decode(e,t),t},decode:function(e,r){var t,n,a,i,h,c,f,d=this._keyStr.indexOf(e.charAt(e.length-1)),y=this._keyStr.indexOf(e.charAt(e.length-1)),A=Math.ceil(3*e.length/4);64==d&&A--,64==y&&A--;var s=0,k=0;for(t=r?new Uint8Array(r):new Uint8Array(A),e=e.replace(/[^A-Za-z0-9\+\/\=]/g,""),s=0;s<A;s+=3)n=this._keyStr.indexOf(e.charAt(k++))<<2|(h=this._keyStr.indexOf(e.charAt(k++)))>>4,a=(15&h)<<4|(c=this._keyStr.indexOf(e.charAt(k++)))>>2,i=(3&c)<<6|(f=this._keyStr.indexOf(e.charAt(k++))),t[s]=n,64!=c&&(t[s+1]=a),64!=f&&(t[s+2]=i);return t}};