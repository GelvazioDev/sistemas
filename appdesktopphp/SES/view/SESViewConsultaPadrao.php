<?php
/**
 * Created by PhpStorm.
 * User: gelvazio
 * Date: 04/09/2021
 * Time: 23:02
 */

Factory::requireModel("SES", "Field");
Factory::requireView("SES", "TelaPadrao");

abstract class SESViewConsultaPadrao extends SESViewTelaPadrao {
    
    private $listFields = array();

    protected abstract function addFields();
    protected abstract function getTitulo();

    public function __construct() {
        $this->resetFields();
        $this->addFields();
    }
    
    /**
     * @return array
     */
    public function getListFields() {
        return $this->listFields;
    }

    /**
     * @param array $listFields
     */
    public function setListFields($listFields) {
        $this->listFields = $listFields;
    }

    protected function resetFields(){
        $this->listFields = array();
    }
    
    protected function addField(SESModelField $oField) {
        $aListFields = $this->getListFields();

        // Sets name of Field object as key of array of Fields
        $aListFields[$oField->getName()] = $oField;

        $this->setListFields($aListFields);
    }

}