package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDCoverageInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDCoverageInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDCoverageInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDCoverageInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at APDCoverageInputSet.pcf: line 26, column 30
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverage.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at APDCoverageInputSet.pcf: line 33, column 37
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverage.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=WrittenByThirdParty_Input) at APDCoverageInputSet.pcf: line 38, column 45
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverage.WrittenByThirdParty = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=CodeIdentifier_Input) at APDCoverageInputSet.pcf: line 20, column 32
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverage.CodeIdentifier = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at APDCoverageInputSet.pcf: line 13, column 23
    function initialValue_0 () : Boolean {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser().inDevelopMode()
    }
    
    // 'label' attribute on TextAreaInput (id=Description_Input) at APDCoverageInputSet.pcf: line 33, column 37
    function label_13 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDCoverableCV.Description"))
    }
    
    // 'label' attribute on TextInput (id=CodeIdentifier_Input) at APDCoverageInputSet.pcf: line 20, column 32
    function label_2 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDCoverableCV.CodeIdentifier", coverage.Coverable.LinePrefix))
    }
    
    // 'value' attribute on TextInput (id=CodeIdentifier_Input) at APDCoverageInputSet.pcf: line 20, column 32
    function valueRoot_5 () : java.lang.Object {
      return coverage
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at APDCoverageInputSet.pcf: line 33, column 37
    function value_14 () : java.lang.String {
      return coverage.Description
    }
    
    // 'value' attribute on BooleanRadioInput (id=WrittenByThirdParty_Input) at APDCoverageInputSet.pcf: line 38, column 45
    function value_19 () : java.lang.Boolean {
      return coverage.WrittenByThirdParty
    }
    
    // 'value' attribute on TextInput (id=CodeIdentifier_Input) at APDCoverageInputSet.pcf: line 20, column 32
    function value_3 () : java.lang.String {
      return coverage.CodeIdentifier
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at APDCoverageInputSet.pcf: line 26, column 30
    function value_9 () : java.lang.String {
      return coverage.Name
    }
    
    // 'visible' attribute on TextInput (id=CodeIdentifier_Input) at APDCoverageInputSet.pcf: line 20, column 32
    function visible_1 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    property get coverage () : APDCoverage {
      return getRequireValue("coverage", 0) as APDCoverage
    }
    
    property set coverage ($arg :  APDCoverage) {
      setRequireValue("coverage", 0, $arg)
    }
    
    property get inDevelopMode () : Boolean {
      return getVariableValue("inDevelopMode", 0) as Boolean
    }
    
    property set inDevelopMode ($arg :  Boolean) {
      setVariableValue("inDevelopMode", 0, $arg)
    }
    
    
  }
  
  
}