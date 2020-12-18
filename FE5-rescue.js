(function() {
var alias1 = FusionControl.isFusionAllowed;
FusionControl.isFusionAllowed = function (unit, targetUnit, fusionData) {

// 既存のフュージョン設定をコメントアウトで無効化
//		if (!fusionData.compareUnitCapacity(unit, targetUnit)) {
//			return false;
//		}

	var	moveTypeId = unit.getClass().getClassType().getMoveTypeId();
	var	targetMoveTypeId = targetUnit.getClass().getClassType().getMoveTypeId();
	
	// 移動タイプIDが2は騎馬、3は大空
	// if(moveTypeId==2 || moveTypeId==3){
		// var genderId;
		// var refList = unit.getClass().getRaceReferenceList();
		// var count = refList.getTypeCount();
			
		// for (i = 0; i < count; i++) {
			// data = refList.getTypeData(i);
			// raceId = data.getId();
			// // 種族IDが0は男性
			// if (raceId === 0) {
				// // genderId = 0;
			// // 種族IDが1は女性
			// }else if(raceId === 1){
				// // genderId = 1;
			// }
		// }

		// NO SEXIST EMBLEM HERE BAD AND WRONG
		// if(genderId==0){
			// if(!(25 - ParamBonus.getBld(unit) >= ParamBonus.getBld(targetUnit))){
				// return false;
			// }
		// }else{
			// if(!(20 - ParamBonus.getBld(unit) >= ParamBonus.getBld(targetUnit))){
				// return false;
			// }
		// }
	// }else{
		// if(!((ParamBonus.getBld(unit)-1) >= ParamBonus.getBld(targetUnit))){
			// return false;
		// }
	// }
	var a, b;
	if (moveTypeId==2 || moveTypeId==3) {
		a = 20;
	} else {
		a = ParamGroup.getClassUnitValue(unit, ParamType.BLD);
	}
	if (targetMoveTypeId==2 || targetMoveTypeId==3) {
		b = 20;
	} else {
		b = ParamGroup.getClassUnitValue(targetUnit, ParamType.BLD);
	}
	if (a <= b) {
		return false;
	}
	if (!fusionData.isSrcCondition(unit)) {
		return false;
	}
	
	if (!fusionData.isDestCondition(targetUnit)) {
		return false;
	}
	
	return true;
};

})(); 