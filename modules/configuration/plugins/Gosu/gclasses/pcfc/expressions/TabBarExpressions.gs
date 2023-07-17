package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TabBarExpressions {
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AdminTabMenuItemExpressionsImpl extends TabBarExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Admin.pcf: line 37, column 38
    function action_109 () : void {
      pcf.UsersAndSecurity.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Admin.pcf: line 39, column 28
    function action_121 () : void {
      pcf.Rating.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Admin.pcf: line 41, column 38
    function action_139 () : void {
      pcf.BusinessSettings.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Admin.pcf: line 43, column 32
    function action_149 () : void {
      pcf.Monitoring.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Admin.pcf: line 45, column 31
    function action_167 () : void {
      pcf.Utilities.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Admin.pcf: line 47, column 46
    function action_169 () : void {
      pcf.APDProductManagementPage.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Admin.pcf: line 49, column 56
    function action_171 () : void {
      pcf.APDProductManagementProductionPage.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Admin.pcf: line 37, column 38
    function action_dest_110 () : pcf.api.Destination {
      return pcf.UsersAndSecurity.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Admin.pcf: line 39, column 28
    function action_dest_122 () : pcf.api.Destination {
      return pcf.Rating.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Admin.pcf: line 41, column 38
    function action_dest_140 () : pcf.api.Destination {
      return pcf.BusinessSettings.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Admin.pcf: line 43, column 32
    function action_dest_150 () : pcf.api.Destination {
      return pcf.Monitoring.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Admin.pcf: line 45, column 31
    function action_dest_168 () : pcf.api.Destination {
      return pcf.Utilities.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Admin.pcf: line 47, column 46
    function action_dest_170 () : pcf.api.Destination {
      return pcf.APDProductManagementPage.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Admin.pcf: line 49, column 56
    function action_dest_172 () : pcf.api.Destination {
      return pcf.APDProductManagementProductionPage.createDestination()
    }
    
    property get affinityGroup () : AffinityGroup {
      return getVariableValue("affinityGroup", 1) as AffinityGroup
    }
    
    property set affinityGroup ($arg :  AffinityGroup) {
      setVariableValue("affinityGroup", 1, $arg)
    }
    
    property get group () : Group {
      return getVariableValue("group", 1) as Group
    }
    
    property set group ($arg :  Group) {
      setVariableValue("group", 1, $arg)
    }
    
    property get org () : Organization {
      return getVariableValue("org", 1) as Organization
    }
    
    property set org ($arg :  Organization) {
      setVariableValue("org", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DesktopTabMenuItemExpressionsImpl extends TabBarExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on Tab (id=DesktopTab) at Desktop.pcf: line 16, column 64
    function action_0 () : void {
      pcf.Underwriter_MySummary.go(User.util.CurrentUser)
    }
    
    // 'location' attribute on Tab (id=DesktopTab) at Desktop.pcf: line 37, column 37
    function action_10 () : void {
      pcf.DesktopRenewals.go()
    }
    
    // 'location' attribute on Tab (id=DesktopTab) at Desktop.pcf: line 41, column 44
    function action_12 () : void {
      pcf.DesktopOtherWorkOrders.go()
    }
    
    // 'location' attribute on Tab (id=DesktopTab) at Desktop.pcf: line 45, column 45
    function action_14 () : void {
      pcf.DesktopAssignableQueues.go()
    }
    
    // 'location' attribute on Tab (id=DesktopTab) at Desktop.pcf: line 21, column 61
    function action_2 () : void {
      pcf.FederatedMySummary.go(User.util.CurrentUser)
    }
    
    // 'location' attribute on Tab (id=DesktopTab) at Desktop.pcf: line 25, column 39
    function action_4 () : void {
      pcf.DesktopActivities.go()
    }
    
    // 'location' attribute on Tab (id=DesktopTab) at Desktop.pcf: line 29, column 37
    function action_6 () : void {
      pcf.DesktopAccounts.go()
    }
    
    // 'location' attribute on Tab (id=DesktopTab) at Desktop.pcf: line 33, column 40
    function action_8 () : void {
      pcf.DesktopSubmissions.go()
    }
    
    // 'location' attribute on Tab (id=DesktopTab) at Desktop.pcf: line 16, column 64
    function action_dest_1 () : pcf.api.Destination {
      return pcf.Underwriter_MySummary.createDestination(User.util.CurrentUser)
    }
    
    // 'location' attribute on Tab (id=DesktopTab) at Desktop.pcf: line 37, column 37
    function action_dest_11 () : pcf.api.Destination {
      return pcf.DesktopRenewals.createDestination()
    }
    
    // 'location' attribute on Tab (id=DesktopTab) at Desktop.pcf: line 41, column 44
    function action_dest_13 () : pcf.api.Destination {
      return pcf.DesktopOtherWorkOrders.createDestination()
    }
    
    // 'location' attribute on Tab (id=DesktopTab) at Desktop.pcf: line 45, column 45
    function action_dest_15 () : pcf.api.Destination {
      return pcf.DesktopAssignableQueues.createDestination()
    }
    
    // 'location' attribute on Tab (id=DesktopTab) at Desktop.pcf: line 21, column 61
    function action_dest_3 () : pcf.api.Destination {
      return pcf.FederatedMySummary.createDestination(User.util.CurrentUser)
    }
    
    // 'location' attribute on Tab (id=DesktopTab) at Desktop.pcf: line 25, column 39
    function action_dest_5 () : pcf.api.Destination {
      return pcf.DesktopActivities.createDestination()
    }
    
    // 'location' attribute on Tab (id=DesktopTab) at Desktop.pcf: line 29, column 37
    function action_dest_7 () : pcf.api.Destination {
      return pcf.DesktopAccounts.createDestination()
    }
    
    // 'location' attribute on Tab (id=DesktopTab) at Desktop.pcf: line 33, column 40
    function action_dest_9 () : pcf.api.Destination {
      return pcf.DesktopSubmissions.createDestination()
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends TabBarExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuPolicy) at TabBar.pcf: line 82, column 45
    function action_49 () : void {
      policySessionState.moveToDestination()
    }
    
    // 'label' attribute on MenuItem (id=PolicyMenuPolicy) at TabBar.pcf: line 82, column 45
    function label_50 () : java.lang.Object {
      return policySessionState.Label
    }
    
    property get policySessionState () : com.guidewire.pc.web.controller.SessionItem {
      return getIteratedValue(1) as com.guidewire.pc.web.controller.SessionItem
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends TabBarExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=ContactMenuContact) at TabBar.pcf: line 114, column 46
    function action_60 () : void {
      contactSessionState.moveToDestination()
    }
    
    // 'label' attribute on MenuItem (id=ContactMenuContact) at TabBar.pcf: line 114, column 46
    function label_61 () : java.lang.Object {
      return contactSessionState.Label
    }
    
    property get contactSessionState () : com.guidewire.pc.web.controller.SessionItem {
      return getIteratedValue(1) as com.guidewire.pc.web.controller.SessionItem
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends TabBarExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=langs) at TabBar.pcf: line 164, column 29
    function action_176 () : void {
      gw.api.admin.BaseAdminUtil.setCurrentUsersLanguage(lang)
    }
    
    // 'available' attribute on MenuItem (id=langs) at TabBar.pcf: line 164, column 29
    function available_175 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.getCurrentUserLanguage() != lang
    }
    
    // 'checked' attribute on MenuItem (id=langs) at TabBar.pcf: line 164, column 29
    function checked_178 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.getCurrentLanguageType() == lang
    }
    
    // 'label' attribute on MenuItem (id=langs) at TabBar.pcf: line 164, column 29
    function label_177 () : java.lang.Object {
      return gw.api.util.LocaleUtil.getLanguageLabel(lang)
    }
    
    property get lang () : typekey.LanguageType {
      return getIteratedValue(1) as typekey.LanguageType
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry5ExpressionsImpl extends TabBarExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=locales) at TabBar.pcf: line 182, column 29
    function action_182 () : void {
      gw.api.admin.BaseAdminUtil.setCurrentUsersLocale(locale)
    }
    
    // 'available' attribute on MenuItem (id=locales) at TabBar.pcf: line 182, column 29
    function available_181 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.getCurrentUserLocale() != locale
    }
    
    // 'checked' attribute on MenuItem (id=locales) at TabBar.pcf: line 182, column 29
    function checked_184 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.getCurrentLocaleType() == locale
    }
    
    // 'label' attribute on MenuItem (id=locales) at TabBar.pcf: line 182, column 29
    function label_183 () : java.lang.Object {
      return gw.api.util.LocaleUtil.getLocaleLabel(locale)
    }
    
    property get locale () : typekey.LocaleType {
      return getIteratedValue(1) as typekey.LocaleType
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends TabBarExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=accountItem) at TabBar.pcf: line 44, column 43
    function action_30 () : void {
      accountInfo.moveToDestination()
    }
    
    // 'label' attribute on MenuItem (id=accountItem) at TabBar.pcf: line 44, column 43
    function label_31 () : java.lang.Object {
      return accountInfo.getLabel()
    }
    
    property get accountInfo () : com.guidewire.pc.web.controller.SessionItem {
      return getIteratedValue(1) as com.guidewire.pc.web.controller.SessionItem
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationGroupMenuItem2ExpressionsImpl extends LocationGroupMenuItemExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationGroupMenuItem3ExpressionsImpl extends AdminTabMenuItemExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Rating.pcf: line 11, column 31
    function action_111 () : void {
      pcf.RateBooks.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Rating.pcf: line 14, column 41
    function action_113 () : void {
      pcf.ImpactTestingWizard.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Rating.pcf: line 17, column 42
    function action_115 () : void {
      pcf.RateTableDefinitions.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Rating.pcf: line 20, column 34
    function action_117 () : void {
      pcf.RateRoutines.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Rating.pcf: line 23, column 39
    function action_119 () : void {
      pcf.ParameterSetsPage.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Rating.pcf: line 11, column 31
    function action_dest_112 () : pcf.api.Destination {
      return pcf.RateBooks.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Rating.pcf: line 14, column 41
    function action_dest_114 () : pcf.api.Destination {
      return pcf.ImpactTestingWizard.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Rating.pcf: line 17, column 42
    function action_dest_116 () : pcf.api.Destination {
      return pcf.RateTableDefinitions.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Rating.pcf: line 20, column 34
    function action_dest_118 () : pcf.api.Destination {
      return pcf.RateRoutines.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Rating.pcf: line 23, column 39
    function action_dest_120 () : pcf.api.Destination {
      return pcf.ParameterSetsPage.createDestination()
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationGroupMenuItem4ExpressionsImpl extends AdminTabMenuItemExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on Tab (id=AdminTab) at BusinessSettings.pcf: line 9, column 38
    function action_123 () : void {
      pcf.ActivityPatterns.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at BusinessSettings.pcf: line 11, column 30
    function action_125 () : void {
      pcf.Holidays.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at BusinessSettings.pcf: line 13, column 30
    function action_133 () : void {
      pcf.BizRules.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at BusinessSettings.pcf: line 15, column 34
    function action_135 () : void {
      pcf.FormPatterns.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at BusinessSettings.pcf: line 17, column 33
    function action_137 () : void {
      pcf.PolicyHolds.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at BusinessSettings.pcf: line 9, column 38
    function action_dest_124 () : pcf.api.Destination {
      return pcf.ActivityPatterns.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at BusinessSettings.pcf: line 11, column 30
    function action_dest_126 () : pcf.api.Destination {
      return pcf.Holidays.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at BusinessSettings.pcf: line 13, column 30
    function action_dest_134 () : pcf.api.Destination {
      return pcf.BizRules.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at BusinessSettings.pcf: line 15, column 34
    function action_dest_136 () : pcf.api.Destination {
      return pcf.FormPatterns.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at BusinessSettings.pcf: line 17, column 33
    function action_dest_138 () : pcf.api.Destination {
      return pcf.PolicyHolds.createDestination()
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationGroupMenuItem5ExpressionsImpl extends LocationGroupMenuItem4ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationGroupMenuItem6ExpressionsImpl extends LocationGroupMenuItem4ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on Tab (id=AdminTab) at BizRules.pcf: line 10, column 29
    function action_127 () : void {
      pcf.UWRules.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at BizRules.pcf: line 12, column 50
    function action_129 () : void {
      pcf.PCBizRulesExportImportStatus.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at BizRules.pcf: line 14, column 32
    function action_131 () : void {
      pcf.LookupPage.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at BizRules.pcf: line 10, column 29
    function action_dest_128 () : pcf.api.Destination {
      return pcf.UWRules.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at BizRules.pcf: line 12, column 50
    function action_dest_130 () : pcf.api.Destination {
      return pcf.PCBizRulesExportImportStatus.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at BizRules.pcf: line 14, column 32
    function action_dest_132 () : pcf.api.Destination {
      return pcf.LookupPage.createDestination()
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationGroupMenuItem7ExpressionsImpl extends AdminTabMenuItemExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Monitoring.pcf: line 9, column 35
    function action_141 () : void {
      pcf.MessageSearch.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Monitoring.pcf: line 11, column 53
    function action_143 () : void {
      pcf.MessagingDestinationControlList.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Monitoring.pcf: line 13, column 36
    function action_145 () : void {
      pcf.WorkflowSearch.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Monitoring.pcf: line 15, column 35
    function action_147 () : void {
      pcf.WorkflowStats.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Monitoring.pcf: line 9, column 35
    function action_dest_142 () : pcf.api.Destination {
      return pcf.MessageSearch.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Monitoring.pcf: line 11, column 53
    function action_dest_144 () : pcf.api.Destination {
      return pcf.MessagingDestinationControlList.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Monitoring.pcf: line 13, column 36
    function action_dest_146 () : pcf.api.Destination {
      return pcf.WorkflowSearch.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Monitoring.pcf: line 15, column 35
    function action_dest_148 () : pcf.api.Destination {
      return pcf.WorkflowStats.createDestination()
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationGroupMenuItem8ExpressionsImpl extends AdminTabMenuItemExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Utilities.pcf: line 11, column 21
    function action_151 () : void {
      pcf.ImportWizard.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Utilities.pcf: line 13, column 32
    function action_153 () : void {
      pcf.ExportData.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Utilities.pcf: line 15, column 42
    function action_155 () : void {
      pcf.ScriptParametersPage.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Utilities.pcf: line 17, column 35
    function action_157 () : void {
      pcf.DataFlowMasks.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Utilities.pcf: line 19, column 36
    function action_159 () : void {
      pcf.DataChangePage.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Utilities.pcf: line 21, column 32
    function action_161 () : void {
      pcf.Properties.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Utilities.pcf: line 23, column 39
    function action_163 () : void {
      pcf.InboundFileSearch.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Utilities.pcf: line 25, column 40
    function action_165 () : void {
      pcf.OutboundFileSearch.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Utilities.pcf: line 11, column 21
    function action_dest_152 () : pcf.api.Destination {
      return pcf.ImportWizard.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Utilities.pcf: line 13, column 32
    function action_dest_154 () : pcf.api.Destination {
      return pcf.ExportData.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Utilities.pcf: line 15, column 42
    function action_dest_156 () : pcf.api.Destination {
      return pcf.ScriptParametersPage.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Utilities.pcf: line 17, column 35
    function action_dest_158 () : pcf.api.Destination {
      return pcf.DataFlowMasks.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Utilities.pcf: line 19, column 36
    function action_dest_160 () : pcf.api.Destination {
      return pcf.DataChangePage.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Utilities.pcf: line 21, column 32
    function action_dest_162 () : pcf.api.Destination {
      return pcf.Properties.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Utilities.pcf: line 23, column 39
    function action_dest_164 () : pcf.api.Destination {
      return pcf.InboundFileSearch.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Utilities.pcf: line 25, column 40
    function action_dest_166 () : pcf.api.Destination {
      return pcf.OutboundFileSearch.createDestination()
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationGroupMenuItemExpressionsImpl extends AdminTabMenuItemExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on Tab (id=AdminTab) at UsersAndSecurity.pcf: line 19, column 45
    function action_101 () : void {
      pcf.AdminProducerCodeSearch.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at UsersAndSecurity.pcf: line 21, column 41
    function action_103 () : void {
      pcf.UWAuthorityProfiles.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at UsersAndSecurity.pcf: line 23, column 32
    function action_105 () : void {
      pcf.Attributes.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at UsersAndSecurity.pcf: line 25, column 41
    function action_107 () : void {
      pcf.SearchAffinityGroup.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at UsersAndSecurity.pcf: line 9, column 41
    function action_91 () : void {
      pcf.AdminUserSearchPage.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at UsersAndSecurity.pcf: line 11, column 42
    function action_93 () : void {
      pcf.AdminGroupSearchPage.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at UsersAndSecurity.pcf: line 13, column 27
    function action_95 () : void {
      pcf.Roles.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at UsersAndSecurity.pcf: line 15, column 29
    function action_97 () : void {
      pcf.Regions.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at UsersAndSecurity.pcf: line 17, column 44
    function action_99 () : void {
      pcf.OrganizationSearchPage.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at UsersAndSecurity.pcf: line 17, column 44
    function action_dest_100 () : pcf.api.Destination {
      return pcf.OrganizationSearchPage.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at UsersAndSecurity.pcf: line 19, column 45
    function action_dest_102 () : pcf.api.Destination {
      return pcf.AdminProducerCodeSearch.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at UsersAndSecurity.pcf: line 21, column 41
    function action_dest_104 () : pcf.api.Destination {
      return pcf.UWAuthorityProfiles.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at UsersAndSecurity.pcf: line 23, column 32
    function action_dest_106 () : pcf.api.Destination {
      return pcf.Attributes.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at UsersAndSecurity.pcf: line 25, column 41
    function action_dest_108 () : pcf.api.Destination {
      return pcf.SearchAffinityGroup.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at UsersAndSecurity.pcf: line 9, column 41
    function action_dest_92 () : pcf.api.Destination {
      return pcf.AdminUserSearchPage.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at UsersAndSecurity.pcf: line 11, column 42
    function action_dest_94 () : pcf.api.Destination {
      return pcf.AdminGroupSearchPage.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at UsersAndSecurity.pcf: line 13, column 27
    function action_dest_96 () : pcf.api.Destination {
      return pcf.Roles.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at UsersAndSecurity.pcf: line 15, column 29
    function action_dest_98 () : pcf.api.Destination {
      return pcf.Regions.createDestination()
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ReinsuranceTabMenuItemExpressionsImpl extends TabBarExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on Tab (id=ReinsuranceTab) at Reinsurance.pcf: line 12, column 41
    function action_65 () : void {
      pcf.AgreementSearchPage.go()
    }
    
    // 'location' attribute on Tab (id=ReinsuranceTab) at Reinsurance.pcf: line 15, column 39
    function action_67 () : void {
      pcf.ProgramSearchPage.go()
    }
    
    // 'location' attribute on Tab (id=ReinsuranceTab) at Reinsurance.pcf: line 12, column 41
    function action_dest_66 () : pcf.api.Destination {
      return pcf.AgreementSearchPage.createDestination()
    }
    
    // 'location' attribute on Tab (id=ReinsuranceTab) at Reinsurance.pcf: line 15, column 39
    function action_dest_68 () : pcf.api.Destination {
      return pcf.ProgramSearchPage.createDestination()
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ReportTabMenuItemExpressionsImpl extends TabBarExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchTabMenuItemExpressionsImpl extends TabBarExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on Tab (id=SearchTab) at Search.pcf: line 13, column 34
    function action_72 () : void {
      pcf.PolicySearch.go()
    }
    
    // 'location' attribute on Tab (id=SearchTab) at Search.pcf: line 16, column 31
    function action_74 () : void {
      pcf.HVQSearch.go()
    }
    
    // 'location' attribute on Tab (id=SearchTab) at Search.pcf: line 19, column 35
    function action_76 () : void {
      pcf.AccountSearch.go()
    }
    
    // 'location' attribute on Tab (id=SearchTab) at Search.pcf: line 22, column 40
    function action_78 () : void {
      pcf.ProducerCodeSearch.go()
    }
    
    // 'location' attribute on Tab (id=SearchTab) at Search.pcf: line 25, column 36
    function action_80 () : void {
      pcf.ActivitySearch.go()
    }
    
    // 'location' attribute on Tab (id=SearchTab) at Search.pcf: line 28, column 35
    function action_82 () : void {
      pcf.ContactSearch.go()
    }
    
    // 'location' attribute on Tab (id=SearchTab) at Search.pcf: line 13, column 34
    function action_dest_73 () : pcf.api.Destination {
      return pcf.PolicySearch.createDestination()
    }
    
    // 'location' attribute on Tab (id=SearchTab) at Search.pcf: line 16, column 31
    function action_dest_75 () : pcf.api.Destination {
      return pcf.HVQSearch.createDestination()
    }
    
    // 'location' attribute on Tab (id=SearchTab) at Search.pcf: line 19, column 35
    function action_dest_77 () : pcf.api.Destination {
      return pcf.AccountSearch.createDestination()
    }
    
    // 'location' attribute on Tab (id=SearchTab) at Search.pcf: line 22, column 40
    function action_dest_79 () : pcf.api.Destination {
      return pcf.ProducerCodeSearch.createDestination()
    }
    
    // 'location' attribute on Tab (id=SearchTab) at Search.pcf: line 25, column 36
    function action_dest_81 () : pcf.api.Destination {
      return pcf.ActivitySearch.createDestination()
    }
    
    // 'location' attribute on Tab (id=SearchTab) at Search.pcf: line 28, column 35
    function action_dest_83 () : pcf.api.Destination {
      return pcf.ContactSearch.createDestination()
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TabBarExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Tab (id=DesktopTab) at TabBar.pcf: line 12, column 21
    function action_16 () : void {
      Desktop.go()
    }
    
    // 'action' attribute on Tab (id=AdminTab) at TabBar.pcf: line 142, column 21
    function action_173 () : void {
      Admin.go()
    }
    
    // 'action' attribute on TabBarLink (id=HelpTabBarLink) at TabBar.pcf: line 190, column 24
    function action_188 () : void {
      Help.push()
    }
    
    // 'action' attribute on MenuItem (id=AccountTab_NewAccount) at TabBar.pcf: line 22, column 69
    function action_19 () : void {
      NewAccount.go()
    }
    
    // 'action' attribute on TabBarLink (id=PrefsTabBarLink) at TabBar.pcf: line 198, column 61
    function action_190 () : void {
      UserPreferencesWorksheet.goInWorkspace()
    }
    
    // 'action' attribute on HiddenLink (id=ProfilerHiddenLink) at TabBar.pcf: line 216, column 26
    function action_194 () : void {
      ProfilerPopup.push()
    }
    
    // 'action' attribute on HiddenLink (id=InternalToolsHiddenLink) at TabBar.pcf: line 220, column 26
    function action_196 () : void {
      InternalTools.go()
    }
    
    // 'action' attribute on MenuItem (id=AccountTab_FederatedNewAccount) at TabBar.pcf: line 27, column 69
    function action_22 () : void {
      FederatedClusterForNewAccountForward.push()
    }
    
    // 'action' attribute on Tab (id=AccountTab) at TabBar.pcf: line 17, column 20
    function action_33 () : void {
      AccountForward.go()
    }
    
    // 'action' attribute on MenuItem (id=PolicyTab_NewSubmission) at TabBar.pcf: line 56, column 49
    function action_36 () : void {
      NewSubmission.go()
    }
    
    // 'action' attribute on Tab (id=PolicyTab) at TabBar.pcf: line 51, column 20
    function action_52 () : void {
      PolicyForward.go()
    }
    
    // 'action' attribute on MenuItem (id=NewCompany) at TabBar.pcf: line 96, column 85
    function action_54 () : void {
      NewContact.go(TC_COMPANY)
    }
    
    // 'action' attribute on MenuItem (id=NewPerson) at TabBar.pcf: line 100, column 84
    function action_56 () : void {
      NewContact.go(TC_PERSON)
    }
    
    // 'action' attribute on MenuItem (id=Search) at TabBar.pcf: line 105, column 72
    function action_58 () : void {
      ContactSearch.go()
    }
    
    // 'action' attribute on Tab (id=ContactTab) at TabBar.pcf: line 89, column 20
    function action_63 () : void {
      ContactForward.go()
    }
    
    // 'action' attribute on Tab (id=ReinsuranceTab) at TabBar.pcf: line 122, column 64
    function action_70 () : void {
      Reinsurance.go()
    }
    
    // 'action' attribute on Tab (id=SearchTab) at TabBar.pcf: line 127, column 21
    function action_84 () : void {
      Search.go()
    }
    
    // 'action' attribute on Tab (id=TeamTab) at TabBar.pcf: line 132, column 21
    function action_86 () : void {
      TeamForward.go()
    }
    
    // 'action' attribute on Tab (id=ReportTab) at TabBar.pcf: line 137, column 159
    function action_89 () : void {
      Reports.go()
    }
    
    // 'action' attribute on Tab (id=DesktopTab) at TabBar.pcf: line 12, column 21
    function action_dest_17 () : pcf.api.Destination {
      return pcf.Desktop.createDestination()
    }
    
    // 'action' attribute on Tab (id=AdminTab) at TabBar.pcf: line 142, column 21
    function action_dest_174 () : pcf.api.Destination {
      return pcf.Admin.createDestination()
    }
    
    // 'action' attribute on TabBarLink (id=HelpTabBarLink) at TabBar.pcf: line 190, column 24
    function action_dest_189 () : pcf.api.Destination {
      return pcf.Help.createDestination()
    }
    
    // 'action' attribute on TabBarLink (id=PrefsTabBarLink) at TabBar.pcf: line 198, column 61
    function action_dest_191 () : pcf.api.Destination {
      return pcf.UserPreferencesWorksheet.createDestination()
    }
    
    // 'action' attribute on HiddenLink (id=ProfilerHiddenLink) at TabBar.pcf: line 216, column 26
    function action_dest_195 () : pcf.api.Destination {
      return pcf.ProfilerPopup.createDestination()
    }
    
    // 'action' attribute on HiddenLink (id=InternalToolsHiddenLink) at TabBar.pcf: line 220, column 26
    function action_dest_197 () : pcf.api.Destination {
      return pcf.InternalTools.createDestination()
    }
    
    // 'action' attribute on MenuItem (id=AccountTab_NewAccount) at TabBar.pcf: line 22, column 69
    function action_dest_20 () : pcf.api.Destination {
      return pcf.NewAccount.createDestination()
    }
    
    // 'action' attribute on MenuItem (id=AccountTab_FederatedNewAccount) at TabBar.pcf: line 27, column 69
    function action_dest_23 () : pcf.api.Destination {
      return pcf.FederatedClusterForNewAccountForward.createDestination()
    }
    
    // 'action' attribute on Tab (id=AccountTab) at TabBar.pcf: line 17, column 20
    function action_dest_34 () : pcf.api.Destination {
      return pcf.AccountForward.createDestination()
    }
    
    // 'action' attribute on MenuItem (id=PolicyTab_NewSubmission) at TabBar.pcf: line 56, column 49
    function action_dest_37 () : pcf.api.Destination {
      return pcf.NewSubmission.createDestination()
    }
    
    // 'action' attribute on Tab (id=PolicyTab) at TabBar.pcf: line 51, column 20
    function action_dest_53 () : pcf.api.Destination {
      return pcf.PolicyForward.createDestination()
    }
    
    // 'action' attribute on MenuItem (id=NewCompany) at TabBar.pcf: line 96, column 85
    function action_dest_55 () : pcf.api.Destination {
      return pcf.NewContact.createDestination(TC_COMPANY)
    }
    
    // 'action' attribute on MenuItem (id=NewPerson) at TabBar.pcf: line 100, column 84
    function action_dest_57 () : pcf.api.Destination {
      return pcf.NewContact.createDestination(TC_PERSON)
    }
    
    // 'action' attribute on MenuItem (id=Search) at TabBar.pcf: line 105, column 72
    function action_dest_59 () : pcf.api.Destination {
      return pcf.ContactSearch.createDestination()
    }
    
    // 'action' attribute on Tab (id=ContactTab) at TabBar.pcf: line 89, column 20
    function action_dest_64 () : pcf.api.Destination {
      return pcf.ContactForward.createDestination()
    }
    
    // 'action' attribute on Tab (id=ReinsuranceTab) at TabBar.pcf: line 122, column 64
    function action_dest_71 () : pcf.api.Destination {
      return pcf.Reinsurance.createDestination()
    }
    
    // 'action' attribute on Tab (id=SearchTab) at TabBar.pcf: line 127, column 21
    function action_dest_85 () : pcf.api.Destination {
      return pcf.Search.createDestination()
    }
    
    // 'action' attribute on Tab (id=TeamTab) at TabBar.pcf: line 132, column 21
    function action_dest_87 () : pcf.api.Destination {
      return pcf.TeamForward.createDestination()
    }
    
    // 'action' attribute on Tab (id=ReportTab) at TabBar.pcf: line 137, column 159
    function action_dest_90 () : pcf.api.Destination {
      return pcf.Reports.createDestination()
    }
    
    // 'afterFailure' attribute on SearchItem (id=AccountTab_AccountNumberSearchItem_widget) at TabBar.pcf: line 36, column 44
    function afterFailure_25 (searchCriteria :  java.lang.Object, searchText :  java.lang.String) : void {
      (searchCriteria as gw.account.AccountSearchCriteria).AccountNumber = searchText
    }
    
    // 'afterFailure' attribute on SearchItem (id=PolicyTab_SubmissionNumberSearchItem_widget) at TabBar.pcf: line 65, column 47
    function afterFailure_39 (searchCriteria :  java.lang.Object, searchText :  java.lang.String) : void {
      if (searchCriteria typeis gw.policy.PolicyPeriodSearchCriteria) {searchCriteria.resetForSearchItems(Submission, searchText)}
    }
    
    // 'afterFailure' attribute on SearchItem (id=PolicyTab_PolicyRetrievalItem_widget) at TabBar.pcf: line 73, column 108
    function afterFailure_44 (searchCriteria :  java.lang.Object, searchText :  java.lang.String) : void {
      if (searchCriteria typeis gw.policy.PolicyPeriodSearchCriteria) searchCriteria.resetForSearchItems(Policy, searchText)
    }
    
    // 'available' attribute on MenuItem (id=AccountTab_NewAccount) at TabBar.pcf: line 22, column 69
    function available_18 () : java.lang.Boolean {
      return gw.api.web.desktop.data.FederatedDataUIHelper.IsDefault and perm.Account.create
    }
    
    // 'available' attribute on MenuItem (id=AccountTab_FederatedNewAccount) at TabBar.pcf: line 27, column 69
    function available_21 () : java.lang.Boolean {
      return gw.api.web.desktop.data.FederatedDataUIHelper.IsFederated and perm.Account.create
    }
    
    // 'label' attribute on TabBarLogout (id=LogoutTabBarLink) at TabBar.pcf: line 212, column 21
    function label_193 () : java.lang.Object {
      return DisplayKey.get("Web.TabBar.Logout", entity.User.util.CurrentUser)
    }
    
    // 'onFailure' attribute on SearchItem (id=AccountTab_AccountNumberSearchItem_widget) at TabBar.pcf: line 36, column 44
    function onFailure_26 (searchText :  java.lang.String) : pcf.api.Location {
      return AccountSearch.go()
    }
    
    // 'onFailure' attribute on SearchItem (id=PolicyTab_SubmissionNumberSearchItem_widget) at TabBar.pcf: line 65, column 47
    function onFailure_40 (searchText :  java.lang.String) : pcf.api.Location {
      return PolicySearch.go()
    }
    
    // 'onResult' attribute on SearchItem (id=AccountTab_AccountNumberSearchItem_widget) at TabBar.pcf: line 36, column 44
    function onResult_27 (result :  java.lang.Object) : void {
      AccountFileForward.go(result as Account)
    }
    
    // 'onResult' attribute on SearchItem (id=PolicyTab_SubmissionNumberSearchItem_widget) at TabBar.pcf: line 65, column 47
    function onResult_41 (result :  java.lang.Object) : void {
      JobForward.go(result as Job)
    }
    
    // 'onResult' attribute on SearchItem (id=PolicyTab_PolicyRetrievalItem_widget) at TabBar.pcf: line 73, column 108
    function onResult_46 (result :  java.lang.Object) : void {
      PolicyFileForward.go(result as PolicyPeriod, (result as PolicyPeriod).SliceDate)
    }
    
    // 'search' attribute on SearchItem (id=AccountTab_AccountNumberSearchItem_widget) at TabBar.pcf: line 36, column 44
    function search_28 (searchText :  java.lang.String) : java.lang.Object {
      return gw.pcf.TabBarHelper.accountSearch(searchText)
    }
    
    // 'search' attribute on SearchItem (id=PolicyTab_SubmissionNumberSearchItem_widget) at TabBar.pcf: line 65, column 47
    function search_42 (searchText :  java.lang.String) : java.lang.Object {
      return gw.pcf.TabBarHelper.jobFinder(searchText)
    }
    
    // 'search' attribute on SearchItem (id=PolicyTab_PolicyRetrievalItem_widget) at TabBar.pcf: line 73, column 108
    function search_47 (searchText :  java.lang.String) : java.lang.Object {
      return gw.pcf.TabBarHelper.periodFinder(searchText)
    }
    
    // 'systemAlertBar' attribute on TabBar (id=TabBar) at TabBar.pcf: line 7, column 39
    function systemAlertBar_onEnter_198 (def :  pcf.SystemAlertBar) : void {
      def.onEnter()
    }
    
    // 'systemAlertBar' attribute on TabBar (id=TabBar) at TabBar.pcf: line 7, column 39
    function systemAlertBar_refreshVariables_199 (def :  pcf.SystemAlertBar) : void {
      def.refreshVariables()
    }
    
    // 'validationError' attribute on SearchItem (id=AccountTab_AccountNumberSearchItem_widget) at TabBar.pcf: line 36, column 44
    function validationError_29 (searchText :  java.lang.String) : java.lang.String {
      return DisplayKey.get("Web.TabBar.Account.AccountNumberSearch.Error", searchText)
    }
    
    // 'validationError' attribute on SearchItem (id=PolicyTab_SubmissionNumberSearchItem_widget) at TabBar.pcf: line 65, column 47
    function validationError_43 (searchText :  java.lang.String) : java.lang.String {
      return DisplayKey.get("Web.TabBar.Policy.SubmissionNumberSearchMenuItem.Error", searchText)
    }
    
    // 'validationError' attribute on SearchItem (id=PolicyTab_PolicyRetrievalItem_widget) at TabBar.pcf: line 73, column 108
    function validationError_48 (searchText :  java.lang.String) : java.lang.String {
      return DisplayKey.get("Web.TabBar.Policy.PolicyRetrieval.Error", searchText)
    }
    
    // 'value' attribute on MenuItemIterator at TabBar.pcf: line 156, column 46
    function value_179 () : typekey.LanguageType[] {
      return gw.api.util.LocaleUtil.getAllLanguages()?.toTypedArray()
    }
    
    // 'value' attribute on MenuItemIterator at TabBar.pcf: line 174, column 44
    function value_185 () : typekey.LocaleType[] {
      return gw.api.util.LocaleUtil.getAllLocales()?.toTypedArray()
    }
    
    // 'value' attribute on MenuItemIterator at TabBar.pcf: line 40, column 67
    function value_32 () : com.guidewire.pc.web.controller.SessionItem[] {
      return gw.api.web.util.SessionUtil.getAccountHistory()
    }
    
    // 'value' attribute on MenuItemIterator (id=PolicyMenuIt) at TabBar.pcf: line 78, column 67
    function value_51 () : com.guidewire.pc.web.controller.SessionItem[] {
      return gw.api.web.util.SessionUtil.getPolicySessionState()
    }
    
    // 'value' attribute on MenuItemIterator (id=ContactMenuIt) at TabBar.pcf: line 110, column 67
    function value_62 () : com.guidewire.pc.web.controller.SessionItem[] {
      return gw.api.web.util.SessionUtil.getContactSessionState()
    }
    
    // 'visible' attribute on MenuItem (id=languageSwitcher) at TabBar.pcf: line 152, column 62
    function visible_180 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.canSwitchLanguage()
    }
    
    // 'visible' attribute on MenuItem (id=localeSwitcher) at TabBar.pcf: line 170, column 60
    function visible_186 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.canSwitchLocale()
    }
    
    // 'visible' attribute on TabBarLink (id=LanguageTabBarLink) at TabBar.pcf: line 148, column 104
    function visible_187 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.canSwitchLanguage() || gw.api.util.LocaleUtil.canSwitchLocale()
    }
    
    // 'visible' attribute on TabBarLink (id=ReloadPCFTabBarLink) at TabBar.pcf: line 207, column 57
    function visible_192 () : java.lang.Boolean {
      return gw.api.tools.InternalTools.isEnabled()
    }
    
    // 'visible' attribute on SearchItem (id=AccountTab_AccountNumberSearchItem_widget) at TabBar.pcf: line 36, column 44
    function visible_24 () : java.lang.Boolean {
      return perm.System.viewaccount
    }
    
    // 'visible' attribute on MenuItem (id=PolicyTab_NewSubmission) at TabBar.pcf: line 56, column 49
    function visible_35 () : java.lang.Boolean {
      return perm.System.createsubmission
    }
    
    // 'visible' attribute on SearchItem (id=PolicyTab_SubmissionNumberSearchItem_widget) at TabBar.pcf: line 65, column 47
    function visible_38 () : java.lang.Boolean {
      return perm.System.viewsubmission
    }
    
    // 'visible' attribute on Tab (id=ReinsuranceTab) at TabBar.pcf: line 122, column 64
    function visible_69 () : java.lang.Boolean {
      return gw.api.system.PCConfigParameters.RIModuleOn()
    }
    
    // 'visible' attribute on Tab (id=ReportTab) at TabBar.pcf: line 137, column 159
    function visible_88 () : java.lang.Boolean {
      return perm.System.reporting_view and gw.api.system.PLDependenciesGateway.getPluginConfig().isStartablePluginStarted(gw.plugin.cognos.CognosPlugin)
    }
    
    
  }
  
  
}