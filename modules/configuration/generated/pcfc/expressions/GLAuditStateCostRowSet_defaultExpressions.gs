package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/audit/GLAuditStateCostRowSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GLAuditStateCostRowSet_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/job/audit/GLAuditStateCostRowSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GLAuditStateCostRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at GLAuditStateCostRowSet.default.pcf: line 14, column 22
    function initialValue_0 () : GLCost {
      return auditCostWrapper.Cost as GLCost
    }
    
    // 'value' attribute on MonetaryAmountCell (id=EstimatedPremium_Cell) at GLAuditStateCostRowSet.default.pcf: line 42, column 53
    function valueRoot_11 () : java.lang.Object {
      return glCost.BasedOn
    }
    
    // 'value' attribute on MonetaryAmountCell (id=AuditedPremium_Cell) at GLAuditStateCostRowSet.default.pcf: line 47, column 45
    function valueRoot_14 () : java.lang.Object {
      return glCost
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at GLAuditStateCostRowSet.default.pcf: line 24, column 47
    function valueRoot_2 () : java.lang.Object {
      return auditCostWrapper
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at GLAuditStateCostRowSet.default.pcf: line 24, column 47
    function value_1 () : java.lang.String {
      return auditCostWrapper.Description
    }
    
    // 'value' attribute on MonetaryAmountCell (id=EstimatedPremium_Cell) at GLAuditStateCostRowSet.default.pcf: line 42, column 53
    function value_10 () : gw.pl.currency.MonetaryAmount {
      return glCost.BasedOn.ActualAmountBilling
    }
    
    // 'value' attribute on MonetaryAmountCell (id=AuditedPremium_Cell) at GLAuditStateCostRowSet.default.pcf: line 47, column 45
    function value_13 () : gw.pl.currency.MonetaryAmount {
      return glCost.ActualAmountBilling
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Change_Cell) at GLAuditStateCostRowSet.default.pcf: line 52, column 82
    function value_16 () : gw.pl.currency.MonetaryAmount {
      return glCost.ActualAmountBilling - glCost.BasedOn.ActualAmountBilling
    }
    
    // 'value' attribute on TextCell (id=Rate_Cell) at GLAuditStateCostRowSet.default.pcf: line 29, column 95
    function value_4 () : java.lang.String {
      return glCost.ActualAdjRate == 0 ? "" : glCost.ActualAdjRate.DisplayValue
    }
    
    // 'value' attribute on TextCell (id=EstimatedBasis_Cell) at GLAuditStateCostRowSet.default.pcf: line 33, column 95
    function value_6 () : java.lang.String {
      return glCost.BasedOn.Basis == 0 ? "" : glCost.BasedOn.Basis.DisplayValue
    }
    
    // 'value' attribute on TextCell (id=AuditedBasis_Cell) at GLAuditStateCostRowSet.default.pcf: line 37, column 79
    function value_8 () : java.lang.String {
      return glCost.Basis == 0 ? "" : glCost.Basis.DisplayValue
    }
    
    // 'visible' attribute on Row (id=CostRow) at GLAuditStateCostRowSet.default.pcf: line 17, column 55
    function visible_18 () : java.lang.Boolean {
      return not glCost.ActualAmountBilling.IsZero
    }
    
    property get auditCostWrapper () : gw.api.ui.AuditCostWrapper {
      return getRequireValue("auditCostWrapper", 0) as gw.api.ui.AuditCostWrapper
    }
    
    property set auditCostWrapper ($arg :  gw.api.ui.AuditCostWrapper) {
      setRequireValue("auditCostWrapper", 0, $arg)
    }
    
    property get glCost () : GLCost {
      return getVariableValue("glCost", 0) as GLCost
    }
    
    property set glCost ($arg :  GLCost) {
      setVariableValue("glCost", 0, $arg)
    }
    
    
  }
  
  
}