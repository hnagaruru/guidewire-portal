package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/DesktopAccountsLV.federated.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DesktopAccountsLV_federatedExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopAccountsLV.federated.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DesktopAccountsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at DesktopAccountsLV.federated.pcf: line 23, column 86
    function filters_1 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.data.account.AccountDataFilters.allFilters()
    }
    
    // 'initialValue' attribute on Variable at DesktopAccountsLV.federated.pcf: line 12, column 72
    function initialValue_0 () : gw.api.web.desktop.data.FederatedDataIteratorBackingData {
      return new gw.api.web.desktop.data.account.AccountFederatedData()
    }
    
    // 'sortBy' attribute on IteratorSort at DesktopAccountsLV.federated.pcf: line 27, column 24
    function sortBy_2 (account :  gw.api.web.desktop.data.account.AccountDTO) : java.lang.Object {
      return account.ContactName
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at DesktopAccountsLV.federated.pcf: line 34, column 25
    function sortValue_3 (account :  gw.api.web.desktop.data.account.AccountDTO) : java.lang.Object {
      return account.AccountNumber
    }
    
    // 'sortBy' attribute on TypeKeyCell (id=Status_Cell) at DesktopAccountsLV.federated.pcf: line 41, column 25
    function sortValue_4 (account :  gw.api.web.desktop.data.account.AccountDTO) : java.lang.Object {
      return account.AccountStatusPriority
    }
    
    // 'sortBy' attribute on TypeKeyCell (id=Status_Cell) at DesktopAccountsLV.federated.pcf: line 41, column 25
    function sortValue_5 (account :  gw.api.web.desktop.data.account.AccountDTO) : java.lang.Object {
      return account.AccountStatusCode
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at DesktopAccountsLV.federated.pcf: line 46, column 25
    function sortValue_6 (account :  gw.api.web.desktop.data.account.AccountDTO) : java.lang.Object {
      return account.ContactName
    }
    
    // 'value' attribute on RowIterator at DesktopAccountsLV.federated.pcf: line 19, column 76
    function value_20 () : gw.api.web.desktop.data.FederatedDataIteratorBackingData {
      return federatedDataAccounts
    }
    
    // 'valueType' attribute on RowIterator at DesktopAccountsLV.federated.pcf: line 19, column 76
    function verifyValueTypeIsAllowedType_21 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at DesktopAccountsLV.federated.pcf: line 19, column 76
    function verifyValueTypeIsAllowedType_21 ($$arg :  gw.api.iterator.IteratorBackingData) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at DesktopAccountsLV.federated.pcf: line 19, column 76
    function verifyValueTypeIsAllowedType_21 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at DesktopAccountsLV.federated.pcf: line 19, column 76
    function verifyValueType_22 () : void {
      var __valueTypeArg : gw.api.web.desktop.data.FederatedDataIteratorBackingData
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the valueType is not a valid type for use with an iterator
      // The valueType for an iterator must be an array or extend from List or IQueryBeanResult
      verifyValueTypeIsAllowedType_21(__valueTypeArg)
    }
    
    property get federatedDataAccounts () : gw.api.web.desktop.data.FederatedDataIteratorBackingData {
      return getVariableValue("federatedDataAccounts", 0) as gw.api.web.desktop.data.FederatedDataIteratorBackingData
    }
    
    property set federatedDataAccounts ($arg :  gw.api.web.desktop.data.FederatedDataIteratorBackingData) {
      setVariableValue("federatedDataAccounts", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopAccountsLV.federated.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DesktopAccountsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=AccountNumber_Cell) at DesktopAccountsLV.federated.pcf: line 34, column 25
    function action_7 () : void {
      FederatedAccountForward.push(account.PublicId, account.AccountNumber)
    }
    
    // 'action' attribute on TextCell (id=AccountNumber_Cell) at DesktopAccountsLV.federated.pcf: line 34, column 25
    function action_dest_8 () : pcf.api.Destination {
      return pcf.FederatedAccountForward.createDestination(account.PublicId, account.AccountNumber)
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at DesktopAccountsLV.federated.pcf: line 34, column 25
    function valueRoot_10 () : java.lang.Object {
      return account
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at DesktopAccountsLV.federated.pcf: line 41, column 25
    function value_12 () : typekey.AccountStatus {
      return typekey.AccountStatus.get(account.AccountStatusCode)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at DesktopAccountsLV.federated.pcf: line 46, column 25
    function value_14 () : java.lang.String {
      return account.ContactName
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at DesktopAccountsLV.federated.pcf: line 53, column 24
    function value_17 () : java.lang.String {
      return account.ContactAddress
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at DesktopAccountsLV.federated.pcf: line 34, column 25
    function value_9 () : java.lang.String {
      return account.AccountNumber
    }
    
    property get account () : gw.api.web.desktop.data.account.AccountDTO {
      return getIteratedValue(1) as gw.api.web.desktop.data.account.AccountDTO
    }
    
    
  }
  
  
}