package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDCoveragePerilsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDCoveragePerilsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDCoveragePerilsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDCoveragePerilsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeCell (id=peril_Cell) at APDCoveragePerilsLV.pcf: line 31, column 33
    function sortValue_0 (peril :  APDCoveragePeril) : java.lang.Object {
      return peril.Peril
    }
    
    // 'value' attribute on TextCell (id=Limit_Cell) at APDCoveragePerilsLV.pcf: line 37, column 45
    function sortValue_1 (peril :  APDCoveragePeril) : java.lang.Object {
      return peril.PerilLimit
    }
    
    // 'value' attribute on TextCell (id=Deductible_Cell) at APDCoveragePerilsLV.pcf: line 43, column 45
    function sortValue_2 (peril :  APDCoveragePeril) : java.lang.Object {
      return peril.Deductible
    }
    
    // 'value' attribute on RangeCell (id=LimitAttribute_Cell) at APDCoveragePerilsLV.pcf: line 50, column 37
    function sortValue_3 (peril :  APDCoveragePeril) : java.lang.Object {
      return peril.LimitAttribute
    }
    
    // 'value' attribute on RangeCell (id=DeductibleAttribute_Cell) at APDCoveragePerilsLV.pcf: line 57, column 37
    function sortValue_4 (peril :  APDCoveragePeril) : java.lang.Object {
      return peril.DeductibleAttribute
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=perils) at APDCoveragePerilsLV.pcf: line 20, column 38
    function toCreateAndAdd_35 () : APDCoveragePeril {
      return coverage.createAndAddCoveragePeril()
    }
    
    // 'toRemove' attribute on RowIterator (id=perils) at APDCoveragePerilsLV.pcf: line 20, column 38
    function toRemove_36 (peril :  APDCoveragePeril) : void {
      coverage.removeFromPerils(peril)
    }
    
    // 'value' attribute on RowIterator (id=perils) at APDCoveragePerilsLV.pcf: line 20, column 38
    function value_37 () : APDCoveragePeril[] {
      return coverage.Perils
    }
    
    property get coverage () : APDCoverage {
      return getRequireValue("coverage", 0) as APDCoverage
    }
    
    property set coverage ($arg :  APDCoverage) {
      setRequireValue("coverage", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDCoveragePerilsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends APDCoveragePerilsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Limit_Cell) at APDCoveragePerilsLV.pcf: line 37, column 45
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      peril.PerilLimit = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextCell (id=Deductible_Cell) at APDCoveragePerilsLV.pcf: line 43, column 45
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      peril.Deductible = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on RangeCell (id=LimitAttribute_Cell) at APDCoveragePerilsLV.pcf: line 50, column 37
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      peril.LimitAttribute = (__VALUE_TO_SET as APDAttribute)
    }
    
    // 'value' attribute on RangeCell (id=DeductibleAttribute_Cell) at APDCoveragePerilsLV.pcf: line 57, column 37
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      peril.DeductibleAttribute = (__VALUE_TO_SET as APDAttribute)
    }
    
    // 'value' attribute on RangeCell (id=peril_Cell) at APDCoveragePerilsLV.pcf: line 31, column 33
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      peril.Peril = (__VALUE_TO_SET as APDPeril)
    }
    
    // 'optionLabel' attribute on RangeCell (id=peril_Cell) at APDCoveragePerilsLV.pcf: line 31, column 33
    function optionLabel_8 (VALUE :  APDPeril) : java.lang.String {
      return VALUE.Name
    }
    
    // 'valueRange' attribute on RangeCell (id=LimitAttribute_Cell) at APDCoveragePerilsLV.pcf: line 50, column 37
    function valueRange_24 () : java.lang.Object {
      return peril.LimitCandidates
    }
    
    // 'valueRange' attribute on RangeCell (id=peril_Cell) at APDCoveragePerilsLV.pcf: line 31, column 33
    function valueRange_9 () : java.lang.Object {
      return peril.AllPerils
    }
    
    // 'value' attribute on RangeCell (id=peril_Cell) at APDCoveragePerilsLV.pcf: line 31, column 33
    function valueRoot_7 () : java.lang.Object {
      return peril
    }
    
    // 'value' attribute on TextCell (id=Limit_Cell) at APDCoveragePerilsLV.pcf: line 37, column 45
    function value_13 () : java.math.BigDecimal {
      return peril.PerilLimit
    }
    
    // 'value' attribute on TextCell (id=Deductible_Cell) at APDCoveragePerilsLV.pcf: line 43, column 45
    function value_17 () : java.math.BigDecimal {
      return peril.Deductible
    }
    
    // 'value' attribute on RangeCell (id=LimitAttribute_Cell) at APDCoveragePerilsLV.pcf: line 50, column 37
    function value_21 () : APDAttribute {
      return peril.LimitAttribute
    }
    
    // 'value' attribute on RangeCell (id=DeductibleAttribute_Cell) at APDCoveragePerilsLV.pcf: line 57, column 37
    function value_28 () : APDAttribute {
      return peril.DeductibleAttribute
    }
    
    // 'value' attribute on RangeCell (id=peril_Cell) at APDCoveragePerilsLV.pcf: line 31, column 33
    function value_5 () : APDPeril {
      return peril.Peril
    }
    
    // 'valueRange' attribute on RangeCell (id=peril_Cell) at APDCoveragePerilsLV.pcf: line 31, column 33
    function verifyValueRangeIsAllowedType_10 ($$arg :  APDPeril[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=peril_Cell) at APDCoveragePerilsLV.pcf: line 31, column 33
    function verifyValueRangeIsAllowedType_10 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=peril_Cell) at APDCoveragePerilsLV.pcf: line 31, column 33
    function verifyValueRangeIsAllowedType_10 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=LimitAttribute_Cell) at APDCoveragePerilsLV.pcf: line 50, column 37
    function verifyValueRangeIsAllowedType_25 ($$arg :  APDAttribute[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=LimitAttribute_Cell) at APDCoveragePerilsLV.pcf: line 50, column 37
    function verifyValueRangeIsAllowedType_25 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=LimitAttribute_Cell) at APDCoveragePerilsLV.pcf: line 50, column 37
    function verifyValueRangeIsAllowedType_25 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=DeductibleAttribute_Cell) at APDCoveragePerilsLV.pcf: line 57, column 37
    function verifyValueRangeIsAllowedType_32 ($$arg :  APDAttribute[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=DeductibleAttribute_Cell) at APDCoveragePerilsLV.pcf: line 57, column 37
    function verifyValueRangeIsAllowedType_32 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=DeductibleAttribute_Cell) at APDCoveragePerilsLV.pcf: line 57, column 37
    function verifyValueRangeIsAllowedType_32 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=peril_Cell) at APDCoveragePerilsLV.pcf: line 31, column 33
    function verifyValueRange_11 () : void {
      var __valueRangeArg = peril.AllPerils
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_10(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=LimitAttribute_Cell) at APDCoveragePerilsLV.pcf: line 50, column 37
    function verifyValueRange_26 () : void {
      var __valueRangeArg = peril.LimitCandidates
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_25(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=DeductibleAttribute_Cell) at APDCoveragePerilsLV.pcf: line 57, column 37
    function verifyValueRange_33 () : void {
      var __valueRangeArg = peril.LimitCandidates
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_32(__valueRangeArg)
    }
    
    property get peril () : APDCoveragePeril {
      return getIteratedValue(1) as APDCoveragePeril
    }
    
    
  }
  
  
}