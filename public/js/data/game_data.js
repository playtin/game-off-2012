var game_data = [

  // Push
  {
    "name" : "Push",
    "data" : {"version":5,"title":"Beat Push-Up-Bot","instructions":"Alterate clicks in upper and lower half!","duration":5,"backgroundID":242,"gameObjects":[{"ID":7,"name":"screw2","graphicID":239,"position":{"x":389,"y":186},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"scaleSize","scale":80,"speed":4},{"ID":"flipObject","mode":"horizontally"}]},{"triggers":[{"ID":"touchArea","objectID":2,"area":{"x":282,"y":21,"width":402,"height":66}}],"actions":[{"ID":"artPlay","frame":1,"frame2":3,"mode":"loop","speed":1}]},{"triggers":[{"ID":"touchArea","objectID":2,"area":{"x":268,"y":291,"width":442,"height":74}}],"actions":[{"ID":"artPlay","frame":3,"frame2":1,"mode":"loop","speed":1}]},{"triggers":[{"ID":"gameWasWon"}],"actions":[{"ID":"artStop"}]},{"triggers":[{"ID":"gameWasLost"}],"actions":[{"ID":"artStop"}]}]},{"ID":5,"name":"controller","graphicID":240,"position":{"x":801,"y":272},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"artToFrame","frame":5,"frame2":6}]},{"triggers":[{"ID":"clickArea","area":{"x":-32,"y":203,"width":718,"height":194}},{"ID":"counterEqualsNumber","objectID":1,"counter":0}],"actions":[{"ID":"counterUp"}]},{"triggers":[{"ID":"clickArea","area":{"x":-32,"y":7,"width":718,"height":194}},{"ID":"counterEqualsNumber","objectID":1,"counter":1}],"actions":[{"ID":"counterUp"}]},{"triggers":[{"ID":"timeExact","time":100},{"ID":"counterGreaterObject","objectID":5,"object2ID":2}],"actions":[{"ID":"gameWin"}]}]},{"ID":3,"name":"screw","graphicID":239,"position":{"x":587,"y":186},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"scaleSize","scale":80,"speed":4}]},{"triggers":[{"ID":"touchArea","objectID":2,"area":{"x":282,"y":21,"width":402,"height":66}}],"actions":[{"ID":"artPlay","frame":1,"frame2":3,"mode":"loop","speed":1}]},{"triggers":[{"ID":"touchArea","objectID":2,"area":{"x":268,"y":291,"width":442,"height":74}}],"actions":[{"ID":"artPlay","frame":3,"frame2":1,"mode":"loop","speed":1}]},{"triggers":[{"ID":"gameWasWon"}],"actions":[{"ID":"artStop"}]},{"triggers":[{"ID":"gameWasLost"}],"actions":[{"ID":"artStop"}]}]},{"ID":2,"name":"push_up_robot","graphicID":238,"position":{"x":489,"y":125},"behaviours":[{"triggers":[{"ID":"touchArea","objectID":2,"area":{"x":362,"y":15,"width":294,"height":72}}],"actions":[{"ID":"moveInDirection","angle":"1.57","speed":3},{"ID":"counterUp"},{"ID":"artToFrame","frame":1}]},{"triggers":[{"ID":"touchArea","objectID":2,"area":{"x":288,"y":291,"width":412,"height":90}}],"actions":[{"ID":"moveInDirection","angle":"-1.57","speed":3},{"ID":"counterUp"},{"ID":"artToFrame","frame":2}]},{"triggers":[{"ID":"gameWasWon"}],"actions":[{"ID":"moveStop"},{"ID":"artToFrame","frame":3}]},{"triggers":[{"ID":"gameWasLost"}],"actions":[{"ID":"moveStop"},{"ID":"artToFrame","frame":4}]}]},{"ID":1,"name":"push_up_man","graphicID":240,"position":{"x":187,"y":175},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"artToFrame","frame":5,"frame2":6}]},{"triggers":[{"ID":"clickArea","area":{"x":-32,"y":203,"width":718,"height":194}},{"ID":"counterEqualsNumber","objectID":1,"counter":0}],"actions":[{"ID":"artPlay","frame":5,"frame2":2,"mode":"once","speed":3},{"ID":"counterUp"}]},{"triggers":[{"ID":"clickArea","area":{"x":-32,"y":7,"width":718,"height":194}},{"ID":"counterEqualsNumber","objectID":1,"counter":1}],"actions":[{"ID":"artPlay","frame":2,"frame2":5,"mode":"once","speed":3},{"ID":"counterDown"}]},{"triggers":[{"ID":"gameWasWon"}],"actions":[{"ID":"counterSet","counter":2},{"ID":"artToFrame","frame":6}]},{"triggers":[{"ID":"gameWasLost"}],"actions":[{"ID":"counterSet","counter":2},{"ID":"artToFrame","frame":1}]}]}],"graphics":[{"ID":242,"frameWidth":640,"frameHeight":390,"frameCount":1,"url":"http://s3.amazonaws.com/mbgfx/graphics/242/gym.png?1354182609"},{"ID":239,"frameWidth":85,"frameHeight":256,"frameCount":3,"url":"http://s3.amazonaws.com/mbgfx/graphics/239/screw.png?1354175983"},{"ID":240,"frameWidth":256,"frameHeight":256,"frameCount":6,"url":"http://s3.amazonaws.com/mbgfx/graphics/240/push_up_man.png?1354179862"},{"ID":238,"frameWidth":256,"frameHeight":85,"frameCount":4,"url":"http://s3.amazonaws.com/mbgfx/graphics/238/push_up_robot.png?1354174881"}]}, 
    "id" : 46
  },
  
  // Pull
  {
    "name" : "Pull",
    "data" : {"version":4,"title":"Pull the treasures","instructions":"Click on the red arrows to navigate the diver. Collect the treasures and bring them to the rope","duration":30,"backgroundID":197,"gameObjects":[{"ID":13,"name":"vertical_line","graphicID":203,"position":{"x":273,"y":167},"behaviours":[],"boundingArea":{"x":-6,"y":-127,"width":9,"height":254}},{"ID":2,"name":"diver","graphicID":196,"position":{"x":254,"y":354},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"scaleSize","scale":50,"speed":4}]},{"triggers":[{"ID":"clickObject","objectID":8}],"actions":[{"ID":"moveInDirection","angle":"-1.57","speed":1},{"ID":"artPlay","frame":2,"frame2":3,"mode":"ping-pong","speed":1}]},{"triggers":[{"ID":"clickObject","objectID":9},{"ID":"counterEqualsNumber","objectID":2,"counter":1}],"actions":[{"ID":"moveInDirection","angle":"0.00","speed":1},{"ID":"artToFrame","frame":1}]},{"triggers":[{"ID":"clickObject","objectID":10},{"ID":"counterEqualsNumber","objectID":2,"counter":1}],"actions":[{"ID":"moveInDirection","angle":"3.14","speed":1},{"ID":"artToFrame","frame":1}]},{"triggers":[{"ID":"clickObject","objectID":11}],"actions":[{"ID":"moveInDirection","angle":"1.57","speed":1},{"ID":"artToFrame","frame":1}]},{"triggers":[{"ID":"touchArea","objectID":2,"area":{"x":-1,"y":389,"width":640,"height":26}}],"actions":[{"ID":"moveStop"},{"ID":"artToFrame","frame":1}]},{"triggers":[{"ID":"touchObject","objectID":2,"object2ID":7}],"actions":[{"ID":"counterSet","counter":1}]},{"triggers":[{"ID":"touchObject","objectID":2,"object2ID":13}],"actions":[{"ID":"counterSet","counter":0}]},{"triggers":[{"ID":"clickObject","objectID":9},{"ID":"counterEqualsNumber","objectID":2,"counter":0}],"actions":[{"ID":"moveInDirection","angle":"0.00","speed":2},{"ID":"artToFrame","frame":1}]},{"triggers":[{"ID":"clickObject","objectID":10},{"ID":"counterEqualsNumber","objectID":2,"counter":0}],"actions":[{"ID":"moveInDirection","angle":"3.14","speed":2},{"ID":"artToFrame","frame":1}]},{"triggers":[{"ID":"touchObject","objectID":2,"object2ID":17}],"actions":[{"ID":"counterSet","counter":1}]},{"triggers":[{"ID":"touchObject","objectID":2,"object2ID":18}],"actions":[{"ID":"counterSet","counter":1}]},{"triggers":[{"ID":"gameWasLost"}],"actions":[{"ID":"moveStop"},{"ID":"artToFrame","frame":2}]}],"boundingArea":{"x":-10,"y":-27,"width":16,"height":48}},{"ID":18,"name":"treasure3","graphicID":201,"position":{"x":329,"y":372},"behaviours":[{"triggers":[{"ID":"overlapObject","objectID":18,"object2ID":2},{"ID":"counterEqualsNumber","objectID":18,"counter":0}],"actions":[{"ID":"moveToObject","objectID":2,"offset":{"x":0,"y":6},"speed":4}]},{"triggers":[{"ID":"touchObject","objectID":18,"object2ID":13}],"actions":[{"ID":"moveToObject","objectID":13,"offset":{"x":-2,"y":-136},"speed":2},{"ID":"counterUp"}]},{"triggers":[{"ID":"touchArea","objectID":18,"area":{"x":259,"y":9,"width":24,"height":22}}],"actions":[{"ID":"jumpToObject","objectID":1,"offset":{"x":-32,"y":12}}]}],"boundingArea":{"x":-8,"y":-10,"width":14,"height":23}},{"ID":17,"name":"treasure2","graphicID":201,"position":{"x":438,"y":349},"behaviours":[{"triggers":[{"ID":"overlapObject","objectID":17,"object2ID":2},{"ID":"counterEqualsNumber","objectID":17,"counter":0}],"actions":[{"ID":"moveToObject","objectID":2,"offset":{"x":0,"y":6},"speed":4}]},{"triggers":[{"ID":"touchObject","objectID":17,"object2ID":13}],"actions":[{"ID":"moveToObject","objectID":13,"offset":{"x":-2,"y":-136},"speed":2},{"ID":"counterUp"}]},{"triggers":[{"ID":"touchArea","objectID":17,"area":{"x":259,"y":9,"width":24,"height":22}}],"actions":[{"ID":"jumpToObject","objectID":1,"offset":{"x":-32,"y":12}}]}],"boundingArea":{"x":-8,"y":-10,"width":14,"height":23}},{"ID":16,"name":"swordfish_lightblue","graphicID":204,"position":{"x":-56,"y":317},"behaviours":[{"triggers":[{"ID":"timeRandom","time":48,"time2":69}],"actions":[{"ID":"moveInDirection","angle":"0.00","speed":2}]},{"triggers":[{"ID":"touchObject","objectID":16,"object2ID":2}],"actions":[{"ID":"gameLose"}]}],"boundingArea":{"x":-28,"y":-3,"width":60,"height":7}},{"ID":11,"name":"arr_down","graphicID":202,"position":{"x":54,"y":376},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"artToFrame","frame":5}]}]},{"ID":10,"name":"arr_left","graphicID":202,"position":{"x":19,"y":341},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"artToFrame","frame":7}]}]},{"ID":9,"name":"arr_right","graphicID":202,"position":{"x":90,"y":341},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"artToFrame","frame":3}]}]},{"ID":8,"name":"arrows_red","graphicID":202,"position":{"x":54,"y":306},"behaviours":[]},{"ID":7,"name":"treasure","graphicID":201,"position":{"x":113,"y":363},"behaviours":[{"triggers":[{"ID":"overlapObject","objectID":7,"object2ID":2},{"ID":"counterEqualsNumber","objectID":7,"counter":0}],"actions":[{"ID":"moveToObject","objectID":2,"offset":{"x":0,"y":6},"speed":4}]},{"triggers":[{"ID":"touchObject","objectID":7,"object2ID":13}],"actions":[{"ID":"moveToObject","objectID":13,"offset":{"x":-2,"y":-136},"speed":2},{"ID":"counterUp"}]},{"triggers":[{"ID":"touchArea","objectID":7,"area":{"x":259,"y":9,"width":24,"height":22}}],"actions":[{"ID":"jumpToObject","objectID":1,"offset":{"x":-32,"y":12}}]}],"boundingArea":{"x":-8,"y":-10,"width":14,"height":23}},{"ID":1,"name":"crane_boat","graphicID":198,"position":{"x":323,"y":34},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"scaleSize","scale":60,"speed":4},{"ID":"moveRoam","area":{"x":217,"y":5,"width":242,"height":72},"mode":"reflect","speed":0}]},{"triggers":[{"ID":"touchObject","objectID":1,"object2ID":7}],"actions":[{"ID":"counterUp"}]},{"triggers":[{"ID":"timeExact","time":100},{"ID":"counterEqualsNumber","objectID":1,"counter":3}],"actions":[{"ID":"gameWin"}]},{"triggers":[{"ID":"touchObject","objectID":1,"object2ID":17}],"actions":[{"ID":"counterUp"}]},{"triggers":[{"ID":"touchObject","objectID":1,"object2ID":18}],"actions":[{"ID":"counterUp"}]}]},{"ID":4,"name":"shark2","graphicID":199,"position":{"x":730,"y":350},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"moveAlongPath","path":[{"x":730,"y":350},{"x":-89,"y":363}],"mode":"circular","speed":1},{"ID":"artToFrame","frame":2}]},{"triggers":[{"ID":"touchArea","objectID":4,"area":{"x":-121,"y":341,"width":48,"height":26}}],"actions":[{"ID":"artToFrame","frame":1}]},{"triggers":[{"ID":"touchObject","objectID":4,"object2ID":2}],"actions":[{"ID":"gameLose"}]}],"boundingArea":{"x":-50,"y":-10,"width":96,"height":21}},{"ID":3,"name":"shark","graphicID":199,"position":{"x":-53,"y":174},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"moveAlongPath","path":[{"x":-53,"y":174},{"x":731,"y":169},{"x":725,"y":249},{"x":-49,"y":237}],"mode":"circular","speed":2}]},{"triggers":[{"ID":"touchArea","objectID":3,"area":{"x":681,"y":199,"width":48,"height":26}}],"actions":[{"ID":"artToFrame","frame":2}]},{"triggers":[{"ID":"touchArea","objectID":3,"area":{"x":-85,"y":197,"width":48,"height":26}}],"actions":[{"ID":"artToFrame","frame":1}]},{"triggers":[{"ID":"touchObject","objectID":3,"object2ID":2}],"actions":[{"ID":"gameLose"}]}],"boundingArea":{"x":-50,"y":-10,"width":96,"height":21}},{"ID":6,"name":"swordfish","graphicID":200,"position":{"x":-38,"y":90},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"moveAlongPath","path":[{"x":-38,"y":90},{"x":47,"y":45},{"x":75,"y":47},{"x":107,"y":53},{"x":127,"y":73},{"x":143,"y":87},{"x":165,"y":95},{"x":205,"y":95},{"x":243,"y":95},{"x":297,"y":95},{"x":347,"y":95},{"x":393,"y":95},{"x":441,"y":87},{"x":463,"y":71},{"x":475,"y":55},{"x":491,"y":47},{"x":525,"y":47},{"x":551,"y":59},{"x":571,"y":73},{"x":593,"y":81},{"x":609,"y":95},{"x":639,"y":95},{"x":661,"y":95},{"x":685,"y":95},{"x":729,"y":97}],"mode":"once","speed":3}]}]}],"graphics":[{"ID":197,"frameWidth":640,"frameHeight":390,"frameCount":1,"url":"http://s3.amazonaws.com/mbgfx/graphics/197/underwater.png?1351960629"},{"ID":203,"frameWidth":32,"frameHeight":256,"frameCount":1,"url":"http://s3.amazonaws.com/mbgfx/graphics/203/vertical_line.png?1352027293"},{"ID":196,"frameWidth":72,"frameHeight":103,"frameCount":3,"url":"http://s3.amazonaws.com/mbgfx/graphics/196/diver.png?1351960438"},{"ID":201,"frameWidth":32,"frameHeight":32,"frameCount":1,"url":"http://s3.amazonaws.com/mbgfx/graphics/201/treasure.png?1352026391"},{"ID":204,"frameWidth":69,"frameHeight":32,"frameCount":1,"url":"http://s3.amazonaws.com/mbgfx/graphics/204/swordfish_lightblue.png?1352029997"},{"ID":202,"frameWidth":32,"frameHeight":32,"frameCount":8,"url":"http://s3.amazonaws.com/mbgfx/graphics/202/arrows_red.png?1352026777"},{"ID":198,"frameWidth":256,"frameHeight":148,"frameCount":2,"url":"http://s3.amazonaws.com/mbgfx/graphics/198/crane_boat.png?1352023891"},{"ID":199,"frameWidth":101,"frameHeight":32,"frameCount":4,"url":"http://s3.amazonaws.com/mbgfx/graphics/199/shark.png?1352024587"},{"ID":200,"frameWidth":73,"frameHeight":32,"frameCount":4,"url":"http://s3.amazonaws.com/mbgfx/graphics/200/swordfish.png?1352025955"}]},
    "id" : 37
  },
  
  // Clone
  {
    "name" : "Clone",
    "data" : {"version":5,"title":"Clone the Sheeptroopers","instructions":"Click when the sheep is in the cloning machine!","duration":10,"backgroundID":236,"gameObjects":[{"ID":18,"name":"timer","graphicID":237,"position":{"x":0,"y":449},"behaviours":[{"triggers":[{"ID":"clickArea","area":{"x":-34,"y":-29,"width":726,"height":456}},{"ID":"counterEqualsNumber","objectID":18,"counter":0}],"actions":[{"ID":"moveToLocation","location":{"x":616,"y":451},"speed":2},{"ID":"counterUp"}]},{"triggers":[{"ID":"touchArea","objectID":18,"area":{"x":102,"y":401,"width":58,"height":50}}],"actions":[{"ID":"jumpToLocation","location":{"x":0,"y":449}},{"ID":"counterDown"}]}]},{"ID":17,"name":"sheep_foetus","graphicID":237,"position":{"x":104,"y":125},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"moveRoam","area":{"x":66,"y":77,"width":78,"height":98},"mode":"wiggle","speed":0}]}]},{"ID":13,"name":"assembly_line","graphicID":234,"position":{"x":-3,"y":329},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"artPlay","frame":1,"frame2":3,"mode":"loop","speed":2}]}]},{"ID":16,"name":"assembly_line4","graphicID":234,"position":{"x":533,"y":329},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"artPlay","frame":1,"frame2":3,"mode":"loop","speed":2}]}]},{"ID":15,"name":"assembly_line3","graphicID":234,"position":{"x":537,"y":243},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"artPlay","frame":1,"frame2":3,"mode":"loop","speed":2}]}]},{"ID":14,"name":"assembly_line2","graphicID":234,"position":{"x":210,"y":329},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"artPlay","frame":1,"frame2":3,"mode":"loop","speed":2}]}]},{"ID":27,"name":"clone5","graphicID":233,"position":{"x":-163,"y":155},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"scaleSize","scale":70,"speed":4}]},{"triggers":[{"ID":"overlapObject","objectID":22,"object2ID":1},{"ID":"clickArea","area":{"x":-20,"y":-23,"width":718,"height":440}},{"ID":"counterEqualsNumber","objectID":18,"counter":0}],"actions":[{"ID":"jumpToLocation","location":{"x":358,"y":175}},{"ID":"moveToLocation","location":{"x":752,"y":179},"speed":3}]}]},{"ID":26,"name":"clone4","graphicID":233,"position":{"x":-152,"y":135},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"scaleSize","scale":70,"speed":4}]},{"triggers":[{"ID":"overlapObject","objectID":21,"object2ID":1},{"ID":"clickArea","area":{"x":-20,"y":-23,"width":718,"height":440}},{"ID":"counterEqualsNumber","objectID":18,"counter":0}],"actions":[{"ID":"jumpToLocation","location":{"x":358,"y":175}},{"ID":"moveToLocation","location":{"x":752,"y":179},"speed":3}]}]},{"ID":25,"name":"clone3","graphicID":233,"position":{"x":-162,"y":108},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"scaleSize","scale":70,"speed":4}]},{"triggers":[{"ID":"overlapObject","objectID":20,"object2ID":1},{"ID":"clickArea","area":{"x":-20,"y":-23,"width":718,"height":440}},{"ID":"counterEqualsNumber","objectID":18,"counter":0}],"actions":[{"ID":"jumpToLocation","location":{"x":358,"y":175}},{"ID":"moveToLocation","location":{"x":752,"y":179},"speed":3}]}]},{"ID":24,"name":"clone2","graphicID":233,"position":{"x":-159,"y":84},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"scaleSize","scale":70,"speed":4}]},{"triggers":[{"ID":"overlapObject","objectID":19,"object2ID":1},{"ID":"clickArea","area":{"x":-20,"y":-23,"width":718,"height":440}},{"ID":"counterEqualsNumber","objectID":18,"counter":0}],"actions":[{"ID":"jumpToLocation","location":{"x":358,"y":175}},{"ID":"moveToLocation","location":{"x":752,"y":179},"speed":3}]}]},{"ID":8,"name":"clone","graphicID":233,"position":{"x":-120,"y":62},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"scaleSize","scale":70,"speed":4}]},{"triggers":[{"ID":"overlapObject","objectID":6,"object2ID":1},{"ID":"clickArea","area":{"x":-20,"y":-23,"width":718,"height":440}},{"ID":"counterEqualsNumber","objectID":18,"counter":0}],"actions":[{"ID":"jumpToLocation","location":{"x":358,"y":175}},{"ID":"moveToLocation","location":{"x":752,"y":179},"speed":3}]}]},{"ID":2,"name":"machine2","graphicID":235,"position":{"x":357,"y":167},"behaviours":[{"triggers":[{"ID":"clickArea","area":{"x":-24,"y":-29,"width":742,"height":462}},{"ID":"counterEqualsNumber","objectID":18,"counter":0}],"actions":[{"ID":"artPlay","frame":4,"frame2":1,"mode":"once","speed":2}]},{"triggers":[{"ID":"touchArea","objectID":8,"area":{"x":676,"y":83,"width":56,"height":108}}],"actions":[{"ID":"counterUp"}]},{"triggers":[{"ID":"counterEqualsNumber","objectID":2,"counter":5}],"actions":[{"ID":"gameWin"}]},{"triggers":[{"ID":"touchArea","objectID":24,"area":{"x":672,"y":47,"width":64,"height":232}}],"actions":[{"ID":"counterUp"}]},{"triggers":[{"ID":"touchArea","objectID":25,"area":{"x":668,"y":59,"width":52,"height":192}}],"actions":[{"ID":"counterUp"}]},{"triggers":[{"ID":"touchArea","objectID":26,"area":{"x":670,"y":109,"width":36,"height":170}}],"actions":[{"ID":"counterUp"}]},{"triggers":[{"ID":"touchArea","objectID":27,"area":{"x":662,"y":71,"width":60,"height":212}}],"actions":[{"ID":"counterUp"}]}]},{"ID":22,"name":"sheep5","graphicID":233,"position":{"x":0,"y":526},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"scaleSize","scale":80,"speed":4},{"ID":"jumpToLocation","location":{"x":-120,"y":260}}]},{"triggers":[{"ID":"timeRandom","time":56,"time2":63}],"actions":[{"ID":"moveToLocation","location":{"x":723,"y":258},"speed":3}]}],"boundingArea":{"x":1,"y":-3,"radius":8}},{"ID":21,"name":"sheep4","graphicID":233,"position":{"x":-30,"y":496},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"scaleSize","scale":80,"speed":4},{"ID":"jumpToLocation","location":{"x":-120,"y":260}}]},{"triggers":[{"ID":"timeRandom","time":41,"time2":49}],"actions":[{"ID":"moveToLocation","location":{"x":723,"y":258},"speed":3}]}],"boundingArea":{"x":1,"y":-3,"radius":8}},{"ID":20,"name":"sheep3","graphicID":233,"position":{"x":-60,"y":466},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"scaleSize","scale":80,"speed":4},{"ID":"jumpToLocation","location":{"x":-120,"y":260}}]},{"triggers":[{"ID":"timeRandom","time":27,"time2":35}],"actions":[{"ID":"moveToLocation","location":{"x":723,"y":258},"speed":3}]}],"boundingArea":{"x":1,"y":-3,"radius":8}},{"ID":19,"name":"sheep2","graphicID":233,"position":{"x":-90,"y":436},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"scaleSize","scale":80,"speed":4},{"ID":"jumpToLocation","location":{"x":-120,"y":260}}]},{"triggers":[{"ID":"timeRandom","time":12,"time2":20}],"actions":[{"ID":"moveToLocation","location":{"x":723,"y":258},"speed":3}]}],"boundingArea":{"x":1,"y":-3,"radius":8}},{"ID":6,"name":"sheep","graphicID":233,"position":{"x":-120,"y":406},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"scaleSize","scale":80,"speed":4},{"ID":"jumpToLocation","location":{"x":-120,"y":260}}]},{"triggers":[{"ID":"timeExact","time":0}],"actions":[{"ID":"moveToLocation","location":{"x":723,"y":258},"speed":3}]}],"boundingArea":{"x":1,"y":-3,"radius":8}},{"ID":1,"name":"machine","graphicID":235,"position":{"x":372,"y":273},"behaviours":[{"triggers":[{"ID":"clickArea","area":{"x":-36,"y":-37,"width":740,"height":482}},{"ID":"counterEqualsNumber","objectID":18,"counter":0}],"actions":[{"ID":"artPlay","frame":4,"frame2":1,"mode":"once","speed":2}]}],"boundingArea":{"x":-16,"y":-89,"width":26,"height":176}}],"graphics":[{"ID":236,"frameWidth":640,"frameHeight":390,"frameCount":1,"url":"http://s3.amazonaws.com/mbgfx/graphics/236/cloning_station.png?1354167805"},{"ID":237,"frameWidth":74,"frameHeight":95,"frameCount":1,"url":"http://s3.amazonaws.com/mbgfx/graphics/237/sheep_foetus.png?1354168108"},{"ID":234,"frameWidth":256,"frameHeight":77,"frameCount":3,"url":"http://s3.amazonaws.com/mbgfx/graphics/234/assembly_line.png?1354165899"},{"ID":233,"frameWidth":198,"frameHeight":155,"frameCount":1,"url":"http://s3.amazonaws.com/mbgfx/graphics/233/clone-sheep.png?1354164658"},{"ID":235,"frameWidth":199,"frameHeight":196,"frameCount":4,"url":"http://s3.amazonaws.com/mbgfx/graphics/235/clone_machine.png?1354167222"}]},
    "id" : 45
  },
  
  // Branch
  {
    "name" : "Branch",
    "data" : {"version":5,"title":"Plant the Branchlings","instructions":"Click on the branchlings when their roots reach the turf!","duration":5,"backgroundID":245,"gameObjects":[{"ID":11,"name":"cloud2","graphicID":246,"position":{"x":223,"y":61},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"moveInDirection","angle":"3.14","speed":0}]}]},{"ID":10,"name":"cloud","graphicID":246,"position":{"x":568,"y":51},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"moveInDirection","angle":"3.14","speed":0}]}]},{"ID":9,"name":"turf3","graphicID":244,"position":{"x":462,"y":323},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"scaleSize","scale":80,"speed":4}]}],"boundingArea":{"x":-17,"y":-2,"width":36,"height":16}},{"ID":7,"name":"bottom3","graphicID":244,"position":{"x":-41,"y":287},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"artToFrame","frame":2}]},{"triggers":[{"ID":"clickObject","objectID":5}],"actions":[{"ID":"jumpToObject","objectID":5,"offset":{"x":-2,"y":50}}]}],"boundingArea":{"x":1,"y":1,"radius":15}},{"ID":5,"name":"branchling3","graphicID":243,"position":{"x":501,"y":232},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"moveRoam","area":{"x":378,"y":203,"width":166,"height":180},"mode":"wiggle","speed":2},{"ID":"artPlay","frame":1,"frame2":2,"mode":"ping-pong","speed":2}]},{"triggers":[{"ID":"counterEqualsNumber","objectID":5,"counter":0},{"ID":"clickObject","objectID":5}],"actions":[{"ID":"counterUp"}]},{"triggers":[{"ID":"counterEqualsNumber","objectID":5,"counter":1},{"ID":"overlapObject","objectID":5,"object2ID":7}],"actions":[{"ID":"moveStop"},{"ID":"artToFrame","frame":5},{"ID":"counterUp"}]},{"triggers":[{"ID":"counterEqualsNumber","objectID":5,"counter":1},{"ID":"overlapObject","objectID":9,"object2ID":7}],"actions":[{"ID":"artPlay","frame":2,"frame2":4,"mode":"once","speed":2},{"ID":"counterUp"}]},{"triggers":[{"ID":"gameWasLost"},{"ID":"counterEqualsNumber","objectID":5,"counter":0}],"actions":[{"ID":"counterSet","counter":5},{"ID":"moveStop"},{"ID":"artToFrame","frame":5}]}],"boundingArea":{"x":1,"y":8,"radius":53}},{"ID":8,"name":"turf2","graphicID":244,"position":{"x":311,"y":201},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"scaleSize","scale":80,"speed":4}]},{"triggers":[{"ID":"touchObject","objectID":2,"object2ID":3}],"actions":[{"ID":"counterUp"}]}],"boundingArea":{"x":-14,"y":-3,"width":31,"height":17}},{"ID":6,"name":"bottom2","graphicID":244,"position":{"x":-71,"y":257},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"artToFrame","frame":2}]},{"triggers":[{"ID":"clickObject","objectID":4}],"actions":[{"ID":"jumpToObject","objectID":4,"offset":{"x":-2,"y":50}}]}],"boundingArea":{"x":1,"y":0,"radius":14}},{"ID":4,"name":"branchling2","graphicID":243,"position":{"x":316,"y":124},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"moveRoam","area":{"x":230,"y":57,"width":170,"height":210},"mode":"wiggle","speed":2},{"ID":"artPlay","frame":1,"frame2":2,"mode":"ping-pong","speed":2}]},{"triggers":[{"ID":"counterEqualsNumber","objectID":4,"counter":0},{"ID":"clickObject","objectID":4}],"actions":[{"ID":"counterUp"}]},{"triggers":[{"ID":"counterEqualsNumber","objectID":4,"counter":1},{"ID":"overlapObject","objectID":4,"object2ID":6}],"actions":[{"ID":"moveStop"},{"ID":"artToFrame","frame":5},{"ID":"counterUp"}]},{"triggers":[{"ID":"counterEqualsNumber","objectID":4,"counter":1},{"ID":"overlapObject","objectID":8,"object2ID":6}],"actions":[{"ID":"artPlay","frame":2,"frame2":4,"mode":"once","speed":2},{"ID":"counterUp"}]},{"triggers":[{"ID":"gameWasLost"},{"ID":"counterEqualsNumber","objectID":4,"counter":0}],"actions":[{"ID":"counterSet","counter":5},{"ID":"artToFrame","frame":5},{"ID":"moveStop"}]}],"boundingArea":{"x":1,"y":8,"radius":53}},{"ID":1,"name":"turf","graphicID":244,"position":{"x":118,"y":259},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"scaleSize","scale":80,"speed":4}]},{"triggers":[{"ID":"touchObject","objectID":1,"object2ID":3}],"actions":[{"ID":"counterUp"}]},{"triggers":[{"ID":"touchObject","objectID":8,"object2ID":6}],"actions":[{"ID":"counterUp"}]},{"triggers":[{"ID":"touchObject","objectID":9,"object2ID":7}],"actions":[{"ID":"counterUp"}]},{"triggers":[{"ID":"counterEqualsNumber","objectID":1,"counter":3}],"actions":[{"ID":"gameWin"}]}],"boundingArea":{"x":-15,"y":-2,"width":31,"height":16}},{"ID":3,"name":"bottom","graphicID":244,"position":{"x":-101,"y":227},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"artToFrame","frame":2}]},{"triggers":[{"ID":"clickObject","objectID":2}],"actions":[{"ID":"jumpToObject","objectID":2,"offset":{"x":-2,"y":50}}]}],"boundingArea":{"x":0,"y":1,"radius":14}},{"ID":2,"name":"branchling","graphicID":243,"position":{"x":87,"y":273},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"moveRoam","area":{"x":32,"y":133,"width":176,"height":202},"mode":"wiggle","speed":2},{"ID":"artPlay","frame":1,"frame2":2,"mode":"ping-pong","speed":2}]},{"triggers":[{"ID":"counterEqualsNumber","objectID":2,"counter":0},{"ID":"clickObject","objectID":2}],"actions":[{"ID":"counterUp"}]},{"triggers":[{"ID":"counterEqualsNumber","objectID":2,"counter":1},{"ID":"overlapObject","objectID":2,"object2ID":3}],"actions":[{"ID":"moveStop"},{"ID":"artToFrame","frame":5},{"ID":"counterUp"}]},{"triggers":[{"ID":"counterEqualsNumber","objectID":2,"counter":1},{"ID":"overlapObject","objectID":1,"object2ID":3}],"actions":[{"ID":"artPlay","frame":2,"frame2":4,"mode":"once","speed":2},{"ID":"counterUp"}]},{"triggers":[{"ID":"gameWasLost"},{"ID":"counterEqualsNumber","objectID":2,"counter":0}],"actions":[{"ID":"counterSet","counter":5},{"ID":"moveStop"},{"ID":"artToFrame","frame":5}]}],"boundingArea":{"x":1,"y":8,"radius":53}}],"graphics":[{"ID":245,"frameWidth":640,"frameHeight":390,"frameCount":1,"url":"http://s3.amazonaws.com/mbgfx/graphics/245/field.png?1354259354"},{"ID":246,"frameWidth":137,"frameHeight":78,"frameCount":1,"url":"http://s3.amazonaws.com/mbgfx/graphics/246/cloud.png?1354263330"},{"ID":244,"frameWidth":86,"frameHeight":57,"frameCount":1,"url":"http://s3.amazonaws.com/mbgfx/graphics/244/turf.png?1354258940"},{"ID":243,"frameWidth":128,"frameHeight":128,"frameCount":5,"url":"http://s3.amazonaws.com/mbgfx/graphics/243/branchling.png?1354258669"}]} ,
    "id" : 48
  },
  
  // Fork
  {
    "name" : "Fork",
    "data" : {"version":5,"title":"Fork for bacon","instructions":"Click on the arrows to navigate the farmer and try to catch all pigs","duration":15,"backgroundID":226,"gameObjects":[{"ID":16,"name":"dirndl_top","graphicID":229,"position":{"x":209,"y":374},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"artToFrame","frame":4}]}]},{"ID":13,"name":"grill","graphicID":228,"position":{"x":131,"y":341},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"counterSet","counter":5}]},{"triggers":[{"ID":"counterEqualsObject","objectID":13,"object2ID":6},{"ID":"counterEqualsObject","objectID":13,"object2ID":12},{"ID":"counterEqualsObject","objectID":13,"object2ID":15}],"actions":[{"ID":"gameWin"}]}]},{"ID":15,"name":"pig3","graphicID":224,"position":{"x":508,"y":289},"behaviours":[{"triggers":[{"ID":"timeRandom","time":14,"time2":30}],"actions":[{"ID":"moveAlongPath","path":[{"x":508,"y":289},{"x":509,"y":53},{"x":115,"y":51}],"mode":"ping-pong","speed":2}]},{"triggers":[{"ID":"touchArea","objectID":15,"area":{"x":491,"y":39,"width":30,"height":28}}],"actions":[{"ID":"artToFrame","frame":4}]},{"triggers":[{"ID":"touchArea","objectID":15,"area":{"x":495,"y":293,"width":30,"height":28}}],"actions":[{"ID":"artToFrame","frame":1}]},{"triggers":[{"ID":"touchObject","objectID":15,"object2ID":1}],"actions":[{"ID":"moveStop"},{"ID":"artToFrame","frame":5},{"ID":"counterSet","counter":5},{"ID":"jumpToLocation","location":{"x":154,"y":341}}]},{"triggers":[{"ID":"touchArea","objectID":15,"area":{"x":81,"y":47,"width":30,"height":28}}],"actions":[{"ID":"artToFrame","frame":2}]}],"boundingArea":{"x":-20,"y":-22,"width":37,"height":42}},{"ID":12,"name":"pig2","graphicID":224,"position":{"x":108,"y":75},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"artToFrame","frame":3},{"ID":"moveAlongPath","path":[{"x":108,"y":75},{"x":109,"y":209},{"x":183,"y":209},{"x":39,"y":215},{"x":43,"y":67},{"x":313,"y":67},{"x":313,"y":299}],"mode":"circular","speed":2}]},{"triggers":[{"ID":"touchObject","objectID":12,"object2ID":7}],"actions":[{"ID":"moveInDirection","angle":"1.57","speed":1}]},{"triggers":[{"ID":"touchArea","objectID":12,"area":{"x":91,"y":203,"width":32,"height":34}},{"ID":"counterEqualsNumber","objectID":12,"counter":0}],"actions":[{"ID":"artToFrame","frame":2}]},{"triggers":[{"ID":"touchArea","objectID":12,"area":{"x":193,"y":189,"width":32,"height":34}}],"actions":[{"ID":"artToFrame","frame":4},{"ID":"counterUp"}]},{"triggers":[{"ID":"touchArea","objectID":12,"area":{"x":9,"y":195,"width":32,"height":34}},{"ID":"counterEqualsNumber","objectID":12,"counter":1}],"actions":[{"ID":"artToFrame","frame":1}]},{"triggers":[{"ID":"touchArea","objectID":12,"area":{"x":27,"y":35,"width":32,"height":34}},{"ID":"counterGreaterNumber","objectID":12,"counter":0}],"actions":[{"ID":"artToFrame","frame":2}]},{"triggers":[{"ID":"touchArea","objectID":12,"area":{"x":317,"y":49,"width":32,"height":34}},{"ID":"counterGreaterNumber","objectID":12,"counter":0}],"actions":[{"ID":"artToFrame","frame":3}]},{"triggers":[{"ID":"touchArea","objectID":12,"area":{"x":293,"y":171,"width":32,"height":34}}],"actions":[{"ID":"moveInDirection","angle":"1.57","speed":2}]},{"triggers":[{"ID":"touchObject","objectID":12,"object2ID":1}],"actions":[{"ID":"moveStop"},{"ID":"artToFrame","frame":5},{"ID":"counterSet","counter":5},{"ID":"jumpToLocation","location":{"x":130,"y":339}}]},{"triggers":[{"ID":"touchArea","objectID":12,"area":{"x":303,"y":267,"width":32,"height":34}}],"actions":[{"ID":"moveInDirection","angle":"0.01","speed":2},{"ID":"artToFrame","frame":2}]}],"boundingArea":{"x":-21,"y":-21,"width":42,"height":40}},{"ID":6,"name":"pig","graphicID":224,"position":{"x":315,"y":202},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"moveToLocation","location":{"x":311,"y":173},"speed":2}]},{"triggers":[{"ID":"touchObject","objectID":6,"object2ID":1}],"actions":[{"ID":"moveStop"},{"ID":"artToFrame","frame":5},{"ID":"counterSet","counter":5},{"ID":"jumpToLocation","location":{"x":111,"y":340}}]},{"triggers":[{"ID":"touchObject","objectID":6,"object2ID":7}],"actions":[{"ID":"moveInLocation","location":{"x":309,"y":85},"speed":1}]},{"triggers":[{"ID":"touchArea","objectID":6,"area":{"x":291,"y":31,"width":32,"height":34}}],"actions":[{"ID":"artToFrame","frame":2},{"ID":"moveInDirection","angle":"0.00","speed":2}]},{"triggers":[{"ID":"touchArea","objectID":6,"area":{"x":509,"y":63,"width":32,"height":34}}],"actions":[{"ID":"artToFrame","frame":3},{"ID":"moveInDirection","angle":"1.57","speed":2}]},{"triggers":[{"ID":"touchArea","objectID":6,"area":{"x":447,"y":179,"width":112,"height":38}}],"actions":[{"ID":"artToFrame","frame":3},{"ID":"moveInDirection","angle":"1.57","speed":3}]},{"triggers":[{"ID":"touchArea","objectID":6,"area":{"x":505,"y":347,"width":46,"height":34}}],"actions":[{"ID":"artToFrame","frame":4},{"ID":"moveInDirection","angle":"3.14","speed":2}]},{"triggers":[{"ID":"touchArea","objectID":6,"area":{"x":233,"y":329,"width":46,"height":34}}],"actions":[{"ID":"artToFrame","frame":2},{"ID":"moveInDirection","angle":"0.00","speed":2}]}],"boundingArea":{"x":-19,"y":-22,"width":38,"height":44}},{"ID":5,"name":"arr_left","graphicID":202,"position":{"x":525,"y":323},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"artToFrame","frame":7}]}]},{"ID":4,"name":"arr_down","graphicID":202,"position":{"x":560,"y":358},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"artToFrame","frame":5}]}]},{"ID":3,"name":"arr_right","graphicID":202,"position":{"x":596,"y":323},"behaviours":[{"triggers":[{"ID":"gameStart"}],"actions":[{"ID":"artToFrame","frame":3}]}]},{"ID":2,"name":"arr_up","graphicID":202,"position":{"x":560,"y":287},"behaviours":[]},{"ID":7,"name":"tree","graphicID":227,"position":{"x":310,"y":140},"behaviours":[],"boundingArea":{"x":-83,"y":-13,"width":163,"height":25}},{"ID":1,"name":"peasant","graphicID":225,"position":{"x":316,"y":342},"behaviours":[{"triggers":[{"ID":"clickObject","objectID":2}],"actions":[{"ID":"moveInDirection","angle":"-1.57","speed":2},{"ID":"artToFrame","frame":2}]},{"triggers":[{"ID":"clickObject","objectID":3}],"actions":[{"ID":"moveInDirection","angle":"0.00","speed":2},{"ID":"artToFrame","frame":3}]},{"triggers":[{"ID":"clickObject","objectID":5}],"actions":[{"ID":"moveInDirection","angle":"3.14","speed":2},{"ID":"artToFrame","frame":5}]},{"triggers":[{"ID":"clickObject","objectID":4}],"actions":[{"ID":"moveInDirection","angle":"1.57","speed":2},{"ID":"artToFrame","frame":4}]},{"triggers":[{"ID":"touchObject","objectID":1,"object2ID":13}],"actions":[{"ID":"moveStop"}]}],"boundingArea":{"x":-11,"y":-27,"width":26,"height":47}}],"graphics":[{"ID":226,"frameWidth":640,"frameHeight":390,"frameCount":1,"url":"http://s3.amazonaws.com/mbgfx/graphics/226/field_top.png?1353939074"},{"ID":229,"frameWidth":62,"frameHeight":62,"frameCount":4,"url":"http://s3.amazonaws.com/mbgfx/graphics/229/dirndl_top.png?1353961566"},{"ID":228,"frameWidth":81,"frameHeight":40,"frameCount":1,"url":"http://s3.amazonaws.com/mbgfx/graphics/228/grill.png?1353958607"},{"ID":224,"frameWidth":52,"frameHeight":52,"frameCount":5,"url":"http://s3.amazonaws.com/mbgfx/graphics/224/pig.png?1353933166"},{"ID":202,"frameWidth":32,"frameHeight":32,"frameCount":8,"url":"http://s3.amazonaws.com/mbgfx/graphics/202/arrows_red.png?1352026777"},{"ID":227,"frameWidth":171,"frameHeight":90,"frameCount":1,"url":"http://s3.amazonaws.com/mbgfx/graphics/227/tree.png?1353956621"},{"ID":225,"frameWidth":66,"frameHeight":66,"frameCount":5,"url":"http://s3.amazonaws.com/mbgfx/graphics/225/peasant.png?1353935894"}]},
    "id" : 47
  }
  
];