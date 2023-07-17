package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/Admin.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AdminExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/Admin.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AdminExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    static function __constructorIndex (affinityGroup :  AffinityGroup) : int {
      return 3
    }
    
    static function __constructorIndex (group :  Group) : int {
      return 1
    }
    
    static function __constructorIndex (org :  Organization) : int {
      return 2
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Admin.pcf: line 37, column 38
    function action_22 () : void {
      pcf.UsersAndSecurity.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Admin.pcf: line 39, column 28
    function action_34 () : void {
      pcf.Rating.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Admin.pcf: line 41, column 38
    function action_52 () : void {
      pcf.BusinessSettings.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Admin.pcf: line 43, column 32
    function action_62 () : void {
      pcf.Monitoring.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Admin.pcf: line 45, column 31
    function action_80 () : void {
      pcf.Utilities.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Admin.pcf: line 47, column 46
    function action_82 () : void {
      pcf.APDProductManagementPage.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Admin.pcf: line 49, column 56
    function action_84 () : void {
      pcf.APDProductManagementProductionPage.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Admin.pcf: line 37, column 38
    function action_dest_23 () : pcf.api.Destination {
      return pcf.UsersAndSecurity.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Admin.pcf: line 39, column 28
    function action_dest_35 () : pcf.api.Destination {
      return pcf.Rating.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Admin.pcf: line 41, column 38
    function action_dest_53 () : pcf.api.Destination {
      return pcf.BusinessSettings.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Admin.pcf: line 43, column 32
    function action_dest_63 () : pcf.api.Destination {
      return pcf.Monitoring.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Admin.pcf: line 45, column 31
    function action_dest_81 () : pcf.api.Destination {
      return pcf.Utilities.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Admin.pcf: line 47, column 46
    function action_dest_83 () : pcf.api.Destination {
      return pcf.APDProductManagementPage.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Admin.pcf: line 49, column 56
    function action_dest_85 () : pcf.api.Destination {
      return pcf.APDProductManagementProductionPage.createDestination()
    }
    
    // 'canVisit' attribute on LocationGroup (id=Admin) at Admin.pcf: line 11, column 71
    static function canVisit_86 (affinityGroup :  AffinityGroup, group :  Group, org :  Organization) : java.lang.Boolean {
      return perm.Organization.search or perm.System.orgviewagency or perm.System.orgviewbasic or perm.System.orgviewextmgt or perm.System.prodcodeviewbasic or perm.System.prodcodeviewprefuw
    }
    
    // LocationGroup (id=Admin) at Admin.pcf: line 11, column 71
    static function firstVisitableChildDestinationMethod_93 (affinityGroup :  AffinityGroup, group :  Group, org :  Organization) : pcf.api.Destination {
      var dest : pcf.api.Destination
      dest = pcf.UsersAndSecurity.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.Rating.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.BusinessSettings.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.Monitoring.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.Utilities.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.APDProductManagementPage.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.APDProductManagementProductionPage.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      return null
    }
    
    // 'initialValue' attribute on Variable at Admin.pcf: line 23, column 21
    function initialValue_0 () : Group {
      return null
    }
    
    // 'initialValue' attribute on Variable at Admin.pcf: line 27, column 28
    function initialValue_1 () : Organization {
      return null
    }
    
    // 'initialValue' attribute on Variable at Admin.pcf: line 31, column 52
    function initialValue_2 () : gw.api.admin.PCOrganizationTreeModel {
      return new gw.api.admin.PCOrganizationTreeModel(org, group, false)
    }
    
    // 'initialValue' attribute on Variable at Admin.pcf: line 35, column 29
    function initialValue_3 () : AffinityGroup {
      return null
    }
    
    // 'menuActions' attribute on LocationGroup (id=Admin) at Admin.pcf: line 11, column 71
    function menuActions_onEnter_87 (def :  pcf.AdminMenuActions) : void {
      def.onEnter()
    }
    
    // 'menuActions' attribute on LocationGroup (id=Admin) at Admin.pcf: line 11, column 71
    function menuActions_refreshVariables_88 (def :  pcf.AdminMenuActions) : void {
      def.refreshVariables()
    }
    
    // 'menuTree' attribute on LocationGroup (id=Admin) at Admin.pcf: line 11, column 71
    function menuTree_onEnter_89 (def :  pcf.AdminMenuTree) : void {
      def.onEnter(treeModel, org, group)
    }
    
    // 'menuTree' attribute on LocationGroup (id=Admin) at Admin.pcf: line 11, column 71
    function menuTree_refreshVariables_90 (def :  pcf.AdminMenuTree) : void {
      def.refreshVariables(treeModel, org, group)
    }
    
    // 'tabBar' attribute on LocationGroup (id=Admin) at Admin.pcf: line 11, column 71
    function tabBar_onEnter_91 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on LocationGroup (id=Admin) at Admin.pcf: line 11, column 71
    function tabBar_refreshVariables_92 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    override property get CurrentLocation () : pcf.Admin {
      return super.CurrentLocation as pcf.Admin
    }
    
    property get affinityGroup () : AffinityGroup {
      return getVariableValue("affinityGroup", 0) as AffinityGroup
    }
    
    property set affinityGroup ($arg :  AffinityGroup) {
      setVariableValue("affinityGroup", 0, $arg)
    }
    
    property get group () : Group {
      return getVariableValue("group", 0) as Group
    }
    
    property set group ($arg :  Group) {
      setVariableValue("group", 0, $arg)
    }
    
    property get org () : Organization {
      return getVariableValue("org", 0) as Organization
    }
    
    property set org ($arg :  Organization) {
      setVariableValue("org", 0, $arg)
    }
    
    property get treeModel () : gw.api.admin.PCOrganizationTreeModel {
      return getVariableValue("treeModel", 0) as gw.api.admin.PCOrganizationTreeModel
    }
    
    property set treeModel ($arg :  gw.api.admin.PCOrganizationTreeModel) {
      setVariableValue("treeModel", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/Admin.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationGroupMenuItem2ExpressionsImpl extends LocationGroupMenuItemExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/Admin.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationGroupMenuItem3ExpressionsImpl extends AdminExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Rating.pcf: line 11, column 31
    function action_24 () : void {
      pcf.RateBooks.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Rating.pcf: line 14, column 41
    function action_26 () : void {
      pcf.ImpactTestingWizard.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Rating.pcf: line 17, column 42
    function action_28 () : void {
      pcf.RateTableDefinitions.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Rating.pcf: line 20, column 34
    function action_30 () : void {
      pcf.RateRoutines.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Rating.pcf: line 23, column 39
    function action_32 () : void {
      pcf.ParameterSetsPage.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Rating.pcf: line 11, column 31
    function action_dest_25 () : pcf.api.Destination {
      return pcf.RateBooks.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Rating.pcf: line 14, column 41
    function action_dest_27 () : pcf.api.Destination {
      return pcf.ImpactTestingWizard.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Rating.pcf: line 17, column 42
    function action_dest_29 () : pcf.api.Destination {
      return pcf.RateTableDefinitions.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Rating.pcf: line 20, column 34
    function action_dest_31 () : pcf.api.Destination {
      return pcf.RateRoutines.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Rating.pcf: line 23, column 39
    function action_dest_33 () : pcf.api.Destination {
      return pcf.ParameterSetsPage.createDestination()
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/Admin.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationGroupMenuItem4ExpressionsImpl extends AdminExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at BusinessSettings.pcf: line 9, column 38
    function action_36 () : void {
      pcf.ActivityPatterns.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at BusinessSettings.pcf: line 11, column 30
    function action_38 () : void {
      pcf.Holidays.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at BusinessSettings.pcf: line 13, column 30
    function action_46 () : void {
      pcf.BizRules.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at BusinessSettings.pcf: line 15, column 34
    function action_48 () : void {
      pcf.FormPatterns.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at BusinessSettings.pcf: line 17, column 33
    function action_50 () : void {
      pcf.PolicyHolds.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at BusinessSettings.pcf: line 9, column 38
    function action_dest_37 () : pcf.api.Destination {
      return pcf.ActivityPatterns.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at BusinessSettings.pcf: line 11, column 30
    function action_dest_39 () : pcf.api.Destination {
      return pcf.Holidays.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at BusinessSettings.pcf: line 13, column 30
    function action_dest_47 () : pcf.api.Destination {
      return pcf.BizRules.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at BusinessSettings.pcf: line 15, column 34
    function action_dest_49 () : pcf.api.Destination {
      return pcf.FormPatterns.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at BusinessSettings.pcf: line 17, column 33
    function action_dest_51 () : pcf.api.Destination {
      return pcf.PolicyHolds.createDestination()
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/Admin.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationGroupMenuItem5ExpressionsImpl extends LocationGroupMenuItem4ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/Admin.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationGroupMenuItem6ExpressionsImpl extends LocationGroupMenuItem4ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at BizRules.pcf: line 10, column 29
    function action_40 () : void {
      pcf.UWRules.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at BizRules.pcf: line 12, column 50
    function action_42 () : void {
      pcf.PCBizRulesExportImportStatus.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at BizRules.pcf: line 14, column 32
    function action_44 () : void {
      pcf.LookupPage.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at BizRules.pcf: line 10, column 29
    function action_dest_41 () : pcf.api.Destination {
      return pcf.UWRules.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at BizRules.pcf: line 12, column 50
    function action_dest_43 () : pcf.api.Destination {
      return pcf.PCBizRulesExportImportStatus.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at BizRules.pcf: line 14, column 32
    function action_dest_45 () : pcf.api.Destination {
      return pcf.LookupPage.createDestination()
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/Admin.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationGroupMenuItem7ExpressionsImpl extends AdminExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Monitoring.pcf: line 9, column 35
    function action_54 () : void {
      pcf.MessageSearch.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Monitoring.pcf: line 11, column 53
    function action_56 () : void {
      pcf.MessagingDestinationControlList.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Monitoring.pcf: line 13, column 36
    function action_58 () : void {
      pcf.WorkflowSearch.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Monitoring.pcf: line 15, column 35
    function action_60 () : void {
      pcf.WorkflowStats.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Monitoring.pcf: line 9, column 35
    function action_dest_55 () : pcf.api.Destination {
      return pcf.MessageSearch.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Monitoring.pcf: line 11, column 53
    function action_dest_57 () : pcf.api.Destination {
      return pcf.MessagingDestinationControlList.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Monitoring.pcf: line 13, column 36
    function action_dest_59 () : pcf.api.Destination {
      return pcf.WorkflowSearch.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Monitoring.pcf: line 15, column 35
    function action_dest_61 () : pcf.api.Destination {
      return pcf.WorkflowStats.createDestination()
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/Admin.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationGroupMenuItem8ExpressionsImpl extends AdminExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Utilities.pcf: line 11, column 21
    function action_64 () : void {
      pcf.ImportWizard.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Utilities.pcf: line 13, column 32
    function action_66 () : void {
      pcf.ExportData.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Utilities.pcf: line 15, column 42
    function action_68 () : void {
      pcf.ScriptParametersPage.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Utilities.pcf: line 17, column 35
    function action_70 () : void {
      pcf.DataFlowMasks.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Utilities.pcf: line 19, column 36
    function action_72 () : void {
      pcf.DataChangePage.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Utilities.pcf: line 21, column 32
    function action_74 () : void {
      pcf.Properties.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Utilities.pcf: line 23, column 39
    function action_76 () : void {
      pcf.InboundFileSearch.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Utilities.pcf: line 25, column 40
    function action_78 () : void {
      pcf.OutboundFileSearch.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Utilities.pcf: line 11, column 21
    function action_dest_65 () : pcf.api.Destination {
      return pcf.ImportWizard.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Utilities.pcf: line 13, column 32
    function action_dest_67 () : pcf.api.Destination {
      return pcf.ExportData.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Utilities.pcf: line 15, column 42
    function action_dest_69 () : pcf.api.Destination {
      return pcf.ScriptParametersPage.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Utilities.pcf: line 17, column 35
    function action_dest_71 () : pcf.api.Destination {
      return pcf.DataFlowMasks.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Utilities.pcf: line 19, column 36
    function action_dest_73 () : pcf.api.Destination {
      return pcf.DataChangePage.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Utilities.pcf: line 21, column 32
    function action_dest_75 () : pcf.api.Destination {
      return pcf.Properties.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Utilities.pcf: line 23, column 39
    function action_dest_77 () : pcf.api.Destination {
      return pcf.InboundFileSearch.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Utilities.pcf: line 25, column 40
    function action_dest_79 () : pcf.api.Destination {
      return pcf.OutboundFileSearch.createDestination()
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/Admin.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationGroupMenuItemExpressionsImpl extends AdminExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at UsersAndSecurity.pcf: line 15, column 29
    function action_10 () : void {
      pcf.Regions.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at UsersAndSecurity.pcf: line 17, column 44
    function action_12 () : void {
      pcf.OrganizationSearchPage.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at UsersAndSecurity.pcf: line 19, column 45
    function action_14 () : void {
      pcf.AdminProducerCodeSearch.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at UsersAndSecurity.pcf: line 21, column 41
    function action_16 () : void {
      pcf.UWAuthorityProfiles.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at UsersAndSecurity.pcf: line 23, column 32
    function action_18 () : void {
      pcf.Attributes.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at UsersAndSecurity.pcf: line 25, column 41
    function action_20 () : void {
      pcf.SearchAffinityGroup.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at UsersAndSecurity.pcf: line 9, column 41
    function action_4 () : void {
      pcf.AdminUserSearchPage.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at UsersAndSecurity.pcf: line 11, column 42
    function action_6 () : void {
      pcf.AdminGroupSearchPage.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at UsersAndSecurity.pcf: line 13, column 27
    function action_8 () : void {
      pcf.Roles.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at UsersAndSecurity.pcf: line 15, column 29
    function action_dest_11 () : pcf.api.Destination {
      return pcf.Regions.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at UsersAndSecurity.pcf: line 17, column 44
    function action_dest_13 () : pcf.api.Destination {
      return pcf.OrganizationSearchPage.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at UsersAndSecurity.pcf: line 19, column 45
    function action_dest_15 () : pcf.api.Destination {
      return pcf.AdminProducerCodeSearch.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at UsersAndSecurity.pcf: line 21, column 41
    function action_dest_17 () : pcf.api.Destination {
      return pcf.UWAuthorityProfiles.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at UsersAndSecurity.pcf: line 23, column 32
    function action_dest_19 () : pcf.api.Destination {
      return pcf.Attributes.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at UsersAndSecurity.pcf: line 25, column 41
    function action_dest_21 () : pcf.api.Destination {
      return pcf.SearchAffinityGroup.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at UsersAndSecurity.pcf: line 9, column 41
    function action_dest_5 () : pcf.api.Destination {
      return pcf.AdminUserSearchPage.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at UsersAndSecurity.pcf: line 11, column 42
    function action_dest_7 () : pcf.api.Destination {
      return pcf.AdminGroupSearchPage.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at UsersAndSecurity.pcf: line 13, column 27
    function action_dest_9 () : pcf.api.Destination {
      return pcf.Roles.createDestination()
    }
    
    
  }
  
  
}