package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/ScheduledItemCovTermInput.Package.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ScheduledItemCovTermInput_PackageExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/ScheduledItemCovTermInput.Package.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ScheduledItemCovTermInputExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeCell (id=TermValue_Cell) at ScheduledItemCovTermInput.Package.pcf: line 21, column 140
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      (packageCovTerm as gw.api.domain.covterm.PackageCovTerm<gw.api.domain.covterm.PackageCovTerm<gw.api.domain.covterm.PackageCovTerm>>).PackageValue = (__VALUE_TO_SET as gw.api.productmodel.CovTermPack<gw.api.domain.covterm.PackageCovTerm<gw.api.domain.covterm.PackageCovTerm>>)
    }
    
    // 'initialValue' attribute on Variable at ScheduledItemCovTermInput.Package.pcf: line 14, column 52
    function initialValue_0 () : gw.api.domain.covterm.PackageCovTerm {
      return covTerm as gw.api.domain.covterm.PackageCovTerm
    }
    
    // 'required' attribute on RangeCell (id=TermValue_Cell) at ScheduledItemCovTermInput.Package.pcf: line 21, column 140
    function required_1 () : java.lang.Boolean {
      return packageCovTerm.Pattern.Required
    }
    
    // 'valueRange' attribute on RangeCell (id=TermValue_Cell) at ScheduledItemCovTermInput.Package.pcf: line 21, column 140
    function valueRange_5 () : java.lang.Object {
      return gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(packageCovTerm as gw.api.domain.covterm.PackageCovTerm, true)
    }
    
    // 'value' attribute on RangeCell (id=TermValue_Cell) at ScheduledItemCovTermInput.Package.pcf: line 21, column 140
    function valueRoot_4 () : java.lang.Object {
      return (packageCovTerm as gw.api.domain.covterm.PackageCovTerm<gw.api.domain.covterm.PackageCovTerm<gw.api.domain.covterm.PackageCovTerm>>)
    }
    
    // 'value' attribute on RangeCell (id=TermValue_Cell) at ScheduledItemCovTermInput.Package.pcf: line 21, column 140
    function value_2 () : gw.api.productmodel.CovTermPack<gw.api.domain.covterm.PackageCovTerm<gw.api.domain.covterm.PackageCovTerm>> {
      return (packageCovTerm as gw.api.domain.covterm.PackageCovTerm<gw.api.domain.covterm.PackageCovTerm<gw.api.domain.covterm.PackageCovTerm>>).PackageValue
    }
    
    // 'valueRange' attribute on RangeCell (id=TermValue_Cell) at ScheduledItemCovTermInput.Package.pcf: line 21, column 140
    function verifyValueRangeIsAllowedType_6 ($$arg :  gw.api.productmodel.CovTermPack<gw.api.domain.covterm.PackageCovTerm<gw.api.domain.covterm.PackageCovTerm>>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=TermValue_Cell) at ScheduledItemCovTermInput.Package.pcf: line 21, column 140
    function verifyValueRangeIsAllowedType_6 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=TermValue_Cell) at ScheduledItemCovTermInput.Package.pcf: line 21, column 140
    function verifyValueRange_7 () : void {
      var __valueRangeArg = gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(packageCovTerm as gw.api.domain.covterm.PackageCovTerm, true)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_6(__valueRangeArg)
    }
    
    property get covTerm () : gw.api.domain.covterm.CovTerm {
      return getRequireValue("covTerm", 0) as gw.api.domain.covterm.CovTerm
    }
    
    property set covTerm ($arg :  gw.api.domain.covterm.CovTerm) {
      setRequireValue("covTerm", 0, $arg)
    }
    
    property get packageCovTerm () : gw.api.domain.covterm.PackageCovTerm {
      return getVariableValue("packageCovTerm", 0) as gw.api.domain.covterm.PackageCovTerm
    }
    
    property set packageCovTerm ($arg :  gw.api.domain.covterm.PackageCovTerm) {
      setVariableValue("packageCovTerm", 0, $arg)
    }
    
    
  }
  
  
}