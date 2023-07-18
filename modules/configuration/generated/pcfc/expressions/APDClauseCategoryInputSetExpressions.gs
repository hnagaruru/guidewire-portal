package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDClauseCategoryInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDClauseCategoryInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDClauseCategoryInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDClauseCategoryInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at APDClauseCategoryInputSet.pcf: line 29, column 30
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      category.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at APDClauseCategoryInputSet.pcf: line 35, column 37
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      category.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Itemised_Input) at APDClauseCategoryInputSet.pcf: line 42, column 32
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      category.Itemised = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=CodeIdentifier_Input) at APDClauseCategoryInputSet.pcf: line 23, column 32
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      category.CodeIdentifier = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at APDClauseCategoryInputSet.pcf: line 16, column 23
    function initialValue_0 () : Boolean {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser().inDevelopMode()
    }
    
    // 'label' attribute on TextInput (id=Description_Input) at APDClauseCategoryInputSet.pcf: line 35, column 37
    function label_13 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDClauseCategoryInputSet.Description"))
    }
    
    // 'label' attribute on TextInput (id=CodeIdentifier_Input) at APDClauseCategoryInputSet.pcf: line 23, column 32
    function label_2 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDClauseCategoryInputSet.CodeIdentifier"))
    }
    
    // 'label' attribute on TextInput (id=UsedOnClauses_Input) at APDClauseCategoryInputSet.pcf: line 48, column 32
    function label_26 () : java.lang.Object {
      return DisplayKey.get( "Web.APDClauseCategoryInputSet.UsedOnClauses" )
    }
    
    // 'value' attribute on TextInput (id=CodeIdentifier_Input) at APDClauseCategoryInputSet.pcf: line 23, column 32
    function valueRoot_5 () : java.lang.Object {
      return category
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at APDClauseCategoryInputSet.pcf: line 35, column 37
    function value_14 () : java.lang.String {
      return category.Description
    }
    
    // 'value' attribute on BooleanRadioInput (id=Itemised_Input) at APDClauseCategoryInputSet.pcf: line 42, column 32
    function value_20 () : java.lang.Boolean {
      return category.Itemised
    }
    
    // 'value' attribute on TextInput (id=UsedOnClauses_Input) at APDClauseCategoryInputSet.pcf: line 48, column 32
    function value_27 () : java.lang.String {
      return category.UsedOnClausesText
    }
    
    // 'value' attribute on TextInput (id=CodeIdentifier_Input) at APDClauseCategoryInputSet.pcf: line 23, column 32
    function value_3 () : java.lang.String {
      return category.CodeIdentifier
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at APDClauseCategoryInputSet.pcf: line 29, column 30
    function value_9 () : java.lang.String {
      return category.Name
    }
    
    // 'visible' attribute on TextInput (id=CodeIdentifier_Input) at APDClauseCategoryInputSet.pcf: line 23, column 32
    function visible_1 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    // 'visible' attribute on BooleanRadioInput (id=Itemised_Input) at APDClauseCategoryInputSet.pcf: line 42, column 32
    function visible_19 () : java.lang.Boolean {
      return not basicOnly
    }
    
    property get basicOnly () : Boolean {
      return getRequireValue("basicOnly", 0) as Boolean
    }
    
    property set basicOnly ($arg :  Boolean) {
      setRequireValue("basicOnly", 0, $arg)
    }
    
    property get category () : APDClauseCategory {
      return getRequireValue("category", 0) as APDClauseCategory
    }
    
    property set category ($arg :  APDClauseCategory) {
      setRequireValue("category", 0, $arg)
    }
    
    property get inDevelopMode () : Boolean {
      return getVariableValue("inDevelopMode", 0) as Boolean
    }
    
    property set inDevelopMode ($arg :  Boolean) {
      setVariableValue("inDevelopMode", 0, $arg)
    }
    
    
  }
  
  
}