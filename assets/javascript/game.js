// // $(document).ready(function() {

// var characters={
// 	'obi-wan':{
// 		name:"Obi-Wan Kenobi",
// 		image:"../",
// 		healthPoints:100,
// 		attackPower:50,
// 		counterAttackPower: 40
// 	},
// 	'luke-skywalker':{
// 		name:"Luke Skywalker",
// 		image:"../",
// 		healthPoints:50,
// 		attackPower:30,
// 		counterAttackPower: 30
// 	},
// 	'darth-sidious':{
// 		name:"Darth Sidious",
// 		image:"../",
// 		healthPoints: 39,
// 		attackPower: 55,
// 		counterAttackPower: 11
// 	},
// 	'darth-maul':{
// 		name:"Darth Maul",
// 		image:"../",
// 		healthPoints: 10,
// 		attackPower: 50,
// 		counterAttackPower: 10
// 	},
// }

// $('#obi-wan').find('#health-points').html(characters['obi-wan'].healthPoints);
// $('#luke-skywalker').find('#health-points').html(characters['luke-skywalker'].healthPoints);
// $('#darth-sidious').find('#health-points').html(characters['darth-sidious'].healthPoints);
// $('#darth-maul').find('#health-points').html(characters['darth-maul'].healthPoints);

// function initiateGame(){
	
// 	$(this).remove().effect('blind');
// 	$("#player-panel").html($(this).show('slow'));
// 	$("#player-panel").children().addClass("player-character");
// 	$("#enemy-panel").append($("#character-panel").html()).show('slow');
// 	$("#enemy-panel").children().addClass("enemies");
// 	$("#character-panel").remove();
// 	$(".character-container").unbind();

// 	console.log($("#enemy-panel").html());

// 	$(".enemies").on('click',stageBattle);

// 	function stageBattle(){
		
// 		$(this).remove().effect('blind');
// 		$("#defender-panel").html($(this).show('slow'));
// 		console.log($('#defender-panel').children().attr('id'));
// 		// where the attack button gets click (game starts)
// 		$("#attack").on('click', function (){
			
// 			doBattle($(".player-character").attr('id'),$('#defender-panel').children().attr('id'));
// 			function doBattle(playerCharacter, enemyCharacter) {
			    
// 				var battleMultiplier = characters[playerCharacter].attackPower;
// 				console.log("battleMultiplier= " + battleMultiplier);
// 				characters[enemyCharacter].healthPoints-=characters[playerCharacter].attackPower;
// 				console.log("enemyCharacter: " + characters[enemyCharacter].healthPoints);
				
// 				console.log($("#defender-panel").html());

// 				characters[playerCharacter].healthPoints-=characters[enemyCharacter].attackPower;
// 				console.log("playerCharacter: " + characters[playerCharacter].healthPoints);
				
// 				console.log($("#player-panel").html());
// 				characters[playerCharacter].attackPower+=battleMultiplier;

// 				if (characters[enemyCharacter].healthPoints <= 0) {
// 					alert("enemy defeated");
					
// 					$('#defender-panel').remove();
// 				}
// 				else if (characters[playerCharacter].healthPoints<=0){
// 					alert("you lost");
// 					$('#player-panel').remove();
// 				}
			
// 			};
// 		});
// 	}
// }


// // $(".character-container").click(initiateGame); 


// // });