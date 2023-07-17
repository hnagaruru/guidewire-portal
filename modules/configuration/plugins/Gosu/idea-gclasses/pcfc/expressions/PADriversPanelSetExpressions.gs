package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/pa/policy/PADriversPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PADriversPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PADriversPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DriverDetailsCVExpressionsImpl extends DriversListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at PADriversPanelSet.pcf: line 159, column 66
    function def_onEnter_45 (def :  pcf.PolicyContactDetailsDV) : void {
      def.onEnter(selectedDriver, false)
    }
    
    // 'def' attribute on PanelRef at PADriversPanelSet.pcf: line 179, column 145
    function def_onEnter_67 (def :  pcf.AddressesPanelSet) : void {
      def.onEnter(selectedDriver.AccountContactRole.AccountContact.Contact,false, policyPeriod.Policy.Account, policyPeriod)
    }
    
    // 'def' attribute on PanelRef (id=MotorVehicleRecordCard) at PADriversPanelSet.pcf: line 186, column 42
    function def_onEnter_70 (def :  pcf.PersonalMotorVehicleRecordsDV) : void {
      def.onEnter(mvrOrder, selectedDriver)
    }
    
    // 'def' attribute on PanelRef (id=MVRIncidentCard) at PADriversPanelSet.pcf: line 190, column 171
    function def_onEnter_73 (def :  pcf.MVRIncidentLV) : void {
      def.onEnter(mvrOrder.MVRData)
    }
    
    // 'def' attribute on PanelRef at PADriversPanelSet.pcf: line 159, column 66
    function def_refreshVariables_46 (def :  pcf.PolicyContactDetailsDV) : void {
      def.refreshVariables(selectedDriver, false)
    }
    
    // 'def' attribute on PanelRef at PADriversPanelSet.pcf: line 179, column 145
    function def_refreshVariables_68 (def :  pcf.AddressesPanelSet) : void {
      def.refreshVariables(selectedDriver.AccountContactRole.AccountContact.Contact,false, policyPeriod.Policy.Account, policyPeriod)
    }
    
    // 'def' attribute on PanelRef (id=MotorVehicleRecordCard) at PADriversPanelSet.pcf: line 186, column 42
    function def_refreshVariables_71 (def :  pcf.PersonalMotorVehicleRecordsDV) : void {
      def.refreshVariables(mvrOrder, selectedDriver)
    }
    
    // 'def' attribute on PanelRef (id=MVRIncidentCard) at PADriversPanelSet.pcf: line 190, column 171
    function def_refreshVariables_74 (def :  pcf.MVRIncidentLV) : void {
      def.refreshVariables(mvrOrder.MVRData)
    }
    
    // 'initialValue' attribute on Variable at PADriversPanelSet.pcf: line 154, column 55
    function initialValue_44 () : gw.api.motorvehiclerecord.IMVROrder {
      return gw.web.line.pa.policy.PADriversPanelSetUIHelper.getMVROrder(selectedDriver != null ? selectedDriver.refreshAndReturnPolicyDriverMVR() : null)
    }
    
    // 'value' attribute on PanelIterator (id=PolicyContactRoleIterator) at PADriversPanelSet.pcf: line 168, column 52
    function value_66 () : entity.PolicyContactRole[] {
      return selectedDriver.Branch.PolicyContactRoles.where(\ pcr -> pcr.AccountContactRole.AccountContact == selectedDriver.AccountContactRole.AccountContact)
    }
    
    // 'visible' attribute on Card (id=AddressDetailCard) at PADriversPanelSet.pcf: line 177, column 86
    function visible_69 () : java.lang.Boolean {
      return selectedDriver.AccountContactRole.AccountContact.Contact != null
    }
    
    // 'visible' attribute on PanelRef (id=MVRIncidentCard) at PADriversPanelSet.pcf: line 190, column 171
    function visible_72 () : java.lang.Boolean {
      return mvrOrder != null ? mvrOrder.OrderStatus == typekey.MVRStatus.TC_RECEIVED and not (mvrOrder.MVRResponse == typekey.MVRResponse.TC_NOTFOUND) : false
    }
    
    property get mvrOrder () : gw.api.motorvehiclerecord.IMVROrder {
      return getVariableValue("mvrOrder", 2) as gw.api.motorvehiclerecord.IMVROrder
    }
    
    property set mvrOrder ($arg :  gw.api.motorvehiclerecord.IMVROrder) {
      setVariableValue("mvrOrder", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PADriversPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DriversListDetailPanelExpressionsImpl extends PADriversPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=RetrieveMVRButton) at PADriversPanelSet.pcf: line 85, column 91
    function allCheckedRowsAction_13 (CheckedValues :  entity.PolicyDriver[], CheckedValuesErrors :  java.util.Map) : void {
      gw.web.line.pa.policy.PADriversPanelSetUIHelper.attachMVRToPolicyDriver(CurrentLocation, policyPeriod, CheckedValues)
    }
    
    // 'conversionExpression' attribute on AddMenuItem (id=AddFromSearch) at PADriversPanelSet.pcf: line 58, column 66
    function conversionExpression_6 (PickedValue :  Contact) : entity.PolicyDriver {
      return paLine.addNewPolicyDriverForContact(PickedValue)
    }
    
    // 'label' attribute on AddMenuItem (id=AddExistingContact) at PADriversPanelSet.pcf: line 63, column 82
    function label_12 () : java.lang.Object {
      return DisplayKey.get("Web.Policy.Contact.AddExisting", PolicyDriver.Type.TypeInfo.DisplayName)
    }
    
    // 'pickLocation' attribute on AddMenuItem (id=AddFromSearch) at PADriversPanelSet.pcf: line 58, column 66
    function pickLocation_7 () : void {
      ContactSearchPopup.push(TC_DRIVER)
    }
    
    // 'sortBy' attribute on IteratorSort at PADriversPanelSet.pcf: line 46, column 32
    function sortBy_2 (contactType :  typekey.ContactType) : java.lang.Object {
      return contactType.DisplayName
    }
    
    // 'sortBy' attribute on TextCell (id=Name_Cell) at PADriversPanelSet.pcf: line 107, column 45
    function sortValue_15 (driver :  entity.PolicyDriver) : java.lang.Object {
      return driver.FirstName
    }
    
    // 'value' attribute on TextCell (id=LicenseNumber_Cell) at PADriversPanelSet.pcf: line 112, column 47
    function sortValue_16 (driver :  entity.PolicyDriver) : java.lang.Object {
      return driver.LicenseNumber
    }
    
    // 'value' attribute on TypeKeyCell (id=LicenseState_Cell) at PADriversPanelSet.pcf: line 118, column 51
    function sortValue_17 (driver :  entity.PolicyDriver) : java.lang.Object {
      return driver.LicenseState
    }
    
    // 'value' attribute on TextCell (id=MVRStatus_Cell) at PADriversPanelSet.pcf: line 122, column 48
    function sortValue_18 (driver :  entity.PolicyDriver) : java.lang.Object {
      return driver.MVROrderStatus
    }
    
    // 'value' attribute on DateCell (id=StatusDate_Cell) at PADriversPanelSet.pcf: line 126, column 78
    function sortValue_19 (driver :  entity.PolicyDriver) : java.lang.Object {
      return driver.refreshAndReturnPolicyDriverMVR().StatusDate
    }
    
    // 'value' attribute on TextCell (id=DoNotOrderMVR_Cell) at PADriversPanelSet.pcf: line 132, column 54
    function sortValue_20 (driver :  entity.PolicyDriver) : java.lang.Object {
      return driver.DoNotOrderMVRDisplay
    }
    
    // 'toRemove' attribute on RowIterator (id=DriverIterator) at PADriversPanelSet.pcf: line 97, column 47
    function toRemove_42 (driver :  entity.PolicyDriver) : void {
      gw.lob.pa.PALineStepsValidator.validateRemovingDriver( paLine, driver ); paLine.removePolicyDriver(driver)
    }
    
    // 'value' attribute on AddMenuItemIterator (id=ContactOfSameType) at PADriversPanelSet.pcf: line 68, column 53
    function value_10 () : entity.AccountContact[] {
      return unassignedDrivers
    }
    
    // 'value' attribute on RowIterator (id=DriverIterator) at PADriversPanelSet.pcf: line 97, column 47
    function value_43 () : entity.PolicyDriver[] {
      return paLine.PolicyDrivers
    }
    
    // 'value' attribute on AddMenuItemIterator at PADriversPanelSet.pcf: line 43, column 49
    function value_5 () : typekey.ContactType[] {
      return contactConfigPlugin.getAllowedContactTypesForPolicyContactRoleType(typekey.PolicyContactRole.TC_POLICYDRIVER)
    }
    
    // 'visible' attribute on AddMenuItem (id=AddExistingContact) at PADriversPanelSet.pcf: line 63, column 82
    function visible_11 () : java.lang.Boolean {
      return !policyPeriod.Promoted and unassignedDrivers.HasElements
    }
    
    // 'visible' attribute on Toolbar (id=DriversLV_tb) at PADriversPanelSet.pcf: line 34, column 33
    function visible_14 () : java.lang.Boolean {
      return openForEdit
    }
    
    property get selectedDriver () : PolicyDriver {
      return getCurrentSelection(1) as PolicyDriver
    }
    
    property set selectedDriver ($arg :  PolicyDriver) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PADriversPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends DriversListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=UnassignedDriver) at PADriversPanelSet.pcf: line 73, column 99
    function label_8 () : java.lang.Object {
      return unassignedDriver
    }
    
    // 'toCreateAndAdd' attribute on AddMenuItem (id=UnassignedDriver) at PADriversPanelSet.pcf: line 73, column 99
    function toCreateAndAdd_9 (CheckedValues :  Object[]) : java.lang.Object {
      return paLine.addNewPolicyDriverForContact(unassignedDriver.Contact)
    }
    
    property get unassignedDriver () : entity.AccountContact {
      return getIteratedValue(2) as entity.AccountContact
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PADriversPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends DriversListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=GoToContactButton) at PADriversPanelSet.pcf: line 142, column 90
    function action_40 () : void {
      ContactForward.go(driver.AccountContactRole.AccountContact.Contact)
    }
    
    // 'action' attribute on Link (id=GoToContactButton) at PADriversPanelSet.pcf: line 142, column 90
    function action_dest_41 () : pcf.api.Destination {
      return pcf.ContactForward.createDestination(driver.AccountContactRole.AccountContact.Contact)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at PADriversPanelSet.pcf: line 107, column 45
    function valueRoot_23 () : java.lang.Object {
      return driver
    }
    
    // 'value' attribute on DateCell (id=StatusDate_Cell) at PADriversPanelSet.pcf: line 126, column 78
    function valueRoot_35 () : java.lang.Object {
      return driver.refreshAndReturnPolicyDriverMVR()
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at PADriversPanelSet.pcf: line 107, column 45
    function value_22 () : java.lang.String {
      return driver.DisplayName
    }
    
    // 'value' attribute on TextCell (id=LicenseNumber_Cell) at PADriversPanelSet.pcf: line 112, column 47
    function value_25 () : java.lang.String {
      return driver.LicenseNumber
    }
    
    // 'value' attribute on TypeKeyCell (id=LicenseState_Cell) at PADriversPanelSet.pcf: line 118, column 51
    function value_28 () : typekey.Jurisdiction {
      return driver.LicenseState
    }
    
    // 'value' attribute on TextCell (id=MVRStatus_Cell) at PADriversPanelSet.pcf: line 122, column 48
    function value_31 () : java.lang.String {
      return driver.MVROrderStatus
    }
    
    // 'value' attribute on DateCell (id=StatusDate_Cell) at PADriversPanelSet.pcf: line 126, column 78
    function value_34 () : java.util.Date {
      return driver.refreshAndReturnPolicyDriverMVR().StatusDate
    }
    
    // 'value' attribute on TextCell (id=DoNotOrderMVR_Cell) at PADriversPanelSet.pcf: line 132, column 54
    function value_37 () : java.lang.String {
      return driver.DoNotOrderMVRDisplay
    }
    
    property get driver () : entity.PolicyDriver {
      return getIteratedValue(2) as entity.PolicyDriver
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PADriversPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DriversListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=ContactType) at PADriversPanelSet.pcf: line 51, column 80
    function label_3 () : java.lang.Object {
      return DisplayKey.get("Web.Contact.AddNewOfType", contactType)
    }
    
    // 'pickLocation' attribute on AddMenuItem (id=ContactType) at PADriversPanelSet.pcf: line 51, column 80
    function pickLocation_4 () : void {
      NewPolicyDriverPopup.push(paLine, contactType)
    }
    
    property get contactType () : typekey.ContactType {
      return getIteratedValue(2) as typekey.ContactType
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PADriversPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PADriversPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at PADriversPanelSet.pcf: line 19, column 54
    function initialValue_0 () : gw.plugin.contact.IContactConfigPlugin {
      return gw.plugin.Plugins.get(gw.plugin.contact.IContactConfigPlugin)
    }
    
    // 'initialValue' attribute on Variable at PADriversPanelSet.pcf: line 24, column 39
    function initialValue_1 () : entity.AccountContact[] {
      return paLine.UnassignedDrivers
    }
    
    property get contactConfigPlugin () : gw.plugin.contact.IContactConfigPlugin {
      return getVariableValue("contactConfigPlugin", 0) as gw.plugin.contact.IContactConfigPlugin
    }
    
    property set contactConfigPlugin ($arg :  gw.plugin.contact.IContactConfigPlugin) {
      setVariableValue("contactConfigPlugin", 0, $arg)
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
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get unassignedDrivers () : entity.AccountContact[] {
      return getVariableValue("unassignedDrivers", 0) as entity.AccountContact[]
    }
    
    property set unassignedDrivers ($arg :  entity.AccountContact[]) {
      setVariableValue("unassignedDrivers", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PADriversPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends DriverDetailsCVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at PADriversPanelSet.pcf: line 171, column 56
    function def_onEnter_47 (def :  pcf.PolicyContactRolePanelSet_PolicyAddlInsured) : void {
      def.onEnter(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at PADriversPanelSet.pcf: line 171, column 56
    function def_onEnter_49 (def :  pcf.PolicyContactRolePanelSet_PolicyAddlInterest) : void {
      def.onEnter(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at PADriversPanelSet.pcf: line 171, column 56
    function def_onEnter_51 (def :  pcf.PolicyContactRolePanelSet_PolicyAddlNamedInsured) : void {
      def.onEnter(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at PADriversPanelSet.pcf: line 171, column 56
    function def_onEnter_53 (def :  pcf.PolicyContactRolePanelSet_PolicyDriver) : void {
      def.onEnter(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at PADriversPanelSet.pcf: line 171, column 56
    function def_onEnter_55 (def :  pcf.PolicyContactRolePanelSet_PolicyLaborClient) : void {
      def.onEnter(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at PADriversPanelSet.pcf: line 171, column 56
    function def_onEnter_57 (def :  pcf.PolicyContactRolePanelSet_PolicyLaborContractor) : void {
      def.onEnter(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at PADriversPanelSet.pcf: line 171, column 56
    function def_onEnter_59 (def :  pcf.PolicyContactRolePanelSet_PolicyOwnerOfficer) : void {
      def.onEnter(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at PADriversPanelSet.pcf: line 171, column 56
    function def_onEnter_61 (def :  pcf.PolicyContactRolePanelSet_PolicyPriNamedInsured) : void {
      def.onEnter(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at PADriversPanelSet.pcf: line 171, column 56
    function def_onEnter_63 (def :  pcf.PolicyContactRolePanelSet_default) : void {
      def.onEnter(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at PADriversPanelSet.pcf: line 171, column 56
    function def_refreshVariables_48 (def :  pcf.PolicyContactRolePanelSet_PolicyAddlInsured) : void {
      def.refreshVariables(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at PADriversPanelSet.pcf: line 171, column 56
    function def_refreshVariables_50 (def :  pcf.PolicyContactRolePanelSet_PolicyAddlInterest) : void {
      def.refreshVariables(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at PADriversPanelSet.pcf: line 171, column 56
    function def_refreshVariables_52 (def :  pcf.PolicyContactRolePanelSet_PolicyAddlNamedInsured) : void {
      def.refreshVariables(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at PADriversPanelSet.pcf: line 171, column 56
    function def_refreshVariables_54 (def :  pcf.PolicyContactRolePanelSet_PolicyDriver) : void {
      def.refreshVariables(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at PADriversPanelSet.pcf: line 171, column 56
    function def_refreshVariables_56 (def :  pcf.PolicyContactRolePanelSet_PolicyLaborClient) : void {
      def.refreshVariables(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at PADriversPanelSet.pcf: line 171, column 56
    function def_refreshVariables_58 (def :  pcf.PolicyContactRolePanelSet_PolicyLaborContractor) : void {
      def.refreshVariables(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at PADriversPanelSet.pcf: line 171, column 56
    function def_refreshVariables_60 (def :  pcf.PolicyContactRolePanelSet_PolicyOwnerOfficer) : void {
      def.refreshVariables(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at PADriversPanelSet.pcf: line 171, column 56
    function def_refreshVariables_62 (def :  pcf.PolicyContactRolePanelSet_PolicyPriNamedInsured) : void {
      def.refreshVariables(currentPolicyContactRole)
    }
    
    // 'def' attribute on PanelRef at PADriversPanelSet.pcf: line 171, column 56
    function def_refreshVariables_64 (def :  pcf.PolicyContactRolePanelSet_default) : void {
      def.refreshVariables(currentPolicyContactRole)
    }
    
    // 'mode' attribute on PanelRef at PADriversPanelSet.pcf: line 171, column 56
    function mode_65 () : java.lang.Object {
      return currentPolicyContactRole.Subtype
    }
    
    property get currentPolicyContactRole () : entity.PolicyContactRole {
      return getIteratedValue(3) as entity.PolicyContactRole
    }
    
    
  }
  
  
}