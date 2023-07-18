package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/summary/SplitPolicyListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SplitPolicyListViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/summary/SplitPolicyListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SplitPolicyListViewTileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at SplitPolicyListViewTile.pcf: line 56, column 55
    function action_21 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at SplitPolicyListViewTile.pcf: line 36, column 124
    function action_9 () : void {
      gw.pcf.policysummary.SplitPolicyHelper.forwardToJobOrPolicy(splitPolicy.Period, splitPolicy.IsBound)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at SplitPolicyListViewTile.pcf: line 56, column 55
    function action_dest_22 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at SplitPolicyListViewTile.pcf: line 41, column 59
    function valueRoot_13 () : java.lang.Object {
      return splitPolicy.Period
    }
    
    // 'value' attribute on TextCell (id=Account_Cell) at SplitPolicyListViewTile.pcf: line 46, column 68
    function valueRoot_16 () : java.lang.Object {
      return splitPolicy.Period.Policy.Account
    }
    
    // 'value' attribute on TextCell (id=AccountHolder_Cell) at SplitPolicyListViewTile.pcf: line 51, column 87
    function valueRoot_19 () : java.lang.Object {
      return splitPolicy.Period.Policy.Account.AccountHolderContact
    }
    
    // 'value' attribute on AltUserCell (id=Underwriter_Cell) at SplitPolicyListViewTile.pcf: line 56, column 55
    function valueRoot_24 () : java.lang.Object {
      return splitPolicy.Period.Job
    }
    
    // 'value' attribute on DateCell (id=CreateTime_Cell) at SplitPolicyListViewTile.pcf: line 30, column 50
    function valueRoot_7 () : java.lang.Object {
      return splitPolicy.Policy
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at SplitPolicyListViewTile.pcf: line 36, column 124
    function value_10 () : java.lang.String {
      return (splitPolicy.IsBound) ? splitPolicy.Period.PolicyNumberDisplayString : splitPolicy.Period.Job.JobNumber
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at SplitPolicyListViewTile.pcf: line 41, column 59
    function value_12 () : java.lang.String {
      return splitPolicy.Period.PeriodDisplayStatus
    }
    
    // 'value' attribute on TextCell (id=Account_Cell) at SplitPolicyListViewTile.pcf: line 46, column 68
    function value_15 () : java.lang.String {
      return splitPolicy.Period.Policy.Account.AccountNumber
    }
    
    // 'value' attribute on TextCell (id=AccountHolder_Cell) at SplitPolicyListViewTile.pcf: line 51, column 87
    function value_18 () : java.lang.String {
      return splitPolicy.Period.Policy.Account.AccountHolderContact.DisplayName
    }
    
    // 'value' attribute on AltUserCell (id=Underwriter_Cell) at SplitPolicyListViewTile.pcf: line 56, column 55
    function value_23 () : entity.User {
      return splitPolicy.Period.Job.Underwriter
    }
    
    // 'value' attribute on DateCell (id=CreateTime_Cell) at SplitPolicyListViewTile.pcf: line 30, column 50
    function value_6 () : java.util.Date {
      return splitPolicy.Policy.CreateTime
    }
    
    property get splitPolicy () : gw.pcf.policysummary.SplitPolicyHelper.SplitPolicyInfo {
      return getIteratedValue(1) as gw.pcf.policysummary.SplitPolicyHelper.SplitPolicyInfo
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policyfile/summary/SplitPolicyListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SplitPolicyListViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=SplitPolicyListViewTile) at SplitPolicyListViewTile.pcf: line 11, column 56
    function action_28 () : void {
      SplitPolicyPopup.push(policyPeriod)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=SplitPolicyListViewTile) at SplitPolicyListViewTile.pcf: line 11, column 56
    function action_dest_29 () : pcf.api.Destination {
      return pcf.SplitPolicyPopup.createDestination(policyPeriod)
    }
    
    // 'initialValue' attribute on Variable at SplitPolicyListViewTile.pcf: line 18, column 72
    function initialValue_27 () : gw.pcf.policysummary.SplitPolicyHelper.SplitPolicyInfo[] {
      return gw.pcf.policysummary.SplitPolicyHelper.filteredDividedPolicies(policyPeriod)
    }
    
    // 'value' attribute on DateCell (id=CreateTime_Cell) at SplitPolicyListViewTile.pcf: line 30, column 50
    function sortValue_0 (splitPolicy :  gw.pcf.policysummary.SplitPolicyHelper.SplitPolicyInfo) : java.lang.Object {
      return splitPolicy.Policy.CreateTime
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at SplitPolicyListViewTile.pcf: line 36, column 124
    function sortValue_1 (splitPolicy :  gw.pcf.policysummary.SplitPolicyHelper.SplitPolicyInfo) : java.lang.Object {
      return (splitPolicy.IsBound) ? splitPolicy.Period.PolicyNumberDisplayString : splitPolicy.Period.Job.JobNumber
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at SplitPolicyListViewTile.pcf: line 41, column 59
    function sortValue_2 (splitPolicy :  gw.pcf.policysummary.SplitPolicyHelper.SplitPolicyInfo) : java.lang.Object {
      return splitPolicy.Period.PeriodDisplayStatus
    }
    
    // 'value' attribute on TextCell (id=Account_Cell) at SplitPolicyListViewTile.pcf: line 46, column 68
    function sortValue_3 (splitPolicy :  gw.pcf.policysummary.SplitPolicyHelper.SplitPolicyInfo) : java.lang.Object {
      return splitPolicy.Period.Policy.Account.AccountNumber
    }
    
    // 'value' attribute on TextCell (id=AccountHolder_Cell) at SplitPolicyListViewTile.pcf: line 51, column 87
    function sortValue_4 (splitPolicy :  gw.pcf.policysummary.SplitPolicyHelper.SplitPolicyInfo) : java.lang.Object {
      return splitPolicy.Period.Policy.Account.AccountHolderContact.DisplayName
    }
    
    // 'value' attribute on AltUserCell (id=Underwriter_Cell) at SplitPolicyListViewTile.pcf: line 56, column 55
    function sortValue_5 (splitPolicy :  gw.pcf.policysummary.SplitPolicyHelper.SplitPolicyInfo) : java.lang.Object {
      return splitPolicy.Period.Job.Underwriter
    }
    
    // 'value' attribute on RowIterator (id=splitPolicy) at SplitPolicyListViewTile.pcf: line 24, column 76
    function value_26 () : gw.pcf.policysummary.SplitPolicyHelper.SplitPolicyInfo[] {
      return splitPolicies
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get splitPolicies () : gw.pcf.policysummary.SplitPolicyHelper.SplitPolicyInfo[] {
      return getVariableValue("splitPolicies", 0) as gw.pcf.policysummary.SplitPolicyHelper.SplitPolicyInfo[]
    }
    
    property set splitPolicies ($arg :  gw.pcf.policysummary.SplitPolicyHelper.SplitPolicyInfo[]) {
      setVariableValue("splitPolicies", 0, $arg)
    }
    
    
  }
  
  
}