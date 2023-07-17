package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/summary/PolicyDetailsDetailViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyDetailsDetailViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/summary/PolicyDetailsDetailViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PolicyDetailsDetailViewTileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TileAction (id=item) at PolicyDetailsDetailViewTile.pcf: line 57, column 72
    function action_13 () : void {
      JobForward.go(cancellationJob, cancellationJob.PolicyPeriod)
    }
    
    // 'action' attribute on TileAction (id=item) at PolicyDetailsDetailViewTile.pcf: line 57, column 72
    function action_dest_14 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(cancellationJob, cancellationJob.PolicyPeriod)
    }
    
    // 'label' attribute on TileAction (id=item) at PolicyDetailsDetailViewTile.pcf: line 57, column 72
    function label_15 () : java.lang.Object {
      return DisplayKey.get('Web.PolicyFile.RescindCancellationFull', gw.web.policyfile.PolicyFileMenuActionsUIHelper.getCancellationLabel(cancellationJob))
    }
    
    // 'visible' attribute on TileAction (id=item) at PolicyDetailsDetailViewTile.pcf: line 57, column 72
    function visible_12 () : java.lang.Boolean {
      return perm.System.cancelrescind and not period.Archived
    }
    
    property get cancellationJob () : entity.Cancellation {
      return getIteratedValue(1) as entity.Cancellation
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policyfile/summary/PolicyDetailsDetailViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyDetailsDetailViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on TextInput (id=RewrittenSourcePolicy_Input) at PolicyDetailsDetailViewTile.pcf: line 147, column 70
    function actionAvailable_72 () : java.lang.Boolean {
      return gw.api.web.dashboard.ui.DashboardParameters.PolicySummaryPermissions.Instance.canSeePolicy(period.Policy.RewrittenToNewAccountSource.Periods.first())
    }
    
    // 'actionAvailable' attribute on TextInput (id=RewrittenTargetPolicy_Input) at PolicyDetailsDetailViewTile.pcf: line 154, column 92
    function actionAvailable_80 () : java.lang.Boolean {
      return gw.api.web.dashboard.ui.DashboardParameters.PolicySummaryPermissions.Instance.canSeePolicy(period.Policy.RewrittenToNewAccountDestination.Periods.first())
    }
    
    // 'action' attribute on TileAction (id=CancelPolicy) at PolicyDetailsDetailViewTile.pcf: line 47, column 127
    function action_10 () : void {
      StartCancellation.go(period)
    }
    
    // 'action' attribute on TileAction (id=ReinstatePolicy) at PolicyDetailsDetailViewTile.pcf: line 63, column 106
    function action_18 () : void {
      gw.web.policyfile.PolicyFileMenuActionsUIHelper.startReinstatement(period, CurrentLocation)
    }
    
    // 'action' attribute on TileAction (id=RewriteFullTerm) at PolicyDetailsDetailViewTile.pcf: line 68, column 87
    function action_20 () : void {
      uiHelper.startRewrite(TC_REWRITEFULLTERM, inForcePeriod, CurrentLocation)
    }
    
    // 'action' attribute on TileAction (id=RewriteRemainderOfTerm) at PolicyDetailsDetailViewTile.pcf: line 73, column 98
    function action_22 () : void {
      uiHelper.startRewrite(TC_REWRITEREMAINDEROFTERM, inForcePeriod, CurrentLocation)
    }
    
    // 'action' attribute on TileAction (id=RewriteNewTerm) at PolicyDetailsDetailViewTile.pcf: line 78, column 86
    function action_24 () : void {
      uiHelper.startRewrite(TC_REWRITENEWTERM, inForcePeriod, CurrentLocation)
    }
    
    // 'action' attribute on TileAction (id=RenewPolicy) at PolicyDetailsDetailViewTile.pcf: line 83, column 120
    function action_26 () : void {
      gw.web.policyfile.PolicyFileMenuActionsUIHelper.startRenewal(period, CurrentLocation)
    }
    
    // 'action' attribute on TileAction (id=RequestRestoreButton) at PolicyDetailsDetailViewTile.pcf: line 88, column 77
    function action_28 () : void {
      RequestRestorePopup.push(period.PolicyTerm)
    }
    
    // 'action' attribute on TextInput (id=PrimaryNamedInsured_Input) at PolicyDetailsDetailViewTile.pcf: line 120, column 51
    function action_47 () : void {
      ContactForward.go(period.PrimaryNamedInsured.AccountContactRole.AccountContact.Contact)
    }
    
    // 'action' attribute on TileAction (id=IssueSubmission) at PolicyDetailsDetailViewTile.pcf: line 37, column 121
    function action_5 () : void {
      gw.web.policyfile.PolicyFileMenuActionsUIHelper.startIssuance(period, CurrentLocation)
    }
    
    // 'action' attribute on TextInput (id=SourceAccount_Input) at PolicyDetailsDetailViewTile.pcf: line 140, column 67
    function action_62 () : void {
      AccountFileForward.go(period.Policy.MovedPolicySourceAccount)
    }
    
    // 'action' attribute on TileAction (id=ChangePolicy) at PolicyDetailsDetailViewTile.pcf: line 42, column 102
    function action_7 () : void {
      StartPolicyChange.go(period)
    }
    
    // 'action' attribute on TextInput (id=RewrittenSourcePolicy_Input) at PolicyDetailsDetailViewTile.pcf: line 147, column 70
    function action_70 () : void {
      pcf.PolicyFileForward.go(period.Policy.RewrittenToNewAccountSource.Periods.first().PolicyNumber)
    }
    
    // 'action' attribute on TextInput (id=RewrittenTargetPolicy_Input) at PolicyDetailsDetailViewTile.pcf: line 154, column 92
    function action_78 () : void {
      pcf.PolicyFileForward.go(period.Policy.RewrittenToNewAccountDestination.Periods.first().PolicyNumber)
    }
    
    // 'action' attribute on TextInput (id=SplitSourcePolicy_Input) at PolicyDetailsDetailViewTile.pcf: line 160, column 62
    function action_86 () : void {
      pcf.PolicyFileForward.go(period.Policy.DividedSourcePolicy.LatestBoundPeriod.PolicyNumber)
    }
    
    // 'action' attribute on TextInput (id=PreRenewalDirection_Input) at PolicyDetailsDetailViewTile.pcf: line 171, column 66
    function action_94 () : void {
      PreRenewalDirectionPage.go(period, period.Policy, asOfDate)
    }
    
    // 'action' attribute on TileAction (id=CancelPolicy) at PolicyDetailsDetailViewTile.pcf: line 47, column 127
    function action_dest_11 () : pcf.api.Destination {
      return pcf.StartCancellation.createDestination(period)
    }
    
    // 'action' attribute on TileAction (id=RequestRestoreButton) at PolicyDetailsDetailViewTile.pcf: line 88, column 77
    function action_dest_29 () : pcf.api.Destination {
      return pcf.RequestRestorePopup.createDestination(period.PolicyTerm)
    }
    
    // 'action' attribute on TextInput (id=PrimaryNamedInsured_Input) at PolicyDetailsDetailViewTile.pcf: line 120, column 51
    function action_dest_48 () : pcf.api.Destination {
      return pcf.ContactForward.createDestination(period.PrimaryNamedInsured.AccountContactRole.AccountContact.Contact)
    }
    
    // 'action' attribute on TextInput (id=SourceAccount_Input) at PolicyDetailsDetailViewTile.pcf: line 140, column 67
    function action_dest_63 () : pcf.api.Destination {
      return pcf.AccountFileForward.createDestination(period.Policy.MovedPolicySourceAccount)
    }
    
    // 'action' attribute on TextInput (id=RewrittenSourcePolicy_Input) at PolicyDetailsDetailViewTile.pcf: line 147, column 70
    function action_dest_71 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(period.Policy.RewrittenToNewAccountSource.Periods.first().PolicyNumber)
    }
    
    // 'action' attribute on TextInput (id=RewrittenTargetPolicy_Input) at PolicyDetailsDetailViewTile.pcf: line 154, column 92
    function action_dest_79 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(period.Policy.RewrittenToNewAccountDestination.Periods.first().PolicyNumber)
    }
    
    // 'action' attribute on TileAction (id=ChangePolicy) at PolicyDetailsDetailViewTile.pcf: line 42, column 102
    function action_dest_8 () : pcf.api.Destination {
      return pcf.StartPolicyChange.createDestination(period)
    }
    
    // 'action' attribute on TextInput (id=SplitSourcePolicy_Input) at PolicyDetailsDetailViewTile.pcf: line 160, column 62
    function action_dest_87 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(period.Policy.DividedSourcePolicy.LatestBoundPeriod.PolicyNumber)
    }
    
    // 'action' attribute on TextInput (id=PreRenewalDirection_Input) at PolicyDetailsDetailViewTile.pcf: line 171, column 66
    function action_dest_95 () : pcf.api.Destination {
      return pcf.PreRenewalDirectionPage.createDestination(period, period.Policy, asOfDate)
    }
    
    // 'available' attribute on TextInput (id=SourceAccount_Input) at PolicyDetailsDetailViewTile.pcf: line 140, column 67
    function available_60 () : java.lang.Boolean {
      return gw.api.web.dashboard.ui.DashboardParameters.AccountOverviewPermissions.Instance.canSeeAccount(period.Policy.MovedPolicySourceAccount)
    }
    
    // 'backgroundColor' attribute on DetailViewTile (id=PolicyDetailsDetailViewTile) at PolicyDetailsDetailViewTile.pcf: line 7, column 64
    function backgroundColor_125 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_TIER_1
    }
    
    // 'initialValue' attribute on Variable at PolicyDetailsDetailViewTile.pcf: line 17, column 23
    function initialValue_0 () : boolean {
      return gw.plugin.Plugins.get(gw.plugin.policy.IPolicyPlugin).canStartReinstatement(period) == null
    }
    
    // 'initialValue' attribute on Variable at PolicyDetailsDetailViewTile.pcf: line 21, column 65
    function initialValue_1 () : gw.pcf.policyfile.StartRewriteMenuItemSetUIHelper {
      return new gw.pcf.policyfile.StartRewriteMenuItemSetUIHelper(period)
    }
    
    // 'initialValue' attribute on Variable at PolicyDetailsDetailViewTile.pcf: line 26, column 28
    function initialValue_2 () : PolicyPeriod {
      return uiHelper.getInForcePeriod()
    }
    
    // 'initialValue' attribute on Variable at PolicyDetailsDetailViewTile.pcf: line 30, column 65
    function initialValue_3 () : gw.api.web.dashboard.ui.policy.PolicyDetailHelper {
      return new gw.api.web.dashboard.ui.policy.PolicyDetailHelper(period)
    }
    
    // 'text' attribute on DetailViewTile (id=PolicyDetailsDetailViewTile) at PolicyDetailsDetailViewTile.pcf: line 7, column 64
    function text_124 () : java.lang.String {
      return period.Archived ? DisplayKey.get('Web.Archive.Archived') : period.PeriodDisplayStatus
    }
    
    // 'value' attribute on TextInput (id=CancellationReason_Input) at PolicyDetailsDetailViewTile.pcf: line 200, column 36
    function valueRoot_116 () : java.lang.Object {
      return period.Cancellation.CancelReasonCode
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at PolicyDetailsDetailViewTile.pcf: line 97, column 51
    function valueRoot_31 () : java.lang.Object {
      return period
    }
    
    // 'value' attribute on TextInput (id=Product_Input) at PolicyDetailsDetailViewTile.pcf: line 102, column 29
    function valueRoot_34 () : java.lang.Object {
      return period.Policy
    }
    
    // 'value' attribute on TextInput (id=Underwriter_Input) at PolicyDetailsDetailViewTile.pcf: line 125, column 34
    function valueRoot_54 () : java.lang.Object {
      return period.Policy.getUserRoleAssignmentByRole(TC_UNDERWRITER)
    }
    
    // 'value' attribute on TextInput (id=SourceAccount_Input) at PolicyDetailsDetailViewTile.pcf: line 140, column 67
    function valueRoot_65 () : java.lang.Object {
      return period.Policy.MovedPolicySourceAccount
    }
    
    // 'value' attribute on TextInput (id=RewrittenSourcePolicy_Input) at PolicyDetailsDetailViewTile.pcf: line 147, column 70
    function valueRoot_74 () : java.lang.Object {
      return detailHelper
    }
    
    // 'value' attribute on TextInput (id=PreRenewalDirection_Input) at PolicyDetailsDetailViewTile.pcf: line 171, column 66
    function valueRoot_97 () : java.lang.Object {
      return period.PolicyTerm
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at PolicyDetailsDetailViewTile.pcf: line 178, column 37
    function value_100 () : java.util.Date {
      return period.PeriodStart
    }
    
    // 'value' attribute on DateInput (id=ExpirationDate_Input) at PolicyDetailsDetailViewTile.pcf: line 183, column 35
    function value_103 () : java.util.Date {
      return period.PeriodEnd
    }
    
    // 'value' attribute on TextInput (id=TermNumber_Input) at PolicyDetailsDetailViewTile.pcf: line 188, column 30
    function value_106 () : Integer {
      return period.TermNumber
    }
    
    // 'value' attribute on DateInput (id=IssueDate_Input) at PolicyDetailsDetailViewTile.pcf: line 194, column 52
    function value_110 () : java.util.Date {
      return period.Policy.IssueDate
    }
    
    // 'value' attribute on TextInput (id=CancellationReason_Input) at PolicyDetailsDetailViewTile.pcf: line 200, column 36
    function value_115 () : String {
      return period.Cancellation.CancelReasonCode.DisplayName
    }
    
    // 'value' attribute on DateInput (id=CancellationDate_Input) at PolicyDetailsDetailViewTile.pcf: line 206, column 36
    function value_120 () : java.util.Date {
      return period.CancellationDate
    }
    
    // 'value' attribute on TileActionIterator (id=RescindCancellation) at PolicyDetailsDetailViewTile.pcf: line 52, column 43
    function value_16 () : entity.Cancellation[] {
      return gw.web.policyfile.PolicyFileMenuActionsUIHelper.getRescindableCancellations(period)
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at PolicyDetailsDetailViewTile.pcf: line 97, column 51
    function value_30 () : java.lang.String {
      return period.PolicyNumberDisplayString
    }
    
    // 'value' attribute on TextInput (id=Product_Input) at PolicyDetailsDetailViewTile.pcf: line 102, column 29
    function value_33 () : String {
      return period.Policy.ProductDisplayName
    }
    
    // 'value' attribute on TextInput (id=Offering_Input) at PolicyDetailsDetailViewTile.pcf: line 108, column 64
    function value_37 () : gw.api.productmodel.Offering {
      return period.Offering
    }
    
    // 'value' attribute on TextInput (id=NameWhenArchived_Input) at PolicyDetailsDetailViewTile.pcf: line 113, column 36
    function value_42 () : java.lang.String {
      return period.PrimaryInsuredName
    }
    
    // 'value' attribute on TextInput (id=PrimaryNamedInsured_Input) at PolicyDetailsDetailViewTile.pcf: line 120, column 51
    function value_49 () : entity.PolicyPriNamedInsured {
      return period.PrimaryNamedInsured
    }
    
    // 'value' attribute on TextInput (id=Underwriter_Input) at PolicyDetailsDetailViewTile.pcf: line 125, column 34
    function value_53 () : entity.User {
      return period.Policy.getUserRoleAssignmentByRole(TC_UNDERWRITER).AssignedUser
    }
    
    // 'value' attribute on TextInput (id=UnderwritingCompany_Input) at PolicyDetailsDetailViewTile.pcf: line 130, column 39
    function value_56 () : entity.UWCompany {
      return period.UWCompany
    }
    
    // 'value' attribute on TextInput (id=SourceAccount_Input) at PolicyDetailsDetailViewTile.pcf: line 140, column 67
    function value_64 () : java.lang.String {
      return period.Policy.MovedPolicySourceAccount.AccountNumber
    }
    
    // 'value' attribute on TextInput (id=RewrittenSourcePolicy_Input) at PolicyDetailsDetailViewTile.pcf: line 147, column 70
    function value_73 () : java.lang.String {
      return detailHelper.SourcePolicyValue
    }
    
    // 'value' attribute on TextInput (id=RewrittenTargetPolicy_Input) at PolicyDetailsDetailViewTile.pcf: line 154, column 92
    function value_81 () : java.lang.String {
      return detailHelper.TargetPolicyValue
    }
    
    // 'value' attribute on TextInput (id=SplitSourcePolicy_Input) at PolicyDetailsDetailViewTile.pcf: line 160, column 62
    function value_88 () : java.lang.String {
      return detailHelper.SplitSourcePolicyValue
    }
    
    // 'value' attribute on TextInput (id=PreRenewalDirection_Input) at PolicyDetailsDetailViewTile.pcf: line 171, column 66
    function value_96 () : typekey.PreRenewalDirection {
      return period.PolicyTerm.PreRenewalDirection
    }
    
    // 'visible' attribute on DateInput (id=IssueDate_Input) at PolicyDetailsDetailViewTile.pcf: line 194, column 52
    function visible_109 () : java.lang.Boolean {
      return period.Policy.IssueDate != null
    }
    
    // 'visible' attribute on TextInput (id=CancellationReason_Input) at PolicyDetailsDetailViewTile.pcf: line 200, column 36
    function visible_114 () : java.lang.Boolean {
      return period.Canceled
    }
    
    // 'visible' attribute on TileAction (id=ReinstatePolicy) at PolicyDetailsDetailViewTile.pcf: line 63, column 106
    function visible_17 () : java.lang.Boolean {
      return perm.PolicyPeriod.reinstate(period) and canStartReinstatement and not period.Archived
    }
    
    // 'visible' attribute on TileAction (id=RewriteFullTerm) at PolicyDetailsDetailViewTile.pcf: line 68, column 87
    function visible_19 () : java.lang.Boolean {
      return uiHelper.CanRewriteFullTerm(inForcePeriod) and not period.Archived
    }
    
    // 'visible' attribute on TileAction (id=RewriteRemainderOfTerm) at PolicyDetailsDetailViewTile.pcf: line 73, column 98
    function visible_21 () : java.lang.Boolean {
      return uiHelper.CanRewriteRemainderOfTermTerm(inForcePeriod) and not period.Archived
    }
    
    // 'visible' attribute on TileAction (id=RewriteNewTerm) at PolicyDetailsDetailViewTile.pcf: line 78, column 86
    function visible_23 () : java.lang.Boolean {
      return uiHelper.canRewriteNewTerm(inForcePeriod) and not period.Archived
    }
    
    // 'visible' attribute on TileAction (id=RenewPolicy) at PolicyDetailsDetailViewTile.pcf: line 83, column 120
    function visible_25 () : java.lang.Boolean {
      return perm.PolicyPeriod.renew(period) and period.Policy.canStartRenewal() == null and not period.Archived
    }
    
    // 'visible' attribute on TileAction (id=RequestRestoreButton) at PolicyDetailsDetailViewTile.pcf: line 88, column 77
    function visible_27 () : java.lang.Boolean {
      return period.Archived and perm.PolicyPeriod.restorefromarchive
    }
    
    // 'visible' attribute on TextInput (id=Offering_Input) at PolicyDetailsDetailViewTile.pcf: line 108, column 64
    function visible_36 () : java.lang.Boolean {
      return period.Policy.Product.Offerings.HasElements
    }
    
    // 'visible' attribute on TileAction (id=IssueSubmission) at PolicyDetailsDetailViewTile.pcf: line 37, column 121
    function visible_4 () : java.lang.Boolean {
      return perm.PolicyPeriod.issue(period) and period.Policy.canStartIssuance() == null and not period.Archived
    }
    
    // 'visible' attribute on TextInput (id=NameWhenArchived_Input) at PolicyDetailsDetailViewTile.pcf: line 113, column 36
    function visible_41 () : java.lang.Boolean {
      return period.Archived
    }
    
    // 'visible' attribute on TextInput (id=PrimaryNamedInsured_Input) at PolicyDetailsDetailViewTile.pcf: line 120, column 51
    function visible_46 () : java.lang.Boolean {
      return not period.Archived
    }
    
    // 'visible' attribute on InputDivider (id=SourceDivider) at PolicyDetailsDetailViewTile.pcf: line 133, column 54
    function visible_59 () : java.lang.Boolean {
      return detailHelper.SourceDividerVisible
    }
    
    // 'visible' attribute on TileAction (id=ChangePolicy) at PolicyDetailsDetailViewTile.pcf: line 42, column 102
    function visible_6 () : java.lang.Boolean {
      return perm.PolicyPeriod.change(period) and period.Policy.Issued and not period.Archived
    }
    
    // 'visible' attribute on TextInput (id=SourceAccount_Input) at PolicyDetailsDetailViewTile.pcf: line 140, column 67
    function visible_61 () : java.lang.Boolean {
      return period.Policy.MovedPolicySourceAccount != null
    }
    
    // 'visible' attribute on TextInput (id=RewrittenSourcePolicy_Input) at PolicyDetailsDetailViewTile.pcf: line 147, column 70
    function visible_69 () : java.lang.Boolean {
      return period.Policy.RewrittenToNewAccountSource != null
    }
    
    // 'visible' attribute on TextInput (id=RewrittenTargetPolicy_Input) at PolicyDetailsDetailViewTile.pcf: line 154, column 92
    function visible_77 () : java.lang.Boolean {
      return period.Policy.RewrittenToNewAccountDestination.BoundPeriods.HasElements
    }
    
    // 'visible' attribute on TextInput (id=SplitSourcePolicy_Input) at PolicyDetailsDetailViewTile.pcf: line 160, column 62
    function visible_85 () : java.lang.Boolean {
      return period.Policy.DividedSourcePolicy != null
    }
    
    // 'visible' attribute on TileAction (id=CancelPolicy) at PolicyDetailsDetailViewTile.pcf: line 47, column 127
    function visible_9 () : java.lang.Boolean {
      return perm.PolicyPeriod.cancel(period) and period.CancellationDate != period.PeriodStart and not period.Archived
    }
    
    // 'visible' attribute on Label (id=PreRenewalDirectionLabel) at PolicyDetailsDetailViewTile.pcf: line 164, column 66
    function visible_92 () : java.lang.Boolean {
      return period.PolicyTerm.PreRenewalDirection != null
    }
    
    property get asOfDate () : java.util.Date {
      return getRequireValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setRequireValue("asOfDate", 0, $arg)
    }
    
    property get canStartReinstatement () : boolean {
      return getVariableValue("canStartReinstatement", 0) as java.lang.Boolean
    }
    
    property set canStartReinstatement ($arg :  boolean) {
      setVariableValue("canStartReinstatement", 0, $arg)
    }
    
    property get detailHelper () : gw.api.web.dashboard.ui.policy.PolicyDetailHelper {
      return getVariableValue("detailHelper", 0) as gw.api.web.dashboard.ui.policy.PolicyDetailHelper
    }
    
    property set detailHelper ($arg :  gw.api.web.dashboard.ui.policy.PolicyDetailHelper) {
      setVariableValue("detailHelper", 0, $arg)
    }
    
    property get inForcePeriod () : PolicyPeriod {
      return getVariableValue("inForcePeriod", 0) as PolicyPeriod
    }
    
    property set inForcePeriod ($arg :  PolicyPeriod) {
      setVariableValue("inForcePeriod", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getRequireValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setRequireValue("period", 0, $arg)
    }
    
    property get uiHelper () : gw.pcf.policyfile.StartRewriteMenuItemSetUIHelper {
      return getVariableValue("uiHelper", 0) as gw.pcf.policyfile.StartRewriteMenuItemSetUIHelper
    }
    
    property set uiHelper ($arg :  gw.pcf.policyfile.StartRewriteMenuItemSetUIHelper) {
      setVariableValue("uiHelper", 0, $arg)
    }
    
    
  }
  
  
}