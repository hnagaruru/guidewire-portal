package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/pa/policy/QuickSubmission_QuoteDetailsPanelSet.PersonalAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class QuickSubmission_QuoteDetailsPanelSet_PersonalAutoLineExpressions {
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/QuickSubmission_QuoteDetailsPanelSet.PersonalAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class QuickSubmission_QuoteDetailsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=Vehicle1Coverages) at QuickSubmission_QuoteDetailsPanelSet.PersonalAutoLine.pcf: line 58, column 45
    function def_onEnter_12 (def :  pcf.PersonalAuto_VehicleCoverageDetailDV) : void {
      def.onEnter(vehicle1, openForEdit)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCurrency2PanelRef) at QuickSubmission_QuoteDetailsPanelSet.PersonalAutoLine.pcf: line 80, column 50
    function def_onEnter_20 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.onEnter(vehicle2, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef (id=Vehicle2Coverages) at QuickSubmission_QuoteDetailsPanelSet.PersonalAutoLine.pcf: line 84, column 45
    function def_onEnter_23 (def :  pcf.PersonalAuto_VehicleCoverageDetailDV) : void {
      def.onEnter(vehicle2, openForEdit)
    }
    
    // 'def' attribute on PanelRef at QuickSubmission_QuoteDetailsPanelSet.PersonalAutoLine.pcf: line 30, column 86
    function def_onEnter_3 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.onEnter(paLine, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at QuickSubmission_QuoteDetailsPanelSet.PersonalAutoLine.pcf: line 36, column 73
    function def_onEnter_5 (def :  pcf.PersonalAuto_AllVehicleCoveragesDV) : void {
      def.onEnter(paLine, openForEdit)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCurrency1PanelRef) at QuickSubmission_QuoteDetailsPanelSet.PersonalAutoLine.pcf: line 54, column 50
    function def_onEnter_9 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.onEnter(vehicle1, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCurrency1PanelRef) at QuickSubmission_QuoteDetailsPanelSet.PersonalAutoLine.pcf: line 54, column 50
    function def_refreshVariables_10 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.refreshVariables(vehicle1, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef (id=Vehicle1Coverages) at QuickSubmission_QuoteDetailsPanelSet.PersonalAutoLine.pcf: line 58, column 45
    function def_refreshVariables_13 (def :  pcf.PersonalAuto_VehicleCoverageDetailDV) : void {
      def.refreshVariables(vehicle1, openForEdit)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCurrency2PanelRef) at QuickSubmission_QuoteDetailsPanelSet.PersonalAutoLine.pcf: line 80, column 50
    function def_refreshVariables_21 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.refreshVariables(vehicle2, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef (id=Vehicle2Coverages) at QuickSubmission_QuoteDetailsPanelSet.PersonalAutoLine.pcf: line 84, column 45
    function def_refreshVariables_24 (def :  pcf.PersonalAuto_VehicleCoverageDetailDV) : void {
      def.refreshVariables(vehicle2, openForEdit)
    }
    
    // 'def' attribute on PanelRef at QuickSubmission_QuoteDetailsPanelSet.PersonalAutoLine.pcf: line 30, column 86
    function def_refreshVariables_4 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.refreshVariables(paLine, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at QuickSubmission_QuoteDetailsPanelSet.PersonalAutoLine.pcf: line 36, column 73
    function def_refreshVariables_6 (def :  pcf.PersonalAuto_AllVehicleCoveragesDV) : void {
      def.refreshVariables(paLine, openForEdit)
    }
    
    // 'initialValue' attribute on Variable at QuickSubmission_QuoteDetailsPanelSet.PersonalAutoLine.pcf: line 20, column 45
    function initialValue_0 () : productmodel.PersonalAutoLine {
      return period.PersonalAutoLine
    }
    
    // 'initialValue' attribute on Variable at QuickSubmission_QuoteDetailsPanelSet.PersonalAutoLine.pcf: line 24, column 38
    function initialValue_1 () : entity.PersonalVehicle {
      return paLine.Vehicles.length > 0 ? paLine.Vehicles[0] : null
    }
    
    // 'initialValue' attribute on Variable at QuickSubmission_QuoteDetailsPanelSet.PersonalAutoLine.pcf: line 28, column 38
    function initialValue_2 () : entity.PersonalVehicle {
      return paLine.Vehicles.length > 1 ? paLine.Vehicles[1] : null
    }
    
    // 'label' attribute on Label at QuickSubmission_QuoteDetailsPanelSet.PersonalAutoLine.pcf: line 75, column 49
    function label_19 () : java.lang.String {
      return vehicle2.DisplayName
    }
    
    // 'label' attribute on Label at QuickSubmission_QuoteDetailsPanelSet.PersonalAutoLine.pcf: line 49, column 49
    function label_8 () : java.lang.String {
      return vehicle1.DisplayName
    }
    
    // 'value' attribute on MonetaryAmountInput (id=Vehicle1Total_Input) at QuickSubmission_QuoteDetailsPanelSet.PersonalAutoLine.pcf: line 66, column 49
    function valueRoot_15 () : java.lang.Object {
      return vehicle1
    }
    
    // 'value' attribute on MonetaryAmountInput (id=Vehicle2Total_Input) at QuickSubmission_QuoteDetailsPanelSet.PersonalAutoLine.pcf: line 92, column 49
    function valueRoot_26 () : java.lang.Object {
      return vehicle2
    }
    
    // 'value' attribute on MonetaryAmountInput (id=Vehicle1Total_Input) at QuickSubmission_QuoteDetailsPanelSet.PersonalAutoLine.pcf: line 66, column 49
    function value_14 () : gw.pl.currency.MonetaryAmount {
      return vehicle1.TotalCost
    }
    
    // 'value' attribute on MonetaryAmountInput (id=Vehicle2Total_Input) at QuickSubmission_QuoteDetailsPanelSet.PersonalAutoLine.pcf: line 92, column 49
    function value_25 () : gw.pl.currency.MonetaryAmount {
      return vehicle2.TotalCost
    }
    
    // 'visible' attribute on Label at QuickSubmission_QuoteDetailsPanelSet.PersonalAutoLine.pcf: line 75, column 49
    function visible_18 () : java.lang.Boolean {
      return vehicle2 != null
    }
    
    // 'visible' attribute on Label at QuickSubmission_QuoteDetailsPanelSet.PersonalAutoLine.pcf: line 49, column 49
    function visible_7 () : java.lang.Boolean {
      return vehicle1 != null
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get paLine () : productmodel.PersonalAutoLine {
      return getVariableValue("paLine", 0) as productmodel.PersonalAutoLine
    }
    
    property set paLine ($arg :  productmodel.PersonalAutoLine) {
      setVariableValue("paLine", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getRequireValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setRequireValue("period", 0, $arg)
    }
    
    property get vehicle1 () : entity.PersonalVehicle {
      return getVariableValue("vehicle1", 0) as entity.PersonalVehicle
    }
    
    property set vehicle1 ($arg :  entity.PersonalVehicle) {
      setVariableValue("vehicle1", 0, $arg)
    }
    
    property get vehicle2 () : entity.PersonalVehicle {
      return getVariableValue("vehicle2", 0) as entity.PersonalVehicle
    }
    
    property set vehicle2 ($arg :  entity.PersonalVehicle) {
      setVariableValue("vehicle2", 0, $arg)
    }
    
    function costsForVehicle(vehicle : PersonalVehicle) : java.util.List<PACost> {
      var vehicleVL = vehicle.VersionList
      var allCosts = new java.util.ArrayList<PACost>()
      allCosts.addAll(vehicleVL.Costs.flatMap(\c -> c.AllVersions).toList())
      allCosts.addAll(vehicleVL.Coverages.flatMap(\c -> c.Costs).flatMap(\c -> c.AllVersions).toList())
      return allCosts
    }
    function alterCoveragePatternName(name : String, cost : PACost) : String {
      if (name.contains("PIP") ) {
        return name + " - " + (cost as PersonalAutoPIPCovCost).PAPIPCovCostType.DisplayName
      } else {
        return name
      }
    }
    
    
  }
  
  
}