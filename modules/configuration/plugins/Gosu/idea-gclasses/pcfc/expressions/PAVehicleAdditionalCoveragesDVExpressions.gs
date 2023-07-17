package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/pa/policy/PAVehicleAdditionalCoveragesDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PAVehicleAdditionalCoveragesDVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PAVehicleAdditionalCoveragesDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class InputSetExpressionsImpl extends IteratorEntry2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at PAVehicleAdditionalCoveragesDV.pcf: line 44, column 63
    function initialValue_5 () : gw.api.productmodel.CoveragePattern[] {
      return paLine.Pattern.getCoverageCategoryByPublicId(category).coveragePatternsForEntity(PersonalVehicle).whereSelectedOrAvailable(vehicle, openForEdit)
    }
    
    // 'value' attribute on InputIterator (id=VehicleCoveragesIterator) at PAVehicleAdditionalCoveragesDV.pcf: line 50, column 67
    function value_37 () : gw.api.productmodel.CoveragePattern[] {
      return vehicleCoveragePatterns
    }
    
    property get vehicleCoveragePatterns () : gw.api.productmodel.CoveragePattern[] {
      return getVariableValue("vehicleCoveragePatterns", 3) as gw.api.productmodel.CoveragePattern[]
    }
    
    property set vehicleCoveragePatterns ($arg :  gw.api.productmodel.CoveragePattern[]) {
      setVariableValue("vehicleCoveragePatterns", 3, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PAVehicleAdditionalCoveragesDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get category () : java.lang.String {
      return getIteratedValue(2) as java.lang.String
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PAVehicleAdditionalCoveragesDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends InputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 4)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at PAVehicleAdditionalCoveragesDV.pcf: line 53, column 59
    function def_onEnter_10 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.onEnter(vehicleCoveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PAVehicleAdditionalCoveragesDV.pcf: line 53, column 59
    function def_onEnter_12 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.onEnter(vehicleCoveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PAVehicleAdditionalCoveragesDV.pcf: line 53, column 59
    function def_onEnter_14 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.onEnter(vehicleCoveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PAVehicleAdditionalCoveragesDV.pcf: line 53, column 59
    function def_onEnter_16 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.onEnter(vehicleCoveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PAVehicleAdditionalCoveragesDV.pcf: line 53, column 59
    function def_onEnter_18 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.onEnter(vehicleCoveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PAVehicleAdditionalCoveragesDV.pcf: line 53, column 59
    function def_onEnter_20 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.onEnter(vehicleCoveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PAVehicleAdditionalCoveragesDV.pcf: line 53, column 59
    function def_onEnter_22 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.onEnter(vehicleCoveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PAVehicleAdditionalCoveragesDV.pcf: line 53, column 59
    function def_onEnter_24 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.onEnter(vehicleCoveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PAVehicleAdditionalCoveragesDV.pcf: line 53, column 59
    function def_onEnter_26 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.onEnter(vehicleCoveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PAVehicleAdditionalCoveragesDV.pcf: line 53, column 59
    function def_onEnter_28 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.onEnter(vehicleCoveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PAVehicleAdditionalCoveragesDV.pcf: line 53, column 59
    function def_onEnter_30 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.onEnter(vehicleCoveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PAVehicleAdditionalCoveragesDV.pcf: line 53, column 59
    function def_onEnter_32 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.onEnter(vehicleCoveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PAVehicleAdditionalCoveragesDV.pcf: line 53, column 59
    function def_onEnter_34 (def :  pcf.CoverageInputSet_default) : void {
      def.onEnter(vehicleCoveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PAVehicleAdditionalCoveragesDV.pcf: line 53, column 59
    function def_onEnter_6 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.onEnter(vehicleCoveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PAVehicleAdditionalCoveragesDV.pcf: line 53, column 59
    function def_onEnter_8 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.onEnter(vehicleCoveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PAVehicleAdditionalCoveragesDV.pcf: line 53, column 59
    function def_refreshVariables_11 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.refreshVariables(vehicleCoveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PAVehicleAdditionalCoveragesDV.pcf: line 53, column 59
    function def_refreshVariables_13 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.refreshVariables(vehicleCoveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PAVehicleAdditionalCoveragesDV.pcf: line 53, column 59
    function def_refreshVariables_15 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.refreshVariables(vehicleCoveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PAVehicleAdditionalCoveragesDV.pcf: line 53, column 59
    function def_refreshVariables_17 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.refreshVariables(vehicleCoveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PAVehicleAdditionalCoveragesDV.pcf: line 53, column 59
    function def_refreshVariables_19 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.refreshVariables(vehicleCoveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PAVehicleAdditionalCoveragesDV.pcf: line 53, column 59
    function def_refreshVariables_21 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.refreshVariables(vehicleCoveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PAVehicleAdditionalCoveragesDV.pcf: line 53, column 59
    function def_refreshVariables_23 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.refreshVariables(vehicleCoveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PAVehicleAdditionalCoveragesDV.pcf: line 53, column 59
    function def_refreshVariables_25 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.refreshVariables(vehicleCoveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PAVehicleAdditionalCoveragesDV.pcf: line 53, column 59
    function def_refreshVariables_27 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.refreshVariables(vehicleCoveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PAVehicleAdditionalCoveragesDV.pcf: line 53, column 59
    function def_refreshVariables_29 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.refreshVariables(vehicleCoveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PAVehicleAdditionalCoveragesDV.pcf: line 53, column 59
    function def_refreshVariables_31 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.refreshVariables(vehicleCoveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PAVehicleAdditionalCoveragesDV.pcf: line 53, column 59
    function def_refreshVariables_33 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.refreshVariables(vehicleCoveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PAVehicleAdditionalCoveragesDV.pcf: line 53, column 59
    function def_refreshVariables_35 (def :  pcf.CoverageInputSet_default) : void {
      def.refreshVariables(vehicleCoveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PAVehicleAdditionalCoveragesDV.pcf: line 53, column 59
    function def_refreshVariables_7 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.refreshVariables(vehicleCoveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PAVehicleAdditionalCoveragesDV.pcf: line 53, column 59
    function def_refreshVariables_9 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.refreshVariables(vehicleCoveragePattern, vehicle, openForEdit, null)
    }
    
    // 'mode' attribute on InputSetRef at PAVehicleAdditionalCoveragesDV.pcf: line 53, column 59
    function mode_36 () : java.lang.Object {
      return vehicleCoveragePattern.PublicID
    }
    
    property get vehicleCoveragePattern () : gw.api.productmodel.CoveragePattern {
      return getIteratedValue(4) as gw.api.productmodel.CoveragePattern
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PAVehicleAdditionalCoveragesDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PAVehicleAdditionalCoveragesDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on HiddenInput (id=VehicleDisplayName_Input) at PAVehicleAdditionalCoveragesDV.pcf: line 31, column 43
    function valueRoot_2 () : java.lang.Object {
      return vehicle
    }
    
    // 'value' attribute on HiddenInput (id=VehicleDisplayName_Input) at PAVehicleAdditionalCoveragesDV.pcf: line 31, column 43
    function value_1 () : java.lang.String {
      return vehicle.DisplayName
    }
    
    // 'value' attribute on InputIterator (id=categories) at PAVehicleAdditionalCoveragesDV.pcf: line 38, column 44
    function value_38 () : java.lang.String[] {
      return includedCoverageCategories
    }
    
    property get vehicle () : entity.PersonalVehicle {
      return getIteratedValue(1) as entity.PersonalVehicle
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PAVehicleAdditionalCoveragesDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PAVehicleAdditionalCoveragesDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at PAVehicleAdditionalCoveragesDV.pcf: line 19, column 40
    function initialValue_0 () : entity.PersonalVehicle[] {
      return paLine == null ? null : paLine.Vehicles
    }
    
    // 'value' attribute on InputIterator (id=VehiclesIterator) at PAVehicleAdditionalCoveragesDV.pcf: line 27, column 48
    function value_39 () : entity.PersonalVehicle[] {
      return vehicles
    }
    
    // 'visible' attribute on InputSet at PAVehicleAdditionalCoveragesDV.pcf: line 22, column 41
    function visible_40 () : java.lang.Boolean {
      return vehicles.Count > 0
    }
    
    property get includedCoverageCategories () : String[] {
      return getRequireValue("includedCoverageCategories", 0) as String[]
    }
    
    property set includedCoverageCategories ($arg :  String[]) {
      setRequireValue("includedCoverageCategories", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get paLine () : PersonalAutoLine {
      return getRequireValue("paLine", 0) as PersonalAutoLine
    }
    
    property set paLine ($arg :  PersonalAutoLine) {
      setRequireValue("paLine", 0, $arg)
    }
    
    property get vehicles () : entity.PersonalVehicle[] {
      return getVariableValue("vehicles", 0) as entity.PersonalVehicle[]
    }
    
    property set vehicles ($arg :  entity.PersonalVehicle[]) {
      setVariableValue("vehicles", 0, $arg)
    }
    
    
  }
  
  
}