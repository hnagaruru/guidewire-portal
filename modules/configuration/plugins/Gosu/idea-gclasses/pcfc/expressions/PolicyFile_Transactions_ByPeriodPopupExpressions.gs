package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Transactions_ByPeriodPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_Transactions_ByPeriodPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Transactions_ByPeriodPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PolicyFile_Transactions_ByPeriodPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=ByCostKey_Cell) at PolicyFile_Transactions_ByPeriodPopup.pcf: line 43, column 100
    function action_14 () : void {
      PolicyFile_Transactions_ByCostKeyPopup.push(repPeriod)
    }
    
    // 'action' attribute on TextCell (id=ByCost_Cell) at PolicyFile_Transactions_ByPeriodPopup.pcf: line 48, column 97
    function action_16 () : void {
      PolicyFile_Transactions_ByCostPopup.push(repPeriod)
    }
    
    // 'action' attribute on TextCell (id=ByCostKey_Cell) at PolicyFile_Transactions_ByPeriodPopup.pcf: line 43, column 100
    function action_dest_15 () : pcf.api.Destination {
      return pcf.PolicyFile_Transactions_ByCostKeyPopup.createDestination(repPeriod)
    }
    
    // 'action' attribute on TextCell (id=ByCost_Cell) at PolicyFile_Transactions_ByPeriodPopup.pcf: line 48, column 97
    function action_dest_17 () : pcf.api.Destination {
      return pcf.PolicyFile_Transactions_ByCostPopup.createDestination(repPeriod)
    }
    
    // 'value' attribute on DateCell (id=PeriodStart_Cell) at PolicyFile_Transactions_ByPeriodPopup.pcf: line 30, column 46
    function valueRoot_6 () : java.lang.Object {
      return repPeriod
    }
    
    // 'value' attribute on DateCell (id=CancellationDate_Cell) at PolicyFile_Transactions_ByPeriodPopup.pcf: line 38, column 51
    function value_11 () : java.util.Date {
      return repPeriod.CancellationDate
    }
    
    // 'value' attribute on DateCell (id=PeriodStart_Cell) at PolicyFile_Transactions_ByPeriodPopup.pcf: line 30, column 46
    function value_5 () : java.util.Date {
      return repPeriod.PeriodStart
    }
    
    // 'value' attribute on DateCell (id=PeriodEnd_Cell) at PolicyFile_Transactions_ByPeriodPopup.pcf: line 34, column 44
    function value_8 () : java.util.Date {
      return repPeriod.PeriodEnd
    }
    
    property get repPeriod () : entity.PolicyPeriod {
      return getIteratedValue(1) as entity.PolicyPeriod
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Transactions_ByPeriodPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_Transactions_ByPeriodPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (period :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'parent' attribute on Popup (id=PolicyFile_Transactions_ByPeriodPopup) at PolicyFile_Transactions_ByPeriodPopup.pcf: line 8, column 78
    static function parent_19 (asOfDate :  java.util.Date, period :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(period, asOfDate)
    }
    
    // 'value' attribute on DateCell (id=PeriodStart_Cell) at PolicyFile_Transactions_ByPeriodPopup.pcf: line 30, column 46
    function sortValue_0 (repPeriod :  entity.PolicyPeriod) : java.lang.Object {
      return repPeriod.PeriodStart
    }
    
    // 'value' attribute on DateCell (id=PeriodEnd_Cell) at PolicyFile_Transactions_ByPeriodPopup.pcf: line 34, column 44
    function sortValue_1 (repPeriod :  entity.PolicyPeriod) : java.lang.Object {
      return repPeriod.PeriodEnd
    }
    
    // 'value' attribute on DateCell (id=CancellationDate_Cell) at PolicyFile_Transactions_ByPeriodPopup.pcf: line 38, column 51
    function sortValue_2 (repPeriod :  entity.PolicyPeriod) : java.lang.Object {
      return repPeriod.CancellationDate
    }
    
    // 'value' attribute on TextCell (id=ByCostKey_Cell) at PolicyFile_Transactions_ByPeriodPopup.pcf: line 43, column 100
    function sortValue_3 (repPeriod :  entity.PolicyPeriod) : java.lang.Object {
      return DisplayKey.get("Web.PolicyFile.Transactions.ByJob.ViewByCostKey")
    }
    
    // 'value' attribute on TextCell (id=ByCost_Cell) at PolicyFile_Transactions_ByPeriodPopup.pcf: line 48, column 97
    function sortValue_4 (repPeriod :  entity.PolicyPeriod) : java.lang.Object {
      return DisplayKey.get("Web.PolicyFile.Transactions.ByJob.ViewByCost")
    }
    
    // 'value' attribute on RowIterator at PolicyFile_Transactions_ByPeriodPopup.pcf: line 25, column 45
    function value_18 () : entity.PolicyPeriod[] {
      return findRepresentativePeriods()
    }
    
    override property get CurrentLocation () : pcf.PolicyFile_Transactions_ByPeriodPopup {
      return super.CurrentLocation as pcf.PolicyFile_Transactions_ByPeriodPopup
    }
    
    property get asOfDate () : java.util.Date {
      return getVariableValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setVariableValue("asOfDate", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getVariableValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setVariableValue("period", 0, $arg)
    }
    
    function findRepresentativePeriods() : entity.PolicyPeriod[] {
      return period.Policy.BoundPeriods.where(\p -> p.MostRecentModel).orderBy(\p -> p.PeriodStart)?.toTypedArray()
    }
    
    
  }
  
  
}