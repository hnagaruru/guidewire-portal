package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/summary/SplitPolicyPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SplitPolicyPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/summary/SplitPolicyPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at SplitPolicyPopup.pcf: line 34, column 126
    function action_10 () : void {
      gw.pcf.policysummary.SplitPolicyHelper.forwardToJobOrPolicy(splitPolicy.Period, splitPolicy.IsBound)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at SplitPolicyPopup.pcf: line 50, column 59
    function action_22 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // MenuItem (id=UserBrowseMenuItem) at SplitPolicyPopup.pcf: line 50, column 59
    function action_dest_23 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at SplitPolicyPopup.pcf: line 38, column 63
    function valueRoot_14 () : java.lang.Object {
      return splitPolicy.Period
    }
    
    // 'value' attribute on TextCell (id=Account_Cell) at SplitPolicyPopup.pcf: line 42, column 72
    function valueRoot_17 () : java.lang.Object {
      return splitPolicy.Period.Policy.Account
    }
    
    // 'value' attribute on TextCell (id=AccountHolder_Cell) at SplitPolicyPopup.pcf: line 46, column 91
    function valueRoot_20 () : java.lang.Object {
      return splitPolicy.Period.Policy.Account.AccountHolderContact
    }
    
    // 'value' attribute on AltUserCell (id=Underwriter_Cell) at SplitPolicyPopup.pcf: line 50, column 59
    function valueRoot_25 () : java.lang.Object {
      return splitPolicy.Period.Job
    }
    
    // 'value' attribute on DateCell (id=CreateTime_Cell) at SplitPolicyPopup.pcf: line 29, column 54
    function valueRoot_8 () : java.lang.Object {
      return splitPolicy.Policy
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at SplitPolicyPopup.pcf: line 34, column 126
    function value_11 () : java.lang.String {
      return splitPolicy.IsBound ? splitPolicy.Period.PolicyNumberDisplayString : splitPolicy.Period.Job.JobNumber
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at SplitPolicyPopup.pcf: line 38, column 63
    function value_13 () : java.lang.String {
      return splitPolicy.Period.PeriodDisplayStatus
    }
    
    // 'value' attribute on TextCell (id=Account_Cell) at SplitPolicyPopup.pcf: line 42, column 72
    function value_16 () : java.lang.String {
      return splitPolicy.Period.Policy.Account.AccountNumber
    }
    
    // 'value' attribute on TextCell (id=AccountHolder_Cell) at SplitPolicyPopup.pcf: line 46, column 91
    function value_19 () : java.lang.String {
      return splitPolicy.Period.Policy.Account.AccountHolderContact.DisplayName
    }
    
    // 'value' attribute on AltUserCell (id=Underwriter_Cell) at SplitPolicyPopup.pcf: line 50, column 59
    function value_24 () : entity.User {
      return splitPolicy.Period.Job.Underwriter
    }
    
    // 'value' attribute on DateCell (id=CreateTime_Cell) at SplitPolicyPopup.pcf: line 29, column 54
    function value_7 () : java.util.Date {
      return splitPolicy.Policy.CreateTime
    }
    
    property get splitPolicy () : gw.pcf.policysummary.SplitPolicyHelper.SplitPolicyInfo {
      return getIteratedValue(2) as gw.pcf.policysummary.SplitPolicyHelper.SplitPolicyInfo
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policyfile/summary/SplitPolicyPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ScreenExpressionsImpl extends SplitPolicyPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at SplitPolicyPopup.pcf: line 17, column 74
    function initialValue_0 () : gw.pcf.policysummary.SplitPolicyHelper.SplitPolicyInfo[] {
      return gw.pcf.policysummary.SplitPolicyHelper.filteredDividedPolicies(policyPeriod)
    }
    
    // 'value' attribute on DateCell (id=CreateTime_Cell) at SplitPolicyPopup.pcf: line 29, column 54
    function sortValue_1 (splitPolicy :  gw.pcf.policysummary.SplitPolicyHelper.SplitPolicyInfo) : java.lang.Object {
      return splitPolicy.Policy.CreateTime
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at SplitPolicyPopup.pcf: line 34, column 126
    function sortValue_2 (splitPolicy :  gw.pcf.policysummary.SplitPolicyHelper.SplitPolicyInfo) : java.lang.Object {
      return splitPolicy.IsBound ? splitPolicy.Period.PolicyNumberDisplayString : splitPolicy.Period.Job.JobNumber
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at SplitPolicyPopup.pcf: line 38, column 63
    function sortValue_3 (splitPolicy :  gw.pcf.policysummary.SplitPolicyHelper.SplitPolicyInfo) : java.lang.Object {
      return splitPolicy.Period.PeriodDisplayStatus
    }
    
    // 'value' attribute on TextCell (id=Account_Cell) at SplitPolicyPopup.pcf: line 42, column 72
    function sortValue_4 (splitPolicy :  gw.pcf.policysummary.SplitPolicyHelper.SplitPolicyInfo) : java.lang.Object {
      return splitPolicy.Period.Policy.Account.AccountNumber
    }
    
    // 'value' attribute on TextCell (id=AccountHolder_Cell) at SplitPolicyPopup.pcf: line 46, column 91
    function sortValue_5 (splitPolicy :  gw.pcf.policysummary.SplitPolicyHelper.SplitPolicyInfo) : java.lang.Object {
      return splitPolicy.Period.Policy.Account.AccountHolderContact.DisplayName
    }
    
    // 'value' attribute on AltUserCell (id=Underwriter_Cell) at SplitPolicyPopup.pcf: line 50, column 59
    function sortValue_6 (splitPolicy :  gw.pcf.policysummary.SplitPolicyHelper.SplitPolicyInfo) : java.lang.Object {
      return splitPolicy.Period.Job.Underwriter
    }
    
    // 'value' attribute on RowIterator (id=splitPolicy) at SplitPolicyPopup.pcf: line 24, column 80
    function value_27 () : gw.pcf.policysummary.SplitPolicyHelper.SplitPolicyInfo[] {
      return splitPolicies
    }
    
    property get splitPolicies () : gw.pcf.policysummary.SplitPolicyHelper.SplitPolicyInfo[] {
      return getVariableValue("splitPolicies", 1) as gw.pcf.policysummary.SplitPolicyHelper.SplitPolicyInfo[]
    }
    
    property set splitPolicies ($arg :  gw.pcf.policysummary.SplitPolicyHelper.SplitPolicyInfo[]) {
      setVariableValue("splitPolicies", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policyfile/summary/SplitPolicyPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SplitPolicyPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod) : int {
      return 0
    }
    
    override property get CurrentLocation () : pcf.SplitPolicyPopup {
      return super.CurrentLocation as pcf.SplitPolicyPopup
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}