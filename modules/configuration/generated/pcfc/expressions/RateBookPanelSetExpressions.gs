package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateBookPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateBookPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateBookPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RateBookPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=RatebookName_Cell) at RateBookPanelSet.pcf: line 66, column 42
    function action_19 () : void {
      RateBookDetail.go(ratebook)
    }
    
    // 'action' attribute on TextCell (id=RatebookName_Cell) at RateBookPanelSet.pcf: line 66, column 42
    function action_dest_20 () : pcf.api.Destination {
      return pcf.RateBookDetail.createDestination(ratebook)
    }
    
    // 'checkBoxVisible' attribute on RowIterator at RateBookPanelSet.pcf: line 57, column 79
    function checkBoxVisible_43 () : java.lang.Boolean {
      return perm.System.ratebookedit
    }
    
    // 'condition' attribute on ToolbarFlag at RateBookPanelSet.pcf: line 60, column 49
    function condition_18 () : java.lang.Boolean {
      return ratebook != null
    }
    
    // 'outputConversion' attribute on TextCell (id=RatebookPolicyLine_Cell) at RateBookPanelSet.pcf: line 93, column 44
    function outputConversion_36 (VALUE :  java.lang.String) : java.lang.String {
      return ratebook.policyLineCodeToDescription(VALUE) ?: DisplayKey.get("Web.Rating.Filter.Generic")
    }
    
    // 'value' attribute on TextCell (id=RatebookName_Cell) at RateBookPanelSet.pcf: line 66, column 42
    function valueRoot_22 () : java.lang.Object {
      return ratebook
    }
    
    // 'value' attribute on TextCell (id=RatebookName_Cell) at RateBookPanelSet.pcf: line 66, column 42
    function value_21 () : java.lang.String {
      return ratebook.BookName
    }
    
    // 'value' attribute on TextCell (id=RatebookCode_Cell) at RateBookPanelSet.pcf: line 70, column 42
    function value_24 () : java.lang.String {
      return ratebook.BookCode
    }
    
    // 'value' attribute on TextCell (id=RatebookEdition_Cell) at RateBookPanelSet.pcf: line 74, column 45
    function value_27 () : java.lang.String {
      return ratebook.BookEdition
    }
    
    // 'value' attribute on TypeKeyCell (id=RatebookStatus_Cell) at RateBookPanelSet.pcf: line 81, column 51
    function value_30 () : typekey.RateBookStatus {
      return ratebook.Status
    }
    
    // 'value' attribute on DateCell (id=RatebookEffDate_Cell) at RateBookPanelSet.pcf: line 87, column 47
    function value_33 () : java.util.Date {
      return ratebook.EffectiveDate
    }
    
    // 'value' attribute on TextCell (id=RatebookPolicyLine_Cell) at RateBookPanelSet.pcf: line 93, column 44
    function value_37 () : java.lang.String {
      return ratebook.PolicyLine
    }
    
    // 'value' attribute on TextCell (id=RatebookActivity_Cell) at RateBookPanelSet.pcf: line 97, column 53
    function value_40 () : java.lang.String {
      return ratebook.ActivityDisplayName
    }
    
    property get ratebook () : entity.RateBook {
      return getIteratedValue(1) as entity.RateBook
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateBookPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateBookPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=AddRateBookButton) at RateBookPanelSet.pcf: line 24, column 47
    function action_2 () : void {
      NewRateBook.go()
    }
    
    // 'action' attribute on ToolbarButton (id=ImportRateBook) at RateBookPanelSet.pcf: line 30, column 47
    function action_5 () : void {
      RateBookXMLImport.go(new gw.rating.rtm.util.WebFileWrapper())
    }
    
    // 'action' attribute on ToolbarButton (id=AddRateBookButton) at RateBookPanelSet.pcf: line 24, column 47
    function action_dest_3 () : pcf.api.Destination {
      return pcf.NewRateBook.createDestination()
    }
    
    // 'action' attribute on ToolbarButton (id=ImportRateBook) at RateBookPanelSet.pcf: line 30, column 47
    function action_dest_6 () : pcf.api.Destination {
      return pcf.RateBookXMLImport.createDestination(new gw.rating.rtm.util.WebFileWrapper())
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=RemoveCheckedRateBooks) at RateBookPanelSet.pcf: line 44, column 47
    function allCheckedRowsAction_10 (CheckedValues :  entity.RateBook[], CheckedValuesErrors :  java.util.Map) : void {
      rateBookSearchResultsHelper.delete(CheckedValues)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=MergeCheckedRateBooks) at RateBookPanelSet.pcf: line 37, column 47
    function allCheckedRowsAction_8 (CheckedValues :  entity.RateBook[], CheckedValuesErrors :  java.util.Map) : void {
      rateBookSearchResultsHelper.beginMerge(CheckedValues)
    }
    
    // 'initialValue' attribute on Variable at RateBookPanelSet.pcf: line 16, column 68
    function initialValue_0 () : gw.pcf.rating.ratebook.RateBookSearchResultsUIHelper {
      return new gw.pcf.rating.ratebook.RateBookSearchResultsUIHelper()
    }
    
    // 'value' attribute on TextCell (id=RatebookName_Cell) at RateBookPanelSet.pcf: line 66, column 42
    function sortValue_11 (ratebook :  entity.RateBook) : java.lang.Object {
      return ratebook.BookName
    }
    
    // 'value' attribute on TextCell (id=RatebookCode_Cell) at RateBookPanelSet.pcf: line 70, column 42
    function sortValue_12 (ratebook :  entity.RateBook) : java.lang.Object {
      return ratebook.BookCode
    }
    
    // 'value' attribute on TextCell (id=RatebookEdition_Cell) at RateBookPanelSet.pcf: line 74, column 45
    function sortValue_13 (ratebook :  entity.RateBook) : java.lang.Object {
      return ratebook.BookEdition
    }
    
    // 'value' attribute on TypeKeyCell (id=RatebookStatus_Cell) at RateBookPanelSet.pcf: line 81, column 51
    function sortValue_14 (ratebook :  entity.RateBook) : java.lang.Object {
      return ratebook.Status
    }
    
    // 'value' attribute on DateCell (id=RatebookEffDate_Cell) at RateBookPanelSet.pcf: line 87, column 47
    function sortValue_15 (ratebook :  entity.RateBook) : java.lang.Object {
      return ratebook.EffectiveDate
    }
    
    // 'value' attribute on TextCell (id=RatebookPolicyLine_Cell) at RateBookPanelSet.pcf: line 93, column 44
    function sortValue_16 (ratebook :  entity.RateBook) : java.lang.Object {
      return ratebook.PolicyLine
    }
    
    // 'value' attribute on TextCell (id=RatebookActivity_Cell) at RateBookPanelSet.pcf: line 97, column 53
    function sortValue_17 (ratebook :  entity.RateBook) : java.lang.Object {
      return ratebook.ActivityDisplayName
    }
    
    // 'value' attribute on RowIterator at RateBookPanelSet.pcf: line 57, column 79
    function value_44 () : gw.api.database.IQueryBeanResult<entity.RateBook> {
      return allRateBooks
    }
    
    // 'visible' attribute on ToolbarButton (id=AddRateBookButton) at RateBookPanelSet.pcf: line 24, column 47
    function visible_1 () : java.lang.Boolean {
      return perm.System.ratebookedit
    }
    
    property get allRateBooks () : gw.api.database.IQueryBeanResult<entity.RateBook> {
      return getRequireValue("allRateBooks", 0) as gw.api.database.IQueryBeanResult<entity.RateBook>
    }
    
    property set allRateBooks ($arg :  gw.api.database.IQueryBeanResult<entity.RateBook>) {
      setRequireValue("allRateBooks", 0, $arg)
    }
    
    property get initialRateBook () : RateBook {
      return getRequireValue("initialRateBook", 0) as RateBook
    }
    
    property set initialRateBook ($arg :  RateBook) {
      setRequireValue("initialRateBook", 0, $arg)
    }
    
    property get rateBookSearchResultsHelper () : gw.pcf.rating.ratebook.RateBookSearchResultsUIHelper {
      return getVariableValue("rateBookSearchResultsHelper", 0) as gw.pcf.rating.ratebook.RateBookSearchResultsUIHelper
    }
    
    property set rateBookSearchResultsHelper ($arg :  gw.pcf.rating.ratebook.RateBookSearchResultsUIHelper) {
      setVariableValue("rateBookSearchResultsHelper", 0, $arg)
    }
    
    
  }
  
  
}