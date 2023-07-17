package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/JobGroupRiskAnalysisLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class JobGroupRiskAnalysisLVExpressions {
  @javax.annotation.Generated("config/web/pcf/account/JobGroupRiskAnalysisLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends JobGroupRiskAnalysisLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get issue () : java.lang.Object {
      return getIteratedValue(1) as java.lang.Object
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/JobGroupRiskAnalysisLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class JobGroupRiskAnalysisLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RowIterator at JobGroupRiskAnalysisLV.pcf: line 14, column 38
    function value_0 () : java.lang.Object[] {
      return new Object[]{}
    }
    
    property get jobGroup () : JobGroup {
      return getRequireValue("jobGroup", 0) as JobGroup
    }
    
    property set jobGroup ($arg :  JobGroup) {
      setRequireValue("jobGroup", 0, $arg)
    }
    
    
  }
  
  
}