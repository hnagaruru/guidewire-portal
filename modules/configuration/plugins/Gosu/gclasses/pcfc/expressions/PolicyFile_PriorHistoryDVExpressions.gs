package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_PriorHistoryDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_PriorHistoryDVExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_PriorHistoryDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PolicyFile_PriorHistoryDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Carrier_Cell) at PolicyFile_PriorHistoryDV.pcf: line 36, column 46
    function valueRoot_17 () : java.lang.Object {
      return priorPolicy
    }
    
    // 'value' attribute on TextCell (id=Carrier_Cell) at PolicyFile_PriorHistoryDV.pcf: line 36, column 46
    function value_16 () : java.lang.String {
      return priorPolicy.Carrier
    }
    
    // 'value' attribute on TextCell (id=PolicyLinePattern_Cell) at PolicyFile_PriorHistoryDV.pcf: line 41, column 68
    function value_19 () : gw.api.productmodel.PolicyLinePattern {
      return priorPolicy.PolicyLinePattern
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at PolicyFile_PriorHistoryDV.pcf: line 45, column 51
    function value_22 () : java.lang.String {
      return priorPolicy.PolicyNumber
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at PolicyFile_PriorHistoryDV.pcf: line 50, column 52
    function value_25 () : java.util.Date {
      return priorPolicy.EffectiveDate
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at PolicyFile_PriorHistoryDV.pcf: line 54, column 53
    function value_28 () : java.util.Date {
      return priorPolicy.ExpirationDate
    }
    
    // 'value' attribute on TextCell (id=AnnualPremium_Cell) at PolicyFile_PriorHistoryDV.pcf: line 60, column 60
    function value_31 () : gw.pl.currency.MonetaryAmount {
      return priorPolicy.AnnualPremium
    }
    
    // 'value' attribute on TextCell (id=NumLosses_Cell) at PolicyFile_PriorHistoryDV.pcf: line 66, column 48
    function value_34 () : java.lang.Integer {
      return priorPolicy.NumLosses
    }
    
    // 'value' attribute on TextCell (id=TotalLosses_Cell) at PolicyFile_PriorHistoryDV.pcf: line 72, column 60
    function value_37 () : gw.pl.currency.MonetaryAmount {
      return priorPolicy.TotalLosses
    }
    
    // 'value' attribute on TextCell (id=LossRatio_Cell) at PolicyFile_PriorHistoryDV.pcf: line 76, column 278
    function value_40 () : java.lang.String {
      return gw.api.util.StringUtil.formatNumber(((priorPolicy.TotalLosses != null and priorPolicy.AnnualPremium != null and priorPolicy.AnnualPremium.IsNotZero) ? (priorPolicy.TotalLosses / priorPolicy.AnnualPremium) : null) as java.lang.Double, "#.0%")
    }
    
    property get priorPolicy () : entity.PriorPolicy {
      return getIteratedValue(1) as entity.PriorPolicy
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_PriorHistoryDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_PriorHistoryDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Carrier_Cell) at PolicyFile_PriorHistoryDV.pcf: line 36, column 46
    function sortValue_1 (priorPolicy :  entity.PriorPolicy) : java.lang.Object {
      return priorPolicy.Carrier
    }
    
    // 'value' attribute on TextCell (id=PolicyLinePattern_Cell) at PolicyFile_PriorHistoryDV.pcf: line 41, column 68
    function sortValue_2 (priorPolicy :  entity.PriorPolicy) : java.lang.Object {
      return priorPolicy.PolicyLinePattern
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at PolicyFile_PriorHistoryDV.pcf: line 45, column 51
    function sortValue_3 (priorPolicy :  entity.PriorPolicy) : java.lang.Object {
      return priorPolicy.PolicyNumber
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at PolicyFile_PriorHistoryDV.pcf: line 50, column 52
    function sortValue_4 (priorPolicy :  entity.PriorPolicy) : java.lang.Object {
      return priorPolicy.EffectiveDate
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at PolicyFile_PriorHistoryDV.pcf: line 54, column 53
    function sortValue_5 (priorPolicy :  entity.PriorPolicy) : java.lang.Object {
      return priorPolicy.ExpirationDate
    }
    
    // 'value' attribute on TextCell (id=AnnualPremium_Cell) at PolicyFile_PriorHistoryDV.pcf: line 60, column 60
    function sortValue_6 (priorPolicy :  entity.PriorPolicy) : java.lang.Object {
      return priorPolicy.AnnualPremium
    }
    
    // 'value' attribute on TextCell (id=NumLosses_Cell) at PolicyFile_PriorHistoryDV.pcf: line 66, column 48
    function sortValue_7 (priorPolicy :  entity.PriorPolicy) : java.lang.Object {
      return priorPolicy.NumLosses
    }
    
    // 'value' attribute on TextCell (id=TotalLosses_Cell) at PolicyFile_PriorHistoryDV.pcf: line 72, column 60
    function sortValue_8 (priorPolicy :  entity.PriorPolicy) : java.lang.Object {
      return priorPolicy.TotalLosses
    }
    
    // 'value' attribute on TextCell (id=LossRatio_Cell) at PolicyFile_PriorHistoryDV.pcf: line 76, column 278
    function sortValue_9 (priorPolicy :  entity.PriorPolicy) : java.lang.Object {
      return gw.api.util.StringUtil.formatNumber(((priorPolicy.TotalLosses != null and priorPolicy.AnnualPremium != null and priorPolicy.AnnualPremium.IsNotZero) ? (priorPolicy.TotalLosses / priorPolicy.AnnualPremium) : null) as java.lang.Double, "#.0%")
    }
    
    // '$$sumValue' attribute on RowIterator at PolicyFile_PriorHistoryDV.pcf: line 60, column 60
    function sumValueRoot_11 (priorPolicy :  entity.PriorPolicy) : java.lang.Object {
      return priorPolicy
    }
    
    // 'footerSumValue' attribute on RowIterator at PolicyFile_PriorHistoryDV.pcf: line 60, column 60
    function sumValue_10 (priorPolicy :  entity.PriorPolicy) : java.lang.Object {
      return priorPolicy.AnnualPremium
    }
    
    // 'footerSumValue' attribute on RowIterator at PolicyFile_PriorHistoryDV.pcf: line 66, column 48
    function sumValue_12 (priorPolicy :  entity.PriorPolicy) : java.lang.Object {
      return priorPolicy.NumLosses
    }
    
    // 'footerSumValue' attribute on RowIterator at PolicyFile_PriorHistoryDV.pcf: line 72, column 60
    function sumValue_14 (priorPolicy :  entity.PriorPolicy) : java.lang.Object {
      return priorPolicy.TotalLosses
    }
    
    // 'value' attribute on RowIterator at PolicyFile_PriorHistoryDV.pcf: line 30, column 46
    function value_42 () : entity.PriorPolicy[] {
      return policy.PriorPolicies
    }
    
    // 'visible' attribute on Label at PolicyFile_PriorHistoryDV.pcf: line 18, column 53
    function visible_0 () : java.lang.Boolean {
      return policy.PriorPolicies.length == 0
    }
    
    // 'visible' attribute on ListViewInput at PolicyFile_PriorHistoryDV.pcf: line 22, column 52
    function visible_43 () : java.lang.Boolean {
      return policy.PriorPolicies.length != 0
    }
    
    property get policy () : Policy {
      return getRequireValue("policy", 0) as Policy
    }
    
    property set policy ($arg :  Policy) {
      setRequireValue("policy", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}