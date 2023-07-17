package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/pa/policy/PolicyLineDV.PersonalAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyLineDV_PersonalAutoLineExpressions {
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PolicyLineDV.PersonalAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends PolicyLineDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on Label at PolicyLineDV.PersonalAutoLine.pcf: line 50, column 40
    function label_37 () : java.lang.String {
      return vehicle.DisplayName
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyLineDV.PersonalAutoLine.pcf: line 58, column 28
    function sortBy_38 (coverage :  entity.PersonalVehicleCov) : java.lang.Object {
      return coverage.Pattern.CoverageCategory.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyLineDV.PersonalAutoLine.pcf: line 61, column 28
    function sortBy_39 (coverage :  entity.PersonalVehicleCov) : java.lang.Object {
      return coverage.Pattern.CoverageCategory.PublicID
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyLineDV.PersonalAutoLine.pcf: line 64, column 28
    function sortBy_40 (coverage :  entity.PersonalVehicleCov) : java.lang.Object {
      return coverage.Pattern.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyLineDV.PersonalAutoLine.pcf: line 67, column 28
    function sortBy_41 (coverage :  entity.PersonalVehicleCov) : java.lang.Object {
      return coverage.Pattern.Name
    }
    
    // 'value' attribute on InputIterator (id=CoveragesIterator) at PolicyLineDV.PersonalAutoLine.pcf: line 55, column 51
    function value_73 () : entity.PersonalVehicleCov[] {
      return vehicle.Coverages
    }
    
    property get vehicle () : entity.PersonalVehicle {
      return getIteratedValue(1) as entity.PersonalVehicle
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PolicyLineDV.PersonalAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends IteratorEntry2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 70, column 47
    function def_onEnter_42 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.onEnter(coverage.Pattern, vehicle, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 70, column 47
    function def_onEnter_44 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.onEnter(coverage.Pattern, vehicle, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 70, column 47
    function def_onEnter_46 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.onEnter(coverage.Pattern, vehicle, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 70, column 47
    function def_onEnter_48 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.onEnter(coverage.Pattern, vehicle, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 70, column 47
    function def_onEnter_50 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.onEnter(coverage.Pattern, vehicle, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 70, column 47
    function def_onEnter_52 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.onEnter(coverage.Pattern, vehicle, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 70, column 47
    function def_onEnter_54 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.onEnter(coverage.Pattern, vehicle, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 70, column 47
    function def_onEnter_56 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.onEnter(coverage.Pattern, vehicle, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 70, column 47
    function def_onEnter_58 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.onEnter(coverage.Pattern, vehicle, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 70, column 47
    function def_onEnter_60 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.onEnter(coverage.Pattern, vehicle, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 70, column 47
    function def_onEnter_62 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.onEnter(coverage.Pattern, vehicle, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 70, column 47
    function def_onEnter_64 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.onEnter(coverage.Pattern, vehicle, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 70, column 47
    function def_onEnter_66 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.onEnter(coverage.Pattern, vehicle, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 70, column 47
    function def_onEnter_68 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.onEnter(coverage.Pattern, vehicle, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 70, column 47
    function def_onEnter_70 (def :  pcf.CoverageInputSet_default) : void {
      def.onEnter(coverage.Pattern, vehicle, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 70, column 47
    function def_refreshVariables_43 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.refreshVariables(coverage.Pattern, vehicle, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 70, column 47
    function def_refreshVariables_45 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.refreshVariables(coverage.Pattern, vehicle, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 70, column 47
    function def_refreshVariables_47 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.refreshVariables(coverage.Pattern, vehicle, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 70, column 47
    function def_refreshVariables_49 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.refreshVariables(coverage.Pattern, vehicle, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 70, column 47
    function def_refreshVariables_51 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.refreshVariables(coverage.Pattern, vehicle, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 70, column 47
    function def_refreshVariables_53 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.refreshVariables(coverage.Pattern, vehicle, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 70, column 47
    function def_refreshVariables_55 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.refreshVariables(coverage.Pattern, vehicle, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 70, column 47
    function def_refreshVariables_57 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.refreshVariables(coverage.Pattern, vehicle, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 70, column 47
    function def_refreshVariables_59 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.refreshVariables(coverage.Pattern, vehicle, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 70, column 47
    function def_refreshVariables_61 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.refreshVariables(coverage.Pattern, vehicle, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 70, column 47
    function def_refreshVariables_63 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.refreshVariables(coverage.Pattern, vehicle, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 70, column 47
    function def_refreshVariables_65 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.refreshVariables(coverage.Pattern, vehicle, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 70, column 47
    function def_refreshVariables_67 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.refreshVariables(coverage.Pattern, vehicle, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 70, column 47
    function def_refreshVariables_69 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.refreshVariables(coverage.Pattern, vehicle, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 70, column 47
    function def_refreshVariables_71 (def :  pcf.CoverageInputSet_default) : void {
      def.refreshVariables(coverage.Pattern, vehicle, false, jobWizardHelper)
    }
    
    // 'mode' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 70, column 47
    function mode_72 () : java.lang.Object {
      return coverage.Pattern.PublicID
    }
    
    property get coverage () : entity.PersonalVehicleCov {
      return getIteratedValue(2) as entity.PersonalVehicleCov
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PolicyLineDV.PersonalAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PolicyLineDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 40, column 45
    function def_onEnter_11 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.onEnter(coverage.Pattern, paLine, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 40, column 45
    function def_onEnter_13 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.onEnter(coverage.Pattern, paLine, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 40, column 45
    function def_onEnter_15 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.onEnter(coverage.Pattern, paLine, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 40, column 45
    function def_onEnter_17 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.onEnter(coverage.Pattern, paLine, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 40, column 45
    function def_onEnter_19 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.onEnter(coverage.Pattern, paLine, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 40, column 45
    function def_onEnter_21 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.onEnter(coverage.Pattern, paLine, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 40, column 45
    function def_onEnter_23 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.onEnter(coverage.Pattern, paLine, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 40, column 45
    function def_onEnter_25 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.onEnter(coverage.Pattern, paLine, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 40, column 45
    function def_onEnter_27 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.onEnter(coverage.Pattern, paLine, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 40, column 45
    function def_onEnter_29 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.onEnter(coverage.Pattern, paLine, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 40, column 45
    function def_onEnter_31 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.onEnter(coverage.Pattern, paLine, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 40, column 45
    function def_onEnter_33 (def :  pcf.CoverageInputSet_default) : void {
      def.onEnter(coverage.Pattern, paLine, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 40, column 45
    function def_onEnter_5 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.onEnter(coverage.Pattern, paLine, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 40, column 45
    function def_onEnter_7 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.onEnter(coverage.Pattern, paLine, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 40, column 45
    function def_onEnter_9 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.onEnter(coverage.Pattern, paLine, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 40, column 45
    function def_refreshVariables_10 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.refreshVariables(coverage.Pattern, paLine, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 40, column 45
    function def_refreshVariables_12 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.refreshVariables(coverage.Pattern, paLine, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 40, column 45
    function def_refreshVariables_14 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.refreshVariables(coverage.Pattern, paLine, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 40, column 45
    function def_refreshVariables_16 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.refreshVariables(coverage.Pattern, paLine, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 40, column 45
    function def_refreshVariables_18 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.refreshVariables(coverage.Pattern, paLine, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 40, column 45
    function def_refreshVariables_20 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.refreshVariables(coverage.Pattern, paLine, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 40, column 45
    function def_refreshVariables_22 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.refreshVariables(coverage.Pattern, paLine, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 40, column 45
    function def_refreshVariables_24 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.refreshVariables(coverage.Pattern, paLine, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 40, column 45
    function def_refreshVariables_26 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.refreshVariables(coverage.Pattern, paLine, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 40, column 45
    function def_refreshVariables_28 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.refreshVariables(coverage.Pattern, paLine, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 40, column 45
    function def_refreshVariables_30 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.refreshVariables(coverage.Pattern, paLine, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 40, column 45
    function def_refreshVariables_32 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.refreshVariables(coverage.Pattern, paLine, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 40, column 45
    function def_refreshVariables_34 (def :  pcf.CoverageInputSet_default) : void {
      def.refreshVariables(coverage.Pattern, paLine, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 40, column 45
    function def_refreshVariables_6 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.refreshVariables(coverage.Pattern, paLine, false, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 40, column 45
    function def_refreshVariables_8 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.refreshVariables(coverage.Pattern, paLine, false, jobWizardHelper)
    }
    
    // 'mode' attribute on InputSetRef at PolicyLineDV.PersonalAutoLine.pcf: line 40, column 45
    function mode_35 () : java.lang.Object {
      return coverage.Pattern.PublicID
    }
    
    property get coverage () : entity.PersonalAutoCov {
      return getIteratedValue(1) as entity.PersonalAutoCov
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PolicyLineDV.PersonalAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyLineDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at PolicyLineDV.PersonalAutoLine.pcf: line 14, column 32
    function initialValue_0 () : PersonalAutoLine {
      return policyLine as PersonalAutoLine
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyLineDV.PersonalAutoLine.pcf: line 28, column 26
    function sortBy_1 (coverage :  entity.PersonalAutoCov) : java.lang.Object {
      return coverage.Pattern.CoverageCategory.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyLineDV.PersonalAutoLine.pcf: line 31, column 26
    function sortBy_2 (coverage :  entity.PersonalAutoCov) : java.lang.Object {
      return coverage.Pattern.CoverageCategory.PublicID
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyLineDV.PersonalAutoLine.pcf: line 34, column 26
    function sortBy_3 (coverage :  entity.PersonalAutoCov) : java.lang.Object {
      return coverage.Pattern.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyLineDV.PersonalAutoLine.pcf: line 37, column 26
    function sortBy_4 (coverage :  entity.PersonalAutoCov) : java.lang.Object {
      return coverage.Pattern.Name
    }
    
    // 'value' attribute on InputIterator at PolicyLineDV.PersonalAutoLine.pcf: line 25, column 46
    function value_36 () : entity.PersonalAutoCov[] {
      return paLine.PALineCoverages
    }
    
    // 'value' attribute on InputIterator (id=EUs) at PolicyLineDV.PersonalAutoLine.pcf: line 48, column 46
    function value_74 () : entity.PersonalVehicle[] {
      return paLine.Vehicles
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get paLine () : PersonalAutoLine {
      return getVariableValue("paLine", 0) as PersonalAutoLine
    }
    
    property set paLine ($arg :  PersonalAutoLine) {
      setVariableValue("paLine", 0, $arg)
    }
    
    property get policyLine () : PolicyLine {
      return getRequireValue("policyLine", 0) as PolicyLine
    }
    
    property set policyLine ($arg :  PolicyLine) {
      setRequireValue("policyLine", 0, $arg)
    }
    
    
  }
  
  
}