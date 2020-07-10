$(function(){
	$('.produto').addClass('produtoBase');
	$('.pedidos').addClass('pedidosCase');
	$('.pedidosLado1').addClass('pedidosLado1Case');
	$('.pedidosLado2').addClass('pedidosLado2Case');
	$('.liHome').css('color','yellow');
	$('.tela img').eq(0).fadeIn();

	var somaTotal = 0.00;

	valorTotal.innerHTML = somaTotal.toFixed(2).replace('.',',');

	fechar();
	function fechar(){
		var el= $('body,.liPedidos');
		el.click(function(){
			$('#mobile').fadeOut();
		})

	}
	$('.menu-mobile').click(function(e){
        $('#mobile').fadeToggle('fast');
        e.stopPropagation();
    });

	mostrarPlacas();

	function mostrarPlacas(){
		$('#placa1').fadeIn(500,function(){
			$('#placa2').fadeIn(500,function(){
				$('#placa3').fadeIn(500,function(){
					$('#placa4').fadeIn(500);
				});
			});
		});
	}

	////////////////////////////////////////////////////////

	var indiceAtual = 0;
	var way = 'right';

	$('.seta-direita').click(function(){
		clearInterval(tempo);
		cont();
		mudarSlide();
	});


	$('.seta-esquerda').click(function(){
		way = 'left';
		clearInterval(tempo);
		cont();
		mudarSlide();
	});



	$('.ball').click(function(){
		el = $(this).index();
		indiceAtual = el-1;
		clearInterval(tempo);
		cont();
		mudarSlide();
	});

	
	function mudarSlide(){
		//i = indiceAtual;

		if (way==='right'){indiceAtual++;};
		if (way==='left'){indiceAtual--;};
		if (indiceAtual==5 || indiceAtual==6){indiceAtual=0;};
		if (indiceAtual==-1 || indiceAtual==-2){indiceAtual=4;};
		$('.tela img').fadeOut(2000);
		$('.ball').css('background-color','');
		$('.tela img').eq(indiceAtual).fadeIn(2000);
		$('.ball').eq(indiceAtual).css('background-color','rgb(50,50,50)');
		way = 'right';
	}

	function cont(){
		tempo = setInterval(mudarSlide,4000);
	}

	cont();


	esconderDetalhes();
	function esconderDetalhes(){
		var xl= $('body,.prod');
		xl.click(function(){
			$('.detalhes').fadeOut();
		})
	}


	$('.prod').click(function(f){
		document.getElementsByClassName('detalhes')[this.name].style.display='block';
		f.stopPropagation();
	})


	var mostrar = 1;

	$('.ball-comentarios').click(function(){
		mostrar = $(this).index();
		clearInterval(time);
		clock();
		mudarComentarios();
	});

	function mudarComentarios(){
		if (mostrar==2){mostrar=0};
		for (var b = 0; b <= 1; b++) {
			$('.mostrar-comentarios').css('display','noneS');
			$('.ball-comentarios').css('backgroundColor','rgba(0,0,0,.5)')
		}
		document.getElementsByClassName('mostrar-comentarios')[mostrar].style.display='block';
		document.getElementsByClassName('ball-comentarios')[mostrar].style.backgroundColor='lightgray';
		mostrar++;
	};

	function clock(){
		time = setInterval(mudarComentarios,10000);
	}

	clock();


////////////////////////COR DA LI MENU/////////////////////////


	$(window).scroll(function(){
		$('.sessao').each(function(){
			var windowOffy = $(window).scrollTop();
			var windowHeight = $(window).height();
			var elOffy = $(this).offset().top;

			if (elOffy+150 < (windowOffy + windowHeight) &&
				elOffy+150+$(this).height() > windowOffy) {
					var target = $(this).attr('target');
					$('.liColor').css('color','');
					$('.li'+target).css('color','yellow');
			}
		});
	});


	$('.liHome').click(function(){
		window.scrollTo(0,0);

	})

	$('.liCardapio').click(function(){
		var screenWidth = $('.banner').width();
		if (screenWidth <= 655) {
			window.scrollTo(0,1300)
		}
		else{
			window.scrollTo(0,1222);
		}
	})

	$('.liContatos').click(function(){
		var screenWidth = $('.banner').width();

		if (screenWidth <= 992) {	
			if (screenWidth <= 685) {
				window.scrollTo(0,5840);
			}
			else{
				window.scrollTo(0,3860)
			}
		}

		else{
			window.scrollTo(0,2850);
		}
	});

//////////////////////////////////////////////////////////////
	
	abrirPedidos();
	fecharPedidos();


	function abrirPedidos(){
		$('.liPedidos').click(function(m){
			if(document.getElementsByClassName('pedidos')[0].id === 'fechado'){ 
				$('.pedidos').fadeIn();
				document.getElementsByClassName('pedidos')[0].id = 'aberto';
				$('.superContainer').addClass('superCase1');
				$('.superCase1').removeClass('superContainer');
				$('.produto').removeClass('produtoBase');
				$('.produto').addClass('produtoBase1');
			}

			else if(document.getElementsByClassName('pedidos')[0].id === 'aberto'){ 
				$('.pedidos').fadeOut();
				document.getElementsByClassName('pedidos')[0].id = 'fechado';
				verificar();
			}
			m.stopPropagation();
		})
	}

	function fecharPedidos(){
		var elemento= $('body,.menu-mobile');

		elemento.click(function(){
			$('.pedidos').fadeOut();
			verificar();
		})

		$('.adicionar').click(function(m){
			m.stopPropagation();
		})

		$('.pedidos').click(function(m){
			m.stopPropagation();
		})
	}

	function verificar(){
		document.getElementsByClassName('pedidos')[0].id = 'fechado';
		$('.excluir').fadeIn('fast');
		$('.superCase1').addClass('superContainer');
		$('.superContainer').removeClass('superCase1');
		$('.produto').removeClass('produtoBase1');
		$('.produto').addClass('produtoBase');
		$('.pedidos').addClass('pedidosCase');
		$('.pedidos').removeClass('pedidosCase1');
		$('.pedidosLado1').addClass('pedidosLado1Case');
		$('.pedidosLado1').removeClass('pedidosLado1Case1');
		$('.pedidosLado1').removeClass('pedidosLado1Case2');
		$('.pedidosLado2').addClass('pedidosLado2Case');
		$('.pedidosLado2').removeClass('pedidosLado2Case1');
		$('.pedidosLado2').removeClass('pedidosLado2Case2');
		$('.botaoContinuar').removeClass('botaoContinuarCase2');
	}

	var verificarContinuar = 1;

	$('.botaoContinuar').click(function(){
		clickContinuar();
	});

})
function clickContinuar(){
	$('.excluir').fadeOut('fast');
	if (verificarContinuar == 0) {
		if ($('body').width() <= 685) {
			$('.pedidosLado1').addClass('pedidosLado1Case1');
			$('.pedidosLado2').addClass('pedidosLado2Case1');
		}
		else{
			$('.pedidos').addClass('pedidosCase1').removeClass('pedidosCase');
			$('.pedidosLado1').addClass('pedidosLado1Case2').removeClass('pedidosLado1Case');
			$('.pedidosLado2').addClass('pedidosLado2Case2').removeClass('pedidosLado2Case');
			$('.botaoContinuar').addClass('botaoContinuarCase2');
		}
	}
}

