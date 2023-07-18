package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDClauseCategoryLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDClauseCategoryLVExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDClauseCategoryLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDClauseCategoryLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on TextCell (id=CategoryName_Cell) at APDClauseCategoryLV.pcf: line 47, column 34
    function label_2 () : java.lang.Object {
      return DisplayKey.get( "Web.APDClauseCategoryInputSet.Name" )
    }
    
    // 'label' attribute on TextCell (id=CategoryDescription_Cell) at APDClauseCategoryLV.pcf: line 51, column 41
    function label_4 () : java.lang.Object {
      return DisplayKey.get( "Web.APDClauseCategoryInputSet.Description" )
    }
    
    // 'sortBy' attribute on IteratorSort at APDClauseCategoryLV.pcf: line 33, column 24
    function sortBy_0 (category :  APDClauseCategory) : java.lang.Object {
      return category.Sequence
    }
    
    // 'sortBy' attribute on IteratorSort at APDClauseCategoryLV.pcf: line 36, column 24
    function sortBy_1 (category :  APDClauseCategory) : java.lang.Object {
      return category.Name
    }
    
    // 'value' attribute on TextCell (id=CategoryName_Cell) at APDClauseCategoryLV.pcf: line 47, column 34
    function sortValue_3 (category :  APDClauseCategory) : java.lang.Object {
      return category.Name
    }
    
    // 'value' attribute on TextCell (id=CategoryDescription_Cell) at APDClauseCategoryLV.pcf: line 51, column 41
    function sortValue_5 (category :  APDClauseCategory) : java.lang.Object {
      return category.Description
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=CategoryIterator) at APDClauseCategoryLV.pcf: line 25, column 39
    function toCreateAndAdd_19 () : APDClauseCategory {
      return coverable.addClauseCategory(false)
    }
    
    // 'toRemove' attribute on RowIterator (id=CategoryIterator) at APDClauseCategoryLV.pcf: line 25, column 39
    function toRemove_20 (category :  APDClauseCategory) : void {
      coverable.removeFromClauseCategories(category)
    }
    
    // 'value' attribute on RowIterator (id=CategoryIterator) at APDClauseCategoryLV.pcf: line 25, column 39
    function value_21 () : APDClauseCategory[] {
      return coverable.ClauseCategories
    }
    
    property get coverable () : APDCoverable {
      return getRequireValue("coverable", 0) as APDCoverable
    }
    
    property set coverable ($arg :  APDCoverable) {
      setRequireValue("coverable", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDClauseCategoryLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends APDClauseCategoryLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'checkBoxVisible' attribute on RowIterator (id=CategoryIterator) at APDClauseCategoryLV.pcf: line 25, column 39
    function checkBoxVisible_18 () : java.lang.Boolean {
      return CurrentLocation.InEditMode
    }
    
    // 'condition' attribute on ToolbarFlag at APDClauseCategoryLV.pcf: line 28, column 35
    function condition_6 () : java.lang.Boolean {
      return category.ClausesUsingThisCategory != null && category.ClausesUsingThisCategory.HasElements
    }
    
    // 'condition' attribute on ToolbarFlag at APDClauseCategoryLV.pcf: line 39, column 28
    function condition_7 () : java.lang.Boolean {
      return category.Itemised == true
    }
    
    // 'label' attribute on TextCell (id=CategoryDescription_Cell) at APDClauseCategoryLV.pcf: line 51, column 41
    function label_13 () : java.lang.Object {
      return DisplayKey.get( "Web.APDClauseCategoryInputSet.Description" )
    }
    
    // 'label' attribute on TextCell (id=CategoryName_Cell) at APDClauseCategoryLV.pcf: line 47, column 34
    function label_8 () : java.lang.Object {
      return DisplayKey.get( "Web.APDClauseCategoryInputSet.Name" )
    }
    
    // 'value' attribute on TextCell (id=CategoryName_Cell) at APDClauseCategoryLV.pcf: line 47, column 34
    function valueRoot_10 () : java.lang.Object {
      return category
    }
    
    // 'value' attribute on TextCell (id=CategoryDescription_Cell) at APDClauseCategoryLV.pcf: line 51, column 41
    function value_14 () : java.lang.String {
      return category.Description
    }
    
    // 'value' attribute on TextCell (id=CategoryName_Cell) at APDClauseCategoryLV.pcf: line 47, column 34
    function value_9 () : java.lang.String {
      return category.Name
    }
    
    property get category () : APDClauseCategory {
      return getIteratedValue(1) as APDClauseCategory
    }
    
    
  }
  
  
}