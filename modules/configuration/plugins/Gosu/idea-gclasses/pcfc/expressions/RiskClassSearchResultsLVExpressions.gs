package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/RiskClassSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RiskClassSearchResultsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/search/RiskClassSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RiskClassSearchResultsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickValue' attribute on RowIterator at RiskClassSearchResultsLV.pcf: line 19, column 76
    function pickValue_8 () : RiskClass {
      return riskClass
    }
    
    // 'value' attribute on TextCell (id=Hazard_Cell) at RiskClassSearchResultsLV.pcf: line 25, column 42
    function valueRoot_3 () : java.lang.Object {
      return riskClass
    }
    
    // 'value' attribute on TextCell (id=Hazard_Cell) at RiskClassSearchResultsLV.pcf: line 25, column 42
    function value_2 () : java.lang.Integer {
      return riskClass.Hazard
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RiskClassSearchResultsLV.pcf: line 30, column 42
    function value_5 () : java.lang.String {
      return riskClass.Description
    }
    
    property get riskClass () : entity.RiskClass {
      return getIteratedValue(1) as entity.RiskClass
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/search/RiskClassSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RiskClassSearchResultsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Hazard_Cell) at RiskClassSearchResultsLV.pcf: line 25, column 42
    function sortValue_0 (riskClass :  entity.RiskClass) : java.lang.Object {
      return riskClass.Hazard
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RiskClassSearchResultsLV.pcf: line 30, column 42
    function sortValue_1 (riskClass :  entity.RiskClass) : java.lang.Object {
      return riskClass.Description
    }
    
    // 'value' attribute on RowIterator at RiskClassSearchResultsLV.pcf: line 19, column 76
    function value_9 () : gw.api.database.IQueryBeanResult<entity.RiskClass> {
      return riskClasses
    }
    
    property get policyLinePattern () : gw.api.productmodel.PolicyLinePattern {
      return getRequireValue("policyLinePattern", 0) as gw.api.productmodel.PolicyLinePattern
    }
    
    property set policyLinePattern ($arg :  gw.api.productmodel.PolicyLinePattern) {
      setRequireValue("policyLinePattern", 0, $arg)
    }
    
    property get riskClasses () : gw.api.database.IQueryBeanResult<RiskClass> {
      return getRequireValue("riskClasses", 0) as gw.api.database.IQueryBeanResult<RiskClass>
    }
    
    property set riskClasses ($arg :  gw.api.database.IQueryBeanResult<RiskClass>) {
      setRequireValue("riskClasses", 0, $arg)
    }
    
    
  }
  
  
}