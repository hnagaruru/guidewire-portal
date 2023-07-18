package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/audit/AuditRateCostDetailStateLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AuditRateCostDetailStateLVExpressions {
  @javax.annotation.Generated("config/web/pcf/job/audit/AuditRateCostDetailStateLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AuditRateCostDetailStateLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at AuditRateCostDetailStateLV.pcf: line 23, column 65
    function initialValue_0 () : gw.pcf.job.audit.AuditRateCostDetailStateLVHelper {
      return new gw.pcf.job.audit.AuditRateCostDetailStateLVHelper(jurisdiction)
    }
    
    // 'initialValue' attribute on Variable at AuditRateCostDetailStateLV.pcf: line 28, column 50
    function initialValue_1 () : java.util.Set<entity.WCCost> {
      return stateCosts.byCalcOrder(401, 1000000)
    }
    
    // 'initialValue' attribute on Variable at AuditRateCostDetailStateLV.pcf: line 33, column 50
    function initialValue_2 () : java.util.Set<entity.WCCost> {
      return basedOnStateCosts.byCalcOrder(401, 1000000)
    }
    
    // 'initialValue' attribute on Variable at AuditRateCostDetailStateLV.pcf: line 38, column 50
    function initialValue_3 () : java.util.Set<entity.WCCost> {
      return helper.getAllCosts( stateAggCosts, basedOnAggCosts )
    }
    
    // 'initialValue' attribute on Variable at AuditRateCostDetailStateLV.pcf: line 43, column 84
    function initialValue_4 () : java.util.Map<gw.api.domain.financials.CostKey, entity.WCCost> {
      return stateAggCosts.partitionUniquely( \ c -> c.CostKey )
    }
    
    // 'initialValue' attribute on Variable at AuditRateCostDetailStateLV.pcf: line 48, column 84
    function initialValue_5 () : java.util.Map<gw.api.domain.financials.CostKey, entity.WCCost> {
      return basedOnAggCosts.partitionUniquely( \ c -> c.CostKey )
    }
    
    // 'initialValue' attribute on Variable at AuditRateCostDetailStateLV.pcf: line 52, column 32
    function initialValue_6 () : typekey.Currency {
      return jurisdiction.Branch.PreferredSettlementCurrency
    }
    
    // 'sortBy' attribute on IteratorSort at AuditRateCostDetailStateLV.pcf: line 119, column 24
    function sortBy_23 (cost :  WCJurisdictionCost) : java.lang.Object {
      return cost.CalcOrder
    }
    
    // 'value' attribute on TextCell (id=EstBasis_Cell) at AuditRateCostDetailStateLV.pcf: line 67, column 40
    function valueRoot_8 () : java.lang.Object {
      return helper
    }
    
    // 'value' attribute on MonetaryAmountCell (id=EstSubtotal_Cell) at AuditRateCostDetailStateLV.pcf: line 302, column 40
    function value_103 () : gw.pl.currency.MonetaryAmount {
      return basedOnStateCosts.AmountSum(currency)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=CumulAmountSubtotal500_Cell) at AuditRateCostDetailStateLV.pcf: line 312, column 49
    function value_106 () : gw.pl.currency.MonetaryAmount {
      return stateCosts.AmountSum(currency)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=SubtotalDifference_Cell) at AuditRateCostDetailStateLV.pcf: line 318, column 40
    function value_108 () : gw.pl.currency.MonetaryAmount {
      return stateCosts.AmountSum(currency) - basedOnStateCosts.AmountSum(currency)
    }
    
    // 'value' attribute on TextCell (id=EstPremium_Cell) at AuditRateCostDetailStateLV.pcf: line 75, column 40
    function value_12 () : java.lang.String {
      return helper.AmountLabel
    }
    
    // 'value' attribute on TextCell (id=Basis_Cell) at AuditRateCostDetailStateLV.pcf: line 78, column 145
    function value_16 () : java.lang.String {
      return isPremiumReport ? DisplayKey.get("Web.AuditWizard.Basis") : DisplayKey.get("Web.AuditWizard.AuditedBasis")
    }
    
    // 'value' attribute on TextCell (id=AuditedRate_Cell) at AuditRateCostDetailStateLV.pcf: line 81, column 177
    function value_18 () : java.lang.String {
      return isPremiumReport ? DisplayKey.get("Web.AuditWizard.Premiums.Details.Rate") : DisplayKey.get("Web.AuditWizard.Premiums.Details.AuditedRate")
    }
    
    // 'value' attribute on TextCell (id=Amount_Cell) at AuditRateCostDetailStateLV.pcf: line 84, column 197
    function value_20 () : java.lang.String {
      return isPremiumReport ? DisplayKey.get("Web.AuditWizard.Premiums.Details.Premium.Amount") : DisplayKey.get("Web.AuditWizard.Premiums.Details.Premium.AuditedAmount")
    }
    
    // 'value' attribute on RowIterator (id=f400t500) at AuditRateCostDetailStateLV.pcf: line 97, column 35
    function value_53 () : entity.WCCost[] {
      return allCosts.byCalcOrder( 401, 500 ).toTypedArray()
    }
    
    // 'value' attribute on TextCell (id=DescriptionFoot400_Cell) at AuditRateCostDetailStateLV.pcf: line 175, column 124
    function value_55 () : java.lang.String {
      return DisplayKey.get("Web.SubmissionWizard.Quote.WC.Subtotal.TotalPremium", jurisdiction.DisplayName)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=EstTotalPremium_Cell) at AuditRateCostDetailStateLV.pcf: line 187, column 40
    function value_59 () : gw.pl.currency.MonetaryAmount {
      return basedOnStateCosts.where( \ w -> w.CalcOrder < 501 ).AmountSum(currency)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=AmountSubtotal400_Cell) at AuditRateCostDetailStateLV.pcf: line 197, column 89
    function value_62 () : gw.pl.currency.MonetaryAmount {
      return stateCosts.where( \ w -> w.CalcOrder < 501 ).AmountSum(currency)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=PremiumDifference_Cell) at AuditRateCostDetailStateLV.pcf: line 203, column 40
    function value_64 () : gw.pl.currency.MonetaryAmount {
      return stateCosts.where( \ w -> w.CalcOrder < 501 ).AmountSum(currency) - basedOnStateCosts.where( \ w -> w.CalcOrder < 501 ).AmountSum(currency)
    }
    
    // 'value' attribute on TextCell (id=EstBasis_Cell) at AuditRateCostDetailStateLV.pcf: line 67, column 40
    function value_7 () : java.lang.String {
      return helper.BasisLabel
    }
    
    // 'value' attribute on RowIterator (id=gt500) at AuditRateCostDetailStateLV.pcf: line 212, column 35
    function value_97 () : entity.WCCost[] {
      return allCosts.byCalcOrder( 501, 1000000 ).toTypedArray()
    }
    
    // 'value' attribute on TextCell (id=DescriptionFoota500_Cell) at AuditRateCostDetailStateLV.pcf: line 290, column 121
    function value_99 () : java.lang.String {
      return DisplayKey.get("Web.SubmissionWizard.Quote.WC.Subtotal.TotalCost", jurisdiction.DisplayName)
    }
    
    // 'type' attribute on RowIterator (id=f400t500) at AuditRateCostDetailStateLV.pcf: line 97, column 35
    function verifyIteratorType_54 () : void {
      var entry : entity.WCCost = null
      var typedEntry : WCJurisdictionCost
      // If this cast fails to compile then the type specified by the 'type' attribute on
      // 'RowIterator' is not compatible with the member type of the 'valueType' attribute
      typedEntry = entry as WCJurisdictionCost
    }
    
    // 'type' attribute on RowIterator (id=gt500) at AuditRateCostDetailStateLV.pcf: line 212, column 35
    function verifyIteratorType_98 () : void {
      var entry : entity.WCCost = null
      var typedEntry : WCJurisdictionCost
      // If this cast fails to compile then the type specified by the 'type' attribute on
      // 'RowIterator' is not compatible with the member type of the 'valueType' attribute
      typedEntry = entry as WCJurisdictionCost
    }
    
    // 'visible' attribute on TextCell (id=EstBasis_Cell) at AuditRateCostDetailStateLV.pcf: line 67, column 40
    function visible_9 () : java.lang.Boolean {
      return not isPremiumReport
    }
    
    property get allCosts () : java.util.Set<entity.WCCost> {
      return getVariableValue("allCosts", 0) as java.util.Set<entity.WCCost>
    }
    
    property set allCosts ($arg :  java.util.Set<entity.WCCost>) {
      setVariableValue("allCosts", 0, $arg)
    }
    
    property get basedOnAggCosts () : java.util.Set<entity.WCCost> {
      return getVariableValue("basedOnAggCosts", 0) as java.util.Set<entity.WCCost>
    }
    
    property set basedOnAggCosts ($arg :  java.util.Set<entity.WCCost>) {
      setVariableValue("basedOnAggCosts", 0, $arg)
    }
    
    property get basedOnCostMap () : java.util.Map<gw.api.domain.financials.CostKey, entity.WCCost> {
      return getVariableValue("basedOnCostMap", 0) as java.util.Map<gw.api.domain.financials.CostKey, entity.WCCost>
    }
    
    property set basedOnCostMap ($arg :  java.util.Map<gw.api.domain.financials.CostKey, entity.WCCost>) {
      setVariableValue("basedOnCostMap", 0, $arg)
    }
    
    property get basedOnStateCosts () : java.util.Set<WCCost> {
      return getRequireValue("basedOnStateCosts", 0) as java.util.Set<WCCost>
    }
    
    property set basedOnStateCosts ($arg :  java.util.Set<WCCost>) {
      setRequireValue("basedOnStateCosts", 0, $arg)
    }
    
    property get currency () : typekey.Currency {
      return getVariableValue("currency", 0) as typekey.Currency
    }
    
    property set currency ($arg :  typekey.Currency) {
      setVariableValue("currency", 0, $arg)
    }
    
    property get helper () : gw.pcf.job.audit.AuditRateCostDetailStateLVHelper {
      return getVariableValue("helper", 0) as gw.pcf.job.audit.AuditRateCostDetailStateLVHelper
    }
    
    property set helper ($arg :  gw.pcf.job.audit.AuditRateCostDetailStateLVHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get isPremiumReport () : boolean {
      return getRequireValue("isPremiumReport", 0) as java.lang.Boolean
    }
    
    property set isPremiumReport ($arg :  boolean) {
      setRequireValue("isPremiumReport", 0, $arg)
    }
    
    property get jurisdiction () : WCJurisdiction {
      return getRequireValue("jurisdiction", 0) as WCJurisdiction
    }
    
    property set jurisdiction ($arg :  WCJurisdiction) {
      setRequireValue("jurisdiction", 0, $arg)
    }
    
    property get stateAggCosts () : java.util.Set<entity.WCCost> {
      return getVariableValue("stateAggCosts", 0) as java.util.Set<entity.WCCost>
    }
    
    property set stateAggCosts ($arg :  java.util.Set<entity.WCCost>) {
      setVariableValue("stateAggCosts", 0, $arg)
    }
    
    property get stateCostMap () : java.util.Map<gw.api.domain.financials.CostKey, entity.WCCost> {
      return getVariableValue("stateCostMap", 0) as java.util.Map<gw.api.domain.financials.CostKey, entity.WCCost>
    }
    
    property set stateCostMap ($arg :  java.util.Map<gw.api.domain.financials.CostKey, entity.WCCost>) {
      setVariableValue("stateCostMap", 0, $arg)
    }
    
    property get stateCosts () : java.util.Set<WCCost> {
      return getRequireValue("stateCosts", 0) as java.util.Set<WCCost>
    }
    
    property set stateCosts ($arg :  java.util.Set<WCCost>) {
      setRequireValue("stateCosts", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/audit/AuditRateCostDetailStateLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends AuditRateCostDetailStateLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at AuditRateCostDetailStateLV.pcf: line 217, column 31
    function initialValue_68 () : entity.WCCost {
      return stateCostMap.get( cost.CostKey )
    }
    
    // 'initialValue' attribute on Variable at AuditRateCostDetailStateLV.pcf: line 222, column 31
    function initialValue_69 () : entity.WCCost {
      return basedOnCostMap.get( cost.CostKey )
    }
    
    // 'initialValue' attribute on Variable at AuditRateCostDetailStateLV.pcf: line 227, column 47
    function initialValue_70 () : gw.pl.currency.MonetaryAmount {
      return aggCost == null ? java.math.BigDecimal.ZERO.ofCurrency(cost.Branch.PreferredSettlementCurrency) : aggCost.ActualTermAmountBilling
    }
    
    // 'initialValue' attribute on Variable at AuditRateCostDetailStateLV.pcf: line 231, column 47
    function initialValue_71 () : gw.pl.currency.MonetaryAmount {
      return basedOnAggCost == null ? java.math.BigDecimal.ZERO.ofCurrency(cost.Branch.PreferredSettlementCurrency) : basedOnAggCost.ActualTermAmountBilling
    }
    
    // RowIterator (id=gt500) at AuditRateCostDetailStateLV.pcf: line 212, column 35
    function initializeVariables_96 () : void {
        aggCost = stateCostMap.get( cost.CostKey );
  basedOnAggCost = basedOnCostMap.get( cost.CostKey );
  aggCostTermAmount = aggCost == null ? java.math.BigDecimal.ZERO.ofCurrency(cost.Branch.PreferredSettlementCurrency) : aggCost.ActualTermAmountBilling;
  basedOnTermAmt = basedOnAggCost == null ? java.math.BigDecimal.ZERO.ofCurrency(cost.Branch.PreferredSettlementCurrency) : basedOnAggCost.ActualTermAmountBilling;

    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at AuditRateCostDetailStateLV.pcf: line 241, column 35
    function valueRoot_73 () : java.lang.Object {
      return cost
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at AuditRateCostDetailStateLV.pcf: line 241, column 35
    function value_72 () : java.lang.String {
      return cost.ClassCode
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at AuditRateCostDetailStateLV.pcf: line 244, column 37
    function value_75 () : java.lang.String {
      return cost.Description
    }
    
    // 'value' attribute on TextCell (id=EstBasis_Cell) at AuditRateCostDetailStateLV.pcf: line 249, column 42
    function value_78 () : java.lang.String {
      return basedOnAggCost == null or basedOnAggCost.Basis == 0 ? "" : basedOnAggCost.Basis.DisplayValue
    }
    
    // 'value' attribute on TextCell (id=Rate_Cell) at AuditRateCostDetailStateLV.pcf: line 254, column 42
    function value_81 () : java.lang.String {
      return basedOnAggCost == null or basedOnAggCost.ActualAdjRate == 0 ? "" : basedOnAggCost.ActualAdjRate as String
    }
    
    // 'value' attribute on MonetaryAmountCell (id=EstPremium_Cell) at AuditRateCostDetailStateLV.pcf: line 260, column 42
    function value_84 () : gw.pl.currency.MonetaryAmount {
      return basedOnTermAmt
    }
    
    // 'value' attribute on TextCell (id=Basis_Cell) at AuditRateCostDetailStateLV.pcf: line 264, column 102
    function value_87 () : java.lang.String {
      return aggCost == null or aggCost.Basis == 0 ? "" : aggCost.Basis.DisplayValue
    }
    
    // 'value' attribute on TextCell (id=AuditedRateValue1_Cell) at AuditRateCostDetailStateLV.pcf: line 268, column 115
    function value_89 () : java.lang.String {
      return aggCost == null or aggCost.ActualAdjRate == 0 ? "" : aggCost.ActualAdjRate as String
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TermAmount_Cell) at AuditRateCostDetailStateLV.pcf: line 273, column 38
    function value_91 () : gw.pl.currency.MonetaryAmount {
      return aggCostTermAmount
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Difference_Cell) at AuditRateCostDetailStateLV.pcf: line 279, column 42
    function value_93 () : gw.pl.currency.MonetaryAmount {
      return aggCostTermAmount - basedOnTermAmt
    }
    
    // 'visible' attribute on TextCell (id=EstBasis_Cell) at AuditRateCostDetailStateLV.pcf: line 249, column 42
    function visible_79 () : java.lang.Boolean {
      return not isPremiumReport
    }
    
    property get aggCost () : entity.WCCost {
      return getVariableValue("aggCost", 1) as entity.WCCost
    }
    
    property set aggCost ($arg :  entity.WCCost) {
      setVariableValue("aggCost", 1, $arg)
    }
    
    property get aggCostTermAmount () : gw.pl.currency.MonetaryAmount {
      return getVariableValue("aggCostTermAmount", 1) as gw.pl.currency.MonetaryAmount
    }
    
    property set aggCostTermAmount ($arg :  gw.pl.currency.MonetaryAmount) {
      setVariableValue("aggCostTermAmount", 1, $arg)
    }
    
    property get basedOnAggCost () : entity.WCCost {
      return getVariableValue("basedOnAggCost", 1) as entity.WCCost
    }
    
    property set basedOnAggCost ($arg :  entity.WCCost) {
      setVariableValue("basedOnAggCost", 1, $arg)
    }
    
    property get basedOnTermAmt () : gw.pl.currency.MonetaryAmount {
      return getVariableValue("basedOnTermAmt", 1) as gw.pl.currency.MonetaryAmount
    }
    
    property set basedOnTermAmt ($arg :  gw.pl.currency.MonetaryAmount) {
      setVariableValue("basedOnTermAmt", 1, $arg)
    }
    
    property get cost () : WCJurisdictionCost {
      return getIteratedValue(1) as WCJurisdictionCost
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/audit/AuditRateCostDetailStateLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AuditRateCostDetailStateLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at AuditRateCostDetailStateLV.pcf: line 102, column 31
    function initialValue_24 () : entity.WCCost {
      return stateCostMap.get( cost.CostKey )
    }
    
    // 'initialValue' attribute on Variable at AuditRateCostDetailStateLV.pcf: line 107, column 31
    function initialValue_25 () : entity.WCCost {
      return basedOnCostMap.get( cost.CostKey )
    }
    
    // 'initialValue' attribute on Variable at AuditRateCostDetailStateLV.pcf: line 112, column 47
    function initialValue_26 () : gw.pl.currency.MonetaryAmount {
      return aggCost == null ? java.math.BigDecimal.ZERO.ofCurrency(cost.Branch.PreferredSettlementCurrency) : aggCost.ActualTermAmountBilling
    }
    
    // 'initialValue' attribute on Variable at AuditRateCostDetailStateLV.pcf: line 116, column 47
    function initialValue_27 () : gw.pl.currency.MonetaryAmount {
      return basedOnAggCost == null ? java.math.BigDecimal.ZERO.ofCurrency(cost.Branch.PreferredSettlementCurrency) : basedOnAggCost.ActualTermAmountBilling
    }
    
    // RowIterator (id=f400t500) at AuditRateCostDetailStateLV.pcf: line 97, column 35
    function initializeVariables_52 () : void {
        aggCost = stateCostMap.get( cost.CostKey );
  basedOnAggCost = basedOnCostMap.get( cost.CostKey );
  aggCostTermAmount = aggCost == null ? java.math.BigDecimal.ZERO.ofCurrency(cost.Branch.PreferredSettlementCurrency) : aggCost.ActualTermAmountBilling;
  basedOnTermAmt = basedOnAggCost == null ? java.math.BigDecimal.ZERO.ofCurrency(cost.Branch.PreferredSettlementCurrency) : basedOnAggCost.ActualTermAmountBilling;

    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at AuditRateCostDetailStateLV.pcf: line 126, column 35
    function valueRoot_29 () : java.lang.Object {
      return cost
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at AuditRateCostDetailStateLV.pcf: line 126, column 35
    function value_28 () : java.lang.String {
      return cost.ClassCode
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at AuditRateCostDetailStateLV.pcf: line 129, column 37
    function value_31 () : java.lang.String {
      return cost.Description
    }
    
    // 'value' attribute on TextCell (id=EstBasis_Cell) at AuditRateCostDetailStateLV.pcf: line 134, column 42
    function value_34 () : java.lang.String {
      return basedOnAggCost == null or basedOnAggCost.Basis == 0 ? "" : basedOnAggCost.Basis.DisplayValue
    }
    
    // 'value' attribute on TextCell (id=Rate_Cell) at AuditRateCostDetailStateLV.pcf: line 139, column 42
    function value_37 () : java.lang.String {
      return basedOnAggCost == null or basedOnAggCost.ActualAdjRate == 0 ? "" : basedOnAggCost.ActualAdjRate as String
    }
    
    // 'value' attribute on MonetaryAmountCell (id=EstPremium_Cell) at AuditRateCostDetailStateLV.pcf: line 145, column 42
    function value_40 () : gw.pl.currency.MonetaryAmount {
      return basedOnTermAmt
    }
    
    // 'value' attribute on TextCell (id=Basis_Cell) at AuditRateCostDetailStateLV.pcf: line 149, column 102
    function value_43 () : java.lang.String {
      return aggCost == null or aggCost.Basis == 0 ? "" : aggCost.Basis.DisplayValue
    }
    
    // 'value' attribute on TextCell (id=AuditedRateValue_Cell) at AuditRateCostDetailStateLV.pcf: line 153, column 115
    function value_45 () : java.lang.String {
      return aggCost == null or aggCost.ActualAdjRate == 0 ? "" : aggCost.ActualAdjRate as String
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TermAmount_Cell) at AuditRateCostDetailStateLV.pcf: line 158, column 38
    function value_47 () : gw.pl.currency.MonetaryAmount {
      return aggCostTermAmount
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Difference_Cell) at AuditRateCostDetailStateLV.pcf: line 164, column 42
    function value_49 () : gw.pl.currency.MonetaryAmount {
      return aggCostTermAmount - basedOnTermAmt
    }
    
    // 'visible' attribute on TextCell (id=EstBasis_Cell) at AuditRateCostDetailStateLV.pcf: line 134, column 42
    function visible_35 () : java.lang.Boolean {
      return not isPremiumReport
    }
    
    property get aggCost () : entity.WCCost {
      return getVariableValue("aggCost", 1) as entity.WCCost
    }
    
    property set aggCost ($arg :  entity.WCCost) {
      setVariableValue("aggCost", 1, $arg)
    }
    
    property get aggCostTermAmount () : gw.pl.currency.MonetaryAmount {
      return getVariableValue("aggCostTermAmount", 1) as gw.pl.currency.MonetaryAmount
    }
    
    property set aggCostTermAmount ($arg :  gw.pl.currency.MonetaryAmount) {
      setVariableValue("aggCostTermAmount", 1, $arg)
    }
    
    property get basedOnAggCost () : entity.WCCost {
      return getVariableValue("basedOnAggCost", 1) as entity.WCCost
    }
    
    property set basedOnAggCost ($arg :  entity.WCCost) {
      setVariableValue("basedOnAggCost", 1, $arg)
    }
    
    property get basedOnTermAmt () : gw.pl.currency.MonetaryAmount {
      return getVariableValue("basedOnTermAmt", 1) as gw.pl.currency.MonetaryAmount
    }
    
    property set basedOnTermAmt ($arg :  gw.pl.currency.MonetaryAmount) {
      setVariableValue("basedOnTermAmt", 1, $arg)
    }
    
    property get cost () : WCJurisdictionCost {
      return getIteratedValue(1) as WCJurisdictionCost
    }
    
    
  }
  
  
}