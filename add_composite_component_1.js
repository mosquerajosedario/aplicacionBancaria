
	$("#addCompositeComponent").click(function () {
			
		var newcompositeComponent = createCompositeComponentJson();
		var new_measurement_unit = create_measurement_unitJson();
		var newMaterial = createMaterialJson();
		var newSimpleComponent_1 = create_simple_componentsJson();
		var newSimpleComponent_2 = create_simple_componentsJson();
		
		newcompositeComponent.name = 'nombreCc';
		newcompositeComponent.description = 'descriptionCc';
		newcompositeComponent.consumption = 'comsuptionCc';

		$.getJSON("https://raw.githubusercontent.com/mosquerajosedario/aplicacionBancaria/github-mosquerajosedario-jvalor/jsonUnit", function( jsonData ){

			new_measurement_unit.mu_id = jsonData.mu_id
			new_measurement_unit.name = jsonData.name
			new_measurement_unit.description = jsonData.description

			newcompositeComponent.measurement_unit = new_measurement_unit;
			
		});

		newcompositeComponent.detail = 'detailCc';


		$.getJSON("https://raw.githubusercontent.com/mosquerajosedario/aplicacionBancaria/github-mosquerajosedario-jvalor/JsonMaterial", function( jsonData ){

			newMaterial.object_id = jsonData.object_id
			newMaterial.class_name = jsonData.class_name
			newMaterial.creation_timestamp = jsonData.creation_timestamp
			newMaterial.name = jsonData.name
			newMaterial.status = jsonData.status
			newMaterial.description = jsonData.description
			
			newcompositeComponent.material = newMaterial
		});

		$.getJSON("https://raw.githubusercontent.com/mosquerajosedario/aplicacionBancaria/github-mosquerajosedario-jvalor/jsonComponent4", function( jsonData){

			newSimpleComponent_1.object_id = jsonData.object_id
			newSimpleComponent_1.class_name = jsonData.class_name
			newSimpleComponent_1.creation_timestamp = jsonData.creation_timestamp
			newSimpleComponent_1.name = jsonData.name
			newSimpleComponent_1.status = jsonData.status
			newSimpleComponent_1.description = jsonData.description
			newSimpleComponent_1.consumption = jsonData.consumption
			
			newSimpleComponent_1.measurement_unit.mu_id = jsonData.measurement_unit.mu_id
			newSimpleComponent_1.measurement_unit.name = jsonData.measurement_unit.name
			newSimpleComponent_1.measurement_unit.description = jsonData.measurement_unit.description

			newSimpleComponent_1.material.object_id = jsonData.material.object_id
			newSimpleComponent_1.material.class_name = jsonData.material.class_name
			newSimpleComponent_1.material.creation_timestamp = jsonData.material.creation_timestamp
			newSimpleComponent_1.material.name = jsonData.material.name
			newSimpleComponent_1.material.status = jsonData.material.status
			newSimpleComponent_1.material.description = jsonData.material.description

			newSimpleComponent_1.detail = jsonData.detail
		});

		$.getJSON("https://raw.githubusercontent.com/mosquerajosedario/aplicacionBancaria/github-mosquerajosedario-jvalor/jsonComponent6", function( jsonData){
			
			newSimpleComponent_2.object_id = jsonData.object_id
			newSimpleComponent_2.class_name = jsonData.class_name
			newSimpleComponent_2.creation_timestamp = jsonData.creation_timestamp
			newSimpleComponent_2.name = jsonData.name
			newSimpleComponent_2.status = jsonData.status
			newSimpleComponent_2.description = jsonData.description
			newSimpleComponent_2.consumption = jsonData.consumption
			
			newSimpleComponent_2.measurement_unit.mu_id = jsonData.measurement_unit.mu_id
			newSimpleComponent_2.measurement_unit.name = jsonData.measurement_unit.name
			newSimpleComponent_2.measurement_unit.description = jsonData.measurement_unit.description

			newSimpleComponent_2.material.object_id = jsonData.material.object_id
			newSimpleComponent_2.material.class_name = jsonData.material.class_name
			newSimpleComponent_2.material.creation_timestamp = jsonData.material.creation_timestamp
			newSimpleComponent_2.material.name = jsonData.material.name
			newSimpleComponent_2.material.status = jsonData.material.status
			newSimpleComponent_2.material.description = jsonData.material.description

			newSimpleComponent_2.detail = jsonData.detail

			jsonArraynewSimpleComponent_1 = [newSimpleComponent_1]
			jsonArraynewSimpleComponent_2 = [newSimpleComponent_2]

			jsonArraynewSimpleComponent_1 = jsonArraynewSimpleComponent_1.concat(jsonArraynewSimpleComponent_2);

			newcompositeComponent.simple_components = jsonArraynewSimpleComponent_1

			var jsonFinal = JSON.stringify(newcompositeComponent)
			$("#despuesDelTitulo").after(
				'<p>' 
					+ jsonFinal
				+'</p>'
			);
		});
});


