<?php
/**
 * Created by PhpStorm.
 * User: gelvazio
 * Date: 18/09/2021
 * Time: 16:06
 */
class SESViewDesktop {

    public function __construct() {
        $this->criaTela();
    }

    protected function criaTela(){
        $sHTML = $this->openHtmlTag();

        $sHTML .= $this->getHeaders();

        $sHTML .= $this->getMain();

        $sHTML .= $this->getFooter();

        $sHTML .= $this->closeHtmlTag();

        echo $sHTML;
    }

    protected function openHtmlTag() {
        return '<!DOCTYPE html>
            <html lang="pt-br">
            <body>';
    }

    protected function closeHtmlTag() {
        return '</body></html>';
    }

    protected function getHeaders() {
        return '<!DOCTYPE html>
            <html lang="pt-br">
            <head>
                <meta charset="utf-8">
                <meta http-equiv="x-ua-compatible" content="ie=edge" />
                <meta name="description" content="JavaScript desktop environment built with jQuery." />
                <title>jQuery Desktop</title>
                <link rel="stylesheet" href="SES/assets/css/reset.css" />
                <link rel="stylesheet" href="SES/assets/css/desktop.css" />
                <link rel="stylesheet" href="SES/assets/css/formulario.css" />                
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
            </head>';
    }

    protected function getMain() {
        return '<div class="abs" id="wrapper">' .
            $this->getEventosPadroes() .
            $this->getIconsDesktop() .
            $this->getBarTop() .
            $this->getBarBottom() .
            '</div>';
    }

    protected function getBarTop() {
        return '<div class="abs" id="bar_top">
                    <span class="float_right" id="pesquisa">
                        ' .  $this->getSearchField() .'
                    </span>
                    <span class="float_right" id="clock"></span>
                    <ul>
                        <li>
                            <a class="menu_trigger" href="#">jQuery Desktop</a>
                            <ul class="menu">
                                <li>
                                    <a href="http://www.amazon.com/dp/0596159773?tag=sons-20">jQuery Cookbook</a>
                                </li>
                                <li>
                                    <a href="http://jqueryenlightenment.com/">jQuery Enlightenment</a>
                                </li>
                                <li>
                                    <a href="http://jquery.com/">jQuery Home</a>
                                </li>
                                <li>
                                    <a href="http://jquerymobile.com/">jQuery Mobile</a>
                                </li>
                                <li>
                                    <a href="http://jqueryui.com/">jQuery UI</a>
                                </li>
                                <li>
                                    <a href="http://learningjquery.com/">Learning jQuery</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a class="menu_trigger" href="#">HTML5 Resources</a>
                            <ul class="menu">
                                <li>
                                    <a href="http://diveintohtml5.info/">Dive Into HTML5</a>
                                </li>
                                <li>
                                    <a href="http://www.alistapart.com/articles/get-ready-for-html-5/">Get Ready for HTML5</a>
                                </li>
                                <li>
                                    <a href="http://html5boilerplate.com/">HTML5 Boilerplate</a>
                                </li>
                                <li>
                                    <a href="http://html5doctor.com/">HTML5 Doctor</a>
                                </li>
                                <li>
                                    <a href="http://html5.org/">HTML5 Intro</a>
                                </li>
                                <li>
                                    <a href="http://www.zeldman.com/superfriends/">HTML5 Super Friends</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a class="menu_trigger" href="#">Code</a>
                            <ul class="menu">
                                <li>
                                    <a href="assets/css/desktop.css">Desktop - CSS</a>
                                </li>
                                <li>
                                    <a href="assets/js/jquery.desktop.js">Desktop - JavaScript</a>
                                </li>
                                <li>
                                    <a href="http://github.com/nathansmith/jQuery-Desktop">GitHub Repository</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a class="menu_trigger" href="#">Credits</a>
                            <ul class="menu">
                                <li>
                                    <a href="http://sonspring.com/journal/jquery-desktop">Demo built by Nathan Smith</a>
                                </li>
                                <li>
                                    <a href="http://twitter.com/adrianrodriguez/">Wallpaper by Adrian Rodriguez</a>
                                </li>
                                <li>
                                    <a href="http://tango.freedesktop.org/Tango_Desktop_Project">Icons - Tango Desktop Project</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>';
    }

