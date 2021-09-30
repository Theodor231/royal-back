(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{BJHQ:function(e,t,r){"use strict";r.r(t),r.d(t,"UsersModule",function(){return C});var o=r("ofXK"),n=r("mrSG"),i=r("OEvp"),s=r("fXoL"),a=r("Jo2N"),l=r("yZrb"),c=r("3Pt+"),d=r("tyNb"),u=r("Ly1/"),m=r("zkoq"),b=r("kmnG"),h=r("m1+a"),f=r("qFsG");let p=(()=>{class e extends i.a{constructor(e,t,r,o,n){super(e,t,r,o),this.helpers=e,this.api=t,this.formBuilder=r,this.route=o,this.router=n,this.pageSizeOptions=[5,10,25,100],this.module="users"}ngOnInit(){return Object(n.a)(this,void 0,void 0,function*(){this.createForm(),yield this.loadData()})}createForm(){this.filter=this.formBuilder.group({name:[null],email:[null]})}}return e.\u0275fac=function(t){return new(t||e)(s.Pb(a.a),s.Pb(l.a),s.Pb(c.e),s.Pb(d.a),s.Pb(d.c))},e.\u0275cmp=s.Jb({type:e,selectors:[["app-index"]],features:[s.Ab],decls:13,vars:10,consts:[[3,"module","items","headers","columnsToDisplay","loading","showFilters","params","confirm","page","sort","update","filter","resetParams"],[3,"formGroup"],["cols","12","rowHeight","100px"],["colspan","4"],["appearance","outline",1,"full-width","mx-5"],["translate","users.fields.name"],["matInput","","placeholder","Placeholder",3,"formControl"],["translate","users.fields.email"]],template:function(e,t){1&e&&(s.Vb(0,"app-data-table",0),s.dc("confirm",function(e){return t.openConfirm(e)})("page",function(e){return t.changePage(e)})("sort",function(e){return t.sortData(e)})("update",function(){return t.loadData()})("filter",function(){return t.toggleFilters()})("resetParams",function(){return t.resetFilter()}),s.Vb(1,"form",1),s.Vb(2,"mat-grid-list",2),s.Vb(3,"mat-grid-tile",3),s.Vb(4,"mat-form-field",4),s.Vb(5,"mat-label",5),s.Ac(6," name"),s.Ub(),s.Qb(7,"input",6),s.Ub(),s.Ub(),s.Vb(8,"mat-grid-tile",3),s.Vb(9,"mat-form-field",4),s.Vb(10,"mat-label",7),s.Ac(11," email"),s.Ub(),s.Qb(12,"input",6),s.Ub(),s.Ub(),s.Ub(),s.Ub(),s.Ub()),2&e&&(s.mc("module",t.module)("items",t.items)("headers",t.headers)("columnsToDisplay",t.columnsToDisplay)("loading",t.loading)("showFilters",t.showFilters)("params",t.params),s.Db(1),s.mc("formGroup",t.filter),s.Db(6),s.mc("formControl",t.filter.controls.name),s.Db(5),s.mc("formControl",t.filter.controls.email))},directives:[u.a,c.s,c.m,c.g,m.a,m.c,b.c,b.f,h.a,f.b,c.d,c.l,c.f],styles:["table[_ngcontent-%COMP%]{width:100%}.content[_ngcontent-%COMP%]{color:var(--text);display:flex;align-items:center;justify-content:center;box-sizing:border-box;max-width:100%;padding:20px}icon[_ngcontent-%COMP%]{font-weight:700}.actions[_ngcontent-%COMP%]{margin:15px 0;align-items:center;justify-content:space-between;font-size:20px}.actions[_ngcontent-%COMP%], .filter[_ngcontent-%COMP%]{display:flex;width:100%}.filter[_ngcontent-%COMP%]{flex-direction:column;padding:10px 0}.filter__content[_ngcontent-%COMP%]{width:100%}.filter__footer[_ngcontent-%COMP%]{margin-left:auto}.filter__footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border-radius:3px!important}.filter__footer--buttons[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;margin:15px}.card[_ngcontent-%COMP%]{position:relative}@-webkit-keyframes show{0%{max-height:0;overflow:hidden}to{overflow:visible;max-height:600px}}@keyframes show{0%{max-height:0;overflow:hidden}to{overflow:visible;max-height:600px}}"]}),e})();var g=r("j1ZV"),_=r("6sSh"),v=r("FUS3"),x=r("LRb0"),y=r("uVll"),w=r("Hxv+");let P=(()=>{class e{constructor(e,t,r,o,n){this.formBuilder=e,this.api=t,this.helpers=r,this.router=o,this.el=n,this.emailRegx=/^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/,this.loading=!1,this.errors={},this.roles=[],this.services=[]}ngOnInit(){return Object(n.a)(this,void 0,void 0,function*(){this.form=this.formBuilder.group({name:[null,c.r.required],roleId:[null,c.r.required],avatar:[null],email:[null,this.emailRegx],password:[null,[c.r.minLength(8),c.r.maxLength(128)]]}),yield this.getRoles()})}getRoles(){return Object(n.a)(this,void 0,void 0,function*(){try{this.roles=yield this.api.roles().getList()}catch(e){this.helpers.alert().showError(e.error.message)}})}submit(){return Object(n.a)(this,void 0,void 0,function*(){if(this.form.valid){this.loading=!0;try{yield this.api.users().create(this.helpers.toFormData(this.form.value)),this.helpers.alert().showSuccess("Successful created"),yield this.router.navigateByUrl("/ro/users")}catch(e){e.error.hasOwnProperty("errors")&&(this.errors=e.error.errors,setTimeout(()=>{this.errors={}},5e3)),this.helpers.alert().showError(e.error.message)}this.loading=!1}else this.form.markAllAsTouched()})}changeStatus(){this.form.markAllAsTouched(),document.getElementById("2").scrollIntoView(),setTimeout(()=>{this.scrollToFirstInvalidControl()},2e3)}scrollToFirstInvalidControl(){this.el.nativeElement.querySelector("form .ng-invalid").focus()}t(e){return this.helpers.localization().translate(e)}}return e.\u0275fac=function(t){return new(t||e)(s.Pb(c.e),s.Pb(l.a),s.Pb(a.a),s.Pb(d.c),s.Pb(s.l))},e.\u0275cmp=s.Jb({type:e,selectors:[["app-create"]],decls:18,vars:20,consts:[[1,"container"],[1,"card"],[1,"card__header"],["text","text","translate","users.headers.create",1,"card__header--title"],[1,"card__content"],[1,"form",3,"formGroup"],["cols","12",1,"form__item",3,"label","control","error","keyup.enter"],["cols","12",3,"label","items","control","error"],["cols","12",1,"form__item",3,"control","label","error","keyup.enter"],["cols","12",1,"form__item",3,"icon","type","label","control","error","keyup.enter"],[1,"card__footer"],["routerLink","../","translate","global_buttons.cancel","text","text",1,"card__footer--btn","card__footer--cancel"],["theme","primary","translate","global_buttons.save",1,"card__footer--btn",3,"disabled","click"]],template:function(e,t){1&e&&(s.Vb(0,"div",0),s.Vb(1,"div",1),s.Vb(2,"div",2),s.Vb(3,"div",3),s.Ac(4,"Create"),s.Ub(),s.Ub(),s.Vb(5,"div",4),s.Vb(6,"form",5),s.Vb(7,"form-input",6),s.dc("keyup.enter",function(){return t.submit()}),s.Ub(),s.Qb(8,"form-select",7),s.Vb(9,"form-input",8),s.dc("keyup.enter",function(){return t.submit()}),s.Ub(),s.Vb(10,"app-file-uploader",6),s.dc("keyup.enter",function(){return t.submit()}),s.Ub(),s.Vb(11,"form-input",9),s.dc("keyup.enter",function(){return t.submit()}),s.Ub(),s.Ub(),s.Ub(),s.Vb(12,"div",10),s.Vb(13,"div"),s.Vb(14,"button",11),s.Ac(15," cancel "),s.Ub(),s.Vb(16,"button",12),s.dc("click",function(){return t.submit()}),s.Ac(17," submit "),s.Ub(),s.Ub(),s.Ub(),s.Ub(),s.Ub()),2&e&&(s.Db(6),s.mc("formGroup",t.form),s.Db(1),s.mc("label",t.t("users.fields.name"))("control",t.form.controls.name)("error",t.errors.name),s.Db(1),s.mc("label",t.t("users.fields.role"))("items",t.roles)("control",t.form.controls.roleId)("error",t.errors.roleId),s.Db(1),s.mc("control",t.form.controls.email)("label",t.t("users.fields.email"))("error",t.errors.email),s.Db(1),s.mc("label",t.t("users.fields.avatar"))("control",t.form.controls.avatar)("error",t.errors.avatar),s.Db(1),s.mc("icon","flaticon-locked-padlock-outline")("type","password")("label",t.t("users.fields.password"))("control",t.form.controls.password)("error",t.errors.password),s.Db(5),s.mc("disabled",t.loading))},directives:[h.a,c.s,c.m,c.g,x.a,y.a,w.a,d.d],styles:["*[_ngcontent-%COMP%]{transition:all .5s ease-in-out}"]}),e})(),O=(()=>{class e{constructor(e,t,r,o,n){this.formBuilder=e,this.api=t,this.helpers=r,this.route=o,this.router=n,this.loading=!1,this.errors={},this.roles=[],this.credentials=JSON.parse(localStorage.getItem("credentials"))||null}getItem(){return Object(n.a)(this,void 0,void 0,function*(){this.loading=!0;try{const e=yield this.api.users().getForEdit(this.id),t=this.helpers.setForm(e,this.form);console.log(),this.form.setValue(Object.assign({},t))}catch(e){e.error.hasOwnProperty("errors")&&(this.errors=e.errors),this.helpers.alert().showError(e.error.message)}this.loading=!1})}ngOnInit(){return Object(n.a)(this,void 0,void 0,function*(){this.form=this.formBuilder.group({email:[null,[c.r.required]],avatar:[null],name:[null,c.r.required],roleId:[null,c.r.required]}),this.roles=yield this.api.roles().getList(),this.route.params.subscribe(e=>{(null==e?void 0:e.id)&&(this.id=e.id,this.getItem())})})}submit(){return Object(n.a)(this,void 0,void 0,function*(){if(this.form.valid){this.loading=!0;try{const e=yield this.api.users().edit(this.id,this.helpers.toFormData(this.form.value));this.credentials&&this.credentials.user&&this.credentials.user.id&&e.avatar&&this.credentials.user.id===e.id&&(this.credentials.user.avatar=e.avatar,localStorage.setItem("credentials",JSON.stringify(this.credentials)),this.helpers.g().userEvent.next(e)),this.helpers.alert().showSuccess("Successful edited."),yield this.router.navigate(["ro/users"])}catch(e){e.hasOwnProperty("error")&&(this.errors=e.error,setTimeout(()=>{this.errors={}},5e3)),this.helpers.alert().showError(e.error.message)}this.loading=!0}})}t(e){return this.helpers.localization().translate(e)}}return e.\u0275fac=function(t){return new(t||e)(s.Pb(c.e),s.Pb(l.a),s.Pb(a.a),s.Pb(d.a),s.Pb(d.c))},e.\u0275cmp=s.Jb({type:e,selectors:[["app-edit"]],decls:17,vars:14,consts:[[1,"container"],[1,"card"],[1,"card__header"],["text","text","translate","roles.headers.edit",1,"card__header--title","ml-10"],[1,"card__content","mt-10"],[1,"form",3,"formGroup"],["cols","6",1,"form__item",3,"label","control","error","keyup.enter"],["cols","6",3,"label","items","control","error"],[1,"card__footer"],["routerLink","../../","translate","global_buttons.cancel","text","text",1,"card__footer--btn","card__footer--cancel"],["translate","global_buttons.save",1,"card__footer--btn","card__footer--submit",3,"click"]],template:function(e,t){1&e&&(s.Vb(0,"div",0),s.Vb(1,"div",1),s.Vb(2,"div",2),s.Vb(3,"div",3),s.Ac(4," Edit "),s.Ub(),s.Ub(),s.Vb(5,"div",4),s.Vb(6,"form",5),s.Vb(7,"form-input",6),s.dc("keyup.enter",function(){return t.submit()}),s.Ub(),s.Vb(8,"app-file-uploader",6),s.dc("keyup.enter",function(){return t.submit()}),s.Ub(),s.Qb(9,"form-select",7),s.Vb(10,"form-input",6),s.dc("keyup.enter",function(){return t.submit()}),s.Ub(),s.Ub(),s.Ub(),s.Vb(11,"div",8),s.Vb(12,"div"),s.Vb(13,"button",9),s.Ac(14," cancel "),s.Ub(),s.Vb(15,"button",10),s.dc("click",function(){return t.submit()}),s.Ac(16," submit "),s.Ub(),s.Ub(),s.Ub(),s.Ub(),s.Ub()),2&e&&(s.Db(6),s.mc("formGroup",t.form),s.Db(1),s.mc("label",t.t("users.fields.name"))("control",t.form.controls.name)("error",t.errors.name),s.Db(1),s.mc("label",t.t("users.fields.avatar"))("control",t.form.controls.avatar)("error",t.errors.avatar),s.Db(1),s.mc("label",t.t("users.fields.role"))("items",t.roles)("control",t.form.controls.roleId)("error",t.errors.roleId),s.Db(1),s.mc("label",t.t("users.fields.email"))("control",t.form.controls.email)("error",t.errors.email))},directives:[h.a,c.s,c.m,c.g,x.a,w.a,y.a,d.d],styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:50px;align-items:center}.card[_ngcontent-%COMP%]{width:1024px;box-shadow:2px 2px 10px rgba(0,0,0,.5)!important;padding:20px;border-radius:5px}.card__header[_ngcontent-%COMP%]{margin-bottom:10px}.card__header--title[_ngcontent-%COMP%]{font-weight:700;font-size:20px}.card__content[_ngcontent-%COMP%], .card__content--item[_ngcontent-%COMP%]{box-sizing:border-box}.card__content--item[_ngcontent-%COMP%]{width:50%}.card__footer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;width:100%;margin-top:20px;padding-top:10px}.card__footer--btn[_ngcontent-%COMP%]{background:transparent;outline:none;cursor:pointer;border:none;padding:8px;border-radius:3px;min-width:100px}.card__footer--submit[_ngcontent-%COMP%]{background:var(--primary);margin-left:5px;color:var(--light)}.card__footer--submit[_ngcontent-%COMP%]:hover{background:rgba(var(--primary-hover),.8)}.card__footer--cancel[_ngcontent-%COMP%]:hover{background:rgba(0,0,0,.1)}.form[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;width:100%;box-sizing:border-box}"]}),e})();var V=r("NGJ7");const U=[{path:"create",component:P},{path:"edit/:id",component:O},{path:"page/:page",component:p},{path:"",redirectTo:"page/1",pathMatch:"full"},{path:":page",redirectTo:"page/1",pathMatch:"full"}];let C=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.Nb({type:e}),e.\u0275inj=s.Mb({imports:[[o.c,c.h,c.q,g.a,_.a,d.g.forChild(U),v.a,V.a]]}),e})()}}]);