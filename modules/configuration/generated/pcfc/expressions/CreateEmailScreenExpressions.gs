package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/email/CreateEmailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CreateEmailScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/email/CreateEmailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CreateEmailScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PickerToolbarButton (id=EmailWorksheet_UseTemplateButton) at CreateEmailScreen.pcf: line 79, column 38
    function action_11 () : void {
      PickEmailTemplatePopup.push(new gw.api.email.EmailTemplateSearchCriteria( symbolTable.Keys?.toTypedArray()))
    }
    
    // 'action' attribute on ButtonInput (id=ShowCCRecipients_Input) at CreateEmailScreen.pcf: line 112, column 30
    function action_26 () : void {
      showCC = true
    }
    
    // 'action' attribute on ButtonInput (id=ShowBCCRecipients_Input) at CreateEmailScreen.pcf: line 123, column 31
    function action_32 () : void {
      showBCC = true
    }
    
    // 'action' attribute on PickerToolbarButton (id=AddDocumentButton) at CreateEmailScreen.pcf: line 178, column 31
    function action_60 () : void {
      PickExistingDocumentPopup.push(docContainer)
    }
    
    // 'action' attribute on ToolbarButton (id=SendEmailButton) at CreateEmailScreen.pcf: line 65, column 25
    function action_8 () : void {
      gw.web.email.CreateEmailsScreenUIHelper.sendEmailToRecipients(newEmail, language, saveAsDocument, documentToSave, docContainer, symbolTable, emailTemplate, CurrentLocation)
    }
    
    // 'action' attribute on ToolbarButton (id=CancelEmailButton) at CreateEmailScreen.pcf: line 71, column 25
    function action_9 () : void {
      CurrentLocation.cancel()
    }
    
    // 'action' attribute on PickerToolbarButton (id=EmailWorksheet_UseTemplateButton) at CreateEmailScreen.pcf: line 79, column 38
    function action_dest_12 () : pcf.api.Destination {
      return pcf.PickEmailTemplatePopup.createDestination(new gw.api.email.EmailTemplateSearchCriteria( symbolTable.Keys?.toTypedArray()))
    }
    
    // 'action' attribute on PickerToolbarButton (id=AddDocumentButton) at CreateEmailScreen.pcf: line 178, column 31
    function action_dest_61 () : pcf.api.Destination {
      return pcf.PickExistingDocumentPopup.createDestination(docContainer)
    }
    
    // 'available' attribute on ToolbarButton (id=SendEmailButton) at CreateEmailScreen.pcf: line 65, column 25
    function available_7 () : java.lang.Boolean {
      return saveAsDocument ? docActionsHelper.DocumentTemplateActionsAvailable : true
    }
    
    // 'def' attribute on InputSetRef (id=ToRecipientLVInput) at CreateEmailScreen.pcf: line 106, column 36
    function def_onEnter_23 (def :  pcf.CreateEmailScreenRecipientInputSet) : void {
      def.onEnter(DisplayKey.get("Web.Email.ToRecipients"), newEmail.ToRecipients,account)
    }
    
    // 'def' attribute on InputSetRef (id=ToCCRecipientLVInput) at CreateEmailScreen.pcf: line 117, column 29
    function def_onEnter_29 (def :  pcf.CreateEmailScreenRecipientInputSet) : void {
      def.onEnter(DisplayKey.get("Web.Email.CCRecipients"), newEmail.CcRecipients, account)
    }
    
    // 'def' attribute on InputSetRef (id=ToBCCRecipientLVInput) at CreateEmailScreen.pcf: line 128, column 30
    function def_onEnter_35 (def :  pcf.CreateEmailScreenRecipientInputSet) : void {
      def.onEnter(DisplayKey.get("Web.Email.BCCRecipients"), newEmail.BccRecipients, account)
    }
    
    // 'def' attribute on InputSetRef (id=ToRecipientLVInput) at CreateEmailScreen.pcf: line 106, column 36
    function def_refreshVariables_24 (def :  pcf.CreateEmailScreenRecipientInputSet) : void {
      def.refreshVariables(DisplayKey.get("Web.Email.ToRecipients"), newEmail.ToRecipients,account)
    }
    
    // 'def' attribute on InputSetRef (id=ToCCRecipientLVInput) at CreateEmailScreen.pcf: line 117, column 29
    function def_refreshVariables_30 (def :  pcf.CreateEmailScreenRecipientInputSet) : void {
      def.refreshVariables(DisplayKey.get("Web.Email.CCRecipients"), newEmail.CcRecipients, account)
    }
    
    // 'def' attribute on InputSetRef (id=ToBCCRecipientLVInput) at CreateEmailScreen.pcf: line 128, column 30
    function def_refreshVariables_36 (def :  pcf.CreateEmailScreenRecipientInputSet) : void {
      def.refreshVariables(DisplayKey.get("Web.Email.BCCRecipients"), newEmail.BccRecipients, account)
    }
    
    // 'value' attribute on TypeKeyInput (id=Language_Input) at CreateEmailScreen.pcf: line 99, column 95
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      language = (__VALUE_TO_SET as typekey.LanguageType)
    }
    
    // 'value' attribute on CheckBoxInput (id=SaveAsDocument_Input) at CreateEmailScreen.pcf: line 137, column 67
    function defaultSetter_39 (__VALUE_TO_SET :  java.lang.Object) : void {
      saveAsDocument = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=SenderName_Input) at CreateEmailScreen.pcf: line 146, column 41
    function defaultSetter_43 (__VALUE_TO_SET :  java.lang.Object) : void {
      newEmail.Sender.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=SenderEmail_Input) at CreateEmailScreen.pcf: line 151, column 49
    function defaultSetter_47 (__VALUE_TO_SET :  java.lang.Object) : void {
      newEmail.Sender.EmailAddress = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Subject_Input) at CreateEmailScreen.pcf: line 158, column 37
    function defaultSetter_52 (__VALUE_TO_SET :  java.lang.Object) : void {
      newEmail.Subject = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextAreaInput (id=Body_Input) at CreateEmailScreen.pcf: line 166, column 34
    function defaultSetter_57 (__VALUE_TO_SET :  java.lang.Object) : void {
      newEmail.Body = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at CreateEmailScreen.pcf: line 23, column 24
    function initialValue_0 () : Document {
      return null
    }
    
    // 'initialValue' attribute on Variable at CreateEmailScreen.pcf: line 27, column 23
    function initialValue_1 () : Boolean {
      return emailTemplate == null
    }
    
    // 'initialValue' attribute on Variable at CreateEmailScreen.pcf: line 31, column 52
    function initialValue_2 () : gw.api.contact.ExternalContactSource {
      return gw.api.contact.AddressBookUtil.newAddressBookContactSource()
    }
    
    // 'initialValue' attribute on Variable at CreateEmailScreen.pcf: line 35, column 23
    function initialValue_3 () : boolean {
      return docContainer != null and perm.Document.create
    }
    
    // 'initialValue' attribute on Variable at CreateEmailScreen.pcf: line 47, column 28
    function initialValue_4 () : LanguageType {
      return gw.web.email.CreateEmailsScreenUIHelper.initLanguage(docContainer)
    }
    
    // 'initialValue' attribute on Variable at CreateEmailScreen.pcf: line 51, column 34
    function initialValue_5 () : gw.api.email.Email {
      return gw.web.email.CreateEmailsScreenUIHelper.initNewEmail(emailTemplate, noDefaultTemplate, language,  symbolTable, documentsToSend)
    }
    
    // 'initialValue' attribute on Variable at CreateEmailScreen.pcf: line 55, column 30
    function initialValue_6 () : entity.Account {
      return symbolTable.get("account") as entity.Account
    }
    
    // 'label' attribute on AlertBar (id=NoDefaultTemplate) at CreateEmailScreen.pcf: line 89, column 62
    function label_16 () : java.lang.Object {
      return DisplayKey.get("Web.Email.Template.NotFound", emailTemplate)
    }
    
    // 'onChange' attribute on PostOnChange at CreateEmailScreen.pcf: line 101, column 148
    function onChange_17 () : void {
      gw.web.email.CreateEmailsScreenUIHelper.executeTemplate(newEmail, emailTemplate, noDefaultTemplate, language, symbolTable)
    }
    
    // 'onPick' attribute on PickerToolbarButton (id=EmailWorksheet_UseTemplateButton) at CreateEmailScreen.pcf: line 79, column 38
    function onPick_13 (PickedValue :  gw.plugin.email.IEmailTemplateDescriptor) : void {
      newEmail.useEmailTemplate( PickedValue, symbolTable ); language = gw.api.util.LocaleUtil.toLanguageType(PickedValue.Locale)
    }
    
    // 'onPick' attribute on PickerToolbarButton (id=AddDocumentButton) at CreateEmailScreen.pcf: line 178, column 31
    function onPick_62 (PickedValue :  Document) : void {
      newEmail.addDocument(PickedValue)
    }
    
    // 'requestValidationExpression' attribute on TextInput (id=Subject_Input) at CreateEmailScreen.pcf: line 158, column 37
    function requestValidationExpression_50 (VALUE :  java.lang.String) : java.lang.Object {
      return VALUE == null ? DisplayKey.get("Web.Email.Error.SubjectRequired") : null
    }
    
    // 'requestValidationExpression' attribute on TextAreaInput (id=Body_Input) at CreateEmailScreen.pcf: line 166, column 34
    function requestValidationExpression_55 (VALUE :  java.lang.String) : java.lang.Object {
      return VALUE == null ? DisplayKey.get("Web.Email.Error.BodyRequired") : null
    }
    
    // 'value' attribute on TextCell (id=Document_Cell) at CreateEmailScreen.pcf: line 197, column 50
    function sortValue_63 (attachedDocument :  entity.Document) : java.lang.Object {
      return attachedDocument.Name
    }
    
    // 'toRemove' attribute on RowIterator at CreateEmailScreen.pcf: line 191, column 45
    function toRemove_68 (attachedDocument :  entity.Document) : void {
      newEmail.removeDocument( attachedDocument )
    }
    
    // 'value' attribute on TextInput (id=SenderName_Input) at CreateEmailScreen.pcf: line 146, column 41
    function valueRoot_44 () : java.lang.Object {
      return newEmail.Sender
    }
    
    // 'value' attribute on TextInput (id=Subject_Input) at CreateEmailScreen.pcf: line 158, column 37
    function valueRoot_53 () : java.lang.Object {
      return newEmail
    }
    
    // 'value' attribute on TypeKeyInput (id=Language_Input) at CreateEmailScreen.pcf: line 99, column 95
    function value_19 () : typekey.LanguageType {
      return language
    }
    
    // 'value' attribute on CheckBoxInput (id=SaveAsDocument_Input) at CreateEmailScreen.pcf: line 137, column 67
    function value_38 () : java.lang.Boolean {
      return saveAsDocument
    }
    
    // 'value' attribute on TextInput (id=SenderName_Input) at CreateEmailScreen.pcf: line 146, column 41
    function value_42 () : java.lang.String {
      return newEmail.Sender.Name
    }
    
    // 'value' attribute on TextInput (id=SenderEmail_Input) at CreateEmailScreen.pcf: line 151, column 49
    function value_46 () : java.lang.String {
      return newEmail.Sender.EmailAddress
    }
    
    // 'value' attribute on TextInput (id=Subject_Input) at CreateEmailScreen.pcf: line 158, column 37
    function value_51 () : java.lang.String {
      return newEmail.Subject
    }
    
    // 'value' attribute on TextAreaInput (id=Body_Input) at CreateEmailScreen.pcf: line 166, column 34
    function value_56 () : java.lang.String {
      return newEmail.Body
    }
    
    // 'value' attribute on RowIterator at CreateEmailScreen.pcf: line 191, column 45
    function value_69 () : entity.Document[] {
      return newEmail.Documents?.toTypedArray()
    }
    
    // 'visible' attribute on PickerToolbarButton (id=EmailWorksheet_UseTemplateButton) at CreateEmailScreen.pcf: line 79, column 38
    function visible_10 () : java.lang.Boolean {
      return noDefaultTemplate
    }
    
    // 'visible' attribute on AlertBar (id=EmailWorksheet_SendEmailUnavailable) at CreateEmailScreen.pcf: line 84, column 97
    function visible_14 () : java.lang.Boolean {
      return saveAsDocument ? not docActionsHelper.DocumentTemplateActionsAvailable : false
    }
    
    // 'visible' attribute on AlertBar (id=NoDefaultTemplate) at CreateEmailScreen.pcf: line 89, column 62
    function visible_15 () : java.lang.Boolean {
      return emailTemplate != null and noDefaultTemplate
    }
    
    // 'visible' attribute on TypeKeyInput (id=Language_Input) at CreateEmailScreen.pcf: line 99, column 95
    function visible_18 () : java.lang.Boolean {
      return LanguageType.getTypeKeys( false ).Count >  1 and emailTemplate != null
    }
    
    // 'visible' attribute on ButtonInput (id=ShowCCRecipients_Input) at CreateEmailScreen.pcf: line 112, column 30
    function visible_25 () : java.lang.Boolean {
      return !showCC
    }
    
    // 'visible' attribute on InputSetRef (id=ToCCRecipientLVInput) at CreateEmailScreen.pcf: line 117, column 29
    function visible_28 () : java.lang.Boolean {
      return showCC
    }
    
    // 'visible' attribute on ButtonInput (id=ShowBCCRecipients_Input) at CreateEmailScreen.pcf: line 123, column 31
    function visible_31 () : java.lang.Boolean {
      return !showBCC
    }
    
    // 'visible' attribute on InputSetRef (id=ToBCCRecipientLVInput) at CreateEmailScreen.pcf: line 128, column 30
    function visible_34 () : java.lang.Boolean {
      return showBCC
    }
    
    // 'visible' attribute on CheckBoxInput (id=SaveAsDocument_Input) at CreateEmailScreen.pcf: line 137, column 67
    function visible_37 () : java.lang.Boolean {
      return docContainer != null and perm.Document.create
    }
    
    property get account () : entity.Account {
      return getVariableValue("account", 0) as entity.Account
    }
    
    property set account ($arg :  entity.Account) {
      setVariableValue("account", 0, $arg)
    }
    
    property get docActionsHelper () : gw.document.DocumentsActionsUIHelper {
      return getVariableValue("docActionsHelper", 0) as gw.document.DocumentsActionsUIHelper
    }
    
    property set docActionsHelper ($arg :  gw.document.DocumentsActionsUIHelper) {
      setVariableValue("docActionsHelper", 0, $arg)
    }
    
    property get docContainer () : gw.api.domain.document.DocumentContainer {
      return getRequireValue("docContainer", 0) as gw.api.domain.document.DocumentContainer
    }
    
    property set docContainer ($arg :  gw.api.domain.document.DocumentContainer) {
      setRequireValue("docContainer", 0, $arg)
    }
    
    property get documentToSave () : Document {
      return getVariableValue("documentToSave", 0) as Document
    }
    
    property set documentToSave ($arg :  Document) {
      setVariableValue("documentToSave", 0, $arg)
    }
    
    property get documentsToSend () : Document[] {
      return getRequireValue("documentsToSend", 0) as Document[]
    }
    
    property set documentsToSend ($arg :  Document[]) {
      setRequireValue("documentsToSend", 0, $arg)
    }
    
    property get emailTemplate () : String {
      return getRequireValue("emailTemplate", 0) as String
    }
    
    property set emailTemplate ($arg :  String) {
      setRequireValue("emailTemplate", 0, $arg)
    }
    
    property get externalContactSource () : gw.api.contact.ExternalContactSource {
      return getVariableValue("externalContactSource", 0) as gw.api.contact.ExternalContactSource
    }
    
    property set externalContactSource ($arg :  gw.api.contact.ExternalContactSource) {
      setVariableValue("externalContactSource", 0, $arg)
    }
    
    property get language () : LanguageType {
      return getVariableValue("language", 0) as LanguageType
    }
    
    property set language ($arg :  LanguageType) {
      setVariableValue("language", 0, $arg)
    }
    
    property get newEmail () : gw.api.email.Email {
      return getVariableValue("newEmail", 0) as gw.api.email.Email
    }
    
    property set newEmail ($arg :  gw.api.email.Email) {
      setVariableValue("newEmail", 0, $arg)
    }
    
    property get noDefaultTemplate () : Boolean {
      return getVariableValue("noDefaultTemplate", 0) as Boolean
    }
    
    property set noDefaultTemplate ($arg :  Boolean) {
      setVariableValue("noDefaultTemplate", 0, $arg)
    }
    
    property get saveAsDocument () : boolean {
      return getVariableValue("saveAsDocument", 0) as java.lang.Boolean
    }
    
    property set saveAsDocument ($arg :  boolean) {
      setVariableValue("saveAsDocument", 0, $arg)
    }
    
    property get showBCC () : boolean {
      return getVariableValue("showBCC", 0) as java.lang.Boolean
    }
    
    property set showBCC ($arg :  boolean) {
      setVariableValue("showBCC", 0, $arg)
    }
    
    property get showCC () : boolean {
      return getVariableValue("showCC", 0) as java.lang.Boolean
    }
    
    property set showCC ($arg :  boolean) {
      setVariableValue("showCC", 0, $arg)
    }
    
    property get symbolTable () : java.util.Map<String, Object> {
      return getRequireValue("symbolTable", 0) as java.util.Map<String, Object>
    }
    
    property set symbolTable ($arg :  java.util.Map<String, Object>) {
      setRequireValue("symbolTable", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/email/CreateEmailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CreateEmailScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Document_Cell) at CreateEmailScreen.pcf: line 197, column 50
    function defaultSetter_65 (__VALUE_TO_SET :  java.lang.Object) : void {
      attachedDocument.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=Document_Cell) at CreateEmailScreen.pcf: line 197, column 50
    function valueRoot_66 () : java.lang.Object {
      return attachedDocument
    }
    
    // 'value' attribute on TextCell (id=Document_Cell) at CreateEmailScreen.pcf: line 197, column 50
    function value_64 () : java.lang.String {
      return attachedDocument.Name
    }
    
    property get attachedDocument () : entity.Document {
      return getIteratedValue(1) as entity.Document
    }
    
    
  }
  
  
}