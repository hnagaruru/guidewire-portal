package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/common/CoverageSummaryLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CoverageSummaryLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/common/CoverageSummaryLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CoverageSummaryLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at CoverageSummaryLV.pcf: line 19, column 32
    function initialValue_0 () : java.lang.String {
      return coverable != null and gw.api.util.CurrencyUtil.isMultiCurrencyMode()?DisplayKey.get("Web.Policy.CurrencySuffix", coverable.PreferredCoverageCurrency):""
    }
    
    // 'label' attribute on TextCell (id=Empty_Cell) at CoverageSummaryLV.pcf: line 56, column 25
    function label_5 () : java.lang.Object {
      return DisplayKey.get("Web.PolicyLine.Coverage.CovTermValue", valueLabel)
    }
    
    // 'sortBy' attribute on IteratorSort at CoverageSummaryLV.pcf: line 28, column 24
    function sortBy_1 (clause :  gw.api.domain.Clause) : java.lang.Object {
      return clause.Pattern.CoverageCategory.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at CoverageSummaryLV.pcf: line 31, column 24
    function sortBy_2 (clause :  gw.api.domain.Clause) : java.lang.Object {
      return clause.Pattern.CoverageCategory.PublicID
    }
    
    // 'sortBy' attribute on IteratorSort at CoverageSummaryLV.pcf: line 34, column 24
    function sortBy_3 (clause :  gw.api.domain.Clause) : java.lang.Object {
      return clause.Pattern.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at CoverageSummaryLV.pcf: line 37, column 24
    function sortBy_4 (clause :  gw.api.domain.Clause) : java.lang.Object {
      return clause.Pattern.PublicID
    }
    
    // 'value' attribute on RowIterator at CoverageSummaryLV.pcf: line 25, column 42
    function value_21 () : gw.api.domain.Clause[] {
      return clauses.toArray( new gw.api.domain.Clause[clauses.Count] )
    }
    
    property get clauses () : List<gw.api.domain.Clause> {
      return getRequireValue("clauses", 0) as List<gw.api.domain.Clause>
    }
    
    property set clauses ($arg :  List<gw.api.domain.Clause>) {
      setRequireValue("clauses", 0, $arg)
    }
    
    property get coverable () : Coverable {
      return getRequireValue("coverable", 0) as Coverable
    }
    
    property set coverable ($arg :  Coverable) {
      setRequireValue("coverable", 0, $arg)
    }
    
    property get valueLabel () : java.lang.String {
      return getVariableValue("valueLabel", 0) as java.lang.String
    }
    
    property set valueLabel ($arg :  java.lang.String) {
      setVariableValue("valueLabel", 0, $arg)
    }
    
    function empty(): String {
            return ""
          }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/common/CoverageSummaryLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at CoverageSummaryLV.pcf: line 77, column 26
    function valueRoot_15 () : java.lang.Object {
      return covTerm
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at CoverageSummaryLV.pcf: line 77, column 26
    function value_14 () : java.lang.String {
      return covTerm.DisplayName
    }
    
    // 'value' attribute on TextCell (id=term_Cell) at CoverageSummaryLV.pcf: line 82, column 27
    function value_17 () : java.lang.String {
      return covTerm.DisplayValue
    }
    
    property get covTerm () : gw.api.domain.covterm.CovTerm {
      return getIteratedValue(2) as gw.api.domain.covterm.CovTerm
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/common/CoverageSummaryLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CoverageSummaryLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on TextCell (id=Empty_Cell) at CoverageSummaryLV.pcf: line 56, column 25
    function label_8 () : java.lang.Object {
      return DisplayKey.get("Web.PolicyLine.Coverage.CovTermValue", valueLabel)
    }
    
    // 'sortBy' attribute on IteratorSort at CoverageSummaryLV.pcf: line 66, column 26
    function sortBy_12 (covTerm :  gw.api.domain.covterm.CovTerm) : java.lang.Object {
      return covTerm.Pattern.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at CoverageSummaryLV.pcf: line 69, column 26
    function sortBy_13 (covTerm :  gw.api.domain.covterm.CovTerm) : java.lang.Object {
      return covTerm.Pattern.PublicID
    }
    
    // 'value' attribute on RowIterator at CoverageSummaryLV.pcf: line 63, column 53
    function value_20 () : gw.api.domain.covterm.CovTerm[] {
      return clause.CovTerms
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at CoverageSummaryLV.pcf: line 49, column 24
    function value_6 () : java.lang.Object {
      return (clause typeis Coverage) ? DisplayKey.get("Web.PolicyLine.Coverage", clause.Pattern) : clause.Pattern
    }
    
    // 'value' attribute on TextCell (id=Empty_Cell) at CoverageSummaryLV.pcf: line 56, column 25
    function value_9 () : java.lang.String {
      return empty()
    }
    
    property get clause () : gw.api.domain.Clause {
      return getIteratedValue(1) as gw.api.domain.Clause
    }
    
    
  }
  
  
}