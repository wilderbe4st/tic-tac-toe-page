(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(6),s=a.n(i),c=(a(13),a(14),a(1)),l=a(2),u=a(4),o=a(3),h=a(7),m=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("button",{className:"square",onClick:function(){e.props.onClick()}},this.props.value)}}]),a}(r.a.Component),d=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).initState={squares:Array(9).fill(null),isNext:!0},n.state=n.initState,n}return Object(l.a)(a,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();this.calculateWinner(t)||t[e]||(t[e]=this.state.isNext?"X":"O",this.setState({squares:t,isNext:!this.state.isNext}))}},{key:"calculateWinner",value:function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(h.a)(t[a],3),r=n[0],i=n[1],s=n[2];if(e[r]&&e[r]===e[i]&&e[r]===e[s])return e[r]}return null}},{key:"isFull",value:function(e){for(var t=!0,a=0;a<9;a++)null===e[a]&&(t=!1);return t}},{key:"playAgain",value:function(){this.setState(this.initState)}},{key:"renderSquare",value:function(e){var t=this;return r.a.createElement(m,{value:this.state.squares[e],onClick:function(){t.handleClick(e)}})}},{key:"render",value:function(){var e,t=this,a=this.calculateWinner(this.state.squares),n=this.isFull(this.state.squares);return e=a?a+"Won!!":n?"ITS A TIE!!!":"Next player: "+(this.state.isNext?"X":"O"),r.a.createElement("div",{className:"board"},r.a.createElement("div",{className:"status"},e),r.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),r.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),r.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)),r.a.createElement("button",{className:"play-again",onClick:function(){t.playAgain()}},"Play Again"))}}]),a}(r.a.Component),v=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"game"},r.a.createElement("h1",null,"Tic-Tac-Toe"),r.a.createElement("div",{className:"game-board"},r.a.createElement(d,null)),r.a.createElement("div",{className:"game-info"},r.a.createElement("div",null),r.a.createElement("ol",null)))}}]),a}(r.a.Component);var f=function(){return r.a.createElement("div",null,r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.dad43159.chunk.js.map