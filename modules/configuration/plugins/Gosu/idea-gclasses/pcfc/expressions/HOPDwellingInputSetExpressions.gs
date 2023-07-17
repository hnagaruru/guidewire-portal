package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPDwellingInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HOPDwellingInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPDwellingInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HOPDwellingInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PickerMenuItem (id=NewDwellingLocation) at HOPDwellingInputSet.pcf: line 42, column 147
    function action_4 () : void {
      LocationPopup.push(null, null, policyPeriod, openForEdit, true, line.SupportsNonSpecificLocations)
    }
    
    // 'action' attribute on PickerMenuItem (id=EditDwellingLocation) at HOPDwellingInputSet.pcf: line 47, column 147
    function action_7 () : void {
      LocationPopup.push(null, dwelling.Location, policyPeriod, openForEdit, true, line.SupportsNonSpecificLocations)
    }
    
    // 'action' attribute on PickerMenuItem (id=NewDwellingLocation) at HOPDwellingInputSet.pcf: line 42, column 147
    function action_dest_5 () : pcf.api.Destination {
      return pcf.LocationPopup.createDestination(null, null, policyPeriod, openForEdit, true, line.SupportsNonSpecificLocations)
    }
    
    // 'action' attribute on PickerMenuItem (id=EditDwellingLocation) at HOPDwellingInputSet.pcf: line 47, column 147
    function action_dest_8 () : pcf.api.Destination {
      return pcf.LocationPopup.createDestination(null, dwelling.Location, policyPeriod, openForEdit, true, line.SupportsNonSpecificLocations)
    }
    
    // 'currency' attribute on MonetaryAmountInput (id=ReplacementCost_Input) at HOPDwellingInputSet.pcf: line 89, column 41
    function currency_38 () : typekey.Currency {
      return dwelling.PreferredCoverageCurrency
    }
    
    // 'def' attribute on InputSetRef at HOPDwellingInputSet.pcf: line 70, column 55
    function def_onEnter_25 (def :  pcf.TerritoryCodeInputSet) : void {
      def.onEnter(dwelling.Location)
    }
    
    // 'def' attribute on InputSetRef at HOPDwellingInputSet.pcf: line 70, column 55
    function def_refreshVariables_26 (def :  pcf.TerritoryCodeInputSet) : void {
      def.refreshVariables(dwelling.Location)
    }
    
    // 'value' attribute on RangeInput (id=Location_Input) at HOPDwellingInputSet.pcf: line 37, column 41
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.Location = (__VALUE_TO_SET as entity.PolicyLocation)
    }
    
    // 'value' attribute on TypeKeyInput (id=LocationType_Input) at HOPDwellingInputSet.pcf: line 76, column 49
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.DwellingLocation = (__VALUE_TO_SET as typekey.DwellingLocationType)
    }
    
    // 'value' attribute on TypeKeyInput (id=ResidenceType_Input) at HOPDwellingInputSet.pcf: line 82, column 42
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.ResidenceType = (__VALUE_TO_SET as typekey.ResidenceType)
    }
    
    // 'value' attribute on MonetaryAmountInput (id=ReplacementCost_Input) at HOPDwellingInputSet.pcf: line 89, column 41
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.ReplacementCost = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'value' attribute on TextInput (id=NumberOfUnitsBetweenFirewall_Input) at HOPDwellingInputSet.pcf: line 95, column 38
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.UnitsNumber = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=NumberOfInsuredUnits_Input) at HOPDwellingInputSet.pcf: line 101, column 38
    function defaultSetter_45 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.InsuredUnits = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'editable' attribute on RangeInput (id=Location_Input) at HOPDwellingInputSet.pcf: line 37, column 41
    function editable_16 () : java.lang.Boolean {
      return dwelling.CanEditLocation
    }
    
    // 'initialValue' attribute on Variable at HOPDwellingInputSet.pcf: line 19, column 35
    function initialValue_0 () : entity.PolicyPeriod {
      return dwelling.Branch
    }
    
    // 'initialValue' attribute on Variable at HOPDwellingInputSet.pcf: line 23, column 30
    function initialValue_1 () : entity.HOPLine {
      return dwelling.HOPCoveragePart.HOPLine
    }
    
    // 'initialValue' attribute on Variable at HOPDwellingInputSet.pcf: line 28, column 60
    function initialValue_2 () : java.util.List<entity.AccountLocation> {
      return policyPeriod.getUnassignedAccountLocations(line.SupportsNonSpecificLocations)
    }
    
    // 'onChange' attribute on PostOnChange at HOPDwellingInputSet.pcf: line 49, column 135
    function onChange_3 () : void {
      gw.web.line.hop.policy.LineWizardStepSet_HOPHomeownersHelper.onDwellingLocationChanged(dwelling, jobWizardHelper)
    }
    
    // 'onPick' attribute on PickerMenuItem (id=NewDwellingLocation) at HOPDwellingInputSet.pcf: line 42, column 147
    function onPick_6 (PickedValue :  PolicyLocation) : void {
      gw.web.line.hop.policy.LineWizardStepSet_HOPHomeownersHelper.onDwellingLocationSelected(dwelling, PickedValue, jobWizardHelper)
    }
    
    // 'sortBy' attribute on IteratorSort at HOPDwellingInputSet.pcf: line 60, column 28
    function sortBy_10 (unusedLocation :  entity.AccountLocation) : java.lang.Object {
      return unusedLocation.LocationNum
    }
    
    // 'valueRange' attribute on RangeInput (id=Location_Input) at HOPDwellingInputSet.pcf: line 37, column 41
    function valueRange_20 () : java.lang.Object {
      return policyPeriod.PolicyLocations
    }
    
    // 'value' attribute on RangeInput (id=Location_Input) at HOPDwellingInputSet.pcf: line 37, column 41
    function valueRoot_19 () : java.lang.Object {
      return dwelling
    }
    
    // 'value' attribute on MenuItemIterator (id=UnusedLocationIterator) at HOPDwellingInputSet.pcf: line 57, column 68
    function value_15 () : java.util.List<entity.AccountLocation> {
      return unusedLocations
    }
    
    // 'value' attribute on RangeInput (id=Location_Input) at HOPDwellingInputSet.pcf: line 37, column 41
    function value_17 () : entity.PolicyLocation {
      return dwelling.Location
    }
    
    // 'value' attribute on TypeKeyInput (id=LocationType_Input) at HOPDwellingInputSet.pcf: line 76, column 49
    function value_27 () : typekey.DwellingLocationType {
      return dwelling.DwellingLocation
    }
    
    // 'value' attribute on TypeKeyInput (id=ResidenceType_Input) at HOPDwellingInputSet.pcf: line 82, column 42
    function value_31 () : typekey.ResidenceType {
      return dwelling.ResidenceType
    }
    
    // 'value' attribute on MonetaryAmountInput (id=ReplacementCost_Input) at HOPDwellingInputSet.pcf: line 89, column 41
    function value_35 () : gw.pl.currency.MonetaryAmount {
      return dwelling.ReplacementCost
    }
    
    // 'value' attribute on TextInput (id=NumberOfUnitsBetweenFirewall_Input) at HOPDwellingInputSet.pcf: line 95, column 38
    function value_40 () : java.lang.Integer {
      return dwelling.UnitsNumber
    }
    
    // 'value' attribute on TextInput (id=NumberOfInsuredUnits_Input) at HOPDwellingInputSet.pcf: line 101, column 38
    function value_44 () : java.lang.Integer {
      return dwelling.InsuredUnits
    }
    
    // 'valueRange' attribute on RangeInput (id=Location_Input) at HOPDwellingInputSet.pcf: line 37, column 41
    function verifyValueRangeIsAllowedType_21 ($$arg :  entity.PolicyLocation[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Location_Input) at HOPDwellingInputSet.pcf: line 37, column 41
    function verifyValueRangeIsAllowedType_21 ($$arg :  gw.api.database.IQueryBeanResult<entity.PolicyLocation>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Location_Input) at HOPDwellingInputSet.pcf: line 37, column 41
    function verifyValueRangeIsAllowedType_21 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Location_Input) at HOPDwellingInputSet.pcf: line 37, column 41
    function verifyValueRange_22 () : void {
      var __valueRangeArg = policyPeriod.PolicyLocations
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_21(__valueRangeArg)
    }
    
    property get dwelling () : entity.HOPDwelling {
      return getRequireValue("dwelling", 0) as entity.HOPDwelling
    }
    
    property set dwelling ($arg :  entity.HOPDwelling) {
      setRequireValue("dwelling", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get line () : entity.HOPLine {
      return getVariableValue("line", 0) as entity.HOPLine
    }
    
    property set line ($arg :  entity.HOPLine) {
      setVariableValue("line", 0, $arg)
    }
    
    property get openForEdit () : java.lang.Boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  java.lang.Boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get policyPeriod () : entity.PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as entity.PolicyPeriod
    }
    
    property set policyPeriod ($arg :  entity.PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    property get unusedLocations () : java.util.List<entity.AccountLocation> {
      return getVariableValue("unusedLocations", 0) as java.util.List<entity.AccountLocation>
    }
    
    property set unusedLocations ($arg :  java.util.List<entity.AccountLocation>) {
      setVariableValue("unusedLocations", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPDwellingInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends HOPDwellingInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PickerMenuItem (id=UnusedLocation) at HOPDwellingInputSet.pcf: line 65, column 151
    function action_11 () : void {
      LocationPopup.push(unusedLocation, null, policyPeriod, openForEdit, true, policyPeriod.HOPLine.SupportsNonSpecificLocations)
    }
    
    // 'action' attribute on PickerMenuItem (id=UnusedLocation) at HOPDwellingInputSet.pcf: line 65, column 151
    function action_dest_12 () : pcf.api.Destination {
      return pcf.LocationPopup.createDestination(unusedLocation, null, policyPeriod, openForEdit, true, policyPeriod.HOPLine.SupportsNonSpecificLocations)
    }
    
    // 'label' attribute on PickerMenuItem (id=UnusedLocation) at HOPDwellingInputSet.pcf: line 65, column 151
    function label_13 () : java.lang.Object {
      return unusedLocation.DisplayName
    }
    
    // 'onPick' attribute on PickerMenuItem (id=UnusedLocation) at HOPDwellingInputSet.pcf: line 65, column 151
    function onPick_14 (PickedValue :  PolicyLocation) : void {
      gw.web.line.hop.policy.LineWizardStepSet_HOPHomeownersHelper.onDwellingLocationSelected(dwelling, PickedValue, jobWizardHelper)
    }
    
    property get unusedLocation () : entity.AccountLocation {
      return getIteratedValue(1) as entity.AccountLocation
    }
    
    
  }
  
  
}