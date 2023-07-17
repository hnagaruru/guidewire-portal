package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/audit/GLAuditStateCostRowSet.total.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GLAuditStateCostRowSet_totalExpressions {
  @javax.annotation.Generated("config/web/pcf/job/audit/GLAuditStateCostRowSet.total.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GLAuditStateCostRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at GLAuditStateCostRowSet.total.pcf: line 20, column 47
    function valueRoot_1 () : java.lang.Object {
      return auditCostWrapper
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at GLAuditStateCostRowSet.total.pcf: line 20, column 47
    function value_0 () : java.lang.String {
      return auditCostWrapper.Description
    }
    
    // 'value' attribute on MonetaryAmountCell (id=EstimatedPremium_Cell) at GLAuditStateCostRowSet.total.pcf: line 32, column 50
    function value_3 () : gw.pl.currency.MonetaryAmount {
      return auditCostWrapper.EstimatedTotal
    }
    
    // 'value' attribute on MonetaryAmountCell (id=AuditedPremium_Cell) at GLAuditStateCostRowSet.total.pcf: line 38, column 48
    function value_6 () : gw.pl.currency.MonetaryAmount {
      return auditCostWrapper.AuditedTotal
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Change_Cell) at GLAuditStateCostRowSet.total.pcf: line 44, column 42
    function value_9 () : gw.pl.currency.MonetaryAmount {
      return auditCostWrapper.Change
    }
    
    // 'visible' attribute on Row at GLAuditStateCostRowSet.total.pcf: line 12, column 39
    function visible_12 () : java.lang.Boolean {
      return auditCostWrapper.Bold
    }
    
    // 'visible' attribute on Row at GLAuditStateCostRowSet.total.pcf: line 47, column 43
    function visible_25 () : java.lang.Boolean {
      return not auditCostWrapper.Bold
    }
    
    property get auditCostWrapper () : gw.api.ui.AuditCostWrapper {
      return getRequireValue("auditCostWrapper", 0) as gw.api.ui.AuditCostWrapper
    }
    
    property set auditCostWrapper ($arg :  gw.api.ui.AuditCostWrapper) {
      setRequireValue("auditCostWrapper", 0, $arg)
    }
    
    
  }
  
  
}