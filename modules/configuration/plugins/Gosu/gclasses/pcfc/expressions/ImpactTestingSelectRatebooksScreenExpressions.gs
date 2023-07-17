package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/impact/ImpactTestingSelectRatebooksScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ImpactTestingSelectRatebooksScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/impact/ImpactTestingSelectRatebooksScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ImpactTestingSelectRatebooksScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=BackButton) at ImpactTestingSelectRatebooksScreen.pcf: line 19, column 104
    function action_2 () : void {
      (CurrentLocation as pcf.api.Wizard).previous()
    }
    
    // 'action' attribute on ToolbarButton (id=NextButton) at ImpactTestingSelectRatebooksScreen.pcf: line 24, column 83
    function action_4 () : void {
      (CurrentLocation as pcf.api.Wizard).next()
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=RemoveRateBooksButton) at ImpactTestingSelectRatebooksScreen.pcf: line 156, column 105
    function allCheckedRowsAction_43 (CheckedValues :  entity.ImpactTestingRateBook[], CheckedValuesErrors :  java.util.Map) : void {
      helper.unselectRateBooks(CheckedValues)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=AddActiveRateBooksButton) at ImpactTestingSelectRatebooksScreen.pcf: line 40, column 100
    function allCheckedRowsAction_5 (CheckedValues :  entity.RateBook[], CheckedValuesErrors :  java.util.Map) : void {
      helper.selectRateBooks(CheckedValues)
    }
    
    // 'available' attribute on ToolbarButton (id=NextButton) at ImpactTestingSelectRatebooksScreen.pcf: line 24, column 83
    function available_3 () : java.lang.Boolean {
      return testCase.Ratebooks.Count > 0
    }
    
    // 'initialValue' attribute on Variable at ImpactTestingSelectRatebooksScreen.pcf: line 13, column 65
    function initialValue_0 () : gw.pcf.rating.impact.ImpactTestingPrepareUIHelper {
      return new gw.pcf.rating.impact.ImpactTestingPrepareUIHelper(testCase)
    }
    
    // 'visible' attribute on ToolbarButton (id=BackButton) at ImpactTestingSelectRatebooksScreen.pcf: line 19, column 104
    function visible_1 () : java.lang.Boolean {
      return (CurrentLocation as pcf.api.Wizard).CurrentStepId != "ChoosePoliciesStep"
    }
    
    property get helper () : gw.pcf.rating.impact.ImpactTestingPrepareUIHelper {
      return getVariableValue("helper", 0) as gw.pcf.rating.impact.ImpactTestingPrepareUIHelper
    }
    
    property set helper ($arg :  gw.pcf.rating.impact.ImpactTestingPrepareUIHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get testCase () : ImpactTestingTestCase {
      return getRequireValue("testCase", 0) as ImpactTestingTestCase
    }
    
    property set testCase ($arg :  ImpactTestingTestCase) {
      setRequireValue("testCase", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/impact/ImpactTestingSelectRatebooksScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ListViewPanel2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ImpactTestingSelectRatebooksScreen.pcf: line 121, column 54
    function valueRoot_31 () : java.lang.Object {
      return inactiveRateBook
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ImpactTestingSelectRatebooksScreen.pcf: line 121, column 54
    function value_30 () : java.lang.String {
      return inactiveRateBook.BookName
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at ImpactTestingSelectRatebooksScreen.pcf: line 126, column 33
    function value_33 () : java.lang.String {
      return inactiveRateBook.BookCode
    }
    
    // 'value' attribute on TextCell (id=Edition_Cell) at ImpactTestingSelectRatebooksScreen.pcf: line 132, column 33
    function value_36 () : java.lang.String {
      return inactiveRateBook.BookEdition
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at ImpactTestingSelectRatebooksScreen.pcf: line 137, column 33
    function value_39 () : java.util.Date {
      return inactiveRateBook.EffectiveDate
    }
    
    property get inactiveRateBook () : entity.RateBook {
      return getIteratedValue(2) as entity.RateBook
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/impact/ImpactTestingSelectRatebooksScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ListViewPanel3ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=name_Cell) at ImpactTestingSelectRatebooksScreen.pcf: line 190, column 63
    function valueRoot_53 () : java.lang.Object {
      return selectedRateBook.RateBook
    }
    
    // 'value' attribute on TextCell (id=name_Cell) at ImpactTestingSelectRatebooksScreen.pcf: line 190, column 63
    function value_52 () : java.lang.String {
      return selectedRateBook.RateBook.BookName
    }
    
    // 'value' attribute on TextCell (id=code_Cell) at ImpactTestingSelectRatebooksScreen.pcf: line 196, column 33
    function value_55 () : java.lang.String {
      return selectedRateBook.RateBook.BookCode
    }
    
    // 'value' attribute on TextCell (id=edition_Cell) at ImpactTestingSelectRatebooksScreen.pcf: line 203, column 33
    function value_58 () : java.lang.String {
      return selectedRateBook.RateBook.BookEdition
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at ImpactTestingSelectRatebooksScreen.pcf: line 208, column 33
    function value_61 () : java.util.Date {
      return selectedRateBook.RateBook.EffectiveDate
    }
    
    property get selectedRateBook () : entity.ImpactTestingRateBook {
      return getIteratedValue(2) as entity.ImpactTestingRateBook
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/impact/ImpactTestingSelectRatebooksScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ImpactTestingSelectRatebooksScreen.pcf: line 64, column 52
    function valueRoot_12 () : java.lang.Object {
      return activeRateBook
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ImpactTestingSelectRatebooksScreen.pcf: line 64, column 52
    function value_11 () : java.lang.String {
      return activeRateBook.BookName
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at ImpactTestingSelectRatebooksScreen.pcf: line 69, column 33
    function value_14 () : java.lang.String {
      return activeRateBook.BookCode
    }
    
    // 'value' attribute on TextCell (id=Edition_Cell) at ImpactTestingSelectRatebooksScreen.pcf: line 75, column 33
    function value_17 () : java.lang.String {
      return activeRateBook.BookEdition
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at ImpactTestingSelectRatebooksScreen.pcf: line 80, column 33
    function value_20 () : java.util.Date {
      return activeRateBook.EffectiveDate
    }
    
    property get activeRateBook () : entity.RateBook {
      return getIteratedValue(2) as entity.RateBook
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/impact/ImpactTestingSelectRatebooksScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListViewPanel2ExpressionsImpl extends ImpactTestingSelectRatebooksScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ImpactTestingSelectRatebooksScreen.pcf: line 106, column 44
    function initialValue_25 () : List<RateBook> {
      return helper.AllSelectableStageOrApprovedRateBooks
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ImpactTestingSelectRatebooksScreen.pcf: line 121, column 54
    function sortValue_26 (inactiveRateBook :  entity.RateBook) : java.lang.Object {
      return inactiveRateBook.BookName
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at ImpactTestingSelectRatebooksScreen.pcf: line 126, column 33
    function sortValue_27 (inactiveRateBook :  entity.RateBook) : java.lang.Object {
      return inactiveRateBook.BookCode
    }
    
    // 'value' attribute on TextCell (id=Edition_Cell) at ImpactTestingSelectRatebooksScreen.pcf: line 132, column 33
    function sortValue_28 (inactiveRateBook :  entity.RateBook) : java.lang.Object {
      return inactiveRateBook.BookEdition
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at ImpactTestingSelectRatebooksScreen.pcf: line 137, column 33
    function sortValue_29 (inactiveRateBook :  entity.RateBook) : java.lang.Object {
      return inactiveRateBook.EffectiveDate
    }
    
    // 'value' attribute on RowIterator (id=AvailableStageApprovedRateBooksList) at ImpactTestingSelectRatebooksScreen.pcf: line 115, column 65
    function value_42 () : java.util.List<entity.RateBook> {
      return AvailableStageApprovedRateBooks
    }
    
    property get AvailableStageApprovedRateBooks () : List<RateBook> {
      return getVariableValue("AvailableStageApprovedRateBooks", 1) as List<RateBook>
    }
    
    property set AvailableStageApprovedRateBooks ($arg :  List<RateBook>) {
      setVariableValue("AvailableStageApprovedRateBooks", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/impact/ImpactTestingSelectRatebooksScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListViewPanel3ExpressionsImpl extends ImpactTestingSelectRatebooksScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ImpactTestingSelectRatebooksScreen.pcf: line 165, column 57
    function initialValue_44 () : List<ImpactTestingRateBook> {
      return testCase.Ratebooks?.toList()
    }
    
    // 'sortBy' attribute on IteratorSort at ImpactTestingSelectRatebooksScreen.pcf: line 177, column 32
    function sortBy_45 (selectedRateBook :  entity.ImpactTestingRateBook) : java.lang.Object {
      return selectedRateBook.RateBook.BookName
    }
    
    // 'sortBy' attribute on IteratorSort at ImpactTestingSelectRatebooksScreen.pcf: line 180, column 32
    function sortBy_46 (selectedRateBook :  entity.ImpactTestingRateBook) : java.lang.Object {
      return selectedRateBook.RateBook.BookCode
    }
    
    // 'sortBy' attribute on IteratorSort at ImpactTestingSelectRatebooksScreen.pcf: line 183, column 32
    function sortBy_47 (selectedRateBook :  entity.ImpactTestingRateBook) : java.lang.Object {
      return selectedRateBook.RateBook.BookEdition
    }
    
    // 'value' attribute on TextCell (id=name_Cell) at ImpactTestingSelectRatebooksScreen.pcf: line 190, column 63
    function sortValue_48 (selectedRateBook :  entity.ImpactTestingRateBook) : java.lang.Object {
      return selectedRateBook.RateBook.BookName
    }
    
    // 'value' attribute on TextCell (id=code_Cell) at ImpactTestingSelectRatebooksScreen.pcf: line 196, column 33
    function sortValue_49 (selectedRateBook :  entity.ImpactTestingRateBook) : java.lang.Object {
      return selectedRateBook.RateBook.BookCode
    }
    
    // 'value' attribute on TextCell (id=edition_Cell) at ImpactTestingSelectRatebooksScreen.pcf: line 203, column 33
    function sortValue_50 (selectedRateBook :  entity.ImpactTestingRateBook) : java.lang.Object {
      return selectedRateBook.RateBook.BookEdition
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at ImpactTestingSelectRatebooksScreen.pcf: line 208, column 33
    function sortValue_51 (selectedRateBook :  entity.ImpactTestingRateBook) : java.lang.Object {
      return selectedRateBook.RateBook.EffectiveDate
    }
    
    // 'value' attribute on RowIterator (id=SelectedRateBooksList) at ImpactTestingSelectRatebooksScreen.pcf: line 174, column 78
    function value_64 () : java.util.List<entity.ImpactTestingRateBook> {
      return SelectedRateBooks
    }
    
    property get SelectedRateBooks () : List<ImpactTestingRateBook> {
      return getVariableValue("SelectedRateBooks", 1) as List<ImpactTestingRateBook>
    }
    
    property set SelectedRateBooks ($arg :  List<ImpactTestingRateBook>) {
      setVariableValue("SelectedRateBooks", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/impact/ImpactTestingSelectRatebooksScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListViewPanelExpressionsImpl extends ImpactTestingSelectRatebooksScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ImpactTestingSelectRatebooksScreen.pcf: line 49, column 44
    function initialValue_6 () : List<RateBook> {
      return helper.AllSelectableActiveRateBooks
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at ImpactTestingSelectRatebooksScreen.pcf: line 80, column 33
    function sortValue_10 (activeRateBook :  entity.RateBook) : java.lang.Object {
      return activeRateBook.EffectiveDate
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ImpactTestingSelectRatebooksScreen.pcf: line 64, column 52
    function sortValue_7 (activeRateBook :  entity.RateBook) : java.lang.Object {
      return activeRateBook.BookName
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at ImpactTestingSelectRatebooksScreen.pcf: line 69, column 33
    function sortValue_8 (activeRateBook :  entity.RateBook) : java.lang.Object {
      return activeRateBook.BookCode
    }
    
    // 'value' attribute on TextCell (id=Edition_Cell) at ImpactTestingSelectRatebooksScreen.pcf: line 75, column 33
    function sortValue_9 (activeRateBook :  entity.RateBook) : java.lang.Object {
      return activeRateBook.BookEdition
    }
    
    // 'value' attribute on RowIterator (id=AvailableActiveRateBooksList) at ImpactTestingSelectRatebooksScreen.pcf: line 58, column 65
    function value_23 () : java.util.List<entity.RateBook> {
      return availableActiveRateBooks
    }
    
    property get availableActiveRateBooks () : List<RateBook> {
      return getVariableValue("availableActiveRateBooks", 1) as List<RateBook>
    }
    
    property set availableActiveRateBooks ($arg :  List<RateBook>) {
      setVariableValue("availableActiveRateBooks", 1, $arg)
    }
    
    
  }
  
  
}