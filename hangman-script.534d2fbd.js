parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Oi3i":[function(require,module,exports) {
window.onload=function(){var e,t,n,r,a,i,o,c=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",""],l=[],m=document.getElementById("mylives"),s=(document.getElementById("scatagory"),document.getElementById("hint"),document.getElementById("clue"));result=function(){wordHolder=document.getElementById("hold"),correct=document.createElement("ul");for(var e=0;e<n.length;e++)correct.setAttribute("id","my-word"),(r=document.createElement("li")).setAttribute("class","guess"),"-"===n[e]?(r.innerHTML="-",o=1):r.innerHTML="_",l.push(r),wordHolder.appendChild(correct),correct.appendChild(r)},comments=function(){m.innerHTML="You have "+a+" lives",a<1&&(m.innerHTML="Game Over");for(var e=0;e<l.length;e++)i+o===l.length&&(m.innerHTML="You Win!")};canvas=function(){myStickman=document.getElementById("stickman"),context=myStickman.getContext("2d"),context.beginPath(),context.strokeStyle="#fff",context.lineWidth=2},head=function(){myStickman=document.getElementById("stickman"),context=myStickman.getContext("2d"),context.beginPath(),context.arc(60,25,10,0,2*Math.PI,!0),context.stroke()},draw=function(e,t,n,r){context.moveTo(e,t),context.lineTo(n,r),context.stroke()},frame1=function(){draw(0,150,150,150)},frame2=function(){draw(10,0,10,600)},frame3=function(){draw(0,5,70,5)},frame4=function(){draw(60,5,60,15)},torso=function(){draw(60,36,60,70)},rightArm=function(){draw(60,46,100,50)},leftArm=function(){draw(60,46,20,50)},rightLeg=function(){draw(60,70,100,100)},leftLeg=function(){draw(60,70,20,100)},drawArray=[rightLeg,leftLeg,rightArm,leftArm,torso,head,frame4,frame3,frame2,frame1],check=function(){list.onclick=function(){var e=this.innerHTML;this.setAttribute("class","active"),this.onclick=null;for(var t=0;t<n.length;t++)n[t]===e&&(l[t].innerHTML=e,i+=1);-1===n.indexOf(e)?(a-=1,comments(),drawArray[a]()):comments()}},play=function(){t=(e=[["everton","liverpool","swansea","chelsea","hull","manchester-city","newcastle-united"],["alien","dirty-harry","gladiator","finding-nemo","jaws"],["manchester","milan","madrid","amsterdam","prague"]])[Math.floor(Math.random()*e.length)],n=(n=t[Math.floor(Math.random()*t.length)]).replace(/\s/g,"-"),console.log(n),function(){myButtons=document.getElementById("buttons"),letters=document.createElement("ul");for(var e=0;e<c.length;e++)letters.id="alphabet",list=document.createElement("li"),list.id="letter",list.innerHTML=c[e],check(),myButtons.appendChild(letters),letters.appendChild(list)}(),l=[],a=10,i=0,o=0,result(),comments(),t===e[0]?catagoryName.innerHTML="The Chosen Category Is Premier League Football Teams":t===e[1]?catagoryName.innerHTML="The Chosen Category Is Films":t===e[2]&&(catagoryName.innerHTML="The Chosen Category Is Cities"),canvas()},play(),hint.onclick=function(){hints=[["Based in Mersyside","Based in Mersyside","First Welsh team to reach the Premier Leauge","Owned by A russian Billionaire","Once managed by Phil Brown","2013 FA Cup runners up","Gazza's first club"],["Science-Fiction horror film","1971 American action film","Historical drama","Anamated Fish","Giant great white shark"],["Northern city in the UK","Home of AC and Inter","Spanish capital","Netherlands capital","Czech Republic capital"]];var r=e.indexOf(t),a=t.indexOf(n);s.innerHTML="Clue: - "+hints[r][a]},document.getElementById("reset").onclick=function(){correct.parentNode.removeChild(correct),letters.parentNode.removeChild(letters),s.innerHTML="",context.clearRect(0,0,400,400),play()}};
},{}]},{},["Oi3i"], null)
//# sourceMappingURL=hangman-script.534d2fbd.js.map