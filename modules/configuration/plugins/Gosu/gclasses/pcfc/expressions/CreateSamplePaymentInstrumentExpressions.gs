package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/demopaymentsystem/CreateSamplePaymentInstrument.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CreateSamplePaymentInstrumentExpressions {
  @javax.annotation.Generated("config/web/pcf/demopaymentsystem/CreateSamplePaymentInstrument.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CreateSamplePaymentInstrumentExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (returnURL :  String, jobNumber :  String, accountNumber :  String, accountHolderName :  String, add1 :  String, add2 :  String, city :  String, state :  String, zip :  String) : int {
      return 0
    }
    
    // 'initialValue' attribute on Variable at CreateSamplePaymentInstrument.pcf: line 45, column 22
    function initialValue_0 () : String {
      return java.util.Date.CurrentDate.Time as String
    }
    
    // 'parent' attribute on Page (id=CreateSamplePaymentInstrument) at CreateSamplePaymentInstrument.pcf: line 12, column 64
    static function parent_22 (accountHolderName :  String, accountNumber :  String, add1 :  String, add2 :  String, city :  String, jobNumber :  String, returnURL :  String, state :  String, zip :  String) : pcf.api.Destination {
      return pcf.WizardExit.createDestination()
    }
    
    override property get CurrentLocation () : pcf.CreateSamplePaymentInstrument {
      return super.CurrentLocation as pcf.CreateSamplePaymentInstrument
    }
    
    property get accountHolderName () : String {
      return getVariableValue("accountHolderName", 0) as String
    }
    
    property set accountHolderName ($arg :  String) {
      setVariableValue("accountHolderName", 0, $arg)
    }
    
    property get accountNumber () : String {
      return getVariableValue("accountNumber", 0) as String
    }
    
    property set accountNumber ($arg :  String) {
      setVariableValue("accountNumber", 0, $arg)
    }
    
    property get add1 () : String {
      return getVariableValue("add1", 0) as String
    }
    
    property set add1 ($arg :  String) {
      setVariableValue("add1", 0, $arg)
    }
    
    property get add2 () : String {
      return getVariableValue("add2", 0) as String
    }
    
    property set add2 ($arg :  String) {
      setVariableValue("add2", 0, $arg)
    }
    
    property get city () : String {
      return getVariableValue("city", 0) as String
    }
    
    property set city ($arg :  String) {
      setVariableValue("city", 0, $arg)
    }
    
    property get jobNumber () : String {
      return getVariableValue("jobNumber", 0) as String
    }
    
    property set jobNumber ($arg :  String) {
      setVariableValue("jobNumber", 0, $arg)
    }
    
    property get returnURL () : String {
      return getVariableValue("returnURL", 0) as String
    }
    
    property set returnURL ($arg :  String) {
      setVariableValue("returnURL", 0, $arg)
    }
    
    property get state () : String {
      return getVariableValue("state", 0) as String
    }
    
    property set state ($arg :  String) {
      setVariableValue("state", 0, $arg)
    }
    
    property get token () : String {
      return getVariableValue("token", 0) as String
    }
    
    property set token ($arg :  String) {
      setVariableValue("token", 0, $arg)
    }
    
    property get zip () : String {
      return getVariableValue("zip", 0) as String
    }
    
    property set zip ($arg :  String) {
      setVariableValue("zip", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/demopaymentsystem/CreateSamplePaymentInstrument.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DetailViewPanelExpressionsImpl extends ScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at CreateSamplePaymentInstrument.pcf: line 87, column 40
    function def_onEnter_15 (def :  pcf.PaymentMethodInputSet_ach) : void {
      def.onEnter(accountHolderName, address)
    }
    
    // 'def' attribute on InputSetRef at CreateSamplePaymentInstrument.pcf: line 87, column 40
    function def_onEnter_17 (def :  pcf.PaymentMethodInputSet_creditcard) : void {
      def.onEnter(accountHolderName, address)
    }
    
    // 'def' attribute on InputSetRef at CreateSamplePaymentInstrument.pcf: line 87, column 40
    function def_onEnter_19 (def :  pcf.PaymentMethodInputSet_default) : void {
      def.onEnter(accountHolderName, address)
    }
    
    // 'def' attribute on InputSetRef at CreateSamplePaymentInstrument.pcf: line 87, column 40
    function def_refreshVariables_16 (def :  pcf.PaymentMethodInputSet_ach) : void {
      def.refreshVariables(accountHolderName, address)
    }
    
    // 'def' attribute on InputSetRef at CreateSamplePaymentInstrument.pcf: line 87, column 40
    function def_refreshVariables_18 (def :  pcf.PaymentMethodInputSet_creditcard) : void {
      def.refreshVariables(accountHolderName, address)
    }
    
    // 'def' attribute on InputSetRef at CreateSamplePaymentInstrument.pcf: line 87, column 40
    function def_refreshVariables_20 (def :  pcf.PaymentMethodInputSet_default) : void {
      def.refreshVariables(accountHolderName, address)
    }
    
    // 'value' attribute on RangeInput (id=paymentMethod_Input) at CreateSamplePaymentInstrument.pcf: line 82, column 54
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      paymentMethod = (__VALUE_TO_SET as typekey.AccountPaymentMethod)
    }
    
    // 'initialValue' attribute on Variable at CreateSamplePaymentInstrument.pcf: line 68, column 27
    function initialValue_6 () : Address {
      return gw.pcf.demopaymentsystem.CreateSamplePaymentInstrumentHelper.initAddress(add1, add2, city, state, zip)
    }
    
    // 'mode' attribute on InputSetRef at CreateSamplePaymentInstrument.pcf: line 87, column 40
    function mode_21 () : java.lang.Object {
      return paymentMethod.Code
    }
    
    // 'valueRange' attribute on RangeInput (id=paymentMethod_Input) at CreateSamplePaymentInstrument.pcf: line 82, column 54
    function valueRange_11 () : java.lang.Object {
      return {AccountPaymentMethod.TC_ACH, AccountPaymentMethod.TC_CREDITCARD}
    }
    
    // 'value' attribute on TextInput (id=jobNumber_Input) at CreateSamplePaymentInstrument.pcf: line 74, column 32
    function value_7 () : java.lang.String {
      return jobNumber
    }
    
    // 'value' attribute on RangeInput (id=paymentMethod_Input) at CreateSamplePaymentInstrument.pcf: line 82, column 54
    function value_9 () : typekey.AccountPaymentMethod {
      return paymentMethod
    }
    
    // 'valueRange' attribute on RangeInput (id=paymentMethod_Input) at CreateSamplePaymentInstrument.pcf: line 82, column 54
    function verifyValueRangeIsAllowedType_12 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=paymentMethod_Input) at CreateSamplePaymentInstrument.pcf: line 82, column 54
    function verifyValueRangeIsAllowedType_12 ($$arg :  typekey.AccountPaymentMethod[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=paymentMethod_Input) at CreateSamplePaymentInstrument.pcf: line 82, column 54
    function verifyValueRange_13 () : void {
      var __valueRangeArg = {AccountPaymentMethod.TC_ACH, AccountPaymentMethod.TC_CREDITCARD}
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_12(__valueRangeArg)
    }
    
    property get address () : Address {
      return getVariableValue("address", 2) as Address
    }
    
    property set address ($arg :  Address) {
      setVariableValue("address", 2, $arg)
    }
    
    property get creditCardExpDate () : java.util.Date {
      return getVariableValue("creditCardExpDate", 2) as java.util.Date
    }
    
    property set creditCardExpDate ($arg :  java.util.Date) {
      setVariableValue("creditCardExpDate", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/demopaymentsystem/CreateSamplePaymentInstrument.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ScreenExpressionsImpl extends CreateSamplePaymentInstrumentExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=OKButton) at CreateSamplePaymentInstrument.pcf: line 55, column 82
    function action_2 () : void {
      FinishPaymentInstrument.push(returnURL, jobNumber, accountNumber, paymentMethod.Code, token)
    }
    
    // 'action' attribute on ToolbarButton (id=CancelButton) at CreateSamplePaymentInstrument.pcf: line 59, column 86
    function action_4 () : void {
      FinishPaymentInstrument.push(returnURL, jobNumber, accountNumber, "", "")
    }
    
    // 'action' attribute on ToolbarButton (id=OKButton) at CreateSamplePaymentInstrument.pcf: line 55, column 82
    function action_dest_3 () : pcf.api.Destination {
      return pcf.FinishPaymentInstrument.createDestination(returnURL, jobNumber, accountNumber, paymentMethod.Code, token)
    }
    
    // 'action' attribute on ToolbarButton (id=CancelButton) at CreateSamplePaymentInstrument.pcf: line 59, column 86
    function action_dest_5 () : pcf.api.Destination {
      return pcf.FinishPaymentInstrument.createDestination(returnURL, jobNumber, accountNumber, "", "")
    }
    
    // 'initialValue' attribute on Variable at CreateSamplePaymentInstrument.pcf: line 50, column 46
    function initialValue_1 () : typekey.AccountPaymentMethod {
      return AccountPaymentMethod.TC_CREDITCARD
    }
    
    property get paymentMethod () : typekey.AccountPaymentMethod {
      return getVariableValue("paymentMethod", 1) as typekey.AccountPaymentMethod
    }
    
    property set paymentMethod ($arg :  typekey.AccountPaymentMethod) {
      setVariableValue("paymentMethod", 1, $arg)
    }
    
    
  }
  
  
}