package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/FormClausePatternSelectionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FormClausePatternSelectionPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormClausePatternSelectionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FormClausePatternSelectionPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (formPattern :  FormPattern) : int {
      return 0
    }
    
    // 'afterCommit' attribute on Popup (id=FormClausePatternSelectionPopup) at FormClausePatternSelectionPopup.pcf: line 12, column 82
    function afterCommit_30 (TopLocation :  pcf.api.Location) : void {
      formPattern.clearDependentClausePatternSelections()
    }
    
    // 'initialValue' attribute on Variable at FormClausePatternSelectionPopup.pcf: line 21, column 41
    function initialValue_0 () : CoveragePatternSearchType {
      return CoveragePatternSearchType.TC_COVERAGE
    }
    
    override property get CurrentLocation () : pcf.FormClausePatternSelectionPopup {
      return super.CurrentLocation as pcf.FormClausePatternSelectionPopup
    }
    
    property get formPattern () : FormPattern {
      return getVariableValue("formPattern", 0) as FormPattern
    }
    
    property set formPattern ($arg :  FormPattern) {
      setVariableValue("formPattern", 0, $arg)
    }
    
    property get searchType () : CoveragePatternSearchType {
      return getVariableValue("searchType", 0) as CoveragePatternSearchType
    }
    
    property set searchType ($arg :  CoveragePatternSearchType) {
      setVariableValue("searchType", 0, $arg)
    }
    
    function getAvailableClauseTypes() : CoveragePatternSearchType[]{
      return new CoveragePatternSearchType[]{CoveragePatternSearchType.TC_COVERAGE, 
        CoveragePatternSearchType.TC_CONDITION, CoveragePatternSearchType.TC_EXCLUSION}
    }
    
    function createSearchCriteria() : gw.productmodel.ClausePatternSearchCriteria {
      var criteria = new gw.productmodel.ClausePatternSearchCriteria()
      criteria.SearchType = searchType
      criteria.PolicyLinePatternCode = formPattern.PolicyLinePatternCode
      return criteria
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormClausePatternSelectionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickValue' attribute on RowIterator at FormClausePatternSelectionPopup.pcf: line 65, column 63
    function pickValue_26 () : gw.api.productmodel.ClausePattern {
      return pattern
    }
    
    // 'value' attribute on TextCell (id=Coverage_Cell) at FormClausePatternSelectionPopup.pcf: line 70, column 48
    function valueRoot_18 () : java.lang.Object {
      return pattern
    }
    
    // 'value' attribute on TextCell (id=Category_Cell) at FormClausePatternSelectionPopup.pcf: line 74, column 65
    function valueRoot_21 () : java.lang.Object {
      return pattern.CoverageCategory
    }
    
    // 'value' attribute on TextCell (id=Coverage_Cell) at FormClausePatternSelectionPopup.pcf: line 70, column 48
    function value_17 () : java.lang.String {
      return pattern.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Category_Cell) at FormClausePatternSelectionPopup.pcf: line 74, column 65
    function value_20 () : java.lang.String {
      return pattern.CoverageCategory.DisplayName
    }
    
    // 'value' attribute on TextCell (id=ClauseType_Cell) at FormClausePatternSelectionPopup.pcf: line 78, column 47
    function value_23 () : java.lang.String {
      return pattern.ClauseName
    }
    
    property get pattern () : gw.api.productmodel.ClausePattern {
      return getIteratedValue(2) as gw.api.productmodel.ClausePattern
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormClausePatternSelectionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends FormClausePatternSelectionPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at FormClausePatternSelectionPopup.pcf: line 53, column 47
    function def_onEnter_12 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at FormClausePatternSelectionPopup.pcf: line 53, column 47
    function def_refreshVariables_13 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on RangeRadioInput (id=searchType_Input) at FormClausePatternSelectionPopup.pcf: line 44, column 31
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.SearchType = (__VALUE_TO_SET as typekey.CoveragePatternSearchType)
    }
    
    // 'value' attribute on TextInput (id=Keyword_Input) at FormClausePatternSelectionPopup.pcf: line 49, column 47
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Keyword = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'searchCriteria' attribute on SearchPanel at FormClausePatternSelectionPopup.pcf: line 32, column 65
    function searchCriteria_29 () : gw.productmodel.ClausePatternSearchCriteria {
      return createSearchCriteria()
    }
    
    // 'search' attribute on SearchPanel at FormClausePatternSelectionPopup.pcf: line 32, column 65
    function search_28 () : java.lang.Object {
      return searchCriteria.performSearch()
    }
    
    // 'value' attribute on TextCell (id=Coverage_Cell) at FormClausePatternSelectionPopup.pcf: line 70, column 48
    function sortValue_14 (pattern :  gw.api.productmodel.ClausePattern) : java.lang.Object {
      return pattern.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Category_Cell) at FormClausePatternSelectionPopup.pcf: line 74, column 65
    function sortValue_15 (pattern :  gw.api.productmodel.ClausePattern) : java.lang.Object {
      return pattern.CoverageCategory.DisplayName
    }
    
    // 'value' attribute on TextCell (id=ClauseType_Cell) at FormClausePatternSelectionPopup.pcf: line 78, column 47
    function sortValue_16 (pattern :  gw.api.productmodel.ClausePattern) : java.lang.Object {
      return pattern.ClauseName
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=searchType_Input) at FormClausePatternSelectionPopup.pcf: line 44, column 31
    function valueRange_4 () : java.lang.Object {
      return getAvailableClauseTypes()
    }
    
    // 'value' attribute on RangeRadioInput (id=searchType_Input) at FormClausePatternSelectionPopup.pcf: line 44, column 31
    function valueRoot_3 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on RangeRadioInput (id=searchType_Input) at FormClausePatternSelectionPopup.pcf: line 44, column 31
    function value_1 () : typekey.CoveragePatternSearchType {
      return searchCriteria.SearchType
    }
    
    // 'value' attribute on RowIterator at FormClausePatternSelectionPopup.pcf: line 65, column 63
    function value_27 () : gw.api.productmodel.ClausePattern[] {
      return clausePatterns
    }
    
    // 'value' attribute on TextInput (id=Keyword_Input) at FormClausePatternSelectionPopup.pcf: line 49, column 47
    function value_8 () : java.lang.String {
      return searchCriteria.Keyword
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=searchType_Input) at FormClausePatternSelectionPopup.pcf: line 44, column 31
    function verifyValueRangeIsAllowedType_5 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=searchType_Input) at FormClausePatternSelectionPopup.pcf: line 44, column 31
    function verifyValueRangeIsAllowedType_5 ($$arg :  typekey.CoveragePatternSearchType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=searchType_Input) at FormClausePatternSelectionPopup.pcf: line 44, column 31
    function verifyValueRange_6 () : void {
      var __valueRangeArg = getAvailableClauseTypes()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_5(__valueRangeArg)
    }
    
    property get clausePatterns () : gw.api.productmodel.ClausePattern[] {
      return getResultsValue(1) as gw.api.productmodel.ClausePattern[]
    }
    
    property get searchCriteria () : gw.productmodel.ClausePatternSearchCriteria {
      return getCriteriaValue(1) as gw.productmodel.ClausePatternSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.productmodel.ClausePatternSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    
  }
  
  
}