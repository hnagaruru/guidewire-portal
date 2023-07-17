package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/RiskEvaluationPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RiskEvaluationPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/RiskEvaluationPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RiskEvaluationPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'checkBoxVisible' attribute on RowIterator (id=issueIterator) at RiskEvaluationPanelSet.pcf: line 94, column 70
    function checkBoxVisible_28 () : java.lang.Boolean {
      return issue.IsItem and !gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod)
    }
    
    // 'condition' attribute on ToolbarFlag at RiskEvaluationPanelSet.pcf: line 97, column 32
    function condition_18 () : java.lang.Boolean {
      return issue.Approve.Available
    }
    
    // 'condition' attribute on ToolbarFlag at RiskEvaluationPanelSet.pcf: line 100, column 32
    function condition_19 () : java.lang.Boolean {
      return issue.Reopen.Available
    }
    
    // 'condition' attribute on ToolbarFlag at RiskEvaluationPanelSet.pcf: line 103, column 32
    function condition_20 () : java.lang.Boolean {
      return issue.Reject.Available
    }
    
    // 'def' attribute on RowSetRef at RiskEvaluationPanelSet.pcf: line 108, column 32
    function def_onEnter_21 (def :  pcf.UWIssueRowSet_default) : void {
      def.onEnter(issue, canApproveRejectReopenIssue and not (policyPeriod.Promoted or policyPeriod.Status == PolicyPeriodStatus.TC_WITHDRAWN))
    }
    
    // 'def' attribute on RowSetRef at RiskEvaluationPanelSet.pcf: line 108, column 32
    function def_onEnter_23 (def :  pcf.UWIssueRowSet_issue) : void {
      def.onEnter(issue, canApproveRejectReopenIssue and not (policyPeriod.Promoted or policyPeriod.Status == PolicyPeriodStatus.TC_WITHDRAWN))
    }
    
    // 'def' attribute on RowSetRef at RiskEvaluationPanelSet.pcf: line 108, column 32
    function def_onEnter_25 (def :  pcf.UWIssueRowSet_label) : void {
      def.onEnter(issue, canApproveRejectReopenIssue and not (policyPeriod.Promoted or policyPeriod.Status == PolicyPeriodStatus.TC_WITHDRAWN))
    }
    
    // 'def' attribute on RowSetRef at RiskEvaluationPanelSet.pcf: line 108, column 32
    function def_refreshVariables_22 (def :  pcf.UWIssueRowSet_default) : void {
      def.refreshVariables(issue, canApproveRejectReopenIssue and not (policyPeriod.Promoted or policyPeriod.Status == PolicyPeriodStatus.TC_WITHDRAWN))
    }
    
    // 'def' attribute on RowSetRef at RiskEvaluationPanelSet.pcf: line 108, column 32
    function def_refreshVariables_24 (def :  pcf.UWIssueRowSet_issue) : void {
      def.refreshVariables(issue, canApproveRejectReopenIssue and not (policyPeriod.Promoted or policyPeriod.Status == PolicyPeriodStatus.TC_WITHDRAWN))
    }
    
    // 'def' attribute on RowSetRef at RiskEvaluationPanelSet.pcf: line 108, column 32
    function def_refreshVariables_26 (def :  pcf.UWIssueRowSet_label) : void {
      def.refreshVariables(issue, canApproveRejectReopenIssue and not (policyPeriod.Promoted or policyPeriod.Status == PolicyPeriodStatus.TC_WITHDRAWN))
    }
    
    // 'mode' attribute on RowSetRef at RiskEvaluationPanelSet.pcf: line 108, column 32
    function mode_27 () : java.lang.Object {
      return issue.Mode
    }
    
    property get issue () : gw.web.policy.RiskEvaluationPanelSetModalRow {
      return getIteratedValue(1) as gw.web.policy.RiskEvaluationPanelSetModalRow
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policy/RiskEvaluationPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RiskEvaluationPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=History) at RiskEvaluationPanelSet.pcf: line 68, column 88
    function allCheckedRowsAction_10 (CheckedValues :  gw.web.policy.RiskEvaluationPanelSetModalRow[], CheckedValuesErrors :  java.util.Map) : void {
      var issues = new java.util.ArrayList(); CheckedValues.each(\ u -> issues.add(u.Item)); RiskApprovalDetailsPopup.push(gw.api.upgrade.Coercions.makeArray<entity.UWIssue>(issues), false, false)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=Approve) at RiskEvaluationPanelSet.pcf: line 46, column 50
    function allCheckedRowsAction_5 (CheckedValues :  gw.web.policy.RiskEvaluationPanelSetModalRow[], CheckedValuesErrors :  java.util.Map) : void {
      var issues = new java.util.ArrayList<UWIssue>(); CheckedValues.each(\ u -> issues.add(u.Item)); RiskApprovalDetailsPopup.push(issues?.toTypedArray(), true, false)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=Reject) at RiskEvaluationPanelSet.pcf: line 54, column 50
    function allCheckedRowsAction_7 (CheckedValues :  gw.web.policy.RiskEvaluationPanelSetModalRow[], CheckedValuesErrors :  java.util.Map) : void {
      CheckedValues.each( \ issue -> issue.Item.reject()); policyPeriod.Bundle.commit()
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=Reopen) at RiskEvaluationPanelSet.pcf: line 62, column 50
    function allCheckedRowsAction_9 (CheckedValues :  gw.web.policy.RiskEvaluationPanelSetModalRow[], CheckedValuesErrors :  java.util.Map) : void {
      CheckedValues.each( \ issue -> issue.Item.reopen()); policyPeriod.Bundle.commit()
    }
    
    // 'value' attribute on ToolbarRangeInput (id=UserViewFilter_Input) at RiskEvaluationPanelSet.pcf: line 79, column 40
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      userInView = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at RiskEvaluationPanelSet.pcf: line 22, column 120
    function initialValue_0 () : java.util.Map<java.lang.String, gw.util.Pair<entity.UWAuthorityProfile[], java.lang.String>> {
      return createUserProfilesMap()
    }
    
    // 'initialValue' attribute on Variable at RiskEvaluationPanelSet.pcf: line 27, column 43
    function initialValue_1 () : entity.UWAuthorityProfile[] {
      return userProfilesMap.get(userInView).First
    }
    
    // 'initialValue' attribute on Variable at RiskEvaluationPanelSet.pcf: line 32, column 62
    function initialValue_2 () : gw.web.policy.RiskEvaluationPanelSetModalRow[] {
      return gw.web.policy.RiskEvaluationPanelSetModalRowOrganizer.wrapIssues(policyPeriod.UWIssuesActiveOnly.viewableToUserWithProfiles(authorityProfiles))
    }
    
    // 'optionLabel' attribute on ToolbarRangeInput (id=UserViewFilter_Input) at RiskEvaluationPanelSet.pcf: line 79, column 40
    function optionLabel_13 (VALUE :  java.lang.String) : java.lang.String {
      return userProfilesMap.get(VALUE).Second
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=UserViewFilter_Input) at RiskEvaluationPanelSet.pcf: line 79, column 40
    function valueRange_14 () : java.lang.Object {
      return userProfilesMap.Keys.toTypedArray()
    }
    
    // 'value' attribute on ToolbarRangeInput (id=UserViewFilter_Input) at RiskEvaluationPanelSet.pcf: line 79, column 40
    function value_11 () : java.lang.String {
      return userInView
    }
    
    // 'value' attribute on RowIterator (id=issueIterator) at RiskEvaluationPanelSet.pcf: line 94, column 70
    function value_29 () : gw.web.policy.RiskEvaluationPanelSetModalRow[] {
      return wrappedIssues
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=UserViewFilter_Input) at RiskEvaluationPanelSet.pcf: line 79, column 40
    function verifyValueRangeIsAllowedType_15 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=UserViewFilter_Input) at RiskEvaluationPanelSet.pcf: line 79, column 40
    function verifyValueRangeIsAllowedType_15 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=UserViewFilter_Input) at RiskEvaluationPanelSet.pcf: line 79, column 40
    function verifyValueRange_16 () : void {
      var __valueRangeArg = userProfilesMap.Keys.toTypedArray()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_15(__valueRangeArg)
    }
    
    // 'visible' attribute on Verbatim (id=NoIssuesMessage) at RiskEvaluationPanelSet.pcf: line 36, column 40
    function visible_3 () : java.lang.Boolean {
      return wrappedIssues.IsEmpty
    }
    
    // 'visible' attribute on CheckedValuesToolbarButton (id=Approve) at RiskEvaluationPanelSet.pcf: line 46, column 50
    function visible_4 () : java.lang.Boolean {
      return canApproveRejectReopenIssue
    }
    
    property get authorityProfiles () : entity.UWAuthorityProfile[] {
      return getVariableValue("authorityProfiles", 0) as entity.UWAuthorityProfile[]
    }
    
    property set authorityProfiles ($arg :  entity.UWAuthorityProfile[]) {
      setVariableValue("authorityProfiles", 0, $arg)
    }
    
    property get canApproveRejectReopenIssue () : boolean {
      return getRequireValue("canApproveRejectReopenIssue", 0) as java.lang.Boolean
    }
    
    property set canApproveRejectReopenIssue ($arg :  boolean) {
      setRequireValue("canApproveRejectReopenIssue", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get userInView () : java.lang.String {
      return getVariableValue("userInView", 0) as java.lang.String
    }
    
    property set userInView ($arg :  java.lang.String) {
      setVariableValue("userInView", 0, $arg)
    }
    
    property get userProfilesMap () : java.util.Map<java.lang.String, gw.util.Pair<entity.UWAuthorityProfile[], java.lang.String>> {
      return getVariableValue("userProfilesMap", 0) as java.util.Map<java.lang.String, gw.util.Pair<entity.UWAuthorityProfile[], java.lang.String>>
    }
    
    property set userProfilesMap ($arg :  java.util.Map<java.lang.String, gw.util.Pair<entity.UWAuthorityProfile[], java.lang.String>>) {
      setVariableValue("userProfilesMap", 0, $arg)
    }
    
    property get wrappedIssues () : gw.web.policy.RiskEvaluationPanelSetModalRow[] {
      return getVariableValue("wrappedIssues", 0) as gw.web.policy.RiskEvaluationPanelSetModalRow[]
    }
    
    property set wrappedIssues ($arg :  gw.web.policy.RiskEvaluationPanelSetModalRow[]) {
      setVariableValue("wrappedIssues", 0, $arg)
    }
    
    function createUserProfilesMap() : java.util.Map<String, gw.util.Pair<UWAuthorityProfile[], String>> {
      // map where the value pair is the array of user profiles chosen and the localized name of the input label
      var map = new java.util.LinkedHashMap<String, gw.util.Pair<UWAuthorityProfile[], String>>()
      var currentUser = User.util.CurrentUser
      map.put("Me", gw.util.Pair<UWAuthorityProfile[], String>.make(currentUser.UWAuthorityProfiles, DisplayKey.get("Web.Policy.EvaluationIssues.ViewIssuesBlocking.Me"))) 
      //only displays users with certain roles if this pcf is used for jobs but not bound policies
      if (canApproveRejectReopenIssue) {
        var usersToView = policyPeriod.Job.getUsersWithUWPerspectives()
        usersToView.subtract(new User[]{currentUser}).toTypedArray().sortBy(\ u -> u.DisplayName).each(\ u -> map.put(u.DisplayName, gw.util.Pair<UWAuthorityProfile[], String>.make(u.UWAuthorityProfiles, u.DisplayName)))
      }
      map.put("View All", gw.util.Pair<UWAuthorityProfile[], String>.make(new UWAuthorityProfile[]{}, DisplayKey.get("Web.Policy.EvaluationIssues.ViewIssuesBlocking.ViewAll")))
    
      return map 
    }
    
    
  }
  
  
}