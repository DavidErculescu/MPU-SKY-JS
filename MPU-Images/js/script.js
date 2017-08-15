// JavaScript Document
window.onload = function(){
	console.log("Junior developer test.");
	
	// declare your variables here.
	var background;

	// store a reference to the canvas which we will draw on.
	var stage = new createjs.Stage("stage");
	
	// register the stage to handle mouse events. 
	stage.enableMouseOver(10);
	
	// register the Ticker to listen for the tick event.
	createjs.Ticker.addEventListener("tick", handleTick, false);
	
	// redraw the canvas - like Event.ENTER_FRAME in Adobe Flash.
	function handleTick(event) {
        stage.update();
    }
	
	// create a preloader to load the images.
	var loader = new createjs.LoadQueue(false);
	
	// when all images are loaded call the handleAllImageLoaded function.
	loader.on('complete', handleAllImagesLoaded, this);
	
	// provide a manifest of files and ids to be loaded.
	loader.loadManifest([
		{id: "background", src:"images/background.png"},
		{id: "mands_badge", src:"images/M&S.png"},
		{id: "samsung_badge", src:"images/SAMSUNG.png"},
		{id: "logo", src:"images/sky_logo.png"},
		{id: "1year_free", src:"images/1YearFree.png"},
		{id: "chose_your_reward", src:"images/ChoseYourReward.png"},
		{id: "CTA", src:"images/CTA.png"},
		{id: "limited_time_offer", src:"images/LimitedTimeOffer.png"},
		{id: "sky_badge", src:"images/SKYBadge.png"},
		{id: "sky_line_rental", src:"images/SkyLineRental.png"},
		{id: "when_join_sky", src:"images/WhenJoinSky.png"},
		{id: "when_you_switch", src:"images/WhenYouSwitch.png"},
		{id: "when_you_join", src:"images/WhenYouJoin.png"},
		{id: "sky_line_rental_grey", src:"images/SkyLineRentalGrey.png"},
		{id: "shine", src:"images/shine.png"}
	]);
	
	function handleAllImagesLoaded() {
		console.log("All the images have loaded.");
		drawTheBannerBackground();
	}
	
	function drawTheBannerBackground() {
		console.log("draw and animate the background.");

		background = new createjs.Bitmap( loader.getResult( "background" ) );
		stage.addChild( background );

        var logo = new createjs.Bitmap( loader.getResult( "logo" ) );
        logo.x = 20;
        logo.y = 238 - logo.image.height;
        stage.addChild( logo );
        frame1();
	}
	
	function frame1() {
		console.log("draw and animate frame one.");
		// refer to the creative brief, frame 1 for guidance.
        MandS = new createjs.Bitmap( loader.getResult( "mands_badge" ) );
        MandS.x = 163;
        MandS.y = 115;
        stage.addChild( MandS );

        Samsung = new createjs.Bitmap( loader.getResult( "samsung_badge" ) );
        Samsung.x =56;
        Samsung.y = 115;
        stage.addChild( Samsung );

        Choose = new createjs.Bitmap( loader.getResult( "chose_your_reward" ) );
        Choose.x =54;
        Choose.y = 18;
        Choose.alpha = 0;
        stage.addChild( Choose );

        Switch = new createjs.Bitmap( loader.getResult( "when_you_switch" ) );
        Switch.x =66;
        Switch.y = 45;
        Switch.alpha = 0;
        stage.addChild( Switch );

        createjs.Tween.get(Choose).to({alpha:1}, 500).call(function() {
            createjs.Tween.get(Switch).to({alpha:1}, 200).call(frame1FadeOut);
        });
	}

	function frame1FadeOut() {
	    setTimeout(function() {
            createjs.Tween.get(Samsung).to({alpha:0}, 200);
            createjs.Tween.get(Choose).to({alpha:0}, 200);
            createjs.Tween.get(Switch).to({alpha:0}, 200);
            createjs.Tween.get(MandS).to({alpha:0}, 200).call(frame2);
        }, 2000);
    }
	
	function frame2() {
		console.log("draw and animate frame two.");
		WhenYouJoinSky = new createjs.Bitmap( loader.getResult( "when_join_sky" ) );
        WhenYouJoinSky.x =42;
        WhenYouJoinSky.y = 26;
        WhenYouJoinSky.alpha = 0;
        stage.addChild( WhenYouJoinSky );

        SkyRental = new createjs.Bitmap( loader.getResult( "sky_line_rental" ) );
        SkyRental.x = 126;
        SkyRental.y = 219;
        SkyRental.alpha = 0;
        stage.addChild( SkyRental );

        SkyBadge = new createjs.Bitmap( loader.getResult( "sky_badge" ) );
        SkyBadge.x = 66;
        SkyBadge.y = -200;
        SkyBadge.alpha = 1;
        stage.addChild( SkyBadge );

        createjs.Tween.get(WhenYouJoinSky).to({alpha:1}, 500).call(function () {
            createjs.Tween.get(SkyRental).to({alpha:1}, 500);
            createjs.Tween.get(SkyBadge).to({x:66, y:66}, 500, createjs.Ease.bounceOut).call(frame2FadeOut);

        });
	}

	function frame2FadeOut() {
        setTimeout(function() {
            createjs.Tween.get(WhenYouJoinSky).to({alpha:0}, 200);
            createjs.Tween.get(SkyRental).to({alpha:0}, 200);
            createjs.Tween.get(SkyBadge).to({alpha:0}, 200).call(frame3);
        }, 2000);
    }
	
	function frame3() {
		console.log("draw and animate frame three.");

        CTA = new createjs.Bitmap( loader.getResult( "CTA" ) );
        CTA.x = 149;
        CTA.y = 238 - CTA.image.height;
        CTA.alpha = 1;
        stage.addChild( CTA );

        Year1Free = new createjs.Bitmap( loader.getResult( "1year_free" ) );
        Year1Free.x = 10;
        Year1Free.y = 30;
        Year1Free.alpha = 0;
        stage.addChild( Year1Free );

        WhenYouJoin = new createjs.Bitmap( loader.getResult( "when_you_join" ) );
        WhenYouJoin.x = 40;
        WhenYouJoin.y = 84;
        WhenYouJoin.alpha = 0;
        stage.addChild( WhenYouJoin );

        LimitedTimeOffer = new createjs.Bitmap( loader.getResult( "limited_time_offer" ) );
        LimitedTimeOffer.x = 74;
        LimitedTimeOffer.y = 139;
        LimitedTimeOffer.alpha = 0;
        stage.addChild( LimitedTimeOffer );

        SkyRentalGrey = new createjs.Bitmap( loader.getResult( "sky_line_rental_grey" ) );
        SkyRentalGrey.x = 84;
        SkyRentalGrey.y = 181;
        SkyRentalGrey.alpha = 0;
        stage.addChild( SkyRentalGrey );

        Shine = new createjs.Bitmap( loader.getResult( "shine" ) );
        Shine.x = 20;
        Shine.y = 238 - Shine.image.height;
        Shine.alpha = 0;
        stage.addChild( Shine );

        createjs.Tween.get(Year1Free).to({alpha:1}, 500).call(function () {
            createjs.Tween.get(WhenYouJoin).to({alpha:1}, 500).call(function() {
                createjs.Tween.get(LimitedTimeOffer).to({alpha:1}, 500).call(function() {
                    createjs.Tween.get(SkyRentalGrey).to({alpha:1}, 200).call(function() {
                        createjs.Tween.get(Shine).to({alpha:1, x: 149 + CTA.image.width}, 200).call(function() {
                            createjs.Tween.get(Shine).to({alpha:0}, 0);
                        });
                    });
                });
            });
        });

		// refer to the creative brief, frame 3 for guidance.
	}
	
};