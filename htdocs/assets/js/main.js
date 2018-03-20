$(document).ready(function(){

	$.ajax({
	  url: 'data.json',
	  dataType: "JSON",
	  success: function(data) {
	  	$('#link_noticia').attr('href', data.section[0].data[0].url);
	  	$('.noticia_type').html(data.section[0].data[0].label);
	  	$('.noticia_title').html(data.section[0].data[0].title);
	  	$('.noticia_description').html(data.section[0].data[0].description);
	  	$('#img_noticia').attr('src','assets/media/'+data.section[0].data[0].image);

	  	//noticia em destaque 2
	  	$('#img_noticia2').attr('src', data.section[0].data[1].image);
	  	$('.noticia2_type').html(data.section[0].data[1].label);
	  	$('.noticia2_title').html(data.section[0].data[1].title);
	  	$('.noticia2_description').html(data.section[0].data[1].description);
	  	$('#img_noticia2').attr('src','assets/media/'+data.section[0].data[1].image);

	  	//destaque
	  	/*$('.destaque_url').html(data.section[0].data[3].url);*/
	  	$('#link_comportamento').attr('href', data.section[0].data[2].url);
	  	$('.comportamento_link').html(data.section[0].data[2].url);
	  	$('.comportamento_type').html(data.section[0].data[2].label);
	  	$('.comportamento_title').html(data.section[0].data[2].title);
	  	$('.comportamento_description').html(data.section[0].data[2].description);
	  	$('#img_comportamento').attr('src','assets/media/'+data.section[0].data[2].image);

	  	//coluna_col_estido
	  	$('#link_estilo').attr('href', data.section[0].data[3].url);
	  	$('.estilo_link').html(data.section[0].data[3].url);
	  	$('.estilo_type').html(data.section[0].data[3].label);
	  	$('.estilo_title').html(data.section[0].data[3].title);
	  	$('.estilo_description').html(data.section[0].data[3].description);
	  	$('#img_estilo').attr('src','assets/media/'+data.section[0].data[3].image);

	  	//mini-noticias
	  	//rural
	  	$('#link_rural').attr('href', data.section[0].data[4].url);
	  	$('.rural_type').html(data.section[0].data[4].label);
	  	$('.rural_title').html(data.section[0].data[4].title);
	  	$('.rural_description').html(data.section[0].data[4].description);
	  	$('#img_rural').attr('src','assets/media/'+data.section[0].data[4].image);

	  	//esporte
	  	//rio2016
	  	$('#link_esporte').attr('href', data.section[0].data[5].url);
	  	$('.esporte_type').html(data.section[0].data[5].label);
	  	$('.esporte_title').html(data.section[0].data[5].title);
	  	$('.esporte_description').html(data.section[0].data[5].description);
		$('#img_esporte').attr('src','assets/media/'+data.section[0].data[5].image);	  	


	  	//educacao
	  	$('#link_educacao').attr('href', data.section[0].data[6].url);
	  	$('.educacao_type').html(data.section[0].data[6].label);
	  	$('.educacao_title').html(data.section[0].data[6].title);
	  	$('.educacao_description').html(data.section[0].data[6].description);
	  	$('#img_educacao').attr('src','assets/media/'+data.section[0].data[6].image);	  	

	  	//ecologia
	  	$('#link_ecologia').attr('href', data.section[0].data[7].url);
	  	$('.ecologia_type').html(data.section[0].data[7].label);
	  	$('.ecologia_title').html(data.section[0].data[7].title);
	  	$('.ecologia_description').html(data.section[0].data[7].description);
	  	$('#img_ecologia').attr('src','assets/media/'+data.section[0].data[7].image);	  	

	  	//Brasil
	  	//type
	  	$('#section_name_brasil').html(data.section[1].name);

	  	//natureza
	  	$('#link_natureza').attr('href', data.section[1].data[0].url);
	  	$('.natureza_type').html(data.section[1].data[0].label);
	  	$('.natureza_title').html(data.section[1].data[0].title);
	  	$('.natureza_description').html(data.section[1].data[0].description);
	  	$('#img_natureza').attr('src','assets/media/'+data.section[1].data[0].image);	  	

	  	//cidades
	  	$('#link_cidades').attr('href', data.section[1].data[1].url);
	  	$('.cidades_type').html(data.section[1].data[1].label);
	  	$('.cidades_title').html(data.section[1].data[1].title);
	  	$('.cidades_description').html(data.section[1].data[1].description);
	  	$('#img_cidades').attr('src','assets/media/'+data.section[1].data[1].image);	  	

	  	
	  	//MUNDO

	  	//MUNDO_EUA
	  	$('#link_mundo').attr('href', data.section[2].data[0].url);
	  	$('.mundo_type').html(data.section[2].data[0].label);
	  	$('.mundo_title').html(data.section[2].data[0].title);
	  	$('.mundo_description').html(data.section[2].data[0].description);
	  	$('#img_mundo').attr('src','assets/media/'+data.section[2].data[0].image);	  	

	  	//MUNDO_TURISMO
	  	$('#link_turismo').attr('href', data.section[2].data[1].url);
	  	$('.turismo_type').html(data.section[2].data[1].label);
	  	$('.turismo_title').html(data.section[2].data[1].title);
	  	$('.turismo_description').html(data.section[2].data[1].description);
	  	$('#img_turismo').attr('src','assets/media/'+data.section[2].data[1].image);

	  	//type
	  	$('#section_name_mundo').html(data.section[2].name);
	  	//brasil_feriado
	  	$('#link_feriado').attr('href', data.section[1].data[2].url);
	  	$('.feriado_type').html(data.section[1].data[2].label);
	  	$('.feriado_title').html(data.section[1].data[2].title);
	  	$('.feriado_description').html(data.section[1].data[2].description);
	  	$('#img_feriado').attr('src','assets/media/'+data.section[1].data[2].image);

	  	//brasil_agricultura
	  	$('#link_agricultura').attr('href', data.section[1].data[2].url);
	  	$('.agricultura_type').html(data.section[1].data[3].label);
	  	$('.agricultura_title').html(data.section[1].data[3].title);
	  	$('.agricultura_description').html(data.section[1].data[3].description);
	  	$('#img_agricultura').attr('src','assets/media/'+data.section[1].data[3].image);

	  	//mundo_internacional
	  	$('#link_internacional').attr('href', data.section[2].data[2].url);
	  	$('.internacional_type').html(data.section[2].data[2].label);
	  	$('.internacional_title').html(data.section[2].data[2].title);
	  	$('.internacional_description').html(data.section[2].data[2].description);
	  	$('#img_internacional').attr('src','assets/media/'+data.section[2].data[2].image);

	  	//mundo_onu
	  	$('#link_onu').attr('href', data.section[2].data[3].url);
	  	$('.onu_type').html(data.section[2].data[3].label);
	  	$('.onu_title').html(data.section[2].data[3].title);
	  	$('.onu_description').html(data.section[2].data[3].description);
	  	$('#img_onu').attr('src','assets/media/'+data.section[2].data[3].image);





	  }
	});

 });