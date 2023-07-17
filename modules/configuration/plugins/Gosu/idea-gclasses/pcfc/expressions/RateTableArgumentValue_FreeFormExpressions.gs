package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateTableArgumentValue.FreeForm.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateTableArgumentValue_FreeFormExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableArgumentValue.FreeForm.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateTableArgumentValueExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=FreeFormStepValue_Cell) at RateTableArgumentValue.FreeForm.pcf: line 16, column 67
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      rateTableArgSrcHelper.ArgumentSourceWrapper = (__VALUE_TO_SET as gw.rating.rtm.util.AvailableAttributePresenter)
    }
    
    // 'outputConversion' attribute on TextCell (id=FreeFormStepValue_Cell) at RateTableArgumentValue.FreeForm.pcf: line 16, column 67
    function outputConversion_0 (VALUE :  gw.rating.rtm.util.AvailableAttributePresenter) : java.lang.String {
      return VALUE.Label
    }
    
    // 'value' attribute on TextCell (id=FreeFormStepValue_Cell) at RateTableArgumentValue.FreeForm.pcf: line 16, column 67
    function valueRoot_3 () : java.lang.Object {
      return rateTableArgSrcHelper
    }
    
    // 'value' attribute on TextCell (id=FreeFormStepValue_Cell) at RateTableArgumentValue.FreeForm.pcf: line 16, column 67
    function value_1 () : gw.rating.rtm.util.AvailableAttributePresenter {
      return rateTableArgSrcHelper.ArgumentSourceWrapper
    }
    
    property get rateTableArgSrcHelper () : gw.pcf.rating.rtm.RateTableArgumentSourceHelper {
      return getRequireValue("rateTableArgSrcHelper", 0) as gw.pcf.rating.rtm.RateTableArgumentSourceHelper
    }
    
    property set rateTableArgSrcHelper ($arg :  gw.pcf.rating.rtm.RateTableArgumentSourceHelper) {
      setRequireValue("rateTableArgSrcHelper", 0, $arg)
    }
    
    
  }
  
  
}