package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/ba/policy/PolicyLineSummaryPanelSet.BusinessAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyLineSummaryPanelSet_BusinessAutoLineExpressions {
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/PolicyLineSummaryPanelSet.BusinessAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BAStateCoverageSummaryDVExpressionsImpl extends StateSummaryLDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ListViewInput at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 270, column 39
    function def_onEnter_74 (def :  pcf.CoverageSummaryLV) : void {
      def.onEnter(baLine.getOtherthanHiredAndNonOwnedCoverages(coveredJurisdiction)?.toList() as java.util.List<gw.api.domain.Clause>, baLine)
    }
    
    // 'def' attribute on ListViewInput at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 270, column 39
    function def_refreshVariables_75 (def :  pcf.CoverageSummaryLV) : void {
      def.refreshVariables(baLine.getOtherthanHiredAndNonOwnedCoverages(coveredJurisdiction)?.toList() as java.util.List<gw.api.domain.Clause>, baLine)
    }
    
    // 'initialValue' attribute on Variable at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 264, column 48
    function initialValue_72 () : typekey.Jurisdiction {
      return selectedState
    }
    
    // 'label' attribute on Label at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 267, column 102
    function label_73 () : java.lang.String {
      return DisplayKey.get("Web.Policy.BA.StateCoverages", selectedState)
    }
    
    property get coveredJurisdiction () : typekey.Jurisdiction {
      return getVariableValue("coveredJurisdiction", 2) as typekey.Jurisdiction
    }
    
    property set coveredJurisdiction ($arg :  typekey.Jurisdiction) {
      setVariableValue("coveredJurisdiction", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/PolicyLineSummaryPanelSet.BusinessAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends PolicyLineSummaryPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=Jurisdiction_Cell) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 124, column 37
    function valueRoot_30 () : java.lang.Object {
      return jurisdiction
    }
    
    // 'value' attribute on TextCell (id=NumEmployees_Cell) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 130, column 37
    function valueRoot_33 () : java.lang.Object {
      return jurisdiction.NonOwnedBasis
    }
    
    // 'value' attribute on TypeKeyCell (id=Jurisdiction_Cell) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 124, column 37
    function value_29 () : typekey.Jurisdiction {
      return jurisdiction.State
    }
    
    // 'value' attribute on TextCell (id=NumEmployees_Cell) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 130, column 37
    function value_32 () : java.lang.Integer {
      return jurisdiction.NonOwnedBasis.NumEmployees
    }
    
    // 'value' attribute on TextCell (id=TotalPartners_Cell) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 136, column 37
    function value_35 () : java.lang.Integer {
      return jurisdiction.NonOwnedBasis.NumPartners
    }
    
    // 'value' attribute on TextCell (id=TotalVolunteers_Cell) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 142, column 37
    function value_38 () : java.lang.Integer {
      return jurisdiction.NonOwnedBasis.NumVolunteers
    }
    
    property get jurisdiction () : entity.BAJurisdiction {
      return getIteratedValue(1) as entity.BAJurisdiction
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/PolicyLineSummaryPanelSet.BusinessAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends StateSummaryLDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=State_Cell) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 178, column 30
    function action_59 () : void {
      BALocationSummaryPopup.push(baLine, gw.api.util.StateJurisdictionMappingUtil.getStateMappingForJurisdiction(theState))
    }
    
    // 'action' attribute on TextCell (id=State_Cell) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 178, column 30
    function action_dest_60 () : pcf.api.Destination {
      return pcf.BALocationSummaryPopup.createDestination(baLine, gw.api.util.StateJurisdictionMappingUtil.getStateMappingForJurisdiction(theState))
    }
    
    // 'value' attribute on TextCell (id=State_Cell) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 178, column 30
    function value_61 () : typekey.State {
      return gw.api.util.StateJurisdictionMappingUtil.getStateMappingForJurisdiction(theState)
    }
    
    // 'value' attribute on TextCell (id=LocCount_Cell) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 194, column 30
    function value_63 () : java.lang.Integer {
      return line.Branch.countLocationsInState(gw.api.util.StateJurisdictionMappingUtil.getStateMappingForJurisdiction(theState))
    }
    
    // 'value' attribute on TextCell (id=VehCount_Cell) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 209, column 30
    function value_65 () : java.lang.Integer {
      return baLine.Vehicles.countWhere( \ v -> v.Location.State == gw.api.util.StateJurisdictionMappingUtil.getStateMappingForJurisdiction(theState))
    }
    
    // 'value' attribute on TextCell (id=PassengerCount_Cell) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 224, column 30
    function value_67 () : java.lang.Integer {
      return baLine.Vehicles.countWhere( \ v -> v.Location.State == gw.api.util.StateJurisdictionMappingUtil.getStateMappingForJurisdiction(theState) and v.VehicleType == TC_PP)
    }
    
    // 'value' attribute on TextCell (id=TruckCount_Cell) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 239, column 30
    function value_69 () : java.lang.Integer {
      return baLine.Vehicles.countWhere( \ v -> v.Location.State == gw.api.util.StateJurisdictionMappingUtil.getStateMappingForJurisdiction(theState) and v.VehicleType == TC_COMMERCIAL)
    }
    
    property get theState () : typekey.Jurisdiction {
      return getIteratedValue(2) as typekey.Jurisdiction
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/PolicyLineSummaryPanelSet.BusinessAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PolicyLineSummaryPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=Jurisdiction_Cell) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 84, column 57
    function valueRoot_16 () : java.lang.Object {
      return jurisdiction
    }
    
    // 'value' attribute on TextCell (id=CostHire_Cell) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 91, column 37
    function valueRoot_19 () : java.lang.Object {
      return jurisdiction.HiredAutoBasis
    }
    
    // 'value' attribute on TypeKeyCell (id=Jurisdiction_Cell) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 84, column 57
    function value_15 () : typekey.Jurisdiction {
      return jurisdiction.State
    }
    
    // 'value' attribute on TextCell (id=CostHire_Cell) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 91, column 37
    function value_18 () : java.lang.Integer {
      return jurisdiction.HiredAutoBasis.Basis
    }
    
    // 'value' attribute on BooleanRadioCell (id=IfAny_Cell) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 96, column 37
    function value_21 () : java.lang.Boolean {
      return jurisdiction.HiredAutoBasis.IfAnyExposure
    }
    
    property get jurisdiction () : entity.BAJurisdiction {
      return getIteratedValue(1) as entity.BAJurisdiction
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/PolicyLineSummaryPanelSet.BusinessAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyLineSummaryPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ListViewInput (id=ConditionSummaryLV) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 55, column 61
    function def_onEnter_10 (def :  pcf.CoverageSummaryLV) : void {
      def.onEnter(baLine.BALineConditions.toList(), baLine)
    }
    
    // 'def' attribute on ListViewInput at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 33, column 60
    function def_onEnter_2 (def :  pcf.CoverageSummaryLV) : void {
      def.onEnter((baLine).BALineCoverages.toList(), baLine)
    }
    
    // 'def' attribute on ListViewInput (id=ExclusionSummaryLV) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 44, column 61
    function def_onEnter_6 (def :  pcf.CoverageSummaryLV) : void {
      def.onEnter(baLine.BALineExclusions.toList(), baLine)
    }
    
    // 'def' attribute on ListViewInput (id=ConditionSummaryLV) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 55, column 61
    function def_refreshVariables_11 (def :  pcf.CoverageSummaryLV) : void {
      def.refreshVariables(baLine.BALineConditions.toList(), baLine)
    }
    
    // 'def' attribute on ListViewInput at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 33, column 60
    function def_refreshVariables_3 (def :  pcf.CoverageSummaryLV) : void {
      def.refreshVariables((baLine).BALineCoverages.toList(), baLine)
    }
    
    // 'def' attribute on ListViewInput (id=ExclusionSummaryLV) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 44, column 61
    function def_refreshVariables_7 (def :  pcf.CoverageSummaryLV) : void {
      def.refreshVariables(baLine.BALineExclusions.toList(), baLine)
    }
    
    // 'initialValue' attribute on Variable at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 18, column 45
    function initialValue_0 () : productmodel.BusinessAutoLine {
      return line as BusinessAutoLine
    }
    
    // 'value' attribute on TypeKeyCell (id=Jurisdiction_Cell) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 84, column 57
    function sortValue_12 (jurisdiction :  entity.BAJurisdiction) : java.lang.Object {
      return jurisdiction.State
    }
    
    // 'value' attribute on TextCell (id=CostHire_Cell) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 91, column 37
    function sortValue_13 (jurisdiction :  entity.BAJurisdiction) : java.lang.Object {
      return jurisdiction.HiredAutoBasis.Basis
    }
    
    // 'value' attribute on BooleanRadioCell (id=IfAny_Cell) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 96, column 37
    function sortValue_14 (jurisdiction :  entity.BAJurisdiction) : java.lang.Object {
      return jurisdiction.HiredAutoBasis.IfAnyExposure
    }
    
    // 'value' attribute on TypeKeyCell (id=Jurisdiction_Cell) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 124, column 37
    function sortValue_25 (jurisdiction :  entity.BAJurisdiction) : java.lang.Object {
      return jurisdiction.State
    }
    
    // 'value' attribute on TextCell (id=NumEmployees_Cell) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 130, column 37
    function sortValue_26 (jurisdiction :  entity.BAJurisdiction) : java.lang.Object {
      return jurisdiction.NonOwnedBasis.NumEmployees
    }
    
    // 'value' attribute on TextCell (id=TotalPartners_Cell) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 136, column 37
    function sortValue_27 (jurisdiction :  entity.BAJurisdiction) : java.lang.Object {
      return jurisdiction.NonOwnedBasis.NumPartners
    }
    
    // 'value' attribute on TextCell (id=TotalVolunteers_Cell) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 142, column 37
    function sortValue_28 (jurisdiction :  entity.BAJurisdiction) : java.lang.Object {
      return jurisdiction.NonOwnedBasis.NumVolunteers
    }
    
    // 'value' attribute on RowIterator (id=HiredAutoIterator) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 76, column 55
    function value_24 () : entity.BAJurisdiction[] {
      return baLine.HiredAutoJurisdictions
    }
    
    // 'value' attribute on RowIterator (id=NonownedIterator) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 116, column 55
    function value_41 () : entity.BAJurisdiction[] {
      return baLine.NonOwnedJurisdictions
    }
    
    // 'visible' attribute on ListViewInput at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 33, column 60
    function visible_1 () : java.lang.Boolean {
      return not baLine.BALineCoverages.IsEmpty
    }
    
    // 'visible' attribute on Label at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 38, column 62
    function visible_4 () : java.lang.Boolean {
      return not baLine.BALineExclusions.IsEmpty
    }
    
    // 'visible' attribute on Label at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 49, column 62
    function visible_8 () : java.lang.Boolean {
      return not baLine.BALineConditions.IsEmpty
    }
    
    property get baLine () : productmodel.BusinessAutoLine {
      return getVariableValue("baLine", 0) as productmodel.BusinessAutoLine
    }
    
    property set baLine ($arg :  productmodel.BusinessAutoLine) {
      setVariableValue("baLine", 0, $arg)
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
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/PolicyLineSummaryPanelSet.BusinessAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class StateSummaryLDVExpressionsImpl extends PolicyLineSummaryPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=SummTotal_Cell) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 185, column 35
    function action_47 () : void {
      BAVehicleSchedulePopup.push(baLine, null)
    }
    
    // 'action' attribute on TextCell (id=SummTotal_Cell) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 185, column 35
    function action_dest_48 () : pcf.api.Destination {
      return pcf.BAVehicleSchedulePopup.createDestination(baLine, null)
    }
    
    // 'value' attribute on TextCell (id=State_Cell) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 178, column 30
    function sortValue_42 (theState :  typekey.Jurisdiction) : java.lang.Object {
      return gw.api.util.StateJurisdictionMappingUtil.getStateMappingForJurisdiction(theState)
    }
    
    // 'value' attribute on TextCell (id=LocCount_Cell) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 194, column 30
    function sortValue_43 (theState :  typekey.Jurisdiction) : java.lang.Object {
      return line.Branch.countLocationsInState(gw.api.util.StateJurisdictionMappingUtil.getStateMappingForJurisdiction(theState))
    }
    
    // 'value' attribute on TextCell (id=VehCount_Cell) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 209, column 30
    function sortValue_44 (theState :  typekey.Jurisdiction) : java.lang.Object {
      return baLine.Vehicles.countWhere( \ v -> v.Location.State == gw.api.util.StateJurisdictionMappingUtil.getStateMappingForJurisdiction(theState))
    }
    
    // 'value' attribute on TextCell (id=PassengerCount_Cell) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 224, column 30
    function sortValue_45 (theState :  typekey.Jurisdiction) : java.lang.Object {
      return baLine.Vehicles.countWhere( \ v -> v.Location.State == gw.api.util.StateJurisdictionMappingUtil.getStateMappingForJurisdiction(theState) and v.VehicleType == TC_PP)
    }
    
    // 'value' attribute on TextCell (id=TruckCount_Cell) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 239, column 30
    function sortValue_46 (theState :  typekey.Jurisdiction) : java.lang.Object {
      return baLine.Vehicles.countWhere( \ v -> v.Location.State == gw.api.util.StateJurisdictionMappingUtil.getStateMappingForJurisdiction(theState) and v.VehicleType == TC_COMMERCIAL)
    }
    
    // 'value' attribute on TextCell (id=LocTotal_Cell) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 200, column 35
    function valueRoot_50 () : java.lang.Object {
      return line.Branch.PolicyLocations
    }
    
    // 'value' attribute on TextCell (id=VehTotal_Cell) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 215, column 35
    function valueRoot_53 () : java.lang.Object {
      return baLine.Vehicles
    }
    
    // 'value' attribute on TextCell (id=LocTotal_Cell) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 200, column 35
    function value_49 () : java.lang.Integer {
      return line.Branch.PolicyLocations.length
    }
    
    // 'value' attribute on TextCell (id=VehTotal_Cell) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 215, column 35
    function value_52 () : java.lang.Integer {
      return baLine.Vehicles.length
    }
    
    // 'value' attribute on TextCell (id=PassengerTotal_Cell) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 230, column 35
    function value_55 () : java.lang.Integer {
      return baLine.Vehicles.countWhere( \ v -> v.VehicleType == TC_PP)
    }
    
    // 'value' attribute on TextCell (id=TruckTotal_Cell) at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 245, column 35
    function value_57 () : java.lang.Integer {
      return baLine.Vehicles.countWhere( \ v -> v.VehicleType == TC_COMMERCIAL)
    }
    
    // 'value' attribute on RowIterator at PolicyLineSummaryPanelSet.BusinessAutoLine.pcf: line 167, column 48
    function value_71 () : typekey.Jurisdiction[] {
      return baLine.GaragingJurisdictions*.State
    }
    
    property get selectedState () : Jurisdiction {
      return getCurrentSelection(1) as Jurisdiction
    }
    
    property set selectedState ($arg :  Jurisdiction) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  
}