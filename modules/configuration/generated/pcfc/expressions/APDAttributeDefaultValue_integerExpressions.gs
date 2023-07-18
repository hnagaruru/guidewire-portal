package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDAttributeDefaultValue.integer.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDAttributeDefaultValue_integerExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDAttributeDefaultValue.integer.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDAttributeDefaultValueExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=value_Cell) at APDAttributeDefaultValue.integer.pcf: line 33, column 28
    function action_1 () : void {
      APDAttributeRulePopup.push(rule, attribute, ruleType, edition, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=value_Cell) at APDAttributeDefaultValue.integer.pcf: line 33, column 28
    function action_dest_2 () : pcf.api.Destination {
      return pcf.APDAttributeRulePopup.createDestination(rule, attribute, ruleType, edition, openForEdit)
    }
    
    // 'initialValue' attribute on Variable at APDAttributeDefaultValue.integer.pcf: line 27, column 32
    function initialValue_0 () : APDAttributeRule {
      return attribute.getEditionRule(edition, ruleType)
    }
    
    // 'value' attribute on TextCell (id=value_Cell) at APDAttributeDefaultValue.integer.pcf: line 33, column 28
    function value_3 () : Integer {
      return UIValue
    }
    
    property get attribute () : APDAttribute {
      return getRequireValue("attribute", 0) as APDAttribute
    }
    
    property set attribute ($arg :  APDAttribute) {
      setRequireValue("attribute", 0, $arg)
    }
    
    property get dataField () : APDDataField {
      return getRequireValue("dataField", 0) as APDDataField
    }
    
    property set dataField ($arg :  APDDataField) {
      setRequireValue("dataField", 0, $arg)
    }
    
    property get edition () : APDProductLineEdition {
      return getRequireValue("edition", 0) as APDProductLineEdition
    }
    
    property set edition ($arg :  APDProductLineEdition) {
      setRequireValue("edition", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get rule () : APDAttributeRule {
      return getVariableValue("rule", 0) as APDAttributeRule
    }
    
    property set rule ($arg :  APDAttributeRule) {
      setVariableValue("rule", 0, $arg)
    }
    
    property get ruleType () : APDRuleType {
      return getRequireValue("ruleType", 0) as APDRuleType
    }
    
    property set ruleType ($arg :  APDRuleType) {
      setRequireValue("ruleType", 0, $arg)
    }
    
    property get UIValue() : Integer {
          if (dataField == null) return rule.DefaultIntegerValue
          return dataField.getRuleIntegerValue(ruleType)
        }
    
    
  }
  
  
}