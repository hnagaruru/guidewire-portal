package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/AdminProducerCodeDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AdminProducerCodeDetailExpressions {
  @javax.annotation.Generated("config/web/pcf/search/AdminProducerCodeDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AdminProducerCodeDetailExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (producerCode :  ProducerCode) : int {
      return 0
    }
    
    // 'afterEnter' attribute on Page (id=AdminProducerCodeDetail) at AdminProducerCodeDetail.pcf: line 13, column 79
    function afterEnter_3 () : void {
      producerCode.syncWithBillingSystem(); producerCodeUIHelper.resetPlans()
    }
    
    // 'beforeCancel' attribute on Page (id=AdminProducerCodeDetail) at AdminProducerCodeDetail.pcf: line 13, column 79
    function beforeCancel_4 () : void {
      producerCodeUIHelper.resetPlans()
    }
    
    // 'beforeCommit' attribute on Page (id=AdminProducerCodeDetail) at AdminProducerCodeDetail.pcf: line 13, column 79
    function beforeCommit_5 (pickedValue :  java.lang.Object) : void {
      producerCodeUIHelper.createCommissionPlans()
    }
    
    // 'canEdit' attribute on Page (id=AdminProducerCodeDetail) at AdminProducerCodeDetail.pcf: line 13, column 79
    function canEdit_6 () : java.lang.Boolean {
      return perm.System.prodcodeeditbasic and User.util.CurrentUser.isInternalUserOrBelongsToOrganization(producerCode.Organization)
    }
    
    // 'canVisit' attribute on Page (id=AdminProducerCodeDetail) at AdminProducerCodeDetail.pcf: line 13, column 79
    static function canVisit_7 (producerCode :  ProducerCode) : java.lang.Boolean {
      return perm.System.prodcodeviewbasic and User.util.CurrentUser.isInternalUserOrBelongsToOrganization(producerCode.Organization)
    }
    
    // 'def' attribute on ScreenRef at AdminProducerCodeDetail.pcf: line 24, column 75
    function def_onEnter_1 (def :  pcf.ProducerCodeDetailScreen) : void {
      def.onEnter(producerCode, producerCodeUIHelper)
    }
    
    // 'def' attribute on ScreenRef at AdminProducerCodeDetail.pcf: line 24, column 75
    function def_refreshVariables_2 (def :  pcf.ProducerCodeDetailScreen) : void {
      def.refreshVariables(producerCode, producerCodeUIHelper)
    }
    
    // 'initialValue' attribute on Variable at AdminProducerCodeDetail.pcf: line 22, column 49
    function initialValue_0 () : gw.web.admin.ProducerCodeUIHelper {
      return new gw.web.admin.ProducerCodeUIHelper(producerCode)
    }
    
    // 'parent' attribute on Page (id=AdminProducerCodeDetail) at AdminProducerCodeDetail.pcf: line 13, column 79
    static function parent_8 (producerCode :  ProducerCode) : pcf.api.Destination {
      return pcf.AdminProducerCodeSearch.createDestination()
    }
    
    // 'title' attribute on Page (id=AdminProducerCodeDetail) at AdminProducerCodeDetail.pcf: line 13, column 79
    static function title_9 (producerCode :  ProducerCode) : java.lang.Object {
      return DisplayKey.get("Web.ProducerCode.Detail", producerCode)
    }
    
    override property get CurrentLocation () : pcf.AdminProducerCodeDetail {
      return super.CurrentLocation as pcf.AdminProducerCodeDetail
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