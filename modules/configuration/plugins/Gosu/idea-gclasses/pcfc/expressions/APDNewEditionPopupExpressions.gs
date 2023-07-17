package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDNewEditionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDNewEditionPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDNewEditionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDNewEditionPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (productLine :  APDProductLine, currentEdition :  APDEdition) : int {
      return 0
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at APDNewEditionPopup.pcf: line 56, column 44
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      edition.EffectiveDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=EditionCode_Input) at APDNewEditionPopup.pcf: line 37, column 42
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      edition.EditionCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=EditionDescription_Input) at APDNewEditionPopup.pcf: line 42, column 49
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      edition.EditionDescription = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at APDNewEditionPopup.pcf: line 20, column 26
    function initialValue_0 () : APDEdition {
      return initialiseEdition()
    }
    
    // 'pickValue' attribute on EditButtons at APDNewEditionPopup.pcf: line 28, column 83
    function pickValue_1 () : APDEdition {
      return edition
    }
    
    // 'title' attribute on Popup (id=APDNewEditionPopup) at APDNewEditionPopup.pcf: line 11, column 88
    static function title_19 (currentEdition :  APDEdition, productLine :  APDProductLine) : java.lang.Object {
      return DisplayKey.get("Web.APDNewEditionPopup.Title", productLine.Name)
    }
    
    // 'validationExpression' attribute on DateInput (id=EffectiveDate_Input) at APDNewEditionPopup.pcf: line 56, column 44
    function validationExpression_13 () : java.lang.Object {
      return validateDate(edition.EffectiveDate)
    }
    
    // 'value' attribute on TextInput (id=EditionContext_Input) at APDNewEditionPopup.pcf: line 49, column 39
    function valueRoot_11 () : java.lang.Object {
      return productLine
    }
    
    // 'value' attribute on TextInput (id=EditionCode_Input) at APDNewEditionPopup.pcf: line 37, column 42
    function valueRoot_4 () : java.lang.Object {
      return edition
    }
    
    // 'value' attribute on TextInput (id=EditionContext_Input) at APDNewEditionPopup.pcf: line 49, column 39
    function value_10 () : java.lang.String {
      return productLine.Name
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at APDNewEditionPopup.pcf: line 56, column 44
    function value_14 () : java.util.Date {
      return edition.EffectiveDate
    }
    
    // 'value' attribute on TextInput (id=EditionCode_Input) at APDNewEditionPopup.pcf: line 37, column 42
    function value_2 () : java.lang.String {
      return edition.EditionCode
    }
    
    // 'value' attribute on TextInput (id=EditionDescription_Input) at APDNewEditionPopup.pcf: line 42, column 49
    function value_6 () : java.lang.String {
      return edition.EditionDescription
    }
    
    override property get CurrentLocation () : pcf.APDNewEditionPopup {
      return super.CurrentLocation as pcf.APDNewEditionPopup
    }
    
    property get currentEdition () : APDEdition {
      return getVariableValue("currentEdition", 0) as APDEdition
    }
    
    property set currentEdition ($arg :  APDEdition) {
      setVariableValue("currentEdition", 0, $arg)
    }
    
    property get edition () : APDEdition {
      return getVariableValue("edition", 0) as APDEdition
    }
    
    property set edition ($arg :  APDEdition) {
      setVariableValue("edition", 0, $arg)
    }
    
    property get productLine () : APDProductLine {
      return getVariableValue("productLine", 0) as APDProductLine
    }
    
    property set productLine ($arg :  APDProductLine) {
      setVariableValue("productLine", 0, $arg)
    }
    
    function initialiseEdition() : APDEdition {
          var e : APDEdition
          e = productLine.addNewEdition()
          e.EffectiveDate = Date.Today
          return e
        }
    
        function validateDate(d : Date) : String {
          var editions = productLine.Editions.where(\e -> e != edition)
          if (editions*.EffectiveDate.contains(edition.EffectiveDate)) {
            return DisplayKey.get("Web.APDNewEditionPopup.EffectiveDate.Duplicate")
          } 
          return null
        }
    
    
  }
  
  
}