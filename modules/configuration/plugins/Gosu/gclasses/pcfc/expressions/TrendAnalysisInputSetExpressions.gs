package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/common/TrendAnalysisInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TrendAnalysisInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/job/common/TrendAnalysisInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TrendAnalysisInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at TrendAnalysisInputSet.pcf: line 16, column 51
    function initialValue_0 () : gw.job.audit.ReportingTrendSynopsis {
      return policyPeriod.reportingTrendSynopsis(usePersistedTrendValues)
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalEstimatedPremium_Input) at TrendAnalysisInputSet.pcf: line 24, column 47
    function valueRoot_2 () : java.lang.Object {
      return synopsis
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalEstimatedPremium_Input) at TrendAnalysisInputSet.pcf: line 24, column 47
    function value_1 () : gw.pl.currency.MonetaryAmount {
      return synopsis.TotalEstimatedPremium
    }
    
    // 'value' attribute on TextInput (id=DaysReported_Input) at TrendAnalysisInputSet.pcf: line 44, column 38
    function value_10 () : java.lang.Integer {
      return synopsis.DaysReported
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalReportedPremium_Input) at TrendAnalysisInputSet.pcf: line 30, column 46
    function value_4 () : gw.pl.currency.MonetaryAmount {
      return synopsis.TotalReportedPremium
    }
    
    // 'value' attribute on TextInput (id=PremiumRatio_Input) at TrendAnalysisInputSet.pcf: line 37, column 41
    function value_7 () : java.math.BigDecimal {
      return synopsis.PremiumRatio
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get synopsis () : gw.job.audit.ReportingTrendSynopsis {
      return getVariableValue("synopsis", 0) as gw.job.audit.ReportingTrendSynopsis
    }
    
    property set synopsis ($arg :  gw.job.audit.ReportingTrendSynopsis) {
      setVariableValue("synopsis", 0, $arg)
    }
    
    property get usePersistedTrendValues () : boolean {
      return getRequireValue("usePersistedTrendValues", 0) as java.lang.Boolean
    }
    
    property set usePersistedTrendValues ($arg :  boolean) {
      setRequireValue("usePersistedTrendValues", 0, $arg)
    }
    
    
  }
  
  
}