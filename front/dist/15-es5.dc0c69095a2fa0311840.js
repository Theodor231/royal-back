!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=a(e);if(t){var o=a(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return i(this,r)}}function i(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{BJHQ:function(t,i,a){"use strict";a.r(i),a.d(i,"UsersModule",function(){return F});var s,c,l,u,f=a("ofXK"),d=a("mrSG"),m=a("OEvp"),b=a("fXoL"),p=a("Jo2N"),h=a("yZrb"),g=a("3Pt+"),v=a("tyNb"),_=a("Ly1/"),x=a("zkoq"),y=a("kmnG"),w=a("m1+a"),k=a("qFsG"),O=((s=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}(a,t);var i=o(a);function a(t,r,n,o,s){var c;return e(this,a),(c=i.call(this,t,r,n,o)).helpers=t,c.api=r,c.formBuilder=n,c.route=o,c.router=s,c.pageSizeOptions=[5,10,25,100],c.module="users",c}return r(a,[{key:"ngOnInit",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.createForm(),e.next=3,this.loadData();case 3:case"end":return e.stop()}},e,this)}))}},{key:"createForm",value:function(){this.filter=this.formBuilder.group({name:[null],email:[null]})}}]),a}(m.a)).\u0275fac=function(e){return new(e||s)(b.Pb(p.a),b.Pb(h.a),b.Pb(g.e),b.Pb(v.a),b.Pb(v.c))},s.\u0275cmp=b.Jb({type:s,selectors:[["app-index"]],features:[b.Ab],decls:13,vars:10,consts:[[3,"module","items","headers","columnsToDisplay","loading","showFilters","params","confirm","page","sort","update","filter","resetParams"],[3,"formGroup"],["cols","12","rowHeight","100px"],["colspan","4"],["appearance","outline",1,"full-width","mx-5"],["translate","users.fields.name"],["matInput","","placeholder","Placeholder",3,"formControl"],["translate","users.fields.email"]],template:function(e,t){1&e&&(b.Vb(0,"app-data-table",0),b.dc("confirm",function(e){return t.openConfirm(e)})("page",function(e){return t.changePage(e)})("sort",function(e){return t.sortData(e)})("update",function(){return t.loadData()})("filter",function(){return t.toggleFilters()})("resetParams",function(){return t.resetFilter()}),b.Vb(1,"form",1),b.Vb(2,"mat-grid-list",2),b.Vb(3,"mat-grid-tile",3),b.Vb(4,"mat-form-field",4),b.Vb(5,"mat-label",5),b.Ac(6," name"),b.Ub(),b.Qb(7,"input",6),b.Ub(),b.Ub(),b.Vb(8,"mat-grid-tile",3),b.Vb(9,"mat-form-field",4),b.Vb(10,"mat-label",7),b.Ac(11," email"),b.Ub(),b.Qb(12,"input",6),b.Ub(),b.Ub(),b.Ub(),b.Ub(),b.Ub()),2&e&&(b.mc("module",t.module)("items",t.items)("headers",t.headers)("columnsToDisplay",t.columnsToDisplay)("loading",t.loading)("showFilters",t.showFilters)("params",t.params),b.Db(1),b.mc("formGroup",t.filter),b.Db(6),b.mc("formControl",t.filter.controls.name),b.Db(5),b.mc("formControl",t.filter.controls.email))},directives:[_.a,g.s,g.m,g.g,x.a,x.c,y.c,y.f,w.a,k.b,g.d,g.l,g.f],styles:["table[_ngcontent-%COMP%]{width:100%}.content[_ngcontent-%COMP%]{color:var(--text);display:flex;align-items:center;justify-content:center;box-sizing:border-box;max-width:100%;padding:20px}icon[_ngcontent-%COMP%]{font-weight:700}.actions[_ngcontent-%COMP%]{margin:15px 0;align-items:center;justify-content:space-between;font-size:20px}.actions[_ngcontent-%COMP%], .filter[_ngcontent-%COMP%]{display:flex;width:100%}.filter[_ngcontent-%COMP%]{flex-direction:column;padding:10px 0}.filter__content[_ngcontent-%COMP%]{width:100%}.filter__footer[_ngcontent-%COMP%]{margin-left:auto}.filter__footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border-radius:3px!important}.filter__footer--buttons[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;margin:15px}.card[_ngcontent-%COMP%]{position:relative}@-webkit-keyframes show{0%{max-height:0;overflow:hidden}to{overflow:visible;max-height:600px}}@keyframes show{0%{max-height:0;overflow:hidden}to{overflow:visible;max-height:600px}}"]}),s),P=a("j1ZV"),V=a("6sSh"),U=a("FUS3"),C=a("LRb0"),M=a("uVll"),R=a("Hxv+"),D=((l=function(){function t(r,n,o,i,a){e(this,t),this.formBuilder=r,this.api=n,this.helpers=o,this.router=i,this.el=a,this.emailRegx=/^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/,this.loading=!1,this.errors={},this.roles=[],this.services=[]}return r(t,[{key:"ngOnInit",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.form=this.formBuilder.group({name:[null,g.r.required],roleId:[null,g.r.required],avatar:[null],email:[null,this.emailRegx],password:[null,[g.r.minLength(8),g.r.maxLength(128)]]}),e.next=3,this.getRoles();case 3:case"end":return e.stop()}},e,this)}))}},{key:"getRoles",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.api.roles().getList();case 3:this.roles=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),this.helpers.alert().showError(e.t0.error.message);case 9:case"end":return e.stop()}},e,this,[[0,6]])}))}},{key:"submit",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.form.valid){e.next=16;break}return this.loading=!0,e.prev=2,e.next=5,this.api.users().create(this.helpers.toFormData(this.form.value));case 5:return this.helpers.alert().showSuccess("Successful created"),e.next=8,this.router.navigateByUrl("/ro/users");case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),e.t0.error.hasOwnProperty("errors")&&(this.errors=e.t0.error.errors,setTimeout(function(){t.errors={}},5e3)),this.helpers.alert().showError(e.t0.error.message);case 13:this.loading=!1,e.next=17;break;case 16:this.form.markAllAsTouched();case 17:case"end":return e.stop()}},e,this,[[2,10]])}))}},{key:"changeStatus",value:function(){var e=this;this.form.markAllAsTouched(),document.getElementById("2").scrollIntoView(),setTimeout(function(){e.scrollToFirstInvalidControl()},2e3)}},{key:"scrollToFirstInvalidControl",value:function(){this.el.nativeElement.querySelector("form .ng-invalid").focus()}},{key:"t",value:function(e){return this.helpers.localization().translate(e)}}]),t}()).\u0275fac=function(e){return new(e||l)(b.Pb(g.e),b.Pb(h.a),b.Pb(p.a),b.Pb(v.c),b.Pb(b.l))},l.\u0275cmp=b.Jb({type:l,selectors:[["app-create"]],decls:18,vars:20,consts:[[1,"container"],[1,"card"],[1,"card__header"],["text","text","translate","users.headers.create",1,"card__header--title"],[1,"card__content"],[1,"form",3,"formGroup"],["cols","12",1,"form__item",3,"label","control","error","keyup.enter"],["cols","12",3,"label","items","control","error"],["cols","12",1,"form__item",3,"control","label","error","keyup.enter"],["cols","12",1,"form__item",3,"icon","type","label","control","error","keyup.enter"],[1,"card__footer"],["routerLink","../","translate","global_buttons.cancel","text","text",1,"card__footer--btn","card__footer--cancel"],["theme","primary","translate","global_buttons.save",1,"card__footer--btn",3,"disabled","click"]],template:function(e,t){1&e&&(b.Vb(0,"div",0),b.Vb(1,"div",1),b.Vb(2,"div",2),b.Vb(3,"div",3),b.Ac(4,"Create"),b.Ub(),b.Ub(),b.Vb(5,"div",4),b.Vb(6,"form",5),b.Vb(7,"form-input",6),b.dc("keyup.enter",function(){return t.submit()}),b.Ub(),b.Qb(8,"form-select",7),b.Vb(9,"form-input",8),b.dc("keyup.enter",function(){return t.submit()}),b.Ub(),b.Vb(10,"app-file-uploader",6),b.dc("keyup.enter",function(){return t.submit()}),b.Ub(),b.Vb(11,"form-input",9),b.dc("keyup.enter",function(){return t.submit()}),b.Ub(),b.Ub(),b.Ub(),b.Vb(12,"div",10),b.Vb(13,"div"),b.Vb(14,"button",11),b.Ac(15," cancel "),b.Ub(),b.Vb(16,"button",12),b.dc("click",function(){return t.submit()}),b.Ac(17," submit "),b.Ub(),b.Ub(),b.Ub(),b.Ub(),b.Ub()),2&e&&(b.Db(6),b.mc("formGroup",t.form),b.Db(1),b.mc("label",t.t("users.fields.name"))("control",t.form.controls.name)("error",t.errors.name),b.Db(1),b.mc("label",t.t("users.fields.role"))("items",t.roles)("control",t.form.controls.roleId)("error",t.errors.roleId),b.Db(1),b.mc("control",t.form.controls.email)("label",t.t("users.fields.email"))("error",t.errors.email),b.Db(1),b.mc("label",t.t("users.fields.avatar"))("control",t.form.controls.avatar)("error",t.errors.avatar),b.Db(1),b.mc("icon","flaticon-locked-padlock-outline")("type","password")("label",t.t("users.fields.password"))("control",t.form.controls.password)("error",t.errors.password),b.Db(5),b.mc("disabled",t.loading))},directives:[w.a,g.s,g.m,g.g,C.a,M.a,R.a,v.d],styles:["*[_ngcontent-%COMP%]{transition:all .5s ease-in-out}"]}),l),j=((c=function(){function t(r,n,o,i,a){e(this,t),this.formBuilder=r,this.api=n,this.helpers=o,this.route=i,this.router=a,this.loading=!1,this.errors={},this.roles=[],this.credentials=JSON.parse(localStorage.getItem("credentials"))||null}return r(t,[{key:"getItem",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.loading=!0,e.prev=1,e.next=4,this.api.users().getForEdit(this.id);case 4:t=e.sent,r=this.helpers.setForm(t,this.form),console.log(),this.form.setValue(Object.assign({},r)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),e.t0.error.hasOwnProperty("errors")&&(this.errors=e.t0.errors),this.helpers.alert().showError(e.t0.error.message);case 12:this.loading=!1;case 13:case"end":return e.stop()}},e,this,[[1,9]])}))}},{key:"ngOnInit",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.form=this.formBuilder.group({email:[null,[g.r.required]],avatar:[null],name:[null,g.r.required],roleId:[null,g.r.required]}),e.next=3,this.api.roles().getList();case 3:this.roles=e.sent,this.route.params.subscribe(function(e){(null==e?void 0:e.id)&&(t.id=e.id,t.getItem())});case 5:case"end":return e.stop()}},e,this)}))}},{key:"submit",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t,r=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.form.valid){e.next=16;break}return this.loading=!0,e.prev=2,e.next=5,this.api.users().edit(this.id,this.helpers.toFormData(this.form.value));case 5:return t=e.sent,this.credentials&&this.credentials.user&&this.credentials.user.id&&t.avatar&&this.credentials.user.id===t.id&&(this.credentials.user.avatar=t.avatar,localStorage.setItem("credentials",JSON.stringify(this.credentials)),this.helpers.g().userEvent.next(t)),this.helpers.alert().showSuccess("Successful edited."),e.next=10,this.router.navigate(["ro/users"]);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),e.t0.hasOwnProperty("error")&&(this.errors=e.t0.error,setTimeout(function(){r.errors={}},5e3)),this.helpers.alert().showError(e.t0.error.message);case 15:this.loading=!0;case 16:case"end":return e.stop()}},e,this,[[2,12]])}))}},{key:"t",value:function(e){return this.helpers.localization().translate(e)}}]),t}()).\u0275fac=function(e){return new(e||c)(b.Pb(g.e),b.Pb(h.a),b.Pb(p.a),b.Pb(v.a),b.Pb(v.c))},c.\u0275cmp=b.Jb({type:c,selectors:[["app-edit"]],decls:17,vars:14,consts:[[1,"container"],[1,"card"],[1,"card__header"],["text","text","translate","roles.headers.edit",1,"card__header--title","ml-10"],[1,"card__content","mt-10"],[1,"form",3,"formGroup"],["cols","6",1,"form__item",3,"label","control","error","keyup.enter"],["cols","6",3,"label","items","control","error"],[1,"card__footer"],["routerLink","../../","translate","global_buttons.cancel","text","text",1,"card__footer--btn","card__footer--cancel"],["translate","global_buttons.save",1,"card__footer--btn","card__footer--submit",3,"click"]],template:function(e,t){1&e&&(b.Vb(0,"div",0),b.Vb(1,"div",1),b.Vb(2,"div",2),b.Vb(3,"div",3),b.Ac(4," Edit "),b.Ub(),b.Ub(),b.Vb(5,"div",4),b.Vb(6,"form",5),b.Vb(7,"form-input",6),b.dc("keyup.enter",function(){return t.submit()}),b.Ub(),b.Vb(8,"app-file-uploader",6),b.dc("keyup.enter",function(){return t.submit()}),b.Ub(),b.Qb(9,"form-select",7),b.Vb(10,"form-input",6),b.dc("keyup.enter",function(){return t.submit()}),b.Ub(),b.Ub(),b.Ub(),b.Vb(11,"div",8),b.Vb(12,"div"),b.Vb(13,"button",9),b.Ac(14," cancel "),b.Ub(),b.Vb(15,"button",10),b.dc("click",function(){return t.submit()}),b.Ac(16," submit "),b.Ub(),b.Ub(),b.Ub(),b.Ub(),b.Ub()),2&e&&(b.Db(6),b.mc("formGroup",t.form),b.Db(1),b.mc("label",t.t("users.fields.name"))("control",t.form.controls.name)("error",t.errors.name),b.Db(1),b.mc("label",t.t("users.fields.avatar"))("control",t.form.controls.avatar)("error",t.errors.avatar),b.Db(1),b.mc("label",t.t("users.fields.role"))("items",t.roles)("control",t.form.controls.roleId)("error",t.errors.roleId),b.Db(1),b.mc("label",t.t("users.fields.email"))("control",t.form.controls.email)("error",t.errors.email))},directives:[w.a,g.s,g.m,g.g,C.a,R.a,M.a,v.d],styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:50px;align-items:center}.card[_ngcontent-%COMP%]{width:1024px;box-shadow:2px 2px 10px rgba(0,0,0,.5)!important;padding:20px;border-radius:5px}.card__header[_ngcontent-%COMP%]{margin-bottom:10px}.card__header--title[_ngcontent-%COMP%]{font-weight:700;font-size:20px}.card__content[_ngcontent-%COMP%], .card__content--item[_ngcontent-%COMP%]{box-sizing:border-box}.card__content--item[_ngcontent-%COMP%]{width:50%}.card__footer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;width:100%;margin-top:20px;padding-top:10px}.card__footer--btn[_ngcontent-%COMP%]{background:transparent;outline:none;cursor:pointer;border:none;padding:8px;border-radius:3px;min-width:100px}.card__footer--submit[_ngcontent-%COMP%]{background:var(--primary);margin-left:5px;color:var(--light)}.card__footer--submit[_ngcontent-%COMP%]:hover{background:rgba(var(--primary-hover),.8)}.card__footer--cancel[_ngcontent-%COMP%]:hover{background:rgba(0,0,0,.1)}.form[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;width:100%;box-sizing:border-box}"]}),c),I=a("NGJ7"),A=[{path:"create",component:D},{path:"edit/:id",component:j},{path:"page/:page",component:O},{path:"",redirectTo:"page/1",pathMatch:"full"},{path:":page",redirectTo:"page/1",pathMatch:"full"}],F=((u=function t(){e(this,t)}).\u0275fac=function(e){return new(e||u)},u.\u0275mod=b.Nb({type:u}),u.\u0275inj=b.Mb({imports:[[f.c,g.h,g.q,P.a,V.a,v.g.forChild(A),U.a,I.a]]}),u)}}])}();