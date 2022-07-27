<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>atividade 2</title>
</head>
<body>
    <?php 

    $arquivo = file('dados.txt');

    $time = [
        ['times' => 'Liverpool',
        'titulos' => '50',
        'estadio' => 'Anfield',
        'pais' => 'ENG'
        ],
        ['times' => 'Barcelona',
        'titulos' => '50',
        'estadio' => 'Camp Nou',
        'pais' => 'ESP'
        ],
        ['times' => 'Milan',
        'titulos' => '50',
        'estadio' => 'San Siro',
        'pais' => 'ITA'
        ],
        ['times' => 'Manchester United',
        'titulos' => '50',
        'estadio' => 'Old Trafford',
        'pais' => 'ENG'
        ],
        ['times' => 'Real Madrid',
        'titulos' => '50',
        'estadio' => 'Santiago Bernabéu',
        'pais' => 'ESP'
        ],
        ['times' => 'Chelsea',
        'titulos' => '50',
        'estadio' => 'Stamford Bridge',
        'pais' => 'ENG'
        ],
        ['times' => 'Inter de Milão',
        'titulos' => '50',
        'estadio' => 'Giuseppe Meazza',
        'pais' => 'ITA'
        ],
        ['times' => 'Atlético de Madrid',
        'titulos' => '50',
        'estadio' => 'Wanda Metropolitano',
        'pais' => 'ESP'
        ],
        ['times' => 'Juventus',
        'titulos' => '50',
        'estadio' => 'Juventus Stadium',
        'pais' => 'ITA'
        ],
        ['times' => 'Manchester City',
        'titulos' => '50',
        'estadio' => 'Etihad Stadium',
        'pais' => 'ENG'
        ],
    ];
    
    ?>

    <h2>Times da Europa</h2>

    <ol>
        <?php foreach($arquivo as $imprime): ?>
        <li>
            <?php print_r($imprime); ?> 
        </li>
        <?php endforeach ?>
    </ol>


    <table border="2" width="500">

        <tr align="center">
            <td>Times</td>
            <td>Títulos</td>
            <td>Estadio</td>
            <td>País</td>
        </tr>
        <?php foreach($time as $linha): ?>
        <tr align="center">
            <td><?= $linha['times'] ?></td>
            <td><?= $linha['titulos'] ?></td>
            <td><?= $linha['estadio'] ?></td>
            <td><?= $linha['pais'] ?></td>
        </tr>
    <?php endforeach ?>
        
    </table>

    </body>
</html>