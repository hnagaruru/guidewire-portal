package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/UWRuleDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UWRuleDetailExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/UWRuleDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UWRuleDetailExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (head :  RuleHead) : int {
      return 0
    }
    
    // 'action' attribute on AlertBar (id=NotLatestAlert) at UWRuleDetail.pcf: line 55, column 57
    function action_20 () : void {
      stateHolder.SelectedVersion = stateHolder.Head.HeadVersion
    }
    
    // 'action' attribute on AlertBar (id=UnavailableToRunAlert) at UWRuleDetail.pcf: line 63, column 181
    function action_23 () : void {
      stateHolder.makeLatestVersionAvailableToRunInNewBundle()
    }
    
    // 'action' attribute on AlertBar (id=PendingImportAlert) at UWRuleDetail.pcf: line 69, column 49
    function action_26 () : void {
      RuleImportDetailsPopup.push(stateHolder.NavigationSupport, stateHolder.Head.InProgressImportTaskEntry.Task, false)
    }
    
    // 'action' attribute on AlertBar (id=DuplicatedNameAlertBar) at UWRuleDetail.pcf: line 75, column 140
    function action_29 () : void {
      stateHolder.VersionController.pushRulesWithSameNamePopup(head.HeadVersion)
    }
    
    // 'action' attribute on AlertBar (id=RuleDeletedByAnotherUserAlert) at UWRuleDetail.pcf: line 82, column 52
    function action_31 () : void {
      stateHolder.NavigationSupport.goToRulesListPage()
    }
    
    // 'action' attribute on AlertBar (id=PendingImportAlert) at UWRuleDetail.pcf: line 69, column 49
    function action_dest_27 () : pcf.api.Destination {
      return pcf.RuleImportDetailsPopup.createDestination(stateHolder.NavigationSupport, stateHolder.Head.InProgressImportTaskEntry.Task, false)
    }
    
    // 'afterCancel' attribute on Page (id=UWRuleDetail) at UWRuleDetail.pcf: line 12, column 101
    function afterCancel_37 () : void {
      stateHolder.afterCancel()
    }
    
    // 'available' attribute on AlertBar (id=UnavailableToRunAlert) at UWRuleDetail.pcf: line 63, column 181
    function available_21 () : java.lang.Boolean {
      return !stateHolder.ImportInProgress and perm.Rule.edit(stateHolder.SelectedVersion.Rule)
    }
    
    // 'available' attribute on ToolbarRangeInput (id=Version_Input) at UWRuleDetail.pcf: line 40, column 49
    function available_6 () : java.lang.Boolean {
      return !CurrentLocation.InEditMode
    }
    
    // 'def' attribute on PanelRef at UWRuleDetail.pcf: line 90, column 56
    function def_onEnter_35 (def :  pcf.UWRulePanelSet) : void {
      def.onEnter(stateHolder.SelectedVersion, false, stateHolder.RulePageController)
    }
    
    // 'def' attribute on PanelRef at UWRuleDetail.pcf: line 90, column 56
    function def_refreshVariables_36 (def :  pcf.UWRulePanelSet) : void {
      def.refreshVariables(stateHolder.SelectedVersion, false, stateHolder.RulePageController)
    }
    
    // 'value' attribute on ToolbarRangeInput (id=Version_Input) at UWRuleDetail.pcf: line 40, column 49
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      stateHolder.SelectedVersion = (__VALUE_TO_SET as RuleVersion)
    }
    
    // 'infoBar' attribute on Page (id=UWRuleDetail) at UWRuleDetail.pcf: line 12, column 101
    function infoBar_onEnter_38 (def :  pcf.RuleExecutionInfoBar_default) : void {
      def.onEnter(stateHolder.Head, stateHolder.ExecutionStatus,stateHolder.NavigationSupport.VersionController)
    }
    
    // 'infoBar' attribute on Page (id=UWRuleDetail) at UWRuleDetail.pcf: line 12, column 101
    function infoBar_refreshVariables_39 (def :  pcf.RuleExecutionInfoBar_default) : void {
      def.refreshVariables(stateHolder.Head, stateHolder.ExecutionStatus,stateHolder.NavigationSupport.VersionController)
    }
    
    // 'initialValue' attribute on Variable at UWRuleDetail.pcf: line 21, column 60
    function initialValue_0 () : gw.web.bizrules.PCBizRulesDetailsStateHolder {
      return new gw.web.bizrules.PCBizRulesDetailsStateHolder(head, gw.bizrules.PCBizRulesNavigationSupport.Instance, gw.web.bizrules.UWRulesPageHelper.UIConfigs, CurrentLocation)
    }
    
    // 'label' attribute on AlertBar (id=UnavailableToRunAlert) at UWRuleDetail.pcf: line 63, column 181
    function label_24 () : java.lang.Object {
      return !stateHolder.ImportInProgress and perm.Rule.edit(stateHolder.SelectedVersion.Rule) ? DisplayKey.get('BizRules.RuleDetailsPage.Alert.UnavailableToRun.WithMakeAvailableAction') : DisplayKey.get('BizRules.RuleDetailsPage.Alert.UnavailableToRun')
    }
    
    // 'label' attribute on AlertBar (id=RuleIsNotManagedByBusinessRulesFrameworkAlert) at UWRuleDetail.pcf: line 87, column 83
    function label_33 () : java.lang.Object {
      return stateHolder.ExternallyManagedAlert
    }
    
    // 'optionLabel' attribute on ToolbarRangeInput (id=Version_Input) at UWRuleDetail.pcf: line 40, column 49
    function optionLabel_11 (VALUE :  RuleVersion) : java.lang.String {
      return stateHolder.formatVersion(VALUE)
    }
    
    // 'parent' attribute on Page (id=UWRuleDetail) at UWRuleDetail.pcf: line 12, column 101
    static function parent_40 (head :  RuleHead) : pcf.api.Destination {
      return pcf.UWRules.createDestination()
    }
    
    // 'title' attribute on Page (id=UWRuleDetail) at UWRuleDetail.pcf: line 12, column 101
    static function title_41 (head :  RuleHead) : java.lang.Object {
      return DisplayKey.get("Web.BizRules.UWRuleDetail.Title", head.HeadVersion.Rule.Name)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at UWRuleDetail.pcf: line 25, column 77
    function toolbarButtonSet_onEnter_1 (def :  pcf.StatusTransitionToolbarButtonSet) : void {
      def.onEnter(stateHolder)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at UWRuleDetail.pcf: line 28, column 50
    function toolbarButtonSet_onEnter_4 (def :  pcf.ConditionValidationToolbarButtonSet) : void {
      def.onEnter(stateHolder.RulePageController)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at UWRuleDetail.pcf: line 25, column 77
    function toolbarButtonSet_refreshVariables_2 (def :  pcf.StatusTransitionToolbarButtonSet) : void {
      def.refreshVariables(stateHolder)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at UWRuleDetail.pcf: line 28, column 50
    function toolbarButtonSet_refreshVariables_5 (def :  pcf.ConditionValidationToolbarButtonSet) : void {
      def.refreshVariables(stateHolder.RulePageController)
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=Version_Input) at UWRuleDetail.pcf: line 40, column 49
    function valueRange_12 () : java.lang.Object {
      return stateHolder.History
    }
    
    // 'value' attribute on ToolbarRangeInput (id=Version_Input) at UWRuleDetail.pcf: line 40, column 49
    function valueRoot_10 () : java.lang.Object {
      return stateHolder
    }
    
    // 'value' attribute on ToolbarRangeInput (id=Version_Input) at UWRuleDetail.pcf: line 40, column 49
    function value_8 () : RuleVersion {
      return stateHolder.SelectedVersion
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=Version_Input) at UWRuleDetail.pcf: line 40, column 49
    function verifyValueRangeIsAllowedType_13 ($$arg :  RuleVersion[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=Version_Input) at UWRuleDetail.pcf: line 40, column 49
    function verifyValueRangeIsAllowedType_13 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=Version_Input) at UWRuleDetail.pcf: line 40, column 49
    function verifyValueRangeIsAllowedType_13 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=Version_Input) at UWRuleDetail.pcf: line 40, column 49
    function verifyValueRange_14 () : void {
      var __valueRangeArg = stateHolder.History
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_13(__valueRangeArg)
    }
    
    // 'visible' attribute on AlertBar (id=RollingUpgradeAlert) at UWRuleDetail.pcf: line 48, column 240
    function visible_18 () : java.lang.Boolean {
      return gw.bizrules.management.BizRulesRollingUpgradeManager.Instance.RollingUpgradeProcessStartedInDB and stateHolder.DeploymentEnabled and gw.bizrules.pcf.RulePermissionUIHelper.canDeployRule(stateHolder.getSelectedVersion())
    }
    
    // 'visible' attribute on AlertBar (id=NotLatestAlert) at UWRuleDetail.pcf: line 55, column 57
    function visible_19 () : java.lang.Boolean {
      return stateHolder.NotLatestVersionSelected
    }
    
    // 'visible' attribute on AlertBar (id=UnavailableToRunAlert) at UWRuleDetail.pcf: line 63, column 181
    function visible_22 () : java.lang.Boolean {
      return stateHolder.LatestVersionSelected and not stateHolder.SelectedVersion.Rule.AvailableToRun and not (stateHolder.SelectedVersion.Rule as UWRule).ExternallyManaged
    }
    
    // 'visible' attribute on AlertBar (id=PendingImportAlert) at UWRuleDetail.pcf: line 69, column 49
    function visible_25 () : java.lang.Boolean {
      return stateHolder.ImportInProgress
    }
    
    // 'visible' attribute on AlertBar (id=DuplicatedNameAlertBar) at UWRuleDetail.pcf: line 75, column 140
    function visible_28 () : java.lang.Boolean {
      return stateHolder.LatestVersionSelected and (not stateHolder.VersionController.isRuleNameUnique(stateHolder.SelectedVersion))
    }
    
    // 'visible' attribute on ToolbarButtonSetRef at UWRuleDetail.pcf: line 28, column 50
    function visible_3 () : java.lang.Boolean {
      return stateHolder.doesHeadExist()
    }
    
    // 'visible' attribute on AlertBar (id=RuleDeletedByAnotherUserAlert) at UWRuleDetail.pcf: line 82, column 52
    function visible_30 () : java.lang.Boolean {
      return not stateHolder.doesHeadExist()
    }
    
    // 'visible' attribute on AlertBar (id=RuleIsNotManagedByBusinessRulesFrameworkAlert) at UWRuleDetail.pcf: line 87, column 83
    function visible_32 () : java.lang.Boolean {
      return (stateHolder.SelectedVersion.Rule as UWRule).ExternallyManaged
    }
    
    // 'visible' attribute on PanelRef at UWRuleDetail.pcf: line 90, column 56
    function visible_34 () : java.lang.Boolean {
      return stateHolder.SelectedVersion != null
    }
    
    override property get CurrentLocation () : pcf.UWRuleDetail {
      return super.CurrentLocation as pcf.UWRuleDetail
    }
    
    property get head () : RuleHead {
      return getVariableValue("head", 0) as RuleHead
    }
    
    property set head ($arg :  RuleHead) {
      setVariableValue("head", 0, $arg)
    }
    
    property get stateHolder () : gw.web.bizrules.PCBizRulesDetailsStateHolder {
      return getVariableValue("stateHolder", 0) as gw.web.bizrules.PCBizRulesDetailsStateHolder
    }
    
    property set stateHolder ($arg :  gw.web.bizrules.PCBizRulesDetailsStateHolder) {
      setVariableValue("stateHolder", 0, $arg)
    }
    
    
  }
  
  
}