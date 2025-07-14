function verificar() {
            var data = new Date()
            var ano = data.getFullYear()
            var resano = document.getElementById('number')
            var res = document.getElementById('res')
            if (resano.value.length == 0 || resano.value > ano) {
                window.alert('[ERRO] Verifique os dados e tente novamente!')
            } else {
                var fsex = document.getElementsByName('genero')
                var idade = ano - Number(resano.value)
                var genero = ''
                var img = document.createElement('img')
                img.setAttribute('id', 'img')
                if (fsex[0].checked) {
                    genero = 'Homem'
                    if (idade >= 0 && idade < 13){
                        img.setAttribute('src',  'criança-m-img.jpg')
                    } else if (idade < 18) {
                        // Adolecente
                    } else if (idade < 30) {
                        // Jovem
                    } else if (idade < 60) {
                        // Adulto
                    } else {
                        // idoso
                    }
                } else if (fsex[1].checked) {
                    genero = 'Mulher'
                    if (idade >= 0 && idade < 13){
                        // Criança
                    } else if (idade < 18) {
                        // Adolecente
                    } else if (idade < 30) {
                        // Jovem
                    } else if (idade < 60) {
                        // Adulto
                    } else {
                        // idoso
                    }
                }
                res.style.textAlign = 'center'
                res.innerHTML = `Detectamos ${genero} com idade ${idade}`
            }
        }