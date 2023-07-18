package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateTableArgumentValue.Coverage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateTableArgumentValue_CoverageExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableArgumentValue.Coverage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateTableArgumentValueExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeCell (id=RateTableArgumentSourceList_Cell) at RateTableArgumentValue.Coverage.pcf: line 18, column 67
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      rateTableArgSrcHelper.ArgumentSourceWrapper = (__VALUE_TO_SET as gw.rating.rtm.util.AvailableAttributePresenter)
    }
    
    // 'helpText' attribute on RangeCell (id=RateTableArgumentSourceList_Cell) at RateTableArgumentValue.Coverage.pcf: line 18, column 67
    function helpText_0 () : java.lang.String {
      return (rateTableArgSrcHelper.AvailableUsages.Empty) ? DisplayKey.get("Web.Rating.Flow.NoUsages") : null
    }
    
    // 'optionLabel' attribute on RangeCell (id=RateTableArgumentSourceList_Cell) at RateTableArgumentValue.Coverage.pcf: line 18, column 67
    function optionLabel_4 (VALUE :  gw.rating.rtm.util.AvailableAttributePresenter) : java.lang.String {
      return VALUE.Label
    }
    
    // 'valueRange' attribute on RangeCell (id=RateTableArgumentSourceList_Cell) at RateTableArgumentValue.Coverage.pcf: line 18, column 67
    function valueRange_5 () : java.lang.Object {
      return rateTableArgSrcHelper.AvailableUsages
    }
    
    // 'value' attribute on RangeCell (id=RateTableArgumentSourceList_Cell) at RateTableArgumentValue.Coverage.pcf: line 18, column 67
    function valueRoot_3 () : java.lang.Object {
      return rateTableArgSrcHelper
    }
    
    // 'value' attribute on RangeCell (id=RateTableArgumentSourceList_Cell) at RateTableArgumentValue.Coverage.pcf: line 18, column 67
    function value_1 () : gw.rating.rtm.util.AvailableAttributePresenter {
      return rateTableArgSrcHelper.ArgumentSourceWrapper
    }
    
    // 'valueRange' attribute on RangeCell (id=RateTableArgumentSourceList_Cell) at RateTableArgumentValue.Coverage.pcf: line 18, column 67
    function verifyValueRangeIsAllowedType_6 ($$arg :  gw.rating.rtm.util.AvailableAttributePresenter[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=RateTableArgumentSourceList_Cell) at RateTableArgumentValue.Coverage.pcf: line 18, column 67
    function verifyValueRangeIsAllowedType_6 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=RateTableArgumentSourceList_Cell) at RateTableArgumentValue.Coverage.pcf: line 18, column 67
    function verifyValueRange_7 () : void {
      var __valueRangeArg = rateTableArgSrcHelper.AvailableUsages
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_6(__valueRangeArg)
    }
    
    property get rateTableArgSrcHelper () : gw.pcf.rating.rtm.RateTableArgumentSourceHelper {
      return getRequireValue("rateTableArgSrcHelper", 0) as gw.pcf.rating.rtm.RateTableArgumentSourceHelper
    }
    
    property set rateTableArgSrcHelper ($arg :  gw.pcf.rating.rtm.RateTableArgumentSourceHelper) {
      setRequireValue("rateTableArgSrcHelper", 0, $arg)
    }
    
    
  }
  
  
}