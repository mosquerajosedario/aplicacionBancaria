function createMaterialJson() {
	var material = {
		"object_id":null,
		"class_name":null,
		"creation_timestamp":null,
		"name":null,
		"status":null,
		"description":null
	}
	return material;
}

function create_measurement_unitJson() {
	var measurement_unit = {
		"mu_id":null,
		"name":null,
		"description":null
	}
	return measurement_unit;
}

function create_simple_componentsJson() {
	material = createMaterialJson();
	measurement_unit = create_measurement_unitJson();
	
	var simple_components = {
		"object_id":null,
		"class_name":null,
		"creation_timestamp":null,
		"name":null,
		"status":null,
		"description":null,
		"consumption":null,
		"measurement_unit":measurement_unit,
		"material":material,
		"detail":null
	}
	return simple_components;
}


function createCompositeComponentJson(){
	var compositeComponent = {
		"object_id":null,
		"class_name":null,
		"creation_timestamp":null,
		"name":null,
		"status":null,
		"description":null,
		"consumption":null,
		"measurement_unit":null,
		"detail":null,
		"material":null,
		"simple_components":null
	}
	return compositeComponent;
}