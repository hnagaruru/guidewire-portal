package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/common/ratingoverride/RatingOverridePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RatingOverridePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/common/ratingoverride/RatingOverridePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RatingOverridePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (period :  PolicyPeriod, line :  PolicyLine, jobWizardHelper :  gw.api.web.job.JobWizardHelper, startInEditMode :  boolean) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=ClearAllButton) at RatingOverridePopup.pcf: line 44, column 83
    function action_2 () : void {
      gw.web.line.common.RatingOverrideUIHelper.clearAllOverrides(line)
    }
    
    // 'afterCommit' attribute on Popup (id=RatingOverridePopup) at RatingOverridePopup.pcf: line 13, column 78
    function afterCommit_12 (TopLocation :  pcf.api.Location) : void {
      ratingOverrideHelper.afterCommit(period, jobWizardHelper)
    }
    
    // 'available' attribute on ToolbarButton (id=ClearAllButton) at RatingOverridePopup.pcf: line 44, column 83
    function available_1 () : java.lang.Boolean {
      return gw.web.line.common.RatingOverrideUIHelper.hasAnyOverridableCosts(line)
    }
    
    // 'beforeCommit' attribute on Popup (id=RatingOverridePopup) at RatingOverridePopup.pcf: line 13, column 78
    function beforeCommit_13 (pickedValue :  java.lang.Object) : void {
      ratingOverrideHelper.beforeCommit(line, jobWizardHelper)
    }
    
    // 'canEdit' attribute on Popup (id=RatingOverridePopup) at RatingOverridePopup.pcf: line 13, column 78
    function canEdit_14 () : java.lang.Boolean {
      return perm.System.editratingoverrides
    }
    
    // 'canVisit' attribute on Popup (id=RatingOverridePopup) at RatingOverridePopup.pcf: line 13, column 78
    static function canVisit_15 (jobWizardHelper :  gw.api.web.job.JobWizardHelper, line :  PolicyLine, period :  PolicyPeriod, startInEditMode :  boolean) : java.lang.Boolean {
      return perm.System.viewratingoverrides || perm.System.editratingoverrides
    }
    
    // 'def' attribute on PanelRef at RatingOverridePopup.pcf: line 48, column 39
    function def_onEnter_3 (def :  pcf.RatingOverridePanelSet_CPLine) : void {
      def.onEnter(period)
    }
    
    // 'def' attribute on PanelRef at RatingOverridePopup.pcf: line 48, column 39
    function def_onEnter_5 (def :  pcf.RatingOverridePanelSet_IMLine) : void {
      def.onEnter(period)
    }
    
    // 'def' attribute on PanelRef at RatingOverridePopup.pcf: line 48, column 39
    function def_onEnter_7 (def :  pcf.RatingOverridePanelSet_ManualLine) : void {
      def.onEnter(period)
    }
    
    // 'def' attribute on PanelRef at RatingOverridePopup.pcf: line 48, column 39
    function def_onEnter_9 (def :  pcf.RatingOverridePanelSet_WorkersCompLine) : void {
      def.onEnter(period)
    }
    
    // 'def' attribute on PanelRef at RatingOverridePopup.pcf: line 48, column 39
    function def_refreshVariables_10 (def :  pcf.RatingOverridePanelSet_WorkersCompLine) : void {
      def.refreshVariables(period)
    }
    
    // 'def' attribute on PanelRef at RatingOverridePopup.pcf: line 48, column 39
    function def_refreshVariables_4 (def :  pcf.RatingOverridePanelSet_CPLine) : void {
      def.refreshVariables(period)
    }
    
    // 'def' attribute on PanelRef at RatingOverridePopup.pcf: line 48, column 39
    function def_refreshVariables_6 (def :  pcf.RatingOverridePanelSet_IMLine) : void {
      def.refreshVariables(period)
    }
    
    // 'def' attribute on PanelRef at RatingOverridePopup.pcf: line 48, column 39
    function def_refreshVariables_8 (def :  pcf.RatingOverridePanelSet_ManualLine) : void {
      def.refreshVariables(period)
    }
    
    // 'initialValue' attribute on Variable at RatingOverridePopup.pcf: line 31, column 57
    function initialValue_0 () : gw.web.line.common.RatingOverrideUIHelper {
      return new gw.web.line.common.RatingOverrideUIHelper()
    }
    
    // 'mode' attribute on PanelRef at RatingOverridePopup.pcf: line 48, column 39
    function mode_11 () : java.lang.Object {
      return line.Pattern.PublicID
    }
    
    // 'startInEditMode' attribute on Popup (id=RatingOverridePopup) at RatingOverridePopup.pcf: line 13, column 78
    function startInEditMode_16 () : java.lang.Boolean {
      return startInEditMode
    }
    
    override property get CurrentLocation () : pcf.RatingOverridePopup {
      return super.CurrentLocation as pcf.RatingOverridePopup
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getVariableValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setVariableValue("jobWizardHelper", 0, $arg)
    }
    
    property get line () : PolicyLine {
      return getVariableValue("line", 0) as PolicyLine
    }
    
    property set line ($arg :  PolicyLine) {
      setVariableValue("line", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getVariableValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setVariableValue("period", 0, $arg)
    }
    
    property get ratingOverrideHelper () : gw.web.line.common.RatingOverrideUIHelper {
      return getVariableValue("ratingOverrideHelper", 0) as gw.web.line.common.RatingOverrideUIHelper
    }
    
    property set ratingOverrideHelper ($arg :  gw.web.line.common.RatingOverrideUIHelper) {
      setVariableValue("ratingOverrideHelper", 0, $arg)
    }
    
    property get startInEditMode () : boolean {
      return getVariableValue("startInEditMode", 0) as java.lang.Boolean
    }
    
    property set startInEditMode ($arg :  boolean) {
      setVariableValue("startInEditMode", 0, $arg)
    }
    
    
  }
  
  
}