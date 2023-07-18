package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/RelatedAccountPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RelatedAccountPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/account/RelatedAccountPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RelatedAccountPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (account :  Account) : int {
      return 0
    }
    
    static function __constructorIndex (account :  Account, accountAccount :  AccountAccount) : int {
      return 1
    }
    
    // 'pickLocation' attribute on PickerInput (id=RelatedAccount_Input) at RelatedAccountPopup.pcf: line 48, column 40
    function action_8 () : void {
      SearchRelatedAccountPopup.push()
    }
    
    // 'pickLocation' attribute on PickerInput (id=RelatedAccount_Input) at RelatedAccountPopup.pcf: line 48, column 40
    function action_dest_9 () : pcf.api.Destination {
      return pcf.SearchRelatedAccountPopup.createDestination()
    }
    
    // 'canEdit' attribute on Popup (id=RelatedAccountPopup) at RelatedAccountPopup.pcf: line 10, column 83
    function canEdit_21 () : java.lang.Boolean {
      return perm.Account.edit(account)
    }
    
    // 'value' attribute on PickerInput (id=RelatedAccount_Input) at RelatedAccountPopup.pcf: line 48, column 40
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      relationship.OtherAccount = (__VALUE_TO_SET as entity.Account)
    }
    
    // 'value' attribute on TypeKeyInput (id=RelationshipType_Input) at RelatedAccountPopup.pcf: line 39, column 58
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      relationship.RelationshipType = (__VALUE_TO_SET as typekey.AccountRelationshipType)
    }
    
    // 'initialValue' attribute on Variable at RelatedAccountPopup.pcf: line 21, column 30
    function initialValue_0 () : AccountAccount {
      return new AccountAccount(){:SourceAccount = account}
    }
    
    // 'initialValue' attribute on Variable at RelatedAccountPopup.pcf: line 25, column 46
    function initialValue_1 () : gw.account.AccountRelationship {
      return accountAccount.getRelationship(account)
    }
    
    // 'inputConversion' attribute on PickerInput (id=RelatedAccount_Input) at RelatedAccountPopup.pcf: line 48, column 40
    function inputConversion_10 (VALUE :  java.lang.String) : java.lang.Object {
      return account.checkedFindByNumber(VALUE, \ a -> perm.Account.view(a))
    }
    
    // EditButtons at RelatedAccountPopup.pcf: line 29, column 39
    function label_3 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'pickValue' attribute on EditButtons at RelatedAccountPopup.pcf: line 29, column 39
    function pickValue_2 () : AccountAccount {
      return accountAccount
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at RelatedAccountPopup.pcf: line 54, column 81
    function valueRoot_16 () : java.lang.Object {
      return relationship.OtherAccount.AccountHolderContact
    }
    
    // 'value' attribute on TypeKeyInput (id=RelationshipType_Input) at RelatedAccountPopup.pcf: line 39, column 58
    function valueRoot_6 () : java.lang.Object {
      return relationship
    }
    
    // 'value' attribute on PickerInput (id=RelatedAccount_Input) at RelatedAccountPopup.pcf: line 48, column 40
    function value_11 () : entity.Account {
      return relationship.OtherAccount
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at RelatedAccountPopup.pcf: line 54, column 81
    function value_15 () : java.lang.String {
      return relationship.OtherAccount.AccountHolderContact.DisplayName
    }
    
    // 'value' attribute on TextInput (id=Address_Input) at RelatedAccountPopup.pcf: line 58, column 96
    function value_18 () : java.lang.String {
      return relationship.OtherAccount.AccountHolderContact.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on TypeKeyInput (id=RelationshipType_Input) at RelatedAccountPopup.pcf: line 39, column 58
    function value_4 () : typekey.AccountRelationshipType {
      return relationship.RelationshipType
    }
    
    override property get CurrentLocation () : pcf.RelatedAccountPopup {
      return super.CurrentLocation as pcf.RelatedAccountPopup
    }
    
    property get account () : Account {
      return getVariableValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setVariableValue("account", 0, $arg)
    }
    
    property get accountAccount () : AccountAccount {
      return getVariableValue("accountAccount", 0) as AccountAccount
    }
    
    property set accountAccount ($arg :  AccountAccount) {
      setVariableValue("accountAccount", 0, $arg)
    }
    
    property get relationship () : gw.account.AccountRelationship {
      return getVariableValue("relationship", 0) as gw.account.AccountRelationship
    }
    
    property set relationship ($arg :  gw.account.AccountRelationship) {
      setVariableValue("relationship", 0, $arg)
    }
    
    
  }
  
  
}