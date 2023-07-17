package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/im/parts/accountsrec/IMARPartLevelInformationDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IMARPartLevelInformationDVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/im/parts/accountsrec/IMARPartLevelInformationDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IMARPartLevelInformationDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyInput (id=coinsurance_Input) at IMARPartLevelInformationDV.pcf: line 42, column 42
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      accountsRecPart.Coinsurance = (__VALUE_TO_SET as typekey.Coinsurance)
    }
    
    // 'value' attribute on BooleanRadioInput (id=reporting_Input) at IMARPartLevelInformationDV.pcf: line 28, column 44
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      accountsRecPart.Reporting = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=businessClass_Input) at IMARPartLevelInformationDV.pcf: line 35, column 44
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      accountsRecPart.BusinessClass = (__VALUE_TO_SET as typekey.BusinessClass)
    }
    
    // 'editable' attribute on DetailViewPanel (id=IMARPartLevelInformationDV) at IMARPartLevelInformationDV.pcf: line 7, column 37
    function editable_47 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'initialValue' attribute on Variable at IMARPartLevelInformationDV.pcf: line 17, column 52
    function initialValue_0 () : gw.api.productmodel.CoverageCategory {
      return accountsRecPart.InlandMarineLine.Pattern.getCoverageCategoryByPublicId("IMARPartCategory")
    }
    
    // 'initialValue' attribute on Variable at IMARPartLevelInformationDV.pcf: line 22, column 53
    function initialValue_1 () : gw.api.productmodel.CoveragePattern[] {
      return accountsRecPart == null ? null : accountsRecPartCategory.coveragePatternsForEntity(IMAccountsRecPart).whereSelectedOrAvailable(accountsRecPart, openForEdit)
    }
    
    // 'sortBy' attribute on IteratorSort at IMARPartLevelInformationDV.pcf: line 53, column 26
    function sortBy_14 (coveragePattern :  gw.api.productmodel.CoveragePattern) : java.lang.Object {
      return coveragePattern.Priority
    }
    
    // 'value' attribute on BooleanRadioInput (id=reporting_Input) at IMARPartLevelInformationDV.pcf: line 28, column 44
    function valueRoot_4 () : java.lang.Object {
      return accountsRecPart
    }
    
    // 'value' attribute on TypeKeyInput (id=coinsurance_Input) at IMARPartLevelInformationDV.pcf: line 42, column 42
    function value_10 () : typekey.Coinsurance {
      return accountsRecPart.Coinsurance
    }
    
    // 'value' attribute on BooleanRadioInput (id=reporting_Input) at IMARPartLevelInformationDV.pcf: line 28, column 44
    function value_2 () : java.lang.Boolean {
      return accountsRecPart.Reporting
    }
    
    // 'value' attribute on InputIterator (id=partLevelCovs) at IMARPartLevelInformationDV.pcf: line 50, column 59
    function value_46 () : gw.api.productmodel.CoveragePattern[] {
      return accountsRecPartCategoryCoveragePatterns
    }
    
    // 'value' attribute on TypeKeyInput (id=businessClass_Input) at IMARPartLevelInformationDV.pcf: line 35, column 44
    function value_6 () : typekey.BusinessClass {
      return accountsRecPart.BusinessClass
    }
    
    property get accountsRecPart () : IMAccountsRecPart {
      return getRequireValue("accountsRecPart", 0) as IMAccountsRecPart
    }
    
    property set accountsRecPart ($arg :  IMAccountsRecPart) {
      setRequireValue("accountsRecPart", 0, $arg)
    }
    
    property get accountsRecPartCategory () : gw.api.productmodel.CoverageCategory {
      return getVariableValue("accountsRecPartCategory", 0) as gw.api.productmodel.CoverageCategory
    }
    
    property set accountsRecPartCategory ($arg :  gw.api.productmodel.CoverageCategory) {
      setVariableValue("accountsRecPartCategory", 0, $arg)
    }
    
    property get accountsRecPartCategoryCoveragePatterns () : gw.api.productmodel.CoveragePattern[] {
      return getVariableValue("accountsRecPartCategoryCoveragePatterns", 0) as gw.api.productmodel.CoveragePattern[]
    }
    
    property set accountsRecPartCategoryCoveragePatterns ($arg :  gw.api.productmodel.CoveragePattern[]) {
      setVariableValue("accountsRecPartCategoryCoveragePatterns", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/parts/accountsrec/IMARPartLevelInformationDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends IMARPartLevelInformationDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at IMARPartLevelInformationDV.pcf: line 56, column 44
    function def_onEnter_15 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.onEnter(coveragePattern, accountsRecPart, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at IMARPartLevelInformationDV.pcf: line 56, column 44
    function def_onEnter_17 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.onEnter(coveragePattern, accountsRecPart, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at IMARPartLevelInformationDV.pcf: line 56, column 44
    function def_onEnter_19 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.onEnter(coveragePattern, accountsRecPart, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at IMARPartLevelInformationDV.pcf: line 56, column 44
    function def_onEnter_21 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.onEnter(coveragePattern, accountsRecPart, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at IMARPartLevelInformationDV.pcf: line 56, column 44
    function def_onEnter_23 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.onEnter(coveragePattern, accountsRecPart, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at IMARPartLevelInformationDV.pcf: line 56, column 44
    function def_onEnter_25 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.onEnter(coveragePattern, accountsRecPart, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at IMARPartLevelInformationDV.pcf: line 56, column 44
    function def_onEnter_27 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.onEnter(coveragePattern, accountsRecPart, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at IMARPartLevelInformationDV.pcf: line 56, column 44
    function def_onEnter_29 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.onEnter(coveragePattern, accountsRecPart, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at IMARPartLevelInformationDV.pcf: line 56, column 44
    function def_onEnter_31 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.onEnter(coveragePattern, accountsRecPart, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at IMARPartLevelInformationDV.pcf: line 56, column 44
    function def_onEnter_33 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.onEnter(coveragePattern, accountsRecPart, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at IMARPartLevelInformationDV.pcf: line 56, column 44
    function def_onEnter_35 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.onEnter(coveragePattern, accountsRecPart, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at IMARPartLevelInformationDV.pcf: line 56, column 44
    function def_onEnter_37 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.onEnter(coveragePattern, accountsRecPart, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at IMARPartLevelInformationDV.pcf: line 56, column 44
    function def_onEnter_39 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.onEnter(coveragePattern, accountsRecPart, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at IMARPartLevelInformationDV.pcf: line 56, column 44
    function def_onEnter_41 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.onEnter(coveragePattern, accountsRecPart, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at IMARPartLevelInformationDV.pcf: line 56, column 44
    function def_onEnter_43 (def :  pcf.CoverageInputSet_default) : void {
      def.onEnter(coveragePattern, accountsRecPart, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at IMARPartLevelInformationDV.pcf: line 56, column 44
    function def_refreshVariables_16 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.refreshVariables(coveragePattern, accountsRecPart, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at IMARPartLevelInformationDV.pcf: line 56, column 44
    function def_refreshVariables_18 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.refreshVariables(coveragePattern, accountsRecPart, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at IMARPartLevelInformationDV.pcf: line 56, column 44
    function def_refreshVariables_20 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.refreshVariables(coveragePattern, accountsRecPart, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at IMARPartLevelInformationDV.pcf: line 56, column 44
    function def_refreshVariables_22 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.refreshVariables(coveragePattern, accountsRecPart, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at IMARPartLevelInformationDV.pcf: line 56, column 44
    function def_refreshVariables_24 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.refreshVariables(coveragePattern, accountsRecPart, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at IMARPartLevelInformationDV.pcf: line 56, column 44
    function def_refreshVariables_26 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.refreshVariables(coveragePattern, accountsRecPart, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at IMARPartLevelInformationDV.pcf: line 56, column 44
    function def_refreshVariables_28 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.refreshVariables(coveragePattern, accountsRecPart, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at IMARPartLevelInformationDV.pcf: line 56, column 44
    function def_refreshVariables_30 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.refreshVariables(coveragePattern, accountsRecPart, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at IMARPartLevelInformationDV.pcf: line 56, column 44
    function def_refreshVariables_32 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.refreshVariables(coveragePattern, accountsRecPart, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at IMARPartLevelInformationDV.pcf: line 56, column 44
    function def_refreshVariables_34 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.refreshVariables(coveragePattern, accountsRecPart, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at IMARPartLevelInformationDV.pcf: line 56, column 44
    function def_refreshVariables_36 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.refreshVariables(coveragePattern, accountsRecPart, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at IMARPartLevelInformationDV.pcf: line 56, column 44
    function def_refreshVariables_38 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.refreshVariables(coveragePattern, accountsRecPart, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at IMARPartLevelInformationDV.pcf: line 56, column 44
    function def_refreshVariables_40 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.refreshVariables(coveragePattern, accountsRecPart, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at IMARPartLevelInformationDV.pcf: line 56, column 44
    function def_refreshVariables_42 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.refreshVariables(coveragePattern, accountsRecPart, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at IMARPartLevelInformationDV.pcf: line 56, column 44
    function def_refreshVariables_44 (def :  pcf.CoverageInputSet_default) : void {
      def.refreshVariables(coveragePattern, accountsRecPart, openForEdit, null)
    }
    
    // 'mode' attribute on InputSetRef at IMARPartLevelInformationDV.pcf: line 56, column 44
    function mode_45 () : java.lang.Object {
      return coveragePattern.PublicID
    }
    
    property get coveragePattern () : gw.api.productmodel.CoveragePattern {
      return getIteratedValue(1) as gw.api.productmodel.CoveragePattern
    }
    
    
  }
  
  
}