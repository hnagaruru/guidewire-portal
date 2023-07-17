package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/RiskApprovalDetailsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RiskApprovalDetailsPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/RiskApprovalDetailsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends RiskApprovalDetailsPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ListViewInput (id=UWApproval) at RiskApprovalDetailsPopup.pcf: line 79, column 35
    function def_onEnter_18 (def :  pcf.UWApprovalLV) : void {
      def.onEnter(asst, canEdit)
    }
    
    // 'def' attribute on ListViewInput (id=UWIssueHistory) at RiskApprovalDetailsPopup.pcf: line 94, column 55
    function def_onEnter_23 (def :  pcf.UWIssueHistoryLV) : void {
      def.onEnter(issue, issue.Histories, false)
    }
    
    // 'def' attribute on ListViewInput (id=UWApproval) at RiskApprovalDetailsPopup.pcf: line 79, column 35
    function def_refreshVariables_19 (def :  pcf.UWApprovalLV) : void {
      def.refreshVariables(asst, canEdit)
    }
    
    // 'def' attribute on ListViewInput (id=UWIssueHistory) at RiskApprovalDetailsPopup.pcf: line 94, column 55
    function def_refreshVariables_24 (def :  pcf.UWIssueHistoryLV) : void {
      def.refreshVariables(issue, issue.Histories, false)
    }
    
    // 'editable' attribute on ListViewInput (id=UWApproval) at RiskApprovalDetailsPopup.pcf: line 79, column 35
    function editable_16 () : java.lang.Boolean {
      return canEdit
    }
    
    // 'initialValue' attribute on Variable at RiskApprovalDetailsPopup.pcf: line 49, column 34
    function initialValue_6 () : entity.UWIssue {
      return asst.Issue
    }
    
    // PanelIterator at RiskApprovalDetailsPopup.pcf: line 45, column 50
    function initializeVariables_26 () : void {
        issue = asst.Issue;

    }
    
    // 'label' attribute on TextAreaInput (id=IssueLongDescription_Input) at RiskApprovalDetailsPopup.pcf: line 64, column 48
    function label_7 () : java.lang.Object {
      return (issue.ShortDescription != null and issue.ShortDescription.length() == shorttextLength) ? issue.ShortDescription + DisplayKey.get("Web.Policy.EvaluationIssues.ShortDescription.Ellipsis") : issue.ShortDescription
    }
    
    // 'value' attribute on TextAreaInput (id=IssueLongDescription_Input) at RiskApprovalDetailsPopup.pcf: line 64, column 48
    function valueRoot_9 () : java.lang.Object {
      return issue
    }
    
    // 'value' attribute on TextInput (id=IssueCurrentValue_Input) at RiskApprovalDetailsPopup.pcf: line 69, column 48
    function value_13 () : java.lang.String {
      return displayValue(issue)
    }
    
    // 'value' attribute on TextAreaInput (id=IssueLongDescription_Input) at RiskApprovalDetailsPopup.pcf: line 64, column 48
    function value_8 () : java.lang.String {
      return issue.LongDescription
    }
    
    // 'visible' attribute on TextInput (id=IssueCurrentValue_Input) at RiskApprovalDetailsPopup.pcf: line 69, column 48
    function visible_12 () : java.lang.Boolean {
      return issue.Value != null
    }
    
    // 'visible' attribute on Label at RiskApprovalDetailsPopup.pcf: line 86, column 52
    function visible_21 () : java.lang.Boolean {
      return issue.Histories.IsEmpty
    }
    
    // 'visible' attribute on ListViewInput (id=UWIssueHistory) at RiskApprovalDetailsPopup.pcf: line 94, column 55
    function visible_22 () : java.lang.Boolean {
      return not issue.Histories.IsEmpty
    }
    
    property get asst () : gw.job.uw.UWApprovalLVAsst {
      return getIteratedValue(1) as gw.job.uw.UWApprovalLVAsst
    }
    
    property get issue () : entity.UWIssue {
      return getVariableValue("issue", 1) as entity.UWIssue
    }
    
    property set issue ($arg :  entity.UWIssue) {
      setVariableValue("issue", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policy/RiskApprovalDetailsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RiskApprovalDetailsPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (issues :  UWIssue[], canEdit :  boolean, usingApproveAllPermission :  boolean) : int {
      return 0
    }
    
    // 'afterCommit' attribute on Popup (id=RiskApprovalDetailsPopup) at RiskApprovalDetailsPopup.pcf: line 13, column 98
    function afterCommit_28 (TopLocation :  pcf.api.Location) : void {
      gw.job.uw.RiskApprovalDetailsPopupAsst.doAfterCommit(issues)
    }
    
    // 'afterEnter' attribute on Popup (id=RiskApprovalDetailsPopup) at RiskApprovalDetailsPopup.pcf: line 13, column 98
    function afterEnter_29 () : void {
      if (canEdit) { issues.each(\ issue -> initializeApproval(issue)) }
    }
    
    // 'beforeCommit' attribute on Popup (id=RiskApprovalDetailsPopup) at RiskApprovalDetailsPopup.pcf: line 13, column 98
    function beforeCommit_30 (pickedValue :  java.lang.Object) : void {
      validateUserAuthority()
    }
    
    // 'updateConfirmMessage' attribute on EditButtons (id=UpdateButtons) at RiskApprovalDetailsPopup.pcf: line 40, column 36
    function confirmMessage_4 () : java.lang.String {
      if (issues[0].PolicyPeriod.Status == TC_DRAFT and issues.hasMatch(\ u -> not u.Approval.EditBeforeBind)) return DisplayKey.get("Web.UWIssue.RiskApprovalDetailsPopup.ApprovalNoEditBeforeBind") else return ""
    }
    
    // 'initialValue' attribute on Variable at RiskApprovalDetailsPopup.pcf: line 28, column 44
    function initialValue_0 () : gw.job.uw.UWApprovalLVAsst[] {
      return issues.map( \ i -> new gw.job.uw.UWApprovalLVAsst(i))
    }
    
    // 'initialValue' attribute on Variable at RiskApprovalDetailsPopup.pcf: line 32, column 19
    function initialValue_1 () : int {
      return gw.datatype.DataTypes.get(UWIssue.SHORTDESCRIPTION_PROP.get()).asPersistentDataType().getLength()
    }
    
    // EditButtons (id=UpdateButtons) at RiskApprovalDetailsPopup.pcf: line 40, column 36
    function label_5 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'value' attribute on PanelIterator at RiskApprovalDetailsPopup.pcf: line 45, column 50
    function value_27 () : gw.job.uw.UWApprovalLVAsst[] {
      return assts
    }
    
    // 'cancelVisible' attribute on EditButtons (id=UpdateButtons) at RiskApprovalDetailsPopup.pcf: line 40, column 36
    function visible_2 () : java.lang.Boolean {
      return canEdit
    }
    
    override property get CurrentLocation () : pcf.RiskApprovalDetailsPopup {
      return super.CurrentLocation as pcf.RiskApprovalDetailsPopup
    }
    
    property get assts () : gw.job.uw.UWApprovalLVAsst[] {
      return getVariableValue("assts", 0) as gw.job.uw.UWApprovalLVAsst[]
    }
    
    property set assts ($arg :  gw.job.uw.UWApprovalLVAsst[]) {
      setVariableValue("assts", 0, $arg)
    }
    
    property get canEdit () : boolean {
      return getVariableValue("canEdit", 0) as java.lang.Boolean
    }
    
    property set canEdit ($arg :  boolean) {
      setVariableValue("canEdit", 0, $arg)
    }
    
    property get issues () : UWIssue[] {
      return getVariableValue("issues", 0) as UWIssue[]
    }
    
    property set issues ($arg :  UWIssue[]) {
      setVariableValue("issues", 0, $arg)
    }
    
    property get shorttextLength () : int {
      return getVariableValue("shorttextLength", 0) as java.lang.Integer
    }
    
    property set shorttextLength ($arg :  int) {
      setVariableValue("shorttextLength", 0, $arg)
    }
    
    property get usingApproveAllPermission () : boolean {
      return getVariableValue("usingApproveAllPermission", 0) as java.lang.Boolean
    }
    
    property set usingApproveAllPermission ($arg :  boolean) {
      setVariableValue("usingApproveAllPermission", 0, $arg)
    }
    
    function displayValue(issue : UWIssue) : String {
      return DisplayKey.get("Web.UWIssue.RiskApprovalDetailsPopup.ReferenceValue", gw.web.policy.RiskEvaluationPanelSetModalRow.formatValue(issue))
    }
    
    function validateUserAuthority() {
      if (usingApproveAllPermission) {
        return
      }
      var currentUser = User.util.CurrentUser
      var problemIssues = issues.where(\ i -> !i.Approval.userHasAuthorityToGrantThisApproval(currentUser))
      if (!problemIssues.IsEmpty) {
        var errorMsg = problemIssues.map(\ i -> DisplayKey.get("Web.Job.Warning.UWIssue.UserNoAuthorityRefValue", i.ShortDescription, i.Approval.ReferenceValue)).join("")
        throw new gw.api.util.DisplayableException(errorMsg)
      }
    }
    
    function initializeApproval(issue : UWIssue) {
      issue.createDefaultApproval()
      issue.Approval.ReferenceValue = issue.IssueType.ActiveVersion.calculateDefaultValue(issue.Approval.IssueValue)
    }
    
    
  }
  
  
}