package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cpp/policy/RatingPanelSet.CommercialPackage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RatingPanelSet_CommercialPackageExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cpp/policy/RatingPanelSet.CommercialPackage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RatingPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=compactViewButton) at RatingPanelSet.CommercialPackage.pcf: line 33, column 70
    function action_3 () : void {
      viewMode = "drilldown"
    }
    
    // 'action' attribute on ToolbarButton (id=extendedViewButton) at RatingPanelSet.CommercialPackage.pcf: line 38, column 71
    function action_5 () : void {
      viewMode = "scroll"
    }
    
    // 'available' attribute on ToolbarButton (id=compactViewButton) at RatingPanelSet.CommercialPackage.pcf: line 33, column 70
    function available_2 () : java.lang.Boolean {
      return (viewMode != "drilldown")
    }
    
    // 'available' attribute on ToolbarButton (id=extendedViewButton) at RatingPanelSet.CommercialPackage.pcf: line 38, column 71
    function available_4 () : java.lang.Boolean {
      return (viewMode != "scroll") and pageLength < 5000
    }
    
    // 'def' attribute on PanelRef at RatingPanelSet.CommercialPackage.pcf: line 27, column 23
    function def_onEnter_6 (def :  pcf.CPPRatingCumulPanelSet_drilldown) : void {
      def.onEnter(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at RatingPanelSet.CommercialPackage.pcf: line 27, column 23
    function def_onEnter_8 (def :  pcf.CPPRatingCumulPanelSet_scroll) : void {
      def.onEnter(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at RatingPanelSet.CommercialPackage.pcf: line 27, column 23
    function def_refreshVariables_7 (def :  pcf.CPPRatingCumulPanelSet_drilldown) : void {
      def.refreshVariables(period, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at RatingPanelSet.CommercialPackage.pcf: line 27, column 23
    function def_refreshVariables_9 (def :  pcf.CPPRatingCumulPanelSet_scroll) : void {
      def.refreshVariables(period, jobWizardHelper, isEditable)
    }
    
    // 'initialValue' attribute on Variable at RatingPanelSet.CommercialPackage.pcf: line 20, column 19
    function initialValue_0 () : int {
      return gw.lob.multiline.CPPQuotePage.cppQuotePageLength(period)
    }
    
    // 'initialValue' attribute on Variable at RatingPanelSet.CommercialPackage.pcf: line 24, column 32
    function initialValue_1 () : java.lang.String {
      return checkViewMode()
    }
    
    // 'mode' attribute on PanelRef at RatingPanelSet.CommercialPackage.pcf: line 27, column 23
    function mode_10 () : java.lang.Object {
      return viewMode
    }
    
    property get isEditable () : boolean {
      return getRequireValue("isEditable", 0) as java.lang.Boolean
    }
    
    property set isEditable ($arg :  boolean) {
      setRequireValue("isEditable", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get pageLength () : int {
      return getVariableValue("pageLength", 0) as java.lang.Integer
    }
    
    property set pageLength ($arg :  int) {
      setVariableValue("pageLength", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getRequireValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setRequireValue("period", 0, $arg)
    }
    
    property get viewMode () : java.lang.String {
      return getVariableValue("viewMode", 0) as java.lang.String
    }
    
    property set viewMode ($arg :  java.lang.String) {
      setVariableValue("viewMode", 0, $arg)
    }
    
    function checkViewMode() : String {
      return (pageLength > 50) ? "drilldown" : "scroll" 
    }
    
    
  }
  
  
}