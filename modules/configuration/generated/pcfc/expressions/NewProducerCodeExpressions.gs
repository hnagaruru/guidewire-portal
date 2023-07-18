package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/NewProducerCode.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewProducerCodeExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/NewProducerCode.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewProducerCodeExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'afterCancel' attribute on Page (id=NewProducerCode) at NewProducerCode.pcf: line 17, column 67
    function afterCancel_4 () : void {
      Admin.go()
    }
    
    // 'afterCancel' attribute on Page (id=NewProducerCode) at NewProducerCode.pcf: line 17, column 67
    function afterCancel_dest_5 () : pcf.api.Destination {
      return pcf.Admin.createDestination()
    }
    
    // 'afterCommit' attribute on Page (id=NewProducerCode) at NewProducerCode.pcf: line 17, column 67
    function afterCommit_6 (TopLocation :  pcf.api.Location) : void {
      AdminProducerCodeDetail.go(producerCode)
    }
    
    // 'afterEnter' attribute on Page (id=NewProducerCode) at NewProducerCode.pcf: line 17, column 67
    function afterEnter_7 () : void {
      producerCode.syncWithBillingSystem()
    }
    
    // 'beforeCancel' attribute on Page (id=NewProducerCode) at NewProducerCode.pcf: line 17, column 67
    function beforeCancel_8 () : void {
      producerCodeUIHelper.resetPlans()
    }
    
    // 'beforeCommit' attribute on Page (id=NewProducerCode) at NewProducerCode.pcf: line 17, column 67
    function beforeCommit_9 (pickedValue :  java.lang.Object) : void {
      producerCodeUIHelper.createCommissionPlans()
    }
    
    // 'canVisit' attribute on Page (id=NewProducerCode) at NewProducerCode.pcf: line 17, column 67
    static function canVisit_10 () : java.lang.Boolean {
      return perm.ProducerCode.create
    }
    
    // 'def' attribute on ScreenRef at NewProducerCode.pcf: line 29, column 75
    function def_onEnter_2 (def :  pcf.ProducerCodeDetailScreen) : void {
      def.onEnter(producerCode, producerCodeUIHelper)
    }
    
    // 'def' attribute on ScreenRef at NewProducerCode.pcf: line 29, column 75
    function def_refreshVariables_3 (def :  pcf.ProducerCodeDetailScreen) : void {
      def.refreshVariables(producerCode, producerCodeUIHelper)
    }
    
    // 'initialValue' attribute on Variable at NewProducerCode.pcf: line 23, column 28
    function initialValue_0 () : ProducerCode {
      return new ProducerCode()
    }
    
    // 'initialValue' attribute on Variable at NewProducerCode.pcf: line 27, column 49
    function initialValue_1 () : gw.web.admin.ProducerCodeUIHelper {
      return new gw.web.admin.ProducerCodeUIHelper(producerCode)
    }
    
    // 'parent' attribute on Page (id=NewProducerCode) at NewProducerCode.pcf: line 17, column 67
    static function parent_11 () : pcf.api.Destination {
      return pcf.Admin.createDestination(User.util.CurrentUser.Organization)
    }
    
    override property get CurrentLocation () : pcf.NewProducerCode {
      return super.CurrentLocation as pcf.NewProducerCode
    }
    
    property get producerCode () : ProducerCode {
      return getVariableValue("producerCode", 0) as ProducerCode
    }
    
    property set producerCode ($arg :  ProducerCode) {
      setVariableValue("producerCode", 0, $arg)
    }
    
    property get producerCodeUIHelper () : gw.web.admin.ProducerCodeUIHelper {
      return getVariableValue("producerCodeUIHelper", 0) as gw.web.admin.ProducerCodeUIHelper
    }
    
    property set producerCodeUIHelper ($arg :  gw.web.admin.ProducerCodeUIHelper) {
      setVariableValue("producerCodeUIHelper", 0, $arg)
    }
    
    
  }
  
  
}