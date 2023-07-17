package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountFile_Claims.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountFile_ClaimsExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_Claims.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountFile_ClaimsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (account :  Account) : int {
      return 0
    }
    
    static function __constructorIndex (account :  Account, searchOnEnter :  boolean) : int {
      return 1
    }
    
    // 'canVisit' attribute on Page (id=AccountFile_Claims) at AccountFile_Claims.pcf: line 10, column 70
    static function canVisit_38 (account :  Account, searchOnEnter :  boolean) : java.lang.Boolean {
      return perm.Account.view(account) and perm.System.accountclaims
    }
    
    // 'infoBar' attribute on Page (id=AccountFile_Claims) at AccountFile_Claims.pcf: line 10, column 70
    function infoBar_onEnter_39 (def :  pcf.AccountFileInfoBar) : void {
      def.onEnter(account)
    }
    
    // 'infoBar' attribute on Page (id=AccountFile_Claims) at AccountFile_Claims.pcf: line 10, column 70
    function infoBar_refreshVariables_40 (def :  pcf.AccountFileInfoBar) : void {
      def.refreshVariables(account)
    }
    
    // Page (id=AccountFile_Claims) at AccountFile_Claims.pcf: line 10, column 70
    static function parent_41 (account :  Account, searchOnEnter :  boolean) : pcf.api.Destination {
      return pcf.AccountFile.createDestination(account)
    }
    
    override property get CurrentLocation () : pcf.AccountFile_Claims {
      return super.CurrentLocation as pcf.AccountFile_Claims
    }
    
    property get account () : Account {
      return getVariableValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setVariableValue("account", 0, $arg)
    }
    
    property get searchOnEnter () : boolean {
      return getVariableValue("searchOnEnter", 0) as java.lang.Boolean
    }
    
    property set searchOnEnter ($arg :  boolean) {
      setVariableValue("searchOnEnter", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_Claims.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends SearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at AccountFile_Claims.pcf: line 52, column 230
    function def_onEnter_30 (def :  pcf.AccountClaimsLV) : void {
      def.onEnter(claimSet.Claims,                                  claimSet==null ? new gw.losshistory.ClaimPolicyPeriodFilterSet(null) : claimSet.retrieveClaimFilter(),                                  account)
    }
    
    // 'def' attribute on PanelRef at AccountFile_Claims.pcf: line 58, column 46
    function def_onEnter_33 (def :  pcf.ClaimDetailsCV) : void {
      def.onEnter(selectedClaim,true)
    }
    
    // 'def' attribute on PanelRef at AccountFile_Claims.pcf: line 52, column 230
    function def_refreshVariables_31 (def :  pcf.AccountClaimsLV) : void {
      def.refreshVariables(claimSet.Claims,                                  claimSet==null ? new gw.losshistory.ClaimPolicyPeriodFilterSet(null) : claimSet.retrieveClaimFilter(),                                  account)
    }
    
    // 'def' attribute on PanelRef at AccountFile_Claims.pcf: line 58, column 46
    function def_refreshVariables_34 (def :  pcf.ClaimDetailsCV) : void {
      def.refreshVariables(selectedClaim,true)
    }
    
    // 'visible' attribute on PanelRef at AccountFile_Claims.pcf: line 58, column 46
    function visible_32 () : java.lang.Boolean {
      return selectedClaim != null
    }
    
    property get selectedClaim () : Claim {
      return getCurrentSelection(2) as Claim
    }
    
    property set selectedClaim ($arg :  Claim) {
      setCurrentSelection(2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_Claims.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends AccountFile_ClaimsExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at AccountFile_Claims.pcf: line 40, column 48
    function available_0 () : java.lang.Boolean {
      return claimSearchCriteria.DateCriteria.DateSearchType == DateSearchType.TC_FROMLIST
    }
    
    // 'available' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at AccountFile_Claims.pcf: line 40, column 48
    function available_9 () : java.lang.Boolean {
      return claimSearchCriteria.DateCriteria.DateSearchType == DateSearchType.TC_ENTEREDRANGE
    }
    
    // 'def' attribute on InputSetRef at AccountFile_Claims.pcf: line 44, column 47
    function def_onEnter_28 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at AccountFile_Claims.pcf: line 44, column 47
    function def_refreshVariables_29 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at AccountFile_Claims.pcf: line 40, column 48
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      claimSearchCriteria.DateCriteria.StartDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at AccountFile_Claims.pcf: line 40, column 48
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      claimSearchCriteria.DateCriteria.EndDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at AccountFile_Claims.pcf: line 40, column 48
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      claimSearchCriteria.DateCriteria.DateRangeChoice = (__VALUE_TO_SET as typekey.DateRangeChoiceType)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at AccountFile_Claims.pcf: line 40, column 48
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      claimSearchCriteria.DateCriteria = (__VALUE_TO_SET as entity.DateCriteria)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at AccountFile_Claims.pcf: line 40, column 48
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      claimSearchCriteria.DateCriteria.DateSearchType = (__VALUE_TO_SET as typekey.DateSearchType)
    }
    
    // 'searchCriteria' attribute on SearchPanel at AccountFile_Claims.pcf: line 31, column 38
    function searchCriteria_36 () : gw.losshistory.ClaimSearchCriteria {
      return account.getNewClaimSearchCriteria()
    }
    
    // 'searchOnEnter' attribute on SearchPanel at AccountFile_Claims.pcf: line 31, column 38
    function searchOnEnter_37 () : java.lang.Boolean {
      return searchOnEnter
    }
    
    // 'search' attribute on SearchPanel at AccountFile_Claims.pcf: line 31, column 38
    function search_35 () : java.lang.Object {
      return claimSearchCriteria.performSearch()
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at AccountFile_Claims.pcf: line 40, column 48
    function valueRoot_26 () : java.lang.Object {
      return claimSearchCriteria
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at AccountFile_Claims.pcf: line 40, column 48
    function valueRoot_3 () : java.lang.Object {
      return claimSearchCriteria.DateCriteria
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at AccountFile_Claims.pcf: line 40, column 48
    function value_1 () : typekey.DateRangeChoiceType {
      return claimSearchCriteria.DateCriteria.DateRangeChoice
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at AccountFile_Claims.pcf: line 40, column 48
    function value_10 () : java.util.Date {
      return claimSearchCriteria.DateCriteria.StartDate
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at AccountFile_Claims.pcf: line 40, column 48
    function value_16 () : java.util.Date {
      return claimSearchCriteria.DateCriteria.EndDate
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at AccountFile_Claims.pcf: line 40, column 48
    function value_24 () : entity.DateCriteria {
      return claimSearchCriteria.DateCriteria
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at AccountFile_Claims.pcf: line 40, column 48
    function value_5 () : java.lang.Object {
      return claimSearchCriteria.DateCriteria.DateRangeChoice
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForClaimSearch_Input) at AccountFile_Claims.pcf: line 40, column 48
    function value_6 () : typekey.DateSearchType {
      return claimSearchCriteria.DateCriteria.DateSearchType
    }
    
    property get claimSearchCriteria () : gw.losshistory.ClaimSearchCriteria {
      return getCriteriaValue(1) as gw.losshistory.ClaimSearchCriteria
    }
    
    property set claimSearchCriteria ($arg :  gw.losshistory.ClaimSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    property get claimSet () : ClaimSet {
      return getResultsValue(1) as ClaimSet
    }
    
    
  }
  
  
}