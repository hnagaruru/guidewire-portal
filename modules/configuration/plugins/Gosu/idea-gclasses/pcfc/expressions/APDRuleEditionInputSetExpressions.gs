package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDRuleEditionInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDRuleEditionInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDRuleEditionInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDRuleEditionInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateInput (id=RuleDate_Input) at APDRuleEditionInputSet.pcf: line 19, column 53
    function valueRoot_2 () : java.lang.Object {
      return rule.Edition
    }
    
    // 'value' attribute on TextInput (id=EditionCode_Input) at APDRuleEditionInputSet.pcf: line 31, column 34
    function valueRoot_9 () : java.lang.Object {
      return edition
    }
    
    // 'value' attribute on DateInput (id=RuleDate_Input) at APDRuleEditionInputSet.pcf: line 19, column 53
    function value_1 () : java.util.Date {
      return rule.Edition.EffectiveDate
    }
    
    // 'value' attribute on DateInput (id=EditionDate_Input) at APDRuleEditionInputSet.pcf: line 36, column 42
    function value_13 () : java.util.Date {
      return edition.EffectiveDate
    }
    
    // 'value' attribute on TextInput (id=EditionCode_Input) at APDRuleEditionInputSet.pcf: line 31, column 34
    function value_8 () : java.lang.String {
      return edition.EditionCode
    }
    
    // 'visible' attribute on DateInput (id=RuleDate_Input) at APDRuleEditionInputSet.pcf: line 19, column 53
    function visible_0 () : java.lang.Boolean {
      return rule.Edition.EffectiveDate != null
    }
    
    // 'visible' attribute on DateInput (id=EditionDate_Input) at APDRuleEditionInputSet.pcf: line 36, column 42
    function visible_12 () : java.lang.Boolean {
      return rule.Edition != edition
    }
    
    // 'visible' attribute on TextInput (id=EmpryRuleDate_Input) at APDRuleEditionInputSet.pcf: line 26, column 53
    function visible_5 () : java.lang.Boolean {
      return rule.Edition.EffectiveDate == null
    }
    
    // 'visible' attribute on TextInput (id=EditionCode_Input) at APDRuleEditionInputSet.pcf: line 31, column 34
    function visible_7 () : java.lang.Boolean {
      return edition != null
    }
    
    property get edition () : APDEdition {
      return getRequireValue("edition", 0) as APDEdition
    }
    
    property set edition ($arg :  APDEdition) {
      setRequireValue("edition", 0, $arg)
    }
    
    property get rule () : APDRule {
      return getRequireValue("rule", 0) as APDRule
    }
    
    property set rule ($arg :  APDRule) {
      setRequireValue("rule", 0, $arg)
    }
    
    
  }
  
  
}