package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.api.util.StateJurisdictionMappingUtil
@javax.annotation.Generated("config/web/pcf/line/wc/policy/WorkersCompCoverageCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WorkersCompCoverageCVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WorkersCompCoverageCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends WorkersCompCoverageCVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=addJurisdiction) at WorkersCompCoverageCV.pcf: line 61, column 80
    function label_12 () : java.lang.Object {
      return locationState
    }
    
    // 'toCreateAndAdd' attribute on AddMenuItem (id=addJurisdiction) at WorkersCompCoverageCV.pcf: line 61, column 80
    function toCreateAndAdd_13 (CheckedValues :  Object[]) : java.lang.Object {
      return wcLine.addJurisdiction(locationState)
    }
    
    property get locationState () : typekey.Jurisdiction {
      return getIteratedValue(1) as typekey.Jurisdiction
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WorkersCompCoverageCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'checkBoxVisible' attribute on RowIterator at WorkersCompCoverageCV.pcf: line 95, column 51
    function checkBoxVisible_27 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'condition' attribute on ToolbarFlag at WorkersCompCoverageCV.pcf: line 101, column 35
    function condition_20 () : java.lang.Boolean {
      return covJuris.CanRemove
    }
    
    // 'outputConversion' attribute on TextCell (id=RiskID_Cell) at WorkersCompCoverageCV.pcf: line 115, column 32
    function outputConversion_24 (VALUE :  entity.OfficialID[]) : java.lang.String {
      return gw.web.line.wc.policy.WorkersCompCoverageCVUIHelper.outputConverterForOfficialIDs(VALUE)
    }
    
    // 'value' attribute on TextCell (id=StateName_Cell) at WorkersCompCoverageCV.pcf: line 107, column 53
    function valueRoot_22 () : java.lang.Object {
      return covJuris
    }
    
    // 'value' attribute on TextCell (id=StateName_Cell) at WorkersCompCoverageCV.pcf: line 107, column 53
    function value_21 () : typekey.Jurisdiction {
      return covJuris.State
    }
    
    // 'value' attribute on TextCell (id=RiskID_Cell) at WorkersCompCoverageCV.pcf: line 115, column 32
    function value_25 () : entity.OfficialID[] {
      return gw.web.line.wc.policy.WorkersCompCoverageCVUIHelper.getOfficalIDsForJurisdictionThatMatchPNIContactsOfficialIDs(wcLine, covJuris)
    }
    
    property get covJuris () : entity.WCJurisdiction {
      return getIteratedValue(2) as entity.WCJurisdiction
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WorkersCompCoverageCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends WCPolicyCoveragesDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 174, column 50
    function def_onEnter_40 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.onEnter(coveragePattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 174, column 50
    function def_onEnter_42 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.onEnter(coveragePattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 174, column 50
    function def_onEnter_44 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.onEnter(coveragePattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 174, column 50
    function def_onEnter_46 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.onEnter(coveragePattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 174, column 50
    function def_onEnter_48 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.onEnter(coveragePattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 174, column 50
    function def_onEnter_50 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.onEnter(coveragePattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 174, column 50
    function def_onEnter_52 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.onEnter(coveragePattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 174, column 50
    function def_onEnter_54 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.onEnter(coveragePattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 174, column 50
    function def_onEnter_56 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.onEnter(coveragePattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 174, column 50
    function def_onEnter_58 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.onEnter(coveragePattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 174, column 50
    function def_onEnter_60 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.onEnter(coveragePattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 174, column 50
    function def_onEnter_62 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.onEnter(coveragePattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 174, column 50
    function def_onEnter_64 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.onEnter(coveragePattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 174, column 50
    function def_onEnter_66 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.onEnter(coveragePattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 174, column 50
    function def_onEnter_68 (def :  pcf.CoverageInputSet_default) : void {
      def.onEnter(coveragePattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 174, column 50
    function def_refreshVariables_41 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.refreshVariables(coveragePattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 174, column 50
    function def_refreshVariables_43 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.refreshVariables(coveragePattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 174, column 50
    function def_refreshVariables_45 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.refreshVariables(coveragePattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 174, column 50
    function def_refreshVariables_47 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.refreshVariables(coveragePattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 174, column 50
    function def_refreshVariables_49 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.refreshVariables(coveragePattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 174, column 50
    function def_refreshVariables_51 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.refreshVariables(coveragePattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 174, column 50
    function def_refreshVariables_53 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.refreshVariables(coveragePattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 174, column 50
    function def_refreshVariables_55 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.refreshVariables(coveragePattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 174, column 50
    function def_refreshVariables_57 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.refreshVariables(coveragePattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 174, column 50
    function def_refreshVariables_59 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.refreshVariables(coveragePattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 174, column 50
    function def_refreshVariables_61 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.refreshVariables(coveragePattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 174, column 50
    function def_refreshVariables_63 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.refreshVariables(coveragePattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 174, column 50
    function def_refreshVariables_65 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.refreshVariables(coveragePattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 174, column 50
    function def_refreshVariables_67 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.refreshVariables(coveragePattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 174, column 50
    function def_refreshVariables_69 (def :  pcf.CoverageInputSet_default) : void {
      def.refreshVariables(coveragePattern, wcLine, true, null)
    }
    
    // 'mode' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 174, column 50
    function mode_70 () : java.lang.Object {
      return coveragePattern.PublicID
    }
    
    property get coveragePattern () : gw.api.productmodel.CoveragePattern {
      return getIteratedValue(2) as gw.api.productmodel.CoveragePattern
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WorkersCompCoverageCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry5ExpressionsImpl extends WCPolicyCoveragesDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 187, column 51
    function def_onEnter_101 (def :  pcf.CoverageInputSet_default) : void {
      def.onEnter(exclusionPattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 187, column 51
    function def_onEnter_73 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.onEnter(exclusionPattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 187, column 51
    function def_onEnter_75 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.onEnter(exclusionPattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 187, column 51
    function def_onEnter_77 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.onEnter(exclusionPattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 187, column 51
    function def_onEnter_79 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.onEnter(exclusionPattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 187, column 51
    function def_onEnter_81 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.onEnter(exclusionPattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 187, column 51
    function def_onEnter_83 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.onEnter(exclusionPattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 187, column 51
    function def_onEnter_85 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.onEnter(exclusionPattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 187, column 51
    function def_onEnter_87 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.onEnter(exclusionPattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 187, column 51
    function def_onEnter_89 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.onEnter(exclusionPattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 187, column 51
    function def_onEnter_91 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.onEnter(exclusionPattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 187, column 51
    function def_onEnter_93 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.onEnter(exclusionPattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 187, column 51
    function def_onEnter_95 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.onEnter(exclusionPattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 187, column 51
    function def_onEnter_97 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.onEnter(exclusionPattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 187, column 51
    function def_onEnter_99 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.onEnter(exclusionPattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 187, column 51
    function def_refreshVariables_100 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.refreshVariables(exclusionPattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 187, column 51
    function def_refreshVariables_102 (def :  pcf.CoverageInputSet_default) : void {
      def.refreshVariables(exclusionPattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 187, column 51
    function def_refreshVariables_74 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.refreshVariables(exclusionPattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 187, column 51
    function def_refreshVariables_76 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.refreshVariables(exclusionPattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 187, column 51
    function def_refreshVariables_78 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.refreshVariables(exclusionPattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 187, column 51
    function def_refreshVariables_80 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.refreshVariables(exclusionPattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 187, column 51
    function def_refreshVariables_82 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.refreshVariables(exclusionPattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 187, column 51
    function def_refreshVariables_84 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.refreshVariables(exclusionPattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 187, column 51
    function def_refreshVariables_86 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.refreshVariables(exclusionPattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 187, column 51
    function def_refreshVariables_88 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.refreshVariables(exclusionPattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 187, column 51
    function def_refreshVariables_90 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.refreshVariables(exclusionPattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 187, column 51
    function def_refreshVariables_92 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.refreshVariables(exclusionPattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 187, column 51
    function def_refreshVariables_94 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.refreshVariables(exclusionPattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 187, column 51
    function def_refreshVariables_96 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.refreshVariables(exclusionPattern, wcLine, true, null)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 187, column 51
    function def_refreshVariables_98 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.refreshVariables(exclusionPattern, wcLine, true, null)
    }
    
    // 'mode' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 187, column 51
    function mode_103 () : java.lang.Object {
      return exclusionPattern.PublicID
    }
    
    property get exclusionPattern () : gw.api.productmodel.ExclusionPattern {
      return getIteratedValue(2) as gw.api.productmodel.ExclusionPattern
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WorkersCompCoverageCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends WorkersCompCoverageCVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=ANI_OfficialIDEntry_Input) at WorkersCompCoverageCV.pcf: line 40, column 50
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      officialId.OfficialIDValue = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'label' attribute on TextInput (id=ANI_OfficialIDEntry_Input) at WorkersCompCoverageCV.pcf: line 40, column 50
    function label_2 () : java.lang.Object {
      return officialId.OfficialIDInsuredAndType
    }
    
    // 'validationExpression' attribute on TextInput (id=ANI_OfficialIDEntry_Input) at WorkersCompCoverageCV.pcf: line 40, column 50
    function validationExpression_1 () : java.lang.Object {
      return officialId.validateValue()
    }
    
    // 'value' attribute on TextInput (id=ANI_OfficialIDEntry_Input) at WorkersCompCoverageCV.pcf: line 40, column 50
    function valueRoot_5 () : java.lang.Object {
      return officialId
    }
    
    // 'value' attribute on TextInput (id=ANI_OfficialIDEntry_Input) at WorkersCompCoverageCV.pcf: line 40, column 50
    function value_3 () : java.lang.String {
      return officialId.OfficialIDValue
    }
    
    property get officialId () : entity.OfficialID {
      return getIteratedValue(1) as entity.OfficialID
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WorkersCompCoverageCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends WorkersCompCoverageCVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on ListViewPanel (id=PolicyLinePerStateConfig_LV) at WorkersCompCoverageCV.pcf: line 88, column 28
    function available_30 () : java.lang.Boolean {
      return selectedJurisdiction != null
    }
    
    // 'def' attribute on PanelRef at WorkersCompCoverageCV.pcf: line 124, column 81
    function def_onEnter_31 (def :  pcf.PolicyLinePerStateConfigDV) : void {
      def.onEnter(wcLine, selectedJurisdiction)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 131, column 87
    function def_onEnter_33 (def :  pcf.WorkersCompClassesInputSet) : void {
      def.onEnter(selectedJurisdiction, wcLine)
    }
    
    // 'def' attribute on PanelRef at WorkersCompCoverageCV.pcf: line 124, column 81
    function def_refreshVariables_32 (def :  pcf.PolicyLinePerStateConfigDV) : void {
      def.refreshVariables(wcLine, selectedJurisdiction)
    }
    
    // 'def' attribute on InputSetRef at WorkersCompCoverageCV.pcf: line 131, column 87
    function def_refreshVariables_34 (def :  pcf.WorkersCompClassesInputSet) : void {
      def.refreshVariables(selectedJurisdiction, wcLine)
    }
    
    // 'sortBy' attribute on IteratorSort at WorkersCompCoverageCV.pcf: line 98, column 32
    function sortBy_17 (covJuris :  entity.WCJurisdiction) : java.lang.Object {
      return covJuris.State.DisplayName
    }
    
    // 'value' attribute on TextCell (id=StateName_Cell) at WorkersCompCoverageCV.pcf: line 107, column 53
    function sortValue_18 (covJuris :  entity.WCJurisdiction) : java.lang.Object {
      return covJuris.State
    }
    
    // 'value' attribute on TextCell (id=RiskID_Cell) at WorkersCompCoverageCV.pcf: line 115, column 32
    function sortValue_19 (covJuris :  entity.WCJurisdiction) : java.lang.Object {
      return gw.web.line.wc.policy.WorkersCompCoverageCVUIHelper.getOfficalIDsForJurisdictionThatMatchPNIContactsOfficialIDs(wcLine, covJuris)
    }
    
    // 'toRemove' attribute on RowIterator at WorkersCompCoverageCV.pcf: line 95, column 51
    function toRemove_28 (covJuris :  entity.WCJurisdiction) : void {
      wcLine.removeJurisdiction( covJuris ); gw.api.util.LocationUtil.addRequestScopedInfoMessage(DisplayKey.get("Web.Policy.WC.RemoveJurisdictionWarning")) 
    }
    
    // 'value' attribute on RowIterator at WorkersCompCoverageCV.pcf: line 95, column 51
    function value_29 () : entity.WCJurisdiction[] {
      return wcLine.Jurisdictions
    }
    
    property get selectedJurisdiction () : WCJurisdiction {
      return getCurrentSelection(1) as WCJurisdiction
    }
    
    property set selectedJurisdiction ($arg :  WCJurisdiction) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WorkersCompCoverageCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WCPolicyCoveragesDVExpressionsImpl extends WorkersCompCoverageCVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at WorkersCompCoverageCV.pcf: line 150, column 59
    function initialValue_35 () : gw.api.productmodel.CoveragePattern[] {
      return wcLine.Pattern.getCoverageCategoryByPublicId("WorkersCompGrp").coveragePatternsForEntity(WorkersCompLine).whereSelectedOrAvailable(wcLine, openForEdit).where(\ c -> c.DisplayName != "Workers' Comp")
    }
    
    // 'initialValue' attribute on Variable at WorkersCompCoverageCV.pcf: line 155, column 60
    function initialValue_36 () : gw.api.productmodel.ExclusionPattern[] {
      return wcLine.Pattern.getCoverageCategoryByPublicId("WorkersCompGrp").exclusionPatternsForEntity(WorkersCompLine).whereSelectedOrAvailable(wcLine, openForEdit).where(\ e -> e.DisplayName != "Workers' Comp")
    }
    
    // 'sortBy' attribute on IteratorSort at WorkersCompCoverageCV.pcf: line 171, column 32
    function sortBy_39 (coveragePattern :  gw.api.productmodel.CoveragePattern) : java.lang.Object {
      return coveragePattern.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at WorkersCompCoverageCV.pcf: line 184, column 32
    function sortBy_72 (exclusionPattern :  gw.api.productmodel.ExclusionPattern) : java.lang.Object {
      return exclusionPattern.Priority
    }
    
    // 'value' attribute on InputIterator (id=WCExclusionGroupIterator) at WorkersCompCoverageCV.pcf: line 181, column 66
    function value_104 () : gw.api.productmodel.ExclusionPattern[] {
      return wcGroupExclusionPatterns
    }
    
    // 'value' attribute on TextInput (id=CoveredStates_Input) at WorkersCompCoverageCV.pcf: line 162, column 72
    function value_37 () : java.lang.String {
      return wcLine.Jurisdictions*.State.join(",")
    }
    
    // 'value' attribute on InputIterator (id=WCCoverageGroupIterator) at WorkersCompCoverageCV.pcf: line 168, column 65
    function value_71 () : gw.api.productmodel.CoveragePattern[] {
      return wcGroupCoveragePatterns
    }
    
    property get wcGroupCoveragePatterns () : gw.api.productmodel.CoveragePattern[] {
      return getVariableValue("wcGroupCoveragePatterns", 1) as gw.api.productmodel.CoveragePattern[]
    }
    
    property set wcGroupCoveragePatterns ($arg :  gw.api.productmodel.CoveragePattern[]) {
      setVariableValue("wcGroupCoveragePatterns", 1, $arg)
    }
    
    property get wcGroupExclusionPatterns () : gw.api.productmodel.ExclusionPattern[] {
      return getVariableValue("wcGroupExclusionPatterns", 1) as gw.api.productmodel.ExclusionPattern[]
    }
    
    property set wcGroupExclusionPatterns ($arg :  gw.api.productmodel.ExclusionPattern[]) {
      setVariableValue("wcGroupExclusionPatterns", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WorkersCompCoverageCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WorkersCompCoverageCVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=SplitBases) at WorkersCompCoverageCV.pcf: line 73, column 75
    function action_15 () : void {
      gw.web.line.wc.policy.WorkersCompCoverageCVUIHelper.updateAllBasis(wcLine, CurrentLocation)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=SplitPeriod) at WorkersCompCoverageCV.pcf: line 80, column 76
    function allCheckedRowsAction_16 (CheckedValues :  entity.WCJurisdiction[], CheckedValuesErrors :  java.util.Map) : void {
      SplitPeriodPopup.push( wcLine, CheckedValues )
    }
    
    // 'available' attribute on DetailViewPanel (id=NamedInsuredOfficialIDDV) at WorkersCompCoverageCV.pcf: line 24, column 56
    function available_10 () : java.lang.Boolean {
      return namedInsuredOfficialIDs.Count > 0
    }
    
    // 'initialValue' attribute on Variable at WorkersCompCoverageCV.pcf: line 17, column 28
    function initialValue_0 () : OfficialID[] {
      return wcLine.InterstateNamedInsuredOfficialIDs
    }
    
    // 'value' attribute on AddMenuItemIterator at WorkersCompCoverageCV.pcf: line 56, column 50
    function value_14 () : typekey.Jurisdiction[] {
      return gw.web.line.wc.policy.WorkersCompCoverageCVUIHelper.JurisdictionsThatCanBeAdded(wcLine)
    }
    
    // 'value' attribute on InputIterator (id=officialIDs) at WorkersCompCoverageCV.pcf: line 33, column 45
    function value_9 () : entity.OfficialID[] {
      return namedInsuredOfficialIDs
    }
    
    property get namedInsuredOfficialIDs () : OfficialID[] {
      return getVariableValue("namedInsuredOfficialIDs", 0) as OfficialID[]
    }
    
    property set namedInsuredOfficialIDs ($arg :  OfficialID[]) {
      setVariableValue("namedInsuredOfficialIDs", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get wcLine () : WorkersCompLine {
      return getRequireValue("wcLine", 0) as WorkersCompLine
    }
    
    property set wcLine ($arg :  WorkersCompLine) {
      setRequireValue("wcLine", 0, $arg)
    }
    
    
    //function updateAllBasis(){
    //  if((CurrentLocation as pcf.api.Wizard).saveDraft()){
    //    wcLine.updateWCExposuresAndModifiers()
    //  }
    //}
    
    //property get JurisdictionsThatCanBeAdded(): Jurisdiction[] {
    //  var existingJurisdictions = wcLine.Jurisdictions.map(\j -> j.State).toSet()
    //  var possibleJurisdicitons = wcLine.Branch.LocationStates.toSet()
    //  possibleJurisdicitons.removeAll(existingJurisdictions)
    //  return possibleJurisdicitons.toTypedArray()
    //}
    
    //function getOfficalIDsForJurisdictionThatMatchPNIContactsOfficialIDs(covJuris : WCJurisdiction) : entity.OfficialID[] {
    //  return wcLine.Branch.PrimaryNamedInsured.AccountContactRole.AccountContact.Contact.OfficialIDs
    //        .where(\ officialID ->
    //          officialID.State == StateJurisdictionMappingUtil.getStateMappingForJurisdiction(covJuris.State))
    //}
    
    //function outputConverterForOfficialIDs(VALUE : OfficialID[]) : String {
    //  var str = ""
    //  var first = true
    //  for (var Item in VALUE) {
    //    var idValue = Item.getOfficialIDValue()
    //    if(idValue != null) {
    //      if(!first) {
    //        str = str + ", "
    //      }
    //      first = false
    //      str = str + idValue
    //    }
    //  }
    //  return str
    //}
    
    
  }
  
  
}