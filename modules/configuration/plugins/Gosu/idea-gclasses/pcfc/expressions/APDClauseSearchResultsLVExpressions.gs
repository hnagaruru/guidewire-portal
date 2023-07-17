package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDClauseSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDClauseSearchResultsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDClauseSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDClauseSearchResultsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at APDClauseSearchResultsLV.pcf: line 31, column 24
    function sortBy_0 (pattern :  APDClause) : java.lang.Object {
      return pattern.Sequence
    }
    
    // 'value' attribute on TextCell (id=Coverage_Cell) at APDClauseSearchResultsLV.pcf: line 40, column 24
    function sortValue_1 (pattern :  APDClause) : java.lang.Object {
      return pattern.Name
    }
    
    // 'value' attribute on RangeCell (id=Category_Cell) at APDClauseSearchResultsLV.pcf: line 50, column 23
    function sortValue_2 (pattern :  APDClause) : java.lang.Object {
      return pattern.ClauseCategory
    }
    
    // 'value' attribute on TextCell (id=ClauseType_Cell) at APDClauseSearchResultsLV.pcf: line 60, column 48
    function sortValue_3 (pattern :  APDClause) : java.lang.Object {
      return pattern.Subtype.DisplayName
    }
    
    // 'startChecked' attribute on RowIterator at APDClauseSearchResultsLV.pcf: line 28, column 46
    function startChecked_26 (pattern :  APDClause) : java.lang.Boolean {
      return pattern.New
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at APDClauseSearchResultsLV.pcf: line 28, column 46
    function toCreateAndAdd_21 () : APDClause {
      return coverable.addCoverage(null)
    }
    
    // 'toRemove' attribute on RowIterator at APDClauseSearchResultsLV.pcf: line 28, column 46
    function toRemove_22 (pattern :  APDClause) : void {
      coverable.removeClause(pattern)
    }
    
    // 'value' attribute on RowIterator at APDClauseSearchResultsLV.pcf: line 28, column 46
    function value_23 () : ArrayList<APDClause> {
      return coveragePatterns
    }
    
    // 'valueType' attribute on RowIterator at APDClauseSearchResultsLV.pcf: line 28, column 46
    function verifyValueTypeIsAllowedType_24 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at APDClauseSearchResultsLV.pcf: line 28, column 46
    function verifyValueTypeIsAllowedType_24 ($$arg :  gw.api.iterator.IteratorBackingData) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at APDClauseSearchResultsLV.pcf: line 28, column 46
    function verifyValueTypeIsAllowedType_24 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at APDClauseSearchResultsLV.pcf: line 28, column 46
    function verifyValueType_25 () : void {
      var __valueTypeArg : ArrayList<APDClause>
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the valueType is not a valid type for use with an iterator
      // The valueType for an iterator must be an array or extend from List or IQueryBeanResult
      verifyValueTypeIsAllowedType_24(__valueTypeArg)
    }
    
    property get coverable () : APDCoverable {
      return getRequireValue("coverable", 0) as APDCoverable
    }
    
    property set coverable ($arg :  APDCoverable) {
      setRequireValue("coverable", 0, $arg)
    }
    
    property get coveragePatterns () : ArrayList<APDClause> {
      return getRequireValue("coveragePatterns", 0) as ArrayList<APDClause>
    }
    
    property set coveragePatterns ($arg :  ArrayList<APDClause>) {
      setRequireValue("coveragePatterns", 0, $arg)
    }
    
    property get searchCriteria () : gw.apd.model.APDClauseSearchCriteria {
      return getRequireValue("searchCriteria", 0) as gw.apd.model.APDClauseSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.apd.model.APDClauseSearchCriteria) {
      setRequireValue("searchCriteria", 0, $arg)
    }
    
    property get searchRange() : APDClauseCategory[] {
      return coverable.ClauseCategories.where(\cat -> ((searchCriteria.SearchType == CoveragePatternSearchType.TC_COVERAGE and not cat.Itemised)
          or searchCriteria.SearchType != CoveragePatternSearchType.TC_COVERAGE)
          and not cat.Hidden)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDClauseSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends APDClauseSearchResultsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PickerMenuItem (id=AddNewCategory) at APDClauseSearchResultsLV.pcf: line 50, column 23
    function action_8 () : void {
      APDNewLibraryCategoryPopup.push(coverable)
    }
    
    // 'action' attribute on PickerMenuItem (id=AddNewCategory) at APDClauseSearchResultsLV.pcf: line 50, column 23
    function action_dest_9 () : pcf.api.Destination {
      return pcf.APDNewLibraryCategoryPopup.createDestination(coverable)
    }
    
    // 'value' attribute on RangeCell (id=Category_Cell) at APDClauseSearchResultsLV.pcf: line 50, column 23
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      pattern.ClauseCategory = (__VALUE_TO_SET as entity.APDClauseCategory)
    }
    
    // 'value' attribute on TextCell (id=Coverage_Cell) at APDClauseSearchResultsLV.pcf: line 40, column 24
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      pattern.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'onPick' attribute on PickerMenuItem (id=AddNewCategory) at APDClauseSearchResultsLV.pcf: line 50, column 23
    function onPick_10 (PickedValue :  APDClauseCategory) : void {
      pattern.ClauseCategory = PickedValue
    }
    
    // 'valueRange' attribute on RangeCell (id=Category_Cell) at APDClauseSearchResultsLV.pcf: line 50, column 23
    function valueRange_14 () : java.lang.Object {
      return searchRange
    }
    
    // 'value' attribute on TextCell (id=ClauseType_Cell) at APDClauseSearchResultsLV.pcf: line 60, column 48
    function valueRoot_19 () : java.lang.Object {
      return pattern.Subtype
    }
    
    // 'value' attribute on TextCell (id=Coverage_Cell) at APDClauseSearchResultsLV.pcf: line 40, column 24
    function valueRoot_6 () : java.lang.Object {
      return pattern
    }
    
    // 'value' attribute on RangeCell (id=Category_Cell) at APDClauseSearchResultsLV.pcf: line 50, column 23
    function value_11 () : entity.APDClauseCategory {
      return pattern.ClauseCategory
    }
    
    // 'value' attribute on TextCell (id=ClauseType_Cell) at APDClauseSearchResultsLV.pcf: line 60, column 48
    function value_18 () : java.lang.String {
      return pattern.Subtype.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Coverage_Cell) at APDClauseSearchResultsLV.pcf: line 40, column 24
    function value_4 () : java.lang.String {
      return pattern.Name
    }
    
    // 'valueRange' attribute on RangeCell (id=Category_Cell) at APDClauseSearchResultsLV.pcf: line 50, column 23
    function verifyValueRangeIsAllowedType_15 ($$arg :  entity.APDClauseCategory[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Category_Cell) at APDClauseSearchResultsLV.pcf: line 50, column 23
    function verifyValueRangeIsAllowedType_15 ($$arg :  gw.api.database.IQueryBeanResult<entity.APDClauseCategory>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Category_Cell) at APDClauseSearchResultsLV.pcf: line 50, column 23
    function verifyValueRangeIsAllowedType_15 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Category_Cell) at APDClauseSearchResultsLV.pcf: line 50, column 23
    function verifyValueRange_16 () : void {
      var __valueRangeArg = searchRange
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_15(__valueRangeArg)
    }
    
    property get pattern () : APDClause {
      return getIteratedValue(1) as APDClause
    }
    
    
  }
  
  
}