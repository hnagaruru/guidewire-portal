package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.EmployeeLeasing.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WCOptionCardPanelSet_EmployeeLeasingExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.EmployeeLeasing.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends WCOptionCardPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=AccountContact) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 63, column 97
    function label_8 () : java.lang.Object {
      return acctContact
    }
    
    // 'toCreateAndAdd' attribute on AddMenuItem (id=AccountContact) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 63, column 97
    function toCreateAndAdd_9 (CheckedValues :  Object[]) : java.lang.Object {
      return wcLine.addNewLaborClientDetailForContact(acctContact.Contact)
    }
    
    property get acctContact () : entity.AccountContact {
      return getIteratedValue(1) as entity.AccountContact
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.EmployeeLeasing.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends WCOptionCardPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=AccountContact) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 82, column 97
    function label_13 () : java.lang.Object {
      return acctContact
    }
    
    // 'toCreateAndAdd' attribute on AddMenuItem (id=AccountContact) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 82, column 97
    function toCreateAndAdd_14 (CheckedValues :  Object[]) : java.lang.Object {
      return wcLine.addNewLaborClientDetailForContact(acctContact.Contact)
    }
    
    property get acctContact () : entity.AccountContact {
      return getIteratedValue(1) as entity.AccountContact
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.EmployeeLeasing.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends WCOptionCardPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 111, column 50
    function action_21 () : void {
      EditPolicyContactRolePopup.push(policyLaborClientDetail.WCLaborContact, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 111, column 50
    function action_dest_22 () : pcf.api.Destination {
      return pcf.EditPolicyContactRolePopup.createDestination(policyLaborClientDetail.WCLaborContact, openForEdit)
    }
    
    // 'value' attribute on TypeKeyCell (id=Inclusion_Cell) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 119, column 29
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyLaborClientDetail.Inclusion = (__VALUE_TO_SET as typekey.Inclusion)
    }
    
    // 'value' attribute on DateCell (id=ContractEffectiveDate_Cell) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 132, column 29
    function defaultSetter_34 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyLaborClientDetail.ContractEffectiveDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateCell (id=ContractExpirationDate_Cell) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 139, column 29
    function defaultSetter_38 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyLaborClientDetail.ContractExpirationDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 111, column 50
    function valueRoot_24 () : java.lang.Object {
      return policyLaborClientDetail
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 125, column 29
    function valueRoot_31 () : java.lang.Object {
      return policyLaborClientDetail.WCLaborContact.AccountContactRole.AccountContact.Contact.PrimaryAddress
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 111, column 50
    function value_23 () : entity.WCLaborContact {
      return policyLaborClientDetail.WCLaborContact
    }
    
    // 'value' attribute on TypeKeyCell (id=Inclusion_Cell) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 119, column 29
    function value_26 () : typekey.Inclusion {
      return policyLaborClientDetail.Inclusion
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 125, column 29
    function value_30 () : typekey.State {
      return policyLaborClientDetail.WCLaborContact.AccountContactRole.AccountContact.Contact.PrimaryAddress.State
    }
    
    // 'value' attribute on DateCell (id=ContractEffectiveDate_Cell) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 132, column 29
    function value_33 () : java.util.Date {
      return policyLaborClientDetail.ContractEffectiveDate
    }
    
    // 'value' attribute on DateCell (id=ContractExpirationDate_Cell) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 139, column 29
    function value_37 () : java.util.Date {
      return policyLaborClientDetail.ContractExpirationDate
    }
    
    property get policyLaborClientDetail () : entity.WCLaborContactDetail {
      return getIteratedValue(1) as entity.WCLaborContactDetail
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.EmployeeLeasing.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry5ExpressionsImpl extends WCOptionCardPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=ContactType) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 165, column 95
    function label_44 () : java.lang.Object {
      return DisplayKey.get("Web.Contact.AddNewOfType", contactType)
    }
    
    // 'pickLocation' attribute on AddMenuItem (id=ContactType) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 165, column 95
    function pickLocation_45 () : void {
      NewLaborContractorForContactTypePopup.push(wcLine, contactType)
    }
    
    property get contactType () : typekey.ContactType {
      return getIteratedValue(1) as typekey.ContactType
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.EmployeeLeasing.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry6ExpressionsImpl extends WCOptionCardPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=AccountContact) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 189, column 101
    function label_50 () : java.lang.Object {
      return acctContact
    }
    
    // 'toCreateAndAdd' attribute on AddMenuItem (id=AccountContact) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 189, column 101
    function toCreateAndAdd_51 (CheckedValues :  Object[]) : java.lang.Object {
      return wcLine.addNewLaborContractorDetailForContact(acctContact.Contact)
    }
    
    property get acctContact () : entity.AccountContact {
      return getIteratedValue(1) as entity.AccountContact
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.EmployeeLeasing.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry7ExpressionsImpl extends WCOptionCardPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=AccountContact) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 208, column 101
    function label_55 () : java.lang.Object {
      return acctContact
    }
    
    // 'toCreateAndAdd' attribute on AddMenuItem (id=AccountContact) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 208, column 101
    function toCreateAndAdd_56 (CheckedValues :  Object[]) : java.lang.Object {
      return wcLine.addNewLaborContractorDetailForContact(acctContact.Contact)
    }
    
    property get acctContact () : entity.AccountContact {
      return getIteratedValue(1) as entity.AccountContact
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.EmployeeLeasing.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry8ExpressionsImpl extends WCOptionCardPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 237, column 50
    function action_63 () : void {
      EditPolicyContactRolePopup.push(policyLaborContractorDetail.WCLaborContact, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 237, column 50
    function action_dest_64 () : pcf.api.Destination {
      return pcf.EditPolicyContactRolePopup.createDestination(policyLaborContractorDetail.WCLaborContact, openForEdit)
    }
    
    // 'value' attribute on TypeKeyCell (id=Inclusion_Cell) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 245, column 29
    function defaultSetter_69 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyLaborContractorDetail.Inclusion = (__VALUE_TO_SET as typekey.Inclusion)
    }
    
    // 'value' attribute on DateCell (id=ContractEffectiveDate_Cell) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 258, column 29
    function defaultSetter_76 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyLaborContractorDetail.ContractEffectiveDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateCell (id=ContractExpirationDate_Cell) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 265, column 29
    function defaultSetter_80 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyLaborContractorDetail.ContractExpirationDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 237, column 50
    function valueRoot_66 () : java.lang.Object {
      return policyLaborContractorDetail
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 251, column 29
    function valueRoot_73 () : java.lang.Object {
      return policyLaborContractorDetail.WCLaborContact.AccountContactRole.AccountContact.Contact.PrimaryAddress
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 237, column 50
    function value_65 () : entity.WCLaborContact {
      return policyLaborContractorDetail.WCLaborContact
    }
    
    // 'value' attribute on TypeKeyCell (id=Inclusion_Cell) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 245, column 29
    function value_68 () : typekey.Inclusion {
      return policyLaborContractorDetail.Inclusion
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 251, column 29
    function value_72 () : typekey.State {
      return policyLaborContractorDetail.WCLaborContact.AccountContactRole.AccountContact.Contact.PrimaryAddress.State
    }
    
    // 'value' attribute on DateCell (id=ContractEffectiveDate_Cell) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 258, column 29
    function value_75 () : java.util.Date {
      return policyLaborContractorDetail.ContractEffectiveDate
    }
    
    // 'value' attribute on DateCell (id=ContractExpirationDate_Cell) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 265, column 29
    function value_79 () : java.util.Date {
      return policyLaborContractorDetail.ContractExpirationDate
    }
    
    property get policyLaborContractorDetail () : entity.WCLaborContactDetail {
      return getIteratedValue(1) as entity.WCLaborContactDetail
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.EmployeeLeasing.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends WCOptionCardPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=ContactType) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 39, column 91
    function label_2 () : java.lang.Object {
      return DisplayKey.get("Web.Contact.AddNewOfType", contactType)
    }
    
    // 'pickLocation' attribute on AddMenuItem (id=ContactType) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 39, column 91
    function pickLocation_3 () : void {
      NewLaborClientForContactTypePopup.push(wcLine, contactType)
    }
    
    property get contactType () : typekey.ContactType {
      return getIteratedValue(1) as typekey.ContactType
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.EmployeeLeasing.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WCOptionCardPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'conversionExpression' attribute on AddMenuItem (id=AddFromSearch) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 172, column 73
    function conversionExpression_47 (PickedValue :  Contact) : entity.WCLaborContactDetail {
      return wcLine.addNewLaborContractorDetailForContact(PickedValue)
    }
    
    // 'conversionExpression' attribute on AddMenuItem (id=AddFromSearch) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 46, column 69
    function conversionExpression_5 (PickedValue :  Contact) : entity.WCLaborContactDetail {
      return wcLine.addNewLaborClientDetailForContact(PickedValue)
    }
    
    // 'initialValue' attribute on Variable at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 17, column 54
    function initialValue_0 () : gw.plugin.contact.IContactConfigPlugin {
      return gw.plugin.Plugins.get(gw.plugin.contact.IContactConfigPlugin)
    }
    
    // 'label' attribute on AddMenuItem (id=AddExistingContact) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 51, column 122
    function label_11 () : java.lang.Object {
      return DisplayKey.get("Web.Policy.Contact.Existing", PolicyLaborClient.Type.TypeInfo.DisplayName)
    }
    
    // 'label' attribute on AddMenuItem (id=AddExistingContact) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 177, column 126
    function label_53 () : java.lang.Object {
      return DisplayKey.get("Web.Policy.Contact.Existing", PolicyLaborContractor.Type.TypeInfo.DisplayName)
    }
    
    // 'pickLocation' attribute on AddMenuItem (id=AddFromSearch) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 172, column 73
    function pickLocation_48 () : void {
      ContactSearchPopup.push(TC_LABORCONTRACTOR)
    }
    
    // 'pickLocation' attribute on AddMenuItem (id=AddFromSearch) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 46, column 69
    function pickLocation_6 () : void {
      ContactSearchPopup.push(TC_LABORCLIENT)
    }
    
    // 'sortBy' attribute on IteratorSort at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 34, column 30
    function sortBy_1 (contactType :  typekey.ContactType) : java.lang.Object {
      return contactType.DisplayName
    }
    
    // 'sortBy' attribute on IteratorSort at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 58, column 32
    function sortBy_7 (acctContact :  entity.AccountContact) : java.lang.Object {
      return acctContact.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 111, column 50
    function sortValue_16 (policyLaborClientDetail :  entity.WCLaborContactDetail) : java.lang.Object {
      return policyLaborClientDetail.WCLaborContact
    }
    
    // 'value' attribute on TypeKeyCell (id=Inclusion_Cell) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 119, column 29
    function sortValue_17 (policyLaborClientDetail :  entity.WCLaborContactDetail) : java.lang.Object {
      return policyLaborClientDetail.Inclusion
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 125, column 29
    function sortValue_18 (policyLaborClientDetail :  entity.WCLaborContactDetail) : java.lang.Object {
      return policyLaborClientDetail.WCLaborContact.AccountContactRole.AccountContact.Contact.PrimaryAddress.State
    }
    
    // 'value' attribute on DateCell (id=ContractEffectiveDate_Cell) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 132, column 29
    function sortValue_19 (policyLaborClientDetail :  entity.WCLaborContactDetail) : java.lang.Object {
      return policyLaborClientDetail.ContractEffectiveDate
    }
    
    // 'value' attribute on DateCell (id=ContractExpirationDate_Cell) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 139, column 29
    function sortValue_20 (policyLaborClientDetail :  entity.WCLaborContactDetail) : java.lang.Object {
      return policyLaborClientDetail.ContractExpirationDate
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 237, column 50
    function sortValue_58 (policyLaborContractorDetail :  entity.WCLaborContactDetail) : java.lang.Object {
      return policyLaborContractorDetail.WCLaborContact
    }
    
    // 'value' attribute on TypeKeyCell (id=Inclusion_Cell) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 245, column 29
    function sortValue_59 (policyLaborContractorDetail :  entity.WCLaborContactDetail) : java.lang.Object {
      return policyLaborContractorDetail.Inclusion
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 251, column 29
    function sortValue_60 (policyLaborContractorDetail :  entity.WCLaborContactDetail) : java.lang.Object {
      return policyLaborContractorDetail.WCLaborContact.AccountContactRole.AccountContact.Contact.PrimaryAddress.State
    }
    
    // 'value' attribute on DateCell (id=ContractEffectiveDate_Cell) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 258, column 29
    function sortValue_61 (policyLaborContractorDetail :  entity.WCLaborContactDetail) : java.lang.Object {
      return policyLaborContractorDetail.ContractEffectiveDate
    }
    
    // 'value' attribute on DateCell (id=ContractExpirationDate_Cell) at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 265, column 29
    function sortValue_62 (policyLaborContractorDetail :  entity.WCLaborContactDetail) : java.lang.Object {
      return policyLaborContractorDetail.ContractExpirationDate
    }
    
    // 'toRemove' attribute on RowIterator at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 102, column 53
    function toRemove_41 (policyLaborClientDetail :  entity.WCLaborContactDetail) : void {
      policyLaborClientDetail.WCLaborContact.removeDetail(policyLaborClientDetail)
    }
    
    // 'toRemove' attribute on RowIterator at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 228, column 53
    function toRemove_83 (policyLaborContractorDetail :  entity.WCLaborContactDetail) : void {
      policyLaborContractorDetail.WCLaborContact.removeDetail(policyLaborContractorDetail)
    }
    
    // 'value' attribute on AddMenuItemIterator at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 55, column 51
    function value_10 () : entity.AccountContact[] {
      return wcLine.PolicyLaborClientDetailExistingCandidates
    }
    
    // 'value' attribute on AddMenuItemIterator at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 74, column 51
    function value_15 () : entity.AccountContact[] {
      return wcLine.PolicyLaborClientDetailOtherCandidates
    }
    
    // 'value' attribute on AddMenuItemIterator at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 31, column 47
    function value_4 () : typekey.ContactType[] {
      return contactConfigPlugin.getAllowedContactTypesForPolicyContactRoleType(typekey.PolicyContactRole.TC_POLICYLABORCLIENT)
    }
    
    // 'value' attribute on RowIterator at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 102, column 53
    function value_42 () : entity.WCLaborContactDetail[] {
      return wcLine.PolicyLaborClients.arrays("Details").toArray(new entity.WCLaborContactDetail[0])
    }
    
    // 'value' attribute on AddMenuItemIterator at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 157, column 47
    function value_46 () : typekey.ContactType[] {
      return contactConfigPlugin.getAllowedContactTypesForPolicyContactRoleType(typekey.PolicyContactRole.TC_POLICYLABORCONTRACTOR)
    }
    
    // 'value' attribute on AddMenuItemIterator at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 181, column 51
    function value_52 () : entity.AccountContact[] {
      return wcLine.PolicyLaborContractorDetailExistingCandidates
    }
    
    // 'value' attribute on AddMenuItemIterator at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 200, column 51
    function value_57 () : entity.AccountContact[] {
      return wcLine.PolicyLaborContractorDetailOtherCandidates
    }
    
    // 'value' attribute on RowIterator at WCOptionCardPanelSet.EmployeeLeasing.pcf: line 228, column 53
    function value_84 () : entity.WCLaborContactDetail[] {
      return wcLine.PolicyLaborContractors.arrays("Details").toArray(new entity.WCLaborContactDetail[0])
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
    
    property get wcLine () : WorkersCompLine {
      return getRequireValue("wcLine", 0) as WorkersCompLine
    }
    
    property set wcLine ($arg :  WorkersCompLine) {
      setRequireValue("wcLine", 0, $arg)
    }
    
    
  }
  
  
}