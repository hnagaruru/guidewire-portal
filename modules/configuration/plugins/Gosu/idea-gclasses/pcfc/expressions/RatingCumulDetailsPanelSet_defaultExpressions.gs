package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/common/RatingCumulDetailsPanelSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RatingCumulDetailsPanelSet_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/line/common/RatingCumulDetailsPanelSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Type_Cell) at RatingCumulDetailsPanelSet.default.pcf: line 117, column 44
    function action_29 () : void {
      if (detail.getCostsByCost(detail.Costs).Count > 1) RatingCostBreakdownPopup.push(period, detail) else RatingCostDetailPopup.push(period, detail.Costs)
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at RatingCumulDetailsPanelSet.default.pcf: line 117, column 44
    function valueRoot_31 () : java.lang.Object {
      return detail
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at RatingCumulDetailsPanelSet.default.pcf: line 117, column 44
    function value_30 () : java.lang.String {
      return detail.LineType
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RatingCumulDetailsPanelSet.default.pcf: line 120, column 47
    function value_33 () : java.lang.String {
      return detail.Description
    }
    
    // 'value' attribute on TextCell (id=SettlementAmount_Cell) at RatingCumulDetailsPanelSet.default.pcf: line 125, column 62
    function value_36 () : gw.pl.currency.MonetaryAmount {
      return detail.SettlementAmount
    }
    
    // 'value' attribute on TextCell (id=Amount_Cell) at RatingCumulDetailsPanelSet.default.pcf: line 130, column 62
    function value_39 () : gw.pl.currency.MonetaryAmount {
      return detail.Amount
    }
    
    // 'value' attribute on TextCell (id=CurrentTerm_Cell) at RatingCumulDetailsPanelSet.default.pcf: line 135, column 62
    function value_42 () : gw.pl.currency.MonetaryAmount {
      return detail.CurrentTerm
    }
    
    // 'value' attribute on TextCell (id=FutureTerm_Cell) at RatingCumulDetailsPanelSet.default.pcf: line 140, column 62
    function value_45 () : gw.pl.currency.MonetaryAmount {
      return detail.FutureTerm
    }
    
    property get detail () : gw.apd.policy.QuoteHelperLine {
      return getIteratedValue(3) as gw.apd.policy.QuoteHelperLine
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/common/RatingCumulDetailsPanelSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PanelIteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on TextCell (id=Type_Cell) at RatingCumulDetailsPanelSet.default.pcf: line 74, column 42
    function actionAvailable_8 () : java.lang.Boolean {
      return charge.Details.Count == 0
    }
    
    // 'action' attribute on TextCell (id=Type_Cell) at RatingCumulDetailsPanelSet.default.pcf: line 74, column 42
    function action_7 () : void {
      if (charge.getCostsByCost(charge.Costs).Count > 1) RatingCostBreakdownPopup.push(period, charge) else RatingCostDetailPopup.push(period, charge.Costs)
    }
    
    // 'sortBy' attribute on IteratorSort at RatingCumulDetailsPanelSet.default.pcf: line 108, column 32
    function sortBy_27 (detail :  gw.apd.policy.QuoteHelperLine) : java.lang.Object {
      return detail.Description
    }
    
    // 'sortBy' attribute on IteratorSort at RatingCumulDetailsPanelSet.default.pcf: line 111, column 32
    function sortBy_28 (detail :  gw.apd.policy.QuoteHelperLine) : java.lang.Object {
      return detail.Order
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at RatingCumulDetailsPanelSet.default.pcf: line 74, column 42
    function valueRoot_10 () : java.lang.Object {
      return charge
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RatingCumulDetailsPanelSet.default.pcf: line 77, column 45
    function value_12 () : java.lang.String {
      return charge.Description
    }
    
    // 'value' attribute on TextCell (id=SettlementAmount_Cell) at RatingCumulDetailsPanelSet.default.pcf: line 82, column 60
    function value_15 () : gw.pl.currency.MonetaryAmount {
      return charge.SettlementAmount
    }
    
    // 'value' attribute on TextCell (id=Amount_Cell) at RatingCumulDetailsPanelSet.default.pcf: line 87, column 60
    function value_18 () : gw.pl.currency.MonetaryAmount {
      return charge.Amount
    }
    
    // 'value' attribute on TextCell (id=CurrentTerm_Cell) at RatingCumulDetailsPanelSet.default.pcf: line 92, column 60
    function value_21 () : gw.pl.currency.MonetaryAmount {
      return charge.CurrentTerm
    }
    
    // 'value' attribute on TextCell (id=FutureTerm_Cell) at RatingCumulDetailsPanelSet.default.pcf: line 97, column 60
    function value_24 () : gw.pl.currency.MonetaryAmount {
      return charge.FutureTerm
    }
    
    // 'value' attribute on RowIterator at RatingCumulDetailsPanelSet.default.pcf: line 105, column 71
    function value_48 () : List<gw.apd.policy.QuoteHelperLine> {
      return charge.Details
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at RatingCumulDetailsPanelSet.default.pcf: line 74, column 42
    function value_9 () : java.lang.String {
      return charge.LineType
    }
    
    // 'valueType' attribute on RowIterator at RatingCumulDetailsPanelSet.default.pcf: line 105, column 71
    function verifyValueTypeIsAllowedType_49 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at RatingCumulDetailsPanelSet.default.pcf: line 105, column 71
    function verifyValueTypeIsAllowedType_49 ($$arg :  gw.api.iterator.IteratorBackingData) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at RatingCumulDetailsPanelSet.default.pcf: line 105, column 71
    function verifyValueTypeIsAllowedType_49 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at RatingCumulDetailsPanelSet.default.pcf: line 105, column 71
    function verifyValueType_50 () : void {
      var __valueTypeArg : List< gw.apd.policy.QuoteHelperLine >
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the valueType is not a valid type for use with an iterator
      // The valueType for an iterator must be an array or extend from List or IQueryBeanResult
      verifyValueTypeIsAllowedType_49(__valueTypeArg)
    }
    
    property get charge () : gw.apd.policy.QuoteHelperLine {
      return getIteratedValue(2) as gw.apd.policy.QuoteHelperLine
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/common/RatingCumulDetailsPanelSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends RatingCumulDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=RatingOverrideButtonDV) at RatingCumulDetailsPanelSet.default.pcf: line 27, column 38
    function def_onEnter_1 (def :  pcf.RatingOverrideButtonDV) : void {
      def.onEnter(period, line, jobWizardHelper, CurrentLocation.InEditMode)
    }
    
    // 'def' attribute on PanelRef (id=RatingOverrideButtonDV) at RatingCumulDetailsPanelSet.default.pcf: line 27, column 38
    function def_refreshVariables_2 (def :  pcf.RatingOverrideButtonDV) : void {
      def.refreshVariables(period, line, jobWizardHelper, CurrentLocation.InEditMode)
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.default.pcf: line 24, column 43
    function initialValue_0 () : gw.apd.policy.QuoteHelper {
      return new gw.apd.policy.QuoteHelper(line)
    }
    
    // PanelIterator at RatingCumulDetailsPanelSet.default.pcf: line 20, column 32
    function initializeVariables_54 () : void {
        quoteHelper = new gw.apd.policy.QuoteHelper(line);

    }
    
    // 'sortBy' attribute on IteratorSort at RatingCumulDetailsPanelSet.default.pcf: line 64, column 30
    function sortBy_5 (charge :  gw.apd.policy.QuoteHelperLine) : java.lang.Object {
      return charge.Order
    }
    
    // 'sortBy' attribute on IteratorSort at RatingCumulDetailsPanelSet.default.pcf: line 67, column 30
    function sortBy_6 (charge :  gw.apd.policy.QuoteHelperLine) : java.lang.Object {
      return charge.Description
    }
    
    // 'value' attribute on TextCell (id=FutureTermHeading_Cell) at RatingCumulDetailsPanelSet.default.pcf: line 53, column 229
    function value_3 () : java.lang.String {
      return period.Policy.Product.DefaultTermType == TermType.TC_ANNUAL ?  DisplayKey.get("Web.Policy.Default.Financials.FutureAnnual") : DisplayKey.get("Web.Policy.Default.Financials.FutureTerm")
    }
    
    // 'value' attribute on RowIterator (id=ChargeLV) at RatingCumulDetailsPanelSet.default.pcf: line 61, column 69
    function value_51 () : List<gw.apd.policy.QuoteHelperLine> {
      return quoteHelper.Charges
    }
    
    // 'valueType' attribute on RowIterator (id=ChargeLV) at RatingCumulDetailsPanelSet.default.pcf: line 61, column 69
    function verifyValueTypeIsAllowedType_52 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator (id=ChargeLV) at RatingCumulDetailsPanelSet.default.pcf: line 61, column 69
    function verifyValueTypeIsAllowedType_52 ($$arg :  gw.api.iterator.IteratorBackingData) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator (id=ChargeLV) at RatingCumulDetailsPanelSet.default.pcf: line 61, column 69
    function verifyValueTypeIsAllowedType_52 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator (id=ChargeLV) at RatingCumulDetailsPanelSet.default.pcf: line 61, column 69
    function verifyValueType_53 () : void {
      var __valueTypeArg : List< gw.apd.policy.QuoteHelperLine >
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the valueType is not a valid type for use with an iterator
      // The valueType for an iterator must be an array or extend from List or IQueryBeanResult
      verifyValueTypeIsAllowedType_52(__valueTypeArg)
    }
    
    property get line () : PolicyLine {
      return getIteratedValue(1) as PolicyLine
    }
    
    property get quoteHelper () : gw.apd.policy.QuoteHelper {
      return getVariableValue("quoteHelper", 1) as gw.apd.policy.QuoteHelper
    }
    
    property set quoteHelper ($arg :  gw.apd.policy.QuoteHelper) {
      setVariableValue("quoteHelper", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/common/RatingCumulDetailsPanelSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RatingCumulDetailsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PanelIterator at RatingCumulDetailsPanelSet.default.pcf: line 20, column 32
    function value_55 () : PolicyLine[] {
      return period.Lines
    }
    
    property get isEditable () : boolean {
      return getRequireValue("isEditable", 0) as java.lang.Boolean
    }
    
    property set isEditable ($arg :  boolean) {
      setRequireValue("isEditable", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getRequireValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setRequireValue("period", 0, $arg)
    }
    
    
  }
  
  
}