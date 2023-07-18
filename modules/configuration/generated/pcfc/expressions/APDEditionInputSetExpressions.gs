package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDEditionInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDEditionInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDEditionInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDEditionInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=EditionCode_Input) at APDEditionInputSet.pcf: line 18, column 34
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      edition.EditionCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at APDEditionInputSet.pcf: line 27, column 34
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      edition.EffectiveDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=EditionCode_Input) at APDEditionInputSet.pcf: line 18, column 34
    function valueRoot_3 () : java.lang.Object {
      return edition
    }
    
    // 'value' attribute on TextInput (id=EditionCode_Input) at APDEditionInputSet.pcf: line 18, column 34
    function value_1 () : java.lang.String {
      return edition.EditionCode
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at APDEditionInputSet.pcf: line 27, column 34
    function value_7 () : java.util.Date {
      return edition.EffectiveDate
    }
    
    // 'visible' attribute on TextInput (id=EditionCode_Input) at APDEditionInputSet.pcf: line 18, column 34
    function visible_0 () : java.lang.Boolean {
      return edition != null
    }
    
    // 'visible' attribute on TextInput (id=EditionCodeForBaseProduct_Input) at APDEditionInputSet.pcf: line 35, column 34
    function visible_12 () : java.lang.Boolean {
      return edition == null
    }
    
    property get edition () : APDEdition {
      return getRequireValue("edition", 0) as APDEdition
    }
    
    property set edition ($arg :  APDEdition) {
      setRequireValue("edition", 0, $arg)
    }
    
    
  }
  
  
}