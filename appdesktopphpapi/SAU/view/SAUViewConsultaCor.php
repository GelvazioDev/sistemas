<?php
/**
 * Created by PhpStorm.
 * User: gelvazio
 * Date: 04/09/2021
 * Time: 16:34
 */

Factory::requireView('SES', 'ConsultaPadrao');
class SAUViewConsultaCor extends SESViewConsultaPadrao {
    
    protected function getTitulo() {
        return "Produto";
    }

    public function addFields() {
        $this->addField(new SESModelField(SESModelField::TIPO_CAMPO_TEXTO, "codigo", "Código", true));
        $this->addField(new SESModelField(SESModelField::TIPO_CAMPO_TEXTO, "descricao", "Descrição"));        
        $this->addField(new SESModelField(SESModelField::TIPO_CAMPO_TEXTO, "quantidade", "Quantidade", false, 20));        
        $this->addField(new SESModelField(SESModelField::TIPO_CAMPO_TEXTO, "preco", "Preço", false, 30));
        $this->addField(new SESModelField(SESModelField::TIPO_CAMPO_TEXTO, "preco22", "Preço", false, 30));
        $this->addField(new SESModelField(SESModelField::TIPO_CAMPO_TEXTO, "preco2", "Preço", false, 30));
    }    

    protected function getDataWindowMain($window_id) {
        
        $name_class = get_class();
        
        $name_class = str_replace("Consulta", "", $name_class);
        
        $html = '<div> 
            <fieldset>
                <legend>
                    ' . $this->getTitulo() . '
                </legend>
                <form id="formulario_' . $window_id .'" class="formulario" action=\'ControllerConsulta' . $name_class . '.php\'>';
        
        foreach ($this->getListFields() as $key => /* @var SESModelField $oField */ $oField){

            $type        = $oField->getType();
            $name        = $oField->getName();
            $description = $oField->getDescription();
            $required    = $oField->isRequired() ? " required " : "";
            $size        = $oField->getSize();
            $breakLine   = $oField->isBreakLine() ? " <br> " : "";
            $isKey       = $oField->isKey() ? "true" : "false";
            $defaultValue= $oField->getDefault() ? 'value=\'' . $oField->getDefault() . '\'' : "";
            $readonly    = $oField->getReadonly() ? " readonly " : "";
            
            $field = '<div class="campo-simples">
                               <label for=\'' . $name . '\'>' . $description . ':</label>
                               <input isfieldkey=\'' . $isKey . '\' ' . $readonly . $required . ' 
                                      id=\'' . $name . '\' 
                                      type=\'' . $type . '\' 
                                      size="' . $size . '
                                      ' . $defaultValue . '">
                      </div>';
            $html .= $field . $breakLine;
        }

//        $html .= '    <input type="submit" value="Enviar">                        
        $html .= '                            
                    </form>  
                </fieldset>     
          </div>';
        
        return $html;
    }
}