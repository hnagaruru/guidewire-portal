package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/messaging/MessageResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MessageResultsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/messaging/MessageResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends MessageResultsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'condition' attribute on ToolbarFlag at MessageResultsLV.pcf: line 23, column 34
    function condition_4 () : java.lang.Boolean {
      return message.canRetry()
    }
    
    // 'value' attribute on TextCell (id=Policy_Cell) at MessageResultsLV.pcf: line 44, column 41
    function valueRoot_12 () : java.lang.Object {
      return message.PolicyPeriod
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at MessageResultsLV.pcf: line 51, column 52
    function valueRoot_15 () : java.lang.Object {
      return message.PolicyPeriod.Policy
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at MessageResultsLV.pcf: line 64, column 42
    function valueRoot_21 () : java.lang.Object {
      return message
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at MessageResultsLV.pcf: line 30, column 41
    function valueRoot_6 () : java.lang.Object {
      return message.PolicyPeriod.Job
    }
    
    // 'value' attribute on TextCell (id=Policy_Cell) at MessageResultsLV.pcf: line 44, column 41
    function value_11 () : java.lang.String {
      return message.PolicyPeriod.PolicyNumberDisplayString
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at MessageResultsLV.pcf: line 51, column 52
    function value_14 () : gw.api.productmodel.Product {
      return message.PolicyPeriod.Policy.Product
    }
    
    // 'value' attribute on TextCell (id=PrimaryNamedInsured_Cell) at MessageResultsLV.pcf: line 58, column 41
    function value_17 () : java.lang.String {
      return message.PolicyPeriod.PrimaryInsuredName
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at MessageResultsLV.pcf: line 64, column 42
    function value_20 () : java.lang.Integer {
      return message.Status
    }
    
    // 'value' attribute on TextCell (id=Error_Cell) at MessageResultsLV.pcf: line 70, column 41
    function value_23 () : java.lang.String {
      return message.ErrorDescription
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at MessageResultsLV.pcf: line 30, column 41
    function value_5 () : java.lang.String {
      return message.PolicyPeriod.Job.JobNumber
    }
    
    // 'value' attribute on TextCell (id=JobType_Cell) at MessageResultsLV.pcf: line 37, column 41
    function value_8 () : java.lang.String {
      return message.PolicyPeriod.Job.DisplayType
    }
    
    property get message () : entity.Message {
      return getIteratedValue(1) as entity.Message
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/messaging/MessageResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MessageResultsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at MessageResultsLV.pcf: line 30, column 41
    function sortValue_0 (message :  entity.Message) : java.lang.Object {
      return message.PolicyPeriod.Job.JobNumber
    }
    
    // 'sortBy' attribute on TextCell (id=Policy_Cell) at MessageResultsLV.pcf: line 44, column 41
    function sortValue_1 (message :  entity.Message) : java.lang.Object {
      return message.PolicyPeriod.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at MessageResultsLV.pcf: line 64, column 42
    function sortValue_2 (message :  entity.Message) : java.lang.Object {
      return message.Status
    }
    
    // 'value' attribute on TextCell (id=Error_Cell) at MessageResultsLV.pcf: line 70, column 41
    function sortValue_3 (message :  entity.Message) : java.lang.Object {
      return message.ErrorDescription
    }
    
    // 'value' attribute on RowIterator at MessageResultsLV.pcf: line 20, column 74
    function value_26 () : gw.api.database.IQueryBeanResult<entity.Message> {
      return messageQuery
    }
    
    property get messageQuery () : gw.api.database.IQueryBeanResult<Message> {
      return getRequireValue("messageQuery", 0) as gw.api.database.IQueryBeanResult<Message>
    }
    
    property set messageQuery ($arg :  gw.api.database.IQueryBeanResult<Message>) {
      setRequireValue("messageQuery", 0, $arg)
    }
    
    
  }
  
  
}