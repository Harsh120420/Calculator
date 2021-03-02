(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"calculator_atlas_", frames: [[0,0,602,324],[0,326,778,141],[0,597,590,113],[0,712,590,113],[604,0,208,140],[604,248,214,62],[820,248,42,62],[0,469,558,126],[560,469,226,104],[814,0,178,104],[604,142,224,104],[780,312,112,104]]}
];


// symbols:



(lib.CachedBmp_63 = function() {
	this.initialize(ss["calculator_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_55 = function() {
	this.initialize(ss["calculator_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["calculator_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["calculator_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_64 = function() {
	this.initialize(ss["calculator_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_62 = function() {
	this.initialize(ss["calculator_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_61 = function() {
	this.initialize(ss["calculator_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_60 = function() {
	this.initialize(ss["calculator_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_59 = function() {
	this.initialize(ss["calculator_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_58 = function() {
	this.initialize(ss["calculator_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_57 = function() {
	this.initialize(ss["calculator_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_56 = function() {
	this.initialize(ss["calculator_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.an_TextInput = function(options) {
	this.initialize();
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.myButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_63();
	this.instance.setTransform(-155.5,-82.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155.5,-82.4,301,162);


// stage content:
(lib.calculator = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{choose:50,check:59});

	// timeline functions:
	this.frame_50 = function() {
		this.stop();
		this.operator;
		this.addition.addEventListener("click", addFunction.bind(this));
		this.subtract.addEventListener("click", subtractFunction.bind(this));
		this.multiply.addEventListener("click", multiplyFunction.bind(this));
		this.divide.addEventListener("click", divideFunction.bind(this));
		
		function addFunction()
		{
			operator = "+";
			this.gotoAndStop("check");
		}
		function subtractFunction()
		{
			operator = "-";
			this.gotoAndStop("check");
		}
		function multiplyFunction()
		{
			operator = "X";
			this.gotoAndStop("check");
		}
		function divideFunction()
		{
			operator = "/";
			this.gotoAndStop("check");
		}
		this.stop();
	}
	this.frame_59 = function() {
		var firstNumb;
		var secondNumb;
		firstNumb = Math.ceil(Math.random() * 20);
		secondNumb = Math.ceil(Math.random() * 10);
		this.firstNumbTxt.text = firstNumb;
		this.secondNumbTxt.text = secondNumb;
		this.operatorTxt.text = operator;
		var guess;
		var ans;
		this.check.addEventListener("click", checkFunction.bind(this));
		function checkFunction()
		{
			guess = document.getElementById("guessTxt").value;
			
			if(operator == "+")
			{
				ans = firstNumb + secondNumb;
			}
			if (operator == "-")
			{
				ans = firstNumb - secondNumb;
			}
			if (operator == "X")
			{
				ans = firstNumb * secondNumb;
			}
			if (operator == "/")
			{
				ans = firstNumb / secondNumb;
			}
			
			
			if(guess == ans)
			{
				firstNumb = Math.ceil(Math.random() * 20);
				secondNumb = Math.ceil(Math.random() * 10);
				this.firstNumbTxt.text = firstNumb;
				this.secondNumbTxt.text = secondNumb;
			}
		}
		this.again.addEventListener("click", againFunction.bind(this));
		function againFunction()
		{
			this.gotoAndStop("choose");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(50).call(this.frame_50).wait(9).call(this.frame_59).wait(1));

	// choices
	this.instance = new lib.CachedBmp_59();
	this.instance.setTransform(315.05,151.35,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_58();
	this.instance_1.setTransform(315.05,273.85,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_57();
	this.instance_2.setTransform(75.5,273.85,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_56();
	this.instance_3.setTransform(98.75,151.35,0.5,0.5);

	this.divide = new lib.myButton();
	this.divide.name = "divide";
	this.divide.setTransform(370.95,302.75,0.4906,0.5119);
	new cjs.ButtonHelper(this.divide, 0, 1, 1);

	this.multiply = new lib.myButton();
	this.multiply.name = "multiply";
	this.multiply.setTransform(134,302.75,0.4906,0.5119);
	new cjs.ButtonHelper(this.multiply, 0, 1, 1);

	this.subtract = new lib.myButton();
	this.subtract.name = "subtract";
	this.subtract.setTransform(370.95,179.5,0.4906,0.5119);
	new cjs.ButtonHelper(this.subtract, 0, 1, 1);

	this.addition = new lib.myButton();
	this.addition.name = "addition";
	this.addition.setTransform(134,179.5,0.4906,0.5119);
	new cjs.ButtonHelper(this.addition, 0, 1, 1);

	this.instance_4 = new lib.CachedBmp_64();
	this.instance_4.setTransform(50.05,251.1,0.5,0.5);

	this.again = new lib.myButton();
	this.again.name = "again";
	this.again.setTransform(111.05,287.5,0.4483,0.4265);
	new cjs.ButtonHelper(this.again, 0, 1, 1);

	this.instance_5 = new lib.CachedBmp_62();
	this.instance_5.setTransform(270,268.35,0.5,0.5);

	this.check = new lib.myButton();
	this.check.name = "check";
	this.check.setTransform(330,287.5,0.5032,0.4265,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.check, 0, 1, 1);

	this.instance_6 = new lib.CachedBmp_61();
	this.instance_6.setTransform(303.2,115.85,0.5,0.5);

	this.operatorTxt = new cjs.Text("", "45px 'Tw Cen MT Condensed'");
	this.operatorTxt.name = "operatorTxt";
	this.operatorTxt.lineHeight = 50;
	this.operatorTxt.lineWidth = 51;
	this.operatorTxt.parent = this;
	this.operatorTxt.setTransform(133,107);

	this.secondNumbTxt = new cjs.Text("", "45px 'Tw Cen MT Condensed'");
	this.secondNumbTxt.name = "secondNumbTxt";
	this.secondNumbTxt.lineHeight = 50;
	this.secondNumbTxt.lineWidth = 51;
	this.secondNumbTxt.parent = this;
	this.secondNumbTxt.setTransform(214,107);

	this.firstNumbTxt = new cjs.Text("", "45px 'Tw Cen MT Condensed'");
	this.firstNumbTxt.name = "firstNumbTxt";
	this.firstNumbTxt.lineHeight = 50;
	this.firstNumbTxt.lineWidth = 51;
	this.firstNumbTxt.parent = this;
	this.firstNumbTxt.setTransform(52.05,107);

	this.guessTxt = new lib.an_TextInput({'id': 'guessTxt', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.guessTxt.name = "guessTxt";
	this.guessTxt.setTransform(434.5,128.05,1.2,2.6364,0,0,0,50,11);

	this.instance_7 = new lib.CachedBmp_60();
	this.instance_7.setTransform(45.55,94.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.addition},{t:this.subtract},{t:this.multiply},{t:this.divide},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},50).to({state:[{t:this.instance_7},{t:this.guessTxt},{t:this.firstNumbTxt},{t:this.secondNumbTxt},{t:this.operatorTxt},{t:this.instance_6},{t:this.check},{t:this.instance_5},{t:this.again},{t:this.instance_4}]},9).wait(1));

	// window (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AmAF7QigidAAjeQAAjcCgidQCgidDgAAQDhAACgCdQCgCdAADcQAADeigCdQigCcjhAAQjgAAigicg");
	var mask_graphics_1 = new cjs.Graphics().p("AmAF7QigidAAjeQAAjcCgidQCgidDgAAQDhAACgCdQCgCdAADcQAADeigCdQigCcjhAAQjgAAigicg");
	var mask_graphics_2 = new cjs.Graphics().p("AmAF6QigidAAjdQAAjcCgidQCgidDgAAQDiAACgCdQCfCdAADcQAADdifCdQigCdjiAAQjgAAigidg");
	var mask_graphics_3 = new cjs.Graphics().p("AmAF6QigidAAjdQAAjcCgidQCgidDgAAQDiAACgCdQCfCdAADcQAADdifCdQigCdjiAAQjgAAigidg");
	var mask_graphics_4 = new cjs.Graphics().p("AmAF6QigidAAjdQAAjcCgidQCgidDgAAQDhAACgCdQCgCdAADcQAADdigCdQigCdjhAAQjgAAigidg");
	var mask_graphics_5 = new cjs.Graphics().p("AmAF6QigidAAjdQAAjcCgidQCgidDgAAQDhAACgCdQCgCdAADcQAADdigCdQigCdjhAAQjgAAigidg");
	var mask_graphics_6 = new cjs.Graphics().p("AmAF6QigidAAjdQAAjcCgidQCfidDhAAQDiAACgCdQCfCdAADcQAADdifCdQigCdjiAAQjhAAifidg");
	var mask_graphics_7 = new cjs.Graphics().p("AmAF7QigieAAjdQAAjcCgidQCfidDhAAQDiAACgCdQCfCdAADcQAADdifCeQigCcjiAAQjhAAificg");
	var mask_graphics_8 = new cjs.Graphics().p("AmAF7QigieAAjdQAAjcCgidQCfidDhAAQDiAACfCdQCgCdAADcQAADdigCeQifCcjiAAQjhAAificg");
	var mask_graphics_9 = new cjs.Graphics().p("AmAF6QigidAAjdQAAjcCgidQCfidDhAAQDiAACfCdQCgCdAADcQAADdigCdQifCdjiAAQjhAAifidg");
	var mask_graphics_10 = new cjs.Graphics().p("AmAF6QigidAAjdQAAjcCgidQCfidDhAAQDhAAChCdQCfCdAADcQAADdifCdQihCdjhAAQjhAAifidg");
	var mask_graphics_11 = new cjs.Graphics().p("AmAF6QigidAAjdQAAjcCgidQCfidDhAAQDhAAChCdQCfCdAADcQAADdifCdQihCdjhAAQjhAAifidg");
	var mask_graphics_12 = new cjs.Graphics().p("AmAF7QigidAAjeQAAjcCgidQCfidDhAAQDhAACgCdQCgCdAADcQAADeigCdQigCcjhAAQjhAAificg");
	var mask_graphics_13 = new cjs.Graphics().p("AmAF7QigidAAjeQAAjcCgidQCfidDhAAQDhAACgCdQCgCdAADcQAADeigCdQigCcjhAAQjhAAificg");
	var mask_graphics_14 = new cjs.Graphics().p("AmAF6QigicAAjeQAAjcCgidQCgidDgAAQDhAAChCdQCfCdAADcQAADeifCcQihCdjhAAQjgAAigidg");
	var mask_graphics_15 = new cjs.Graphics().p("AmAF6QigicAAjeQAAjcCgidQCgidDgAAQDhAAChCdQCfCdAADcQAADeifCcQihCdjhAAQjgAAigidg");
	var mask_graphics_16 = new cjs.Graphics().p("AmAF7QigidAAjeQAAjcCgidQCfidDhAAQDiAACfCdQCgCdAADcQAADeigCdQifCcjiAAQjhAAificg");
	var mask_graphics_17 = new cjs.Graphics().p("AmAF7QigidAAjeQAAjcCgidQCfidDhAAQDiAACfCdQCgCdAADcQAADeigCdQifCcjiAAQjhAAificg");
	var mask_graphics_18 = new cjs.Graphics().p("AmAF7QigidAAjeQAAjcCgidQCgidDgAAQDhAAChCdQCfCdAADcQAADeifCdQihCcjhAAQjgAAigicg");
	var mask_graphics_19 = new cjs.Graphics().p("AmAF6QigicAAjeQAAjcCgidQCgidDgAAQDhAAChCdQCfCdAADcQAADeifCcQihCdjhAAQjgAAigidg");
	var mask_graphics_20 = new cjs.Graphics().p("AmAF6QigicAAjeQAAjcCgidQCgidDgAAQDiAACgCdQCfCdAADcQAADeifCcQigCdjiAAQjgAAigidg");
	var mask_graphics_21 = new cjs.Graphics().p("AmAF7QigidAAjeQAAjcCgidQCgidDgAAQDiAACgCdQCfCdAADcQAADeifCdQigCcjiAAQjgAAigicg");
	var mask_graphics_22 = new cjs.Graphics().p("AmAF7QigidAAjeQAAjcCgidQCgidDgAAQDhAACgCdQCgCdAADcQAADeigCdQigCcjhAAQjgAAigicg");
	var mask_graphics_23 = new cjs.Graphics().p("AmAF7QigidAAjeQAAjcCgidQCgidDgAAQDhAACgCdQCgCdAADcQAADeigCdQigCcjhAAQjgAAigicg");
	var mask_graphics_24 = new cjs.Graphics().p("AmAF6QigidAAjdQAAjcCgidQCfidDhAAQDiAACgCdQCfCdAADcQAADdifCdQigCdjiAAQjhAAifidg");
	var mask_graphics_25 = new cjs.Graphics().p("AmAF6QigicAAjeQAAjcCgidQCfidDhAAQDiAACgCdQCfCdAADcQAADeifCcQigCdjiAAQjhAAifidg");
	var mask_graphics_26 = new cjs.Graphics().p("AmAF6QigidAAjdQAAjcCgidQCfidDhAAQDiAACfCdQCgCdAADcQAADdigCdQifCdjiAAQjhAAifidg");
	var mask_graphics_27 = new cjs.Graphics().p("AmAF6QigidAAjdQAAjcCgidQCfidDhAAQDiAACfCdQCgCdAADcQAADdigCdQifCdjiAAQjhAAifidg");
	var mask_graphics_28 = new cjs.Graphics().p("AmAF6QigidAAjdQAAjcCgidQCfidDhAAQDiAACgCdQCfCdAADcQAADdifCdQigCdjiAAQjhAAifidg");
	var mask_graphics_29 = new cjs.Graphics().p("AmAF7QigieAAjdQAAjcCgidQCfidDhAAQDiAACgCdQCfCdAADcQAADdifCeQigCcjiAAQjhAAificg");
	var mask_graphics_30 = new cjs.Graphics().p("AmAF7QigieAAjdQAAjcCgidQCfidDhAAQDhAACgCdQCgCdAADcQAADdigCeQigCcjhAAQjhAAificg");
	var mask_graphics_31 = new cjs.Graphics().p("AmAF6QigidAAjdQAAjcCgidQCfidDhAAQDhAACgCdQCgCdAADcQAADdigCdQigCdjhAAQjhAAifidg");
	var mask_graphics_32 = new cjs.Graphics().p("AmAF6QigidAAjdQAAjcCgidQCgidDgAAQDhAAChCdQCfCdAADcQAADdifCdQihCdjhAAQjgAAigidg");
	var mask_graphics_33 = new cjs.Graphics().p("AmAF6QigidAAjdQAAjcCgidQCgidDgAAQDhAAChCdQCfCdAADcQAADdifCdQihCdjhAAQjgAAigidg");
	var mask_graphics_34 = new cjs.Graphics().p("AmAF7QigidAAjeQAAjcCgidQCfidDhAAQDiAACfCdQCgCdAADcQAADeigCdQifCcjiAAQjhAAificg");
	var mask_graphics_35 = new cjs.Graphics().p("AmAF7QigidAAjeQAAjcCgidQCfidDhAAQDiAACfCdQCgCdAADcQAADeigCdQifCcjiAAQjhAAificg");
	var mask_graphics_36 = new cjs.Graphics().p("AmAF6QigicAAjeQAAjcCgidQCgidDgAAQDhAACgCdQCgCdAADcQAADeigCcQigCdjhAAQjgAAigidg");
	var mask_graphics_37 = new cjs.Graphics().p("AmAF6QigicAAjeQAAjcCgidQCgidDgAAQDhAAChCdQCfCdAADcQAADeifCcQihCdjhAAQjgAAigidg");
	var mask_graphics_38 = new cjs.Graphics().p("AmAF7QigidAAjeQAAjcCgidQCfidDhAAQDiAACgCdQCfCdAADcQAADeifCdQigCcjiAAQjhAAificg");
	var mask_graphics_39 = new cjs.Graphics().p("AmAF7QigidAAjeQAAjcCgidQCfidDhAAQDiAACgCdQCfCdAADcQAADeifCdQigCcjiAAQjhAAificg");
	var mask_graphics_40 = new cjs.Graphics().p("AmAF7QigidAAjeQAAjcCgidQCgidDgAAQDhAACgCdQCgCdAADcQAADeigCdQigCcjhAAQjgAAigicg");
	var mask_graphics_41 = new cjs.Graphics().p("AmAF6QigicAAjeQAAjcCgidQCfidDhAAQDhAACgCdQCgCdAADcQAADeigCcQigCdjhAAQjhAAifidg");
	var mask_graphics_42 = new cjs.Graphics().p("AmAF6QigicAAjeQAAjcCgidQCfidDhAAQDiAACgCdQCfCdAADcQAADeifCcQigCdjiAAQjhAAifidg");
	var mask_graphics_43 = new cjs.Graphics().p("AmAF7QigidAAjeQAAjcCgidQCfidDhAAQDiAACgCdQCfCdAADcQAADeifCdQigCcjiAAQjhAAificg");
	var mask_graphics_44 = new cjs.Graphics().p("AmAF7QigidAAjeQAAjcCgidQCfidDhAAQDiAACfCdQCgCdAADcQAADeigCdQifCcjiAAQjhAAificg");
	var mask_graphics_45 = new cjs.Graphics().p("AmAF7QigidAAjeQAAjcCgidQCfidDhAAQDiAACfCdQCgCdAADcQAADeigCdQifCcjiAAQjhAAificg");
	var mask_graphics_46 = new cjs.Graphics().p("AmAF6QigidAAjdQAAjcCgidQCfidDhAAQDhAAChCdQCfCdAADcQAADdifCdQihCdjhAAQjhAAifidg");
	var mask_graphics_47 = new cjs.Graphics().p("AmAF6QigicAAjeQAAjcCgidQCfidDhAAQDhAAChCdQCfCdAADcQAADeifCcQihCdjhAAQjhAAifidg");
	var mask_graphics_48 = new cjs.Graphics().p("AmAF6QigidAAjdQAAjcCgidQCfidDhAAQDhAACgCdQCgCdAADcQAADdigCdQigCdjhAAQjhAAifidg");
	var mask_graphics_49 = new cjs.Graphics().p("AmAF6QigidAAjdQAAjcCgidQCfidDhAAQDhAACgCdQCgCdAADcQAADdigCdQigCdjhAAQjhAAifidg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-106.5,y:74.55}).wait(1).to({graphics:mask_graphics_1,x:-90.75,y:74.1}).wait(1).to({graphics:mask_graphics_2,x:-74.95,y:73.7}).wait(1).to({graphics:mask_graphics_3,x:-59.2,y:73.25}).wait(1).to({graphics:mask_graphics_4,x:-43.4,y:72.85}).wait(1).to({graphics:mask_graphics_5,x:-27.65,y:72.4}).wait(1).to({graphics:mask_graphics_6,x:-11.85,y:71.95}).wait(1).to({graphics:mask_graphics_7,x:3.9,y:71.55}).wait(1).to({graphics:mask_graphics_8,x:19.7,y:71.1}).wait(1).to({graphics:mask_graphics_9,x:35.45,y:70.7}).wait(1).to({graphics:mask_graphics_10,x:51.25,y:70.25}).wait(1).to({graphics:mask_graphics_11,x:67,y:69.8}).wait(1).to({graphics:mask_graphics_12,x:82.8,y:69.4}).wait(1).to({graphics:mask_graphics_13,x:98.55,y:68.95}).wait(1).to({graphics:mask_graphics_14,x:114.35,y:68.55}).wait(1).to({graphics:mask_graphics_15,x:130.1,y:68.1}).wait(1).to({graphics:mask_graphics_16,x:145.9,y:67.7}).wait(1).to({graphics:mask_graphics_17,x:161.65,y:67.25}).wait(1).to({graphics:mask_graphics_18,x:177.45,y:66.8}).wait(1).to({graphics:mask_graphics_19,x:193.2,y:66.4}).wait(1).to({graphics:mask_graphics_20,x:209,y:65.95}).wait(1).to({graphics:mask_graphics_21,x:224.75,y:65.55}).wait(1).to({graphics:mask_graphics_22,x:240.55,y:65.1}).wait(1).to({graphics:mask_graphics_23,x:256.3,y:64.65}).wait(1).to({graphics:mask_graphics_24,x:272.1,y:64.25}).wait(1).to({graphics:mask_graphics_25,x:287.85,y:63.8}).wait(1).to({graphics:mask_graphics_26,x:303.65,y:63.4}).wait(1).to({graphics:mask_graphics_27,x:319.4,y:62.95}).wait(1).to({graphics:mask_graphics_28,x:335.2,y:62.5}).wait(1).to({graphics:mask_graphics_29,x:350.95,y:62.1}).wait(1).to({graphics:mask_graphics_30,x:366.75,y:61.65}).wait(1).to({graphics:mask_graphics_31,x:382.5,y:61.25}).wait(1).to({graphics:mask_graphics_32,x:398.3,y:60.8}).wait(1).to({graphics:mask_graphics_33,x:414.05,y:60.35}).wait(1).to({graphics:mask_graphics_34,x:429.85,y:59.95}).wait(1).to({graphics:mask_graphics_35,x:445.6,y:59.5}).wait(1).to({graphics:mask_graphics_36,x:461.4,y:59.1}).wait(1).to({graphics:mask_graphics_37,x:477.15,y:58.65}).wait(1).to({graphics:mask_graphics_38,x:492.95,y:58.25}).wait(1).to({graphics:mask_graphics_39,x:508.7,y:57.8}).wait(1).to({graphics:mask_graphics_40,x:524.5,y:57.35}).wait(1).to({graphics:mask_graphics_41,x:540.25,y:56.95}).wait(1).to({graphics:mask_graphics_42,x:556.05,y:56.5}).wait(1).to({graphics:mask_graphics_43,x:571.8,y:56.1}).wait(1).to({graphics:mask_graphics_44,x:587.6,y:55.65}).wait(1).to({graphics:mask_graphics_45,x:603.35,y:55.2}).wait(1).to({graphics:mask_graphics_46,x:619.15,y:54.8}).wait(1).to({graphics:mask_graphics_47,x:634.9,y:54.35}).wait(1).to({graphics:mask_graphics_48,x:650.7,y:53.95}).wait(1).to({graphics:mask_graphics_49,x:666.45,y:53.5}).wait(11));

	// title
	this.instance_8 = new lib.CachedBmp_1();
	this.instance_8.setTransform(109,32.45,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_2();
	this.instance_9.setTransform(109,32.45,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_55();
	this.instance_10.setTransform(52.95,32.45,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_8,this.instance_9,this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},49).to({state:[{t:this.instance_10}]},1).to({state:[]},1).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,495.1,343.5);
// library properties:
lib.properties = {
	id: '943068405D02AF45A2D47F8F3E2564C6',
	width: 550,
	height: 400,
	fps: 24,
	color: "#333333",
	opacity: 1.00,
	manifest: [
		{src:"images/calculator_atlas_.png?1614726080778", id:"calculator_atlas_"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1614726080794", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1614726080794", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1614726080794", id:"an.TextInput"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['943068405D02AF45A2D47F8F3E2564C6'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	if((this.stage == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element && this._element._attached) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	this._lastAddedFrame = this.parent.currentFrame;
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;