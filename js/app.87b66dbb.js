(function(){"use strict";var t={1382:function(t,a,e){var s=e(9242),i=e(3396);const o=t=>((0,i.dD)("data-v-42a269ce"),t=t(),(0,i.Cn)(),t),c={class:"app-container"},l={class:"main-container"},n={class:"top-bar"},r=o((()=>(0,i._)("div",{class:"pacman-logo"},null,-1))),d=(0,i.uE)('<div class="robots-wrapper robots" data-v-42a269ce></div><div class="section" data-v-42a269ce><div class="section__top-part" data-v-42a269ce><div class="section__number number" style="margin-top:28px;" data-v-42a269ce>01</div><div class="section__main-title main-title" data-v-42a269ce>Фабрика по производству биороботов</div></div><div class="section__main-part" data-v-42a269ce><div class="section__scroll" data-v-42a269ce><div class="scroll" data-v-42a269ce>скролл</div><div class="scroll-arrow-wrapper scroll-arrow" data-v-42a269ce></div></div><div class="section__undertitle undertitle" data-v-42a269ce>класса «монитор-кресло»</div></div></div>',2),u={class:"section"},_=o((()=>(0,i._)("div",{class:"section__top-part"},[(0,i._)("div",{class:"section__number number"},"02"),(0,i._)("div",{class:"section__title section__title-title"},"Кошелёк криптовалют")],-1))),p={class:"section__component"},v={class:"section"},m=o((()=>(0,i._)("div",{class:"section__top-part"},[(0,i._)("div",{class:"section__number number"},"03"),(0,i._)("div",{class:"section__title section__title-title"},"Рынок комплектующих")],-1))),b={class:"section__component"},h={class:"section"},g=o((()=>(0,i._)("div",{class:"section__top-part"},[(0,i._)("div",{class:"section__number number"},"04"),(0,i._)("div",{class:"section__title section__title-title"},"Склад")],-1))),w={class:"section__component"},C={class:"section"},f=o((()=>(0,i._)("div",{class:"section__top-part"},[(0,i._)("div",{class:"section__number number"},"05"),(0,i._)("div",{class:"section__title section__title-title"},"Производство")],-1))),S={class:"section__component",ref:"fabrication"};function A(t,a,e,s,o,A){const D=(0,i.up)("ModalWindow"),y=(0,i.up)("CryptoWallet"),k=(0,i.up)("PartMarket"),T=(0,i.up)("PartStorage"),M=(0,i.up)("FabricationModule");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(D),(0,i._)("div",c,[(0,i._)("div",l,[(0,i._)("div",n,[r,(0,i._)("div",{class:"button-main wd236 button-orange-wired button-text",onClick:a[0]||(a[0]=t=>A.goto("fabrication"))},"Произвести биоробота")]),d,(0,i._)("div",u,[_,(0,i._)("div",p,[(0,i.Wm)(y)])]),(0,i._)("div",v,[m,(0,i._)("div",b,[(0,i.Wm)(k)])]),(0,i._)("div",h,[g,(0,i._)("div",w,[(0,i.Wm)(T)])]),(0,i._)("div",C,[f,(0,i._)("div",S,[(0,i.Wm)(M)],512)])])])],64)}const D=t=>((0,i.dD)("data-v-4042c572"),t=t(),(0,i.Cn)(),t),y={key:0,class:"interlayer"},k={key:0,class:"modal-window"},T=D((()=>(0,i._)("div",{class:"modal-window__coin-modal-wrapper coin-modal"},null,-1))),M=D((()=>(0,i._)("div",{class:"modal-window__content"},[(0,i._)("div",{class:"modal-window__main-text modal-main-text"}," Количество монет ограничено "),(0,i._)("div",{class:"modal-secondary-text"}," Вы не можете нацыганить более 100 монет biorobo ")],-1))),P={key:1,class:"modal-window"},B=D((()=>(0,i._)("div",{class:"modal-window__content"},[(0,i._)("div",{class:"modal-window__main-text modal-main-text"},"Биоробот произведён"),(0,i._)("div",{class:"modal-secondary-text"},[(0,i.Uk)("Поздравляем!"),(0,i._)("br"),(0,i.Uk)("Вы произвели биоробота")])],-1)));function O(t,a,e,s,o,c){return s.modalCoinsOpened||s.modalRobotsOpened?((0,i.wg)(),(0,i.iD)("div",y,[s.modalCoinsOpened?((0,i.wg)(),(0,i.iD)("div",k,[(0,i._)("div",{class:"modal-window__cross-modal-wrapper cross-modal",onClick:a[0]||(a[0]=(...t)=>s.switchCoinsModal&&s.switchCoinsModal(...t))}),T,M])):(0,i.kq)("",!0),s.modalRobotsOpened?((0,i.wg)(),(0,i.iD)("div",P,[(0,i._)("div",{class:"modal-window__cross-modal-wrapper cross-modal",onClick:a[1]||(a[1]=t=>{s.switchRobotsModal(),c.reloadPage()})}),B])):(0,i.kq)("",!0)])):(0,i.kq)("",!0)}var F=e(65),x={name:"ModalWindow",methods:{reloadPage(){window.location.reload()}},setup(){const t=(0,F.oR)();return{modalCoinsOpened:(0,i.Fl)((()=>t.getters["wallet/getCoinsModalState"])),modalRobotsOpened:(0,i.Fl)((()=>t.getters["fabrication/getRobotModalState"])),switchCoinsModal:()=>t.commit("wallet/SWITCH_COINS_MODAL"),switchRobotsModal:()=>t.commit("fabrication/SWITCH_ROBOT_MODAL")}}},I=e(89);const E=(0,I.Z)(x,[["render",O],["__scopeId","data-v-4042c572"]]);var R=E,W=e(7139);const q=t=>((0,i.dD)("data-v-46028584"),t=t(),(0,i.Cn)(),t),H={class:"wallet-container"},N={class:"balance-wrapper"},G={class:"coins"},L={class:"balance balance_text"},K={class:"farm-container"},j={class:"farm-button-wrapper"},Y={class:"farm-condition-wrapper"},Z={class:"checkbox-wrapper"},U={key:0,class:"checkmark"},z=q((()=>(0,i._)("div",{class:"condition condition_text"},"Цыганить по 5 монет",-1)));function V(t,a,e,s,o,c){return(0,i.wg)(),(0,i.iD)("div",H,[(0,i._)("div",N,[(0,i._)("div",G,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.coins,(t=>((0,i.wg)(),(0,i.iD)("div",{class:"coins__coin coin",key:t})))),128))]),(0,i._)("div",L,(0,W.zw)(s.coins)+" biorobo "+(0,W.zw)(s.textCased),1)]),(0,i._)("div",K,[(0,i._)("div",j,[(0,i._)("div",{class:"make-money-button make-money-button_text disable-select",onClick:a[0]||(a[0]=(...t)=>s.farmCoins&&s.farmCoins(...t))}," Нацыганить ")]),(0,i._)("div",Y,[(0,i._)("div",Z,[(0,i._)("div",{class:"condition-checkbox",onClick:a[1]||(a[1]=(...t)=>s.switchStackMode&&s.switchStackMode(...t))},[s.stackMode?((0,i.wg)(),(0,i.iD)("div",U)):(0,i.kq)("",!0)])]),z])])])}var X={name:"CryptoWallet",setup(){const t=(0,F.oR)();return{coins:(0,i.Fl)((()=>t.getters["wallet/getCoins"])),stackMode:(0,i.Fl)((()=>t.getters["wallet/getStackMode"])),textCased:(0,i.Fl)((()=>t.getters["wallet/getTextCased"])),farmCoins:()=>t.commit("wallet/ADD_COINS_FIXED"),switchStackMode:()=>t.commit("wallet/SWITCH_STACK_MODE")}}};const $=(0,I.Z)(X,[["render",V],["__scopeId","data-v-46028584"]]);var J=$;const Q=t=>((0,i.dD)("data-v-5b20e606"),t=t(),(0,i.Cn)(),t),tt={class:"parts-container"},at={class:"part"},et=Q((()=>(0,i._)("div",{class:"part__thumbnail shadow-filter"},[(0,i._)("div",{class:"biohand"})],-1))),st=Q((()=>(0,i._)("div",{class:"part__name name"},"Биорука",-1))),it=Q((()=>(0,i._)("div",{class:"part__cost cost"},"Стоимость: 7 монет",-1))),ot={class:"part__button-wrapper"},ct={class:"part"},lt=Q((()=>(0,i._)("div",{class:"part__thumbnail shadow-filter"},[(0,i._)("div",{class:"microchip"})],-1))),nt=Q((()=>(0,i._)("div",{class:"part__name name"},"Микрочип",-1))),rt=Q((()=>(0,i._)("div",{class:"part__cost cost"},"Стоимость: 5 монет",-1))),dt={class:"part__button-wrapper"},ut={class:"part"},_t=(0,i.uE)('<div class="part__thumbnail shadow-filter" data-v-5b20e606><div class="soul-wrapper" data-v-5b20e606><div class="soul" data-v-5b20e606></div></div></div><div class="part__name name" data-v-5b20e606>Душа</div><div class="part__cost cost" data-v-5b20e606>Стоимость: 25 монет</div>',3),pt={class:"part__button-wrapper"};function vt(t,a,e,s,o,c){return(0,i.wg)(),(0,i.iD)("div",tt,[(0,i._)("div",at,[et,st,it,(0,i._)("div",ot,[(0,i._)("div",{class:(0,W.C_)(["button-main wd200 button-text",c.biohandButtonDisable]),onClick:a[0]||(a[0]=t=>s.biohandBuyState?null:s.buyBiohand())},"Установить",2)])]),(0,i._)("div",ct,[lt,nt,rt,(0,i._)("div",dt,[(0,i._)("div",{class:(0,W.C_)(["button-main wd200 button-text",c.microchipButtonDisable]),onClick:a[1]||(a[1]=t=>s.microchipBuyState?null:s.buyMicrochip())},"Установить ",2)])]),(0,i._)("div",ut,[_t,(0,i._)("div",pt,[(0,i._)("div",{class:(0,W.C_)(["button-main wd200 button-text",c.soulButtonDisable]),onClick:a[2]||(a[2]=t=>s.soulBuyState?null:s.buySoul())},"Установить",2)])])])}var mt={name:"PartMarket",computed:{biohandButtonDisable(){return{"button-disable-filled":this.biohandBuyState,"button-orange":!this.biohandBuyState}},microchipButtonDisable(){return{"button-disable-filled":this.microchipBuyState,"button-orange":!this.microchipBuyState}},soulButtonDisable(){return{"button-disable-filled":this.soulBuyState,"button-orange":!this.soulBuyState}}},setup(){const t=(0,F.oR)();return{biohandBuyState:(0,i.Fl)((()=>t.getters["biohand/getBuyState"])),microchipBuyState:(0,i.Fl)((()=>t.getters["microchip/getBuyState"])),soulBuyState:(0,i.Fl)((()=>t.getters["soul/getBuyState"])),buyBiohand:()=>t.dispatch("buyPart","biohand"),buyMicrochip:()=>t.dispatch("buyPart","microchip"),buySoul:()=>t.dispatch("buyPart","soul")}}};const bt=(0,I.Z)(mt,[["render",vt],["__scopeId","data-v-5b20e606"]]);var ht=bt;const gt=t=>((0,i.dD)("data-v-81a8cd08"),t=t(),(0,i.Cn)(),t),wt={class:"parts-container"},Ct={class:"part"},ft=gt((()=>(0,i._)("div",{class:"part__name name"},"Биорука",-1))),St=gt((()=>(0,i._)("div",{class:"part__cost cost"},"Стоимость: 5 монет",-1))),At={class:"part__amount amount"},Dt={class:"part__button-wrapper"},yt={class:"part"},kt=gt((()=>(0,i._)("div",{class:"part__name name"},"Микрочип",-1))),Tt=gt((()=>(0,i._)("div",{class:"part__cost cost"},"Стоимость: 3 монеты",-1))),Mt={class:"part__amount amount"},Pt={class:"part__button-wrapper"},Bt={class:"part"},Ot=gt((()=>(0,i._)("div",{class:"part__name name"},"Душа",-1))),Ft=gt((()=>(0,i._)("div",{class:"part__cost cost"},"Стоимость: 15 монет",-1))),xt={class:"part__amount amount"},It={class:"part__button-wrapper"};function Et(t,a,e,s,o,c){return(0,i.wg)(),(0,i.iD)("div",wt,[(0,i._)("div",Ct,[ft,St,(0,i._)("div",At,(0,W.zw)(s.biohandAmount)+" шт ",1),(0,i._)("div",Dt,[(0,i._)("div",{class:(0,W.C_)(["button-main wd200 button-text",c.biohandButtonDisable]),onClick:a[0]||(a[0]=t=>s.biohandSellState?null:s.sellBiohand())},"Продать",2)])]),(0,i._)("div",yt,[kt,Tt,(0,i._)("div",Mt,(0,W.zw)(s.microchipAmount)+" шт ",1),(0,i._)("div",Pt,[(0,i._)("div",{class:(0,W.C_)(["button-main wd200 button-text",c.microchipButtonDisable]),onClick:a[1]||(a[1]=t=>s.microchipSellState?null:s.sellMicrochip())},"Продать ",2)])]),(0,i._)("div",Bt,[Ot,Ft,(0,i._)("div",xt,(0,W.zw)(s.soulAmount)+" шт ",1),(0,i._)("div",It,[(0,i._)("div",{class:(0,W.C_)(["button-main wd200 button-text",c.soulButtonDisable]),onClick:a[2]||(a[2]=t=>s.soulSellState?null:s.sellSoul())},"Продать",2)])])])}var Rt={name:"PartStorage",computed:{biohandButtonDisable(){return{"button-disable-wired":this.biohandSellState,"button-blue":!this.biohandSellState}},microchipButtonDisable(){return{"button-disable-wired":this.microchipSellState,"button-blue":!this.microchipSellState}},soulButtonDisable(){return{"button-disable-wired":this.soulSellState,"button-blue":!this.soulSellState}}},setup(){const t=(0,F.oR)();return{biohandSellState:(0,i.Fl)((()=>t.getters["biohand/getSellState"])),microchipSellState:(0,i.Fl)((()=>t.getters["microchip/getSellState"])),soulSellState:(0,i.Fl)((()=>t.getters["soul/getSellState"])),biohandAmount:(0,i.Fl)((()=>t.getters["biohand/getAmount"])),microchipAmount:(0,i.Fl)((()=>t.getters["microchip/getAmount"])),soulAmount:(0,i.Fl)((()=>t.getters["soul/getAmount"])),sellBiohand:()=>t.dispatch("sellPart","biohand"),sellMicrochip:()=>t.dispatch("sellPart","microchip"),sellSoul:()=>t.dispatch("sellPart","soul")}}};const Wt=(0,I.Z)(Rt,[["render",Et],["__scopeId","data-v-81a8cd08"]]);var qt=Wt;const Ht=t=>((0,i.dD)("data-v-0a217a0f"),t=t(),(0,i.Cn)(),t),Nt={class:"fabrictaion-container"},Gt={class:"fab-blocks-container"},Lt={class:"fab-block-wrapper"},Kt={class:"changers-container"},jt={class:"changer"},Yt=Ht((()=>(0,i._)("div",{class:"changer__title changer__title-title"},"Тип биоробота:",-1))),Zt={class:"changer__switches-container"},Ut=Ht((()=>(0,i._)("div",{class:"changer__case changer__case-text"},"FrontEnd",-1))),zt=Ht((()=>(0,i._)("div",{class:"changer__case changer__case-text"},"Design",-1))),Vt={class:"changer"},Xt=Ht((()=>(0,i._)("div",{class:"changer__title changer__title-title"},"Стабилизатор:",-1))),$t={class:"changer__switches-container"},Jt=Ht((()=>(0,i._)("div",{class:"changer__case changer__case-text"},"Male",-1))),Qt=Ht((()=>(0,i._)("div",{class:"changer__case changer__case-text"},"Female",-1))),ta={class:"fab-block-wrapper"},aa={class:"required-parts"},ea={class:"required-parts__parts-container"},sa={class:"required-parts__part-wrapper"},ia={class:"required-parts__part-wrapper"},oa={class:"required-parts__part-wrapper"},ca={class:"required-parts__part-wrapper"},la={class:"required-parts__parts-container"},na={class:"required-parts__part-wrapper"},ra={class:"required-parts__part-wrapper"},da={class:"required-parts__part-wrapper"},ua={class:"required-parts__part-wrapper"},_a={class:"required-parts__parts-container"},pa={class:"required-parts__part-wrapper"},va={class:"fab-block-wrapper"},ma={class:"button-wrapper"},ba={class:"fab-block-wrapper"},ha={class:"func-text-wrapper"},ga={class:"functional-text"},wa={class:"robot-preview"};function Ca(t,a,e,s,o,c){const l=(0,i.up)("BiohandPart"),n=(0,i.up)("MicrochipPart"),r=(0,i.up)("SoulPart");return(0,i.wg)(),(0,i.iD)("div",Nt,[(0,i._)("div",Gt,[(0,i._)("div",Lt,[(0,i._)("div",Kt,[(0,i._)("div",jt,[Yt,(0,i._)("div",Zt,[(0,i._)("div",{class:"switch-wrapper",onClick:a[0]||(a[0]=t=>s.switchType("front"))},[(0,i._)("div",{class:(0,W.C_)({switch:"front"===s.type})},null,2)]),Ut,(0,i._)("div",{class:"switch-wrapper",onClick:a[1]||(a[1]=t=>s.switchType("design"))},[(0,i._)("div",{class:(0,W.C_)({switch:"design"===s.type})},null,2)]),zt])]),(0,i._)("div",Vt,[Xt,(0,i._)("div",$t,[(0,i._)("div",{class:"switch-wrapper",onClick:a[2]||(a[2]=t=>s.switchGender("male"))},[(0,i._)("div",{class:(0,W.C_)({switch:"male"===s.gender})},null,2)]),Jt,(0,i._)("div",{class:"switch-wrapper",onClick:a[3]||(a[3]=t=>s.switchGender("female"))},[(0,i._)("div",{class:(0,W.C_)({switch:"female"===s.gender})},null,2)]),Qt])])])]),(0,i._)("div",ta,[(0,i._)("div",aa,[(0,i._)("div",ea,[(0,i._)("div",sa,[(0,i.Wm)(l)]),(0,i._)("div",ia,[(0,i.Wm)(l)]),(0,i._)("div",oa,[(0,i.Wm)(l)]),(0,i._)("div",ca,[(0,i.Wm)(l)])]),(0,i._)("div",la,[(0,i._)("div",na,[(0,i.Wm)(n)]),(0,i._)("div",ra,[(0,i.Wm)(n)]),(0,i._)("div",da,[(0,i.Wm)(n)]),(0,i._)("div",ua,[(0,i.Wm)(n)])]),(0,i._)("div",_a,[(0,i._)("div",pa,[(0,i.Wm)(r)])])])]),(0,i._)("div",va,[(0,i._)("div",ma,[(0,i._)("div",{class:(0,W.C_)(["button-main wd236 button-text",c.fabButtonComputed]),onClick:a[4]||(a[4]=t=>"available"===s.status?s.fabricateRobot():null)}," Произвести за 10 монет ",2)])]),(0,i._)("div",ba,[(0,i._)("div",ha,[(0,i._)("div",ga,(0,W.zw)(s.funcText),1)])])]),(0,i._)("div",wa,[(0,i._)("div",{class:(0,W.C_)(s.gender+"-"+s.type+"-"+s.status)},null,2)])])}function fa(t,a,e,s,o,c){return(0,i.wg)(),(0,i.iD)(i.HY,null,[s.isDisable?((0,i.wg)(),(0,i.iD)("div",{key:0,class:(0,W.C_)(["part",c.partComputed]),onClick:a[0]||(a[0]=t=>o.isActive?(s.putPart(),c.switchActive()):null),style:(0,W.j5)({cursor:o.isActive?null:"default"})},[(0,i._)("div",{class:(0,W.C_)(c.spriteComputed)},null,2)],6)):(0,i.kq)("",!0),s.isDisable?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",{key:1,class:(0,W.C_)(["part",c.partComputed]),onClick:a[1]||(a[1]=t=>{o.isActive?s.putPart():s.getPart(),c.switchActive()})},[(0,i._)("div",{class:(0,W.C_)(c.spriteComputed)},null,2)],2))],64)}var Sa={name:"BiohandPart",data(){return{isActive:!1}},methods:{switchActive(){this.isActive=!this.isActive}},computed:{partComputed(){return{"part-active":this.isActive,"part-inactive":!this.isActive}},spriteComputed(){return{"biohand-active":this.isActive,"biohand-inactive":!this.isActive,"biohand-disable":this.isDisable&&!this.isActive}}},setup(){const t=(0,F.oR)();return{isDisable:(0,i.Fl)((()=>t.getters["biohand/getSellState"])),isGlobalDeactivate:(0,i.Fl)((()=>t.getters["fabrication/getGlobaDeactivate"])),getPart:()=>t.dispatch("getPart","biohand"),putPart:()=>t.dispatch("putPart","biohand")}}};const Aa=(0,I.Z)(Sa,[["render",fa],["__scopeId","data-v-748f8d14"]]);var Da=Aa;function ya(t,a,e,s,o,c){return(0,i.wg)(),(0,i.iD)(i.HY,null,[s.isDisable?((0,i.wg)(),(0,i.iD)("div",{key:0,class:(0,W.C_)(["part",c.partComputed]),onClick:a[0]||(a[0]=t=>o.isActive?(s.putPart(),c.switchActive()):null),style:(0,W.j5)({cursor:o.isActive?null:"default"})},[(0,i._)("div",{class:(0,W.C_)(c.spriteComputed)},null,2)],6)):(0,i.kq)("",!0),s.isDisable?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",{key:1,class:(0,W.C_)(["part",c.partComputed]),onClick:a[1]||(a[1]=t=>{o.isActive?s.putPart():s.getPart(),c.switchActive()})},[(0,i._)("div",{class:(0,W.C_)(c.spriteComputed)},null,2)],2))],64)}var ka={name:"microchipPart",data(){return{isActive:!1}},methods:{switchActive(){this.isActive=!this.isActive}},computed:{partComputed(){return{"part-active":this.isActive,"part-inactive":!this.isActive}},spriteComputed(){return{"microchip-active":this.isActive,"microchip-inactive":!this.isActive,"microchip-disable":this.isDisable&&!this.isActive}}},setup(){const t=(0,F.oR)();return{isDisable:(0,i.Fl)((()=>t.getters["microchip/getSellState"])),isGlobalDeactivate:(0,i.Fl)((()=>t.getters["fabrication/getGlobaDeactivate"])),getPart:()=>t.dispatch("getPart","microchip"),putPart:()=>t.dispatch("putPart","microchip")}}};const Ta=(0,I.Z)(ka,[["render",ya],["__scopeId","data-v-0d8835f4"]]);var Ma=Ta;function Pa(t,a,e,s,o,c){return(0,i.wg)(),(0,i.iD)(i.HY,null,[s.isDisable?((0,i.wg)(),(0,i.iD)("div",{key:0,class:(0,W.C_)(["part",c.partComputed]),onClick:a[0]||(a[0]=t=>o.isActive?(s.putPart(),c.switchActive()):null),style:(0,W.j5)({cursor:o.isActive?null:"default"})},[(0,i._)("div",{class:(0,W.C_)(c.spriteComputed)},null,2)],6)):(0,i.kq)("",!0),s.isDisable?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",{key:1,class:(0,W.C_)(["part",c.partComputed]),onClick:a[1]||(a[1]=t=>{o.isActive?s.putPart():s.getPart(),c.switchActive()})},[(0,i._)("div",{class:(0,W.C_)(c.spriteComputed)},null,2)],2))],64)}var Ba={name:"soulPart",data(){return{isActive:!1}},methods:{switchActive(){this.isActive=!this.isActive}},computed:{partComputed(){return{"part-active":this.isActive,"part-inactive":!this.isActive}},spriteComputed(){return{"soul-active":this.isActive,"soul-inactive":!this.isActive,"soul-disable":this.isDisable&&!this.isActive}}},setup(){const t=(0,F.oR)();return{isDisable:(0,i.Fl)((()=>t.getters["soul/getSellState"])),isGlobalDeactivate:(0,i.Fl)((()=>t.getters["fabrication/getGlobaDeactivate"])),getPart:()=>t.dispatch("getPart","soul"),putPart:()=>t.dispatch("putPart","soul")}}};const Oa=(0,I.Z)(Ba,[["render",Pa],["__scopeId","data-v-0d68d3c8"]]);var Fa=Oa,xa={name:"FabricationModule",components:{BiohandPart:Da,MicrochipPart:Ma,SoulPart:Fa},computed:{fabButtonComputed(){return{"button-orange-wired":"available"===this.status,"button-disable-wired":"blocked"===this.status}}},setup(){const t=(0,F.oR)();return{type:(0,i.Fl)((()=>t.getters["fabrication/getType"])),gender:(0,i.Fl)((()=>t.getters["fabrication/getGender"])),status:(0,i.Fl)((()=>t.getters["fabrication/getStatus"])),funcText:(0,i.Fl)((()=>t.getters["fabrication/getFuncText"])),switchType:a=>t.commit("fabrication/SWITCH_TYPE",a),switchGender:a=>t.commit("fabrication/SWITCH_GENDER",a),fabricateRobot:()=>t.dispatch("fabricateRobot")}}};const Ia=(0,I.Z)(xa,[["render",Ca],["__scopeId","data-v-0a217a0f"]]);var Ea=Ia,Ra={name:"app",components:{ModalWindow:R,CryptoWallet:J,PartMarket:ht,PartStorage:qt,FabricationModule:Ea},methods:{goto(t){console.log("s");const a=this.$refs[t],e=a.offsetTop;window.scrollTo({top:e,behavior:"smooth"})}}};const Wa=(0,I.Z)(Ra,[["render",A],["__scopeId","data-v-42a269ce"]]);var qa=Wa,Ha={namespaced:!0,state:{coins:45,stackedCoinFarm:!1,coinsModal:!1},getters:{getCoins:t=>t.coins,getStackMode:t=>t.stackedCoinFarm,getCoinsModalState:t=>t.coinsModal,getTextCased:t=>{let a="монет";return a=t.coins>=11&&t.coins<=19?"монет":t.coins%10>=2&&t.coins%10<=4?"монеты":t.coins%10===1?"монета":"монет",a}},mutations:{SWITCH_STACK_MODE:t=>{t.stackedCoinFarm=!t.stackedCoinFarm},ADD_COINS_FIXED:t=>{const a=t.stackedCoinFarm?5:1;t.coins+a<=100?t.coins+=a:t.coinsModal=!t.coinsModal},ADD_COINS_AMOUNT:(t,a)=>{t.coins+=a},TAKE_COINS_AMOUNT:(t,a)=>{t.coins-=a},SWITCH_COINS_MODAL:t=>{t.coinsModal=!t.coinsModal}},actions:{},modules:{}},Na={namespaced:!0,state:{},getters:{},mutations:{},actions:{buyPart:{root:!0,handler(t,a){t.commit(a+"/ADD",null,{root:!0}),t.commit("wallet/TAKE_COINS_AMOUNT",this.getters[a+"/getBuyCost"],{root:!0})}},sellPart:{root:!0,handler(t,a){this.getters[a+"/getSellCost"]+this.getters["wallet/getCoins"]<=100?(t.commit(a+"/TAKE",null,{root:!0}),t.commit("wallet/ADD_COINS_AMOUNT",this.getters[a+"/getSellCost"],{root:!0})):t.commit("wallet/SWITCH_COINS_MODAL",null,{root:!0})}}},modules:{}},Ga={namespaced:!0,state:{type:"front",gender:"male",ready:!1,biohands:0,microchips:0,souls:0,robotModal:!1,globalDeactivate:!1},getters:{getType:t=>t.type,getGender:t=>t.gender,getRobotModalState:t=>t.robotModal,getGlobaDeactivate:t=>t.globalDeactivate,getStatus:(t,a)=>{let e="";return e=t.ready?"ready":4===t.biohands&&4===t.microchips&&1===t.souls&&a["wallet/getCoins"]>=10?"available":"blocked",e},getFuncText:(t,a)=>{const e=t.biohands,s=t.microchips,i=t.souls,o=a["wallet/getCoins"];let c=["Для производства биоробота не хватает "];if(4===e&&4===s&&1===i&&o>=10)c[0]="Для производства биоробота всего хватает";else{let t=!0;if(4!==e){const a=4-e;c.push(a+" биорук"+(1===a?"и":"")),t=!1}if(4!==s){const a=4-s;t||c.push(", "),c.push(a+" микрочип"+(1===a?"a":"ов"))}if(1!==i){const a=1-i;t||c.push(", "),c.push(a+" души")}o<10&&(t||c.push(", "),c.push("денег"))}let l=c.lastIndexOf(", ");return c[l]=" и ",c.join("")+"."}},mutations:{SWITCH_TYPE:(t,a)=>{t.type=a},SWITCH_GENDER:(t,a)=>{t.gender=a},SWITCH_READY:t=>{t.ready=!t.ready},SWITCH_ROBOT_MODAL:t=>{t.robotModal=!t.robotModal},DISABLE_GLOBAL_DEACTIVATE:t=>{console.log("dis"),t.globalDeactivate=!1},ENABLE_GLOBAL_DEACTIVATE:t=>{console.log("enb"),t.globalDeactivate=!0},ADD_PART_TO_FAB:(t,a)=>{switch(a){case"biohand":t.biohands+=1;break;case"microchip":t.microchips+=1;break;case"soul":t.souls+=1;break;default:break}},TAKE_PART_FROM_FAB:(t,a)=>{switch(a){case"biohand":t.biohands-=1;break;case"microchip":t.microchips-=1;break;case"soul":t.souls-=1;break;default:break}},TAKE_ALL_PARTS:t=>{t.biohands=0,t.microchips=0,t.souls=0}},actions:{getPart:{root:!0,handler(t,a){t.commit(a+"/TAKE",null,{root:!0}),t.commit("ADD_PART_TO_FAB",a)}},putPart:{root:!0,handler(t,a){t.commit(a+"/ADD",null,{root:!0}),t.commit("TAKE_PART_FROM_FAB",a)}},fabricateRobot:{root:!0,handler(t){t.commit("SWITCH_READY"),t.commit("TAKE_ALL_PARTS"),t.commit("wallet/TAKE_COINS_AMOUNT",10),t.commit("SWITCH_ROBOT_MODAL")}}},modules:{wallet:Ha}},La={namespaced:!0,state:{amount:2,buycost:7,sellcost:5},getters:{getAmount:t=>t.amount,getBuyCost:t=>t.buycost,getSellCost:t=>t.sellcost,getSellState:t=>0===t.amount,getBuyState:(t,a)=>{let e=!1;return a["wallet/getCoins"]<t.buycost&&(e=!0),e}},mutations:{ADD:t=>{t.amount+=1},TAKE:t=>{t.amount-=1}},actions:{},modules:{wallet:Ha}},Ka={namespaced:!0,state:{amount:2,buycost:5,sellcost:3},getters:{getAmount:t=>t.amount,getBuyCost:t=>t.buycost,getSellCost:t=>t.sellcost,getSellState:t=>0===t.amount,getBuyState:(t,a)=>{let e=!1;return a["wallet/getCoins"]<t.buycost&&(e=!0),e}},mutations:{ADD:t=>{t.amount+=1},TAKE:t=>{t.amount-=1}},actions:{},modules:{wallet:Ha}},ja={namespaced:!0,state:{amount:2,buycost:25,sellcost:15},getters:{getAmount:t=>t.amount,getBuyCost:t=>t.buycost,getSellCost:t=>t.sellcost,getSellState:t=>0===t.amount,getBuyState:(t,a)=>{let e=!1;return a["wallet/getCoins"]<t.buycost&&(e=!0),e}},mutations:{ADD:t=>{t.amount+=1},TAKE:t=>{t.amount-=1}},actions:{},modules:{wallet:Ha}},Ya=(0,F.MT)({modules:{wallet:Ha,parts:Na,fabrication:Ga,biohand:La,microchip:Ka,soul:ja}});(0,s.ri)(qa).use(Ya).mount("#app")}},a={};function e(s){var i=a[s];if(void 0!==i)return i.exports;var o=a[s]={exports:{}};return t[s](o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(a,s,i,o){if(!s){var c=1/0;for(d=0;d<t.length;d++){s=t[d][0],i=t[d][1],o=t[d][2];for(var l=!0,n=0;n<s.length;n++)(!1&o||c>=o)&&Object.keys(e.O).every((function(t){return e.O[t](s[n])}))?s.splice(n--,1):(l=!1,o<c&&(c=o));if(l){t.splice(d--,1);var r=i();void 0!==r&&(a=r)}}return a}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[s,i,o]}}(),function(){e.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(a,{a:a}),a}}(),function(){e.d=function(t,a){for(var s in a)e.o(a,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:a[s]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){var t={143:0};e.O.j=function(a){return 0===t[a]};var a=function(a,s){var i,o,c=s[0],l=s[1],n=s[2],r=0;if(c.some((function(a){return 0!==t[a]}))){for(i in l)e.o(l,i)&&(e.m[i]=l[i]);if(n)var d=n(e)}for(a&&a(s);r<c.length;r++)o=c[r],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(d)},s=self["webpackChunkbiorobot_fabric"]=self["webpackChunkbiorobot_fabric"]||[];s.forEach(a.bind(null,0)),s.push=a.bind(null,s.push.bind(s))}();var s=e.O(void 0,[998],(function(){return e(1382)}));s=e.O(s)})();
//# sourceMappingURL=app.87b66dbb.js.map