$('.botaoFinalizar').click(function(){
	alert('PEDIDO REALIZADO COM SUCESSO! OBRIGADO')

})

function addItem(b){
	verificarContinuar = 0;
	setTimeout(function(){ 
		$('.liPedidos').removeClass('piscar');
		$('#marcarMenu').removeClass('bola');
		document.getElementById(b.id).style.backgroundColor='white';
		document.getElementsByClassName('qtd')[b.id].style.backgroundColor='white';
		setTimeout(function(){
			$('.liPedidos').addClass('piscar');
			$('#marcarMenu').addClass('bola');
			document.getElementById(b.id).style.backgroundColor='green';
			document.getElementsByClassName('qtd')[b.id].style.backgroundColor='rgba(255,255,255,.1)';
		},300);
	},100);
	var addNomeProd = $('.descricao-produto').find('h3').eq(b.id).text();
	var addPrecoProd = $('.descricao-produto').find('h4').eq(b.id).text();
	var valor = $('.descricao-produto').find('span').eq(b.id).text();
	var addQtd = document.getElementsByClassName('qtd')[b.id].value;
	var valorTotal = document.getElementById('valorTotal');

	if (addQtd == '') {addQtd = 1;};	

	var soma = parseInt(addQtd) * parseFloat(valor.replace(',','.'));
	var adicionar = document.getElementById('addItens');
	var f = 'maisItem'+b.id;
	var w = 'maisValoritem'+b.id;
	var maisQtd = document.getElementById(f);
	var maisPreco = document.getElementById(w);


	if (maisQtd !== null) {
		var mais = parseInt(maisQtd.innerHTML) + parseInt(addQtd);
		maisQtd.innerHTML = mais;

		var soma = mais * parseFloat(valor.replace(',','.'));
		maisPreco.innerHTML = soma.toFixed(2).replace('.',',');

		somaTotal = parseFloat(valorTotal.innerHTML.replace(',','.')) + addQtd*parseFloat(valor.replace(',','.'));
		valorTotal.innerHTML = somaTotal.toFixed(2).replace('.',',');

	}

	else{
		adicionar.innerHTML += '<div class="wraperItem" id="item'+b.id+'"><div class="qtdItem" id="maisItem'+b.id+'">'+addQtd+'</div><div class="nomeItem">'
		+addNomeProd+'</div><div class="precoItem">R$<span  id="maisValoritem'+b.id+'">'+soma.toFixed(2).replace('.',',')+'</span></div><div onclick="excluirItem(this)" class="excluir" id="item'+b.id+'">x</div></div>';	

		somaTotal = parseFloat(valorTotal.innerHTML.replace(',','.')) + soma;
		valorTotal.innerHTML = somaTotal.toFixed(2).replace('.',',');
	}
	

	$("input[type='number']").val('');
	
	$('.btn1').css('opacity','1');		
}

function excluirItem(y){
	var excluir = document.getElementById(y.id);
	var menos = document.getElementById('maisValor'+y.id);
	var menosValor = parseFloat(menos.innerHTML.replace(',','.'));

	somaTotal = parseFloat(valorTotal.innerHTML.replace(',','.')) - menosValor;
	valorTotal.innerHTML = somaTotal.toFixed(2).replace('.',',');

	excluir.parentNode.removeChild(excluir);

	if (valorTotal.innerHTML==='0,00') {
		$('.liPedidos').removeClass('piscar');
		$('#marcarMenu').removeClass('bola');
		$('.botaoContinuar').css('opacity','0.4');	
		verificarContinuar = 1;
	}

}