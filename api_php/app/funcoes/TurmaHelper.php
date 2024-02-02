<?php

namespace App\Helpers;

use Carbon\Carbon;

class TurmaHelper
{
    /**
     * Método para extrair o ano da data da turma.
     *
     * @param string $dataString A string contendo a data da turma.
     * @return int O ano da turma.
     */
    public static function obterAno($dataString)
    {
        // Converte a string de data para um objeto Carbon.
        $data = Carbon::createFromFormat('Y-m-d', $dataString);

        // Obtém o ano da turma.
        $ano = $data->year;

        return $ano;
    }
}