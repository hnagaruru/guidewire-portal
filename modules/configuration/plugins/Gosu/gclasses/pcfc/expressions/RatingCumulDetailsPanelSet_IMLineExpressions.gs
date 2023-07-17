package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/im/policy/RatingCumulDetailsPanelSet.IMLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RatingCumulDetailsPanelSet_IMLineExpressions {
  @javax.annotation.Generated("config/web/pcf/line/im/policy/RatingCumulDetailsPanelSet.IMLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RatingCumulDetailsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=compactviewButton) at RatingCumulDetailsPanelSet.IMLine.pcf: line 42, column 70
    function action_6 () : void {
      viewMode = "drilldown"
    }
    
    // 'action' attribute on ToolbarButton (id=extendedviewButton) at RatingCumulDetailsPanelSet.IMLine.pcf: line 47, column 71
    function action_8 () : void {
      viewMode = "scroll"
    }
    
    // 'available' attribute on ToolbarButton (id=compactviewButton) at RatingCumulDetailsPanelSet.IMLine.pcf: line 42, column 70
    function available_5 () : java.lang.Boolean {
      return (viewMode != "drilldown")
    }
    
    // 'available' attribute on ToolbarButton (id=extendedviewButton) at RatingCumulDetailsPanelSet.IMLine.pcf: line 47, column 71
    function available_7 () : java.lang.Boolean {
      return (viewMode != "scroll") and pageLength < 5000
    }
    
    // 'def' attribute on PanelRef at RatingCumulDetailsPanelSet.IMLine.pcf: line 35, column 40
    function def_onEnter_11 (def :  pcf.IMRatingCumulPanelSet_drilldown) : void {
      def.onEnter(imLine)
    }
    
    // 'def' attribute on PanelRef at RatingCumulDetailsPanelSet.IMLine.pcf: line 35, column 40
    function def_onEnter_13 (def :  pcf.IMRatingCumulPanelSet_scroll) : void {
      def.onEnter(imLine)
    }
    
    // 'def' attribute on PanelRef (id=RatingOverrideButtonDV) at RatingCumulDetailsPanelSet.IMLine.pcf: line 31, column 36
    function def_onEnter_3 (def :  pcf.RatingOverrideButtonDV) : void {
      def.onEnter(period, period.IMLine, jobWizardHelper, CurrentLocation.InEditMode)
    }
    
    // 'def' attribute on PanelRef at RatingCumulDetailsPanelSet.IMLine.pcf: line 35, column 40
    function def_refreshVariables_12 (def :  pcf.IMRatingCumulPanelSet_drilldown) : void {
      def.refreshVariables(imLine)
    }
    
    // 'def' attribute on PanelRef at RatingCumulDetailsPanelSet.IMLine.pcf: line 35, column 40
    function def_refreshVariables_14 (def :  pcf.IMRatingCumulPanelSet_scroll) : void {
      def.refreshVariables(imLine)
    }
    
    // 'def' attribute on PanelRef (id=RatingOverrideButtonDV) at RatingCumulDetailsPanelSet.IMLine.pcf: line 31, column 36
    function def_refreshVariables_4 (def :  pcf.RatingOverrideButtonDV) : void {
      def.refreshVariables(period, period.IMLine, jobWizardHelper, CurrentLocation.InEditMode)
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.IMLine.pcf: line 20, column 35
    function initialValue_0 () : productmodel.IMLine {
      return period.IMLine
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.IMLine.pcf: line 24, column 19
    function initialValue_1 () : int {
      return imLine.quotePageLength()
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.IMLine.pcf: line 28, column 32
    function initialValue_2 () : java.lang.String {
      return checkViewMode()
    }
    
    // 'mode' attribute on PanelRef at RatingCumulDetailsPanelSet.IMLine.pcf: line 35, column 40
    function mode_15 () : java.lang.Object {
      return viewMode
    }
    
    // 'title' attribute on TitleBar (id=grandTotalTitle) at RatingCumulDetailsPanelSet.IMLine.pcf: line 54, column 138
    function title_16 () : java.lang.String {
      return DisplayKey.get("Web.Quote.TotalCostLabel.Total2", imLine.Costs.AmountSum(period.PreferredSettlementCurrency))
    }
    
    // 'visible' attribute on PanelRef at RatingCumulDetailsPanelSet.IMLine.pcf: line 35, column 40
    function visible_10 () : java.lang.Boolean {
      return not imLine.Costs.Empty
    }
    
    // 'visible' attribute on Toolbar (id=IMRatingCumulPanelSet_tb) at RatingCumulDetailsPanelSet.IMLine.pcf: line 37, column 43
    function visible_9 () : java.lang.Boolean {
      return period.Lines.Count == 1
    }
    
    property get imLine () : productmodel.IMLine {
      return getVariableValue("imLine", 0) as productmodel.IMLine
    }
    
    property set imLine ($arg :  productmodel.IMLine) {
      setVariableValue("imLine", 0, $arg)
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