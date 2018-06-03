/*
* name;
*/
class PetCreate extends Laya.Box {
    private tsp: Laya.Image;
    private asp: Laya.Image;
    private bsp: Laya.Image;
    private csp: Laya.Image;
    private dsp: Laya.Image;
    private esp: Laya.Image;
    private fsp: Laya.Image;
    private gsp: Laya.Image;
    private hsp: Laya.Image;
    private isp: Laya.Image;
    private jsp: Laya.Image;
    private ksp: Laya.Image;
    private lsp: Laya.Image;
    private yysp: Laya.Image;
    private zsp: Laya.Image;
    private x1sp: Laya.Image;
    private x2sp: Laya.Image;
    private x3sp: Laya.Image;
    private x4sp: Laya.Image;
    constructor() {
        super();
        this.asp = new Laya.Image();
        this.bsp = new Laya.Image();
        this.csp = new Laya.Image();
        this.dsp = new Laya.Image();
        this.esp = new Laya.Image();
        this.fsp = new Laya.Image();
        this.gsp = new Laya.Image();
        this.hsp = new Laya.Image();
        this.isp = new Laya.Image();
        this.jsp = new Laya.Image();
        this.ksp = new Laya.Image();
        this.lsp = new Laya.Image();
        this.yysp = new Laya.Image();
        this.zsp = new Laya.Image();
        this.x1sp = new Laya.Image();
        this.x2sp = new Laya.Image();
        this.x3sp = new Laya.Image();
        this.x4sp = new Laya.Image();
        this.tsp = new Laya.Image();

        this.size(600, 600);

        this.addChild(this.tsp);
        this.addChild(this.lsp);
        this.addChild(this.isp);
        this.addChild(this.jsp);
        this.addChild(this.ksp);
        this.addChild(this.hsp);
        this.addChild(this.gsp);
        this.addChild(this.fsp);
        this.addChild(this.esp);
        this.addChild(this.dsp);
        this.addChild(this.csp);
        this.addChild(this.bsp);
        this.addChild(this.asp);
        this.addChild(this.yysp);
        this.addChild(this.zsp);
        this.visible = true;
    }
    public init(path: any): void {

        if (path.t != 0) {
            this.tsp.skin = path.t;
            this.tsp.width = 600;
            this.tsp.height = 600;
        }
        this.lsp.skin = path.l;
        this.lsp.width = 600;
        this.lsp.height = 600;
        this.isp.skin = path.i;
        this.isp.width = 600;
        this.isp.height = 600;
        this.jsp.skin = path.j;
        this.jsp.width = 600;
        this.jsp.height = 600;
        this.ksp.skin = path.k;
        this.ksp.width = 600;
        this.ksp.height = 600;
        this.hsp.skin = path.h;
        this.hsp.width = 600;
        this.hsp.height = 600;
        this.gsp.skin = path.g;
        this.gsp.width = 600;
        this.gsp.height = 600;
        this.fsp.skin = path.f;
        this.fsp.width = 600;
        this.fsp.height = 600;
        this.esp.skin = path.e;
        this.esp.width = 600;
        this.esp.height = 600;
        this.dsp.skin = path.d;
        this.dsp.width = 600;
        this.dsp.height = 600;
        this.csp.skin = path.c;
        this.csp.width = 600;
        this.csp.height = 600;
        this.bsp.skin = path.b;
        this.bsp.width = 600;
        this.bsp.height = 600;
        this.asp.skin = path.a;
        this.asp.width = 600;
        this.asp.height = 600;
        this.yysp.skin = path.y;
        this.yysp.width = 600;
        this.yysp.height = 600;
        this.zsp.skin = path.z;
        this.zsp.width = 600;
        this.zsp.height = 600;
        this.size(600, 600);
    }
}
