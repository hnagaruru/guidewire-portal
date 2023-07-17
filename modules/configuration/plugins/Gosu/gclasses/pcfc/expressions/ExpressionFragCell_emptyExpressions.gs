package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/ExpressionFragCell.empty.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ExpressionFragCell_emptyExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/ExpressionFragCell.empty.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ExpressionFragCellExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=EmptyCell_Input) at ExpressionFragCell.empty.pcf: line 19, column 26
    function valueRoot_1 () : java.lang.Object {
      return org.apache.commons.lang3.StringUtils
    }
    
    // 'value' attribute on TextInput (id=EmptyCell_Input) at ExpressionFragCell.empty.pcf: line 19, column 26
    function value_0 () : java.lang.String {
      return org.apache.commons.lang3.StringUtils.EMPTY
    }
    
    property get fragHolder () : gw.bizrules.pcf.ExpressionFragmentHolder {
      return getRequireValue("fragHolder", 0) as gw.bizrules.pcf.ExpressionFragmentHolder
    }
    
    property set fragHolder ($arg :  gw.bizrules.pcf.ExpressionFragmentHolder) {
      setRequireValue("fragHolder", 0, $arg)
    }
    
    property get lineHolder () : gw.bizrules.pcf.RuleConditionLineHolder {
      return getRequireValue("lineHolder", 0) as gw.bizrules.pcf.RuleConditionLineHolder
    }
    
    property set lineHolder ($arg :  gw.bizrules.pcf.RuleConditionLineHolder) {
      setRequireValue("lineHolder", 0, $arg)
    }
    
    
  }
  
  
}