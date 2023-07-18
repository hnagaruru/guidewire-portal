package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDCoverageClaimCostCategoriesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDCoverageClaimCostCategoriesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDCoverageClaimCostCategoriesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDCoverageClaimCostCategoriesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeCell (id=category_Cell) at APDCoverageClaimCostCategoriesLV.pcf: line 34, column 45
    function sortValue_0 (category :  APDCoverageClaim) : java.lang.Object {
      return category.ClaimCostCategory
    }
    
    // 'value' attribute on TypeKeyCell (id=CostType_Cell) at APDCoverageClaimCostCategoriesLV.pcf: line 39, column 36
    function sortValue_1 (category :  APDCoverageClaim) : java.lang.Object {
      return category.ClaimCostCategory.CostType
    }
    
    // 'value' attribute on TextCell (id=RestrictedPerilList_Cell) at APDCoverageClaimCostCategoriesLV.pcf: line 43, column 49
    function sortValue_2 (category :  APDCoverageClaim) : java.lang.Object {
      return category.RestrictedPerilList
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=claimCosts) at APDCoverageClaimCostCategoriesLV.pcf: line 23, column 38
    function toCreateAndAdd_18 () : APDCoverageClaim {
      return coverage.createAndAddCoverageClaim()
    }
    
    // 'toRemove' attribute on RowIterator (id=claimCosts) at APDCoverageClaimCostCategoriesLV.pcf: line 23, column 38
    function toRemove_19 (category :  APDCoverageClaim) : void {
      coverage.removeFromClaimCategories(category)
    }
    
    // 'value' attribute on RowIterator (id=claimCosts) at APDCoverageClaimCostCategoriesLV.pcf: line 23, column 38
    function value_20 () : APDCoverageClaim[] {
      return coverage.ClaimCategories
    }
    
    property get coverDefinitionHelper () : gw.apd.model.CoverDefinitionHelper {
      return getRequireValue("coverDefinitionHelper", 0) as gw.apd.model.CoverDefinitionHelper
    }
    
    property set coverDefinitionHelper ($arg :  gw.apd.model.CoverDefinitionHelper) {
      setRequireValue("coverDefinitionHelper", 0, $arg)
    }
    
    property get coverage () : APDCoverage {
      return getRequireValue("coverage", 0) as APDCoverage
    }
    
    property set coverage ($arg :  APDCoverage) {
      setRequireValue("coverage", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDCoverageClaimCostCategoriesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends APDCoverageClaimCostCategoriesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeCell (id=category_Cell) at APDCoverageClaimCostCategoriesLV.pcf: line 34, column 45
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      category.ClaimCostCategory = (__VALUE_TO_SET as APDClaimCostCategory)
    }
    
    // 'optionLabel' attribute on RangeCell (id=category_Cell) at APDCoverageClaimCostCategoriesLV.pcf: line 34, column 45
    function optionLabel_6 (VALUE :  APDClaimCostCategory) : java.lang.String {
      return VALUE.Name
    }
    
    // 'valueRange' attribute on RangeCell (id=category_Cell) at APDCoverageClaimCostCategoriesLV.pcf: line 34, column 45
    function valueRange_7 () : java.lang.Object {
      return coverDefinitionHelper.ClaimCostCategories
    }
    
    // 'value' attribute on TypeKeyCell (id=CostType_Cell) at APDCoverageClaimCostCategoriesLV.pcf: line 39, column 36
    function valueRoot_12 () : java.lang.Object {
      return category.ClaimCostCategory
    }
    
    // 'value' attribute on RangeCell (id=category_Cell) at APDCoverageClaimCostCategoriesLV.pcf: line 34, column 45
    function valueRoot_5 () : java.lang.Object {
      return category
    }
    
    // 'value' attribute on TypeKeyCell (id=CostType_Cell) at APDCoverageClaimCostCategoriesLV.pcf: line 39, column 36
    function value_11 () : APDCostType {
      return category.ClaimCostCategory.CostType
    }
    
    // 'value' attribute on TextCell (id=RestrictedPerilList_Cell) at APDCoverageClaimCostCategoriesLV.pcf: line 43, column 49
    function value_15 () : java.lang.String {
      return category.RestrictedPerilList
    }
    
    // 'value' attribute on RangeCell (id=category_Cell) at APDCoverageClaimCostCategoriesLV.pcf: line 34, column 45
    function value_3 () : APDClaimCostCategory {
      return category.ClaimCostCategory
    }
    
    // 'valueRange' attribute on RangeCell (id=category_Cell) at APDCoverageClaimCostCategoriesLV.pcf: line 34, column 45
    function verifyValueRangeIsAllowedType_8 ($$arg :  APDClaimCostCategory[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=category_Cell) at APDCoverageClaimCostCategoriesLV.pcf: line 34, column 45
    function verifyValueRangeIsAllowedType_8 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=category_Cell) at APDCoverageClaimCostCategoriesLV.pcf: line 34, column 45
    function verifyValueRangeIsAllowedType_8 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=category_Cell) at APDCoverageClaimCostCategoriesLV.pcf: line 34, column 45
    function verifyValueRange_9 () : void {
      var __valueRangeArg = coverDefinitionHelper.ClaimCostCategories
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_8(__valueRangeArg)
    }
    
    // 'valueType' attribute on TypeKeyCell (id=CostType_Cell) at APDCoverageClaimCostCategoriesLV.pcf: line 39, column 36
    function verifyValueType_14 () : void {
      var __valueTypeArg : APDCostType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    property get category () : APDCoverageClaim {
      return getIteratedValue(1) as APDCoverageClaim
    }
    
    
  }
  
  
}