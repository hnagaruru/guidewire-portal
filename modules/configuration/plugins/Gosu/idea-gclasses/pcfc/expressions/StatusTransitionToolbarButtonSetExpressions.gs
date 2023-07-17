package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/StatusTransitionToolbarButtonSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class StatusTransitionToolbarButtonSetExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/StatusTransitionToolbarButtonSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class StatusTransitionToolbarButtonSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=Revert) at StatusTransitionToolbarButtonSet.pcf: line 50, column 187
    function action_11 () : void {
      CurrentLocation.startEditing(); stateHolder.createDraftBasedOnSelectedVersion()
    }
    
    // 'action' attribute on ToolbarButton (id=DeleteDraft) at StatusTransitionToolbarButtonSet.pcf: line 59, column 138
    function action_14 () : void {
      stateHolder.deleteDraftInNewBundle()
    }
    
    // 'action' attribute on ToolbarButton (id=DeleteWip) at StatusTransitionToolbarButtonSet.pcf: line 68, column 136
    function action_17 () : void {
      stateHolder.deleteWipInNewBundle()
    }
    
    // 'action' attribute on ToolbarButton (id=Edit) at StatusTransitionToolbarButtonSet.pcf: line 18, column 141
    function action_2 () : void {
      CurrentLocation.startEditing(); stateHolder.makeLatestVersionEditable()
    }
    
    // 'action' attribute on ToolbarButton (id=PromoteToStaged) at StatusTransitionToolbarButtonSet.pcf: line 77, column 203
    function action_21 () : void {
      stateHolder.changeHeadVersionStatusInNewBundle(TC_STAGED)
    }
    
    // 'action' attribute on ToolbarButton (id=PromoteToApproved) at StatusTransitionToolbarButtonSet.pcf: line 85, column 207
    function action_24 () : void {
      stateHolder.changeHeadVersionStatusInNewBundle(RuleStatus.TC_APPROVED)
    }
    
    // 'action' attribute on ToolbarButton (id=Deploy) at StatusTransitionToolbarButtonSet.pcf: line 94, column 181
    function action_27 () : void {
      stateHolder.deploySelectedVersion()
    }
    
    // 'action' attribute on ToolbarButton (id=Update) at StatusTransitionToolbarButtonSet.pcf: line 25, column 21
    function action_3 () : void {
      CurrentLocation.commit()
    }
    
    // 'action' attribute on ToolbarButton (id=Cancel) at StatusTransitionToolbarButtonSet.pcf: line 32, column 21
    function action_4 () : void {
      CurrentLocation.cancel()
    }
    
    // 'action' attribute on ToolbarButton (id=EnableDisableToggle) at StatusTransitionToolbarButtonSet.pcf: line 41, column 57
    function action_6 () : void {
      stateHolder.toggleEnableOrDisableSelectedVersion()
    }
    
    // 'available' attribute on ToolbarButton (id=Edit) at StatusTransitionToolbarButtonSet.pcf: line 18, column 141
    function available_0 () : java.lang.Boolean {
      return !stateHolder.ImportInProgress
    }
    
    // 'available' attribute on ToolbarButton (id=Deploy) at StatusTransitionToolbarButtonSet.pcf: line 94, column 181
    function available_25 () : java.lang.Boolean {
      return not gw.bizrules.management.BizRulesRollingUpgradeManager.Instance.RollingUpgradeProcessStartedInDB
    }
    
    // 'confirmMessage' attribute on ToolbarButton (id=DeleteWip) at StatusTransitionToolbarButtonSet.pcf: line 68, column 136
    function confirmMessage_18 () : java.lang.String {
      return stateHolder.History.Count == 1 ? DisplayKey.get('BizRules.StatusTransitionToolbarButtonSet.DeleteRuleConfirmation') : DisplayKey.get('BizRules.StatusTransitionToolbarButtonSet.DeleteVersionConfirmation')
    }
    
    // 'confirmMessage' attribute on ToolbarButton (id=Deploy) at StatusTransitionToolbarButtonSet.pcf: line 94, column 181
    function confirmMessage_28 () : java.lang.String {
      return stateHolder.getDeployConfirmationText()
    }
    
    // 'confirmMessage' attribute on ToolbarButton (id=EnableDisableToggle) at StatusTransitionToolbarButtonSet.pcf: line 41, column 57
    function confirmMessage_7 () : java.lang.String {
      return stateHolder.getEnableDisableToggleConfirmationText()
    }
    
    // 'label' attribute on ToolbarButton (id=EnableDisableToggle) at StatusTransitionToolbarButtonSet.pcf: line 41, column 57
    function label_8 () : java.lang.Object {
      return stateHolder.getEnableDisableToggleLabel()
    }
    
    // 'visible' attribute on ToolbarButton (id=Edit) at StatusTransitionToolbarButtonSet.pcf: line 18, column 141
    function visible_1 () : java.lang.Boolean {
      return stateHolder.LatestVersionSelected and gw.bizrules.pcf.RulePermissionUIHelper.canEditRule(stateHolder.getSelectedVersion())
    }
    
    // 'visible' attribute on ToolbarButton (id=Revert) at StatusTransitionToolbarButtonSet.pcf: line 50, column 187
    function visible_10 () : java.lang.Boolean {
      return stateHolder.NotLatestVersionSelected and !stateHolder.Head.HeadVersion.Editable and gw.bizrules.pcf.RulePermissionUIHelper.canEditRule(stateHolder.getSelectedVersion())
    }
    
    // 'visible' attribute on ToolbarButton (id=DeleteDraft) at StatusTransitionToolbarButtonSet.pcf: line 59, column 138
    function visible_13 () : java.lang.Boolean {
      return stateHolder.DeleteDraftVisible and gw.bizrules.pcf.RulePermissionUIHelper.canEditRule(stateHolder.getSelectedVersion())
    }
    
    // 'visible' attribute on ToolbarButton (id=DeleteWip) at StatusTransitionToolbarButtonSet.pcf: line 68, column 136
    function visible_16 () : java.lang.Boolean {
      return stateHolder.DeleteWipVisible and gw.bizrules.pcf.RulePermissionUIHelper.canEditRule(stateHolder.getSelectedVersion())
    }
    
    // 'visible' attribute on ToolbarButton (id=PromoteToStaged) at StatusTransitionToolbarButtonSet.pcf: line 77, column 203
    function visible_20 () : java.lang.Boolean {
      return stateHolder.LatestVersionSelected and stateHolder.SelectedVersion.Status == RuleStatus.TC_DRAFT and gw.bizrules.pcf.RulePermissionUIHelper.canEditRule(stateHolder.getSelectedVersion())
    }
    
    // 'visible' attribute on ToolbarButton (id=PromoteToApproved) at StatusTransitionToolbarButtonSet.pcf: line 85, column 207
    function visible_23 () : java.lang.Boolean {
      return stateHolder.LatestVersionSelected and stateHolder.SelectedVersion.Status == RuleStatus.TC_STAGED and gw.bizrules.pcf.RulePermissionUIHelper.canApproveRule(stateHolder.getSelectedVersion())
    }
    
    // 'visible' attribute on ToolbarButton (id=Deploy) at StatusTransitionToolbarButtonSet.pcf: line 94, column 181
    function visible_26 () : java.lang.Boolean {
      return stateHolder.DeploymentEnabled and stateHolder.SelectedVersionDeployable and gw.bizrules.pcf.RulePermissionUIHelper.canDeployRule(stateHolder.getSelectedVersion())
    }
    
    // 'visible' attribute on ToolbarButton (id=EnableDisableToggle) at StatusTransitionToolbarButtonSet.pcf: line 41, column 57
    function visible_5 () : java.lang.Boolean {
      return stateHolder.EnableDisableToggleVisible
    }
    
    property get stateHolder () : gw.bizrules.pcf.RuleDetailsStateHolder {
      return getRequireValue("stateHolder", 0) as gw.bizrules.pcf.RuleDetailsStateHolder
    }
    
    property set stateHolder ($arg :  gw.bizrules.pcf.RuleDetailsStateHolder) {
      setRequireValue("stateHolder", 0, $arg)
    }
    
    
  }
  
  
}