package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cp/policy/CPClassCodeSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CPClassCodeSearchPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/CPClassCodeSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CPClassCodeSearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (cpLine :  CommercialPropertyLine, cpBuilding :  CPBuilding) : int {
      return 0
    }
    
    // 'initialValue' attribute on Variable at CPClassCodeSearchPopup.pcf: line 21, column 27
    function initialValue_0 () : CPClassCode {
      return (cpLine.Branch.Job.NewTerm) ? null : cpBuilding.BasedOn.ClassCode
    }
    
    override property get CurrentLocation () : pcf.CPClassCodeSearchPopup {
      return super.CurrentLocation as pcf.CPClassCodeSearchPopup
    }
    
    property get cpBuilding () : CPBuilding {
      return getVariableValue("cpBuilding", 0) as CPBuilding
    }
    
    property set cpBuilding ($arg :  CPBuilding) {
      setVariableValue("cpBuilding", 0, $arg)
    }
    
    property get cpLine () : CommercialPropertyLine {
      return getVariableValue("cpLine", 0) as CommercialPropertyLine
    }
    
    property set cpLine ($arg :  CommercialPropertyLine) {
      setVariableValue("cpLine", 0, $arg)
    }
    
    property get previousCPClassCode () : CPClassCode {
      return getVariableValue("previousCPClassCode", 0) as CPClassCode
    }
    
    property set previousCPClassCode ($arg :  CPClassCode) {
      setVariableValue("previousCPClassCode", 0, $arg)
    }
    
    function createCriteria() : gw.lob.cp.CPClassCodeSearchCriteria {
      var criteria = new gw.lob.cp.CPClassCodeSearchCriteria()
      criteria.EffectiveAsOfDate = cpLine.getReferenceDateForCurrentJob(gw.api.util.JurisdictionMappingUtil.getJurisdiction(cpBuilding.CPLocation.Location))
      if (previousCPClassCode != null) {
        criteria.PreviousSelectedClassCode = previousCPClassCode.Code
      }
      return criteria
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/CPClassCodeSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickValue' attribute on RowIterator at CPClassCodeSearchPopup.pcf: line 69, column 86
    function pickValue_19 () : CPClassCode {
      return cpClassCode
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at CPClassCodeSearchPopup.pcf: line 75, column 33
    function valueRoot_14 () : java.lang.Object {
      return cpClassCode
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at CPClassCodeSearchPopup.pcf: line 75, column 33
    function value_13 () : java.lang.String {
      return cpClassCode.Code
    }
    
    // 'value' attribute on TextCell (id=Classification_Cell) at CPClassCodeSearchPopup.pcf: line 81, column 55
    function value_16 () : java.lang.String {
      return cpClassCode.Classification
    }
    
    property get cpClassCode () : entity.CPClassCode {
      return getIteratedValue(2) as entity.CPClassCode
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/CPClassCodeSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends CPClassCodeSearchPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at CPClassCodeSearchPopup.pcf: line 52, column 49
    function def_onEnter_9 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at CPClassCodeSearchPopup.pcf: line 52, column 49
    function def_refreshVariables_10 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at CPClassCodeSearchPopup.pcf: line 42, column 46
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Code = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Classification_Input) at CPClassCodeSearchPopup.pcf: line 48, column 56
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Classification = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'searchCriteria' attribute on SearchPanel at CPClassCodeSearchPopup.pcf: line 32, column 81
    function searchCriteria_22 () : gw.lob.cp.CPClassCodeSearchCriteria {
      return createCriteria()
    }
    
    // 'search' attribute on SearchPanel at CPClassCodeSearchPopup.pcf: line 32, column 81
    function search_21 () : java.lang.Object {
      return searchCriteria.performSearch()
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at CPClassCodeSearchPopup.pcf: line 75, column 33
    function sortValue_11 (cpClassCode :  entity.CPClassCode) : java.lang.Object {
      return cpClassCode.Code
    }
    
    // 'value' attribute on TextCell (id=Classification_Cell) at CPClassCodeSearchPopup.pcf: line 81, column 55
    function sortValue_12 (cpClassCode :  entity.CPClassCode) : java.lang.Object {
      return cpClassCode.Classification
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at CPClassCodeSearchPopup.pcf: line 42, column 46
    function valueRoot_3 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at CPClassCodeSearchPopup.pcf: line 42, column 46
    function value_1 () : java.lang.String {
      return searchCriteria.Code
    }
    
    // 'value' attribute on RowIterator at CPClassCodeSearchPopup.pcf: line 69, column 86
    function value_20 () : gw.api.database.IQueryBeanResult<entity.CPClassCode> {
      return cpClassCodes
    }
    
    // 'value' attribute on TextInput (id=Classification_Input) at CPClassCodeSearchPopup.pcf: line 48, column 56
    function value_5 () : java.lang.String {
      return searchCriteria.Classification
    }
    
    property get cpClassCodes () : gw.api.database.IQueryBeanResult<CPClassCode> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<CPClassCode>
    }
    
    property get searchCriteria () : gw.lob.cp.CPClassCodeSearchCriteria {
      return getCriteriaValue(1) as gw.lob.cp.CPClassCodeSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.lob.cp.CPClassCodeSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    
  }
  
  
}