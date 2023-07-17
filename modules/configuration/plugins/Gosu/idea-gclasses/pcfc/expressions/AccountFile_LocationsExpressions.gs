package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountFile_Locations.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountFile_LocationsExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_Locations.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountFile_LocationsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (account :  Account) : int {
      return 0
    }
    
    static function __constructorIndex (account :  Account, selectedLocation :  AccountLocation) : int {
      return 1
    }
    
    // 'canEdit' attribute on Page (id=AccountFile_Locations) at AccountFile_Locations.pcf: line 12, column 35
    function canEdit_15 () : java.lang.Boolean {
      return perm.Account.edit(account)
    }
    
    // 'canVisit' attribute on Page (id=AccountFile_Locations) at AccountFile_Locations.pcf: line 12, column 35
    static function canVisit_16 (account :  Account, selectedLocation :  AccountLocation) : java.lang.Boolean {
      return perm.Account.view(account) and perm.System.accountcontacts
    }
    
    // 'handlesValidationIssue' attribute on Page (id=AccountFile_Locations) at AccountFile_Locations.pcf: line 12, column 35
    static function handlesValidationIssue_17 (account :  Account, selectedLocation :  AccountLocation, VALUE :  java.lang.Object) : java.lang.Boolean {
      return VALUE typeis entity.AccountLocation
    }
    
    // 'infoBar' attribute on Page (id=AccountFile_Locations) at AccountFile_Locations.pcf: line 12, column 35
    function infoBar_onEnter_18 (def :  pcf.AccountFileInfoBar) : void {
      def.onEnter(account)
    }
    
    // 'infoBar' attribute on Page (id=AccountFile_Locations) at AccountFile_Locations.pcf: line 12, column 35
    function infoBar_refreshVariables_19 (def :  pcf.AccountFileInfoBar) : void {
      def.refreshVariables(account)
    }
    
    // Page (id=AccountFile_Locations) at AccountFile_Locations.pcf: line 12, column 35
    static function parent_20 (account :  Account, selectedLocation :  AccountLocation) : pcf.api.Destination {
      return pcf.AccountFile.createDestination(account)
    }
    
    override property get CurrentLocation () : pcf.AccountFile_Locations {
      return super.CurrentLocation as pcf.AccountFile_Locations
    }
    
    property get account () : Account {
      return getVariableValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setVariableValue("account", 0, $arg)
    }
    
    property get selectedLocation () : AccountLocation {
      return getVariableValue("selectedLocation", 0) as AccountLocation
    }
    
    property set selectedLocation ($arg :  AccountLocation) {
      setVariableValue("selectedLocation", 0, $arg)
    }
    
    function setPrimaryLocation(location : AccountLocation) {
           gw.transaction.Transaction.runWithNewBundle(\bundle -> {
              var account2 = bundle.add(account)
              var l = bundle.add(location)
              account2.PrimaryLocation = l
            })
          }
          
    function removeLocations(locations : AccountLocation[]) {
      gw.transaction.Transaction.runWithNewBundle(\bundle -> {
        var localAccount = bundle.add(account)
        for(location in locations) {
          localAccount.removeLocation(location)
        }
      })
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_Locations.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends AccountFile_LocationsExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=AddNewLocation) at AccountFile_Locations.pcf: line 53, column 31
    function action_2 () : void {
      AccountLocationPopup.push(null, account, true)
    }
    
    // 'action' attribute on ToolbarButton (id=AddNewLocation) at AccountFile_Locations.pcf: line 53, column 31
    function action_dest_3 () : pcf.api.Destination {
      return pcf.AccountLocationPopup.createDestination(null, account, true)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=removeLocation) at AccountFile_Locations.pcf: line 59, column 88
    function allCheckedRowsAction_4 (CheckedValues :  entity.AccountLocation[], CheckedValuesErrors :  java.util.Map) : void {
      removeLocations(CheckedValues)
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=changeActiveStatus) at AccountFile_Locations.pcf: line 41, column 97
    function checkedRowAction_0 (element :  entity.AccountLocation, CheckedValue :  entity.AccountLocation) : void {
      CheckedValue.Active = !CheckedValue.Active
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=setToPrimary) at AccountFile_Locations.pcf: line 47, column 91
    function checkedRowAction_1 (element :  entity.AccountLocation, CheckedValue :  entity.AccountLocation) : void {
      setPrimaryLocation(CheckedValue)
    }
    
    // 'def' attribute on PanelRef at AccountFile_Locations.pcf: line 77, column 74
    function def_onEnter_10 (def :  pcf.AccountFile_Locations_PolicyTermsLV) : void {
      def.onEnter(accountLocation)
    }
    
    // 'def' attribute on PanelRef at AccountFile_Locations.pcf: line 83, column 73
    function def_onEnter_12 (def :  pcf.AccountFile_Locations_WorkOrdersLV) : void {
      def.onEnter(accountLocation)
    }
    
    // 'def' attribute on PanelRef at AccountFile_Locations.pcf: line 32, column 27
    function def_onEnter_6 (def :  pcf.AccountFile_LocationsLV) : void {
      def.onEnter(account, selectedLocation)
    }
    
    // 'def' attribute on InputSetRef at AccountFile_Locations.pcf: line 73, column 36
    function def_onEnter_8 (def :  pcf.AccountLocationDetailInputSet) : void {
      def.onEnter(accountLocation)
    }
    
    // 'def' attribute on PanelRef at AccountFile_Locations.pcf: line 77, column 74
    function def_refreshVariables_11 (def :  pcf.AccountFile_Locations_PolicyTermsLV) : void {
      def.refreshVariables(accountLocation)
    }
    
    // 'def' attribute on PanelRef at AccountFile_Locations.pcf: line 83, column 73
    function def_refreshVariables_13 (def :  pcf.AccountFile_Locations_WorkOrdersLV) : void {
      def.refreshVariables(accountLocation)
    }
    
    // 'def' attribute on PanelRef at AccountFile_Locations.pcf: line 32, column 27
    function def_refreshVariables_7 (def :  pcf.AccountFile_LocationsLV) : void {
      def.refreshVariables(account, selectedLocation)
    }
    
    // 'def' attribute on InputSetRef at AccountFile_Locations.pcf: line 73, column 36
    function def_refreshVariables_9 (def :  pcf.AccountLocationDetailInputSet) : void {
      def.refreshVariables(accountLocation)
    }
    
    // 'selectionOnEnter' attribute on ListDetailPanel at AccountFile_Locations.pcf: line 29, column 41
    function selectionOnEnter_14 () : java.lang.Object {
      return selectedLocation
    }
    
    // 'visible' attribute on Toolbar (id=AccountFile_LocationsLV_tb) at AccountFile_Locations.pcf: line 34, column 50
    function visible_5 () : java.lang.Boolean {
      return perm.Account.edit(account)
    }
    
    property get accountLocation () : AccountLocation {
      return getCurrentSelection(1) as AccountLocation
    }
    
    property set accountLocation ($arg :  AccountLocation) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  
}