package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/pa/policy/PolicyLineSummaryPanelSet.PersonalAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyLineSummaryPanelSet_PersonalAutoLineExpressions {
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PolicyLineSummaryPanelSet.PersonalAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends PanelIteratorEntry2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=VehModifierName_Cell) at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 166, column 75
    function valueRoot_34 () : java.lang.Object {
      return modifiername.Pattern
    }
    
    // 'value' attribute on TextCell (id=VehModifierName_Cell) at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 166, column 75
    function value_33 () : java.lang.String {
      return modifiername.Pattern.DisplayName
    }
    
    property get modifiername () : entity.Modifier {
      return getIteratedValue(3) as entity.Modifier
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PolicyLineSummaryPanelSet.PersonalAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends PanelIteratorEntry2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'valueRange' attribute on ModifierCell (id=VehicleModifierCell_Cell) at ModifierWidget.xml: line 11, column 79
    function valueRange_49 () : java.lang.Object {
      return gw.pcf.ModifierWidgetHelper.modifierTypeKeyValues(modifier)
    }
    
    // 'value' attribute on ModifierCell (id=VehicleModifierCell_Cell) at ModifierWidget.xml: line 3, column 48
    function valueRoot_39 () : java.lang.Object {
      return modifier
    }
    
    // 'value' attribute on ModifierCell (id=VehicleModifierCell_Cell) at ModifierWidget.xml: line 3, column 48
    function value_38 () : java.lang.Boolean {
      return modifier.BooleanModifier
    }
    
    // 'value' attribute on ModifierCell (id=VehicleModifierCell_Cell) at ModifierWidget.xml: line 5, column 45
    function value_41 () : java.util.Date {
      return modifier.DateModifier
    }
    
    // 'value' attribute on ModifierCell (id=VehicleModifierCell_Cell) at ModifierWidget.xml: line 7, column 45
    function value_44 () : java.math.BigDecimal {
      return modifier.RateWithinLimits
    }
    
    // 'value' attribute on ModifierCell (id=VehicleModifierCell_Cell) at ModifierWidget.xml: line 11, column 79
    function value_47 () : java.lang.String {
      return modifier.TypeKeyModifier
    }
    
    // 'value' attribute on ModifierCell (id=VehicleModifierCell_Cell) at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 177, column 51
    function value_52 () : entity.Modifier {
      return modifier
    }
    
    // 'valueRange' attribute on ModifierCell (id=VehicleModifierCell_Cell) at ModifierWidget.xml: line 11, column 79
    function verifyValueRangeIsAllowedType_50 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ModifierCell (id=VehicleModifierCell_Cell) at ModifierWidget.xml: line 11, column 79
    function verifyValueRangeIsAllowedType_50 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ModifierCell (id=VehicleModifierCell_Cell) at ModifierWidget.xml: line 11, column 79
    function verifyValueRange_51 () : void {
      var __valueRangeArg = gw.pcf.ModifierWidgetHelper.modifierTypeKeyValues(modifier)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_50(__valueRangeArg)
    }
    
    // 'visible' attribute on ModifierCell (id=VehicleModifierCell_Cell) at ModifierWidget.xml: line 3, column 48
    function visible_37 () : java.lang.Boolean {
      return modifier.DataType == TC_BOOLEAN
    }
    
    // 'visible' attribute on ModifierCell (id=VehicleModifierCell_Cell) at ModifierWidget.xml: line 5, column 45
    function visible_40 () : java.lang.Boolean {
      return modifier.DataType == TC_DATE
    }
    
    // 'visible' attribute on ModifierCell (id=VehicleModifierCell_Cell) at ModifierWidget.xml: line 7, column 45
    function visible_43 () : java.lang.Boolean {
      return modifier.DataType == TC_RATE
    }
    
    // 'visible' attribute on ModifierCell (id=VehicleModifierCell_Cell) at ModifierWidget.xml: line 11, column 79
    function visible_46 () : java.lang.Boolean {
      return modifier.DataType == TC_TYPEKEY
    }
    
    property get modifier () : entity.Modifier {
      return getIteratedValue(3) as entity.Modifier
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PolicyLineSummaryPanelSet.PersonalAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends PolicyLineSummaryPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Driver_Cell) at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 219, column 59
    function valueRoot_62 () : java.lang.Object {
      return excludedDriver
    }
    
    // 'value' attribute on TextCell (id=Driver_Cell) at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 219, column 59
    function value_61 () : java.lang.String {
      return excludedDriver.DisplayName
    }
    
    property get excludedDriver () : entity.PolicyDriver {
      return getIteratedValue(1) as entity.PolicyDriver
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PolicyLineSummaryPanelSet.PersonalAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PanelIteratorEntry2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Driver_Cell) at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 137, column 74
    function valueRoot_26 () : java.lang.Object {
      return driver.PolicyDriver
    }
    
    // 'value' attribute on TextCell (id=Percentage_Cell) at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 144, column 47
    function valueRoot_29 () : java.lang.Object {
      return driver
    }
    
    // 'value' attribute on TextCell (id=Driver_Cell) at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 137, column 74
    function value_25 () : java.lang.String {
      return driver.PolicyDriver.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Percentage_Cell) at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 144, column 47
    function value_28 () : java.lang.Integer {
      return driver.PercentageDriven
    }
    
    property get driver () : entity.VehicleDriver {
      return getIteratedValue(3) as entity.VehicleDriver
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PolicyLineSummaryPanelSet.PersonalAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntry2ExpressionsImpl extends PanelIteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 183, column 86
    function def_onEnter_55 (def :  pcf.CoverageSummaryLV) : void {
      def.onEnter(vehicle.Coverages.toList(), vehicle)
    }
    
    // 'def' attribute on PanelRef at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 183, column 86
    function def_refreshVariables_56 (def :  pcf.CoverageSummaryLV) : void {
      def.refreshVariables(vehicle.Coverages.toList(), vehicle)
    }
    
    // 'label' attribute on Verbatim (id=DriverName) at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 107, column 135
    function label_19 () : java.lang.String {
      return DisplayKey.get("Web.Policy.PA.PrimaryDriverWithName", vehicle.PrimaryDriver.DisplayName)
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 163, column 48
    function sortBy_32 (modifiername :  entity.Modifier) : java.lang.Object {
      return modifiername.Pattern.Priority
    }
    
    // 'value' attribute on TextCell (id=Driver_Cell) at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 137, column 74
    function sortValue_21 (driver :  entity.VehicleDriver) : java.lang.Object {
      return driver.PolicyDriver.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Percentage_Cell) at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 144, column 47
    function sortValue_22 (driver :  entity.VehicleDriver) : java.lang.Object {
      return driver.PercentageDriven
    }
    
    // '$$sumValue' attribute on RowIterator at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 144, column 47
    function sumValueRoot_24 (driver :  entity.VehicleDriver) : java.lang.Object {
      return driver
    }
    
    // 'footerSumValue' attribute on RowIterator at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 144, column 47
    function sumValue_23 (driver :  entity.VehicleDriver) : java.lang.Object {
      return driver.PercentageDriven
    }
    
    // 'title' attribute on TitleBar at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 58, column 118
    function title_7 () : java.lang.String {
      return DisplayKey.get("Web.Policy.BA.Review.VehicleNumber", vehicle.VehicleNumber)
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 92, column 54
    function valueRoot_11 () : java.lang.Object {
      return vehicle
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 92, column 54
    function value_10 () : java.lang.String {
      return vehicle?.Make
    }
    
    // 'value' attribute on TextCell (id=Model_Cell) at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 96, column 55
    function value_13 () : java.lang.String {
      return vehicle?.Model
    }
    
    // 'value' attribute on TextCell (id=Vin_Cell) at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 100, column 53
    function value_16 () : java.lang.String {
      return vehicle?.Vin
    }
    
    // 'value' attribute on RowIterator at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 129, column 64
    function value_31 () : entity.VehicleDriver[] {
      return vehicle.Drivers
    }
    
    // 'value' attribute on CellIterator (id=ModNameIterator) at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 160, column 61
    function value_36 () : entity.Modifier[] {
      return vehicle.Modifiers
    }
    
    // 'value' attribute on TextCell (id=Year_Cell) at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 88, column 66
    function value_8 () : java.lang.String {
      return vehicle?.Year?.toString()
    }
    
    // 'visible' attribute on PanelRef at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 111, column 99
    function visible_20 () : java.lang.Boolean {
      return vehicle.PrimaryDriver.PolicyDriver.ApplicableGoodDriverDiscount
    }
    
    property get vehicle () : entity.PersonalVehicle {
      return getIteratedValue(2) as entity.PersonalVehicle
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PolicyLineSummaryPanelSet.PersonalAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends PolicyLineSummaryPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 53, column 34
    function sortBy_6 (vehicle :  entity.PersonalVehicle) : java.lang.Object {
      return vehicle.VehicleNumber
    }
    
    // 'subtitle' attribute on TitleBar at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 44, column 105
    function subtitle_4 () : java.lang.String {
      return location.CompactName
    }
    
    // 'title' attribute on TitleBar at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 44, column 105
    function title_5 () : java.lang.String {
      return DisplayKey.get("Web.Policy.PA.GarageNumber", location.LocationNum)
    }
    
    // 'value' attribute on PanelIterator at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 50, column 54
    function value_57 () : entity.PersonalVehicle[] {
      return (line as PersonalAutoLine).Vehicles.where(\avehicle -> avehicle.GarageLocation == location)
    }
    
    property get location () : entity.PolicyLocation {
      return getIteratedValue(1) as entity.PolicyLocation
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PolicyLineSummaryPanelSet.PersonalAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyLineSummaryPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=LineLV) at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 25, column 28
    function def_onEnter_1 (def :  pcf.CoverageSummaryLV) : void {
      def.onEnter((line as PersonalAutoLine).PALineCoverages.toList(), (line as PersonalAutoLine))
    }
    
    // 'def' attribute on PanelRef (id=ExclusionSummaryLV) at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 227, column 55
    function def_onEnter_67 (def :  pcf.CoverageSummaryLV) : void {
      def.onEnter(line.AllExclusions.toList(), null)
    }
    
    // 'def' attribute on PanelRef (id=ConditionSummaryLV) at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 234, column 55
    function def_onEnter_70 (def :  pcf.CoverageSummaryLV) : void {
      def.onEnter(line.AllConditions.toList(), null)
    }
    
    // 'def' attribute on PanelRef (id=LineLV) at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 25, column 28
    function def_refreshVariables_2 (def :  pcf.CoverageSummaryLV) : void {
      def.refreshVariables((line as PersonalAutoLine).PALineCoverages.toList(), (line as PersonalAutoLine))
    }
    
    // 'def' attribute on PanelRef (id=ExclusionSummaryLV) at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 227, column 55
    function def_refreshVariables_68 (def :  pcf.CoverageSummaryLV) : void {
      def.refreshVariables(line.AllExclusions.toList(), null)
    }
    
    // 'def' attribute on PanelRef (id=ConditionSummaryLV) at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 234, column 55
    function def_refreshVariables_71 (def :  pcf.CoverageSummaryLV) : void {
      def.refreshVariables(line.AllConditions.toList(), null)
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 40, column 32
    function sortBy_3 (location :  entity.PolicyLocation) : java.lang.Object {
      return location.LocationNum
    }
    
    // 'value' attribute on TextCell (id=Driver_Cell) at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 219, column 59
    function sortValue_60 (excludedDriver :  entity.PolicyDriver) : java.lang.Object {
      return excludedDriver.DisplayName
    }
    
    // 'title' attribute on TitleBar at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 16, column 43
    function title_0 () : java.lang.String {
      return line.Pattern.DisplayName
    }
    
    // 'value' attribute on PanelIterator at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 37, column 51
    function value_58 () : entity.PolicyLocation[] {
      return (line as PersonalAutoLine).GarageLocations
    }
    
    // 'value' attribute on RowIterator at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 212, column 53
    function value_64 () : entity.PolicyDriver[] {
      return (line as PersonalAutoLine).PolicyDrivers.where(\ dr -> dr.Excluded)
    }
    
    // 'visible' attribute on PanelRef at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 29, column 76
    function visible_59 () : java.lang.Boolean {
      return (line as PersonalAutoLine).GarageLocations.HasElements
    }
    
    // 'visible' attribute on PanelRef at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 200, column 108
    function visible_65 () : java.lang.Boolean {
      return (line as PersonalAutoLine).PolicyDrivers.where(\ dr -> dr.Excluded).HasElements
    }
    
    // 'visible' attribute on PanelRef (id=ExclusionSummaryLV) at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 227, column 55
    function visible_66 () : java.lang.Boolean {
      return !(line.AllExclusions.IsEmpty)
    }
    
    // 'visible' attribute on PanelRef (id=ConditionSummaryLV) at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 234, column 55
    function visible_69 () : java.lang.Boolean {
      return !(line.AllConditions.IsEmpty)
    }
    
    // 'visible' attribute on PanelRef at PolicyLineSummaryPanelSet.PersonalAutoLine.pcf: line 195, column 176
    function visible_72 () : java.lang.Boolean {
      return ((line as PersonalAutoLine).PolicyDrivers.where(\ dr -> dr.Excluded).HasElements) or (!(line.AllExclusions.IsEmpty)) or (!(line.AllConditions.IsEmpty))
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