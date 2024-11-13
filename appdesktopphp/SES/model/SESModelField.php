<?php
/**
 * Creates a instance of Field
 * @User: Gelvazio Camargo
 * @Date: 07/09/2021
 * @Time: 13:50 
 */

class SESModelField {

    // 07/09/2021
    // elements of HTML5
    // https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/input    

    private $name;
    private $description;
    private $required;
    private $size;
    private $breakLine;
    private $isKey;
    private $type;
    private $default;
    private $readonly;
    
    const TIPO_CAMPO_TEXTO  = "text";
    const TIPO_CAMPO_SUBMIT = "submit";
    const TIPO_CAMPO_SELECT = "select";
    const TIPO_CAMPO_MEMO   = "memo";

    /**
     * Field constructor.
     * @param $type
     * @param $name
     * @param $description
     * @param $isKey
     * @param $required
     * @param $size
     * @param $breakLine
     * @param $default
     */
    public function __construct($type = self::TIPO_CAMPO_TEXTO, $name = "Name", $description = "Description", $isKey = false, $size = 20, $breakLine = true, $required = false, $default = "") {
        $this->type = $type;
        $this->name = $name;
        $this->description = $description;
        $this->isKey = $isKey;
        $this->size = $size;
        $this->breakLine = $breakLine;
        $this->required = $required;
        $this->default = $default;
    }

    /**
     * @return mixed
     */
    public function getType() {
        return $this->type;
    }

    /**
     * @param mixed $type
     * @return Field
     */
    public function setType($type) {
        $this->type = $type;
        return $this;
    }
    
    /**
     * @return string
     */
    public function getName() {
        return $this->name;
    }

    /**
     * @param string $name
     * @return Field
     */
    public function setName($name) {
        $this->name = $name;
        return $this;
    }

    /**
     * @return string
     */
    public function getDescription() {
        return $this->description;
    }

    /**
     * @param string $description
     * @return Field
     */
    public function setDescription($description) {
        $this->description = $description;
        return $this;
    }

    /**
     * @return bool
     */
    public function isRequired() {
        return $this->required;
    }

    /**
     * @param bool $required
     * @return Field
     */
    public function setRequired($required) {
        $this->required = $required;
        return $this;
    }

    /**
     * @return int
     */
    public function getSize() {
        return $this->size;
    }

    /**
     * @param int $size
     * @return Field
     */
    public function setSize($size) {
        $this->size = $size;
        return $this;
    }

    /**
     * @return bool
     */
    public function isBreakLine() {
        return $this->breakLine;
    }

    /**
     * @param bool $breakLine
     * @return Field
     */
    public function setBreakLine($breakLine) {
        $this->breakLine = $breakLine;
        return $this;
    }

    /**
     * @return bool
     */
    public function isKey() {
        return $this->isKey;
    }

    /**
     * @param bool $isKey
     * @return Field
     */
    public function setIsKey($isKey) {
        $this->isKey = $isKey;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getDefault() {
        return $this->default;
    }

    /**
     * @param mixed $default
     * @return Field
     */
    public function setDefault($default) {
        $this->default = $default;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getReadonly() {
        return $this->readonly;
    }

    /**
     * @param mixed $readonly
     * @return Field
     */
    public function setReadonly($readonly) {
        $this->readonly = $readonly;
        return $this;
    }

}