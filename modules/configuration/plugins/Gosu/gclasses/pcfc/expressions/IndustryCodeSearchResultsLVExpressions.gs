package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/IndustryCodeSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IndustryCodeSearchResultsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/search/IndustryCodeSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IndustryCodeSearchResultsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at IndustryCodeSearchResultsLV.pcf: line 23, column 25
    function sortValue_0 (industryCode :  entity.IndustryCode) : java.lang.Object {
      return industryCode.Code
    }
    
    // 'value' attribute on TextCell (id=Classification_Cell) at IndustryCodeSearchResultsLV.pcf: line 29, column 48
    function sortValue_1 (industryCode :  entity.IndustryCode) : java.lang.Object {
      return industryCode.Classification
    }
    
    // 'value' attribute on RowIterator at IndustryCodeSearchResultsLV.pcf: line 17, column 79
    function value_9 () : gw.api.database.IQueryBeanResult<entity.IndustryCode> {
      return industryCodes
    }
    
    property get industryCodes () : gw.api.database.IQueryBeanResult<IndustryCode> {
      return getRequireValue("industryCodes", 0) as gw.api.database.IQueryBeanResult<IndustryCode>
    }
    
    property set industryCodes ($arg :  gw.api.database.IQueryBeanResult<IndustryCode>) {
      setRequireValue("industryCodes", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/search/IndustryCodeSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends IndustryCodeSearchResultsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickValue' attribute on RowIterator at IndustryCodeSearchResultsLV.pcf: line 17, column 79
    function pickValue_8 () : IndustryCode {
      return industryCode
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at IndustryCodeSearchResultsLV.pcf: line 23, column 25
    function valueRoot_3 () : java.lang.Object {
      return industryCode
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at IndustryCodeSearchResultsLV.pcf: line 23, column 25
    function value_2 () : java.lang.String {
      return industryCode.Code
    }
    
    // 'value' attribute on TextCell (id=Classification_Cell) at IndustryCodeSearchResultsLV.pcf: line 29, column 48
    function value_5 () : java.lang.String {
      return industryCode.Classification
    }
    
    property get industryCode () : entity.IndustryCode {
      return getIteratedValue(1) as entity.IndustryCode
    }
    
    
  }
  
  
}