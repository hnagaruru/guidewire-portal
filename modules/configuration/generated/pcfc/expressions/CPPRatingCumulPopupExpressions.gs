package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cpp/policy/CPPRatingCumulPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CPPRatingCumulPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cpp/policy/CPPRatingCumulPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CPPRatingCumulPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (period :  PolicyPeriod, line :  PolicyLine, isEditable :  boolean, jobWizardHelper :  gw.api.web.job.JobWizardHelper) : int {
      return 0
    }
    
    // 'def' attribute on PanelRef at CPPRatingCumulPopup.pcf: line 25, column 39
    function def_onEnter_0 (def :  pcf.RatingCumulDetailsPanelSet_BOPLine) : void {
      def.onEnter(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CPPRatingCumulPopup.pcf: line 25, column 39
    function def_onEnter_10 (def :  pcf.RatingCumulDetailsPanelSet_IMLine) : void {
      def.onEnter(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CPPRatingCumulPopup.pcf: line 25, column 39
    function def_onEnter_12 (def :  pcf.RatingCumulDetailsPanelSet_ManualLine) : void {
      def.onEnter(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CPPRatingCumulPopup.pcf: line 25, column 39
    function def_onEnter_14 (def :  pcf.RatingCumulDetailsPanelSet_PersonalAutoLine) : void {
      def.onEnter(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CPPRatingCumulPopup.pcf: line 25, column 39
    function def_onEnter_16 (def :  pcf.RatingCumulDetailsPanelSet_WorkersCompLine) : void {
      def.onEnter(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CPPRatingCumulPopup.pcf: line 25, column 39
    function def_onEnter_18 (def :  pcf.RatingCumulDetailsPanelSet_default) : void {
      def.onEnter(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CPPRatingCumulPopup.pcf: line 25, column 39
    function def_onEnter_2 (def :  pcf.RatingCumulDetailsPanelSet_BusinessAutoLine) : void {
      def.onEnter(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CPPRatingCumulPopup.pcf: line 25, column 39
    function def_onEnter_4 (def :  pcf.RatingCumulDetailsPanelSet_CPLine) : void {
      def.onEnter(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CPPRatingCumulPopup.pcf: line 25, column 39
    function def_onEnter_6 (def :  pcf.RatingCumulDetailsPanelSet_GLLine) : void {
      def.onEnter(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CPPRatingCumulPopup.pcf: line 25, column 39
    function def_onEnter_8 (def :  pcf.RatingCumulDetailsPanelSet_HOPLine) : void {
      def.onEnter(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CPPRatingCumulPopup.pcf: line 25, column 39
    function def_refreshVariables_1 (def :  pcf.RatingCumulDetailsPanelSet_BOPLine) : void {
      def.refreshVariables(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CPPRatingCumulPopup.pcf: line 25, column 39
    function def_refreshVariables_11 (def :  pcf.RatingCumulDetailsPanelSet_IMLine) : void {
      def.refreshVariables(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CPPRatingCumulPopup.pcf: line 25, column 39
    function def_refreshVariables_13 (def :  pcf.RatingCumulDetailsPanelSet_ManualLine) : void {
      def.refreshVariables(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CPPRatingCumulPopup.pcf: line 25, column 39
    function def_refreshVariables_15 (def :  pcf.RatingCumulDetailsPanelSet_PersonalAutoLine) : void {
      def.refreshVariables(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CPPRatingCumulPopup.pcf: line 25, column 39
    function def_refreshVariables_17 (def :  pcf.RatingCumulDetailsPanelSet_WorkersCompLine) : void {
      def.refreshVariables(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CPPRatingCumulPopup.pcf: line 25, column 39
    function def_refreshVariables_19 (def :  pcf.RatingCumulDetailsPanelSet_default) : void {
      def.refreshVariables(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CPPRatingCumulPopup.pcf: line 25, column 39
    function def_refreshVariables_3 (def :  pcf.RatingCumulDetailsPanelSet_BusinessAutoLine) : void {
      def.refreshVariables(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CPPRatingCumulPopup.pcf: line 25, column 39
    function def_refreshVariables_5 (def :  pcf.RatingCumulDetailsPanelSet_CPLine) : void {
      def.refreshVariables(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CPPRatingCumulPopup.pcf: line 25, column 39
    function def_refreshVariables_7 (def :  pcf.RatingCumulDetailsPanelSet_GLLine) : void {
      def.refreshVariables(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at CPPRatingCumulPopup.pcf: line 25, column 39
    function def_refreshVariables_9 (def :  pcf.RatingCumulDetailsPanelSet_HOPLine) : void {
      def.refreshVariables(period, jobWizardHelper, isEditable)
    }
    
    // 'mode' attribute on PanelRef at CPPRatingCumulPopup.pcf: line 25, column 39
    function mode_20 () : java.lang.Object {
      return line.Pattern.PublicID
    }
    
    // 'title' attribute on Popup (id=CPPRatingCumulPopup) at CPPRatingCumulPopup.pcf: line 7, column 30
    static function title_21 (isEditable :  boolean, jobWizardHelper :  gw.api.web.job.JobWizardHelper, line :  PolicyLine, period :  PolicyPeriod) : java.lang.Object {
      return line.DisplayName
    }
    
    override property get CurrentLocation () : pcf.CPPRatingCumulPopup {
      return super.CurrentLocation as pcf.CPPRatingCumulPopup
    }
    
    property get isEditable () : boolean {
      return getVariableValue("isEditable", 0) as java.lang.Boolean
    }
    
    property set isEditable ($arg :  boolean) {
      setVariableValue("isEditable", 0, $arg)
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
    
    
  }
  
  
}