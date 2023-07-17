package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/NewOrganization.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewOrganizationExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/NewOrganization.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewOrganizationExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'afterCancel' attribute on Page (id=NewOrganization) at NewOrganization.pcf: line 16, column 67
    function afterCancel_4 () : void {
      Admin.go()
    }
    
    // 'afterCancel' attribute on Page (id=NewOrganization) at NewOrganization.pcf: line 16, column 67
    function afterCancel_dest_5 () : pcf.api.Destination {
      return pcf.Admin.createDestination()
    }
    
    // 'afterCommit' attribute on Page (id=NewOrganization) at NewOrganization.pcf: line 16, column 67
    function afterCommit_6 (TopLocation :  pcf.api.Location) : void {
      OrganizationDetail.go(organization)
    }
    
    // 'beforeCancel' attribute on Page (id=NewOrganization) at NewOrganization.pcf: line 16, column 67
    function beforeCancel_7 () : void {
      orgHelper.resetAgencyBillPlans()
    }
    
    // 'beforeCommit' attribute on Page (id=NewOrganization) at NewOrganization.pcf: line 16, column 67
    function beforeCommit_8 (pickedValue :  java.lang.Object) : void {
      gw.admin.NewOrganizationUtil.removeOrphanedContacts(organization); orgHelper.createAgencyBillPlans()
    }
    
    // 'canVisit' attribute on Page (id=NewOrganization) at NewOrganization.pcf: line 16, column 67
    static function canVisit_9 () : java.lang.Boolean {
      return perm.Organization.create
    }
    
    // 'def' attribute on ScreenRef at NewOrganization.pcf: line 28, column 64
    function def_onEnter_2 (def :  pcf.OrganizationDetailScreen) : void {
      def.onEnter(organization, orgHelper)
    }
    
    // 'def' attribute on ScreenRef at NewOrganization.pcf: line 28, column 64
    function def_refreshVariables_3 (def :  pcf.OrganizationDetailScreen) : void {
      def.refreshVariables(organization, orgHelper)
    }
    
    // 'initialValue' attribute on Variable at NewOrganization.pcf: line 22, column 35
    function initialValue_0 () : entity.Organization {
      return new Organization()
    }
    
    // 'initialValue' attribute on Variable at NewOrganization.pcf: line 26, column 49
    function initialValue_1 () : gw.web.admin.OrganizationUIHelper {
      return new gw.web.admin.OrganizationUIHelper(organization)
    }
    
    // 'parent' attribute on Page (id=NewOrganization) at NewOrganization.pcf: line 16, column 67
    static function parent_10 () : pcf.api.Destination {
      return pcf.Admin.createDestination()
    }
    
    override property get CurrentLocation () : pcf.NewOrganization {
      return super.CurrentLocation as pcf.NewOrganization
    }
    
    property get orgHelper () : gw.web.admin.OrganizationUIHelper {
      return getVariableValue("orgHelper", 0) as gw.web.admin.OrganizationUIHelper
    }
    
    property set orgHelper ($arg :  gw.web.admin.OrganizationUIHelper) {
      setVariableValue("orgHelper", 0, $arg)
    }
    
    property get organization () : entity.Organization {
      return getVariableValue("organization", 0) as entity.Organization
    }
    
    property set organization ($arg :  entity.Organization) {
      setVariableValue("organization", 0, $arg)
    }
    
    
  }
  
  
}