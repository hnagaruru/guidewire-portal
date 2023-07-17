package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/renmgr/RenewalGroupJobsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RenewalGroupJobsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/account/renmgr/RenewalGroupJobsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RenewalGroupJobsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at RenewalGroupJobsLV.pcf: line 35, column 67
    function action_17 () : void {
      pcf.PolicyFileForward.go( renewal.LatestPeriod, renewal.LatestPeriod.EditEffectiveDate )
    }
    
    // 'action' attribute on TextCell (id=Renewal_Cell) at RenewalGroupJobsLV.pcf: line 25, column 38
    function action_9 () : void {
      JobForward.go(renewal)
    }
    
    // 'action' attribute on TextCell (id=Renewal_Cell) at RenewalGroupJobsLV.pcf: line 25, column 38
    function action_dest_10 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(renewal)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at RenewalGroupJobsLV.pcf: line 35, column 67
    function action_dest_18 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination( renewal.LatestPeriod, renewal.LatestPeriod.EditEffectiveDate )
    }
    
    // 'useArchivedStyle' attribute on Row at RenewalGroupJobsLV.pcf: line 16, column 74
    function useArchivedStyle_28 () : java.lang.Boolean {
      return renewal.LatestPeriod.PolicyTerm.CheckArchived
    }
    
    // 'value' attribute on TextCell (id=Renewal_Cell) at RenewalGroupJobsLV.pcf: line 25, column 38
    function valueRoot_12 () : java.lang.Object {
      return renewal
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at RenewalGroupJobsLV.pcf: line 30, column 51
    function valueRoot_15 () : java.lang.Object {
      return renewal.LatestPeriod
    }
    
    // 'value' attribute on TextCell (id=PolicyType_Cell) at RenewalGroupJobsLV.pcf: line 20, column 48
    function valueRoot_7 () : java.lang.Object {
      return renewal.Policy.Product
    }
    
    // 'value' attribute on TextCell (id=Renewal_Cell) at RenewalGroupJobsLV.pcf: line 25, column 38
    function value_11 () : java.lang.String {
      return renewal.JobNumber
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at RenewalGroupJobsLV.pcf: line 30, column 51
    function value_14 () : typekey.PolicyPeriodStatus {
      return renewal.LatestPeriod.Status
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at RenewalGroupJobsLV.pcf: line 35, column 67
    function value_19 () : java.lang.String {
      return renewal.LatestPeriod.PolicyNumberDisplayString
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at RenewalGroupJobsLV.pcf: line 39, column 39
    function value_22 () : java.util.Date {
      return renewal.CreateTime
    }
    
    // 'value' attribute on DateCell (id=CloseDate_Cell) at RenewalGroupJobsLV.pcf: line 43, column 38
    function value_25 () : java.util.Date {
      return renewal.CloseDate
    }
    
    // 'value' attribute on TextCell (id=PolicyType_Cell) at RenewalGroupJobsLV.pcf: line 20, column 48
    function value_6 () : java.lang.String {
      return renewal.Policy.Product.Name
    }
    
    property get renewal () : entity.Renewal {
      return getIteratedValue(1) as entity.Renewal
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/renmgr/RenewalGroupJobsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RenewalGroupJobsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=PolicyType_Cell) at RenewalGroupJobsLV.pcf: line 20, column 48
    function sortValue_0 (renewal :  entity.Renewal) : java.lang.Object {
      return renewal.Policy.Product.Name
    }
    
    // 'value' attribute on TextCell (id=Renewal_Cell) at RenewalGroupJobsLV.pcf: line 25, column 38
    function sortValue_1 (renewal :  entity.Renewal) : java.lang.Object {
      return renewal.JobNumber
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at RenewalGroupJobsLV.pcf: line 30, column 51
    function sortValue_2 (renewal :  entity.Renewal) : java.lang.Object {
      return renewal.LatestPeriod.Status
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at RenewalGroupJobsLV.pcf: line 35, column 67
    function sortValue_3 (renewal :  entity.Renewal) : java.lang.Object {
      return renewal.LatestPeriod.PolicyNumberDisplayString
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at RenewalGroupJobsLV.pcf: line 39, column 39
    function sortValue_4 (renewal :  entity.Renewal) : java.lang.Object {
      return renewal.CreateTime
    }
    
    // 'value' attribute on DateCell (id=CloseDate_Cell) at RenewalGroupJobsLV.pcf: line 43, column 38
    function sortValue_5 (renewal :  entity.Renewal) : java.lang.Object {
      return renewal.CloseDate
    }
    
    // 'value' attribute on RowIterator at RenewalGroupJobsLV.pcf: line 14, column 36
    function value_29 () : entity.Renewal[] {
      return renewalGroup.Renewals
    }
    
    property get renewalGroup () : RenewalGroup {
      return getRequireValue("renewalGroup", 0) as RenewalGroup
    }
    
    property set renewalGroup ($arg :  RenewalGroup) {
      setRequireValue("renewalGroup", 0, $arg)
    }
    
    
  }
  
  
}