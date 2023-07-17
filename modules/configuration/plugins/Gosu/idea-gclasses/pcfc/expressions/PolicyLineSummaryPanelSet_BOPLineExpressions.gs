package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/bop/policy/PolicyLineSummaryPanelSet.BOPLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyLineSummaryPanelSet_BOPLineExpressions {
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/PolicyLineSummaryPanelSet.BOPLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PanelIteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=BuildingDetails) at PolicyLineSummaryPanelSet.BOPLine.pcf: line 96, column 126
    function action_16 () : void {
      BOPBuildingPopup.push(line as BOPLine, bopLocation, bOPBuildingEU, false, false, jobWizardHelper)
    }
    
    // 'action' attribute on Link (id=BuildingDetails) at PolicyLineSummaryPanelSet.BOPLine.pcf: line 96, column 126
    function action_dest_17 () : pcf.api.Destination {
      return pcf.BOPBuildingPopup.createDestination(line as BOPLine, bopLocation, bOPBuildingEU, false, false, jobWizardHelper)
    }
    
    // 'def' attribute on ListViewInput at PolicyLineSummaryPanelSet.BOPLine.pcf: line 100, column 33
    function def_onEnter_19 (def :  pcf.CoverageSummaryLV) : void {
      def.onEnter(bOPBuildingEU.SortedCoverages.toList(), bOPBuildingEU)
    }
    
    // 'def' attribute on ListViewInput at PolicyLineSummaryPanelSet.BOPLine.pcf: line 100, column 33
    function def_refreshVariables_20 (def :  pcf.CoverageSummaryLV) : void {
      def.refreshVariables(bOPBuildingEU.SortedCoverages.toList(), bOPBuildingEU)
    }
    
    // 'label' attribute on Link (id=BuildingDetails) at PolicyLineSummaryPanelSet.BOPLine.pcf: line 96, column 126
    function label_18 () : java.lang.Object {
      return DisplayKey.get("Web.Policy.BOP.Quote.Building.Title", bOPBuildingEU.Building.BuildingNum)
    }
    
    property get bOPBuildingEU () : entity.BOPBuilding {
      return getIteratedValue(2) as entity.BOPBuilding
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/PolicyLineSummaryPanelSet.BOPLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends PolicyLineSummaryPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ListViewInput at PolicyLineSummaryPanelSet.BOPLine.pcf: line 73, column 31
    function def_onEnter_13 (def :  pcf.CoverageSummaryLV) : void {
      def.onEnter(bopLocation.SortedCoverages.toList(), bopLocation)
    }
    
    // 'def' attribute on ListViewInput at PolicyLineSummaryPanelSet.BOPLine.pcf: line 73, column 31
    function def_refreshVariables_14 (def :  pcf.CoverageSummaryLV) : void {
      def.refreshVariables(bopLocation.SortedCoverages.toList(), bopLocation)
    }
    
    // 'label' attribute on Label at PolicyLineSummaryPanelSet.BOPLine.pcf: line 69, column 154
    function label_12 () : java.lang.String {
      return DisplayKey.get("Web.Policy.BOP.Quote.Location.Title", bopLocation.Location.LocationNum, bopLocation.Location.CompactName)
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyLineSummaryPanelSet.BOPLine.pcf: line 88, column 30
    function sortBy_15 (bOPBuildingEU :  entity.BOPBuilding) : java.lang.Object {
      return bOPBuildingEU.Building.BuildingNum
    }
    
    // 'value' attribute on InputIterator at PolicyLineSummaryPanelSet.BOPLine.pcf: line 85, column 46
    function value_21 () : entity.BOPBuilding[] {
      return bopLocation.Buildings
    }
    
    property get bopLocation () : entity.BOPLocation {
      return getIteratedValue(1) as entity.BOPLocation
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/PolicyLineSummaryPanelSet.BOPLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyLineSummaryPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ListViewInput at PolicyLineSummaryPanelSet.BOPLine.pcf: line 30, column 33
    function def_onEnter_1 (def :  pcf.CoverageSummaryLV) : void {
      def.onEnter((bopline).BOPLineCoverages.toList(), bopline)
    }
    
    // 'def' attribute on ListViewInput (id=ExclusionSummaryLV) at PolicyLineSummaryPanelSet.BOPLine.pcf: line 40, column 63
    function def_onEnter_5 (def :  pcf.CoverageSummaryLV) : void {
      def.onEnter(bopline.BOPLineExclusions.toList(), bopline)
    }
    
    // 'def' attribute on ListViewInput (id=ConditionSummaryLV) at PolicyLineSummaryPanelSet.BOPLine.pcf: line 50, column 63
    function def_onEnter_9 (def :  pcf.CoverageSummaryLV) : void {
      def.onEnter(bopline.BOPLineConditions.toList(), bopline)
    }
    
    // 'def' attribute on ListViewInput (id=ConditionSummaryLV) at PolicyLineSummaryPanelSet.BOPLine.pcf: line 50, column 63
    function def_refreshVariables_10 (def :  pcf.CoverageSummaryLV) : void {
      def.refreshVariables(bopline.BOPLineConditions.toList(), bopline)
    }
    
    // 'def' attribute on ListViewInput at PolicyLineSummaryPanelSet.BOPLine.pcf: line 30, column 33
    function def_refreshVariables_2 (def :  pcf.CoverageSummaryLV) : void {
      def.refreshVariables((bopline).BOPLineCoverages.toList(), bopline)
    }
    
    // 'def' attribute on ListViewInput (id=ExclusionSummaryLV) at PolicyLineSummaryPanelSet.BOPLine.pcf: line 40, column 63
    function def_refreshVariables_6 (def :  pcf.CoverageSummaryLV) : void {
      def.refreshVariables(bopline.BOPLineExclusions.toList(), bopline)
    }
    
    // 'initialValue' attribute on Variable at PolicyLineSummaryPanelSet.BOPLine.pcf: line 17, column 41
    function initialValue_0 () : entity.BusinessOwnersLine {
      return line as BusinessOwnersLine
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyLineSummaryPanelSet.BOPLine.pcf: line 64, column 24
    function sortBy_11 (bopLocation :  entity.BOPLocation) : java.lang.Object {
      return bopLocation.Location.LocationNum
    }
    
    // 'value' attribute on PanelIterator at PolicyLineSummaryPanelSet.BOPLine.pcf: line 61, column 40
    function value_22 () : entity.BOPLocation[] {
      return (line as BOPLine).BOPLocations
    }
    
    // 'visible' attribute on Label at PolicyLineSummaryPanelSet.BOPLine.pcf: line 35, column 64
    function visible_3 () : java.lang.Boolean {
      return not bopline.BOPLineExclusions.IsEmpty
    }
    
    // 'visible' attribute on Label at PolicyLineSummaryPanelSet.BOPLine.pcf: line 45, column 64
    function visible_7 () : java.lang.Boolean {
      return not bopline.BOPLineConditions.IsEmpty
    }
    
    property get bopline () : entity.BusinessOwnersLine {
      return getVariableValue("bopline", 0) as entity.BusinessOwnersLine
    }
    
    property set bopline ($arg :  entity.BusinessOwnersLine) {
      setVariableValue("bopline", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get line () : PolicyLine {
      return getRequireValue("line", 0) as PolicyLine
    }
    
    property set line ($arg :  PolicyLine) {
      setRequireValue("line", 0, $arg)
    }
    
    
  }
  
  
}