const A0=21,C8=108,ALL_NOTES=[];for(let e=21;e<=C8;e++)ALL_NOTES.push(e);let loop;function instrument(e){stop(),MIDI.loadResource({instrument:e}),MIDI.programChange(0,MIDI.GM.byName[e].number)}function play(e,t,n,i){if("block"===n)MIDI.chordOn(0,e,127,i);else{let i;if("rolled"===n)i=1/(5*e.length);else{if("arpeggiated"!==n)return void console.log(`Invalid play style: ${n}`);i=t/e.length}e.forEach((e,t)=>MIDI.noteOn(0,e,127,t*i))}MIDI.chordOff(0,e,i+t)}function multiplay(e,t,n){e.forEach((i,l)=>play(i,t/e.length,n,l*t/e.length))}function stop(){clearInterval(loop),MIDI.stopAllNotes()}function midi(e,t,n,i,l,d,o){const a=document.createElement("div");a.setAttribute("class","midi-div");const c=document.createElement("header");c.setAttribute("class","midi-header");const r=document.createElement("p");r.setAttribute("class","midi-p"),r.appendChild(document.createTextNode(e));const s=document.createElement("img");return s.setAttribute("class","midi-img"),s.setAttribute("src","img/play.svg"),s.setAttribute("alt","Play"),s.setAttribute("onclick",`play([${t.toString()}], ${n}, '${i}', 0);`),c.appendChild(r),c.appendChild(s),a.appendChild(c),a.appendChild(piano(t,l,d,o)),a}function progression(e,t,n){const i=document.createElement("div");i.setAttribute("id","play-div");const l=document.createElement("label");l.setAttribute("id","play-label"),l.appendChild(document.createTextNode("Play"));const d=document.createElement("label");d.setAttribute("id","switch-label");const o=document.createElement("input");o.setAttribute("id","play-input"),o.setAttribute("type","checkbox"),o.addEventListener("change",()=>{o.checked?(multiplay(e,t,n),loop=setInterval(()=>multiplay(e,t,n),1e3*t)):stop()});const a=document.createElement("div");return a.setAttribute("id","slider-div"),d.appendChild(o),d.appendChild(a),i.appendChild(l),i.appendChild(d),i}window.addEventListener("load",()=>MIDI.loadPlugin({soundfontUrl:"sf/",instrument:"acoustic_grand_piano"}));