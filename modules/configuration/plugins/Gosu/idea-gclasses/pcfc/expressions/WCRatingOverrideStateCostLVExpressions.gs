package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/ratingoverride/WCRatingOverrideStateCostLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WCRatingOverrideStateCostLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/ratingoverride/WCRatingOverrideStateCostLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends WCRatingOverrideStateCostLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on RowSetRef at WCRatingOverrideStateCostLV.pcf: line 118, column 67
    function def_onEnter_6 (def :  pcf.WCRatingOverrideCostDetailAggRowSet) : void {
      def.onEnter(aggCost, null)
    }
    
    // 'def' attribute on RowSetRef at WCRatingOverrideStateCostLV.pcf: line 118, column 67
    function def_refreshVariables_7 (def :  pcf.WCRatingOverrideCostDetailAggRowSet) : void {
      def.refreshVariables(aggCost, null)
    }
    
    property get aggCost () : WCJurisdictionCost {
      return getIteratedValue(1) as WCJurisdictionCost
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/ratingoverride/WCRatingOverrideStateCostLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends WCRatingOverrideStateCostLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on RowSetRef at WCRatingOverrideStateCostLV.pcf: line 104, column 67
    function def_onEnter_1 (def :  pcf.WCRatingOverrideCostDetailAggRowSet) : void {
      def.onEnter(aggCost, null)
    }
    
    // 'def' attribute on RowSetRef at WCRatingOverrideStateCostLV.pcf: line 104, column 67
    function def_refreshVariables_2 (def :  pcf.WCRatingOverrideCostDetailAggRowSet) : void {
      def.refreshVariables(aggCost, null)
    }
    
    property get aggCost () : WCJurisdictionCost {
      return getIteratedValue(1) as WCJurisdictionCost
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/ratingoverride/WCRatingOverrideStateCostLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WCRatingOverrideStateCostLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at WCRatingOverrideStateCostLV.pcf: line 102, column 24
    function sortBy_0 (aggCost :  WCJurisdictionCost) : java.lang.Object {
      return aggCost.CalcOrder
    }
    
    // 'value' attribute on RowIterator (id=f400t500) at WCRatingOverrideStateCostLV.pcf: line 99, column 35
    function value_3 () : entity.WCCost[] {
      return stateCosts.byCalcOrder( 401, 500 ).toTypedArray()
    }
    
    // 'value' attribute on RowIterator (id=gt500) at WCRatingOverrideStateCostLV.pcf: line 113, column 35
    function value_8 () : entity.WCCost[] {
      return stateCosts.byCalcOrder( 501, 1000000 ).toTypedArray()
    }
    
    // 'type' attribute on RowIterator (id=f400t500) at WCRatingOverrideStateCostLV.pcf: line 99, column 35
    function verifyIteratorType_4 () : void {
      var entry : entity.WCCost = null
      var typedEntry : WCJurisdictionCost
      // If this cast fails to compile then the type specified by the 'type' attribute on
      // 'RowIterator' is not compatible with the member type of the 'valueType' attribute
      typedEntry = entry as WCJurisdictionCost
    }
    
    // 'type' attribute on RowIterator (id=gt500) at WCRatingOverrideStateCostLV.pcf: line 113, column 35
    function verifyIteratorType_9 () : void {
      var entry : entity.WCCost = null
      var typedEntry : WCJurisdictionCost
      // If this cast fails to compile then the type specified by the 'type' attribute on
      // 'RowIterator' is not compatible with the member type of the 'valueType' attribute
      typedEntry = entry as WCJurisdictionCost
    }
    
    property get jurisdiction () : WCJurisdiction {
      return getRequireValue("jurisdiction", 0) as WCJurisdiction
    }
    
    property set jurisdiction ($arg :  WCJurisdiction) {
      setRequireValue("jurisdiction", 0, $arg)
    }
    
    property get stateCosts () : java.util.Set<WCCost> {
      return getRequireValue("stateCosts", 0) as java.util.Set<WCCost>
    }
    
    property set stateCosts ($arg :  java.util.Set<WCCost>) {
      setRequireValue("stateCosts", 0, $arg)
    }
    
    
  }
  
  
}