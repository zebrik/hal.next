$wnd.hal.runAsyncCallback8("GGb(88,13,{1:1,88:1,13:1});_.JY=function Vsd(){return this.OR('deployment-name').Zs()};_.KY=function Wsd(){var a;a=new joc;if(this.SR('driver-class-name')){a.Ac(Sj(this.OR('driver-class-name').Zs()))}if(this.SR('driver-datasource-class-name')){a.Ac(Sj(this.OR('driver-datasource-class-name').Zs()))}if(this.SR('driver-xa-datasource-class-name')){a.Ac(Sj(this.OR('driver-xa-datasource-class-name').Zs()))}return a};_.LY=function Xsd(){var a;a='n/a';if(this.SR('driver-major-version')){a=this.OR('driver-major-version').Zs();if(this.SR('driver-minor-version')){a+='.'+this.OR('driver-minor-version').Zs()}}return a};_.MY=function Ysd(){return this.OR('driver-module-name').Zs()};_.NY=function $sd(){if(this.SR('deployment-name')){return ctd(),_sd}else if(this.SR('driver-module-name')){return ctd(),atd}else{return ctd(),btd}};function ctd(){ctd=IGb;ib();btd=new etd('UNKNOWN',0,'n/a');_sd=new etd('DEPLOYMENT',1,whc('Deployment'));atd=new etd('MODULE',2,whc('Module'))}\nfunction etd(a,b,d){kb.call(this,a,b);this.OY();this.a=d}\nfunction gtd(a){ctd();return wb((jtd(),itd),a)}\nfunction htd(){ctd();return D2(p2(Ksb,1),{4:1,12:1,1:1,6:1},296,0,[btd,_sd,atd])}\nGGb(296,7,{4:1,9:1,7:1,1:1,296:1},etd);_.OY=function dtd(){};_.PY=function ftd(){return this.a};var _sd,atd,btd;var Ksb=Xcc('org.jboss.hal.client.configuration.subsystem.datasource','JdbcDriver/Provider',296,fhb,htd,gtd);function jtd(){jtd=IGb;itd=nb(htd())}\nvar itd;function ktd(){ktd=IGb;Ndd()}\nfunction mtd(a,b,d,e,g,h,i,j,k,l){ktd();Pdd.call(this,(new w_d(a,'jdbc-driver','JDBC Driver')).k8(new Ntd(k,i,h,e)).r8());this.QY();this.PT(b.n7(kAe('jdbc-driver',D2(p2(Bhb,1),{4:1,1:1,6:1,8:1},2,6,['add'])),'JDBC Driver',new Qtd(j,l,i,h,g)));this.PT(b.r7(kAe('jdbc-driver',D2(p2(Bhb,1),{4:1,1:1,6:1,8:1},2,6,['refresh']))));this.uU(new Ttd(this,d));this.zU(new Wtd(l))}\nfunction ntd(a,b,d,e,g,h){ktd();var i;{i=new vtd(h);(new NKc(c4(a.yv(),118))).HI(new uLc,i,D2(p2(mlb,1),{4:1,1:1,6:1,125:1},80,0,[new nud(b,d),new hLd(e,d,b.b7()),new vud(e,d),new eud]))}}\nfunction otd(a,b,d,e,g,h){ktd();var i,j,k;{k=c4(a.Bgb((aod(),$nd)),85);j=(new N5d(kAe('jdbc-driver',D2(p2(Bhb,1),{4:1,1:1,6:1,8:1},2,6,['add','form'])),k)).eab().kab('driver-name',D2(p2(Bhb,1),{4:1,1:1,6:1,8:1},2,6,['driver-module-name','driver-class-name','driver-major-version','driver-minor-version'])).uab().gab();i=new U4d(b.job().Pmb('JDBC Driver'),j,new Ztd(d,e,g,b,h));i.Gw()}}\nfunction qtd(a,b){ktd();return new Rud(b,a)}\nfunction rtd(a,b,d,e,g,h,i){ktd();var j,k;{if(D4(i)){j=(aod(),$nd).Jgb(a,D2(p2(Bhb,1),{4:1,1:1,6:1,8:1},2,6,[h]));k=(new Vpe('add',j)).mgb(i).igb();b.Heb(k,new aud(d,e,i,g,h))}}}\nfunction std(a,b,d,e,g,h){ktd();{NEe(a,rEe(b.job().Omb('JDBC Driver',d.OR('driver-name').Zs())));e.oU(g)}}\nGGb(1441,42,{1:1,42:1},mtd);_.QY=function ltd(){};_.RY=function ptd(a,b){ktd();return new Ctd(this,b,a)};var Tsb=Wcc('org.jboss.hal.client.configuration.subsystem.datasource','JdbcDriverColumn',1441,kzb);function ttd(){ttd=IGb;L()}\nfunction vtd(a){ttd();this.a=a;T.call(this);this.SY()}\nGGb(1442,1,{1:1},vtd);_.SY=function utd(){};_.ej=function wtd(a){this.lR(c4(a,30))};_.fj=function ytd(a){this.mR(c4(a,30))};_.lR=function xtd(a){this.a.Ej(a.TI())};_.mR=function ztd(a){this.a.fj(c4(a.SB('jdbcDriverFunctions.drivers'),16))};var Lsb=Wcc('org.jboss.hal.client.configuration.subsystem.datasource','JdbcDriverColumn/1',1442,uhb);function Atd(){Atd=IGb;L();e3d()}\nfunction Ctd(a,b,d){Atd();this.a=a;this.b=b;this.c=d;T.call(this);this.TY()}\nGGb(1447,1,{1:1},Ctd);_.TY=function Btd(){};_.wI=function Etd(){return g3d(this)};_.il=function Htd(){return j3d(this)};_.VU=function Itd(){return k3d(this)};_.WU=function Ktd(){return l3d(this)};_.XU=function Ltd(){return m3d(this)};_.VN=function Dtd(){var a;a=new joc;if(F4(this.b.NY(),(ctd(),atd))){a.Ac(this.c.m9('JDBC Driver',this.b.$i(),(aod(),$nd),this.a))}return a};_.TU=function Ftd(){if(F4(this.b.NY(),(ctd(),_sd))||F4(this.b.NY(),(ctd(),atd))){return this.jl()+' '+this.b.NY().PY()}return this.jl()};_.UU=function Gtd(){var a,b;a=null;b=this.b.NY();if(G4(b,(ctd(),btd))){a=h5b(T2b());if(F4(b,(ctd(),atd))){S5b(a,twe('cubes'))}else if(F4(b,(ctd(),_sd))){S5b(a,twe('archive'))}}return a};_.jl=function Jtd(){return this.b.$i()};var Msb=Wcc('org.jboss.hal.client.configuration.subsystem.datasource','JdbcDriverColumn/2',1447,uhb);function Mtd(){Mtd=IGb}\nfunction Ntd(a,b,d,e){Mtd();this.c=a;this.d=b;this.a=d;this.b=e}\nGGb(1443,1,{1:1},Ntd);_.FU=function Otd(a,b){ntd(this.c,this.d,this.a,this.b,a,b)};var Nsb=Wcc('org.jboss.hal.client.configuration.subsystem.datasource','JdbcDriverColumn/lambda$0$Type',1443,uhb);function Ptd(){Ptd=IGb}\nfunction Qtd(a,b,d,e,g){Ptd();this.c=a;this.d=b;this.e=d;this.a=e;this.b=g}\nGGb(1446,1,{1:1},Qtd);_.hY=function Rtd(a){otd(this.c,this.d,this.e,this.a,this.b,a)};var Osb=Wcc('org.jboss.hal.client.configuration.subsystem.datasource','JdbcDriverColumn/lambda$1$Type',1446,uhb);function Std(){Std=IGb}\nfunction Ttd(a,b){Std();this.a=a;this.b=b}\nGGb(1448,1,{1:1},Ttd);_.YU=function Utd(a){return this.a.RY(this.b,a)};var Psb=Wcc('org.jboss.hal.client.configuration.subsystem.datasource','JdbcDriverColumn/lambda$2$Type',1448,uhb);function Vtd(){Vtd=IGb}\nfunction Wtd(a){Vtd();this.a=a}\nGGb(1449,1,{1:1},Wtd);_.AV=function Xtd(a){return qtd(this.a,a)};var Qsb=Wcc('org.jboss.hal.client.configuration.subsystem.datasource','JdbcDriverColumn/lambda$3$Type',1449,uhb);function Ytd(){Ytd=IGb}\nfunction Ztd(a,b,d,e,g){Ytd();this.e=a;this.b=b;this.c=d;this.d=e;this.a=g}\nGGb(1445,1,{1:1},Ztd);_.UY=function $td(a,b){rtd(this.e,this.b,this.c,this.d,this.a,a,b)};var Rsb=Wcc('org.jboss.hal.client.configuration.subsystem.datasource','JdbcDriverColumn/lambda$4$Type',1445,uhb);function _td(){_td=IGb}\nfunction aud(a,b,d,e,g){_td();this.b=a;this.e=b;this.c=d;this.a=e;this.d=g}\nGGb(1444,1,{1:1,45:1},aud);_.fj=function bud(a){std(this.b,this.e,this.c,this.a,this.d,a)};var Ssb=Wcc('org.jboss.hal.client.configuration.subsystem.datasource','JdbcDriverColumn/lambda$5$Type',1444,uhb);function Pud(){Pud=IGb;Pjd()}\nfunction Rud(a,b){Pud();var d,e,g;Rjd.call(this,a.$i());this.YY();g=a.NY();if(F4(g,(ctd(),atd))){c4(c4(this.MV().YH(),3).RH(b.job().enb(g.PY(),a.MY())),3).NH()}else if(F4(g,(ctd(),_sd))){c4(c4(this.MV().YH(),3).RH(b.job().enb(g.PY(),a.JY())),3).NH();c4(c4(this.MV().YH(),3).RH(b.job().dnb()),3).NH()}e=new HMc;d=(new s3d(a,b.hob().qlb())).s9(new Vud(e)).s9(new Yud(e)).q9('jdbc-compliant').t9();this.MV().BH(d)}\nfunction Sud(a,b){Pud();{return D2(p2(Bhb,1),{4:1,1:1,6:1,8:1},2,6,[a.rJ('driver-classes'),b.KY().Gc()?'n/a':cg(44).tc().pc(b.KY())])}}\nfunction Tud(a,b){Pud();{return D2(p2(Bhb,1),{4:1,1:1,6:1,8:1},2,6,[a.rJ('driver-version'),b.LY()])}}\nGGb(1659,60,{1:1,38:1,60:1},Rud);_.YY=function Qud(){};var dtb=Wcc('org.jboss.hal.client.configuration.subsystem.datasource','JdbcDriverPreview',1659,Szb);function z3d(){z3d=IGb}\nvar Ozb=Ycc('org.jboss.hal.core.finder','PreviewAttributes/PreviewAttributeFunction');function Uud(){Uud=IGb}\nfunction Vud(a){Uud();this.a=a}\nGGb(1660,1,{1:1},Vud);_.ZY=function Wud(a){return Sud(this.a,a)};var btb=Wcc('org.jboss.hal.client.configuration.subsystem.datasource','JdbcDriverPreview/lambda$0$Type',1660,uhb);function Xud(){Xud=IGb}\nfunction Yud(a){Xud();this.a=a}\nGGb(1661,1,{1:1},Yud);_.ZY=function Zud(a){return Tud(this.a,a)};var ctb=Wcc('org.jboss.hal.client.configuration.subsystem.datasource','JdbcDriverPreview/lambda$1$Type',1661,uhb);GGb(804,1,{1:1});_.kZ=function mvd(){var a;a=this.wZ(this.a.$x().L9(),this.a.$x().J9(),this.a.$x().M9(),this.a.Yx().P5(),this.a.Ax().Dv(),this.a.ey().mfb(),this.a.hy().Bhb(),this.a.hy().Ahb(),this.a.Gx().aJ(),this.a.oy().rob());this.rZ(a);return a};_.rZ=function uvd(a){};_.wZ=function zvd(a,b,d,e,g,h,i,j,k,l){return new mtd(a,b,d,e,g,h,i,j,k,l)};GGb(812,1,{143:1,1:1});_.Fj=function hwd(){this.b.fj(this.a.a.kZ())};GGb(300,1,{1:1});_.s9=function w3d(a){var b;b=a.ZY(this.c);this.r9(b[0],b[1]);return this};GGb(183,1,{1:1,215:1});_.dnb=function rBe(){return (new tKb).ct('To remove a JDBC driver provided as a deployment undeploy the JDBC driver artifact.').dt()};_.enb=function sBe(a,b){return (new tKb).ct('The JDBC driver is provided by ').bt(a).ct(' <code>').bt(b).ct('<\\/code>.').dt()};YFe(pJ)(8);\n//# sourceURL=hal-8.js\n")
