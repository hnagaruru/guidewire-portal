package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/LocalPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LocalPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/LocalPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends LocalPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'helpText' attribute on TextCell (id=level1_Cell) at LocalPopup.pcf: line 66, column 49
    function helpText_21 () : java.lang.String {
      return eTF[3]
    }
    
    // 'value' attribute on TextCell (id=name_Cell) at LocalPopup.pcf: line 49, column 31
    function value_13 () : java.lang.String {
      return eTF[0]
    }
    
    // 'value' attribute on TextCell (id=symbol_Cell) at LocalPopup.pcf: line 52, column 31
    function value_15 () : java.lang.String {
      return eTF[1]
    }
    
    // 'value' attribute on TextCell (id=class_Cell) at LocalPopup.pcf: line 55, column 31
    function value_17 () : java.lang.String {
      return eTF[2]
    }
    
    // 'value' attribute on TextCell (id=allocation_Cell) at LocalPopup.pcf: line 58, column 47
    function value_19 () : java.lang.String {
      return eTF[3] + "%"
    }
    
    // 'value' attribute on TextCell (id=level1_Cell) at LocalPopup.pcf: line 66, column 49
    function value_22 () : java.math.BigDecimal {
      return percentage(amount, eTF[3])
    }
    
    // 'value' attribute on TextCell (id=level4_Cell) at LocalPopup.pcf: line 74, column 49
    function value_25 () : java.math.BigDecimal {
      return percentage(amount, eTF[4])
    }
    
    // 'value' attribute on TextCell (id=level2_Cell) at LocalPopup.pcf: line 80, column 49
    function value_27 () : java.math.BigDecimal {
      return percentage(amount, eTF[5])
    }
    
    // 'value' attribute on TextCell (id=level3_Cell) at LocalPopup.pcf: line 86, column 49
    function value_29 () : java.math.BigDecimal {
      return percentage(amount, eTF[6])
    }
    
    property get eTF () : java.lang.String[] {
      return getIteratedValue(1) as java.lang.String[]
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/LocalPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocalPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (eTFs :  String[][]) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=recalculate) at LocalPopup.pcf: line 25, column 77
    function action_1 () : void {
      
    }
    
    // 'value' attribute on TextInput (id=amount_Input) at LocalPopup.pcf: line 35, column 42
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      amount = (__VALUE_TO_SET as java.lang.Double)
    }
    
    // 'initialValue' attribute on Variable at LocalPopup.pcf: line 18, column 22
    function initialValue_0 () : double {
      return 10000
    }
    
    // 'value' attribute on TextCell (id=level1_Cell) at LocalPopup.pcf: line 66, column 49
    function sortValue_5 (eTF :  java.lang.String[]) : java.lang.Object {
      return percentage(amount, eTF[3])
    }
    
    // 'value' attribute on TextCell (id=level4_Cell) at LocalPopup.pcf: line 74, column 49
    function sortValue_6 (eTF :  java.lang.String[]) : java.lang.Object {
      return percentage(amount, eTF[4])
    }
    
    // 'value' attribute on TextCell (id=level2_Cell) at LocalPopup.pcf: line 80, column 49
    function sortValue_7 (eTF :  java.lang.String[]) : java.lang.Object {
      return percentage(amount, eTF[5])
    }
    
    // 'value' attribute on TextCell (id=level3_Cell) at LocalPopup.pcf: line 86, column 49
    function sortValue_8 (eTF :  java.lang.String[]) : java.lang.Object {
      return percentage(amount, eTF[6])
    }
    
    // 'footerSumValue' attribute on RowIterator at LocalPopup.pcf: line 74, column 49
    function sumValue_10 (eTF :  java.lang.String[]) : java.lang.Object {
      return percentage(amount, eTF[4])
    }
    
    // 'footerSumValue' attribute on RowIterator at LocalPopup.pcf: line 80, column 49
    function sumValue_11 (eTF :  java.lang.String[]) : java.lang.Object {
      return percentage(amount, eTF[5])
    }
    
    // 'footerSumValue' attribute on RowIterator at LocalPopup.pcf: line 86, column 49
    function sumValue_12 (eTF :  java.lang.String[]) : java.lang.Object {
      return percentage(amount, eTF[6])
    }
    
    // 'footerSumValue' attribute on RowIterator at LocalPopup.pcf: line 66, column 49
    function sumValue_9 (eTF :  java.lang.String[]) : java.lang.Object {
      return percentage(amount, eTF[3])
    }
    
    // 'value' attribute on TextInput (id=amount_Input) at LocalPopup.pcf: line 35, column 42
    function value_2 () : java.lang.Double {
      return amount
    }
    
    // 'value' attribute on RowIterator at LocalPopup.pcf: line 45, column 44
    function value_31 () : java.lang.String[][] {
      return eTFs
    }
    
    override property get CurrentLocation () : pcf.LocalPopup {
      return super.CurrentLocation as pcf.LocalPopup
    }
    
    property get amount () : double {
      return getVariableValue("amount", 0) as java.lang.Double
    }
    
    property set amount ($arg :  double) {
      setVariableValue("amount", 0, $arg)
    }
    
    property get eTFs () : String[][] {
      return getVariableValue("eTFs", 0) as String[][]
    }
    
    property set eTFs ($arg :  String[][]) {
      setVariableValue("eTFs", 0, $arg)
    }
    
    function percentage(total : double, percentage : String) : java.math.BigDecimal{
      return java.math.BigDecimal.valueOf( total ).multiply( new java.math.BigDecimal(percentage) ).divide( 100 )
    }
    
    
  }
  
  
}