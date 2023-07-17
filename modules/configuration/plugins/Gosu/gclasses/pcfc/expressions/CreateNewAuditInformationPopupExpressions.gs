package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses java.lang.Exception
@javax.annotation.Generated("config/web/pcf/policyfile/CreateNewAuditInformationPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CreateNewAuditInformationPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/CreateNewAuditInformationPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CreateNewAuditInformationPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=UpdateButton) at CreateNewAuditInformationPopup.pcf: line 52, column 81
    function action_8 () : void {
      scheduleNewAudit()
    }
    
    // 'value' attribute on RangeInput (id=AuditTypeList_Input) at CreateNewAuditInformationPopup.pcf: line 72, column 57
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectedType = (__VALUE_TO_SET as typekey.AuditScheduleType)
    }
    
    // 'value' attribute on DateInput (id=AuditStartDate_Input) at CreateNewAuditInformationPopup.pcf: line 77, column 37
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      auditStartDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=AuditEndDate_Input) at CreateNewAuditInformationPopup.pcf: line 82, column 35
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      auditEndDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=ProcessStartDate_Input) at CreateNewAuditInformationPopup.pcf: line 87, column 39
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      processStartDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=DueDate_Input) at CreateNewAuditInformationPopup.pcf: line 92, column 30
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      dueDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=AuditMethodList_Input) at CreateNewAuditInformationPopup.pcf: line 99, column 46
    function defaultSetter_39 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectedMethod = (__VALUE_TO_SET as typekey.AuditMethod)
    }
    
    // 'editable' attribute on DateInput (id=AuditStartDate_Input) at CreateNewAuditInformationPopup.pcf: line 77, column 37
    function editable_22 () : java.lang.Boolean {
      return selectedType == TC_PREMIUMREPORT
    }
    
    // 'initialValue' attribute on Variable at CreateNewAuditInformationPopup.pcf: line 18, column 45
    function initialValue_0 () : List<AuditScheduleType> {
      return policyPeriod.auditTypesAvailableToAdd()
    }
    
    // 'initialValue' attribute on Variable at CreateNewAuditInformationPopup.pcf: line 22, column 33
    function initialValue_1 () : AuditScheduleType {
      return availableAuditTypes.first()
    }
    
    // 'initialValue' attribute on Variable at CreateNewAuditInformationPopup.pcf: line 26, column 42
    function initialValue_2 () : List<java.util.Date> {
      return policyPeriod.suggestedAuditDateRange(selectedType)
    }
    
    // 'initialValue' attribute on Variable at CreateNewAuditInformationPopup.pcf: line 30, column 30
    function initialValue_3 () : java.util.Date {
      return suggestedDateRange.first()
    }
    
    // 'initialValue' attribute on Variable at CreateNewAuditInformationPopup.pcf: line 34, column 30
    function initialValue_4 () : java.util.Date {
      return suggestedDateRange.last()
    }
    
    // 'initialValue' attribute on Variable at CreateNewAuditInformationPopup.pcf: line 38, column 30
    function initialValue_5 () : java.util.Date {
      return auditEndDate
    }
    
    // 'initialValue' attribute on Variable at CreateNewAuditInformationPopup.pcf: line 42, column 30
    function initialValue_6 () : java.util.Date {
      return auditEndDate.addMonths(1)
    }
    
    // 'initialValue' attribute on Variable at CreateNewAuditInformationPopup.pcf: line 46, column 27
    function initialValue_7 () : AuditMethod {
      return null
    }
    
    // EditButtons at CreateNewAuditInformationPopup.pcf: line 55, column 34
    function label_9 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'valueRange' attribute on RangeInput (id=AuditTypeList_Input) at CreateNewAuditInformationPopup.pcf: line 72, column 57
    function valueRange_17 () : java.lang.Object {
      return availableAuditTypes
    }
    
    // 'value' attribute on TypeKeyInput (id=AuditTypeReadOnly_Input) at CreateNewAuditInformationPopup.pcf: line 64, column 55
    function value_11 () : typekey.AuditScheduleType {
      return selectedType
    }
    
    // 'value' attribute on DateInput (id=AuditStartDate_Input) at CreateNewAuditInformationPopup.pcf: line 77, column 37
    function value_23 () : java.util.Date {
      return auditStartDate
    }
    
    // 'value' attribute on DateInput (id=ProcessStartDate_Input) at CreateNewAuditInformationPopup.pcf: line 87, column 39
    function value_32 () : java.util.Date {
      return processStartDate
    }
    
    // 'value' attribute on DateInput (id=DueDate_Input) at CreateNewAuditInformationPopup.pcf: line 92, column 30
    function value_35 () : java.util.Date {
      return dueDate
    }
    
    // 'value' attribute on TypeKeyInput (id=AuditMethodList_Input) at CreateNewAuditInformationPopup.pcf: line 99, column 46
    function value_38 () : typekey.AuditMethod {
      return selectedMethod
    }
    
    // 'valueRange' attribute on RangeInput (id=AuditTypeList_Input) at CreateNewAuditInformationPopup.pcf: line 72, column 57
    function verifyValueRangeIsAllowedType_18 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=AuditTypeList_Input) at CreateNewAuditInformationPopup.pcf: line 72, column 57
    function verifyValueRangeIsAllowedType_18 ($$arg :  typekey.AuditScheduleType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=AuditTypeList_Input) at CreateNewAuditInformationPopup.pcf: line 72, column 57
    function verifyValueRange_19 () : void {
      var __valueRangeArg = availableAuditTypes
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_18(__valueRangeArg)
    }
    
    // 'visible' attribute on TypeKeyInput (id=AuditTypeReadOnly_Input) at CreateNewAuditInformationPopup.pcf: line 64, column 55
    function visible_10 () : java.lang.Boolean {
      return availableAuditTypes.Count == 1
    }
    
    // 'visible' attribute on RangeInput (id=AuditTypeList_Input) at CreateNewAuditInformationPopup.pcf: line 72, column 57
    function visible_14 () : java.lang.Boolean {
      return availableAuditTypes.Count > 1
    }
    
    override property get CurrentLocation () : pcf.CreateNewAuditInformationPopup {
      return super.CurrentLocation as pcf.CreateNewAuditInformationPopup
    }
    
    property get auditEndDate () : java.util.Date {
      return getVariableValue("auditEndDate", 0) as java.util.Date
    }
    
    property set auditEndDate ($arg :  java.util.Date) {
      setVariableValue("auditEndDate", 0, $arg)
    }
    
    property get auditStartDate () : java.util.Date {
      return getVariableValue("auditStartDate", 0) as java.util.Date
    }
    
    property set auditStartDate ($arg :  java.util.Date) {
      setVariableValue("auditStartDate", 0, $arg)
    }
    
    property get availableAuditTypes () : List<AuditScheduleType> {
      return getVariableValue("availableAuditTypes", 0) as List<AuditScheduleType>
    }
    
    property set availableAuditTypes ($arg :  List<AuditScheduleType>) {
      setVariableValue("availableAuditTypes", 0, $arg)
    }
    
    property get dueDate () : java.util.Date {
      return getVariableValue("dueDate", 0) as java.util.Date
    }
    
    property set dueDate ($arg :  java.util.Date) {
      setVariableValue("dueDate", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    property get processStartDate () : java.util.Date {
      return getVariableValue("processStartDate", 0) as java.util.Date
    }
    
    property set processStartDate ($arg :  java.util.Date) {
      setVariableValue("processStartDate", 0, $arg)
    }
    
    property get selectedMethod () : AuditMethod {
      return getVariableValue("selectedMethod", 0) as AuditMethod
    }
    
    property set selectedMethod ($arg :  AuditMethod) {
      setVariableValue("selectedMethod", 0, $arg)
    }
    
    property get selectedType () : AuditScheduleType {
      return getVariableValue("selectedType", 0) as AuditScheduleType
    }
    
    property set selectedType ($arg :  AuditScheduleType) {
      setVariableValue("selectedType", 0, $arg)
    }
    
    property get suggestedDateRange () : List<java.util.Date> {
      return getVariableValue("suggestedDateRange", 0) as List<java.util.Date>
    }
    
    property set suggestedDateRange ($arg :  List<java.util.Date>) {
      setVariableValue("suggestedDateRange", 0, $arg)
    }
    
    
    function scheduleNewAudit() {
      try {
        if (selectedType == TC_FINALAUDIT) {
          policyPeriod.FinalAuditOption = TC_YES
        }
        gw.job.audit.AuditScheduler.scheduleNewAudit(policyPeriod,
                                                     auditStartDate, auditEndDate,
                                                     processStartDate, dueDate,
                                                     selectedType, selectedMethod,
                                                     selectedType == TC_PREMIUMREPORT)
        CurrentLocation.commit()
      }
      catch (e : Exception) {
        throw new gw.api.util.DisplayableException(e.Message)
      }
    }
    
    
  }
  
  
}