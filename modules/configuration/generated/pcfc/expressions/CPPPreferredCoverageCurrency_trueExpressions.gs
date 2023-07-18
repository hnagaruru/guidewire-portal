package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cpp/policy/CPPPreferredCoverageCurrency.true.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CPPPreferredCoverageCurrency_trueExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cpp/policy/CPPPreferredCoverageCurrency.true.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CPPPreferredCoverageCurrencyExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeCell (id=Currency_Cell) at CPPPreferredCoverageCurrency.true.pcf: line 25, column 36
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverable.PreferredCoverageCurrency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'initialValue' attribute on Variable at CPPPreferredCoverageCurrency.true.pcf: line 17, column 32
    function initialValue_0 () : entity.Coverable {
      return policyLine as Coverable
    }
    
    // 'onChange' attribute on PostOnChange at CPPPreferredCoverageCurrency.true.pcf: line 27, column 137
    function onChange_1 () : void {
      gw.web.policy.CoverableCoverageCurrencySynchronizer.synchronizeCurrencies(policyLine as Coverable, jobWizardHelper)
    }
    
    // 'showConfirmMessage' attribute on RangeCell (id=Currency_Cell) at CPPPreferredCoverageCurrency.true.pcf: line 25, column 36
    function showConfirmMessage_2 () : java.lang.Boolean {
      return coverable.CoveragesFromCoverable.length > 0
    }
    
    // 'valueRange' attribute on RangeCell (id=Currency_Cell) at CPPPreferredCoverageCurrency.true.pcf: line 25, column 36
    function valueRange_6 () : java.lang.Object {
      return gw.web.policy.CoverableCoverageCurrencySynchronizer.getAvailableCurrencies(coverable)
    }
    
    // 'value' attribute on RangeCell (id=Currency_Cell) at CPPPreferredCoverageCurrency.true.pcf: line 25, column 36
    function valueRoot_5 () : java.lang.Object {
      return coverable
    }
    
    // 'value' attribute on RangeCell (id=Currency_Cell) at CPPPreferredCoverageCurrency.true.pcf: line 25, column 36
    function value_3 () : typekey.Currency {
      return coverable.PreferredCoverageCurrency
    }
    
    // 'valueRange' attribute on RangeCell (id=Currency_Cell) at CPPPreferredCoverageCurrency.true.pcf: line 25, column 36
    function verifyValueRangeIsAllowedType_7 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Currency_Cell) at CPPPreferredCoverageCurrency.true.pcf: line 25, column 36
    function verifyValueRangeIsAllowedType_7 ($$arg :  typekey.Currency[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Currency_Cell) at CPPPreferredCoverageCurrency.true.pcf: line 25, column 36
    function verifyValueRange_8 () : void {
      var __valueRangeArg = gw.web.policy.CoverableCoverageCurrencySynchronizer.getAvailableCurrencies(coverable)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_7(__valueRangeArg)
    }
    
    property get coverable () : entity.Coverable {
      return getVariableValue("coverable", 0) as entity.Coverable
    }
    
    property set coverable ($arg :  entity.Coverable) {
      setVariableValue("coverable", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get policyLine () : PolicyLine {
      return getRequireValue("policyLine", 0) as PolicyLine
    }
    
    property set policyLine ($arg :  PolicyLine) {
      setRequireValue("policyLine", 0, $arg)
    }
    
    
  }
  
  
}