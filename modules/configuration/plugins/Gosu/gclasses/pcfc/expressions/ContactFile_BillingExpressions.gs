package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contactfile/ContactFile_Billing.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactFile_BillingExpressions {
  @javax.annotation.Generated("config/web/pcf/contactfile/ContactFile_Billing.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactFile_BillingExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (contact :  Contact) : int {
      return 0
    }
    
    // 'infoBar' attribute on Page (id=ContactFile_Billing) at ContactFile_Billing.pcf: line 8, column 71
    function infoBar_onEnter_52 (def :  pcf.ContactFileInfoBar) : void {
      def.onEnter(contact)
    }
    
    // 'infoBar' attribute on Page (id=ContactFile_Billing) at ContactFile_Billing.pcf: line 8, column 71
    function infoBar_refreshVariables_53 (def :  pcf.ContactFileInfoBar) : void {
      def.refreshVariables(contact)
    }
    
    // Page (id=ContactFile_Billing) at ContactFile_Billing.pcf: line 8, column 71
    static function parent_54 (contact :  Contact) : pcf.api.Destination {
      return pcf.ContactFile.createDestination(contact)
    }
    
    override property get CurrentLocation () : pcf.ContactFile_Billing {
      return super.CurrentLocation as pcf.ContactFile_Billing
    }
    
    property get contact () : Contact {
      return getVariableValue("contact", 0) as Contact
    }
    
    property set contact ($arg :  Contact) {
      setVariableValue("contact", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contactfile/ContactFile_Billing.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=PolicyAccount) at ContactFile_Billing.pcf: line 52, column 60
    function action_13 () : void {
      AccountFileDoRetrievalForward.go(externalAccount.AccountNumber)
    }
    
    // 'action' attribute on Link (id=BillingAccount) at ContactFile_Billing.pcf: line 74, column 68
    function action_25 () : void {
      BCAccount.push(gw.api.system.PCConfigParameters.BillingSystemURL.Value, externalAccount.ExternalAccountNumber)
    }
    
    // 'action' attribute on Link (id=PolicyAccount) at ContactFile_Billing.pcf: line 52, column 60
    function action_dest_14 () : pcf.api.Destination {
      return pcf.AccountFileDoRetrievalForward.createDestination(externalAccount.AccountNumber)
    }
    
    // 'action' attribute on Link (id=BillingAccount) at ContactFile_Billing.pcf: line 74, column 68
    function action_dest_26 () : pcf.api.Destination {
      return pcf.BCAccount.createDestination(gw.api.system.PCConfigParameters.BillingSystemURL.Value, externalAccount.ExternalAccountNumber)
    }
    
    // 'available' attribute on Link (id=BillingAccount) at ContactFile_Billing.pcf: line 74, column 68
    function available_24 () : java.lang.Boolean {
      return gw.api.system.PCConfigParameters.BillingSystemURL.Value.HasContent and perm.System.viewbillingsystem
    }
    
    // 'fontColor' attribute on TextCell (id=Status_Cell) at ContactFile_Billing.pcf: line 80, column 205
    function fontColor_29 () : java.lang.Object {
      return externalAccount.BillingAccountDisplayTotals.Delinquent ? gw.api.web.color.GWColor.THEME_ALERT_ERROR : null
    }
    
    // 'label' attribute on Link (id=PolicyAccount) at ContactFile_Billing.pcf: line 52, column 60
    function label_15 () : java.lang.Object {
      return entity.Account.finder.findAccountByAccountNumber(externalAccount.AccountNumber).AccountHolderContact.DisplayName
    }
    
    // 'label' attribute on Link (id=BillingAccount) at ContactFile_Billing.pcf: line 74, column 68
    function label_27 () : java.lang.Object {
      return externalAccount.BillingAccountDisplayTotals.PrimaryPayer.Name
    }
    
    // 'tooltip' attribute on Link (id=PolicyAccount) at ContactFile_Billing.pcf: line 52, column 60
    function tooltip_16 () : java.lang.String {
      return externalAccount.AccountNumber
    }
    
    // 'tooltip' attribute on Link (id=BillingAccount) at ContactFile_Billing.pcf: line 74, column 68
    function tooltip_28 () : java.lang.String {
      return externalAccount.ExternalAccountNumber
    }
    
    // 'value' attribute on TextCell (id=Role_Cell) at ContactFile_Billing.pcf: line 65, column 48
    function valueRoot_22 () : java.lang.Object {
      return externalAccount
    }
    
    // 'value' attribute on MonetaryAmountCell (id=BilledOutstanding_Cell) at ContactFile_Billing.pcf: line 85, column 99
    function valueRoot_35 () : java.lang.Object {
      return externalAccount.BillingAccountDisplayTotals.BilledOutstandingTotal
    }
    
    // 'value' attribute on MonetaryAmountCell (id=CurrentDue_Cell) at ContactFile_Billing.pcf: line 90, column 101
    function valueRoot_38 () : java.lang.Object {
      return externalAccount.BillingAccountDisplayTotals.BilledOutstandingCurrent
    }
    
    // 'value' attribute on MonetaryAmountCell (id=PastDue_Cell) at ContactFile_Billing.pcf: line 95, column 101
    function valueRoot_41 () : java.lang.Object {
      return externalAccount.BillingAccountDisplayTotals.BilledOutstandingPastDue
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Unbilled_Cell) at ContactFile_Billing.pcf: line 100, column 90
    function valueRoot_44 () : java.lang.Object {
      return externalAccount.BillingAccountDisplayTotals.UnbilledTotal
    }
    
    // 'value' attribute on TextCell (id=NextInvoiceDue_Cell) at ContactFile_Billing.pcf: line 57, column 232
    function value_17 () : java.lang.String {
      return gw.api.web.dashboard.ui.payment.PaymentFormatter.formatNextInvoice(externalAccount.BillingAccountDisplayTotals.NextInvoice.NextInvoiceDate, externalAccount.BillingAccountDisplayTotals.NextInvoice.Invoices)
    }
    
    // 'value' attribute on TextCell (id=LastPayment_Cell) at ContactFile_Billing.pcf: line 61, column 219
    function value_19 () : java.lang.String {
      return gw.api.web.dashboard.ui.payment.PaymentFormatter.formatLastPayment(externalAccount.BillingAccountDisplayTotals.LastPayment.Date, externalAccount.BillingAccountDisplayTotals.LastPayment.Amount)
    }
    
    // 'value' attribute on TextCell (id=Role_Cell) at ContactFile_Billing.pcf: line 65, column 48
    function value_21 () : java.lang.String {
      return externalAccount.Roles
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at ContactFile_Billing.pcf: line 80, column 205
    function value_30 () : java.lang.String {
      return externalAccount.BillingAccountDisplayTotals.Delinquent ? DisplayKey.get("Web.Billing.Status.Delinquent") : DisplayKey.get("Web.Billing.Status.InGoodStanding")
    }
    
    // 'value' attribute on MonetaryAmountCell (id=BilledOutstanding_Cell) at ContactFile_Billing.pcf: line 85, column 99
    function value_34 () : gw.pl.currency.MonetaryAmount {
      return externalAccount.BillingAccountDisplayTotals.BilledOutstandingTotal.Total
    }
    
    // 'value' attribute on MonetaryAmountCell (id=CurrentDue_Cell) at ContactFile_Billing.pcf: line 90, column 101
    function value_37 () : gw.pl.currency.MonetaryAmount {
      return externalAccount.BillingAccountDisplayTotals.BilledOutstandingCurrent.Total
    }
    
    // 'value' attribute on MonetaryAmountCell (id=PastDue_Cell) at ContactFile_Billing.pcf: line 95, column 101
    function value_40 () : gw.pl.currency.MonetaryAmount {
      return externalAccount.BillingAccountDisplayTotals.BilledOutstandingPastDue.Total
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Unbilled_Cell) at ContactFile_Billing.pcf: line 100, column 90
    function value_43 () : gw.pl.currency.MonetaryAmount {
      return externalAccount.BillingAccountDisplayTotals.UnbilledTotal.Total
    }
    
    // 'fontColor' attribute on TextCell (id=Status_Cell) at ContactFile_Billing.pcf: line 80, column 205
    function verifyFontColorIsAllowedType_31 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=Status_Cell) at ContactFile_Billing.pcf: line 80, column 205
    function verifyFontColorIsAllowedType_31 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=Status_Cell) at ContactFile_Billing.pcf: line 80, column 205
    function verifyFontColor_32 () : void {
      var __fontColorArg = externalAccount.BillingAccountDisplayTotals.Delinquent ? gw.api.web.color.GWColor.THEME_ALERT_ERROR : null
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_31(__fontColorArg)
    }
    
    property get externalAccount () : gw.contact.ContactAssociationFinder.ExternalBillingAccount {
      return getIteratedValue(2) as gw.contact.ContactAssociationFinder.ExternalBillingAccount
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contactfile/ContactFile_Billing.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ScreenExpressionsImpl extends ContactFile_BillingExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on AlertBar (id=billingConfirm) at ContactFile_Billing.pcf: line 33, column 130
    function action_4 () : void {
      renderListView = true
    }
    
    // 'initialValue' attribute on Variable at ContactFile_Billing.pcf: line 18, column 52
    function initialValue_0 () : java.util.Map<String, String> {
      return contact.AssociationFinder.createTopLevelAccountToRolesMap()
    }
    
    // 'initialValue' attribute on Variable at ContactFile_Billing.pcf: line 22, column 25
    function initialValue_1 () : boolean {
      return topLevelAccountToRolesMap.Count <= gw.api.system.PCConfigParameters.BillingNumAccountWarningThreshold.Value
    }
    
    // 'initialValue' attribute on Variable at ContactFile_Billing.pcf: line 26, column 98
    function initialValue_2 () : java.util.List<gw.contact.ContactAssociationFinder.ExternalBillingAccount> {
      return contact.AssociationFinder.findHeldAndBilledExternalAccounts(topLevelAccountToRolesMap)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=CurrentDue_Cell) at ContactFile_Billing.pcf: line 90, column 101
    function sortValue_10 (externalAccount :  gw.contact.ContactAssociationFinder.ExternalBillingAccount) : java.lang.Object {
      return externalAccount.BillingAccountDisplayTotals.BilledOutstandingCurrent.Total
    }
    
    // 'value' attribute on MonetaryAmountCell (id=PastDue_Cell) at ContactFile_Billing.pcf: line 95, column 101
    function sortValue_11 (externalAccount :  gw.contact.ContactAssociationFinder.ExternalBillingAccount) : java.lang.Object {
      return externalAccount.BillingAccountDisplayTotals.BilledOutstandingPastDue.Total
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Unbilled_Cell) at ContactFile_Billing.pcf: line 100, column 90
    function sortValue_12 (externalAccount :  gw.contact.ContactAssociationFinder.ExternalBillingAccount) : java.lang.Object {
      return externalAccount.BillingAccountDisplayTotals.UnbilledTotal.Total
    }
    
    // 'value' attribute on TextCell (id=NextInvoiceDue_Cell) at ContactFile_Billing.pcf: line 57, column 232
    function sortValue_5 (externalAccount :  gw.contact.ContactAssociationFinder.ExternalBillingAccount) : java.lang.Object {
      return gw.api.web.dashboard.ui.payment.PaymentFormatter.formatNextInvoice(externalAccount.BillingAccountDisplayTotals.NextInvoice.NextInvoiceDate, externalAccount.BillingAccountDisplayTotals.NextInvoice.Invoices)
    }
    
    // 'value' attribute on TextCell (id=LastPayment_Cell) at ContactFile_Billing.pcf: line 61, column 219
    function sortValue_6 (externalAccount :  gw.contact.ContactAssociationFinder.ExternalBillingAccount) : java.lang.Object {
      return gw.api.web.dashboard.ui.payment.PaymentFormatter.formatLastPayment(externalAccount.BillingAccountDisplayTotals.LastPayment.Date, externalAccount.BillingAccountDisplayTotals.LastPayment.Amount)
    }
    
    // 'value' attribute on TextCell (id=Role_Cell) at ContactFile_Billing.pcf: line 65, column 48
    function sortValue_7 (externalAccount :  gw.contact.ContactAssociationFinder.ExternalBillingAccount) : java.lang.Object {
      return externalAccount.Roles
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at ContactFile_Billing.pcf: line 80, column 205
    function sortValue_8 (externalAccount :  gw.contact.ContactAssociationFinder.ExternalBillingAccount) : java.lang.Object {
      return externalAccount.BillingAccountDisplayTotals.Delinquent ? DisplayKey.get("Web.Billing.Status.Delinquent") : DisplayKey.get("Web.Billing.Status.InGoodStanding")
    }
    
    // 'value' attribute on MonetaryAmountCell (id=BilledOutstanding_Cell) at ContactFile_Billing.pcf: line 85, column 99
    function sortValue_9 (externalAccount :  gw.contact.ContactAssociationFinder.ExternalBillingAccount) : java.lang.Object {
      return externalAccount.BillingAccountDisplayTotals.BilledOutstandingTotal.Total
    }
    
    // 'value' attribute on RowIterator at ContactFile_Billing.pcf: line 43, column 106
    function value_46 () : java.util.List<gw.contact.ContactAssociationFinder.ExternalBillingAccount> {
      return externalAccounts
    }
    
    // 'value' attribute on TextInput (id=AccountBalancesConvertedAlert_Input) at ContactFile_Billing.pcf: line 115, column 128
    function value_49 () : java.lang.Object {
      return null
    }
    
    // 'visible' attribute on AlertBar (id=billingConfirm) at ContactFile_Billing.pcf: line 33, column 130
    function visible_3 () : java.lang.Boolean {
      return topLevelAccountToRolesMap.Count > gw.api.system.PCConfigParameters.BillingNumAccountWarningThreshold.Value
    }
    
    // 'visible' attribute on ListViewPanel (id=BillingAccountsLV) at ContactFile_Billing.pcf: line 38, column 36
    function visible_47 () : java.lang.Boolean {
      return renderListView
    }
    
    // 'visible' attribute on TextInput (id=AccountBalancesConvertedAlert_Input) at ContactFile_Billing.pcf: line 115, column 128
    function visible_48 () : java.lang.Boolean {
      return externalAccounts*.BillingAccountDisplayTotals.hasMatch( \ totals -> totals.AccountBalancesConverted)
    }
    
    property get externalAccounts () : java.util.List<gw.contact.ContactAssociationFinder.ExternalBillingAccount> {
      return getVariableValue("externalAccounts", 1) as java.util.List<gw.contact.ContactAssociationFinder.ExternalBillingAccount>
    }
    
    property set externalAccounts ($arg :  java.util.List<gw.contact.ContactAssociationFinder.ExternalBillingAccount>) {
      setVariableValue("externalAccounts", 1, $arg)
    }
    
    property get renderListView () : boolean {
      return getVariableValue("renderListView", 1) as java.lang.Boolean
    }
    
    property set renderListView ($arg :  boolean) {
      setVariableValue("renderListView", 1, $arg)
    }
    
    property get topLevelAccountToRolesMap () : java.util.Map<String, String> {
      return getVariableValue("topLevelAccountToRolesMap", 1) as java.util.Map<String, String>
    }
    
    property set topLevelAccountToRolesMap ($arg :  java.util.Map<String, String>) {
      setVariableValue("topLevelAccountToRolesMap", 1, $arg)
    }
    
    
  }
  
  
}