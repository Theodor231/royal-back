!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{JdDf:function(t,n,o){"use strict";o.r(n),o.d(n,"AuthModule",function(){return F});var i=o("ofXK"),a=o("tyNb"),s=o("mrSG"),c=o("3Pt+"),l=o("fXoL"),u=o("G7TF"),m=o("aOJN"),h=o("tC3r"),b=o("ejJU"),d=o("IO1d"),f=o("zkoq"),p=o("kmnG"),g=o("qFsG"),v=o("bTqV");function w(e,t){if(1&e&&(l.Vb(0,"mat-error"),l.Ac(1),l.Ub()),2&e){var r=l.hc();l.Db(1),l.Cc(" ",r.getErrorMessage("email")," ")}}function k(e,t){if(1&e&&(l.Vb(0,"mat-error"),l.Ac(1),l.Ub()),2&e){var r=l.hc();l.Db(1),l.Cc(" ",r.getErrorMessage("password")," ")}}var x,y=((x=function(){function t(r,n,o,i,a,s,c){e(this,t),this.formBuilder=r,this.router=n,this.authService=o,this.loaderService=i,this.alertService=a,this.generalService=s,this.localizationService=c,this.errors={},this.emailRegx=/^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/}return r(t,[{key:"ngOnInit",value:function(){this.form=this.formBuilder.group({email:["admin@gmail.com",[c.r.required,c.r.pattern(this.emailRegx)]],password:["11111111",c.r.required]})}},{key:"submit",value:function(e){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),!this.form.valid){t.next=18;break}return this.loaderService.showLocalLoader(),t.prev=2,t.next=5,this.authService.login(this.form.value);case 5:return r=t.sent,localStorage.setItem("credentials",JSON.stringify(r)),this.loaderService.hideLocalLoader(),this.generalService.userEvent.next(r.user),t.next=11,this.router.navigate(["ro/users"]);case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(2),this.loaderService.hideLocalLoader(),this.alertService.showError(t.t0.error.message);case 16:t.next=19;break;case 18:this.form.markAllAsTouched();case 19:case"end":return t.stop()}},t,this,[[2,13]])}))}},{key:"getErrorMessage",value:function(e){var t=this.form.controls[e];return this.errors[e]?this.errors[e]:t.hasError("required")?this.localizationService.translate("global_validation.required"):t.hasError("minlength")?"".concat(this.localizationService.translate("global_validation.minlength")," ").concat(t.errors.minlength.requiredLength," (").concat(t.errors.minlength.actualLength,")"):t.hasError("maxlength")?"".concat(this.localizationService.translate("global_validation.maxlength")," ").concat(t.errors.maxlength.requiredLength," (").concat(t.errors.maxlength.actualLength,"). "):t.hasError("email")?"Not a valid email":""}}]),t}()).\u0275fac=function(e){return new(e||x)(l.Pb(c.e),l.Pb(a.c),l.Pb(u.a),l.Pb(m.a),l.Pb(h.a),l.Pb(b.a),l.Pb(d.a))},x.\u0275cmp=l.Jb({type:x,selectors:[["app-login"]],decls:28,vars:5,consts:[[1,"title"],[1,"example-container"],[1,"form-container"],[3,"formGroup"],["cols","12","rowHeight","100px"],["colspan","12"],["appearance","outline",1,"full-width","mx-5"],["translate","roles.fields.email"],["matInput","","placeholder","Placeholder",3,"formControl","keyup.enter"],[4,"ngIf"],["translate","roles.fields.password"],["type","password","matInput","","placeholder","Placeholder",3,"formControl","keyup.enter"],[1,"text-right","full-width","pb-5"],["routerLink","/auth/forgot-password"],["mat-raised-button","","light","","type","submit","color","primary",1,"full-width",3,"click"],[1,"mt-10"],["routerLink","/auth/register",2,"margin-left","10px"]],template:function(e,t){1&e&&(l.Vb(0,"div",0),l.Ac(1,"Login"),l.Ub(),l.Vb(2,"div",1),l.Vb(3,"div",2),l.Vb(4,"form",3),l.Vb(5,"mat-grid-list",4),l.Vb(6,"mat-grid-tile",5),l.Vb(7,"mat-form-field",6),l.Vb(8,"mat-label",7),l.Ac(9," email"),l.Ub(),l.Vb(10,"input",8),l.dc("keyup.enter",function(e){return t.submit(e)}),l.Ub(),l.zc(11,w,2,1,"mat-error",9),l.Ub(),l.Ub(),l.Vb(12,"mat-grid-tile",5),l.Vb(13,"mat-form-field",6),l.Vb(14,"mat-label",10),l.Ac(15," password"),l.Ub(),l.Vb(16,"input",11),l.dc("keyup.enter",function(e){return t.submit(e)}),l.Ub(),l.zc(17,k,2,1,"mat-error",9),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Vb(18,"div",12),l.Vb(19,"a",13),l.Ac(20,"Forgot password?"),l.Ub(),l.Ub(),l.Vb(21,"div"),l.Vb(22,"button",14),l.dc("click",function(e){return t.submit(e)}),l.Ac(23," Log In "),l.Ub(),l.Ub(),l.Vb(24,"div",15),l.Ac(25," New user? "),l.Vb(26,"a",16),l.Ac(27," create account now. "),l.Ub(),l.Ub(),l.Ub(),l.Ub()),2&e&&(l.Db(4),l.mc("formGroup",t.form),l.Db(6),l.mc("formControl",t.form.controls.email),l.Db(1),l.mc("ngIf",t.getErrorMessage("email")),l.Db(5),l.mc("formControl",t.form.controls.password),l.Db(1),l.mc("ngIf",t.getErrorMessage("password")))},directives:[c.s,c.m,c.g,f.a,f.c,p.c,p.f,g.b,c.d,c.l,c.f,i.l,a.f,v.a,p.b],styles:[".example-container[_ngcontent-%COMP%]{text-align:center;background-color:var(--body)}.form-container[_ngcontent-%COMP%]{width:100%}@media (min-width:500px){.form-container[_ngcontent-%COMP%]{min-width:400px}}.form-field[_ngcontent-%COMP%]{display:block}"]}),x);function V(e,t){return function(r){var n=r.controls[t];n.errors&&!n.errors.mustMatch||n.setErrors(r.controls[e].value!==n.value?{mustMatch:!0}:null)}}var P,U,S=o("Jo2N"),L=o("yZrb"),O=o("LRb0"),A=o("uVll"),M=o("vPOg"),_=((U=function(){function t(r,n,o,i,a){e(this,t),this.formBuilder=r,this.router=n,this.loader=o,this.helpers=i,this.api=a,this.emailRegx=/^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/,this.roles=[]}return r(t,[{key:"ngOnInit",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.createForm(),e.next=3,this.getRoles();case 3:case"end":return e.stop()}},e,this)}))}},{key:"createForm",value:function(){this.form=this.formBuilder.group({email:[null,[c.r.required,c.r.pattern(this.emailRegx)]],password:[null,c.r.required],confirmPassword:[null,c.r.required],name:[null,c.r.required],role:[null,c.r.required]},{validator:V("password","confirmPassword")})}},{key:"submit",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.form.valid){e.next=15;break}return this.loader.showLocalLoader(),e.prev=2,e.next=5,this.api.auth().register(this.form.value);case 5:return e.next=7,this.router.navigate(["auth/login"]);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),this.helpers.alert().showError(e.t0.error.message);case 12:this.loader.hideLocalLoader(),e.next=16;break;case 15:this.form.markAllAsTouched();case 16:case"end":return e.stop()}},e,this,[[2,9]])}))}},{key:"getRoles",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.api.roles().getList();case 3:this.roles=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),this.helpers.alert().showError(e.t0.message);case 9:case"end":return e.stop()}},e,this,[[0,6]])}))}}]),t}()).\u0275fac=function(e){return new(e||U)(l.Pb(c.e),l.Pb(a.c),l.Pb(m.a),l.Pb(S.a),l.Pb(L.a))},U.\u0275cmp=l.Jb({type:U,selectors:[["app-register"]],decls:16,vars:14,consts:[[1,"title"],[1,"example-container"],[1,"form-container"],[3,"formGroup","keydown.enter"],[3,"control","label","keyup.enter"],[3,"type","control","label","keyup.enter"],["cols","12",3,"label","items","control"],[1,"text-right","pa-8"],["routerLink","/auth/login"],["type","submit","theme","primary","light","","type","submit",1,"btn","btn__submit","full-width",3,"click"]],template:function(e,t){1&e&&(l.Vb(0,"div",0),l.Ac(1,"Register"),l.Ub(),l.Vb(2,"div",1),l.Vb(3,"div",2),l.Vb(4,"form",3),l.dc("keydown.enter",function(e){return e.preventDefault()}),l.Vb(5,"form-input",4),l.dc("keyup.enter",function(){return t.submit()}),l.Ub(),l.Vb(6,"form-input",4),l.dc("keyup.enter",function(){return t.submit()}),l.Ub(),l.Vb(7,"form-input",5),l.dc("keyup.enter",function(){return t.submit()}),l.Ub(),l.Vb(8,"form-input",5),l.dc("keyup.enter",function(){return t.submit()}),l.Ub(),l.Qb(9,"form-select",6),l.Vb(10,"div",7),l.Vb(11,"a",8),l.Ac(12," Go to login "),l.Ub(),l.Ub(),l.Vb(13,"button",9),l.dc("click",function(){return t.submit()}),l.Ac(14," Register "),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Qb(15,"app-loader")),2&e&&(l.Db(4),l.mc("formGroup",t.form),l.Db(1),l.mc("control",t.form.controls.name)("label","Name"),l.Db(1),l.mc("control",t.form.controls.email)("label","Email"),l.Db(1),l.mc("type","password")("control",t.form.controls.password)("label","password"),l.Db(1),l.mc("type","password")("control",t.form.controls.confirmPassword)("label","Confirm Password"),l.Db(1),l.mc("label","Role")("items",t.roles)("control",t.form.controls.role))},directives:[c.s,c.m,c.g,O.a,A.a,a.f,M.a],styles:[".example-container[_ngcontent-%COMP%]{text-align:center}.form-container[_ngcontent-%COMP%]{width:100%}@media (min-width:500px){.form-container[_ngcontent-%COMP%]{min-width:400px}}.form-field[_ngcontent-%COMP%]{display:block}.btn__submit[_ngcontent-%COMP%]{min-width:200px}"]}),U),C=((P=function(){function t(r,n,o,i,a,s){var c=this;e(this,t),this.formBuilder=r,this.router=n,this.route=o,this.authService=i,this.loaderService=a,this.alertService=s,this.token="",this.route.queryParams.subscribe(function(e){c.checkResetToken(e.token)})}return r(t,[{key:"ngOnInit",value:function(){this.createForm()}},{key:"createForm",value:function(){this.form=this.formBuilder.group({repeat_password:[null,[c.r.required]],password:[null,[c.r.required,c.r.minLength(8),c.r.maxLength(100)]]},V("password","repeat_password"))}},{key:"submit",value:function(e){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),this.form.valid){t.next=2;break}return t.abrupt("return",void this.form.markAllAsTouched());case 2:return this.loaderService.showLocalLoader(),r={password:this.form.value.password,repeat_password:this.form.value.repeat_password,token:this.token},t.prev=4,t.next=7,this.authService.resetPassword(r);case 7:return t.next=9,this.router.navigate(["/"]);case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(4),this.alertService.showError(t.t0.error.message);case 14:this.loaderService.hideLocalLoader();case 15:case"end":return t.stop()}},t,this,[[4,11]])}))}},{key:"checkResetToken",value:function(e){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loaderService.show(),t.prev=1,t.next=4,this.authService.checkResetToken({token:e});case 4:this.token=t.sent,t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(1),t.next=11,this.router.navigate(["/"]);case 11:case"end":return t.stop()}},t,this,[[1,7]])}))}}]),t}()).\u0275fac=function(e){return new(e||P)(l.Pb(c.e),l.Pb(a.c),l.Pb(a.a),l.Pb(u.a),l.Pb(m.a),l.Pb(h.a))},P.\u0275cmp=l.Jb({type:P,selectors:[["app-reset"]],decls:11,vars:7,consts:[[1,"title"],[1,"example-container"],[1,"form-container"],[1,"mt-10",3,"formGroup"],[3,"type","control","label","keyup.enter"],["routerLink","/auth",1,"btn",2,"margin-left","10px"],["light","","type","submit","theme","primary",1,"btn",3,"click"]],template:function(e,t){1&e&&(l.Vb(0,"div",0),l.Ac(1,"Reset password"),l.Ub(),l.Vb(2,"div",1),l.Vb(3,"div",2),l.Vb(4,"form",3),l.Vb(5,"form-input",4),l.dc("keyup.enter",function(e){return t.submit(e)}),l.Ub(),l.Vb(6,"form-input",4),l.dc("keyup.enter",function(e){return t.submit(e)}),l.Ub(),l.Ub(),l.Vb(7,"button",5),l.Ac(8," Go to login "),l.Ub(),l.Vb(9,"button",6),l.dc("click",function(e){return t.submit(e)}),l.Ac(10," Reset "),l.Ub(),l.Ub(),l.Ub()),2&e&&(l.Db(4),l.mc("formGroup",t.form),l.Db(1),l.mc("type","password")("control",t.form.controls.password)("label","New password"),l.Db(1),l.mc("type","password")("control",t.form.controls.repeat_password)("label","Reepat new password"))},directives:[c.s,c.m,c.g,O.a,a.d],styles:[".example-container[_ngcontent-%COMP%]{text-align:center}.form-container[_ngcontent-%COMP%]{width:100%}@media (min-width:500px){.form-container[_ngcontent-%COMP%]{min-width:400px}}.form-field[_ngcontent-%COMP%]{display:block}"]}),P);function R(e,t){if(1&e&&(l.Vb(0,"mat-error"),l.Ac(1),l.Ub()),2&e){var r=l.hc();l.Db(1),l.Cc(" ",r.getErrorMessage("email")," ")}}var D,E,q,z,G=((D=function(){function t(r,n,o,i,a,s){e(this,t),this.formBuilder=r,this.router=n,this.authService=o,this.loaderService=i,this.alertService=a,this.localizationService=s,this.errors={}}return r(t,[{key:"ngOnInit",value:function(){this.createForm()}},{key:"createForm",value:function(){this.form=this.formBuilder.group({email:[null,[c.r.required,c.r.email]]})}},{key:"submit",value:function(e){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),!this.form.valid){t.next=17;break}return this.loaderService.showLocalLoader(),t.prev=2,t.next=5,this.authService.forgotPassword(this.form.value.email);case 5:return r=t.sent,t.next=8,this.router.navigate(["/auth/login"]);case 8:this.alertService.showSuccess(r.message),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),this.alertService.showError(t.t0.error.message);case 14:this.loaderService.hideLocalLoader(),t.next=18;break;case 17:this.form.markAllAsTouched();case 18:case"end":return t.stop()}},t,this,[[2,11]])}))}},{key:"getErrorMessage",value:function(e){var t=this.form.controls[e];return this.errors[e]?this.errors[e]:t.hasError("required")?this.localizationService.translate("global_validation.required"):t.hasError("minlength")?"".concat(this.localizationService.translate("global_validation.minlength")," ").concat(t.errors.minlength.requiredLength," (").concat(t.errors.minlength.actualLength,")"):t.hasError("maxlength")?"".concat(this.localizationService.translate("global_validation.maxlength")," ").concat(t.errors.maxlength.requiredLength," (").concat(t.errors.maxlength.actualLength,"). "):t.hasError("email")?"Not a valid email":""}}]),t}()).\u0275fac=function(e){return new(e||D)(l.Pb(c.e),l.Pb(a.c),l.Pb(u.a),l.Pb(m.a),l.Pb(h.a),l.Pb(d.a))},D.\u0275cmp=l.Jb({type:D,selectors:[["app-forgot-password"]],decls:15,vars:3,consts:[[1,"title"],[1,"example-container"],[1,"form-container",2,"min-width","300px"],[1,"mt-10",3,"formGroup"],["appearance","outline",1,"full-width","mx-5"],["translate","roles.fields.email"],["matInput","","placeholder","Placeholder",3,"formControl","keyup.enter"],[4,"ngIf"],[1,"ml-10","mb-10","text-right"],["routerLink","/auth"],["mat-raised-button","","light","","type","submit","color","primary",1,"full-width",3,"click"]],template:function(e,t){1&e&&(l.Vb(0,"div",0),l.Ac(1,"Forgot password"),l.Ub(),l.Vb(2,"div",1),l.Vb(3,"div",2),l.Vb(4,"form",3),l.Vb(5,"mat-form-field",4),l.Vb(6,"mat-label",5),l.Ac(7," email"),l.Ub(),l.Vb(8,"input",6),l.dc("keyup.enter",function(e){return t.submit(e)}),l.Ub(),l.zc(9,R,2,1,"mat-error",7),l.Ub(),l.Ub(),l.Vb(10,"div",8),l.Vb(11,"a",9),l.Ac(12," Go to login "),l.Ub(),l.Ub(),l.Vb(13,"button",10),l.dc("click",function(e){return t.submit(e)}),l.Ac(14," Reset password "),l.Ub(),l.Ub(),l.Ub()),2&e&&(l.Db(4),l.mc("formGroup",t.form),l.Db(4),l.mc("formControl",t.form.controls.email),l.Db(1),l.mc("ngIf",t.getErrorMessage("email")))},directives:[c.s,c.m,c.g,p.c,p.f,g.b,c.d,c.l,c.f,i.l,a.f,v.a,p.b],styles:[".example-container[_ngcontent-%COMP%]{text-align:center}.form-container[_ngcontent-%COMP%]{width:100%}@media (min-width:500px){.form-container[_ngcontent-%COMP%]{min-width:400px}}.form-field[_ngcontent-%COMP%]{display:block}"]}),D),I=o("Wp6s"),j=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"",component:(E=function(){function t(){e(this,t)}return r(t,[{key:"ngOnInit",value:function(){}}]),t}(),E.\u0275fac=function(e){return new(e||E)},E.\u0275cmp=l.Jb({type:E,selectors:[["app-auth"]],decls:3,vars:0,consts:[[1,"login"],[1,"mat-elevation-z6"]],template:function(e,t){1&e&&(l.Vb(0,"div",0),l.Vb(1,"mat-card",1),l.Qb(2,"router-outlet"),l.Ub(),l.Ub())},directives:[I.a,a.h],styles:[".login[_ngcontent-%COMP%]{width:100%;height:100vh;display:flex;align-items:center;justify-content:center;background-color:var(--light)}"]}),E),children:[{path:"login",component:y},{path:"register",component:_},{path:"forgot-password",component:G},{path:"reset",component:C}]},{path:"*",redirectTo:"login",pathMatch:"full"}],J=((q=function t(){e(this,t)}).\u0275fac=function(e){return new(e||q)},q.\u0275mod=l.Nb({type:q}),q.\u0275inj=l.Mb({imports:[[a.g.forChild(j)],a.g]}),q),N=o("j1ZV"),T=o("NGJ7"),F=((z=function t(){e(this,t)}).\u0275fac=function(e){return new(e||z)},z.\u0275mod=l.Nb({type:z}),z.\u0275inj=l.Mb({imports:[[i.c,J,N.a,c.h,c.q,a.g,T.a]]}),z)}}])}();