({138:function(){var t=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function s(t){try{a(r.next(t))}catch(t){o(t)}}function c(t){try{a(r.throw(t))}catch(t){o(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,c)}a((r=r.apply(t,e||[])).next())}))},e=this&&this.__generator||function(t,e){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(c){return function(a){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,c[0]&&(s=0)),s;)try{if(n=1,r&&(i=2&c[0]?r.return:c[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,c[1])).done)return i;switch(r=0,i&&(c=[2&c[0],i.value]),c[0]){case 0:case 1:i=c;break;case 4:return s.label++,{value:c[1],done:!1};case 5:s.label++,r=c[1],c=[0];continue;case 7:c=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==c[0]&&2!==c[0])){s=0;continue}if(3===c[0]&&(!i||c[1]>i[0]&&c[1]<i[3])){s.label=c[1];break}if(6===c[0]&&s.label<i[1]){s.label=i[1],i=c;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(c);break}i[2]&&s.ops.pop(),s.trys.pop();continue}c=e.call(t,s)}catch(t){c=[6,t],r=0}finally{n=i=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,a])}}},n=new(function(){function n(){this.ALPHABET="abcdefghijklmnopqrstuvwxyz".split(""),this.RANDOM_WORD=null,this.SHOW_WORD=document.querySelector("#word-output"),this.currentScore=0,this.incorrectGuesses=0,this.lettersEnabled=!1,this.checkForWinner()}return n.prototype.fetchRandomWord=function(){return t(this,void 0,void 0,(function(){var t;return e(this,(function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),[4,fetch("https://random-word-api.herokuapp.com/word")];case 1:return[4,e.sent().json()];case 2:return[2,e.sent()[0]];case 3:return t=e.sent(),console.error("Error fetching random word:",t),[2,""];case 4:return[2]}}))}))},n.prototype.selectRandomWord=function(){return t(this,void 0,void 0,(function(){var t,n,r,i=this;return e(this,(function(e){switch(e.label){case 0:return this.lettersEnabled=!0,t=this,[4,this.fetchRandomWord()];case 1:return t.RANDOM_WORD=e.sent(),n=new Array(this.RANDOM_WORD.length).fill("❓ "),r=n.join(""),this.SHOW_WORD&&(this.SHOW_WORD.textContent=r,this.SHOW_WORD.classList.add("opacity-0"),setTimeout((function(){i.SHOW_WORD.style.opacity="1"}),50)),[2]}}))}))},n.prototype.handleLetterClick=function(t,e){if(e.length>0){var n=this.SHOW_WORD?(this.SHOW_WORD.textContent||"").split(" "):[];e.forEach((function(e){n[e]=t.textContent||""})),this.SHOW_WORD&&(this.SHOW_WORD.textContent=n.join(" ")),t.style.display="none",this.checkForWinner()&&(r.SHOW_GUESSES&&(r.SHOW_GUESSES.textContent=""),r.GUESS_CHECKER&&this.RANDOM_WORD&&(r.GUESS_CHECKER.textContent='WINNER! You guessed the word "'.concat(this.RANDOM_WORD,'"!')),r.PLAY_BUTTON&&r.PLAY_BUTTON.removeAttribute("hidden"),r.RESET_BUTTON&&(r.RESET_BUTTON.removeAttribute("hidden"),this.SHOW_WORD&&(this.SHOW_WORD.textContent=""),r.ALPHABET_CONTAINER&&(r.ALPHABET_CONTAINER.style.display="none")),r.displayFireworks(),this.RANDOM_WORD&&i.updateScoreTable(this.RANDOM_WORD))}else{this.incorrectGuesses++;var o=10-this.incorrectGuesses,s="❌ ".concat(o," guesses left.");r.SHOW_GUESSES&&(r.SHOW_GUESSES.textContent=s),t.style.display="none",0===o&&(this.incorrectGuesses--,r.GUESS_CHECKER&&this.RANDOM_WORD&&(r.GUESS_CHECKER.textContent='Game over! Word was "'.concat(this.RANDOM_WORD,'"')),r.RESET_BUTTON&&r.RESET_BUTTON.removeAttribute("hidden"),this.SHOW_WORD&&(this.SHOW_WORD.textContent=""),r.SHOW_GUESSES&&(r.SHOW_GUESSES.textContent=""),r.ALPHABET_CONTAINER&&(r.ALPHABET_CONTAINER.style.display="none"))}},n.prototype.checkForWinner=function(){return!!this.SHOW_WORD&&(this.SHOW_WORD.textContent||"").replace(/\s+/g,"")===this.RANDOM_WORD},n.prototype.resetGame=function(){this.lettersEnabled=!1,this.RANDOM_WORD=null,this.incorrectGuesses=0,this.SHOW_WORD&&(this.SHOW_WORD.textContent=""),r.SHOW_GUESSES&&(r.SHOW_GUESSES.textContent=""),r.RESET_BUTTON&&r.RESET_BUTTON.setAttribute("hidden","true"),r.PLAY_BUTTON&&r.PLAY_BUTTON.setAttribute("hidden","true"),r.WORD_SCORE_TABLE&&r.WORD_SCORE_TABLE.classList.add("hidden"),r.FETCH_WORD_BUTTON&&(r.FETCH_WORD_BUTTON.style.display=""),r.FIREWORKS_CONTAINER&&(r.FIREWORKS_CONTAINER.innerHTML=""),document.querySelectorAll("#alphabet li").forEach((function(t){t.style.display=""})),r.ALPHABET_CONTAINER&&(r.ALPHABET_CONTAINER.style.display="none")},n}()),r=new(function(){function t(t){this.game=t,this.RESET_BUTTON=document.querySelector("#reset"),this.PLAY_BUTTON=document.querySelector("#continue"),this.FETCH_WORD_BUTTON=document.querySelector("#word-button"),this.SHOW_GUESSES=document.querySelector("#attemptsOutput"),this.GUESS_CHECKER=document.querySelector("#win-lose-check"),this.ALPHABET_CONTAINER=document.querySelector("#alphabet"),this.FIREWORKS_CONTAINER=document.querySelector("#fireworks-container"),this.WORD_SCORE_TABLE=document.querySelector("#word-score-table"),this.createAlphabetButtons(),this.handleFetchWordButtonClick()}return t.prototype.createAlphabetButtons=function(){for(var t=0,e=n.ALPHABET;t<e.length;t++){var r=e[t],i=document.createElement("li");i.textContent=r,this.ALPHABET_CONTAINER.appendChild(i),this.storeLetterClick(i)}},t.prototype.handleFetchWordButtonClick=function(){var t=this;this.FETCH_WORD_BUTTON&&this.FETCH_WORD_BUTTON.addEventListener("click",(function(){t.FETCH_WORD_BUTTON&&(t.FETCH_WORD_BUTTON.style.display="none"),t.ALPHABET_CONTAINER&&(t.ALPHABET_CONTAINER.style.display="flex"),n.selectRandomWord()}))},t.prototype.storeLetterClick=function(t){t.addEventListener("click",(function(t){if(n.RANDOM_WORD&&n.lettersEnabled){var e=t.target;if("li"===e.tagName.toLowerCase()&&e){for(var r=e.textContent||"",i=[],o=0;o<n.RANDOM_WORD.length;o++)n.RANDOM_WORD[o]===r&&i.push(o);n.handleLetterClick(e,i)}}}))},t.prototype.displayFireworks=function(){if(this.GUESS_CHECKER&&this.GUESS_CHECKER.classList.add("z-20"),this.RESET_BUTTON&&this.RESET_BUTTON.classList.add("z-20"),this.WORD_SCORE_TABLE&&this.WORD_SCORE_TABLE.classList.remove("hidden"),this.FIREWORKS_CONTAINER){var t=document.createElement("img");t.src="./assets/images/fireworks.gif",t.classList.add("fireworks"),this.FIREWORKS_CONTAINER.innerHTML="",this.FIREWORKS_CONTAINER.appendChild(t)}},t}())(n),i=new(function(){function t(t){this.game=t}return t.prototype.updateScoreTable=function(t){var e=10*t.length,i=n.currentScore+=e,o=r.WORD_SCORE_TABLE.insertRow(),s=o.insertCell(0),c=o.insertCell(1);s.textContent=t,c.textContent=e.toString(),r.PLAY_BUTTON&&(o.insertCell(2).textContent=i.toString())},t}())(n)}})[138]();
//# sourceMappingURL=indexf6cb6d0386e8d21790b2.js.map