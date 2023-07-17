package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.OwnerOfficer.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WCOptionCardPanelSet_OwnerOfficerExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.OwnerOfficer.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends WCOptionCardPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=UnassignedOwnerOfficer) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 74, column 97
    function label_10 () : java.lang.Object {
      return ownerOfficer
    }
    
    // 'toCreateAndAdd' attribute on AddMenuItem (id=UnassignedOwnerOfficer) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 74, column 97
    function toCreateAndAdd_11 (CheckedValues :  Object[]) : java.lang.Object {
      return wcLine.addNewOwnerOfficerForContact(ownerOfficer.Contact)
    }
    
    property get ownerOfficer () : entity.AccountContact {
      return getIteratedValue(1) as entity.AccountContact
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.OwnerOfficer.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends WCOptionCardPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=OtherContact) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 100, column 97
    function label_17 () : java.lang.Object {
      return otherContact
    }
    
    // 'toCreateAndAdd' attribute on AddMenuItem (id=OtherContact) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 100, column 97
    function toCreateAndAdd_18 (CheckedValues :  Object[]) : java.lang.Object {
      return wcLine.addNewOwnerOfficerForContact(otherContact.Contact)
    }
    
    property get otherContact () : entity.AccountContact {
      return getIteratedValue(1) as entity.AccountContact
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.OwnerOfficer.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends WCOptionCardPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=DispName_Cell) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 129, column 33
    function action_28 () : void {
      EditPolicyContactRolePopup.push(policyOwnerOfficer, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=DispName_Cell) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 129, column 33
    function action_dest_29 () : pcf.api.Destination {
      return pcf.EditPolicyContactRolePopup.createDestination(policyOwnerOfficer, openForEdit)
    }
    
    // 'value' attribute on TypeKeyCell (id=Include_Cell) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 138, column 32
    function defaultSetter_35 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyOwnerOfficer.Included = (__VALUE_TO_SET as typekey.Inclusion)
    }
    
    // 'value' attribute on RangeCell (id=State_Cell) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 151, column 32
    function defaultSetter_39 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyOwnerOfficer.State = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'value' attribute on RangeCell (id=ClassCode_Cell) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 164, column 33
    function defaultSetter_47 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyOwnerOfficer.ClassCode = (__VALUE_TO_SET as entity.WCClassCode)
    }
    
    // 'value' attribute on TypeKeyCell (id=Relationship_Cell) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 171, column 33
    function defaultSetter_56 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyOwnerOfficer.RelationshipTitle = (__VALUE_TO_SET as typekey.Relationship)
    }
    
    // 'value' attribute on TextCell (id=Ownership_Cell) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 179, column 33
    function defaultSetter_60 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyOwnerOfficer.OwnershipPct = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'editable' attribute on RangeCell (id=ClassCode_Cell) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 164, column 33
    function editable_45 () : java.lang.Boolean {
      return (policyOwnerOfficer.Included == Inclusion.TC_INCL) and (policyOwnerOfficer.State != null) and wcLine.getClassCodesForWCCoveredEmployees(gw.api.util.StateJurisdictionMappingUtil.getStateMappingForJurisdiction(policyOwnerOfficer.State)).Count > 0
    }
    
    // 'onChange' attribute on PostOnChange at WCOptionCardPanelSet.OwnerOfficer.pcf: line 140, column 125
    function onChange_33 () : void {
      if (policyOwnerOfficer.Included == Inclusion.TC_EXCL) policyOwnerOfficer.ClassCode = null; 
    }
    
    // 'optionLabel' attribute on RangeCell (id=ClassCode_Cell) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 164, column 33
    function optionLabel_49 (VALUE :  entity.WCClassCode) : java.lang.String {
      return VALUE as java.lang.String
    }
    
    // 'valueRange' attribute on RangeCell (id=State_Cell) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 151, column 32
    function valueRange_41 () : java.lang.Object {
      return wcLine.Jurisdictions.map(\j -> j.State)
    }
    
    // 'valueRange' attribute on RangeCell (id=ClassCode_Cell) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 164, column 33
    function valueRange_50 () : java.lang.Object {
      return wcLine.getClassCodesForWCCoveredEmployees(gw.api.util.StateJurisdictionMappingUtil.getStateMappingForJurisdiction(policyOwnerOfficer.State))
    }
    
    // 'value' attribute on TextCell (id=DispName_Cell) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 129, column 33
    function valueRoot_31 () : java.lang.Object {
      return policyOwnerOfficer
    }
    
    // 'value' attribute on TextCell (id=DispName_Cell) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 129, column 33
    function value_30 () : java.lang.String {
      return policyOwnerOfficer.DisplayName
    }
    
    // 'value' attribute on TypeKeyCell (id=Include_Cell) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 138, column 32
    function value_34 () : typekey.Inclusion {
      return policyOwnerOfficer.Included
    }
    
    // 'value' attribute on RangeCell (id=State_Cell) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 151, column 32
    function value_38 () : typekey.Jurisdiction {
      return policyOwnerOfficer.State
    }
    
    // 'value' attribute on RangeCell (id=ClassCode_Cell) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 164, column 33
    function value_46 () : entity.WCClassCode {
      return policyOwnerOfficer.ClassCode
    }
    
    // 'value' attribute on TypeKeyCell (id=Relationship_Cell) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 171, column 33
    function value_55 () : typekey.Relationship {
      return policyOwnerOfficer.RelationshipTitle
    }
    
    // 'value' attribute on TextCell (id=Ownership_Cell) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 179, column 33
    function value_59 () : java.lang.Integer {
      return policyOwnerOfficer.OwnershipPct
    }
    
    // 'valueRange' attribute on RangeCell (id=State_Cell) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 151, column 32
    function verifyValueRangeIsAllowedType_42 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=State_Cell) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 151, column 32
    function verifyValueRangeIsAllowedType_42 ($$arg :  typekey.Jurisdiction[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ClassCode_Cell) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 164, column 33
    function verifyValueRangeIsAllowedType_51 ($$arg :  entity.WCClassCode[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ClassCode_Cell) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 164, column 33
    function verifyValueRangeIsAllowedType_51 ($$arg :  gw.api.database.IQueryBeanResult<entity.WCClassCode>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ClassCode_Cell) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 164, column 33
    function verifyValueRangeIsAllowedType_51 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=State_Cell) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 151, column 32
    function verifyValueRange_43 () : void {
      var __valueRangeArg = wcLine.Jurisdictions.map(\j -> j.State)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_42(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=ClassCode_Cell) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 164, column 33
    function verifyValueRange_52 () : void {
      var __valueRangeArg = wcLine.getClassCodesForWCCoveredEmployees(gw.api.util.StateJurisdictionMappingUtil.getStateMappingForJurisdiction(policyOwnerOfficer.State))
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_51(__valueRangeArg)
    }
    
    property get policyOwnerOfficer () : entity.PolicyOwnerOfficer {
      return getIteratedValue(1) as entity.PolicyOwnerOfficer
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.OwnerOfficer.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends WCOptionCardPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=ContactType) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 49, column 82
    function label_4 () : java.lang.Object {
      return DisplayKey.get("Web.Contact.AddNewOfType", contactType)
    }
    
    // 'pickLocation' attribute on AddMenuItem (id=ContactType) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 49, column 82
    function pickLocation_5 () : void {
      NewOwnerOfficerPopup.push(wcLine, contactType)
    }
    
    property get contactType () : typekey.ContactType {
      return getIteratedValue(1) as typekey.ContactType
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.OwnerOfficer.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WCOptionCardPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'conversionExpression' attribute on AddMenuItem (id=AddFromSearch) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 56, column 74
    function conversionExpression_7 (PickedValue :  Contact) : entity.PolicyOwnerOfficer {
      return wcLine.addNewOwnerOfficerForContact(PickedValue)
    }
    
    // 'editable' attribute on RowIterator at WCOptionCardPanelSet.OwnerOfficer.pcf: line 121, column 55
    function editable_27 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'initialValue' attribute on Variable at WCOptionCardPanelSet.OwnerOfficer.pcf: line 17, column 54
    function initialValue_0 () : gw.plugin.contact.IContactConfigPlugin {
      return gw.plugin.Plugins.get(gw.plugin.contact.IContactConfigPlugin)
    }
    
    // 'initialValue' attribute on Variable at WCOptionCardPanelSet.OwnerOfficer.pcf: line 22, column 39
    function initialValue_1 () : entity.AccountContact[] {
      return wcLine.UnassignedOwnerOfficers
    }
    
    // 'initialValue' attribute on Variable at WCOptionCardPanelSet.OwnerOfficer.pcf: line 27, column 39
    function initialValue_2 () : entity.AccountContact[] {
      return wcLine.OwnerOfficerOtherCandidates
    }
    
    // 'label' attribute on AddMenuItem (id=AddExistingContact) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 61, column 32
    function label_15 () : java.lang.Object {
      return DisplayKey.get("Web.Policy.Contact.AddExisting", PolicyOwnerOfficer.Type.TypeInfo.DisplayName)
    }
    
    // 'pickLocation' attribute on AddMenuItem (id=AddFromSearch) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 56, column 74
    function pickLocation_8 () : void {
      ContactSearchPopup.push(TC_OWNEROFFICER)
    }
    
    // 'sortBy' attribute on IteratorSort at WCOptionCardPanelSet.OwnerOfficer.pcf: line 95, column 36
    function sortBy_16 (otherContact :  entity.AccountContact) : java.lang.Object {
      return otherContact.DisplayName
    }
    
    // 'sortBy' attribute on IteratorSort at WCOptionCardPanelSet.OwnerOfficer.pcf: line 44, column 34
    function sortBy_3 (contactType :  typekey.ContactType) : java.lang.Object {
      return contactType.DisplayName
    }
    
    // 'sortBy' attribute on IteratorSort at WCOptionCardPanelSet.OwnerOfficer.pcf: line 69, column 36
    function sortBy_9 (ownerOfficer :  entity.AccountContact) : java.lang.Object {
      return ownerOfficer.DisplayName
    }
    
    // 'value' attribute on TextCell (id=DispName_Cell) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 129, column 33
    function sortValue_21 (policyOwnerOfficer :  entity.PolicyOwnerOfficer) : java.lang.Object {
      return policyOwnerOfficer.DisplayName
    }
    
    // 'value' attribute on TypeKeyCell (id=Include_Cell) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 138, column 32
    function sortValue_22 (policyOwnerOfficer :  entity.PolicyOwnerOfficer) : java.lang.Object {
      return policyOwnerOfficer.Included
    }
    
    // 'value' attribute on RangeCell (id=State_Cell) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 151, column 32
    function sortValue_23 (policyOwnerOfficer :  entity.PolicyOwnerOfficer) : java.lang.Object {
      return policyOwnerOfficer.State
    }
    
    // 'value' attribute on RangeCell (id=ClassCode_Cell) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 164, column 33
    function sortValue_24 (policyOwnerOfficer :  entity.PolicyOwnerOfficer) : java.lang.Object {
      return policyOwnerOfficer.ClassCode
    }
    
    // 'value' attribute on TypeKeyCell (id=Relationship_Cell) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 171, column 33
    function sortValue_25 (policyOwnerOfficer :  entity.PolicyOwnerOfficer) : java.lang.Object {
      return policyOwnerOfficer.RelationshipTitle
    }
    
    // 'value' attribute on TextCell (id=Ownership_Cell) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 179, column 33
    function sortValue_26 (policyOwnerOfficer :  entity.PolicyOwnerOfficer) : java.lang.Object {
      return policyOwnerOfficer.OwnershipPct
    }
    
    // 'toCreateAndAdd' attribute on AddMenuItem (id=AddAll) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 81, column 68
    function toCreateAndAdd_14 (CheckedValues :  Object[]) : java.lang.Object {
      return wcLine.addAllExistingOwnerOfficers()
    }
    
    // 'toRemove' attribute on RowIterator at WCOptionCardPanelSet.OwnerOfficer.pcf: line 121, column 55
    function toRemove_63 (policyOwnerOfficer :  entity.PolicyOwnerOfficer) : void {
      wcLine.removeFromPolicyOwnerOfficers(policyOwnerOfficer)
    }
    
    // 'value' attribute on AddMenuItemIterator (id=ContactOfSameType) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 66, column 55
    function value_12 () : entity.AccountContact[] {
      return unassignedOwnerOfficers
    }
    
    // 'value' attribute on AddMenuItemIterator (id=ContactOfOtherType) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 92, column 55
    function value_19 () : entity.AccountContact[] {
      return otherContacts
    }
    
    // 'value' attribute on AddMenuItemIterator at WCOptionCardPanelSet.OwnerOfficer.pcf: line 41, column 51
    function value_6 () : typekey.ContactType[] {
      return contactConfigPlugin.getAllowedContactTypesForPolicyContactRoleType(typekey.PolicyContactRole.TC_POLICYOWNEROFFICER)
    }
    
    // 'value' attribute on RowIterator at WCOptionCardPanelSet.OwnerOfficer.pcf: line 121, column 55
    function value_64 () : entity.PolicyOwnerOfficer[] {
      return wcLine.PolicyOwnerOfficers
    }
    
    // 'visible' attribute on AddMenuItem (id=AddAll) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 81, column 68
    function visible_13 () : java.lang.Boolean {
      return unassignedOwnerOfficers.length > 0
    }
    
    // 'visible' attribute on AddMenuItem (id=AddOtherContact) at WCOptionCardPanelSet.OwnerOfficer.pcf: line 87, column 54
    function visible_20 () : java.lang.Boolean {
      return otherContacts.Count > 0
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
    
    property get otherContacts () : entity.AccountContact[] {
      return getVariableValue("otherContacts", 0) as entity.AccountContact[]
    }
    
    property set otherContacts ($arg :  entity.AccountContact[]) {
      setVariableValue("otherContacts", 0, $arg)
    }
    
    property get unassignedOwnerOfficers () : entity.AccountContact[] {
      return getVariableValue("unassignedOwnerOfficers", 0) as entity.AccountContact[]
    }
    
    property set unassignedOwnerOfficers ($arg :  entity.AccountContact[]) {
      setVariableValue("unassignedOwnerOfficers", 0, $arg)
    }
    
    property get wcLine () : WorkersCompLine {
      return getRequireValue("wcLine", 0) as WorkersCompLine
    }
    
    property set wcLine ($arg :  WorkersCompLine) {
      setRequireValue("wcLine", 0, $arg)
    }
    
    
  }
  
  
}