package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/OrganizationDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class OrganizationDetailExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/OrganizationDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class OrganizationDetailExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (organization :  Organization) : int {
      return 0
    }
    
    // 'afterCancel' attribute on Page (id=OrganizationDetail) at OrganizationDetail.pcf: line 15, column 84
    function afterCancel_4 () : void {
      OrganizationDetail.go(organization)
    }
    
    // 'afterCancel' attribute on Page (id=OrganizationDetail) at OrganizationDetail.pcf: line 15, column 84
    function afterCancel_dest_5 () : pcf.api.Destination {
      return pcf.OrganizationDetail.createDestination(organization)
    }
    
    // 'afterCommit' attribute on Page (id=OrganizationDetail) at OrganizationDetail.pcf: line 15, column 84
    function afterCommit_6 (TopLocation :  pcf.api.Location) : void {
      OrganizationDetail.go(organization)
    }
    
    // 'afterEnter' attribute on Page (id=OrganizationDetail) at OrganizationDetail.pcf: line 15, column 84
    function afterEnter_7 () : void {
      organization.syncWithBillingSystem(); orgHelper.resetAgencyBillPlans()
    }
    
    // 'beforeCancel' attribute on Page (id=OrganizationDetail) at OrganizationDetail.pcf: line 15, column 84
    function beforeCancel_8 () : void {
      orgHelper.resetAgencyBillPlans()
    }
    
    // 'beforeCommit' attribute on Page (id=OrganizationDetail) at OrganizationDetail.pcf: line 15, column 84
    function beforeCommit_9 (pickedValue :  java.lang.Object) : void {
      orgHelper.createAgencyBillPlans()
    }
    
    // 'canEdit' attribute on Page (id=OrganizationDetail) at OrganizationDetail.pcf: line 15, column 84
    function canEdit_10 () : java.lang.Boolean {
      return perm.Organization.edit(organization) and User.util.CurrentUser.isInternalUserOrBelongsToOrganization(organization)
    }
    
    // 'canVisit' attribute on Page (id=OrganizationDetail) at OrganizationDetail.pcf: line 15, column 84
    static function canVisit_11 (organization :  Organization) : java.lang.Boolean {
      return (perm.System.orgviewagency or perm.System.orgviewbasic or perm.System.orgviewextmgt) and User.util.CurrentUser.isInternalUserOrBelongsToOrganization(organization)
    }
    
    // 'def' attribute on ScreenRef at OrganizationDetail.pcf: line 30, column 64
    function def_onEnter_2 (def :  pcf.OrganizationDetailScreen) : void {
      def.onEnter(organization, orgHelper)
    }
    
    // 'def' attribute on ScreenRef at OrganizationDetail.pcf: line 30, column 64
    function def_refreshVariables_3 (def :  pcf.OrganizationDetailScreen) : void {
      def.refreshVariables(organization, orgHelper)
    }
    
    // 'initialValue' attribute on Variable at OrganizationDetail.pcf: line 24, column 21
    function initialValue_0 () : Group {
      return organization.RootGroup
    }
    
    // 'initialValue' attribute on Variable at OrganizationDetail.pcf: line 28, column 49
    function initialValue_1 () : gw.web.admin.OrganizationUIHelper {
      return new gw.web.admin.OrganizationUIHelper(organization)
    }
    
    // 'parent' attribute on Page (id=OrganizationDetail) at OrganizationDetail.pcf: line 15, column 84
    static function parent_12 (organization :  Organization) : pcf.api.Destination {
      return pcf.Admin.createDestination(organization)
    }
    
    // 'title' attribute on Page (id=OrganizationDetail) at OrganizationDetail.pcf: line 15, column 84
    static function title_13 (organization :  Organization) : java.lang.Object {
      return DisplayKey.get("Web.Admin.OrganizationDetail", organization)
    }
    
    override property get CurrentLocation () : pcf.OrganizationDetail {
      return super.CurrentLocation as pcf.OrganizationDetail
    }
    
    property get orgHelper () : gw.web.admin.OrganizationUIHelper {
      return getVariableValue("orgHelper", 0) as gw.web.admin.OrganizationUIHelper
    }
    
    property set orgHelper ($arg :  gw.web.admin.OrganizationUIHelper) {
      setVariableValue("orgHelper", 0, $arg)
    }
    
    property get organization () : Organization {
      return getVariableValue("organization", 0) as Organization
    }
    
    property set organization ($arg :  Organization) {
      setVariableValue("organization", 0, $arg)
    }
    
    property get parent () : Group {
      return getVariableValue("parent", 0) as Group
    }
    
    property set parent ($arg :  Group) {
      setVariableValue("parent", 0, $arg)
    }
    
    
  }
  
  
}