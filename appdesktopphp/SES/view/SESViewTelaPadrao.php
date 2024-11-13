<?php
/**
 * Created by PhpStorm.
 * User: gelvazio
 * Date: 04/09/2021
 * Time: 23:03
 */

class SESViewTelaPadrao {

    public function getWindow($window_id, $title, $width = 1000, $height = 600){
        return  '<div id="window_' . $window_id . '" class="abs window" style="width: ' . $width . 'px;height: ' . $height .'px;">
                     <div class="abs window_inner">' .
                        $this->getWindowTop($window_id, $title) .
                        $this->getWindowContent($window_id) .
                        $this->getWindowBottom($window_id) .
                    '</div>
                      <span class="abs ui-resizable-handle ui-resizable-se"></span>
                  </div>';
    }

    protected function getWindowTop($window_id, $title){
        $image_icon = '<img alt="" src="SES/assets/images/icons/icon_16_' . $window_id . '.png"/>';
        $dock_close = '<a href="#icon_dock_' . $window_id . '" class="window_close"></a>';

        return '<div class="window_top">
                  <span class="float_left">
                    ' . $image_icon . $title . '                    
                  </span>
                  <span class="float_right">
                    <a href="#" class="window_min"></a>
                    <a href="#" class="window_resize"></a>
                    ' . $dock_close . '
                  </span>
            </div>';
    }

    protected function getWindowContent($window_id){
        return '<div class="abs window_content">' .
                    $this->getWindowAside($window_id) .
                    $this->getWindowMain($window_id) . '                
                </div>';
    }

    protected function getWindowAside($window_id){
        return '<div id="window_aside_' . $window_id . '" class="window_aside">
                    Hello. You look nice today!
                </div>';
    }

    protected function getWindowMain($window_id){
        return '<div id="' . $window_id . '" class="window_main" style="min-height: 0;">
                    <div id="main_window_' . $window_id . '">
                        ' . $this->getDataWindowMain($window_id) . '
                    </div>
                </div>';
    }

    protected function getDataWindowMain($window_id){
        return '<table id="table_id_' . $window_id . '" class="data">
                    <thead>
                        <tr>
                        <th class="shrink">
                            &nbsp;
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Date Modified
                        </th>
                        <th>
                            Date Created
                        </th>
                        <th>
                            Size
                        </th>
                        <th>
                            Kind
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img alt="" src="SES/assets/images/icons/icon_16_drive.png"/>
                            </td>
                            <td>
                                Hard Drive
                            </td>
                            <td>
                                Today
                            </td>
                            <td>
                                &mdash;
                            </td>
                            <td>
                                200 GB
                            </td>
                            <td>
                                Volume
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img alt="" src="SES/assets/images/icons/icon_16_disc.png"/>
                            </td>
                            <td>
                                Audio CD
                            </td>
                            <td>
                                &mdash;
                            </td>
                            <td>
                                &mdash;
                            </td>
                            <td>
                                2.92 GB
                            </td>
                            <td>
                                Media
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img alt="" src="SES/assets/images/icons/icon_16_network.png"/>
                            </td>
                            <td>
                                Network
                            </td>
                            <td>
                                &mdash;
                            </td>
                            <td>
                                &mdash;
                            </td>
                            <td>
                                &mdash;
                            </td>
                            <td>
                                LAN
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img alt="" src="SES/assets/images/icons/icon_16_folder_remote.png"/>
                            </td>
                            <td>
                                Shared Project Files
                            </td>
                            <td>
                                Yesterday
                            </td>
                            <td>
                                12/29/08
                            </td>
                            <td>
                                524 MB
                            </td>
                            <td>
                                Folder
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img alt="" src="SES/assets/images/icons/icon_16_documents.png"/>
                            </td>
                            <td>
                                Documents
                            </td>
                            <td>
                                Yesterday
                            </td>
                            <td>
                                12/29/08
                            </td>
                            <td>
                                524 MB
                            </td>
                            <td>
                                Folder
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img alt="" src="SES/assets/images/icons/icon_16_system.png"/>
                            </td>
                            <td>
                                Preferences
                            </td>
                            <td>
                                &mdash;
                            </td>
                            <td>
                                &mdash;
                            </td>
                            <td>
                                &mdash;
                            </td>
                            <td>
                                System
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img alt="" src="SES/assets/images/icons/icon_16_trash.png"/>
                            </td>
                            <td>
                                Trash
                            </td>
                            <td>
                                Today
                            </td>
                            <td>
                                &mdash;
                            </td>
                            <td>
                                &mdash;
                            </td>
                            <td>
                                Bin
                            </td>
                        </tr>
                    </tbody>
                </table>';
    }

    protected function getWindowBottom($windows_id){
        return '<div class="abs window_bottom aba_botoes">
                      <div id="aba_acao">' .
                            $this->adicionaAcoesManutencao($windows_id) . '
                      </div>
                </div>';
    }

    protected function adicionaAcoesConsulta(){
        $this->adicionaAcaoConsultar();
        $this->adicionaAcaoIncluir();
        $this->adicionaAcaoAlterar();
        $this->adicionaAcaoExcluir();
        $this->adicionaAcaoVisualizar();
        $this->adicionaAcaoImprimir();
    }

    protected function adicionaAcaoConsultar (){
        return '&nbsp;<button onclick="acaoPesquisar()">Consultar</button>';
    }

    protected function adicionaAcaoIncluir (){
        return '&nbsp;<button onclick="acaoIncluir()">Incluir</button>';
    }

    protected function adicionaAcaoAlterar (){
        return '&nbsp;<button onclick="acaoAlterar()">Alterar</button>';
    }

    protected function adicionaAcaoExcluir (){
        return '&nbsp;<button onclick="acaoExcluir()">Excluir</button>';
    }

    protected function adicionaAcaoVisualizar (){
        return '&nbsp;<button onclick="acaoVisualizar()">Visualizar</button>';
    }

    protected function adicionaAcaoImprimir (){
        return $this->adicionaAcaoImprimirPdf() . $this->adicionaAcaoImprimirCsv();
    }

    protected function adicionaAcaoImprimirPdf(){
        return '&nbsp;<button onclick="acaoImprimirPdf()">Imprimir PDF</button>';
    }

    protected function adicionaAcaoImprimirCsv(){
        return '&nbsp;<button onclick="acaoImprimirCsv()">Imprimir CSV</button>';
    }

    protected function adicionaAcoesManutencao($windows_id){
        return $this->adicionaAcaoConfirmar($windows_id) . $this->adicionaAcaoFechar($windows_id);
    }

    protected function adicionaAcaoConfirmar($windows_id){
        return '&nbsp;<button class="botao" onclick="acaoConfirmar(\'' . $windows_id . '\')">Confirmar</button>';
    }
    protected function adicionaAcaoFechar($windows_id){
        return '&nbsp;<button class="botao" onclick="acaoFecharJanela(\'' . $windows_id . '\')">Fechar</button>';
    }
}