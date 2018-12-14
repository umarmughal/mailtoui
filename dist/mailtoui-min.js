/**
 * MailtoUI - A convenient drop-in user interface for mailto links.
 * @version v0.1.1
 * @link https://mailtoui.com
 * @author Mario Rodriguez - https://twitter.com/mariordev
 * @license MIT License
 */
var mailtouiApp=mailtouiApp||{};!function(n){var e=null,t=null,o=new Object;o.linkClass="mailtoui",o.autoClose=!0,n.buildStyleTag=function(){var e=window.document.createElement("style"),t="\n            .mailtoui-modal {\n                height: 100%;\n                margin: 0;\n                padding: 0;\n                width: 100%;\n                background-color: rgb(0,0,0);\n                background-color: rgba(0,0,0,0.4);\n                color: #303131;\n                display: none;\n                position: fixed;\n                top: 0;\n                right: 0;\n                bottom: 0;\n                left: 0;\n                z-index: 1000;\n            }\n\n            .mailtoui-modal-content {\n                background-color: #F1F5F8;\n                border-radius: 8px;\n                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n                padding: 0;\n                max-height: calc(100% - 100px);\n                top: 50%;\n                left: 50%;\n                right: -45%;\n                bottom: auto;\n                animation: appear 0.4s;\n                transform: translate(-50%, -50%);\n                position: fixed;\n                overflow: hidden;\n                overflow-y: scroll;\n            }\n\n            /* Small devices, tablets */\n            @media only screen and (min-width : 768px) {\n                .mailtoui-modal-content {\n                    right: auto;\n                }\n            }\n\n            .mailtoui-modal-head {\n                background-color: #fff;\n                clear: both;\n                padding: 20px;\n            }\n\n            .mailtoui-modal-title {\n                font-size: 100%;\n                font-weight: bold;\n                margin: 0;\n                padding: 0;\n            }\n\n            .mailtoui-modal-close {\n                color: #aaa;\n                float: right;\n                font-size: 38px;\n                font-weight: bold;\n                position: relative;\n                top: -12px;\n            }\n\n            .mailtoui-modal-close:hover,\n            .mailtoui-modal-close:focus {\n                color: black;\n                cursor: pointer;\n                text-decoration: none;\n            }\n\n            .mailtoui-modal-body {\n                height: 100%;\n                padding: 20px;\n            }\n\n            .mailtoui-client {\n                color: #333;\n                outline: none;\n                text-decoration: none;\n            }\n\n            .mailtoui-client:focus .mailtoui-label {\n                background-color: #555;\n                color: #fff;\n            }\n\n            .mailtoui-label {\n                box-shadow: 0px 2px 4px rgba(0,0,0,0.18);\n                background-color: #fff;\n                border-radius: 100px;\n                margin-bottom: 20px;\n                padding: 20px 30px;\n            }\n\n            .mailtoui-label:hover {\n                background-color: #555;\n                color: #fff;\n            }\n\n            .mailtoui-client:last-child .mailtoui-label {\n                margin-bottom: 0;\n            }\n\n            .mailtoui-label-icon {\n                position: relative;\n                font-weight: bold;\n                top: -2px;\n            }\n\n            .mailtoui-label-text {\n                margin-left: 5px;\n            }\n\n            .mailtoui-copy {\n                margin-top: 20px;\n                position: relative;\n            }\n\n            .mailtoui-copy-button {\n                box-shadow: 0px 2px 4px rgba(0,0,0,0.18);\n                background-color: #fff;\n                border-radius: 100px;\n                bottom: 21px;\n                border: none;\n                color: #303131;\n                font-size: 100%;\n                outline: none;\n                position: absolute;\n                top: 0;\n                left: 0;\n                height: 63px;\n                width: 100px;\n            }\n\n            .mailtoui-copy-button:hover,\n            .mailtoui-copy-button:focus {\n                background-color: #555;\n                color: #fff;\n                cursor: pointer;\n                outline: none;\n            }\n\n            .mailtoui-copy-email-address {\n                background-color: #d8dcdf;\n                color: #48494a;\n                border-radius: 100px;\n                border: none;\n                box-sizing : border-box;\n                font-size: 100%;\n                outline: none;\n                padding: 20px 30px 20px 120px;\n                width: 100%;\n            }\n\n            .mailtoui-is-hidden {\n                visibility: hidden;\n                display: none;\n            }\n\n            @keyframes appear {\n                0% {\n                    transform: translate(-50%, -50%) scale(0,0);\n                    opacity: 0;\n                }\n                100% {\n                    transform: translate(-50%, -50%) scale(1,1);\n                    opacity: 1;\n                }\n            }\n        ";return t=t.replace(/mailtoui/g,n.prefix()),e.type="text/css",e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t)),e},n.embedStyleTag=function(){var e=window.document.head.firstChild;window.document.head.insertBefore(n.buildStyleTag(),e)},n.buildModal=function(e){var t=e.id,o=n.getEmail(e),i=n.getLinkSchemeField(e,"subject"),l=n.getLinkSchemeField(e,"cc"),a=n.getLinkSchemeField(e,"bcc"),d=n.getLinkSchemeField(e,"body"),c=window.document.createElement("div"),r=`\n            <div class="mailtoui-modal-content">\n                <div class="mailtoui-modal-head">\n                    <span id="mailtoui-modal-close-${t}" class="mailtoui-modal-close">&times</span>\n                    <span class="mailtoui-modal-title">Compose new email</span>\n                </div>\n                <div class="mailtoui-modal-body">\n                    <div class="mailtoui-clients">\n                        <a id="mailtoui-client-${t}" class="mailtoui-client" href="https://mail.google.com/mail/?view=cm&fs=1&to=${o}&su=${i}&cc=${l}&bcc=${a}&body=${d}" target="_blank">\n                            <div class="mailtoui-label">\n                                <span class="mailtoui-label-icon">&#10138;</span>\n                                <span class="mailtoui-label-text">with Gmail</span>\n                            </div>\n                        </a>\n\n                        <a id="mailtoui-client-${t}" class="mailtoui-client" href="https://outlook.office.com/owa/?path=/mail/action/compose&to=${o}&subject=${i}&body=${d}" target="_blank">\n                            <div class="mailtoui-label">\n                                <span class="mailtoui-label-icon">&#10138;</span>\n                                <span class="mailtoui-label-text">with Outlook</span>\n                            </div>\n                        </a>\n\n                        <a id="mailtoui-client-${t}" class="mailtoui-client" href="https://compose.mail.yahoo.com/?to=${o}&subject=${i}&cc=${l}&bcc=${a}&body=${d}" target="_blank">\n                            <div class="mailtoui-label">\n                                <span class="mailtoui-label-icon">&#10138;</span>\n                                <span class="mailtoui-label-text">with Yahoo</span>\n                            </div>\n                        </a>\n\n                        <a id="mailtoui-client-${t}" class="mailtoui-client" href="mailto:${o}?subject=${i}&cc=${l}&bcc=${a}&body=${d}">\n                            <div class="mailtoui-label">\n                                <span class="mailtoui-label-icon">&#10138;</span>\n                                <span class="mailtoui-label-text">with local email app</span>\n                            </div>\n                        </a>\n                    </div>\n\n                    <div class="mailtoui-copy ${n.hideCopyUI(o)}">\n                        <button id="mailtoui-copy-button-${t}" class="mailtoui-copy-button" data-copytargetid="mailtoui-copy-email-address-${t}">Copy</button>\n                        <input id="mailtoui-copy-email-address-${t}" class="mailtoui-copy-email-address" type="text" value="${o}" readonly>\n                    </div>\n                </div>\n            </div>\n        `;return r=r.replace(/mailtoui/g,n.prefix()),c.id=n.prefix("-modal-"+t),c.className=n.prefix("-modal"),c.setAttribute("style","display: none;"),c.setAttribute("aria-hidden",!0),c.innerHTML=r,c},n.embedModal=function(e){var t=n.buildModal(e);window.document.getElementById(n.prefix("-modals")).appendChild(t)},n.embedAllModals=function(){var e=n.getLinks(),t=window.document.createElement("div"),o=window.document.body.firstChild;t.id=n.prefix("-modals"),t.className=n.prefix("-modals"),t.innerHTML="",window.document.body.insertBefore(t,o);for(var i=0;i<e.length;i++)n.embedModal(e[i])},n.getModal=function(e){if(null!==e)return window.document.getElementById(n.prefix("-modal-"+e.id))},n.openModal=function(o){o.preventDefault();var i=o.target;null!==i&&(t=document.activeElement,(e=n.getModal(i)).style.display="block",e.focusableChildren=Array.from(e.querySelectorAll('a[href], input:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])')),e.focusableChildren[0].focus(),n.hideModalFromScreenReader(!1))},n.closeModal=function(){null!==e&&(n.hideModalFromScreenReader(!0),e.style.display="none",e=null),null!==t&&t.focus()},n.hideModalFromScreenReader=function(t){var o=window.document.getElementById(n.prefix("-modals")).nextElementSibling;e.setAttribute("aria-hidden",t),o.setAttribute("aria-hidden",!t)},n.getParentAnchor=function(n){for(;null!==n;){if("A"===n.tagName.toUpperCase())return n;n=n.parentNode}return null},n.listenForEvents=function(){n.listenForClickOnLink(),n.listenForClickOnClient(),n.listenForClickOnCopy(),n.listenForClickOnClose(),n.listenForClickOnWindow(),n.listenForKeys()},n.listenForClickOnLink=function(){for(var e=window.document.getElementsByClassName(n.prefix()),t=0;t<e.length;t++)e[t].addEventListener("click",function(e){n.openModal(e)},!1)},n.listenForClickOnClient=function(){if(!0===o.autoClose)for(var e=window.document.getElementsByClassName(n.prefix("-client")),t=0;t<e.length;t++)e[t].addEventListener("click",function(e){null!==n.getParentAnchor(e.target)&&n.closeModal()},!1)},n.listenForClickOnCopy=function(){for(var e=window.document.getElementsByClassName(n.prefix("-copy-button")),t=0;t<e.length;t++)e[t].addEventListener("click",function(e){n.copy(e)},!1)},n.listenForClickOnClose=function(){for(var e=window.document.getElementsByClassName(n.prefix("-modal-close")),t=0;t<e.length;t++)e[t].addEventListener("click",function(e){n.closeModal()},!1)},n.listenForClickOnWindow=function(){window.addEventListener("click",function(e){element=e.target,null!==element&&element.classList.contains(n.prefix("-modal"))&&n.closeModal()},!1)},n.listenForKeys=function(){window.document.addEventListener("keydown",function(e){n.escapeModal(e),n.trapTabWithinModal(e)},!1)},n.escapeModal=function(e){27===e.keyCode&&n.closeModal()},n.trapTabWithinModal=function(n){if(9===n.keyCode&&null!==e){var t=document.activeElement,o=e.focusableChildren.length,i=e.focusableChildren.indexOf(t);n.shiftKey?0===i&&(n.preventDefault(),e.focusableChildren[o-1].focus()):i==o-1&&(n.preventDefault(),e.focusableChildren[0].focus())}},n.getLinks=function(){return window.document.getElementsByClassName(n.prefix())},n.splitLinkScheme=function(n){var e=n.href.replace("mailto:","").trim(),t=e.split("?",1);return null!==t&&t.length>0&&(t[1]=e.replace(t[0]+"?","").trim()),t},n.getLinkSchemeField=function(e,t){var o=n.splitLinkScheme(e),i="",l=[],a=[];null!==o&&o.length>0&&(i=o[1]),null!==i&&i.length>0&&(l=(i=i.replace("%20&%20","%20%26%20")).split("&"));for(var d=0;d<l.length;d++){l[d]=l[d].replace("%20=%20","%20%3D%20"),a=l[d].split("=");for(var c=0;c<a.length;c++)if(a[0]==t)return a[1]}return""},n.getEmail=function(e){var t=n.splitLinkScheme(e),o="";return null!==t&&t.length>0&&(o=t[0]),decodeURIComponent(o)},n.hideCopyUI=function(e){return null==e||""==e.trim()?n.prefix("-is-hidden"):""},n.setCopyButtonText=function(n){n.innerHTML="Copied!",setTimeout(function(){n.innerHTML="Copy"},600)},n.copy=function(e){e.preventDefault();var t=e.target.getAttribute("data-copytargetid"),o=document.getElementById(t);if(navigator.userAgent.match(/ipad|iphone/i)){var i=o.contentEditable,l=o.readOnly;o.contentEditable=!0,o.readOnly=!1;var a=document.createRange();a.selectNodeContents(o);var d=window.getSelection();d.removeAllRanges(),d.addRange(a),o.setSelectionRange(0,999999),o.contentEditable=i,o.readOnly=l}else o.select();document.execCommand("copy"),n.setCopyButtonText(e.target)},n.setOptions=function(){var n=document.getElementsByTagName("script"),e=n[n.length-1].getAttribute("data-options");if(null!==e&&e.trim().length>0)for(var t in e=JSON.parse(e),o)e.hasOwnProperty(t)&&(o[t]=e[t])},n.prefix=function(n=""){return o.linkClass+n},n.run=function(){n.setOptions(),n.embedAllModals(),n.embedStyleTag(),n.listenForEvents()}}(mailtouiApp),mailtouiApp.run();