    protected function getBarBottom() {
        return '<div class="abs" id="bar_bottom">
                    <a class="float_left" href="#" id="show_desktop" title="Show Desktop">
                        <img alt="" src="SES/assets/images/icons/icon_22_desktop.png" />
                    </a>
                    <ul id="dock">
                        <li id="icon_dock_computer">
                            <a href="#window_computer">
                                <img alt="" src="SES/assets/images/icons/icon_22_computer.png" />
                                Computer 1
                            </a>
                        </li>
                        <li id="icon_dock_drive">
                            <a href="#window_drive">
                                <img alt="" src="SES/assets/images/icons/icon_22_drive.png" />
                                Hard Drive
                            </a>
                        </li>
                        <li id="icon_dock_disc">
                            <a href="#window_disc">
                                <img alt="" src="SES/assets/images/icons/icon_22_disc.png" />
                                Audio CD
                            </a>
                        </li>
                        <li id="icon_dock_network">
                            <a href="#window_network">
                                <img alt="" src="SES/assets/images/icons/icon_22_network.png" />
                                Network
                            </a>
                        </li>
                    </ul>
                </div>';
    }

    protected function getFooter() {
        return '<script src="SES/assets/js/ajax_libs_jquery_1.11.0_jquery.js"></script>
                <script src="SES/assets/js/ajax_libs_jqueryui_1.10.4_jquery-ui.js"></script>
                <script>
                  !window.jQuery && document.write(unescape(\'%3Cscript src="SES/assets/js/jquery.js"%3E%3C/script%3E\'));
                  !window.jQuery && document.write(unescape(\'%3Cscript src="SES/assets/js/jquery.ui.js"%3E%3C/script%3E\'));
                </script>
                <script src="SES/assets/js/jquery.desktop.js"></script>
                <script src="SES/assets/js/desktop.js"></script>
                <script src="SES/assets/js/debounce.js"></script>
                <script src="SES/assets/js/ajax.js"></script>';
    }

    protected function getIconsDesktop(){
        $icons = '';
        $aListaIcones = $this->getListIcons();

        $left= 20;
        $top = 25;
        $max_item_menu   = 10;
        $count_item_menu = 0;
        foreach ($aListaIcones as $key => $aDados){
            $window_id = $aDados["window_id"];
            if($count_item_menu == $max_item_menu){
                $top = 25;
                $count_item_menu = 0;
                $left = $left + 100;
            }

            $count_item_menu++;

            $window_id = strtolower($window_id);

            $style = 'style="left:' . $left .'px; top:' . $top . 'px;"';

            $icon = '<a id="link_desktop_' . $window_id . '" class="abs icon" ' . $style . ' 
                        href="#icon_dock_' . $window_id . '">
                        <img alt="" src="SES/assets/images/icons/icon_32_' . $window_id . '.png"/>
                        ' . $window_id . '
                      </a>';
            $icons = $icons . $icon;

            $top = $top + 80;
        }

        return $icons;
    }

    protected function getEventosPadroes(){
        $html = '';
        $html_aguarde = '<span id="aguarde">
                            <img src="SES/assets/images/gifs/loading.gif" alt=""/><br />                                    
                         </span>';

        $html .= $html_aguarde;

        $html_request_ajax_success = "<span id='messageAjaxSucess'
                                style='width    : 300px;
                                       font-size: 30px;
                                       color    : white;
                                       display  : none;
                                       margin-top: 200px;
                                       margin-left: 100px;
                                       background-color: green;'>Success Request Ajax!</span>";

        $html_request_ajax_error = "<span id='messageAjaxError'
                                style='width    : 300px;
                                       margin-top: 200px;
                                       margin-left: 100px;
                                       font-size: 30px;
                                       color    : white;
                                       display  : none;
                                       background-color: red;'>Error Request Ajax!</span>";

        $html .= $html_request_ajax_success;
        $html .= $html_request_ajax_error;

        return $html;
    }

    protected function getListIcons(){
        $width = 1000;
        $height = 600;

        return array(
            array("window_id" => "Computer", "width" => $width, "height" => $height, "title" => "Computer"),
            array("window_id" => "Drive"   , "width" => $width, "height" => $height, "title" => "Drive"),
            array("window_id" => "Disc"    , "width" => $width, "height" => $height, "title" => "Disc"),
            array("window_id" => "Network" , "width" => $width, "height" => $height, "title" => "Network")
        );
    }

    protected function getSearchField() {
//  Falta abrir a lista de telas para selecionar
//                    <h1>What are you looking for?</h1>
        return '<div id="pesquisa" class="wrap">
                    <div class="search">
                        <input type="text"
                               placeholder="Pesquisar">
                        <button type="submit">
                            <i class="fa fa-search"></i>
                        </button>
                    </div>
                </div>';
    }

}