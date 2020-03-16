!function(t){var e={};function s(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){let i=s(1),n=document.getElementById("inputFile");n.addEventListener("change",(function(){var t=new FileReader,e=n.files[0];if(0!==e.length){n.value;t.readAsText(e),t.onload=function(){let s=t.result;i.setSourceCode(e.name,s)}}}));var o=document.querySelectorAll(".inputFile");Array.prototype.forEach.call(o,(function(t){var e=t.nextElementSibling,s=e.innerHTML;t.addEventListener("change",(function(t){var i="";(i=this.files&&this.files.length>1?(this.getAttribute("data-multiple-caption")||"").replace("{count}",this.files.length):t.target.value.split("\\").pop())?e.querySelector("span").innerHTML=i:e.innerHTML=s}))}))},function(t,e,s){const i=s(2);t.exports.setSourceCode=function(t,e){switch(console.log(t),t.split(".")[1]){case"cpp":case"c":{let t=new i;t.print(),t.parseToJSON(e.replace(/{/g,"\n{\n").replace(/}/g,"\n}\n").split("\n"));break}}}},function(t,e,s){const i=s(3);t.exports=class extends i{constructor(){super(),console.log(this.basicOperation.DataType),this.JSON_code.Type="C/C++",this.basicOperation.DataType.push("int","float","double","boolean","byte","char","long"),this.basicOperation.InputOutput.push("printf","scanf","cin","cout"),this.basicOperation.ConditionalOperation.push("if","else"),this.basicOperation.DefineSubSystem={start:"{",end:"}"},this.basicOperation.Loop.push("for","while")}parseToJSON(t){super.parseToJSON(t)}print(t){super.print()}}},function(t,e){t.exports=class{constructor(){this.JSON_code={Name:"TestCode"},this.JSON_code.Type="",this.subSystems={},this.subSystemIndex=-1,this.basicOperation={},this.basicOperation.DataType=[],this.basicOperation.InputOutput=[],this.basicOperation.ConditionalOperation=[],this.basicOperation.DefineSubSystem={start:"",end:""},this.basicOperation.Loop=[],this.setINTO_Operation={},this.setINTO_OperationIndex=-1,this.defineJSON_Structure()}defineJSON_Structure(){this.JSON_code.Code={},this.JSON_code.Code.Assign={},this.JSON_code.Code.SubSystem={}}defineSubSystemStructure(){this.subSystems[this.subSystemIndex]={},this.subSystems[this.subSystemIndex].Assign={},this.subSystems[this.subSystemIndex].InputOutput={},this.subSystems[this.subSystemIndex].ConditionalOperation={},this.subSystems[this.subSystemIndex].Set={},this.subSystems[this.subSystemIndex].Loop={}}parseToJSON(t){console.log("Parse to JSON");let e=0;for(let s in t)this.defineSubSystem(s-e,t[s]),this.inputOutputData(s-e,t[s])||this.conditionalOperation(s-e,t[s])||this.defineLoops(s-e,t[s])||(t[s].includes("=")?this.assignData(s-e,t[s]):e++);this.printJSON(this.JSON_code)}printJSON(t){let e=["SubSystem","ConditionalOperation","Loop"];for(let s in t){console.log(s),console.log(t[s]);for(let i=0;i<e.length;i++)if("object"==typeof t[s]&&0!==t[s].length&&(e[i]in t[s]||s==e[i])){console.log("\n___________________________________\n\t"+e[i]+"\n===================================\n"),this.printJSON(t[s]);break}}}assignData(t,e){for(let s in this.basicOperation.DataType)if(e.includes(this.basicOperation.DataType[s]))return e=e.split(this.basicOperation.DataType[s]).join("").replace(/[; ]/g,"").split("="),void(-1!=this.subSystemIndex?this.subSystems[this.subSystemIndex].Assign[t]=e:this.JSON_code.Code.Assign[t]=e);this.setData(t,e)}setData(t,e){return e=e.replace(/[; ]/g,"").split("="),this.subSystems[this.subSystemIndex].Set[t]=e,!1}inputOutputData(t,e){for(let s in this.basicOperation.InputOutput)if(e.includes(this.basicOperation.InputOutput[s]))return e=e.split(this.basicOperation.InputOutput[s]).join("").replace(/[)("'`;]/g,"").split("  ").join(""),this.subSystems[this.subSystemIndex].InputOutput[t]=e,!0;return!1}conditionalOperation(t,e){for(let s in this.basicOperation.ConditionalOperation)if(e.includes(this.basicOperation.ConditionalOperation[s]))return e=e.split(this.basicOperation.ConditionalOperation[s]).join("").replace(/[() ]/g,""),this.subSystems[this.subSystemIndex].ConditionalOperation[t]={Value:e},this.setINTO_Operation[++this.setINTO_OperationIndex]={Index:t,Operation:"ConditionalOperation"},!0;return!1}defineLoops(t,e){for(let s in this.basicOperation.Loop)if(e.includes(this.basicOperation.Loop[s]))return e=e.split(this.basicOperation.Loop[s]).join("").replace(/[()]/g,"").split("  ").join(""),this.subSystems[this.subSystemIndex].Loop[t]={Operation:this.basicOperation.Loop[s],Value:e},this.setINTO_Operation[++this.setINTO_OperationIndex]={Index:t,Operation:"Loop"},console.log(e),!0;return!1}defineSubSystem(t,e){e.includes(this.basicOperation.DefineSubSystem.start)&&(this.subSystemIndex++,this.defineSubSystemStructure()),e.includes(this.basicOperation.DefineSubSystem.end)&&(this.subSystemIndex--,-1!=this.setINTO_OperationIndex&&(this.subSystems[this.subSystemIndex][this.setINTO_Operation[this.setINTO_OperationIndex].Operation][this.setINTO_Operation[this.setINTO_OperationIndex--].Index].SubSystem=this.clone(this.subSystems[this.subSystemIndex+1])),-1==this.subSystemIndex&&(this.JSON_code.Code.SubSystem=this.clone(this.subSystems[0])))}clone(t){let e={};for(let s in t)e[s]=Object.assign({},t[s]);return e}print(t){console.log("Testing\nDone!")}}}]);