package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/RuleValidationInfoCell.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RuleValidationInfoCell_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/RuleValidationInfoCell.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RuleValidationInfoCellExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'iconColor' attribute on Link (id=Invalid) at RuleValidationInfoCell.default.pcf: line 23, column 50
    function iconColor_1 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'iconColor' attribute on Link (id=Unknown) at RuleValidationInfoCell.default.pcf: line 36, column 41
    function iconColor_4 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ACTION_NEUTRAL
    }
    
    // 'visible' attribute on Link (id=Invalid) at RuleValidationInfoCell.default.pcf: line 23, column 50
    function visible_0 () : java.lang.Boolean {
      return rule.Valid == Boolean.FALSE
    }
    
    // 'visible' attribute on Link (id=Valid) at RuleValidationInfoCell.default.pcf: line 29, column 49
    function visible_2 () : java.lang.Boolean {
      return rule.Valid == Boolean.TRUE
    }
    
    // 'visible' attribute on Link (id=Unknown) at RuleValidationInfoCell.default.pcf: line 36, column 41
    function visible_3 () : java.lang.Boolean {
      return rule.Valid == null
    }
    
    // 'visible' attribute on ContentInput at RuleValidationInfoCell.default.pcf: line 16, column 32
    function visible_5 () : java.lang.Boolean {
      return rule != null
    }
    
    property get rule () : Rule {
      return getRequireValue("rule", 0) as Rule
    }
    
    property set rule ($arg :  Rule) {
      setRequireValue("rule", 0, $arg)
    }
    
    
  }
  
  
}