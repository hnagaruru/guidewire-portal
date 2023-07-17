package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/AgreementSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AgreementSearchResultsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/AgreementSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AgreementSearchResultsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=AgreementNumber_Cell) at AgreementSearchResultsLV.pcf: line 36, column 46
    function sortValue_0 (agreement :  entity.RIAgreement) : java.lang.Object {
      return agreement.AgreementNumber
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at AgreementSearchResultsLV.pcf: line 41, column 35
    function sortValue_1 (agreement :  entity.RIAgreement) : java.lang.Object {
      return agreement.Name
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at AgreementSearchResultsLV.pcf: line 46, column 25
    function sortValue_2 (agreement :  entity.RIAgreement) : java.lang.Object {
      return agreement.EffectiveDate
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at AgreementSearchResultsLV.pcf: line 51, column 25
    function sortValue_3 (agreement :  entity.RIAgreement) : java.lang.Object {
      return agreement.ExpirationDate
    }
    
    // 'value' attribute on TypeKeyCell (id=AgreementType_Cell) at AgreementSearchResultsLV.pcf: line 57, column 25
    function sortValue_4 (agreement :  entity.RIAgreement) : java.lang.Object {
      return agreement.Subtype
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at AgreementSearchResultsLV.pcf: line 63, column 25
    function sortValue_5 (agreement :  entity.RIAgreement) : java.lang.Object {
      return agreement.Status
    }
    
    // 'value' attribute on TypeKeyCell (id=Currency_Cell) at AgreementSearchResultsLV.pcf: line 70, column 25
    function sortValue_6 (agreement :  entity.RIAgreement) : java.lang.Object {
      return agreement.Currency
    }
    
    // 'value' attribute on RowIterator at AgreementSearchResultsLV.pcf: line 25, column 78
    function value_34 () : gw.api.database.IQueryBeanResult<entity.RIAgreement> {
      return searchResults
    }
    
    // 'visible' attribute on TypeKeyCell (id=Currency_Cell) at AgreementSearchResultsLV.pcf: line 70, column 25
    function visible_7 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get inSearchPage () : boolean {
      return getRequireValue("inSearchPage", 0) as java.lang.Boolean
    }
    
    property set inSearchPage ($arg :  boolean) {
      setRequireValue("inSearchPage", 0, $arg)
    }
    
    property get searchResults () : gw.api.database.IQueryBeanResult<RIAgreement> {
      return getRequireValue("searchResults", 0) as gw.api.database.IQueryBeanResult<RIAgreement>
    }
    
    property set searchResults ($arg :  gw.api.database.IQueryBeanResult<RIAgreement>) {
      setRequireValue("searchResults", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/reinsurance/AgreementSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AgreementSearchResultsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on TextCell (id=AgreementNumber_Cell) at AgreementSearchResultsLV.pcf: line 36, column 46
    function actionAvailable_11 () : java.lang.Boolean {
      return inSearchPage
    }
    
    // 'action' attribute on TextCell (id=AgreementNumber_Cell) at AgreementSearchResultsLV.pcf: line 36, column 46
    function action_9 () : void {
      EditAgreementPage.go(agreement)
    }
    
    // 'action' attribute on TextCell (id=AgreementNumber_Cell) at AgreementSearchResultsLV.pcf: line 36, column 46
    function action_dest_10 () : pcf.api.Destination {
      return pcf.EditAgreementPage.createDestination(agreement)
    }
    
    // 'condition' attribute on ToolbarFlag at AgreementSearchResultsLV.pcf: line 28, column 23
    function condition_8 () : java.lang.Boolean {
      return agreement.Status == TC_DRAFT
    }
    
    // 'value' attribute on TextCell (id=AgreementNumber_Cell) at AgreementSearchResultsLV.pcf: line 36, column 46
    function valueRoot_13 () : java.lang.Object {
      return agreement
    }
    
    // 'value' attribute on TextCell (id=AgreementNumber_Cell) at AgreementSearchResultsLV.pcf: line 36, column 46
    function value_12 () : java.lang.String {
      return agreement.AgreementNumber
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at AgreementSearchResultsLV.pcf: line 41, column 35
    function value_15 () : java.lang.String {
      return agreement.Name
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at AgreementSearchResultsLV.pcf: line 46, column 25
    function value_18 () : java.util.Date {
      return agreement.EffectiveDate
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at AgreementSearchResultsLV.pcf: line 51, column 25
    function value_21 () : java.util.Date {
      return agreement.ExpirationDate
    }
    
    // 'value' attribute on TypeKeyCell (id=AgreementType_Cell) at AgreementSearchResultsLV.pcf: line 57, column 25
    function value_24 () : typekey.RIAgreement {
      return agreement.Subtype
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at AgreementSearchResultsLV.pcf: line 63, column 25
    function value_27 () : typekey.ContractStatus {
      return agreement.Status
    }
    
    // 'value' attribute on TypeKeyCell (id=Currency_Cell) at AgreementSearchResultsLV.pcf: line 70, column 25
    function value_30 () : typekey.Currency {
      return agreement.Currency
    }
    
    // 'visible' attribute on TypeKeyCell (id=Currency_Cell) at AgreementSearchResultsLV.pcf: line 70, column 25
    function visible_32 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get agreement () : entity.RIAgreement {
      return getIteratedValue(1) as entity.RIAgreement
    }
    
    
  }
  
  
}