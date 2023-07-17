package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateTableArgumentValue.Typelist.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateTableArgumentValue_TypelistExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableArgumentValue.Typelist.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateTableArgumentValueExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeCell (id=RateTableArgumentSourceList_Cell) at RateTableArgumentValue.Typelist.pcf: line 17, column 67
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      rateTableArgSrcHelper.ArgumentSourceWrapper = (__VALUE_TO_SET as gw.rating.rtm.util.AvailableAttributePresenter)
    }
    
    // 'optionLabel' attribute on RangeCell (id=RateTableArgumentSourceList_Cell) at RateTableArgumentValue.Typelist.pcf: line 17, column 67
    function optionLabel_3 (VALUE :  gw.rating.rtm.util.AvailableAttributePresenter) : java.lang.String {
      return VALUE.Label
    }
    
    // 'valueRange' attribute on RangeCell (id=RateTableArgumentSourceList_Cell) at RateTableArgumentValue.Typelist.pcf: line 17, column 67
    function valueRange_4 () : java.lang.Object {
      return rateTableArgSrcHelper.AvailableUsages
    }
    
    // 'value' attribute on RangeCell (id=RateTableArgumentSourceList_Cell) at RateTableArgumentValue.Typelist.pcf: line 17, column 67
    function valueRoot_2 () : java.lang.Object {
      return rateTableArgSrcHelper
    }
    
    // 'value' attribute on RangeCell (id=RateTableArgumentSourceList_Cell) at RateTableArgumentValue.Typelist.pcf: line 17, column 67
    function value_0 () : gw.rating.rtm.util.AvailableAttributePresenter {
      return rateTableArgSrcHelper.ArgumentSourceWrapper
    }
    
    // 'valueRange' attribute on RangeCell (id=RateTableArgumentSourceList_Cell) at RateTableArgumentValue.Typelist.pcf: line 17, column 67
    function verifyValueRangeIsAllowedType_5 ($$arg :  gw.rating.rtm.util.AvailableAttributePresenter[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=RateTableArgumentSourceList_Cell) at RateTableArgumentValue.Typelist.pcf: line 17, column 67
    function verifyValueRangeIsAllowedType_5 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=RateTableArgumentSourceList_Cell) at RateTableArgumentValue.Typelist.pcf: line 17, column 67
    function verifyValueRange_6 () : void {
      var __valueRangeArg = rateTableArgSrcHelper.AvailableUsages
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_5(__valueRangeArg)
    }
    
    property get rateTableArgSrcHelper () : gw.pcf.rating.rtm.RateTableArgumentSourceHelper {
      return getRequireValue("rateTableArgSrcHelper", 0) as gw.pcf.rating.rtm.RateTableArgumentSourceHelper
    }
    
    property set rateTableArgSrcHelper ($arg :  gw.pcf.rating.rtm.RateTableArgumentSourceHelper) {
      setRequireValue("rateTableArgSrcHelper", 0, $arg)
    }
    
    
  }
  
  
}