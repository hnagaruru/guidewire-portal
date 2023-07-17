package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/pa/policy/PAQuickQuoteDriverPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PAQuickQuoteDriverPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PAQuickQuoteDriverPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends PAQuickQuoteDriverPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=UnassignedDriver) at PAQuickQuoteDriverPanelSet.pcf: line 78, column 43
    function action_12 () : void {
      paLine.addNewPolicyDriverForContact(unassignedDriver.Contact, driverNum)
    }
    
    // 'label' attribute on MenuItem (id=UnassignedDriver) at PAQuickQuoteDriverPanelSet.pcf: line 78, column 43
    function label_13 () : java.lang.Object {
      return unassignedDriver
    }
    
    property get unassignedDriver () : entity.AccountContact {
      return getIteratedValue(1) as entity.AccountContact
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PAQuickQuoteDriverPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PAQuickQuoteDriverPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=ContactType) at PAQuickQuoteDriverPanelSet.pcf: line 59, column 90
    function action_6 () : void {
      paLine.addNewPolicyDriverOfContactType(contactType, driverNum)
    }
    
    // 'label' attribute on MenuItem (id=ContactType) at PAQuickQuoteDriverPanelSet.pcf: line 59, column 90
    function label_7 () : java.lang.Object {
      return DisplayKey.get("Web.Contact.AddNewOfType", contactType)
    }
    
    property get contactType () : typekey.ContactType {
      return getIteratedValue(1) as typekey.ContactType
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PAQuickQuoteDriverPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PAQuickQuoteDriverPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=RemoveDriverButton) at PAQuickQuoteDriverPanelSet.pcf: line 87, column 62
    function action_19 () : void {
      policyDriver.removeDriver()
    }
    
    // 'action' attribute on PickerMenuItem (id=AddFromSearch) at PAQuickQuoteDriverPanelSet.pcf: line 65, column 83
    function action_9 () : void {
      ContactSearchPopup.push(TC_DRIVER)
    }
    
    // 'action' attribute on PickerMenuItem (id=AddFromSearch) at PAQuickQuoteDriverPanelSet.pcf: line 65, column 83
    function action_dest_10 () : pcf.api.Destination {
      return pcf.ContactSearchPopup.createDestination(TC_DRIVER)
    }
    
    // 'def' attribute on InputSetRef at PAQuickQuoteDriverPanelSet.pcf: line 94, column 60
    function def_onEnter_21 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.onEnter(new gw.api.name.RequiredBasicNameOwner(policyDriverNameAdapter))
    }
    
    // 'def' attribute on InputSetRef at PAQuickQuoteDriverPanelSet.pcf: line 94, column 60
    function def_onEnter_23 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.onEnter(new gw.api.name.RequiredBasicNameOwner(policyDriverNameAdapter))
    }
    
    // 'def' attribute on InputSetRef at PAQuickQuoteDriverPanelSet.pcf: line 94, column 60
    function def_refreshVariables_22 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.refreshVariables(new gw.api.name.RequiredBasicNameOwner(policyDriverNameAdapter))
    }
    
    // 'def' attribute on InputSetRef at PAQuickQuoteDriverPanelSet.pcf: line 94, column 60
    function def_refreshVariables_24 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.refreshVariables(new gw.api.name.RequiredBasicNameOwner(policyDriverNameAdapter))
    }
    
    // 'value' attribute on DateInput (id=DateOfBirth_Input) at PAQuickQuoteDriverPanelSet.pcf: line 100, column 47
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyDriver.DateOfBirth = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=MaritalStatus_Input) at PAQuickQuoteDriverPanelSet.pcf: line 107, column 48
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyDriver.MaritalStatus = (__VALUE_TO_SET as typekey.MaritalStatus)
    }
    
    // 'value' attribute on TypeKeyInput (id=NumberOfAccidents_Input) at PAQuickQuoteDriverPanelSet.pcf: line 114, column 52
    function defaultSetter_38 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyDriver.NumberOfAccidents = (__VALUE_TO_SET as typekey.NumberOfAccidents)
    }
    
    // 'value' attribute on TypeKeyInput (id=NumberOfViolations_Input) at PAQuickQuoteDriverPanelSet.pcf: line 121, column 52
    function defaultSetter_43 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyDriver.NumberOfViolations = (__VALUE_TO_SET as typekey.NumberOfAccidents)
    }
    
    // 'value' attribute on TextInput (id=YearLicensed_Input) at PAQuickQuoteDriverPanelSet.pcf: line 128, column 44
    function defaultSetter_48 (__VALUE_TO_SET :  java.lang.Object) : void {
      accountDriver.YearLicensed = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=TrainingClassType_Input) at PAQuickQuoteDriverPanelSet.pcf: line 134, column 52
    function defaultSetter_52 (__VALUE_TO_SET :  java.lang.Object) : void {
      accountDriver.TrainingClassType = (__VALUE_TO_SET as typekey.TrainingClassType)
    }
    
    // 'value' attribute on DateInput (id=DateCompletedTrainingClass_Input) at PAQuickQuoteDriverPanelSet.pcf: line 139, column 63
    function defaultSetter_56 (__VALUE_TO_SET :  java.lang.Object) : void {
      accountDriver.DateCompletedTrainingClass = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'initialValue' attribute on Variable at PAQuickQuoteDriverPanelSet.pcf: line 25, column 54
    function initialValue_0 () : gw.plugin.contact.IContactConfigPlugin {
      return gw.plugin.Plugins.get(gw.plugin.contact.IContactConfigPlugin)
    }
    
    // 'initialValue' attribute on Variable at PAQuickQuoteDriverPanelSet.pcf: line 30, column 39
    function initialValue_1 () : entity.AccountContact[] {
      return paLine.UnassignedDrivers
    }
    
    // 'initialValue' attribute on Variable at PAQuickQuoteDriverPanelSet.pcf: line 35, column 49
    function initialValue_2 () : gw.lob.pa.PolicyDriverNameAdapter {
      return new gw.lob.pa.PolicyDriverNameAdapter(policyDriver)
    }
    
    // 'label' attribute on MenuItem (id=AddExistingContact) at PAQuickQuoteDriverPanelSet.pcf: line 69, column 56
    function label_16 () : java.lang.Object {
      return DisplayKey.get("Web.Policy.Contact.AddExisting", entity.PolicyDriver.Type.TypeInfo.DisplayName)
    }
    
    // 'label' attribute on ToolbarButton (id=AddDriverButton) at PAQuickQuoteDriverPanelSet.pcf: line 48, column 100
    function label_17 () : java.lang.Object {
      return DisplayKey.get("Web.PersonalAuto.QuickQuote.Button.Driver", driverNum)
    }
    
    // 'mode' attribute on InputSetRef at PAQuickQuoteDriverPanelSet.pcf: line 94, column 60
    function mode_25 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'onPick' attribute on PickerMenuItem (id=AddFromSearch) at PAQuickQuoteDriverPanelSet.pcf: line 65, column 83
    function onPick_11 (PickedValue :  Contact) : void {
      paLine.addNewPolicyDriverForContact(PickedValue, driverNum)
    }
    
    // 'sortBy' attribute on IteratorSort at PAQuickQuoteDriverPanelSet.pcf: line 55, column 30
    function sortBy_5 (contactType :  typekey.ContactType) : java.lang.Object {
      return contactType.DisplayName
    }
    
    // 'title' attribute on TitleBar at PAQuickQuoteDriverPanelSet.pcf: line 40, column 41
    function title_4 () : java.lang.String {
      return DisplayKey.get("Web.PersonalAuto.QuickQuote.Button.Driver", driverNum)
    }
    
    // 'value' attribute on DateInput (id=DateOfBirth_Input) at PAQuickQuoteDriverPanelSet.pcf: line 100, column 47
    function valueRoot_29 () : java.lang.Object {
      return policyDriver
    }
    
    // 'value' attribute on TextInput (id=YearLicensed_Input) at PAQuickQuoteDriverPanelSet.pcf: line 128, column 44
    function valueRoot_49 () : java.lang.Object {
      return accountDriver
    }
    
    // 'value' attribute on MenuItemIterator (id=ContactOfSameType) at PAQuickQuoteDriverPanelSet.pcf: line 74, column 51
    function value_14 () : entity.AccountContact[] {
      return unassignedDrivers
    }
    
    // 'value' attribute on DateInput (id=DateOfBirth_Input) at PAQuickQuoteDriverPanelSet.pcf: line 100, column 47
    function value_27 () : java.util.Date {
      return policyDriver.DateOfBirth
    }
    
    // 'value' attribute on TypeKeyInput (id=MaritalStatus_Input) at PAQuickQuoteDriverPanelSet.pcf: line 107, column 48
    function value_32 () : typekey.MaritalStatus {
      return policyDriver.MaritalStatus
    }
    
    // 'value' attribute on TypeKeyInput (id=NumberOfAccidents_Input) at PAQuickQuoteDriverPanelSet.pcf: line 114, column 52
    function value_37 () : typekey.NumberOfAccidents {
      return policyDriver.NumberOfAccidents
    }
    
    // 'value' attribute on TypeKeyInput (id=NumberOfViolations_Input) at PAQuickQuoteDriverPanelSet.pcf: line 121, column 52
    function value_42 () : typekey.NumberOfAccidents {
      return policyDriver.NumberOfViolations
    }
    
    // 'value' attribute on TextInput (id=YearLicensed_Input) at PAQuickQuoteDriverPanelSet.pcf: line 128, column 44
    function value_47 () : java.lang.Integer {
      return accountDriver.YearLicensed
    }
    
    // 'value' attribute on TypeKeyInput (id=TrainingClassType_Input) at PAQuickQuoteDriverPanelSet.pcf: line 134, column 52
    function value_51 () : typekey.TrainingClassType {
      return accountDriver.TrainingClassType
    }
    
    // 'value' attribute on DateInput (id=DateCompletedTrainingClass_Input) at PAQuickQuoteDriverPanelSet.pcf: line 139, column 63
    function value_55 () : java.util.Date {
      return accountDriver.DateCompletedTrainingClass
    }
    
    // 'value' attribute on MenuItemIterator at PAQuickQuoteDriverPanelSet.pcf: line 52, column 47
    function value_8 () : typekey.ContactType[] {
      return contactConfigPlugin.getAllowedContactTypesForPolicyContactRoleType(typekey.PolicyContactRole.TC_POLICYDRIVER)
    }
    
    // 'visible' attribute on MenuItem (id=AddExistingContact) at PAQuickQuoteDriverPanelSet.pcf: line 69, column 56
    function visible_15 () : java.lang.Boolean {
      return not policyDriver.Branch.Promoted
    }
    
    // 'visible' attribute on Toolbar (id=DriverToolbar) at PAQuickQuoteDriverPanelSet.pcf: line 43, column 31
    function visible_20 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'visible' attribute on TitleBar at PAQuickQuoteDriverPanelSet.pcf: line 40, column 41
    function visible_3 () : java.lang.Boolean {
      return policyDriver != null
    }
    
    property get accountDriver () : Driver {
      return getRequireValue("accountDriver", 0) as Driver
    }
    
    property set accountDriver ($arg :  Driver) {
      setRequireValue("accountDriver", 0, $arg)
    }
    
    property get contactConfigPlugin () : gw.plugin.contact.IContactConfigPlugin {
      return getVariableValue("contactConfigPlugin", 0) as gw.plugin.contact.IContactConfigPlugin
    }
    
    property set contactConfigPlugin ($arg :  gw.plugin.contact.IContactConfigPlugin) {
      setVariableValue("contactConfigPlugin", 0, $arg)
    }
    
    property get driverNum () : int {
      return getRequireValue("driverNum", 0) as java.lang.Integer
    }
    
    property set driverNum ($arg :  int) {
      setRequireValue("driverNum", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get paLine () : PersonalAutoLine {
      return getRequireValue("paLine", 0) as PersonalAutoLine
    }
    
    property set paLine ($arg :  PersonalAutoLine) {
      setRequireValue("paLine", 0, $arg)
    }
    
    property get policyDriver () : PolicyDriver {
      return getRequireValue("policyDriver", 0) as PolicyDriver
    }
    
    property set policyDriver ($arg :  PolicyDriver) {
      setRequireValue("policyDriver", 0, $arg)
    }
    
    property get policyDriverNameAdapter () : gw.lob.pa.PolicyDriverNameAdapter {
      return getVariableValue("policyDriverNameAdapter", 0) as gw.lob.pa.PolicyDriverNameAdapter
    }
    
    property set policyDriverNameAdapter ($arg :  gw.lob.pa.PolicyDriverNameAdapter) {
      setVariableValue("policyDriverNameAdapter", 0, $arg)
    }
    
    property get unassignedDrivers () : entity.AccountContact[] {
      return getVariableValue("unassignedDrivers", 0) as entity.AccountContact[]
    }
    
    property set unassignedDrivers ($arg :  entity.AccountContact[]) {
      setVariableValue("unassignedDrivers", 0, $arg)
    }
    
    
  }
  
  
}