package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/audit/AuditDetailsPanelSet.GeneralLiability.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AuditDetailsPanelSet_GeneralLiabilityExpressions {
  @javax.annotation.Generated("config/web/pcf/job/audit/AuditDetailsPanelSet.GeneralLiability.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AuditDetailsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at AuditDetailsPanelSet.GeneralLiability.pcf: line 14, column 35
    function initialValue_0 () : productmodel.GLLine {
      return policyPeriod.GLLine
    }
    
    // 'initialValue' attribute on Variable at AuditDetailsPanelSet.GeneralLiability.pcf: line 18, column 38
    function initialValue_1 () : typekey.Jurisdiction[] {
      return glLine.CoveredStates
    }
    
    // 'initialValue' attribute on Variable at AuditDetailsPanelSet.GeneralLiability.pcf: line 22, column 71
    function initialValue_2 () : java.util.Map<typekey.State, entity.GLExposure[]> {
      return glLine.ExposuresByState
    }
    
    // 'sortBy' attribute on IteratorSort at AuditDetailsPanelSet.GeneralLiability.pcf: line 29, column 24
    function sortBy_3 (state :  typekey.Jurisdiction) : java.lang.Object {
      return state
    }
    
    // 'value' attribute on PanelIterator at AuditDetailsPanelSet.GeneralLiability.pcf: line 26, column 42
    function value_40 () : typekey.Jurisdiction[] {
      return coveredStates
    }
    
    property get coveredStates () : typekey.Jurisdiction[] {
      return getVariableValue("coveredStates", 0) as typekey.Jurisdiction[]
    }
    
    property set coveredStates ($arg :  typekey.Jurisdiction[]) {
      setVariableValue("coveredStates", 0, $arg)
    }
    
    property get exposuresByState () : java.util.Map<typekey.State, entity.GLExposure[]> {
      return getVariableValue("exposuresByState", 0) as java.util.Map<typekey.State, entity.GLExposure[]>
    }
    
    property set exposuresByState ($arg :  java.util.Map<typekey.State, entity.GLExposure[]>) {
      setVariableValue("exposuresByState", 0, $arg)
    }
    
    property get glLine () : productmodel.GLLine {
      return getVariableValue("glLine", 0) as productmodel.GLLine
    }
    
    property set glLine ($arg :  productmodel.GLLine) {
      setVariableValue("glLine", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/audit/AuditDetailsPanelSet.GeneralLiability.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PanelIteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=AuditedBasis_Cell) at AuditDetailsPanelSet.GeneralLiability.pcf: line 86, column 54
    function defaultSetter_35 (__VALUE_TO_SET :  java.lang.Object) : void {
      glExposure.AuditedBasis = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextCell (id=Location_Cell) at AuditDetailsPanelSet.GeneralLiability.pcf: line 54, column 54
    function valueRoot_14 () : java.lang.Object {
      return glExposure.Location
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at AuditDetailsPanelSet.GeneralLiability.pcf: line 59, column 58
    function valueRoot_17 () : java.lang.Object {
      return glExposure.ClassCode
    }
    
    // 'value' attribute on DateCell (id=FromDate_Cell) at AuditDetailsPanelSet.GeneralLiability.pcf: line 67, column 57
    function valueRoot_23 () : java.lang.Object {
      return glExposure
    }
    
    // 'value' attribute on TextCell (id=BasisType_Cell) at AuditDetailsPanelSet.GeneralLiability.pcf: line 75, column 64
    function valueRoot_29 () : java.lang.Object {
      return glExposure.ClassCode.Basis
    }
    
    // 'value' attribute on TextCell (id=Location_Cell) at AuditDetailsPanelSet.GeneralLiability.pcf: line 54, column 54
    function value_13 () : java.lang.Integer {
      return glExposure.Location.LocationNum
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at AuditDetailsPanelSet.GeneralLiability.pcf: line 59, column 58
    function value_16 () : java.lang.String {
      return glExposure.ClassCode.Code
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at AuditDetailsPanelSet.GeneralLiability.pcf: line 63, column 68
    function value_19 () : java.lang.String {
      return glExposure.ClassCode.Classification
    }
    
    // 'value' attribute on DateCell (id=FromDate_Cell) at AuditDetailsPanelSet.GeneralLiability.pcf: line 67, column 57
    function value_22 () : java.util.Date {
      return glExposure.EffectiveDate
    }
    
    // 'value' attribute on DateCell (id=ToDate_Cell) at AuditDetailsPanelSet.GeneralLiability.pcf: line 71, column 61
    function value_25 () : java.util.Date {
      return glExposure.EndOfCoverageDate
    }
    
    // 'value' attribute on TextCell (id=BasisType_Cell) at AuditDetailsPanelSet.GeneralLiability.pcf: line 75, column 64
    function value_28 () : java.lang.String {
      return glExposure.ClassCode.Basis.Code
    }
    
    // 'value' attribute on TextCell (id=EstimatedBasis_Cell) at AuditDetailsPanelSet.GeneralLiability.pcf: line 80, column 54
    function value_31 () : java.lang.Integer {
      return glExposure.BasisAmount
    }
    
    // 'value' attribute on TextCell (id=AuditedBasis_Cell) at AuditDetailsPanelSet.GeneralLiability.pcf: line 86, column 54
    function value_34 () : java.lang.Integer {
      return glExposure.AuditedBasis
    }
    
    property get glExposure () : entity.GLExposure {
      return getIteratedValue(2) as entity.GLExposure
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/audit/AuditDetailsPanelSet.GeneralLiability.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends AuditDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'editable' attribute on PanelRef at AuditDetailsPanelSet.GeneralLiability.pcf: line 31, column 45
    function editable_39 () : java.lang.Boolean {
      return policyPeriod.OpenForEdit
    }
    
    // 'value' attribute on TextCell (id=BasisType_Cell) at AuditDetailsPanelSet.GeneralLiability.pcf: line 75, column 64
    function sortValue_10 (glExposure :  entity.GLExposure) : java.lang.Object {
      return glExposure.ClassCode.Basis.Code
    }
    
    // 'value' attribute on TextCell (id=EstimatedBasis_Cell) at AuditDetailsPanelSet.GeneralLiability.pcf: line 80, column 54
    function sortValue_11 (glExposure :  entity.GLExposure) : java.lang.Object {
      return glExposure.BasisAmount
    }
    
    // 'value' attribute on TextCell (id=AuditedBasis_Cell) at AuditDetailsPanelSet.GeneralLiability.pcf: line 86, column 54
    function sortValue_12 (glExposure :  entity.GLExposure) : java.lang.Object {
      return glExposure.AuditedBasis
    }
    
    // 'value' attribute on TextCell (id=Location_Cell) at AuditDetailsPanelSet.GeneralLiability.pcf: line 54, column 54
    function sortValue_5 (glExposure :  entity.GLExposure) : java.lang.Object {
      return glExposure.Location.LocationNum
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at AuditDetailsPanelSet.GeneralLiability.pcf: line 59, column 58
    function sortValue_6 (glExposure :  entity.GLExposure) : java.lang.Object {
      return glExposure.ClassCode.Code
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at AuditDetailsPanelSet.GeneralLiability.pcf: line 63, column 68
    function sortValue_7 (glExposure :  entity.GLExposure) : java.lang.Object {
      return glExposure.ClassCode.Classification
    }
    
    // 'value' attribute on DateCell (id=FromDate_Cell) at AuditDetailsPanelSet.GeneralLiability.pcf: line 67, column 57
    function sortValue_8 (glExposure :  entity.GLExposure) : java.lang.Object {
      return glExposure.EffectiveDate
    }
    
    // 'value' attribute on DateCell (id=ToDate_Cell) at AuditDetailsPanelSet.GeneralLiability.pcf: line 71, column 61
    function sortValue_9 (glExposure :  entity.GLExposure) : java.lang.Object {
      return glExposure.EndOfCoverageDate
    }
    
    // 'title' attribute on TitleBar (id=StateTitle) at AuditDetailsPanelSet.GeneralLiability.pcf: line 34, column 38
    function title_4 () : java.lang.String {
      return state.DisplayName
    }
    
    // 'value' attribute on RowIterator at AuditDetailsPanelSet.GeneralLiability.pcf: line 46, column 51
    function value_38 () : entity.GLExposure[] {
      return exposuresByState.get(gw.api.util.StateJurisdictionMappingUtil.getStateMappingForJurisdiction(state))
    }
    
    property get state () : typekey.Jurisdiction {
      return getIteratedValue(1) as typekey.Jurisdiction
    }
    
    
  }
  
  
}