package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/messaging/MessageSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MessageSearchDVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/messaging/MessageSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MessageSearchDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at MessageSearchDV.pcf: line 61, column 41
    function def_onEnter_37 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at MessageSearchDV.pcf: line 61, column 41
    function def_refreshVariables_38 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on TypeKeyInput (id=JobType_Input) at MessageSearchDV.pcf: line 28, column 34
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.JobType = (__VALUE_TO_SET as typekey.Job)
    }
    
    // 'value' attribute on TextInput (id=JobNumber_Input) at MessageSearchDV.pcf: line 33, column 43
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.JobNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=ProductCode_Input) at MessageSearchDV.pcf: line 41, column 50
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Product = (__VALUE_TO_SET as gw.api.productmodel.Product)
    }
    
    // 'value' attribute on RangeInput (id=Destination_Input) at MessageSearchDV.pcf: line 22, column 40
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Destination = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at MessageSearchDV.pcf: line 46, column 46
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.PolicyNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=AccountNumber_Input) at MessageSearchDV.pcf: line 51, column 47
    function defaultSetter_30 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.AccountNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=MessageStatus_Input) at MessageSearchDV.pcf: line 57, column 50
    function defaultSetter_34 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.MessageStatus = (__VALUE_TO_SET as typekey.MessageSearchStatus)
    }
    
    // 'initialValue' attribute on Variable at MessageSearchDV.pcf: line 13, column 52
    function initialValue_0 () : gw.pcf.UniqueProductDisplayNameMaker {
      return new gw.pcf.UniqueProductDisplayNameMaker()
    }
    
    // 'optionLabel' attribute on RangeInput (id=ProductCode_Input) at MessageSearchDV.pcf: line 41, column 50
    function optionLabel_20 (VALUE :  gw.api.productmodel.Product) : java.lang.String {
      return uniqueProductDisplayNameMaker.make(VALUE)
    }
    
    // 'optionLabel' attribute on RangeInput (id=Destination_Input) at MessageSearchDV.pcf: line 22, column 40
    function optionLabel_4 (VALUE :  java.lang.Integer) : java.lang.String {
      return gw.api.admin.PCMessagingUtil.getDestinationName(VALUE)
    }
    
    // 'valueRange' attribute on RangeInput (id=ProductCode_Input) at MessageSearchDV.pcf: line 41, column 50
    function valueRange_21 () : java.lang.Object {
      return uniqueProductDisplayNameMaker.Products
    }
    
    // 'valueRange' attribute on RangeInput (id=Destination_Input) at MessageSearchDV.pcf: line 22, column 40
    function valueRange_5 () : java.lang.Object {
      return gw.api.admin.PCMessagingUtil.getDestinationIDs()
    }
    
    // 'value' attribute on RangeInput (id=Destination_Input) at MessageSearchDV.pcf: line 22, column 40
    function valueRoot_3 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on RangeInput (id=Destination_Input) at MessageSearchDV.pcf: line 22, column 40
    function value_1 () : java.lang.Integer {
      return searchCriteria.Destination
    }
    
    // 'value' attribute on TextInput (id=JobNumber_Input) at MessageSearchDV.pcf: line 33, column 43
    function value_13 () : java.lang.String {
      return searchCriteria.JobNumber
    }
    
    // 'value' attribute on RangeInput (id=ProductCode_Input) at MessageSearchDV.pcf: line 41, column 50
    function value_17 () : gw.api.productmodel.Product {
      return searchCriteria.Product
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at MessageSearchDV.pcf: line 46, column 46
    function value_25 () : java.lang.String {
      return searchCriteria.PolicyNumber
    }
    
    // 'value' attribute on TextInput (id=AccountNumber_Input) at MessageSearchDV.pcf: line 51, column 47
    function value_29 () : java.lang.String {
      return searchCriteria.AccountNumber
    }
    
    // 'value' attribute on TypeKeyInput (id=MessageStatus_Input) at MessageSearchDV.pcf: line 57, column 50
    function value_33 () : typekey.MessageSearchStatus {
      return searchCriteria.MessageStatus
    }
    
    // 'value' attribute on TypeKeyInput (id=JobType_Input) at MessageSearchDV.pcf: line 28, column 34
    function value_9 () : typekey.Job {
      return searchCriteria.JobType
    }
    
    // 'valueRange' attribute on RangeInput (id=ProductCode_Input) at MessageSearchDV.pcf: line 41, column 50
    function verifyValueRangeIsAllowedType_22 ($$arg :  gw.api.productmodel.Product[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ProductCode_Input) at MessageSearchDV.pcf: line 41, column 50
    function verifyValueRangeIsAllowedType_22 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Destination_Input) at MessageSearchDV.pcf: line 22, column 40
    function verifyValueRangeIsAllowedType_6 ($$arg :  java.lang.Integer[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Destination_Input) at MessageSearchDV.pcf: line 22, column 40
    function verifyValueRangeIsAllowedType_6 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ProductCode_Input) at MessageSearchDV.pcf: line 41, column 50
    function verifyValueRange_23 () : void {
      var __valueRangeArg = uniqueProductDisplayNameMaker.Products
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_22(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Destination_Input) at MessageSearchDV.pcf: line 22, column 40
    function verifyValueRange_7 () : void {
      var __valueRangeArg = gw.api.admin.PCMessagingUtil.getDestinationIDs()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_6(__valueRangeArg)
    }
    
    property get searchCriteria () : gw.system.messaging.MessageSearchCriteria {
      return getRequireValue("searchCriteria", 0) as gw.system.messaging.MessageSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.system.messaging.MessageSearchCriteria) {
      setRequireValue("searchCriteria", 0, $arg)
    }
    
    property get uniqueProductDisplayNameMaker () : gw.pcf.UniqueProductDisplayNameMaker {
      return getVariableValue("uniqueProductDisplayNameMaker", 0) as gw.pcf.UniqueProductDisplayNameMaker
    }
    
    property set uniqueProductDisplayNameMaker ($arg :  gw.pcf.UniqueProductDisplayNameMaker) {
      setVariableValue("uniqueProductDisplayNameMaker", 0, $arg)
    }
    
    
  }
  
  
}