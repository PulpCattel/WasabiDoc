(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{221:function(t,e,a){"use strict";a.r(e);var n=a(0),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"demo-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demo-guide"}},[t._v("#")]),t._v(" Demo Guide")]),t._v(" "),a("ul",[a("li",[t._v("At 2018.07.19 17:00, UTC I will do a live demo of Wasabi on Youtube.")]),t._v(" "),a("li",[t._v("I will post the livestream link to Twitter: "),a("a",{attrs:{href:"https://twitter.com/nopara73",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://twitter.com/nopara73"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("You are free to ask questions in the chat.")]),t._v(" "),a("li",[t._v("At the end of the stream, we will do a mixing round on the mainnet. This will be the first ever Chaumian CoinJoin mainnet mix, you are free to participate.")]),t._v(" "),a("li",[t._v("In order to participate, you may want to make sure to setup and prefund the wallet before the stream, by going through the following instructions.")])]),t._v(" "),a("h2",{attrs:{id:"notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[t._v("#")]),t._v(" Notes")]),t._v(" "),a("ul",[a("li",[t._v("Wasabi is in the alpha stage. A Beta version will be released in 11 days (August 1.)")]),t._v(" "),a("li",[t._v("The minimum denomination of the mix is 0.1 bitcoins, but you may want to prefund your wallet with a bit more than that to cover the fees. Currently the minimum is 0.10034 BTC, but to be sure you may want to prefund it with 0.11 BTC or so.")]),t._v(" "),a("li",[t._v("The normal minimum number of participants for the mix is 100 users. I will cheat and lower this number for the sake of this test.")]),t._v(" "),a("li",[t._v("The wallet can only generate bech32 addresses. Thus, if you are using a legacy wallet, it will not be able to send funds to that. In this case, you may want to introduce a middle wallet like "),a("a",{attrs:{href:"https://electrum.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Electrum,"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("li",[t._v("Please do not attempt to participate in this event using OSX, as our user interface is unstable on OSX.")])]),t._v(" "),a("h2",{attrs:{id:"get-the-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-the-requirements"}},[t._v("#")]),t._v(" Get The Requirements")]),t._v(" "),a("ol",[a("li",[t._v("Get Git: "),a("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://git-scm.com/downloads"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Get .NET Core 2.2 SDK: "),a("a",{attrs:{href:"https://www.microsoft.com/net/download",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.microsoft.com/net/download"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("[OSX] Get Brew: "),a("a",{attrs:{href:"https://stackoverflow.com/a/20381183/2061103",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://stackoverflow.com/a/20381183/2061103"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Get Tor: "),a("br"),t._v("\n[Windows] Install the Tor Expert Bundle: "),a("a",{attrs:{href:"https://www.torproject.org/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.torproject.org/download/"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("\n[Linux] "),a("code",[t._v("apt-get install tor")]),t._v(" "),a("br"),t._v("\n[OSX] "),a("code",[t._v("brew install tor")]),t._v(" "),a("br")])]),t._v(" "),a("h2",{attrs:{id:"get-wasabi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-wasabi"}},[t._v("#")]),t._v(" Get Wasabi")]),t._v(" "),a("p",[t._v("Clone & Restore & Build")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/zkSNACKs/WalletWasabi\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" WalletWasabi\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule update --init --recursive\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" WalletWasabi.Gui\ndotnet restore "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" dotnet build\n")])])]),a("h2",{attrs:{id:"run-wasabi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-wasabi"}},[t._v("#")]),t._v(" Run Wasabi")]),t._v(" "),a("ol",[a("li",[t._v("Run Tor: "),a("br"),t._v("\n[Windows] Run "),a("code",[t._v("tor.exe")]),t._v(". "),a("br"),t._v("\n[Linux&OSX] Type "),a("code",[t._v("tor")]),t._v(" in terminal. "),a("br")]),t._v(" "),a("li",[t._v("Run Wasabi with "),a("code",[t._v("dotnet run")]),t._v(" from the "),a("code",[t._v("WalletWasabi.Gui")]),t._v(" folder.")])]),t._v(" "),a("h2",{attrs:{id:"in-wallet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#in-wallet"}},[t._v("#")]),t._v(" In-Wallet")]),t._v(" "),a("ol",[a("li",[t._v("Generate a new wallet.")]),t._v(" "),a("li",[t._v("Backup the mnemonic words.")]),t._v(" "),a("li",[t._v("Load the wallet you have just generated.")]),t._v(" "),a("li",[t._v("Generate a new receive address and fund it with 0.11 BTC.")]),t._v(" "),a("li",[t._v("Wait until the filters are synchronized (5 minutes), so you will see the incoming transaction.")]),t._v(" "),a("li",[t._v("Wait until your transaction is confirmed.")]),t._v(" "),a("li",[t._v("You can now start mixing in the CoinJoin tab if you want to.")])]),t._v(" "),a("h2",{attrs:{id:"note-you-can-update-wasabi-with-these-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#note-you-can-update-wasabi-with-these-commands"}},[t._v("#")]),t._v(" Note, you Can Update Wasabi With These Commands:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule update --init --recursive \n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);