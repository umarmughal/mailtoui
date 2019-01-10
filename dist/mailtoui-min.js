/**
 * mailtoui - A simple way to enhance your mailto links with a convenient user interface.
 * @version v0.1.13
 * @link https://mailtoui.com
 * @author Mario Rodriguez - https://twitter.com/mariordev
 * @license MIT
 */
var mailtouiApp=mailtouiApp||{};!function(e){var t=null,o=null,i=new Object;i.linkClass="mailtoui",i.autoClose=!0,e.buildStyleTag=function(){var t=window.document.createElement("style"),o=".mailtoui-modal{background-color:#000;background-color:rgba(0,0,0,.4);bottom:0;color:#303131;display:none;height:100%;left:0;margin:0;padding:0;position:fixed;right:0;top:0;width:100%;z-index:1000}.mailtoui-modal-content{-webkit-animation:appear .4s;animation:appear .4s;background-color:#f1f5f8;border-radius:8px;bottom:auto;-webkit-box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);left:50%;max-height:calc(100% - 100px);overflow:hidden;padding:0;position:fixed;right:-45%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.mailtoui-modal-content:focus,.mailtoui-modal-content:hover{overflow-y:auto}@media only screen and (min-width :768px){.mailtoui-modal-content{right:auto}}.mailtoui-modal-head{background-color:#fff;clear:both;padding:20px}.mailtoui-modal-title{font-size:100%;font-weight:700;margin:0;padding:0}.mailtoui-modal-close{color:#aaa;float:right;font-size:38px;font-weight:700;position:relative;top:-12px}.mailtoui-modal-close:focus,.mailtoui-modal-close:hover{color:#000;cursor:pointer;text-decoration:none}.mailtoui-modal-body{height:100%;padding:20px}.mailtoui-client{color:#333;outline:0;text-decoration:none}.mailtoui-client:focus .mailtoui-label{background-color:#555;color:#fff}.mailtoui-label{background-color:#fff;border-radius:8px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.18);box-shadow:0 2px 4px rgba(0,0,0,.18);margin-bottom:20px;padding:15px 20px}.mailtoui-label:hover{background-color:#555;color:#fff}.mailtoui-client:last-child .mailtoui-label{margin-bottom:0}.mailtoui-label-icon{font-weight:700;position:relative;top:4px}.mailtoui-label-text{margin-left:5px}.mailtoui-copy{border-radius:8px;margin-top:20px;position:relative;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.18);box-shadow:0 2px 4px rgba(0,0,0,.18);height:59px}.mailtoui-copy-button{background-color:#fff;border:none;border-top-right-radius:8px;border-bottom-right-radius:8px;bottom:21px;color:#303131;font-size:100%;height:100%;outline:0;position:absolute;right:0;top:0;width:100px}.mailtoui-copy-button:focus,.mailtoui-copy-button:hover{background-color:#555;color:#fff;cursor:pointer;outline:0}.mailtoui-copy-email-address{background-color:#d8dcdf;border-radius:8px;border:none;-webkit-box-sizing:border-box;box-sizing:border-box;color:#48494a;font-size:100%;height:100%;outline:0;overflow:hidden;padding:20px 120px 20px 20px;width:100%}.mailtoui-is-hidden{display:none;visibility:hidden}@-webkit-keyframes appear{0%{opacity:0;-webkit-transform:translate(-50%,-50%) scale(0,0);transform:translate(-50%,-50%) scale(0,0)}100%{opacity:1;-webkit-transform:translate(-50%,-50%) scale(1,1);transform:translate(-50%,-50%) scale(1,1)}}@keyframes appear{0%{opacity:0;-webkit-transform:translate(-50%,-50%) scale(0,0);transform:translate(-50%,-50%) scale(0,0)}100%{opacity:1;-webkit-transform:translate(-50%,-50%) scale(1,1);transform:translate(-50%,-50%) scale(1,1)}}";return o=o.replace(/mailtoui/g,e.prefix()),t.type="text/css",t.styleSheet?t.styleSheet.cssText=o:t.appendChild(document.createTextNode(o)),t},e.embedStyleTag=function(){var t=window.document.head.firstChild;window.document.head.insertBefore(e.buildStyleTag(),t)},e.buildModal=function(t){var o=t.id,i=e.getEmail(t),l=e.getLinkSchemeField(t,"subject"),a=e.getLinkSchemeField(t,"cc"),n=e.getLinkSchemeField(t,"bcc"),r=e.getLinkSchemeField(t,"body"),c=window.document.createElement("div"),s='<svg viewBox="0 0 24 24" width="24" height="24"><g class="nc-icon-wrapper" stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" fill="currentColor" stroke="currentColor"><path data-cap="butt" data-color="color-2" fill="none" stroke-miterlimit="10" d="M5.704,2.979 c0.694,0.513,1.257,1.164,1.767,2.02C7.917,5.746,8.908,7.826,8,9c-1.027,1.328-4,1.776-4,3c0,0.921,1.304,1.972,2,3 c1.047,1.546,0.571,3.044,0,4c-0.296,0.496-0.769,0.92-1.293,1.234" stroke-linecap="butt"/> <path data-cap="butt" data-color="color-2" fill="none" stroke-miterlimit="10" d="M20.668,5.227 C18.509,6.262,15.542,6.961,15,7c-1.045,0.075-1.2-0.784-2-2c-0.6-0.912-2-2.053-2-3c0-0.371,0.036-0.672,0.131-0.966" stroke-linecap="butt"/> <circle fill="none" stroke="currentColor" stroke-miterlimit="10" cx="12" cy="12" r="11"/> <path data-cap="butt" data-color="color-2" fill="none" stroke-miterlimit="10" d="M19.014,12.903 C19.056,15.987,15.042,19.833,13,19c-1.79-0.73-0.527-2.138-0.986-6.097c-0.191-1.646,1.567-3,3.5-3S18.992,11.247,19.014,12.903z" stroke-linecap="butt"/></g></svg>',d=`<div class="mailtoui-modal-content"><div class="mailtoui-modal-head"><span id="mailtoui-modal-close-${o}" class="mailtoui-modal-close">&times</span> <span class="mailtoui-modal-title">Compose new email with</span></div><div class="mailtoui-modal-body"><div class="mailtoui-clients"><a id="mailtoui-client-${o}" class="mailtoui-client" href="https://mail.google.com/mail/?view=cm&fs=1&to=${i}&su=${l}&cc=${a}&bcc=${n}&body=${r}" target="_blank"><div class="mailtoui-label"><span class="mailtoui-label-icon">${s}</span> <span class="mailtoui-label-text">Gmail in browser</span></div></a><a id="mailtoui-client-${o}" class="mailtoui-client" href="https://outlook.office.com/owa/?path=/mail/action/compose&to=${i}&subject=${l}&body=${r}" target="_blank"><div class="mailtoui-label"><span class="mailtoui-label-icon">${s}</span> <span class="mailtoui-label-text">Outlook in browser</span></div></a><a id="mailtoui-client-${o}" class="mailtoui-client" href="https://compose.mail.yahoo.com/?to=${i}&subject=${l}&cc=${a}&bcc=${n}&body=${r}" target="_blank"><div class="mailtoui-label"><span class="mailtoui-label-icon">${s}</span> <span class="mailtoui-label-text">Yahoo in browser</span></div></a><a id="mailtoui-client-${o}" class="mailtoui-client" href="mailto:${i}?subject=${l}&cc=${a}&bcc=${n}&body=${r}"><div class="mailtoui-label"><span class="mailtoui-label-icon"><svg viewBox="0 0 24 24" xml:space="preserve" width="24" height="24"><g class="nc-icon-wrapper" stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" fill="currentColor" stroke="currentColor"><line data-color="color-2" fill="none" stroke-miterlimit="10" x1="5" y1="6" x2="6" y2="6"/> <line data-color="color-2" fill="none" stroke-miterlimit="10" x1="10" y1="6" x2="11" y2="6"/> <line data-color="color-2" fill="none" stroke-miterlimit="10" x1="15" y1="6" x2="19" y2="6"/> <line fill="none" stroke="currentColor" stroke-miterlimit="10" x1="1" y1="10" x2="23" y2="10"/> <rect x="1" y="2" fill="none" stroke="currentColor" stroke-miterlimit="10" width="22" height="20"/></g></svg></span> <span class="mailtoui-label-text">Default email app</span></div></a></div><div class="mailtoui-copy ${e.hideCopyUI(i)}"><div id="mailtoui-copy-email-address-${o}" class="mailtoui-copy-email-address">${i}</div><button id="mailtoui-copy-button-${o}" class="mailtoui-copy-button" data-copytargetid="mailtoui-copy-email-address-${o}">Copy</button></div></div></div>`;return d=d.replace(/mailtoui/g,e.prefix()),c.id=e.prefix("-modal-"+o),c.className=e.prefix("-modal"),c.setAttribute("style","display: none;"),c.setAttribute("aria-hidden",!0),c.innerHTML=d,c},e.embedModal=function(t){var o=e.buildModal(t);window.document.getElementById(e.prefix("-modals")).appendChild(o)},e.embedAllModals=function(){var t=e.getLinks(),o=window.document.createElement("div"),i=window.document.body.firstChild;o.id=e.prefix("-modals"),o.className=e.prefix("-modals"),o.innerHTML="",window.document.body.insertBefore(o,i);for(var l=0;l<t.length;l++)e.embedModal(t[l])},e.getModal=function(t){if(null!==t)return window.document.getElementById(e.prefix("-modal-"+t.id))},e.openModal=function(i){i.preventDefault();var l=e.getParentAnchor(i.target);null!==l&&(o=document.activeElement,(t=e.getModal(l)).style.display="block",t.focusableChildren=Array.from(t.querySelectorAll('a[href], input:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])')),t.focusableChildren[0].focus(),e.hideModalFromScreenReader(!1))},e.closeModal=function(){null!==t&&(e.hideModalFromScreenReader(!0),t.style.display="none",t=null),null!==o&&o.focus()},e.hideModalFromScreenReader=function(o){var i=window.document.getElementById(e.prefix("-modals")).nextElementSibling;t.setAttribute("aria-hidden",o),i.setAttribute("aria-hidden",!o)},e.getParentAnchor=function(e){for(;null!==e;){if("A"===e.tagName.toUpperCase())return e;e=e.parentNode}return null},e.listenForEvents=function(){e.listenForClickOnLink(),e.listenForClickOnClient(),e.listenForClickOnCopy(),e.listenForClickOnClose(),e.listenForClickOnWindow(),e.listenForKeys()},e.listenForClickOnLink=function(){for(var t=window.document.getElementsByClassName(e.prefix()),o=0;o<t.length;o++)t[o].addEventListener("click",function(t){e.openModal(t)},!1)},e.listenForClickOnClient=function(){if(!0===i.autoClose)for(var t=window.document.getElementsByClassName(e.prefix("-client")),o=0;o<t.length;o++)t[o].addEventListener("click",function(t){null!==e.getParentAnchor(t.target)&&e.closeModal()},!1)},e.listenForClickOnCopy=function(){for(var t=window.document.getElementsByClassName(e.prefix("-copy-button")),o=0;o<t.length;o++)t[o].addEventListener("click",function(t){e.copy(t)},!1)},e.listenForClickOnClose=function(){for(var t=window.document.getElementsByClassName(e.prefix("-modal-close")),o=0;o<t.length;o++)t[o].addEventListener("click",function(t){e.closeModal()},!1)},e.listenForClickOnWindow=function(){window.addEventListener("click",function(t){var o=t.target;null!==o&&o.classList.contains(e.prefix("-modal"))&&e.closeModal()},!1)},e.listenForKeys=function(){window.document.addEventListener("keydown",function(t){e.escapeModal(t),e.trapTabWithinModal(t)},!1)},e.escapeModal=function(t){27===t.keyCode&&e.closeModal()},e.trapTabWithinModal=function(e){if(9===e.keyCode&&null!==t){var o=document.activeElement,i=t.focusableChildren.length,l=t.focusableChildren.indexOf(o);e.shiftKey?0===l&&(e.preventDefault(),t.focusableChildren[i-1].focus()):l==i-1&&(e.preventDefault(),t.focusableChildren[0].focus())}},e.getLinks=function(){return window.document.getElementsByClassName(e.prefix())},e.splitLinkScheme=function(e){var t=e.href.replace("mailto:","").trim(),o=t.split("?",1);return null!==o&&o.length>0&&(o[1]=t.replace(o[0]+"?","").trim()),o},e.getLinkSchemeField=function(t,o){var i=e.splitLinkScheme(t),l="",a=[],n=[];null!==i&&i.length>0&&(l=i[1]),null!==l&&l.length>0&&(a=(l=l.replace("%20&%20","%20%26%20")).split("&"));for(var r=0;r<a.length;r++){a[r]=a[r].replace("%20=%20","%20%3D%20"),n=a[r].split("=");for(var c=0;c<n.length;c++)if(n[0]==o)return n[1]}return""},e.getEmail=function(t){var o=e.splitLinkScheme(t),i="";return null!==o&&o.length>0&&(i=o[0]),decodeURIComponent(i)},e.hideCopyUI=function(t){return null==t||""==t.trim()?e.prefix("-is-hidden"):""},e.setCopyButtonText=function(e){e.innerHTML="Copied!",setTimeout(function(){e.innerHTML="Copy"},600)},e.copy=function(t){t.preventDefault();var o=t.target.getAttribute("data-copytargetid"),i=document.getElementById(o),l=document.createRange();l.selectNodeContents(i);var a=window.getSelection();a.removeAllRanges(),a.addRange(l),document.execCommand("copy"),e.setCopyButtonText(t.target)},e.isiOSDevice=function(){return navigator.userAgent.match(/ipad|iphone/i)},e.setOptions=function(){var e=document.getElementsByTagName("script"),t=e[e.length-1].getAttribute("data-options");if(null!==t&&t.trim().length>0)for(var o in t=JSON.parse(t),i)t.hasOwnProperty(o)&&(i[o]=t[o])},e.prefix=function(e=""){return i.linkClass+e},e.run=function(){e.setOptions(),e.embedAllModals(),e.embedStyleTag(),e.listenForEvents()}}(mailtouiApp),mailtouiApp.run();