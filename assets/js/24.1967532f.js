(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{393:function(n,e,a){"use strict";a.r(e);var s=a(25),t=Object(s.a)({},(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"send-transaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#send-transaction"}},[n._v("#")]),n._v(" Send transaction")]),n._v(" "),a("p",[n._v("Send transaction is used to send values between the accounts. If receiver account doesn't exists it will be created.")]),n._v(" "),a("p",[n._v("Send transaction has a payload like below:")]),n._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("type")]),n._v(" SendPayload "),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("struct")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n   Sender   Address "),a("span",{pre:!0,attrs:{class:"token string"}},[n._v('`cbor:"1,keyasint"`')]),n._v("\n   Receiver Address "),a("span",{pre:!0,attrs:{class:"token string"}},[n._v('`cbor:"2,keyasint"`')]),n._v("\n   Amount   "),a("span",{pre:!0,attrs:{class:"token builtin"}},[n._v("int64")]),n._v("   "),a("span",{pre:!0,attrs:{class:"token string"}},[n._v('`cbor:"3,keyasint"`')]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n")])])]),a("p",[n._v("For example a raw send transaction will look like this:")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("a9010102582008f7d9c21fdaa4a4147e60a0f3933c850b0c0d9af6b2a308c0a7b5639a7e49d603186e040a050106a301548dfaf698d3889b13251529ff971277305fbf1f440254bdd1540a13d82c38e5b4dfbd7b5b2bcab5fb5f290318640767746573742074781458603846ed5d519e51f6dd63e552ac410c531d5436c726475f6f8fb51c1133b07e32bd3bc4c674359546a1145cb1935a3c0621fc5329c6039707445e472a73d857d8eff832b971838b21c53baa090d90b02f6d2c5a1e9358e46f4f4955ff737c08991558309e6b99c60cf5ccb551efc793ec2bedd66070bde8fbddeb8305c5f670a21532304775637f9e622d5212f34c9479d12d11\n")])])]),a("p",[n._v("Which can be interpreted in CBOR format:")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("{1: 1, 2: h'08F7D9C21FDAA4A4147E60A0F3933C850B0C0D9AF6B2A308C0A7B5639A7E49D6', 3: 110, 4: 10, 5: 1, 6: {1: h'8DFAF698D3889B13251529FF971277305FBF1F44', 2: h'BDD1540A13D82C38E5B4DFBD7B5B2BCAB5FB5F29', 3: 100}, 7: \"test tx\", 20: h'3846ED5D519E51F6DD63E552AC410C531D5436C726475F6F8FB51C1133B07E32BD3BC4C674359546A1145CB1935A3C0621FC5329C6039707445E472A73D857D8EFF832B971838B21C53BAA090D90B02F6D2C5A1E9358E46F4F4955FF737C0899', 21: h'9E6B99C60CF5CCB551EFC793EC2BEDD66070BDE8FBDDEB8305C5F670A21532304775637F9E622D5212F34C9479D12D11'}\n\nA9                                      # map(9)\n   01                                   # unsigned(1)\n   01                                   # unsigned(1)\n   02                                   # unsigned(2)\n   58 20                                # bytes(32)\n      08F7D9C21FDAA4A4147E60A0F3933C850B0C0D9AF6B2A308C0A7B5639A7E49D6 #\n   03                                   # unsigned(3)\n   18 6E                                # unsigned(110)\n   04                                   # unsigned(4)\n   0A                                   # unsigned(10)\n   05                                   # unsigned(5)\n   01                                   # unsigned(1)\n   06                                   # unsigned(6)\n   A3                                   # map(3)\n      01                                # unsigned(1)\n      54                                # bytes(20)\n         8DFAF698D3889B13251529FF971277305FBF1F44 #\n      02                                # unsigned(2)\n      54                                # bytes(20)\n         BDD1540A13D82C38E5B4DFBD7B5B2BCAB5FB5F29 #\n      03                                # unsigned(3)\n      18 64                             # unsigned(100)\n   07                                   # unsigned(7)\n   67                                   # text(7)\n      74657374207478                    # \"test tx\"\n   14                                   # unsigned(20)\n   58 60                                # bytes(96)\n      3846ED5D519E51F6DD63E552AC410C531D5436C726475F6F8FB51C1133B07E32BD3BC4C674359546A1145CB1935A3C0621FC5329C6039707445E472A73D857D8EFF832B971838B21C53BAA090D90B02F6D2C5A1E9358E46F4F4955FF737C0899 #\n   15                                   # unsigned(21)\n   58 30                                # bytes(48)\n      9E6B99C60CF5CCB551EFC793EC2BEDD66070BDE8FBDDEB8305C5F670A21532304775637F9E622D5212F34C9479D12D11 #\n")])])]),a("p",[n._v("Transaction id for above transaction is:")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("ID: 38ea1ad335bbfd84641a34b6af3332810aef8e52da08897273f187fd6059c50a\n")])])]),a("p",[n._v("Comments:\nFee are calculated based on fee structure we have\nFee for mintbase transaction (subsidy tx) is zero\nAmount for subsidy transaction is reward + accumulated fee\nOnly one subsidy transaction per block\nSubsidy transaction should be the first transaction\nEach block should have one subsidy transaction\nReceiver for subsidy transaction can be any address")])])}),[],!1,null,null,null);e.default=t.exports}}]);