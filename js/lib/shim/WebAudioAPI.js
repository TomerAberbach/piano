/**
 * @license -------------------------------------------------------------------
 *   module: WebAudioShim - Fix naming issues for WebAudioAPI supports
 *      src: https://github.com/Dinahmoe/webaudioshim
 *   author: Dinahmoe AB
 * -------------------------------------------------------------------
 * Copyright (c) 2012 DinahMoe AB
 * 
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
window.AudioContext=window.AudioContext||window.webkitAudioContext||null,window.OfflineAudioContext=window.OfflineAudioContext||window.webkitOfflineAudioContext||null,function(t){var e,o,n,i=function(t){return"[object Function]"===Object.prototype.toString.call(t)||"[object AudioContextConstructor]"===Object.prototype.toString.call(t)};i(t)&&(o=new t).destination&&o.sampleRate&&(e=t.prototype,n=Object.getPrototypeOf(o.createBufferSource()),i(n.start)||i(n.noteOn)&&(n.start=function(t,e,o){switch(arguments.length){case 0:throw new Error("Not enough arguments.");case 1:this.noteOn(t);break;case 2:if(!this.buffer)throw new Error("Missing AudioBuffer");this.noteGrainOn(t,e,this.buffer.duration-e);break;case 3:this.noteGrainOn(t,e,o)}}),i(n.noteOn)||(n.noteOn=n.start),i(n.noteGrainOn)||(n.noteGrainOn=n.start),i(n.stop)||(n.stop=n.noteOff),i(n.noteOff)||(n.noteOff=n.stop),[["createGainNode","createGain"],["createDelayNode","createDelay"],["createJavaScriptNode","createScriptProcessor"]].forEach((function(t){for(var e,o;t.length;)e=t.pop(),i(this[e])?this[t.pop()]=this[e]:(o=t.pop(),this[e]=this[o])}),e))}(window.AudioContext);