package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/affinitygroup/AffinityGroupDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AffinityGroupDetailDVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/affinitygroup/AffinityGroupDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AffinityGroupDetailDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on OrgInput (id=Organization_Input) at AffinityGroupDetailDV.pcf: line 46, column 24
    function actionAvailable_17 () : java.lang.Boolean {
      return affinityGroup.Organization != null and not User.util.CurrentUser.ExternalUser
    }
    
    // 'pickLocation' attribute on OrgInput (id=Organization_Input) at AffinityGroupDetailDV.pcf: line 46, column 24
    function action_12 () : void {
      OrganizationSearchPopup.push(null,true)
    }
    
    // 'action' attribute on OrgInput (id=Organization_Input) at AffinityGroupDetailDV.pcf: line 46, column 24
    function action_15 () : void {
      OrganizationDetail.go(affinityGroup.Organization)
    }
    
    // 'pickLocation' attribute on OrgInput (id=Organization_Input) at AffinityGroupDetailDV.pcf: line 46, column 24
    function action_dest_13 () : pcf.api.Destination {
      return pcf.OrganizationSearchPopup.createDestination(null,true)
    }
    
    // 'action' attribute on OrgInput (id=Organization_Input) at AffinityGroupDetailDV.pcf: line 46, column 24
    function action_dest_16 () : pcf.api.Destination {
      return pcf.OrganizationDetail.createDestination(affinityGroup.Organization)
    }
    
    // 'def' attribute on InputSetRef at AffinityGroupDetailDV.pcf: line 54, column 56
    function def_onEnter_24 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.onEnter(new gw.admin.affinitygroup.AffinityGroupContactOwner(affinityGroupAdapter))
    }
    
    // 'def' attribute on InputSetRef at AffinityGroupDetailDV.pcf: line 54, column 56
    function def_onEnter_26 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.onEnter(new gw.admin.affinitygroup.AffinityGroupContactOwner(affinityGroupAdapter))
    }
    
    // 'def' attribute on InputSetRef at AffinityGroupDetailDV.pcf: line 57, column 26
    function def_onEnter_29 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.AffinityGroupPhoneFields(affinityGroup), DisplayKey.get("Web.Admin.AffinityGroupDetail.BasicsDV.PrimaryContactPhone"), CurrentLocation.InEditMode))
    }
    
    // 'def' attribute on InputSetRef (id=AffinityGroupNameInputSet) at AffinityGroupDetailDV.pcf: line 27, column 56
    function def_onEnter_3 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.onEnter(new gw.admin.affinitygroup.NewAffinityGroupNameOwner(new gw.globalization.NewAffinityGroupNameFields (affinityGroup)))
    }
    
    // 'def' attribute on InputSetRef (id=AffinityGroupNameInputSet) at AffinityGroupDetailDV.pcf: line 27, column 56
    function def_onEnter_5 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.onEnter(new gw.admin.affinitygroup.NewAffinityGroupNameOwner(new gw.globalization.NewAffinityGroupNameFields (affinityGroup)))
    }
    
    // 'def' attribute on InputSetRef at AffinityGroupDetailDV.pcf: line 54, column 56
    function def_refreshVariables_25 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.refreshVariables(new gw.admin.affinitygroup.AffinityGroupContactOwner(affinityGroupAdapter))
    }
    
    // 'def' attribute on InputSetRef at AffinityGroupDetailDV.pcf: line 54, column 56
    function def_refreshVariables_27 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.refreshVariables(new gw.admin.affinitygroup.AffinityGroupContactOwner(affinityGroupAdapter))
    }
    
    // 'def' attribute on InputSetRef at AffinityGroupDetailDV.pcf: line 57, column 26
    function def_refreshVariables_30 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.AffinityGroupPhoneFields(affinityGroup), DisplayKey.get("Web.Admin.AffinityGroupDetail.BasicsDV.PrimaryContactPhone"), CurrentLocation.InEditMode))
    }
    
    // 'def' attribute on InputSetRef (id=AffinityGroupNameInputSet) at AffinityGroupDetailDV.pcf: line 27, column 56
    function def_refreshVariables_4 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.refreshVariables(new gw.admin.affinitygroup.NewAffinityGroupNameOwner(new gw.globalization.NewAffinityGroupNameFields (affinityGroup)))
    }
    
    // 'def' attribute on InputSetRef (id=AffinityGroupNameInputSet) at AffinityGroupDetailDV.pcf: line 27, column 56
    function def_refreshVariables_6 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.refreshVariables(new gw.admin.affinitygroup.NewAffinityGroupNameOwner(new gw.globalization.NewAffinityGroupNameFields (affinityGroup)))
    }
    
    // 'value' attribute on OrgInput (id=Organization_Input) at AffinityGroupDetailDV.pcf: line 46, column 24
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      affinityGroup.Organization = (__VALUE_TO_SET as entity.Organization)
    }
    
    // 'value' attribute on DateInput (id=StartDate_Input) at AffinityGroupDetailDV.pcf: line 65, column 42
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      affinityGroup.StartDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=EndDate_Input) at AffinityGroupDetailDV.pcf: line 70, column 40
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      affinityGroup.EndDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at AffinityGroupDetailDV.pcf: line 76, column 44
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      affinityGroup.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at AffinityGroupDetailDV.pcf: line 34, column 47
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      affinityGroup.AffinityGroupType = (__VALUE_TO_SET as typekey.AffinityGroupType)
    }
    
    // 'editable' attribute on OrgInput (id=Organization_Input) at AffinityGroupDetailDV.pcf: line 46, column 24
    function editable_14 () : java.lang.Boolean {
      return not User.util.CurrentUser.ExternalUser
    }
    
    // 'initialValue' attribute on Variable at AffinityGroupDetailDV.pcf: line 14, column 27
    function initialValue_0 () : entity.User {
      return User.util.CurrentUser
    }
    
    // 'initialValue' attribute on Variable at AffinityGroupDetailDV.pcf: line 18, column 23
    function initialValue_1 () : Boolean {
      return affinityGroup.New and not currentUser.ExternalUser
    }
    
    // 'initialValue' attribute on Variable at AffinityGroupDetailDV.pcf: line 22, column 59
    function initialValue_2 () : gw.globalization.AffinityGroupContactFields {
      return new gw.globalization.AffinityGroupContactFields(affinityGroup)
    }
    
    // 'mode' attribute on InputSetRef (id=AffinityGroupNameInputSet) at AffinityGroupDetailDV.pcf: line 27, column 56
    function mode_7 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'required' attribute on OrgInput (id=Organization_Input) at AffinityGroupDetailDV.pcf: line 46, column 24
    function required_18 () : java.lang.Boolean {
      return affinityGroup.AffinityGroupType == TC_CLOSED
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at AffinityGroupDetailDV.pcf: line 34, column 47
    function valueRoot_10 () : java.lang.Object {
      return affinityGroup
    }
    
    // 'value' attribute on OrgInput (id=Organization_Input) at AffinityGroupDetailDV.pcf: line 46, column 24
    function value_19 () : entity.Organization {
      return affinityGroup.Organization
    }
    
    // 'value' attribute on DateInput (id=StartDate_Input) at AffinityGroupDetailDV.pcf: line 65, column 42
    function value_31 () : java.util.Date {
      return affinityGroup.StartDate
    }
    
    // 'value' attribute on DateInput (id=EndDate_Input) at AffinityGroupDetailDV.pcf: line 70, column 40
    function value_35 () : java.util.Date {
      return affinityGroup.EndDate
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at AffinityGroupDetailDV.pcf: line 76, column 44
    function value_39 () : java.lang.String {
      return affinityGroup.Description
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at AffinityGroupDetailDV.pcf: line 34, column 47
    function value_8 () : typekey.AffinityGroupType {
      return affinityGroup.AffinityGroupType
    }
    
    property get affinityGroup () : AffinityGroup {
      return getRequireValue("affinityGroup", 0) as AffinityGroup
    }
    
    property set affinityGroup ($arg :  AffinityGroup) {
      setRequireValue("affinityGroup", 0, $arg)
    }
    
    property get affinityGroupAdapter () : gw.globalization.AffinityGroupContactFields {
      return getVariableValue("affinityGroupAdapter", 0) as gw.globalization.AffinityGroupContactFields
    }
    
    property set affinityGroupAdapter ($arg :  gw.globalization.AffinityGroupContactFields) {
      setVariableValue("affinityGroupAdapter", 0, $arg)
    }
    
    property get canSetAnyOrganization () : Boolean {
      return getVariableValue("canSetAnyOrganization", 0) as Boolean
    }
    
    property set canSetAnyOrganization ($arg :  Boolean) {
      setVariableValue("canSetAnyOrganization", 0, $arg)
    }
    
    property get currentUser () : entity.User {
      return getVariableValue("currentUser", 0) as entity.User
    }
    
    property set currentUser ($arg :  entity.User) {
      setVariableValue("currentUser", 0, $arg)
    }
    
    
  }
  
  
}