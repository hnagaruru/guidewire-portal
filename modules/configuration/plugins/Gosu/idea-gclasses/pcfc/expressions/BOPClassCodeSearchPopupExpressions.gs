package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPClassCodeSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BOPClassCodeSearchPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPClassCodeSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BOPClassCodeSearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (bopLine :  BOPLine, bopBuilding :  BOPBuilding) : int {
      return 0
    }
    
    // 'initialValue' attribute on Variable at BOPClassCodeSearchPopup.pcf: line 21, column 28
    function initialValue_0 () : BOPClassCode {
      return (bopLine.Branch.Job.NewTerm) ? null : bopBuilding.BasedOn.ClassCode
    }
    
    override property get CurrentLocation () : pcf.BOPClassCodeSearchPopup {
      return super.CurrentLocation as pcf.BOPClassCodeSearchPopup
    }
    
    property get bopBuilding () : BOPBuilding {
      return getVariableValue("bopBuilding", 0) as BOPBuilding
    }
    
    property set bopBuilding ($arg :  BOPBuilding) {
      setVariableValue("bopBuilding", 0, $arg)
    }
    
    property get bopLine () : BOPLine {
      return getVariableValue("bopLine", 0) as BOPLine
    }
    
    property set bopLine ($arg :  BOPLine) {
      setVariableValue("bopLine", 0, $arg)
    }
    
    property get previousBOPClassCode () : BOPClassCode {
      return getVariableValue("previousBOPClassCode", 0) as BOPClassCode
    }
    
    property set previousBOPClassCode ($arg :  BOPClassCode) {
      setVariableValue("previousBOPClassCode", 0, $arg)
    }
    
    function createCriteria() : gw.lob.bop.BOPClassCodeSearchCriteria {
      var criteria = new gw.lob.bop.BOPClassCodeSearchCriteria()
      criteria.EffectiveAsOfDate = bopLine.getReferenceDateForCurrentJob(gw.api.util.JurisdictionMappingUtil.getJurisdiction(bopBuilding.BOPLocation.Location))
      if (previousBOPClassCode != null) {
        criteria.PreviousSelectedClassCode = previousBOPClassCode.Code
      }
      return criteria
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPClassCodeSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickValue' attribute on RowIterator at BOPClassCodeSearchPopup.pcf: line 69, column 87
    function pickValue_19 () : BOPClassCode {
      return bOPClassCode
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at BOPClassCodeSearchPopup.pcf: line 75, column 33
    function valueRoot_14 () : java.lang.Object {
      return bOPClassCode
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at BOPClassCodeSearchPopup.pcf: line 75, column 33
    function value_13 () : java.lang.String {
      return bOPClassCode.Code
    }
    
    // 'value' attribute on TextCell (id=Classification_Cell) at BOPClassCodeSearchPopup.pcf: line 81, column 56
    function value_16 () : java.lang.String {
      return bOPClassCode.Classification
    }
    
    property get bOPClassCode () : entity.BOPClassCode {
      return getIteratedValue(2) as entity.BOPClassCode
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPClassCodeSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends BOPClassCodeSearchPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at BOPClassCodeSearchPopup.pcf: line 52, column 49
    function def_onEnter_9 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at BOPClassCodeSearchPopup.pcf: line 52, column 49
    function def_refreshVariables_10 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at BOPClassCodeSearchPopup.pcf: line 42, column 46
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Code = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Classification_Input) at BOPClassCodeSearchPopup.pcf: line 48, column 56
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Classification = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'searchCriteria' attribute on SearchPanel at BOPClassCodeSearchPopup.pcf: line 32, column 82
    function searchCriteria_22 () : gw.lob.bop.BOPClassCodeSearchCriteria {
      return createCriteria();
    }
    
    // 'search' attribute on SearchPanel at BOPClassCodeSearchPopup.pcf: line 32, column 82
    function search_21 () : java.lang.Object {
      return searchCriteria.performSearch()
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at BOPClassCodeSearchPopup.pcf: line 75, column 33
    function sortValue_11 (bOPClassCode :  entity.BOPClassCode) : java.lang.Object {
      return bOPClassCode.Code
    }
    
    // 'value' attribute on TextCell (id=Classification_Cell) at BOPClassCodeSearchPopup.pcf: line 81, column 56
    function sortValue_12 (bOPClassCode :  entity.BOPClassCode) : java.lang.Object {
      return bOPClassCode.Classification
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at BOPClassCodeSearchPopup.pcf: line 42, column 46
    function valueRoot_3 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at BOPClassCodeSearchPopup.pcf: line 42, column 46
    function value_1 () : java.lang.String {
      return searchCriteria.Code
    }
    
    // 'value' attribute on RowIterator at BOPClassCodeSearchPopup.pcf: line 69, column 87
    function value_20 () : gw.api.database.IQueryBeanResult<entity.BOPClassCode> {
      return bOPClassCodes
    }
    
    // 'value' attribute on TextInput (id=Classification_Input) at BOPClassCodeSearchPopup.pcf: line 48, column 56
    function value_5 () : java.lang.String {
      return searchCriteria.Classification
    }
    
    property get bOPClassCodes () : gw.api.database.IQueryBeanResult<BOPClassCode> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<BOPClassCode>
    }
    
    property get searchCriteria () : gw.lob.bop.BOPClassCodeSearchCriteria {
      return getCriteriaValue(1) as gw.lob.bop.BOPClassCodeSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.lob.bop.BOPClassCodeSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    
  }
  
  
}