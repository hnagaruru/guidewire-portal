package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contactfile/ContactFile_Policies.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactFile_PoliciesExpressions {
  @javax.annotation.Generated("config/web/pcf/contactfile/ContactFile_Policies.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AssociatedPoliciesLVExpressionsImpl extends ScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filter' attribute on ToolbarFilterOption at ContactFile_Policies.pcf: line 54, column 39
    function filter_5 () : gw.api.filters.IFilter {
      return productCodeFilterSet.getAllFilter()
    }
    
    // 'filter' attribute on ToolbarFilterOption at ContactFile_Policies.pcf: line 64, column 39
    function filter_7 () : gw.api.filters.IFilter {
      return new gw.api.web.policy.ViewablePolicyPeriodQueryFilter()
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at ContactFile_Policies.pcf: line 45, column 72
    function filters_4 () : gw.api.filters.IFilter[] {
      return new gw.policy.PolicyFilters().FilterOptions
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at ContactFile_Policies.pcf: line 56, column 79
    function filters_6 () : gw.api.filters.IFilter[] {
      return productCodeFilterSet.getClaimPolicyPeriodFilters()
    }
    
    // 'initialValue' attribute on Variable at ContactFile_Policies.pcf: line 34, column 53
    function initialValue_3 () : gw.account.ProductCodeFilterSet {
      return policiesHelper.getProductCodeFilterSet()
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at ContactFile_Policies.pcf: line 90, column 53
    function sortValue_10 (period :  entity.PolicyPeriod) : java.lang.Object {
      return period.PeriodDisplayStatus
    }
    
    // 'value' attribute on DateCell (id=DatesEffective_Cell) at ContactFile_Policies.pcf: line 94, column 45
    function sortValue_11 (period :  entity.PolicyPeriod) : java.lang.Object {
      return period.PeriodStart
    }
    
    // 'value' attribute on DateCell (id=CurrentExpirationDate_Cell) at ContactFile_Policies.pcf: line 98, column 43
    function sortValue_12 (period :  entity.PolicyPeriod) : java.lang.Object {
      return period.PeriodEnd
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at ContactFile_Policies.pcf: line 80, column 59
    function sortValue_8 (period :  entity.PolicyPeriod) : java.lang.Object {
      return period.PolicyNumberDisplayString
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at ContactFile_Policies.pcf: line 86, column 58
    function sortValue_9 (period :  entity.PolicyPeriod) : java.lang.Object {
      return period.Policy.ProductCode
    }
    
    // 'value' attribute on RowIterator at ContactFile_Policies.pcf: line 39, column 47
    function value_35 () : entity.PolicyPeriod[] {
      return policiesHelper.PolicyPeriodsOnViewMore
    }
    
    property get productCodeFilterSet () : gw.account.ProductCodeFilterSet {
      return getVariableValue("productCodeFilterSet", 2) as gw.account.ProductCodeFilterSet
    }
    
    property set productCodeFilterSet ($arg :  gw.account.ProductCodeFilterSet) {
      setVariableValue("productCodeFilterSet", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contactfile/ContactFile_Policies.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactFile_PoliciesExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (contact :  Contact) : int {
      return 0
    }
    
    // 'infoBar' attribute on Page (id=ContactFile_Policies) at ContactFile_Policies.pcf: line 9, column 62
    function infoBar_onEnter_37 (def :  pcf.ContactFileInfoBar) : void {
      def.onEnter(contact)
    }
    
    // 'infoBar' attribute on Page (id=ContactFile_Policies) at ContactFile_Policies.pcf: line 9, column 62
    function infoBar_refreshVariables_38 (def :  pcf.ContactFileInfoBar) : void {
      def.refreshVariables(contact)
    }
    
    // Page (id=ContactFile_Policies) at ContactFile_Policies.pcf: line 9, column 62
    static function parent_39 (contact :  Contact) : pcf.api.Destination {
      return pcf.ContactFile.createDestination(contact)
    }
    
    override property get CurrentLocation () : pcf.ContactFile_Policies {
      return super.CurrentLocation as pcf.ContactFile_Policies
    }
    
    property get contact () : Contact {
      return getVariableValue("contact", 0) as Contact
    }
    
    property set contact ($arg :  Contact) {
      setVariableValue("contact", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contactfile/ContactFile_Policies.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AssociatedPoliciesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=PolicyAccount) at ContactFile_Policies.pcf: line 74, column 66
    function action_13 () : void {
      AccountFileDoRetrievalForward.go(period.Policy.Account.AccountNumber)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at ContactFile_Policies.pcf: line 80, column 59
    function action_17 () : void {
      PolicyFileForward.go(period.PolicyNumber, period.PeriodStart)
    }
    
    // 'action' attribute on Link (id=PolicyAccount) at ContactFile_Policies.pcf: line 74, column 66
    function action_dest_14 () : pcf.api.Destination {
      return pcf.AccountFileDoRetrievalForward.createDestination(period.Policy.Account.AccountNumber)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at ContactFile_Policies.pcf: line 80, column 59
    function action_dest_18 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(period.PolicyNumber, period.PeriodStart)
    }
    
    // 'label' attribute on Link (id=PolicyAccount) at ContactFile_Policies.pcf: line 74, column 66
    function label_15 () : java.lang.Object {
      return period.Policy.Account.AccountHolderContact.DisplayName
    }
    
    // 'tooltip' attribute on Link (id=PolicyAccount) at ContactFile_Policies.pcf: line 74, column 66
    function tooltip_16 () : java.lang.String {
      return period.Policy.Account.AccountNumber
    }
    
    // 'useArchivedStyle' attribute on Row at ContactFile_Policies.pcf: line 67, column 66
    function useArchivedStyle_34 () : java.lang.Boolean {
      return period.PolicyTerm.CheckArchived
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at ContactFile_Policies.pcf: line 80, column 59
    function valueRoot_20 () : java.lang.Object {
      return period
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at ContactFile_Policies.pcf: line 86, column 58
    function valueRoot_23 () : java.lang.Object {
      return period.Policy
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at ContactFile_Policies.pcf: line 80, column 59
    function value_19 () : java.lang.String {
      return period.PolicyNumberDisplayString
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at ContactFile_Policies.pcf: line 86, column 58
    function value_22 () : gw.api.productmodel.Product {
      return period.Policy.Product
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at ContactFile_Policies.pcf: line 90, column 53
    function value_25 () : java.lang.String {
      return period.PeriodDisplayStatus
    }
    
    // 'value' attribute on DateCell (id=DatesEffective_Cell) at ContactFile_Policies.pcf: line 94, column 45
    function value_28 () : java.util.Date {
      return period.PeriodStart
    }
    
    // 'value' attribute on DateCell (id=CurrentExpirationDate_Cell) at ContactFile_Policies.pcf: line 98, column 43
    function value_31 () : java.util.Date {
      return period.PeriodEnd
    }
    
    property get period () : entity.PolicyPeriod {
      return getIteratedValue(3) as entity.PolicyPeriod
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contactfile/ContactFile_Policies.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ScreenExpressionsImpl extends ContactFile_PoliciesExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=RecalculateLossRatio) at ContactFile_Policies.pcf: line 25, column 97
    function action_2 () : void {
      policiesHelper.recalculateLossRatio()
    }
    
    // 'available' attribute on ToolbarButton (id=RecalculateLossRatio) at ContactFile_Policies.pcf: line 25, column 97
    function available_1 () : java.lang.Boolean {
      return policiesHelper.PolicyPeriodsOnViewMore.HasElements
    }
    
    // 'initialValue' attribute on Variable at ContactFile_Policies.pcf: line 19, column 68
    function initialValue_0 () : gw.api.web.dashboard.ui.policy.CurrentPolicyHelper {
      return gw.api.web.dashboard.ui.policy.CurrentPolicyHelper.forContact(contact)
    }
    
    // 'visible' attribute on DetailViewPanel at ContactFile_Policies.pcf: line 104, column 65
    function visible_36 () : java.lang.Boolean {
      return gw.api.archive.PCArchivingUtil.ArchiveEnabled
    }
    
    property get policiesHelper () : gw.api.web.dashboard.ui.policy.CurrentPolicyHelper {
      return getVariableValue("policiesHelper", 1) as gw.api.web.dashboard.ui.policy.CurrentPolicyHelper
    }
    
    property set policiesHelper ($arg :  gw.api.web.dashboard.ui.policy.CurrentPolicyHelper) {
      setVariableValue("policiesHelper", 1, $arg)
    }
    
    
  }
  
  
}