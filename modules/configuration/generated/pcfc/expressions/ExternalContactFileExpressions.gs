package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contactfile/ExternalContactFile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ExternalContactFileExpressions {
  @javax.annotation.Generated("config/web/pcf/contactfile/ExternalContactFile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ExternalContactFileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (contactSearchResult :  gw.plugin.contact.ContactResult) : int {
      return 0
    }
    
    // 'location' attribute on LocationGroup (id=ExternalContactFile) at ExternalContactFile.pcf: line 20, column 21
    function action_1 () : void {
      pcf.ExternalContactFile_Details.go(contactSearchResult)
    }
    
    // 'location' attribute on LocationGroup (id=ExternalContactFile) at ExternalContactFile.pcf: line 20, column 21
    function action_dest_2 () : pcf.api.Destination {
      return pcf.ExternalContactFile_Details.createDestination(contactSearchResult)
    }
    
    // LocationGroup (id=ExternalContactFile) at ExternalContactFile.pcf: line 10, column 110
    static function firstVisitableChildDestinationMethod_9 (contactSearchResult :  gw.plugin.contact.ContactResult) : pcf.api.Destination {
      var dest : pcf.api.Destination
      dest = pcf.ExternalContactFile_Details.createDestination(contactSearchResult)
      if (dest.canVisitSelf()) {
        return dest
      }
      return null
    }
    
    // 'initialValue' attribute on Variable at ExternalContactFile.pcf: line 16, column 47
    function initialValue_0 () : gw.plugin.contact.ContactResult {
      return contactSearchResult
    }
    
    // 'menuActions' attribute on LocationGroup (id=ExternalContactFile) at ExternalContactFile.pcf: line 10, column 110
    function menuActions_onEnter_3 (def :  pcf.ExternalContactFileMenuActions) : void {
      def.onEnter(contactSearchResult)
    }
    
    // 'menuActions' attribute on LocationGroup (id=ExternalContactFile) at ExternalContactFile.pcf: line 10, column 110
    function menuActions_refreshVariables_4 (def :  pcf.ExternalContactFileMenuActions) : void {
      def.refreshVariables(contactSearchResult)
    }
    
    // 'parent' attribute on LocationGroup (id=ExternalContactFile) at ExternalContactFile.pcf: line 10, column 110
    static function parent_5 (contactSearchResult :  gw.plugin.contact.ContactResult) : pcf.api.Destination {
      return pcf.ContactForward.createDestination()
    }
    
    // 'tabBar' attribute on LocationGroup (id=ExternalContactFile) at ExternalContactFile.pcf: line 10, column 110
    function tabBar_onEnter_6 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on LocationGroup (id=ExternalContactFile) at ExternalContactFile.pcf: line 10, column 110
    function tabBar_refreshVariables_7 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    // 'title' attribute on LocationGroup (id=ExternalContactFile) at ExternalContactFile.pcf: line 10, column 110
    static function title_8 (contactSearchResult :  gw.plugin.contact.ContactResult) : java.lang.Object {
      return DisplayKey.get("Web.ContactFile.LocationGroup.Title", contactSearchResult.DisplayName)
    }
    
    override property get CurrentLocation () : pcf.ExternalContactFile {
      return super.CurrentLocation as pcf.ExternalContactFile
    }
    
    property get contactSearchResult () : gw.plugin.contact.ContactResult {
      return getVariableValue("contactSearchResult", 0) as gw.plugin.contact.ContactResult
    }
    
    property set contactSearchResult ($arg :  gw.plugin.contact.ContactResult) {
      setVariableValue("contactSearchResult", 0, $arg)
    }
    
    
  }
  
  
}