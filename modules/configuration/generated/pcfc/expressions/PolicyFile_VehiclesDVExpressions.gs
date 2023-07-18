package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/ba/policyfile/PolicyFile_VehiclesDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_VehiclesDVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/ba/policyfile/PolicyFile_VehiclesDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DetailViewPanelExpressionsImpl extends PolicyFile_VehiclesDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at PolicyFile_VehiclesDV.pcf: line 109, column 61
    function initialValue_41 () : gw.api.productmodel.CoveragePattern[] {
      return selectedVehicle == null ? null : physDamCovCategory.coveragePatternsForEntity(BusinessVehicle).whereSelectedOrAvailable(selectedVehicle, CurrentLocation.InEditMode)
    }
    
    // 'initialValue' attribute on Variable at PolicyFile_VehiclesDV.pcf: line 114, column 61
    function initialValue_42 () : gw.api.productmodel.CoveragePattern[] {
      return selectedVehicle == null ? null : baPIPCoverageCat.coveragePatternsForEntity(BusinessVehicle).whereSelectedOrAvailable(selectedVehicle, CurrentLocation.InEditMode)
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyFile_VehiclesDV.pcf: line 124, column 34
    function sortBy_43 (coveragePattern :  gw.api.productmodel.CoveragePattern) : java.lang.Object {
      return coveragePattern.Priority
    }
    
    // 'value' attribute on InputIterator (id=PIPCovIterator) at PolicyFile_VehiclesDV.pcf: line 136, column 67
    function value_108 () : gw.api.productmodel.CoveragePattern[] {
      return baPIPCoverageCatCoveragePatterns
    }
    
    // 'value' attribute on InputIterator (id=PhysDamCovIterator) at PolicyFile_VehiclesDV.pcf: line 121, column 67
    function value_75 () : gw.api.productmodel.CoveragePattern[] {
      return physDamCovCategoryCoveragePatterns
    }
    
    property get baPIPCoverageCatCoveragePatterns () : gw.api.productmodel.CoveragePattern[] {
      return getVariableValue("baPIPCoverageCatCoveragePatterns", 1) as gw.api.productmodel.CoveragePattern[]
    }
    
    property set baPIPCoverageCatCoveragePatterns ($arg :  gw.api.productmodel.CoveragePattern[]) {
      setVariableValue("baPIPCoverageCatCoveragePatterns", 1, $arg)
    }
    
    property get physDamCovCategoryCoveragePatterns () : gw.api.productmodel.CoveragePattern[] {
      return getVariableValue("physDamCovCategoryCoveragePatterns", 1) as gw.api.productmodel.CoveragePattern[]
    }
    
    property set physDamCovCategoryCoveragePatterns ($arg :  gw.api.productmodel.CoveragePattern[]) {
      setVariableValue("physDamCovCategoryCoveragePatterns", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policyfile/PolicyFile_VehiclesDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends DetailViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 127, column 52
    function def_onEnter_44 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.onEnter(coveragePattern, selectedVehicle, CurrentLocation.InEditMode, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 127, column 52
    function def_onEnter_46 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.onEnter(coveragePattern, selectedVehicle, CurrentLocation.InEditMode, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 127, column 52
    function def_onEnter_48 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.onEnter(coveragePattern, selectedVehicle, CurrentLocation.InEditMode, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 127, column 52
    function def_onEnter_50 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.onEnter(coveragePattern, selectedVehicle, CurrentLocation.InEditMode, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 127, column 52
    function def_onEnter_52 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.onEnter(coveragePattern, selectedVehicle, CurrentLocation.InEditMode, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 127, column 52
    function def_onEnter_54 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.onEnter(coveragePattern, selectedVehicle, CurrentLocation.InEditMode, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 127, column 52
    function def_onEnter_56 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.onEnter(coveragePattern, selectedVehicle, CurrentLocation.InEditMode, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 127, column 52
    function def_onEnter_58 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.onEnter(coveragePattern, selectedVehicle, CurrentLocation.InEditMode, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 127, column 52
    function def_onEnter_60 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.onEnter(coveragePattern, selectedVehicle, CurrentLocation.InEditMode, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 127, column 52
    function def_onEnter_62 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.onEnter(coveragePattern, selectedVehicle, CurrentLocation.InEditMode, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 127, column 52
    function def_onEnter_64 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.onEnter(coveragePattern, selectedVehicle, CurrentLocation.InEditMode, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 127, column 52
    function def_onEnter_66 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.onEnter(coveragePattern, selectedVehicle, CurrentLocation.InEditMode, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 127, column 52
    function def_onEnter_68 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.onEnter(coveragePattern, selectedVehicle, CurrentLocation.InEditMode, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 127, column 52
    function def_onEnter_70 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.onEnter(coveragePattern, selectedVehicle, CurrentLocation.InEditMode, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 127, column 52
    function def_onEnter_72 (def :  pcf.CoverageInputSet_default) : void {
      def.onEnter(coveragePattern, selectedVehicle, CurrentLocation.InEditMode, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 127, column 52
    function def_refreshVariables_45 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.refreshVariables(coveragePattern, selectedVehicle, CurrentLocation.InEditMode, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 127, column 52
    function def_refreshVariables_47 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.refreshVariables(coveragePattern, selectedVehicle, CurrentLocation.InEditMode, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 127, column 52
    function def_refreshVariables_49 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.refreshVariables(coveragePattern, selectedVehicle, CurrentLocation.InEditMode, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 127, column 52
    function def_refreshVariables_51 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.refreshVariables(coveragePattern, selectedVehicle, CurrentLocation.InEditMode, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 127, column 52
    function def_refreshVariables_53 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.refreshVariables(coveragePattern, selectedVehicle, CurrentLocation.InEditMode, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 127, column 52
    function def_refreshVariables_55 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.refreshVariables(coveragePattern, selectedVehicle, CurrentLocation.InEditMode, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 127, column 52
    function def_refreshVariables_57 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.refreshVariables(coveragePattern, selectedVehicle, CurrentLocation.InEditMode, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 127, column 52
    function def_refreshVariables_59 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.refreshVariables(coveragePattern, selectedVehicle, CurrentLocation.InEditMode, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 127, column 52
    function def_refreshVariables_61 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.refreshVariables(coveragePattern, selectedVehicle, CurrentLocation.InEditMode, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 127, column 52
    function def_refreshVariables_63 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.refreshVariables(coveragePattern, selectedVehicle, CurrentLocation.InEditMode, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 127, column 52
    function def_refreshVariables_65 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.refreshVariables(coveragePattern, selectedVehicle, CurrentLocation.InEditMode, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 127, column 52
    function def_refreshVariables_67 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.refreshVariables(coveragePattern, selectedVehicle, CurrentLocation.InEditMode, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 127, column 52
    function def_refreshVariables_69 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.refreshVariables(coveragePattern, selectedVehicle, CurrentLocation.InEditMode, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 127, column 52
    function def_refreshVariables_71 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.refreshVariables(coveragePattern, selectedVehicle, CurrentLocation.InEditMode, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 127, column 52
    function def_refreshVariables_73 (def :  pcf.CoverageInputSet_default) : void {
      def.refreshVariables(coveragePattern, selectedVehicle, CurrentLocation.InEditMode, null)
    }
    
    // 'mode' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 127, column 52
    function mode_74 () : java.lang.Object {
      return coveragePattern.PublicID
    }
    
    property get coveragePattern () : gw.api.productmodel.CoveragePattern {
      return getIteratedValue(2) as gw.api.productmodel.CoveragePattern
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policyfile/PolicyFile_VehiclesDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends DetailViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 142, column 52
    function def_onEnter_101 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.onEnter(coveragePattern, selectedVehicle, false, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 142, column 52
    function def_onEnter_103 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.onEnter(coveragePattern, selectedVehicle, false, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 142, column 52
    function def_onEnter_105 (def :  pcf.CoverageInputSet_default) : void {
      def.onEnter(coveragePattern, selectedVehicle, false, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 142, column 52
    function def_onEnter_77 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.onEnter(coveragePattern, selectedVehicle, false, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 142, column 52
    function def_onEnter_79 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.onEnter(coveragePattern, selectedVehicle, false, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 142, column 52
    function def_onEnter_81 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.onEnter(coveragePattern, selectedVehicle, false, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 142, column 52
    function def_onEnter_83 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.onEnter(coveragePattern, selectedVehicle, false, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 142, column 52
    function def_onEnter_85 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.onEnter(coveragePattern, selectedVehicle, false, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 142, column 52
    function def_onEnter_87 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.onEnter(coveragePattern, selectedVehicle, false, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 142, column 52
    function def_onEnter_89 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.onEnter(coveragePattern, selectedVehicle, false, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 142, column 52
    function def_onEnter_91 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.onEnter(coveragePattern, selectedVehicle, false, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 142, column 52
    function def_onEnter_93 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.onEnter(coveragePattern, selectedVehicle, false, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 142, column 52
    function def_onEnter_95 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.onEnter(coveragePattern, selectedVehicle, false, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 142, column 52
    function def_onEnter_97 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.onEnter(coveragePattern, selectedVehicle, false, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 142, column 52
    function def_onEnter_99 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.onEnter(coveragePattern, selectedVehicle, false, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 142, column 52
    function def_refreshVariables_100 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.refreshVariables(coveragePattern, selectedVehicle, false, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 142, column 52
    function def_refreshVariables_102 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.refreshVariables(coveragePattern, selectedVehicle, false, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 142, column 52
    function def_refreshVariables_104 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.refreshVariables(coveragePattern, selectedVehicle, false, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 142, column 52
    function def_refreshVariables_106 (def :  pcf.CoverageInputSet_default) : void {
      def.refreshVariables(coveragePattern, selectedVehicle, false, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 142, column 52
    function def_refreshVariables_78 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.refreshVariables(coveragePattern, selectedVehicle, false, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 142, column 52
    function def_refreshVariables_80 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.refreshVariables(coveragePattern, selectedVehicle, false, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 142, column 52
    function def_refreshVariables_82 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.refreshVariables(coveragePattern, selectedVehicle, false, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 142, column 52
    function def_refreshVariables_84 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.refreshVariables(coveragePattern, selectedVehicle, false, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 142, column 52
    function def_refreshVariables_86 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.refreshVariables(coveragePattern, selectedVehicle, false, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 142, column 52
    function def_refreshVariables_88 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.refreshVariables(coveragePattern, selectedVehicle, false, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 142, column 52
    function def_refreshVariables_90 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.refreshVariables(coveragePattern, selectedVehicle, false, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 142, column 52
    function def_refreshVariables_92 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.refreshVariables(coveragePattern, selectedVehicle, false, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 142, column 52
    function def_refreshVariables_94 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.refreshVariables(coveragePattern, selectedVehicle, false, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 142, column 52
    function def_refreshVariables_96 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.refreshVariables(coveragePattern, selectedVehicle, false, null)
    }
    
    // 'def' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 142, column 52
    function def_refreshVariables_98 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.refreshVariables(coveragePattern, selectedVehicle, false, null)
    }
    
    // 'mode' attribute on InputSetRef at PolicyFile_VehiclesDV.pcf: line 142, column 52
    function mode_107 () : java.lang.Object {
      return coveragePattern.PublicID
    }
    
    property get coveragePattern () : gw.api.productmodel.CoveragePattern {
      return getIteratedValue(2) as gw.api.productmodel.CoveragePattern
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policyfile/PolicyFile_VehiclesDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PolicyFile_VehiclesDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=VehicleNumber_Cell) at PolicyFile_VehiclesDV.pcf: line 40, column 44
    function valueRoot_11 () : java.lang.Object {
      return vehicle
    }
    
    // 'value' attribute on TextCell (id=VehicleNumber_Cell) at PolicyFile_VehiclesDV.pcf: line 40, column 44
    function value_10 () : java.lang.Integer {
      return vehicle.VehicleNumber
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at PolicyFile_VehiclesDV.pcf: line 46, column 46
    function value_13 () : typekey.VehicleType {
      return vehicle.VehicleType
    }
    
    // 'value' attribute on TextCell (id=Year_Cell) at PolicyFile_VehiclesDV.pcf: line 52, column 44
    function value_16 () : java.lang.Integer {
      return vehicle.Year
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at PolicyFile_VehiclesDV.pcf: line 57, column 35
    function value_19 () : java.lang.String {
      return vehicle.Make
    }
    
    // 'value' attribute on TextCell (id=Model_Cell) at PolicyFile_VehiclesDV.pcf: line 62, column 36
    function value_22 () : java.lang.String {
      return vehicle.Model
    }
    
    // 'value' attribute on TypeKeyCell (id=BodyType_Cell) at PolicyFile_VehiclesDV.pcf: line 68, column 43
    function value_25 () : typekey.BodyType {
      return vehicle.BodyType
    }
    
    // 'value' attribute on TextCell (id=Vin_Cell) at PolicyFile_VehiclesDV.pcf: line 73, column 34
    function value_28 () : java.lang.String {
      return vehicle.Vin
    }
    
    property get vehicle () : entity.BusinessVehicle {
      return getIteratedValue(1) as entity.BusinessVehicle
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policyfile/PolicyFile_VehiclesDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_VehiclesDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at PolicyFile_VehiclesDV.pcf: line 81, column 42
    function available_32 () : java.lang.Boolean {
      return selectedVehicle != null
    }
    
    // 'def' attribute on PanelRef at PolicyFile_VehiclesDV.pcf: line 153, column 29
    function def_onEnter_109 (def :  pcf.AdditionalCoveragesDV) : void {
      def.onEnter(selectedVehicle, new String[]{"BAPOwnedPhysDamGrp", "BAPIPCoverageCat"}, false, null)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at PolicyFile_VehiclesDV.pcf: line 81, column 42
    function def_onEnter_34 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.onEnter(selectedVehicle, false, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_VehiclesDV.pcf: line 90, column 33
    function def_onEnter_36 (def :  pcf.VehicleDV) : void {
      def.onEnter(selectedVehicle, policyPeriod, policyPeriod.BusinessAutoLine, false, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_VehiclesDV.pcf: line 94, column 74
    function def_onEnter_38 (def :  pcf.AdditionalInterestDetailsDV) : void {
      def.onEnter(selectedVehicle, false)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_VehiclesDV.pcf: line 153, column 29
    function def_refreshVariables_110 (def :  pcf.AdditionalCoveragesDV) : void {
      def.refreshVariables(selectedVehicle, new String[]{"BAPOwnedPhysDamGrp", "BAPIPCoverageCat"}, false, null)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at PolicyFile_VehiclesDV.pcf: line 81, column 42
    function def_refreshVariables_35 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.refreshVariables(selectedVehicle, false, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_VehiclesDV.pcf: line 90, column 33
    function def_refreshVariables_37 (def :  pcf.VehicleDV) : void {
      def.refreshVariables(selectedVehicle, policyPeriod, policyPeriod.BusinessAutoLine, false, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_VehiclesDV.pcf: line 94, column 74
    function def_refreshVariables_39 (def :  pcf.AdditionalInterestDetailsDV) : void {
      def.refreshVariables(selectedVehicle, false)
    }
    
    // 'initialValue' attribute on Variable at PolicyFile_VehiclesDV.pcf: line 15, column 45
    function initialValue_0 () : productmodel.BusinessAutoLine {
      return policyPeriod.BusinessAutoLine
    }
    
    // 'initialValue' attribute on Variable at PolicyFile_VehiclesDV.pcf: line 19, column 52
    function initialValue_1 () : gw.api.productmodel.CoverageCategory {
      return businessAutoLine.Pattern.getCoverageCategoryByPublicId("BAPOwnedPhysDamGrp")
    }
    
    // 'initialValue' attribute on Variable at PolicyFile_VehiclesDV.pcf: line 23, column 52
    function initialValue_2 () : gw.api.productmodel.CoverageCategory {
      return businessAutoLine.Pattern.getCoverageCategoryByPublicId("BAPIPCoverageCat")
    }
    
    // 'sortBy' attribute on TextCell (id=VehicleNumber_Cell) at PolicyFile_VehiclesDV.pcf: line 40, column 44
    function sortValue_3 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.VehicleNumber
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at PolicyFile_VehiclesDV.pcf: line 46, column 46
    function sortValue_4 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.VehicleType
    }
    
    // 'value' attribute on TextCell (id=Year_Cell) at PolicyFile_VehiclesDV.pcf: line 52, column 44
    function sortValue_5 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.Year
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at PolicyFile_VehiclesDV.pcf: line 57, column 35
    function sortValue_6 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.Make
    }
    
    // 'value' attribute on TextCell (id=Model_Cell) at PolicyFile_VehiclesDV.pcf: line 62, column 36
    function sortValue_7 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.Model
    }
    
    // 'value' attribute on TypeKeyCell (id=BodyType_Cell) at PolicyFile_VehiclesDV.pcf: line 68, column 43
    function sortValue_8 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.BodyType
    }
    
    // 'value' attribute on TextCell (id=Vin_Cell) at PolicyFile_VehiclesDV.pcf: line 73, column 34
    function sortValue_9 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.Vin
    }
    
    // 'title' attribute on TitleBar at PolicyFile_VehiclesDV.pcf: line 103, column 53
    function title_40 () : java.lang.String {
      return physDamCovCategory.DisplayName
    }
    
    // 'value' attribute on RowIterator at PolicyFile_VehiclesDV.pcf: line 31, column 46
    function value_31 () : entity.BusinessVehicle[] {
      return businessAutoLine.Vehicles
    }
    
    property get baPIPCoverageCat () : gw.api.productmodel.CoverageCategory {
      return getVariableValue("baPIPCoverageCat", 0) as gw.api.productmodel.CoverageCategory
    }
    
    property set baPIPCoverageCat ($arg :  gw.api.productmodel.CoverageCategory) {
      setVariableValue("baPIPCoverageCat", 0, $arg)
    }
    
    property get businessAutoLine () : productmodel.BusinessAutoLine {
      return getVariableValue("businessAutoLine", 0) as productmodel.BusinessAutoLine
    }
    
    property set businessAutoLine ($arg :  productmodel.BusinessAutoLine) {
      setVariableValue("businessAutoLine", 0, $arg)
    }
    
    property get physDamCovCategory () : gw.api.productmodel.CoverageCategory {
      return getVariableValue("physDamCovCategory", 0) as gw.api.productmodel.CoverageCategory
    }
    
    property set physDamCovCategory ($arg :  gw.api.productmodel.CoverageCategory) {
      setVariableValue("physDamCovCategory", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get selectedVehicle () : BusinessVehicle {
      return getCurrentSelection(0) as BusinessVehicle
    }
    
    property set selectedVehicle ($arg :  BusinessVehicle) {
      setCurrentSelection(0, $arg)
    }
    
    
  }
  
  
}